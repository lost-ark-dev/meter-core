import { createHash } from "crypto";
import { TypedEmitter } from "tiny-typed-emitter";
import type { MeterData } from "./data";
import { hitflag, stattype, triggersignaltype } from "./packets/generated/enums";
import type { StatusEffectData } from "./packets/generated/structures/StatusEffectData";
import { PartyTracker } from "./partytracker";
import { PCIdMapper } from "./pcidmapper";
import type { PKTStream } from "./pkt-stream";
import {
  StatusEffect,
  StatusEffectTargetType,
  StatusEffectBuffCategory,
  StatusEffectCategory,
  StatusEffectShowType,
  StatusTracker,
} from "./statustracker";

export const enum LineId {
  InitEnv = 1,
  PhaseTransition = 2,
  NewPC = 3,
  NewNpc = 4,
  Death = 5,
  SkillStart = 6,
  SkillStage = 7,
  Damage = 8,
  Heal = 9,
  Buff = 10,
  BuffRemove = 11,
  CounterAttack = 12,
  Line15 = 15, // TODO: rename
  Debug = 251,
  PacketDump = 252,
  Version = 253,
  Error = 254,
}

interface LegacyLoggerEvents {
  line: (line: string) => void;
  [LineId.InitEnv]: (playerId: bigint) => void;
  [LineId.PhaseTransition]: (phaseCode: number) => void;
  [LineId.NewPC]: (
    id: bigint,
    name: string,
    classId: number,
    className: string,
    level: number,
    gearLevel: number,
    currentHp: number,
    maxHp: number,
    characterId: bigint
  ) => void;
  [LineId.NewNpc]: (id: bigint, npcId: number, name: string, currentHp: number, maxHp: number) => void;
  [LineId.Death]: (id: bigint, name: string, killerId: bigint, killerName: string) => void;
  [LineId.SkillStart]: (id: bigint, name: string, skillId: number, skillName: string) => void;
  [LineId.SkillStage]: (id: bigint, name: string, skillId: number, skillName: string, skillStage: number) => void;
  [LineId.Damage]: (
    id: bigint,
    name: string,
    skillId: number,
    skillName: string,
    skillEffectId: number,
    skillEffect: string,
    targetId: bigint,
    targetName: string,
    damage: number,
    modifier: string,
    currentHp: number,
    maxHp: number,
    effectsOnTarget: (number | bigint)[][],
    effectsOnSource: (number | bigint)[][]
  ) => void;
  [LineId.Heal]: (id: bigint, name: string, healAmount: number, currentHp: number) => void;
  [LineId.Buff]: (
    id: bigint,
    name: string,
    buffId: number,
    buffName: string,
    sourceId: bigint,
    sourceName: string,
    shieldAmount: number
  ) => void;
  [LineId.BuffRemove]: (statusId: bigint, statusName: string, targetId: bigint, targetName: string) => void;
  [LineId.CounterAttack]: (id: bigint, name: string, targetId: bigint, targetName: string) => void;
  [LineId.Line15]: () => void;
}

export type LegacyLoggerSettings = {
  emitText?: boolean;
  emitLines?: boolean;
  emitObjects?: boolean;
};

export class LegacyLogger extends TypedEmitter<LegacyLoggerEvents> {
  #data: MeterData;
  emitText: boolean;
  emitLines: boolean;
  emitObjects: boolean;

  #encounters: Set<Encounter>;
  #currentEncounter: Encounter;
  #wasWipe: boolean;
  #wasKill: boolean;

  #localPlayer: Player;

  constructor(stream: PKTStream, data: MeterData, settings: LegacyLoggerSettings = {}) {
    super();
    this.#data = data;

    this.emitText = settings.emitText || true;
    this.emitLines = settings.emitLines || true;
    this.emitObjects = settings.emitObjects || false;

    this.#encounters = new Set();
    this.#currentEncounter = new Encounter();
    this.#wasWipe = false;
    this.#wasKill = false;

    this.#localPlayer = {
      entityId: 0n,
      entityType: EntityType.Player,
      name: "You",
      class: 0,
      gearLevel: 0,
      characterId: 0n,
    };

