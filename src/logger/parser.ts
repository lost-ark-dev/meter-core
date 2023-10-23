import { TypedEmitter } from "tiny-typed-emitter";
import type { MeterData, SkillFeatureOption } from "../data";
import { damageattr, itemstoragetype, stattype, triggersignaltype } from "../packets/generated/enums";
import type { GameState, GameTrackerOptions } from "./data";
import { EntityTracker, EntityType, type Entity, type Projectile, type PlayerItemData, Player } from "./entityTracker";
import { GameTracker } from "./gameTracker";
import { type Logger, LiveLogger } from "./logger";
import { PartyTracker } from "./partytracker";
import { PCIdMapper } from "./pcidmapper";
import { StatusEffectTargetType, StatusTracker, type StatusEffect } from "./statustracker";
import { TripodIndex } from "../packets/common/TripodIndex";
import { StatApi, ZoneSyncStatus } from "./statapi";
import { LogEvent } from "./logEvent";
import { LogStreamEvent } from "../packets/log/LogStreamEvent";
import { logId } from "../packets/log/logIds";
import { MigrationExecute as WriteMigrationExecute } from "../packets/log/writes";

export class Parser extends TypedEmitter<ParserEvent> {
  #logger: Logger;
  #data: MeterData;

  #pcIdMapper: PCIdMapper;
  #partyTracker: PartyTracker;
  #statusTracker: StatusTracker;
  #entityTracker: EntityTracker;
  #gameTracker: GameTracker;
  #statApi: StatApi;

  //TODO: refactor
  #wasWipe: boolean;
  #wasKill: boolean;

