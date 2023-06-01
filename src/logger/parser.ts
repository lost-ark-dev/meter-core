import { TypedEmitter } from "tiny-typed-emitter";
import type { MeterData, PassiveOption, SkillFeatureOption } from "../data";
import {
  damageattr,
  equipcategory,
  itemcategory,
  itemstoragetype,
  skillfeaturetype,
  stattype,
  triggersignaltype,
} from "../packets/generated/enums";
import type { GameState, GameTrackerOptions } from "./data";
import {
  EntityTracker,
  EntityType,
  type Entity,
  type Projectile,
  Player,
  PlayerSet,
  TripodData,
} from "./entityTracker";
import { GameTracker } from "./gameTracker";
import type { Logger } from "./logger";
import { PartyTracker } from "./partytracker";
import { PCIdMapper } from "./pcidmapper";
import { StatusEffectTargetType, StatusTracker, type StatusEffect } from "./statustracker";
import { TripodIndex } from "../packets/common/TripodIndex";

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

  constructor(logger: Logger, data: MeterData, options: Partial<GameTrackerOptions>) {
    super();
    this.#logger = logger;
    this.#data = data;

    this.#pcIdMapper = new PCIdMapper();
    this.#partyTracker = new PartyTracker(this.#pcIdMapper);
    this.#statusTracker = new StatusTracker(this.#partyTracker, this.#data, options.isLive ?? true);
    this.#entityTracker = new EntityTracker(this.#pcIdMapper, this.#partyTracker, this.#statusTracker, this.#data);
    this.#gameTracker = new GameTracker(this.#entityTracker, this.#statusTracker, this.#data, options);
    this.#gameTracker.emit = this.emit.bind(this); //forward emits
    /*
    this.#gameTracker.emit = <U extends keyof ParserEvent>(event: U, ...args: Parameters<ParserEvent[U]>): boolean => {
      return this.emit(event, ...args);
    };
    */

    this.#wasWipe = false;
    this.#wasKill = false;

    if (this.#gameTracker.options.isLive) {
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
        const source = this.#entityTracker.entities.get(parsed.sourceId);
        if (source) this.#gameTracker.onCounterAttack(source, pkt.time);
      })
      .on("DeathNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const target = this.#entityTracker.entities.get(parsed.targetId);
        if (target) this.#gameTracker.onDeath(target, pkt.time);
      })
      .on("EquipChangeNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const player = this.#entityTracker.entities.get(parsed.objectId);
        if (!player || player.entityType !== EntityType.Player) return;
        (player as Player).itemSet = this.#entityTracker.getPlayerSetOptions(parsed.equipItemDataList);
      })
      .on("IdentityStanceChangeNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const entity = this.#entityTracker.entities.get(parsed.objectId);
        if (entity && entity.entityType === EntityType.Player) {
          (entity as Player).stance = parsed.stance;
        }
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
      .on("InitItem", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed || parsed.storageType !== itemstoragetype.equip) return;

        //Get localplayer playerSet
        this.#entityTracker.localPlayer.itemSet = this.#entityTracker.getPlayerSetOptions(parsed.itemDataList);
      })
      .on("MigrationExecute", (pkt) => {
        //Ignore if we already know characterId
        if (this.#entityTracker.localPlayer.characterId !== 0n) return;
        const parsed = pkt.parsed;
        if (!parsed) return;
        // Found no way to map AccountId & CharacterId, but this should be always ? true
        this.#entityTracker.localPlayer.characterId =
          parsed.account_CharacterId1 < parsed.account_CharacterId2
            ? parsed.account_CharacterId1
            : parsed.account_CharacterId2;
      })
      .on("NewNpc", (pkt) => {
        const npcEntity = this.#entityTracker.processNewNpc(pkt);

        if (npcEntity && pkt.parsed) {
          const statsMap = this.#data.getStatPairMap(pkt.parsed.npcStruct.statPair);
          this.#gameTracker.updateOrCreateEntity(
            npcEntity,
            {
              id: npcEntity.entityId.toString(16),
              name: npcEntity.name,
              npcId: npcEntity.typeId,
              isPlayer: false,
              isBoss: npcEntity.isBoss,
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
          const statsMap = this.#data.getStatPairMap(pkt.parsed.npcData.statPair);

          this.#gameTracker.updateOrCreateEntity(
            npcEntity,
            {
              id: npcEntity.entityId.toString(16),
              name: npcEntity.name,
              npcId: npcEntity.typeId,
              isPlayer: false,
              isBoss: npcEntity.isBoss,
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
          //Get playerSet
          player.itemSet = this.#entityTracker.getPlayerSetOptions(pkt.parsed.pcStruct.equipItemDataList);
          const statsMap = this.#data.getStatPairMap(pkt.parsed.pcStruct.statPair);
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
          entityId: parsed.projectileInfo.projectileId,
          entityType: EntityType.Projectile,
          name: parsed.projectileInfo.projectileId.toString(16),
          ownerId: parsed.projectileInfo.ownerId,
          skillEffectId: parsed.projectileInfo.skillEffect,
          skillId: parsed.projectileInfo.skillId,
          stats: new Map(),
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
        this.#partyTracker.remove(parsed.partyInstanceId, parsed.name);
      })
      .on("PartyPassiveStatusEffectAddNotify", (pkt) => {})
      .on("PartyPassiveStatusEffectRemoveNotify", (pkt) => {})
      .on("PartyStatusEffectAddNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const effect of parsed.statusEffectDatas) {
          const sourceId: bigint = parsed.playerIdOnRefresh !== 0n ? parsed.playerIdOnRefresh : effect.sourceId;
          const sourceEnt = this.#entityTracker.getSourceEntity(sourceId);
          this.#statusTracker.RegisterStatusEffect(
            this.#statusTracker.buildStatusEffect(
              effect,
              parsed.characterId,
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
          this.#statusTracker.RemoveStatusEffect(
            parsed.characterId,
            effectId,
            StatusEffectTargetType.Party,
            parsed.reason,
            pkt.time
          );
      })
      .on("PartyStatusEffectResultNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#partyTracker.add(parsed.raidInstanceId, parsed.partyInstanceId, parsed.characterId);
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
        for (const upo of parsed.unpublishedObjects) this.#statusTracker.RemoveLocalObject(upo.objectId, pkt.time);
      })
      .on("SkillCastNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        // Same as SkillStartNotify, but only for identity skills (seems like so at least)
        let ownerEntity: Entity = this.#entityTracker.getSourceEntity(parsed.caster);
        ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsed.skillId);
        //TODO: use this to grab cast info (skill Level, tripods, runes) for further processing
        this.#gameTracker.onStartSkill(ownerEntity, parsed.skillId, pkt.time);
      })
      .on("SkillDamageAbnormalMoveNotify", (pkt) => {
        const parsedDmg = pkt.parsed;
        if (!parsedDmg) return;
        const ownerEntity: Entity = this.#entityTracker.getSourceEntity(parsedDmg.sourceId);
        parsedDmg.skillDamageAbnormalMoveEvents.forEach((event) => {
          const targetEntity = this.#entityTracker.getOrCreateEntity(event.skillDamageEvent.targetId);
          const sourceEntity = this.#entityTracker.getOrCreateEntity(parsedDmg.sourceId);
          targetEntity.stats.set(stattype.hp, event.skillDamageEvent.curHp);
          targetEntity.stats.set(stattype.max_hp, event.skillDamageEvent.maxHp);
          this.#gameTracker.onDamage(
            ownerEntity,
            sourceEntity,
            targetEntity,
            {
              skillId: parsedDmg.skillId,
              skillEffectId: parsedDmg.skillEffectId,
              damage: Number(event.skillDamageEvent.damage),
              modifier: event.skillDamageEvent.modifier,
              targetCurHp: Number(event.skillDamageEvent.curHp),
              targetMaxHp: Number(event.skillDamageEvent.maxHp),
              damageAttr: event.skillDamageEvent.damageAttr ?? damageattr.none,
              damageType: event.skillDamageEvent.damageType,
            },
            parsedDmg.skillDamageAbnormalMoveEvents.length,
            pkt.time
          );
        });
      })
      .on("SkillDamageNotify", (pkt) => {
        const parsedDmg = pkt.parsed;
        if (!parsedDmg) return;
        const ownerEntity: Entity = this.#entityTracker.getSourceEntity(parsedDmg.sourceId);

        parsedDmg.skillDamageEvents.forEach((event) => {
          const targetEntity = this.#entityTracker.getOrCreateEntity(event.targetId);
          const sourceEntity = this.#entityTracker.getOrCreateEntity(parsedDmg.sourceId);
          this.#gameTracker.onDamage(
            ownerEntity,
            sourceEntity,
            targetEntity,
            {
              skillId: parsedDmg.skillId,
              skillEffectId: parsedDmg.skillEffectId,
              damage: Number(event.damage),
              modifier: event.modifier,
              targetCurHp: Number(event.curHp),
              targetMaxHp: Number(event.maxHp),
              damageAttr: event.damageAttr ?? damageattr.none,
              damageType: event.damageType,
            },
            parsedDmg.skillDamageEvents.length,
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
        let ownerEntity: Entity = this.#entityTracker.getSourceEntity(parsed.sourceId);
        ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsed.skillId);

        if (ownerEntity.entityType === EntityType.Player) {
          const player = ownerEntity as Player;
          let skill = player.skills.get(parsed.skillId);
          if (!skill) {
            skill = { effects: new Set(), tripods: new Map() };
            player.skills.set(parsed.skillId, skill);
          }
          skill.level = parsed.skillLevel;
          if (parsed.skillOptionData.tripodIndex && parsed.skillOptionData.tripodLevel) {
            if (!skill.tripods) {
              skill.tripods = new Map();
            }
            for (const [idx, tripodRow] of (["first", "second", "third"] as (keyof TripodIndex)[]).entries()) {
              if (parsed.skillOptionData.tripodIndex[tripodRow] === 0) {
                // Tripod tier is not set
                //Cleanup tripods of the same tier
                for (let num = 1; num <= 3; num++) {
                  skill.tripods.delete(3 * idx + num);
                }
                continue;
              }
              const tripodIdx = 3 * idx + parsed.skillOptionData.tripodIndex[tripodRow];
              const tripodLevel = parsed.skillOptionData.tripodLevel[tripodRow];
              let tripodData = skill.tripods.get(tripodIdx);
              //Tripod hasn't changed: do not update effect
              if (tripodData && tripodLevel === tripodData.level) continue;

              //Tripod is init or has changed level

              //Cleanup tripods of the same tier
              for (let num = 1; num <= 3; num++) {
                skill.tripods.delete(3 * idx + num);
              }
              const effect = this.#data.skillFeature.get(parsed.skillId)?.get(tripodIdx);
              let options: SkillFeatureOption[] = [];
              if (effect) {
                //Process options
                effect.entries.forEach((entry) => {
                  if (entry.level !== 0 && entry.level !== tripodLevel) return;
                  options.push(entry);
                });
              }
              skill.tripods.set(tripodIdx, {
                level: parsed.skillOptionData.tripodLevel[tripodRow],
                options: options.sort((a, b) => b.level - a.level),
              });
            }
          }
        }
        //TODO: use this to grab cast info (skill Level, tripods, runes) for further processing
        this.#gameTracker.onStartSkill(ownerEntity, parsed.skillId, pkt.time);
      })
      .on("StatusEffectAddNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const sourceEnt = this.#entityTracker.getSourceEntity(parsed.statusEffectData.sourceId);
        this.#statusTracker.RegisterStatusEffect(
          this.#statusTracker.buildStatusEffect(
            parsed.statusEffectData,
            parsed.objectId,
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
          parsed.effectInstanceId,
          parsed.targetId,
          parsed.expirationTick,
          StatusEffectTargetType.Local
        );
      })
      .on("StatusEffectRemoveNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        for (const effectId of parsed.statusEffectIds)
          this.#statusTracker.RemoveStatusEffect(
            parsed.objectId,
            effectId,
            StatusEffectTargetType.Local,
            parsed.reason,
            pkt.time
          );
      })
      .on("StatusEffectSyncDataNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#statusTracker.SyncStatusEffect(
          parsed.effectInstanceId,
          parsed.characterId,
          parsed.objectId,
          parsed.value,
          this.#entityTracker.localPlayer.characterId
        );
      })
      .on("TriggerBossBattleStatus", (pkt) => {
        this.#gameTracker.onPhaseTransition(2, pkt.time);
      })
      .on("TriggerFinishNotify", (pkt) => {})
      .on("TriggerStartNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        switch (parsed.triggerSignalType) {
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
        this.#statusTracker.RemoveLocalObject(parsed.objectId, pkt.time);
      })
      .on("ZoneStatusEffectAddNotify", (pkt) => {})
      .on("TroopMemberUpdateMinNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        if (parsed.statusEffectDatas.length > 0) {
          for (const se of parsed.statusEffectDatas) {
            const objectId = this.#pcIdMapper.getEntityId(parsed.characterId);
            const newValCandidate1: number = se.value ? se.value.readUInt32LE() : 0;
            const newValCandidate2: number = se.value ? se.value.readUInt32LE(8) : 0;
            const newVal = newValCandidate1 < newValCandidate2 ? newValCandidate1 : newValCandidate2;
            this.#statusTracker.SyncStatusEffect(
              se.effectInstanceId,
              parsed.characterId,
              objectId,
              newVal,
              this.#entityTracker.localPlayer.characterId
            );
          }
        }
      })
      .on("ZoneStatusEffectRemoveNotify", (pkt) => {});

    this.#statusTracker
      .on("shieldApplied", (se: StatusEffect) => {
        let targetObjectId: bigint | undefined = se.targetId;
        if (se.type === StatusEffectTargetType.Party) {
          targetObjectId = this.#pcIdMapper.getEntityId(se.targetId) ?? targetObjectId;
        }
        if (targetObjectId === undefined) return;
        const sourceEntity = this.#entityTracker.getSourceEntity(se.sourceId);
        const targetEntity = this.#entityTracker.getOrCreateEntity(targetObjectId);
        this.#gameTracker.onShieldApplied(targetEntity, sourceEntity, se.statusEffectId, se.value);
      })
      .on("shieldChanged", (se: StatusEffect, oldValue: number, newVal: number) => {
        let targetObjectId: bigint | undefined = se.targetId;
        if (se.type === StatusEffectTargetType.Party) {
          targetObjectId = this.#pcIdMapper.getEntityId(se.targetId) ?? targetObjectId;
        }
        if (targetObjectId === undefined) return;
        const sourceEntity = this.#entityTracker.getSourceEntity(se.sourceId);
        const targetEntity = this.#entityTracker.getOrCreateEntity(targetObjectId);
        this.#gameTracker.onShieldUsed(targetEntity, sourceEntity, se.statusEffectId, oldValue - newVal);
      });
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
  updateOptions(options: Partial<GameTrackerOptions>) {
    this.#gameTracker.updateOptions(options);
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