    stream
      .on("PKTAuthTokenResult", (pkt) => {})
      .on("PKTCounterAttackNotify", (pkt) => {
        if (this.#needEmit) {
          const parsed = pkt.parsed;
          if (!parsed) return;
          this.#buildLine(
            LineId.CounterAttack,
            parsed.SourceId,
            this.#getEntityName(parsed.SourceId),
            parsed.TargetId,
            this.#getEntityName(parsed.TargetId)
          );
        }
      })
      .on("PKTDeathNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        if (PartyTracker.getInstance().isEntityInParty(parsed.TargetId)) {
          const p = this.#currentEncounter.entities.get(parsed.TargetId);
          if (p?.name === this.#localPlayer.name) {
            StatusTracker.getInstance().RemoveLocalObject(parsed.TargetId);
          } else {
            const charId = PCIdMapper.getInstance().getCharacterId(parsed.TargetId);
            if (charId) StatusTracker.getInstance().RemovePartyObject(charId);
          }
        } else {
          StatusTracker.getInstance().RemoveLocalObject(parsed.TargetId);
        }
        if (this.#needEmit) {
          this.#buildLine(
            LineId.Death,
            parsed.TargetId,
            this.#getEntityName(parsed.TargetId),
            parsed.SourceId,
            this.#getEntityName(parsed.SourceId)
          );
        }
      })
      .on("PKTInitEnv", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        if (this.#localPlayer.entityId !== 0n)
          PartyTracker.getInstance().changeEntityId(this.#localPlayer.entityId, parsed.PlayerId);
        this.#currentEncounter = new Encounter();
        const player: Player = {
          entityId: parsed.PlayerId,
          entityType: EntityType.Player,
          name: this.#localPlayer.name,
          class: this.#localPlayer.class,
          gearLevel: this.#localPlayer.gearLevel,
          characterId: this.#localPlayer.characterId,
        };
        this.#localPlayer = player;
        this.#currentEncounter.entities.set(player.entityId, player);
        PCIdMapper.getInstance().clear();
        StatusTracker.getInstance().Clear();
        if (player.characterId !== 0n) PCIdMapper.getInstance().addMapping(player.characterId, player.entityId);
        if (this.#localPlayer && this.#localPlayer.characterId && this.#localPlayer.characterId > 0n)
          PartyTracker.getInstance().completeEntry(this.#localPlayer.characterId, parsed.PlayerId);
        // console.log("PKTInitEnv", this.#localPlayer);
        if (this.#needEmit) this.#buildLine(LineId.InitEnv, player.entityId);
      })
      .on("PKTInitPC", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#currentEncounter = new Encounter();
        const player: Player = {
          entityId: parsed.PlayerId,
          entityType: EntityType.Player,
          name: parsed.Name,
          class: parsed.ClassId,
          gearLevel: this.#u32tof32(parsed.GearLevel),
          characterId: parsed.CharacterId,
        };
        this.#localPlayer = player;
        // console.log("PKTInitPC", this.#localPlayer);
        this.#currentEncounter.entities.set(player.entityId, player);
        PCIdMapper.getInstance().addMapping(player.characterId, player.entityId);
        PartyTracker.getInstance().setOwnName(parsed.Name);
        PartyTracker.getInstance().completeEntry(player.characterId, parsed.PlayerId);
        const tracker = StatusTracker.getInstance();
        tracker.RemoveLocalObject(parsed.PlayerId);
        for (const se of parsed.statusEffectDatas) {
          const sourceEntity = this.#getSourceEntity(se.SourceId);
          tracker.RegisterStatusEffect(
            this.#buildStatusEffect(
              se,
              parsed.PlayerId,
              sourceEntity.entityId,
              StatusEffectTargetType.Local
            )
          );
        }

        if (this.#needEmit) {
          const statsMap = this.#getStatPairMap(pkt.parsed.statPair);
          this.#buildLine(
            LineId.NewPC,
            player.entityId,
            player.name,
            player.class,
            this.#data.getClassName(player.class),
            parsed.Level,
            player.gearLevel,
            Number(statsMap.get(stattype.hp)) || 0,
            Number(statsMap.get(stattype.max_hp)) || 0,
            player.characterId
          );
        }
      })
      .on("PKTNewNpc", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const npc: Npc = {
          entityId: parsed.NpcStruct.ObjectId,
          entityType: EntityType.Npc,
          name: this.#data.getNpcName(parsed.NpcStruct.TypeId),
          typeId: parsed.NpcStruct.TypeId,
        };
        this.#currentEncounter.entities.set(npc.entityId, npc);
        const tracker = StatusTracker.getInstance();
        tracker.RemoveLocalObject(parsed.NpcStruct.ObjectId);
        for (const se of parsed.NpcStruct.statusEffectDatas) {
          const sourceEntity = this.#getSourceEntity(se.SourceId);
          tracker.RegisterStatusEffect(
            this.#buildStatusEffect(
              se,
              parsed.NpcStruct.ObjectId,
              sourceEntity.entityId,
              StatusEffectTargetType.Local
            )
          );
        }
        if (this.#needEmit) {
          const statsMap = this.#getStatPairMap(parsed.NpcStruct.statPair);
          this.#buildLine(
            LineId.NewNpc,
            npc.entityId,
            npc.typeId,
            npc.name,
            Number(statsMap.get(stattype.hp)) || 0,
            Number(statsMap.get(stattype.max_hp)) || 0
          );
        }
      })
      .on("PKTNewNpcSummon", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const summon: Summon = {
          entityId: parsed.NpcData.ObjectId,
          entityType: EntityType.Summon,
          name: parsed.NpcData.ObjectId.toString(16),
          ownerId: parsed.OwnerId,
        };
        const tracker = StatusTracker.getInstance();
        tracker.RemoveLocalObject(parsed.NpcData.ObjectId);
        for (const se of parsed.NpcData.statusEffectDatas) {
          const sourceEntity = this.#getSourceEntity(se.SourceId);
          tracker.RegisterStatusEffect(
            this.#buildStatusEffect(
              se,
              parsed.NpcData.ObjectId,
              sourceEntity.entityId,
              StatusEffectTargetType.Local
            )
          );
        }
        if (this.#needEmit) {
          const owner = this.#currentEncounter.entities.get(parsed.OwnerId);
          if (owner && owner.entityType === EntityType.Npc) {
            // Consider npc summons as npcs. And log it (it'll be used for valtan ghost phase for ex)
            summon.name = this.#data.getNpcName(parsed.NpcData.TypeId);
            const statsMap = this.#getStatPairMap(parsed.NpcData.statPair);
            this.#buildLine(
              LineId.NewNpc,
              summon.entityId,
              parsed.NpcData.TypeId,
              summon.name,
              Number(statsMap.get(stattype.hp)) || 0,
              Number(statsMap.get(stattype.max_hp)) || 0
            );
          }
        }
        this.#currentEncounter.entities.set(summon.entityId, summon);
      })
      .on("PKTNewPC", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const player: Player = {
          entityId: parsed.PCStruct.PlayerId,
          entityType: EntityType.Player,
          name: parsed.PCStruct.Name,
          class: parsed.PCStruct.ClassId,
          gearLevel: this.#u32tof32(parsed.PCStruct.GearLevel),
          characterId: parsed.PCStruct.CharacterId,
        };
        this.#currentEncounter.entities.set(player.entityId, player);
        const oldEntityId = PCIdMapper.getInstance().getEntityId(player.characterId);
        if (oldEntityId) {
          PartyTracker.getInstance().changeEntityId(oldEntityId, parsed.PCStruct.PlayerId);
        }
        PCIdMapper.getInstance().addMapping(player.characterId, player.entityId);
        PartyTracker.getInstance().completeEntry(player.characterId, player.entityId);
        const tracker = StatusTracker.getInstance();
        const shouldUsePartyStatusEffects = this.#shouldUsePartyStatusEffect(player.characterId);
        if (shouldUsePartyStatusEffects) {
          tracker.RemovePartyObject(parsed.PCStruct.CharacterId)
        } else {
          tracker.RemoveLocalObject(parsed.PCStruct.PlayerId);
        }
        for (const se of parsed.PCStruct.statusEffectDatas) {
          tracker.RegisterStatusEffect(
            this.#buildStatusEffect(
              se,
              shouldUsePartyStatusEffects ? player.characterId : player.entityId,
              se.SourceId,
              shouldUsePartyStatusEffects ? StatusEffectTargetType.Party : StatusEffectTargetType.Local
            )
          );
        }
        if (this.#needEmit) {
          const statsMap = this.#getStatPairMap(pkt.parsed.PCStruct.statPair);
          this.#buildLine(
            LineId.NewPC,
            player.entityId,
            player.name,
            player.class,
            this.#data.getClassName(player.class),
            parsed.PCStruct.Level,
            player.gearLevel,
            Number(statsMap.get(stattype.hp)) || 0,
            Number(statsMap.get(stattype.max_hp)) || 0,
            player.characterId
          );
        }
      })
      .on("PKTNewProjectile", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const projectile: Projectile = {
          entityId: parsed.projectileInfo.ProjectileId,
          entityType: EntityType.Projectile,
          name: parsed.projectileInfo.ProjectileId.toString(16),
          ownerId: parsed.projectileInfo.OwnerId,
          skillEffectId: parsed.projectileInfo.SkillEffect,
          skillId: parsed.projectileInfo.SkillId,
        };
        this.#currentEncounter.entities.set(projectile.entityId, projectile);
      })
      .on("PKTParalyzationStateNotify", (pkt) => {})
      .on("PKTPartyInfo", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        // this means the party is collapsing because you are the only one left
        if (parsed.MemberDatas.length === 1 && parsed.MemberDatas[0]?.Name === this.#localPlayer.name) {
          PartyTracker.getInstance().remove(parsed.PartyInstanceId, parsed.MemberDatas[0].Name);
          return;
        }
        PartyTracker.getInstance().removePartyMappings(parsed.PartyInstanceId);
        for (const pm of parsed.MemberDatas) {
          if (pm.CharacterId === this.#localPlayer.characterId) {
            PartyTracker.getInstance().setOwnName(pm.Name);
          }
          // Update player info based on party info
          const entityId = PCIdMapper.getInstance().getEntityId(pm.CharacterId);
          if (entityId) {
            const ent = this.#currentEncounter.entities.get(entityId);
            if (ent && ent.entityType === EntityType.Player && ent.name !== pm.Name) {
              const p = ent as Player;
              p.gearLevel = this.#u32tof32(pm.GearLevel);
              p.name = pm.Name;
              p.class = pm.ClassId;
              if (this.#needEmit) {
                this.#buildLine(
                  LineId.NewPC,
                  p.entityId,
                  p.name,
                  p.class,
                  this.#data.getClassName(p.class),
                  pm.CharacterLevel,
                  p.gearLevel,
                  Number(pm.CurHp),
                  Number(pm.MaxHp),
                  p.characterId
                );
              }
            }
          }

          // Add to party
          PartyTracker.getInstance().add(
            parsed.RaidInstanceId,
            parsed.PartyInstanceId,
            pm.CharacterId,
            entityId,
            pm.Name
          );
        }
      })
      .on("PKTPartyLeaveResult", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        PartyTracker.getInstance().remove(parsed.PartyInstanceId, parsed.Name);
      })
      .on("PKTPartyStatusEffectAddNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const tracker = StatusTracker.getInstance();
        for (const effect of parsed.statusEffectDatas) {
          const sourceId: bigint = parsed.PlayerIdOnRefresh !== 0n ? parsed.PlayerIdOnRefresh : effect.SourceId;
          const sourceEnt = this.#getSourceEntity(sourceId);
          tracker.RegisterStatusEffect(
            this.#buildStatusEffect(effect, parsed.CharacterId, sourceEnt.entityId, StatusEffectTargetType.Party)
          );
        }
      })
      .on("PKTPartyStatusEffectRemoveNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const effectId of parsed.statusEffectIds)
          StatusTracker.getInstance().RemoveStatusEffect(parsed.CharacterId, effectId, StatusEffectTargetType.Party);
      })
      .on("PKTPartyStatusEffectResultNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        PartyTracker.getInstance().add(parsed.RaidInstanceId, parsed.PartyInstanceId, parsed.CharacterId);
      })
      .on("PKTRaidBossKillNotify", (pkt) => {
        if (this.#needEmit) this.#buildLine(LineId.PhaseTransition, 1);
      })
      .on("PKTRaidResult", (pkt) => {
        if (this.#needEmit) this.#buildLine(LineId.PhaseTransition, 0);
      })
      .on("PKTRemoveObject", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const upo of parsed.unpublishedObjects) StatusTracker.getInstance().RemoveLocalObject(upo.ObjectId);
      })
      .on("PKTSkillDamageAbnormalMoveNotify", (pkt) => {
        if (this.#needEmit) {
          const parsedDmg = pkt.parsed;
          if (!parsedDmg) return;
          let sourceEntity = this.#getSourceEntity(parsedDmg.SourceId);
          let skillName = this.#data.getSkillName(parsedDmg.SkillId);
          sourceEntity = this.#guessIsPlayer(sourceEntity, parsedDmg.SkillId);
          parsedDmg.SkillDamageAbnormalMoveEvents.forEach((event) => {
            if (
              (event.skillDamageEvent.Modifier & 0xf) === hitflag.damage_share &&
              parsedDmg.SkillId === 0 &&
              parsedDmg.SkillEffectId === 0
            )
              return;

            if (
              parsedDmg.SkillId === 0 &&
              parsedDmg.SkillEffectId === 0 &&
              event.skillDamageEvent.Modifier & (hitflag.dot | hitflag.dot_critical)
            )
              skillName = "Bleed";

            const targetEntity = this.#currentEncounter.entities.get(event.skillDamageEvent.TargetId);
            const [statusEffectsOnSource, statusEffectsOnTarget] = this.#getStatusEffects(sourceEntity, targetEntity);
            // Override skillEffect for battleitems (this way we know the real item used: slendid or not)
            let skillEffectId = parsedDmg.SkillEffectId;
            let skillEffect: string | undefined;
            if (this.#data.isBattleItem(skillEffectId, "attack")) {
              const entity = this.#currentEncounter.entities.get(parsedDmg.SourceId);
              if (entity && entity.entityType === EntityType.Projectile) {
                const proj = entity as Projectile;
                skillEffectId = proj.skillEffectId;
                skillEffect = this.#data.getBattleItemName(skillEffectId);
              }
            }
            skillEffect = skillEffect ?? this.#data.getSkillEffectComment(skillEffectId);
            this.#buildLine(
              LineId.Damage,
              sourceEntity.entityId,
              sourceEntity.name,
              parsedDmg.SkillId,
              skillName,
              skillEffectId,
              skillEffect,
              event.skillDamageEvent.TargetId,
              this.#getEntityName(event.skillDamageEvent.TargetId),
              Number(event.skillDamageEvent.Damage),
              event.skillDamageEvent.Modifier.toString(16),
              Number(event.skillDamageEvent.CurHp),
              Number(event.skillDamageEvent.MaxHp),
              statusEffectsOnTarget,
              statusEffectsOnSource
            );
          });
        }
      })
      .on("PKTSkillDamageNotify", (pkt) => {
        if (this.#needEmit) {
          const parsedDmg = pkt.parsed;
          if (!parsedDmg) return;
          let sourceEntity: Entity = this.#getSourceEntity(parsedDmg.SourceId);
          let skillName = this.#data.getSkillName(parsedDmg.SkillId);
          const skillEffect = this.#data.getSkillEffectComment(parsedDmg.SkillEffectId);
          sourceEntity = this.#guessIsPlayer(sourceEntity, parsedDmg.SkillId);
          parsedDmg.SkillDamageEvents.forEach((event) => {
            if (
              (event.Modifier & 0xf) === hitflag.damage_share &&
              parsedDmg.SkillId === 0 &&
              parsedDmg.SkillEffectId === 0
            )
              return;

            if (
              parsedDmg.SkillId === 0 &&
              parsedDmg.SkillEffectId === 0 &&
              event.Modifier & (hitflag.dot | hitflag.dot_critical)
            )
              skillName = "Bleed";

            const targetEntity = this.#currentEncounter.entities.get(event.TargetId);
            const [statusEffectsOnSource, statusEffectsOnTarget] = this.#getStatusEffects(sourceEntity, targetEntity);

            // Override skillEffect for battleitems (this way we know the real item used: slendid or not)
            let skillEffectId = parsedDmg.SkillEffectId;
            let skillEffect: string | undefined;
            if (this.#data.isBattleItem(skillEffectId, "attack")) {
              const entity = this.#currentEncounter.entities.get(parsedDmg.SourceId);
              if (entity && entity.entityType === EntityType.Projectile) {
                const proj = entity as Projectile;
                skillEffectId = proj.skillEffectId;
                skillEffect = this.#data.getBattleItemName(skillEffectId);
              }
            }
            skillEffect = skillEffect ?? this.#data.getSkillEffectComment(skillEffectId);
            this.#buildLine(
              LineId.Damage,
              sourceEntity.entityId,
              sourceEntity.name,
              parsedDmg.SkillId,
              skillName,
              skillEffectId,
              skillEffect,
              event.TargetId,
              this.#getEntityName(event.TargetId),
              Number(event.Damage),
              event.Modifier.toString(16),
              Number(event.CurHp),
              Number(event.MaxHp),
              statusEffectsOnTarget,
              statusEffectsOnSource
            );
          });
        }
      })
      .on("PKTSkillStageNotify", (pkt) => {
        if (this.#needEmit) {
          const parsed = pkt.parsed;
          if (!parsed) return;
          let sourceEntity: Entity = this.#getSourceEntity(parsed.SourceId);
          sourceEntity = this.#guessIsPlayer(sourceEntity, parsed.SkillId);
          this.#buildLine(
            LineId.SkillStage,
            sourceEntity.entityId,
            sourceEntity.name,
            parsed.SkillId,
            this.#data.getSkillName(parsed.SkillId),
            parsed.Stage
          );
        }
      })
      .on("PKTSkillStartNotify", (pkt) => {
        if (this.#needEmit) {
          const parsed = pkt.parsed;
          if (!parsed) return;
          let sourceEntity: Entity = this.#getSourceEntity(parsed.SourceId);
          sourceEntity = this.#guessIsPlayer(sourceEntity, parsed.SkillId);
          this.#buildLine(
            LineId.SkillStart,
            sourceEntity.entityId,
            sourceEntity.name,
            parsed.SkillId,
            this.#data.getSkillName(parsed.SkillId)
          );
        }
      })
      .on("PKTStatChangeOriginNotify", (pkt) => {
        if (this.#needEmit) {
          //TODO: fix dump, this wasn't working anw
          /*
          const parsed = pkt.parsed;
          if (!parsed) return;
          // TODO: check healAmount, currentHp + fix def
          const currentStatsMap = this.#getStatPairMap(pkt.parsed.StatPairList);
          const changedStatsMap = this.#getStatPairMap(pkt.parsed.Unk1);
          this.#buildLine(
            LineId.Heal,
            parsed.ObjectId,
            this.#getEntityName(parsed.ObjectId),
            Number(changedStatsMap.get(stattype.hp)) || 0,
            Number(currentStatsMap.get(stattype.hp)) || 0
          );
          */
        }
      })
      .on("PKTStatusEffectAddNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const sourceEnt = this.#getSourceEntity(parsed.statusEffectData.SourceId);
        StatusTracker.getInstance().RegisterStatusEffect(
          this.#buildStatusEffect(
            parsed.statusEffectData,
            parsed.ObjectId,
            sourceEnt.entityId,
            StatusEffectTargetType.Local
          )
        );
      })
      .on("PKTStatusEffectRemoveNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const effectId of parsed.statusEffectIds)
          StatusTracker.getInstance().RemoveStatusEffect(parsed.ObjectId, effectId, StatusEffectTargetType.Local);
      })
      .on("PKTTriggerBossBattleStatus", (pkt) => {
        if (this.#needEmit) this.#buildLine(LineId.PhaseTransition, 2);
      })
      .on("PKTTriggerFinishNotify", (pkt) => {})
      .on("PKTTriggerStartNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        switch (parsed.TriggerSignalType) {
          case triggersignaltype.dungeon_phase1_clear:
          case triggersignaltype.dungeon_phase2_clear:
          case triggersignaltype.dungeon_phase3_clear:
          case triggersignaltype.dungeon_phase4_clear:
          case triggersignaltype.dungeon_phase5_clear:
          case triggersignaltype.dungeon_phase6_clear:
            this.#wasKill = true;
            this.#wasWipe = false;
            break;
          case triggersignaltype.dungeon_phase1_fail:
          case triggersignaltype.dungeon_phase2_fail:
          case triggersignaltype.dungeon_phase3_fail:
          case triggersignaltype.dungeon_phase4_fail:
          case triggersignaltype.dungeon_phase5_fail:
          case triggersignaltype.dungeon_phase6_fail:
            this.#wasKill = false;
            this.#wasWipe = true;
            break;
        }
      })
      .on("PKTMigrationExecute", (pkt) => {
        //Ignore if we already know characterId
        if (this.#localPlayer.characterId !== 0n) return;
        const parsed = pkt.parsed;
        if (!parsed) return;
        // Found no way to map AccountId & CharacterId, but this should be always ? true
        this.#localPlayer.characterId =
          parsed.Account_CharacterId1 < parsed.Account_CharacterId2
            ? parsed.Account_CharacterId1
            : parsed.Account_CharacterId2;
      })
      .on("PKTZoneObjectUnpublishNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        StatusTracker.getInstance().RemoveLocalObject(parsed.ObjectId);
      })
      .on("PKTStatusEffectDurationNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        StatusTracker.getInstance().UpdateDuration(parsed.EffectInstanceId, parsed.TargetId, parsed.ExpirationTick, StatusEffectTargetType.Local);
      });
  }

  #buildLine<U extends keyof LegacyLoggerEvents>(id: U, ...args: Parameters<LegacyLoggerEvents[U]>) {
    if (this.emitText) {
      let line = `${id}|${new Date().toISOString()}|${args
        .map((v) => (typeof v === "bigint" ? v.toString(16) : v))
        .join("|")}`;
      line = [line, createHash("md5").update(line).digest("hex")].join("|");
      this.emit("line", line);
    }
    if (this.emitLines) this.emit(id, ...args);
  }

  get #needEmit() {
    return this.emitText || this.emitLines;
  }

  #getSourceEntity(id: bigint): Entity {
    let entity = this.#currentEncounter.entities.get(id);
    if (entity?.entityType === EntityType.Projectile) {
      id = (entity as Projectile).ownerId;
    } else if (entity?.entityType === EntityType.Summon) {
      id = (entity as Summon).ownerId;
    }
    entity = this.#currentEncounter.entities.get(id);
    if (entity) return entity;
    const newEntity = {
      entityId: id,
      entityType: EntityType.Npc,
      name: id.toString(16),
    };
    this.#currentEncounter.entities.set(id, newEntity);
    return newEntity;
  }

  #guessIsPlayer(entity: Entity, skillid: number): Entity {
    const classId = this.#data.getSkillClassId(skillid);
    if (classId !== 0) {
      let newEntity: Player;
      if (entity.entityType === EntityType.Player) {
        const player = entity as Player;
        if (player.class == classId) return player;
        newEntity = {
          entityId: player.entityId,
          entityType: EntityType.Player,
          name: player.name,
          class: classId,
          gearLevel: player.gearLevel,
          characterId: player.characterId,
        };
      } else {
        newEntity = {
          entityId: entity.entityId,
          entityType: EntityType.Player,
          name: entity.name,
          class: classId,
          gearLevel: 0,
          characterId: 0n,
        };
      }
      this.#currentEncounter.entities.set(entity.entityId, newEntity);
      this.#buildLine(
        LineId.NewPC,
        newEntity.entityId,
        newEntity.name,
        newEntity.class,
        this.#data.getClassName(newEntity.class),
        1,
        newEntity.gearLevel,
        0,
        0,
        newEntity.characterId
      );
      return newEntity;
    }
    return entity;
  }

  #getEntityName(id: bigint) {
    return this.#currentEncounter.entities.get(id)?.name || id.toString(16);
  }

  #getStatPairMap(statpair: { StatType: number; Value: bigint }[]) {
    //TODO: use a "Common" packet for statpair parsing
    const map = new Map<stattype, bigint>();
    statpair.forEach((pair) => {
      map.set(pair.StatType, pair.Value);
    });
    return map;
  }

  #u32tof32(v: number) {
    //TODO: remove when we fixed float types in the dump
    const buf = Buffer.alloc(4);
    buf.writeUInt32LE(v);
    return Math.round(buf.readFloatLE() * 100) / 100;
  }

  #shouldUsePartyStatusEffectForEntity(entity: Entity) {
    if (entity.entityType !== EntityType.Player) return false;
    const player: Player = entity as Player;
    return this.#shouldUsePartyStatusEffect(player.characterId);
  }

  #shouldUsePartyStatusEffect(characterId: bigint) {
    const localPlayerIsInParty = PartyTracker.getInstance().isCharacterInParty(this.#localPlayer.characterId);
    const affectedPlayerIsInParty = PartyTracker.getInstance().isCharacterInParty(characterId);
    if (localPlayerIsInParty) {
      if (!affectedPlayerIsInParty || characterId === this.#localPlayer.characterId) {
        // not in party or local player use local status effects
        return false;
      }
      const localPlayerPartyId = PartyTracker.getInstance().getPartyIdFromCharacterId(this.#localPlayer.characterId);
      const affectedPlayerPartyId = PartyTracker.getInstance().getPartyIdFromCharacterId(characterId);
      if (localPlayerPartyId === affectedPlayerPartyId) {
        // same party with local player use party status effects
        return true;
      }
      // in a party but not with the local player use local status effects
      return false;
    }
    // local player not in a party always use local status effects
    return false;
  }

  #isEntityInParty(entity: Entity) {
    if (entity.entityType !== EntityType.Player) return false;
    const player = entity as Player;
    return PartyTracker.getInstance().isCharacterInParty(player.characterId);
  }

  #buildStatusEffect(
    se: StatusEffectData,
    targetId: bigint,
    sourceId: bigint,
    targetType: StatusEffectTargetType
  ): StatusEffect {
    const val: number = se.Value ? se.Value.readUInt32LE() : 0;
    let statusEffectCategory = StatusEffectCategory.Other;
    let statusEffectBuffCategory = StatusEffectBuffCategory.Other;
    let showType = StatusEffectShowType.Other;
    let seName = "Unknown";
    const effectInfo = this.#data.skillBuff.get(se.StatusEffectId);
    if (effectInfo) {
      seName = effectInfo.name;
      switch (effectInfo.category) {
        case "debuff":
          statusEffectCategory = StatusEffectCategory.Debuff;
          break;
      }
      switch (effectInfo.buffcategory) {
        case "bracelet":
          statusEffectBuffCategory = StatusEffectBuffCategory.Bracelet;
          break;
        case "etc":
          statusEffectBuffCategory = StatusEffectBuffCategory.Etc;
          break;
        case "battleitem":
          statusEffectBuffCategory = StatusEffectBuffCategory.Battleitem;
          break;
      }
      switch (effectInfo.iconshowtype) {
        case "all":
          showType = StatusEffectShowType.All;
          break;
      }
    }
    return {
      instanceId: se.EffectInstanceId,
      sourceId: sourceId,
      started: new Date(),
      statusEffectId: se.StatusEffectId,
      targetId: targetId,
      type: targetType,
      value: val,
      buffCategory: statusEffectBuffCategory,
      category: statusEffectCategory,
      showType: showType,
      expirationDelay: se.TotalTime,
      expirationTimer: undefined,
      timestamp: se.EndTick,
      expireAt: undefined,
      occurTime: se.OccurTime,
      name: seName,
    };
  }

  #getStatusEffects(sourceEntity: Entity, targetEntity: Entity | undefined): [[number, bigint][], [number, bigint][]] {
    const statusEffectsOnTarget: [number, bigint][] = [];
    const statusEffectsOnSource: [number, bigint][] = [];

    const shouldUsePartyBuffForSource = this.#shouldUsePartyStatusEffectForEntity(sourceEntity);
    const sourceEffects = StatusTracker.getInstance().GetStatusEffects(
      shouldUsePartyBuffForSource ? (sourceEntity as Player).characterId : sourceEntity.entityId,
      shouldUsePartyBuffForSource ? StatusEffectTargetType.Party : StatusEffectTargetType.Local
    );
    for (const se of sourceEffects) statusEffectsOnSource.push([se.statusEffectId, se.sourceId]);

    if (targetEntity) {
      const shouldUsePartyBuffForTarget = this.#shouldUsePartyStatusEffectForEntity(targetEntity);
      const sourceIsInParty = this.#isEntityInParty(sourceEntity);
      const sourcePartyId = sourceIsInParty
        ? PartyTracker.getInstance().getPartyIdFromEntityId(sourceEntity.entityId)
        : undefined;
      const targetEffects =
        sourceIsInParty && sourcePartyId
          ? StatusTracker.getInstance().GetStatusEffectsFromParty(
              shouldUsePartyBuffForTarget ? (targetEntity as Player).characterId : targetEntity.entityId,
              shouldUsePartyBuffForTarget ? StatusEffectTargetType.Party : StatusEffectTargetType.Local,
              sourcePartyId
            )
          : StatusTracker.getInstance().GetStatusEffects(
              shouldUsePartyBuffForTarget ? (targetEntity as Player).characterId : targetEntity.entityId,
              shouldUsePartyBuffForTarget ? StatusEffectTargetType.Party : StatusEffectTargetType.Local
            );
      for (const se of targetEffects) statusEffectsOnTarget.push([se.statusEffectId, se.sourceId]);
    }
    return [statusEffectsOnSource, statusEffectsOnTarget];
  }
}

class Encounter {
  start: number;
  entities: Map<bigint, Entity>;

  constructor() {
    this.start = Date.now();
    this.entities = new Map();
  }
}

const enum EntityType {
  Player,
  Npc,
  Summon,
  Projectile,
}

type Entity = {
  entityId: bigint;
  entityType: EntityType;
  name: string;
};

type Player = Entity & {
  class: number;
  gearLevel: number;
  characterId: bigint;
};

type Npc = Entity & {
  typeId: number;
};

type Summon = Entity & {
  ownerId: bigint;
};

type Projectile = Entity & {
  ownerId: bigint;
  skillEffectId: number;
  skillId: number;
};