  constructor(logger: Logger, data: MeterData, clientId: string, options: Partial<GameTrackerOptions>) {
    super();
    this.#logger = logger;
    this.#data = data;

    this.#pcIdMapper = new PCIdMapper();
    this.#partyTracker = new PartyTracker(this.#pcIdMapper);
    this.#statusTracker = new StatusTracker(this.#partyTracker, this.#data, options.isLive ?? true);
    this.#entityTracker = new EntityTracker(this.#pcIdMapper, this.#partyTracker, this.#statusTracker, this.#data);
    this.#statApi = new StatApi(
      this.#entityTracker,
      clientId,
      isLiveLogger(this.#logger, options.isLive) // TOFIX That 2nd check is for loa-details, as tsup, when having multiple entry points does code dupe & the LiveLoger used by loa-details is different from this one
        ? (this.#logger as LiveLogger)
        : undefined
    );
    this.#gameTracker = new GameTracker(this.#entityTracker, this.#statusTracker, this.#statApi, this.#data, options);

    this.#gameTracker.emit = this.emit.bind(this); //forward emits
    /*
    this.#gameTracker.emit = <U extends keyof ParserEvent>(event: U, ...args: Parameters<ParserEvent[U]>): boolean => {
      return this.emit(event, ...args);
    };
    */

    this.#wasWipe = false;
    this.#wasKill = false;

    let preMeter = 0;
    let postMeter = 0;
    let gain = 0;

    if (this.#gameTracker.options.isLive) {
      setInterval(this.broadcastStateChange.bind(this), 100);
    }

    this.#logger
      .on("APP_StatApi", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        this.#statApi.updatePlayerStats(parsed.players);
      })
      //.on("APP_DroppedPackets", (pkt) => {})
      .on("AbilityChangeNotify", (pkt) => {})
      .on("ActiveAbilityNotify", (pkt) => {})
      .on("AddonSkillFeatureChangeNotify", (pkt) => {})
      .on("BlockSkillStateNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        console.log(pkt.time.toLocaleTimeString()+"###Stagger" + "|" + parsed.objectId + "|" + parsed.paralyzationMaxPoint + "|" + parsed.paralyzationPoint + "|" + parsed.type)
      })
      .on("CounterAttackNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        const source = this.#entityTracker.entities.get(parsed.sourceId);
        console.log(pkt.time.toLocaleTimeString()+",CounterAttackNotify,"+source?.name+","+parsed.type)
      })
      .on("DeathNotify", (pkt) => {})
      .on("EquipChangeNotify", (pkt) => {})
      .on("EquipLifeToolChangeNotify", (pkt) => {})
      .on("IdentityStanceChangeNotify", (pkt) => {})
      .on("IdentityGaugeChangeNotify", (pkt) => {
        const parsed = pkt.parsed;

        if (!parsed) return;
        console.log("###Identity" + "|" + parsed.playerId + "|" + parsed.identityGauge1 + "|" + parsed.identityGauge2 + "|" + parsed.identityGauge3);
      })
      .on("InitAbility", (pkt) => {})
      .on("InitEnv", (pkt) => {})
      .on("InitLocal", (pkt) => {})
      .on("InitPC", (pkt) => {})
      .on("InitItem", (pkt) => {})
      .on("MigrationExecute", (pkt) => {})
      .on("NewNpc", (pkt) => {})
      .on("NewPC", (pkt) => {})
      .on("NewProjectile", (pkt) => {})
      .on("ParalyzationStateNotify", (pkt) => {})
      .on("PartyInfo", (pkt) => {})
      .on("PartyLeaveResult", (pkt) => {})
      .on("PartyPassiveStatusEffectAddNotify", (pkt) => {})
      .on("PartyPassiveStatusEffectRemoveNotify", (pkt) => {})
      .on("PartyStatusEffectAddNotify", (pkt) => {})
      .on("PartyStatusEffectRemoveNotify", (pkt) => {})
      .on("PartyStatusEffectResultNotify", (pkt) => {})
      .on("PassiveStatusEffectAddNotify", (pkt) => {})
      .on("PassiveStatusEffectRemoveNotify", (pkt) => {})
      .on("RaidBegin", (pkt) => {})
      .on("ZoneMemberLoadStatusNotify", (pkt) => {})
      .on("RaidBossKillNotify", (pkt) => {})
      .on("RaidResult", (pkt) => {})
      .on("RemoveObject", (pkt) => {})
      .on("SkillCastNotify", (pkt) => {})
      .on("SkillDamageAbnormalMoveNotify", (pkt) => {})
      .on("SkillDamageNotify", (pkt) => {})
      .on("SkillStageNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        let ownerEntity: Entity = this.#entityTracker.getSourceEntity(parsed.sourceId);
        ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsed.skillId);
        if(ownerEntity.entityType == EntityType.Npc){
          console.log(pkt.time.toLocaleTimeString()+",SkillStageNotify,"+parsed.skillId+","+this.#data.getSkillName(parsed.skillId)+","+parsed.stage)
          }
      })
      .on("SkillStartNotify", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        
        let ownerEntity: Entity = this.#entityTracker.getSourceEntity(parsed.sourceId);
        ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsed.skillId);
        if(ownerEntity.entityType == EntityType.Npc){
            console.log(pkt.time.toLocaleTimeString()+",SkillStartNotify,"+parsed.skillId+","+this.#data.getSkillName(parsed.skillId)+","+ownerEntity.entityType+","+ownerEntity.name)
        }
      })
      .on("StatusEffectAddNotify", (pkt) => {})
      .on("StatusEffectDurationNotify", (pkt) => {})
      .on("StatusEffectRemoveNotify", (pkt) => {})
      .on("StatusEffectSyncDataNotify", (pkt) => {})
      .on("TriggerBossBattleStatus", (pkt) => {
        const parsed = pkt.parsed;
        if (!parsed) return;
        console.log(pkt.time.toLocaleTimeString()+",TriggerBossBattleStatus,"+parsed.step+","+parsed.triggerId+","+parsed.unk2_m)
      })
      .on("TriggerFinishNotify", (pkt) => {})
      .on("TriggerStartNotify", (pkt) => {})
      .on("TroopMemberUpdateMinNotify", (pkt) => {})
      .on("ZoneObjectUnpublishNotify", (pkt) => {})
      .on("ZoneStatusEffectAddNotify", (pkt) => {})
      .on("TroopMemberUpdateMinNotify", (pkt) => {})
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

  onConnect(ip: string) {
    if (!this.#statApi.ip) {
      this.#statApi.ip = ip.split(":")[0]!;
      //Create fake MigrationExecute for log file
      if (isLiveLogger(this.#logger, this.#gameTracker.options.isLive)) {
        (this.#logger as LiveLogger).appendLog(
          new LogEvent(
            {
              account_CharacterId1: 0n,
              serverAddr: ip,
              account_CharacterId2: 0n,
            },
            logId.MigrationExecute,
            WriteMigrationExecute
          )
        );
      }
    }
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

function isLiveLogger(logger: Logger, isLive?: boolean) {
  return logger instanceof LiveLogger || ((logger as LiveLogger).appendLog && isLive);
}
