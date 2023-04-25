import { TypedEmitter } from "tiny-typed-emitter";
import type { MeterData } from "../data";
import { stattype, triggersignaltype } from "../packets/generated/enums";
import type { GameState } from "./data";
import { Entity, EntityTracker, EntityType, Projectile } from "./entityTracker";
import { GameTracker } from "./gameTracker";
import type { Logger } from "./logger";
import { PartyTracker } from "./partytracker";
import { PCIdMapper } from "./pcidmapper";
import { StatusEffectTargetType, StatusTracker } from "./statustracker";

export class Parser extends TypedEmitter<ParserEvent> {
  #logger: Logger;
  #data: MeterData;

  #pcIdMapper: PCIdMapper;
  #partyTracker: PartyTracker;
  #statusTracker: StatusTracker;
  #entityTracker: EntityTracker;
  #gameTracker: GameTracker;

  //TODO: refactor
  #wasWipe: boolean;
  #wasKill: boolean;

  #isLive: boolean;

  constructor(logger: Logger, data: MeterData, isLive = false) {
    super();
    this.#logger = logger;
    this.#data = data;

    this.#pcIdMapper = new PCIdMapper();
    this.#partyTracker = new PartyTracker(this.#pcIdMapper);
    this.#statusTracker = new StatusTracker(this.#partyTracker, this.#data);
    this.#entityTracker = new EntityTracker(this.#pcIdMapper, this.#partyTracker, this.#statusTracker, this.#data);
    this.#gameTracker = new GameTracker(this.#entityTracker, this.#statusTracker, this.#data, {});
    this.#gameTracker.emit = this.emit; //forward emits

    this.#wasWipe = false;
    this.#wasKill = false;

    this.#isLive = isLive;

    if (this.#isLive) {
      setInterval(this.broadcastStateChange.bind(this), 100);
    }

    this.#logger
      .on("AbilityChangeNotify", (pkt) => {})
      .on("ActiveAbilityNotify", (pkt) => {})
      .on("AddonSkillFeatureChangeNotify", (pkt) => {})
      .on("BlockSkillStateNotify", (pkt) => {})
      .on("CounterAttackNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const source = this.#entityTracker.entities.get(parsed.SourceId);
        if (source) this.#gameTracker.onCounterAttack(source, pkt.time);
      })
      .on("DeathNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const target = this.#entityTracker.entities.get(parsed.TargetId);
        if (this.#partyTracker.isEntityInParty(parsed.TargetId)) {
          if (target?.name === this.#entityTracker.localPlayer.name) {
            this.#statusTracker.RemoveLocalObject(parsed.TargetId);
          } else {
            const charId = this.#pcIdMapper.getCharacterId(parsed.TargetId);
            if (charId) this.#statusTracker.RemovePartyObject(charId);
          }
        } else {
          this.#statusTracker.RemoveLocalObject(parsed.TargetId);
        }
        if (target) this.#gameTracker.onDeath(target, pkt.time);
      })
      .on("IdentityGaugeChangeNotify", (pkt) => {})
      .on("InitAbility", (pkt) => {})
      .on("InitEnv", (pkt) => {
        this.#entityTracker.processInitEnv(pkt);
        this.#gameTracker.onInitEnv(pkt, pkt.time);
      })
      .on("InitLocal", (pkt) => {})
      .on("InitPC", (pkt) => {
        const player = this.#entityTracker.processInitPC(pkt);
        if (player && pkt.parsed) {
          const statsMap = this.#data.getStatPairMap(pkt.parsed.statPair);
          this.#gameTracker.updateOrCreateEntity(
            player,
            {
              id: player.entityId.toString(16),
              name: player.name,
              classId: player.class,
              isPlayer: true,
              gearScore: player.gearLevel,
              currentHp: Number(statsMap.get(stattype.hp)) || 0,
              maxHp: Number(statsMap.get(stattype.max_hp)) || 0,
            },
            pkt.time
          );
        }
      })
      .on("MigrationExecute", (pkt) => {
        //Ignore if we already know characterId
        if (this.#entityTracker.localPlayer.characterId !== 0n) return;
        const parsed = pkt.parsed;
        if (!parsed) return;
        // Found no way to map AccountId & CharacterId, but this should be always ? true
        this.#entityTracker.localPlayer.characterId =
          parsed.Account_CharacterId1 < parsed.Account_CharacterId2
            ? parsed.Account_CharacterId1
            : parsed.Account_CharacterId2;
      })
      .on("NewNpc", (pkt) => {
        const npcEntity = this.#entityTracker.processNewNpc(pkt);

        if (npcEntity && pkt.parsed) {
          const statsMap = this.#data.getStatPairMap(pkt.parsed.NpcStruct.statPair);

          let isBoss = false;
          const npc = this.#data.npc.get(npcEntity.typeId);
          if (npc && ["boss", "raid", "epic_raid", "commander"].includes(npc.grade)) {
            isBoss = true;
          }
          this.#gameTracker.updateOrCreateEntity(
            npcEntity,
            {
              id: npcEntity.entityId.toString(16),
              name: npcEntity.name,
              npcId: npcEntity.typeId,
              isPlayer: false,
              isBoss,
              currentHp: Number(statsMap.get(stattype.hp)) || 0,
              maxHp: Number(statsMap.get(stattype.max_hp)) || 0,
            },
            pkt.time
          );
        }
      })
      .on("NewNpcSummon", (pkt) => {
        const npcEntity = this.#entityTracker.processNewNpcSummon(pkt);

        if (npcEntity && pkt.parsed) {
          const statsMap = this.#data.getStatPairMap(pkt.parsed.NpcData.statPair);

          let isBoss = false;
          const npc = this.#data.npc.get(npcEntity.typeId);
          if (npc && ["boss", "raid", "epic_raid", "commander"].includes(npc.grade)) {
            isBoss = true;
          }
          this.#gameTracker.updateOrCreateEntity(
            npcEntity,
            {
              id: npcEntity.entityId.toString(16),
              name: npcEntity.name,
              npcId: npcEntity.typeId,
              isPlayer: false,
              isBoss,
              currentHp: Number(statsMap.get(stattype.hp)) || 0,
              maxHp: Number(statsMap.get(stattype.max_hp)) || 0,
            },
            pkt.time
          );
        }
      })
      .on("NewPC", (pkt) => {
        const player = this.#entityTracker.processNewPC(pkt);

        if (player && pkt.parsed) {
          const statsMap = this.#data.getStatPairMap(pkt.parsed.PCStruct.statPair);
          this.#gameTracker.updateOrCreateEntity(
            player,
            {
              id: player.entityId.toString(16),
              name: player.name,
              classId: player.class,
              isPlayer: true,
              gearScore: player.gearLevel,
              currentHp: Number(statsMap.get(stattype.hp)) || 0,
              maxHp: Number(statsMap.get(stattype.max_hp)) || 0,
            },
            pkt.time
          );
        }
      })
      .on("NewProjectile", (pkt) => {
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
        this.#entityTracker.entities.set(projectile.entityId, projectile);
      })
      .on("ParalyzationStateNotify", (pkt) => {})
      .on("PartyInfo", (pkt) => {
        this.#partyTracker.partyInfo(pkt, this.#entityTracker.entities, this.#entityTracker.localPlayer);
      })
      .on("PartyLeaveResult", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#partyTracker.remove(parsed.PartyInstanceId, parsed.Name);
      })
      .on("PartyPassiveStatusEffectAddNotify", (pkt) => {})
      .on("PartyPassiveStatusEffectRemoveNotify", (pkt) => {})
      .on("PartyStatusEffectAddNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const effect of parsed.statusEffectDatas) {
          const sourceId: bigint = parsed.PlayerIdOnRefresh !== 0n ? parsed.PlayerIdOnRefresh : effect.SourceId;
          const sourceEnt = this.#entityTracker.getSourceEntity(sourceId);
          this.#statusTracker.RegisterStatusEffect(
            this.#statusTracker.buildStatusEffect(
              effect,
              parsed.CharacterId,
              sourceEnt.entityId,
              StatusEffectTargetType.Party,
              pkt.time
            )
          );
        }
      })
      .on("PartyStatusEffectRemoveNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const effectId of parsed.statusEffectIds)
          this.#statusTracker.RemoveStatusEffect(parsed.CharacterId, effectId, StatusEffectTargetType.Party);
      })
      .on("PartyStatusEffectResultNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#partyTracker.add(parsed.RaidInstanceId, parsed.PartyInstanceId, parsed.CharacterId);
      })
      .on("PassiveStatusEffectAddNotify", (pkt) => {})
      .on("PassiveStatusEffectRemoveNotify", (pkt) => {})
      .on("RaidBossKillNotify", (pkt) => {
        this.#gameTracker.onPhaseTransition(1, pkt.time);
      })
      .on("RaidResult", (pkt) => {
        this.#gameTracker.onPhaseTransition(0, pkt.time);
      })
      .on("RemoveObject", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const upo of parsed.unpublishedObjects) this.#statusTracker.RemoveLocalObject(upo.ObjectId);
      })
      .on("SkillDamageAbnormalMoveNotify", (pkt) => {
        const parsedDmg = pkt.parsed;
        if (!parsedDmg) return;
        let ownerEntity: Entity = this.#entityTracker.getSourceEntity(parsedDmg.SourceId);
        ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsedDmg.SkillId);
        parsedDmg.SkillDamageAbnormalMoveEvents.forEach((event) => {
          const targetEntity = this.#entityTracker.getOrCreateEntity(event.skillDamageEvent.TargetId);
          const sourceEntity = this.#entityTracker.getOrCreateEntity(parsedDmg.SourceId);
          this.#gameTracker.onDamage(
            ownerEntity,
            sourceEntity,
            targetEntity,
            {
              skillId: parsedDmg.SkillId,
              skillEffectId: parsedDmg.SkillEffectId,
              damage: Number(event.skillDamageEvent.Damage),
              modifier: event.skillDamageEvent.Modifier,
              targetCurHp: Number(event.skillDamageEvent.CurHp),
              targetMaxHp: Number(event.skillDamageEvent.MaxHp),
            },
            pkt.time
          );
        });
      })
      .on("SkillDamageNotify", (pkt) => {
        const parsedDmg = pkt.parsed;
        if (!parsedDmg) return;
        let ownerEntity: Entity = this.#entityTracker.getSourceEntity(parsedDmg.SourceId);
        ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsedDmg.SkillId);

        parsedDmg.SkillDamageEvents.forEach((event) => {
          const targetEntity = this.#entityTracker.getOrCreateEntity(event.TargetId);
          const sourceEntity = this.#entityTracker.getOrCreateEntity(parsedDmg.SourceId);
          this.#gameTracker.onDamage(
            ownerEntity,
            sourceEntity,
            targetEntity,
            {
              skillId: parsedDmg.SkillId,
              skillEffectId: parsedDmg.SkillEffectId,
              damage: Number(event.Damage),
              modifier: event.Modifier,
              targetCurHp: Number(event.CurHp),
              targetMaxHp: Number(event.MaxHp),
            },
            pkt.time
          );
        });
      })
      .on("SkillStageNotify", (pkt) => {
        //Unprocessed, but still logged
      })
      .on("SkillStartNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        let ownerEntity: Entity = this.#entityTracker.getSourceEntity(parsed.SourceId);
        ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsed.SkillId);
        //TODO: use this to grab cast info (skill Level, tripods, runes) for further processing
        this.#gameTracker.onStartSkill(ownerEntity, parsed.SkillId, pkt.time);
      })
      .on("StatusEffectAddNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const sourceEnt = this.#entityTracker.getSourceEntity(parsed.statusEffectData.SourceId);
        this.#statusTracker.RegisterStatusEffect(
          this.#statusTracker.buildStatusEffect(
            parsed.statusEffectData,
            parsed.ObjectId,
            sourceEnt.entityId,
            StatusEffectTargetType.Local,
            pkt.time
          )
        );
      })
      .on("StatusEffectDurationNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#statusTracker.UpdateDuration(
          parsed.EffectInstanceId,
          parsed.TargetId,
          parsed.ExpirationTick,
          StatusEffectTargetType.Local
        );
      })
      .on("StatusEffectRemoveNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const effectId of parsed.statusEffectIds)
          this.#statusTracker.RemoveStatusEffect(parsed.ObjectId, effectId, StatusEffectTargetType.Local);
      })
      .on("StatusEffectSyncDataNotify", (pkt) => {})
      .on("TriggerBossBattleStatus", (pkt) => {
        this.#gameTracker.onPhaseTransition(2, pkt.time);
      })
      .on("TriggerFinishNotify", (pkt) => {})
      .on("TriggerStartNotify", (pkt) => {
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
      .on("TroopMemberUpdateMinNotify", (pkt) => {})
      .on("ZoneObjectUnpublishNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#statusTracker.RemoveLocalObject(parsed.ObjectId);
      })
      .on("ZoneStatusEffectAddNotify", (pkt) => {})
      .on("ZoneStatusEffectRemoveNotify", (pkt) => {});
  }

  //TODO: method to change broadcast interval (without restart)
  broadcastStateChange() {
    this.emit("state-change", this.#gameTracker.getBroadcast());
  }
  reset() {
    this.#gameTracker.resetState(+new Date());
  }
  cancelReset() {
    this.#gameTracker.cancelReset();
  }
  get encounters() {
    //TODO: parse only ?
    this.#gameTracker.splitEncounter(new Date()); //Date doesn't matter here
    return this.#gameTracker.encounters;
  }
}

export interface ParserEvent {
  log: (data: { type: "debug" | "error"; message: string }) => void;
  message: (msg: string) => void;
  "reset-state": (game: GameState) => void;
  "state-change": (game: GameState) => void;
}
