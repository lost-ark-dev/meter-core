import { TypedEmitter } from "tiny-typed-emitter";
import type { MeterData } from "../data";
import type { StatusEffectDataLog } from "../packets/log/structures/StatusEffectData";
import type { NewPC } from "../packets/log/types";
import { Entity, EntityType, Player } from "./entityTracker";
import type { PartyTracker } from "./partytracker";
import { statuseffectexpiredreasontype } from "../packets/generated/enums";

export enum StatusEffectTargetType {
  Party = 0,
  Local = 1,
}
export enum StatusEffectCategory {
  Other = 0,
  Debuff = 1,
}

export enum StatusEffectBuffCategory {
  Other = 0,
  Bracelet = 1,
  Etc = 2,
  Battleitem = 3,
}

export enum StatusEffectShowType {
  Other = 0,
  All = 1,
}

export enum StatusEffectType {
  Shield = 0,
  Other = 1,
}

export interface StatusEffect {
  instanceId: number;
  statusEffectId: number;
  targetId: TargetId;
  sourceId: TargetId;
  started: Date;
  type: StatusEffectTargetType;
  value: number;
  category: StatusEffectCategory;
  buffCategory: StatusEffectBuffCategory;
  showType: StatusEffectShowType;
  effectType: StatusEffectType;
  expirationDelay: number;
  expirationTimer: NodeJS.Timer | undefined;
  expireAt: Date | undefined;
  occurTime: Date;
  timestamp: bigint;
  name: string;
  pktTime: Date;
}

interface StatusTrackerEvents {
  shieldChanged: (se: StatusEffect, oldValue: number, newValue: number) => void;
  shieldApplied: (se: StatusEffect) => void;
}

type StatusEffectInstanceId = number;
type TargetId = bigint;
type StatusEffectRegistry = Map<StatusEffectInstanceId, StatusEffect>;
type PlayerStatusEffectRegistry = Map<TargetId, StatusEffectRegistry>;
export class StatusTracker extends TypedEmitter<StatusTrackerEvents> {
  static TIMEOUT_DELAY_MS = 1000;

  PartyStatusEffectRegistry: PlayerStatusEffectRegistry;
  LocalStatusEffectRegistry: PlayerStatusEffectRegistry;

  #partyTracker: PartyTracker;
  #data: MeterData;

  private debug;
  private trace = false;

  constructor(partyTracker: PartyTracker, data: MeterData, debug = Boolean(process.env["DEV"])) {
    super();
    this.PartyStatusEffectRegistry = new Map();
    this.LocalStatusEffectRegistry = new Map();
    this.debug = debug;
    this.#partyTracker = partyTracker;
    this.#data = data;
  }

  private getStatusEffectRegistryForPlayer(id: TargetId, t: StatusEffectTargetType): StatusEffectRegistry {
    const registry: PlayerStatusEffectRegistry = this.getPlayerRegistry(t);
    const ser = registry.get(id);
    if (ser) return ser;
    const newEntry: StatusEffectRegistry = new Map();
    registry.set(id, newEntry);
    return newEntry;
  }

  private hasStatusEffectRegistryForPlayer(id: TargetId, t: StatusEffectTargetType): boolean {
    const registry: PlayerStatusEffectRegistry = this.getPlayerRegistry(t);
    return registry.has(id);
  }

  private getPlayerRegistry(t: StatusEffectTargetType): PlayerStatusEffectRegistry {
    switch (t) {
      case StatusEffectTargetType.Local:
        return this.LocalStatusEffectRegistry;
      case StatusEffectTargetType.Party:
        return this.PartyStatusEffectRegistry;
      default:
        break;
    }
    return this.LocalStatusEffectRegistry;
  }

  public RemoveLocalObject(objectId: bigint) {
    const registry = this.LocalStatusEffectRegistry.get(objectId);
    if (registry) {
      for (const [, se] of registry) {
        this.RemoveStatusEffect(objectId, se.instanceId, StatusEffectTargetType.Local, undefined);
      }
    }
    this.LocalStatusEffectRegistry.delete(objectId);
  }

  public RemovePartyObject(objectId: bigint) {
    const registry = this.PartyStatusEffectRegistry.get(objectId);
    if (registry) {
      for (const [, se] of registry) {
        this.RemoveStatusEffect(objectId, se.instanceId, StatusEffectTargetType.Party, undefined);
      }
    }
    this.PartyStatusEffectRegistry.delete(objectId);
  }

  public RegisterStatusEffect(se: StatusEffect) {
    const registry = this.getStatusEffectRegistryForPlayer(se.targetId, se.type);
    const oldEffect = registry.get(se.instanceId);
    if (oldEffect) {
      if (oldEffect.expirationTimer) {
        clearTimeout(oldEffect.expirationTimer);
        oldEffect.expirationTimer = undefined;
      }
    } else if (se.effectType === StatusEffectType.Shield) {
      this.emit("shieldApplied", se);
    }
    registry.set(se.instanceId, se);

    this.SetupStatusEffectTimeout(se);
  }

  public HasAnyStatusEffect(id: TargetId, t: StatusEffectTargetType, statusEffectIds: number[]): boolean {
    if (!this.hasStatusEffectRegistryForPlayer(id, t)) return false;
    const registry: StatusEffectRegistry = this.getStatusEffectRegistryForPlayer(id, t);
    for (const [, se] of registry) {
      for (const key of statusEffectIds) {
        if (key === se.statusEffectId) return true;
      }
    }
    return false;
  }

  public HasAnyStatusEffectFromParty(
    targetId: TargetId,
    et: StatusEffectTargetType,
    partyId: number,
    statusEffectIds: number[]
  ): boolean {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return false;
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    for (const effect of registry) {
      if (statusEffectIds.includes(effect[1].statusEffectId)) {
        // Dagger and Expose Weakness are for the whole raid
        if (this.ValidForWholeRaid(effect[1])) return true;
        const partyIdOfSource = this.#partyTracker.getPartyIdFromEntityId(effect[1].sourceId);
        if (partyIdOfSource === partyId) return true;
      }
    }
    return false;
  }

  public RemoveStatusEffect(
    targetId: TargetId,
    statusEffectId: number,
    et: StatusEffectTargetType,
    reason: number | undefined
  ) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return;
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    const statusEffect = registry.get(statusEffectId);
    if (statusEffect) {
      clearTimeout(statusEffect.expirationTimer);
      statusEffect.expirationTimer = undefined;
      registry.delete(statusEffectId);
      if (reason === statuseffectexpiredreasontype.beattacked) {
        this.RegisterValueUpdate(statusEffect, statusEffect.value, 0);
      }
    }
  }
  public GetStatusEffects(targetId: TargetId, et: StatusEffectTargetType): Array<StatusEffect> {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return [];
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    return [...registry.values()];
  }

  public GetStatusEffectsFromParty(
    targetId: TargetId,
    et: StatusEffectTargetType,
    partyId: number
  ): Array<StatusEffect> {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return [];
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    return [...registry.values()].filter((value) => {
      // Dagger and Expose Weakness are for the whole raid
      if (this.ValidForWholeRaid(value)) return true;
      return partyId === this.#partyTracker.getPartyIdFromEntityId(value.sourceId);
    });
  }

  public Clear() {
    let seCountInLocal = 0;
    for (const [, reg] of this.LocalStatusEffectRegistry) {
      for (const [, se] of reg) {
        this.RemoveStatusEffect(se.targetId, se.instanceId, se.type, undefined);
      }
      seCountInLocal += reg.size;
    }
    let seCountInParty = 0;
    for (const [, reg] of this.PartyStatusEffectRegistry) {
      for (const [, se] of reg) {
        this.RemoveStatusEffect(se.targetId, se.instanceId, se.type, undefined);
      }
      seCountInParty += reg.size;
    }
    if (this.trace) console.log("On Clear SE in local", seCountInLocal, "in party", seCountInParty);
    this.LocalStatusEffectRegistry.clear();
    this.PartyStatusEffectRegistry.clear();
  }

  public UpdateDuration(instanceId: number, targetId: bigint, timestamp: bigint, et: StatusEffectTargetType): void {
    const registry: StatusEffectRegistry = this.getStatusEffectRegistryForPlayer(targetId, et);
    const se = registry.get(instanceId);
    if (se) {
      const durationExtensionMs = timestamp - se.timestamp;
      if (this.trace) console.log("Clearing timeout for", se.instanceId, "because of duration change");

      if (se.expirationTimer) {
        clearTimeout(se.expirationTimer);
        se.expirationTimer = undefined;
      }
      if (se.expireAt) {
        const timeoutTime = se.expireAt.getTime() + Number(durationExtensionMs);
        const timeoutDelay = timeoutTime - se.pktTime.getTime();
        if (timeoutDelay > 0) {
          if (this.trace)
            console.log(
              "Extending duration by",
              durationExtensionMs,
              "ms",
              "New timeout delay",
              timeoutDelay,
              "from",
              se.expireAt.toISOString(),
              "to",
              new Date(timeoutTime).toISOString()
            );
          se.expirationTimer = setTimeout(this.ExpireStatusEffectByTimeout.bind(this, se), timeoutDelay);
          se.expireAt = new Date(timeoutTime);
          se.timestamp = timestamp;
        } else {
          se.expireAt = undefined;
        }
      }
    } else if (this.debug) {
      console.error(
        "Tried to update duration for SE with instanceId",
        instanceId,
        " on target",
        targetId,
        "but where is no such SE registered"
      );
    }
  }

  public SyncStatusEffect(
    instanceId: number,
    characterId: bigint,
    objectId: bigint | undefined,
    value: number,
    localCharacterId: bigint
  ): void {
    // this updates status effects for party members and other
    const usePartyStatusEffects = this.#shouldUsePartyStatusEffect(characterId, localCharacterId);
    const et = usePartyStatusEffects ? StatusEffectTargetType.Party : StatusEffectTargetType.Local;
    const targetId = usePartyStatusEffects ? characterId : objectId;
    if (!targetId) return; // we need to sync a local player but have no objectId
    const registry: StatusEffectRegistry = this.getStatusEffectRegistryForPlayer(targetId, et);
    const se = registry.get(instanceId);
    if (!se) return;
    const oldValue = se.value;
    se.value = value;
    this.RegisterValueUpdate(se, oldValue, value);
  }

  private ValidForWholeRaid(se: StatusEffect): boolean {
    return (
      (se.buffCategory === StatusEffectBuffCategory.Battleitem ||
        se.buffCategory === StatusEffectBuffCategory.Bracelet ||
        se.buffCategory === StatusEffectBuffCategory.Etc) &&
      se.category === StatusEffectCategory.Debuff &&
      se.showType === StatusEffectShowType.All
    );
  }

  private SetupStatusEffectTimeout(se: StatusEffect) {
    // set up the timeout to expire effect if it was not canceled by a pkt by then
    // only setup expiration timer if we have a duration in the pkt, for no duration it is -1
    if (se.expirationDelay > 0 && se.expirationDelay < 604800) {
      // don't set timeout >= 7d
      // we use the later date of state date from the pkt and then time the pkt arrived at our client
      // because we don't want to expire it if we recevie a remove pkt in the future
      const startDate = se.started.getTime() > se.occurTime.getTime() ? se.started : se.occurTime;
      // se.expirationDelay is in seconds as float
      const expirationDelayInMs = Math.ceil(se.expirationDelay * 1000);
      const timeoutDelay =
        startDate.getTime() + expirationDelayInMs + StatusTracker.TIMEOUT_DELAY_MS - se.pktTime.getTime();
      se.expireAt = new Date(se.pktTime.getTime() + timeoutDelay);
      if (this.trace)
        console.log("Setting up statuseffect expiration timer for", se.name, se.instanceId, "with delay", timeoutDelay);
      se.expirationTimer = setTimeout(this.ExpireStatusEffectByTimeout.bind(this, se), timeoutDelay);
    }
  }

  private ExpireStatusEffectByTimeout(se: StatusEffect) {
    if (this.debug) console.error("Triggered timeout on", se.name, "with iid", se.instanceId);
    this.RemoveStatusEffect(se.targetId, se.instanceId, se.type, undefined);
  }

  private RegisterValueUpdate(se: StatusEffect, oldValue: number, newValue: number) {
    if (se.effectType === StatusEffectType.Shield) {
      this.emit("shieldChanged", se, oldValue, newValue);
    }
  }

  newPC(parsed: NewPC, localCharacterId: bigint, pktTime: Date) {
    const shouldUsePartyStatusEffects = this.#shouldUsePartyStatusEffect(parsed.PCStruct.CharacterId, localCharacterId);
    if (shouldUsePartyStatusEffects) {
      this.RemovePartyObject(parsed.PCStruct.CharacterId);
    } else {
      this.RemoveLocalObject(parsed.PCStruct.PlayerId);
    }
    for (const se of parsed.PCStruct.statusEffectDatas) {
      this.RegisterStatusEffect(
        this.buildStatusEffect(
          se,
          shouldUsePartyStatusEffects ? parsed.PCStruct.CharacterId : parsed.PCStruct.PlayerId,
          se.SourceId,
          shouldUsePartyStatusEffects ? StatusEffectTargetType.Party : StatusEffectTargetType.Local,
          pktTime
        )
      );
    }
  }
  #shouldUsePartyStatusEffectForEntity(entity: Entity, localCharacterId: bigint) {
    if (entity.entityType !== EntityType.Player) return false;
    const player: Player = entity as Player;
    return this.#shouldUsePartyStatusEffect(player.characterId, localCharacterId);
  }
  #shouldUsePartyStatusEffect(characterId: bigint, localCharacterId: bigint) {
    const localPlayerIsInParty = this.#partyTracker.isCharacterInParty(localCharacterId);
    const affectedPlayerIsInParty = this.#partyTracker.isCharacterInParty(characterId);
    if (localPlayerIsInParty) {
      if (!affectedPlayerIsInParty || characterId === localCharacterId) {
        // not in party or local player use local status effects
        return false;
      }
      const localPlayerPartyId = this.#partyTracker.getPartyIdFromCharacterId(localCharacterId);
      const affectedPlayerPartyId = this.#partyTracker.getPartyIdFromCharacterId(characterId);
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
  buildStatusEffect(
    se: StatusEffectDataLog,
    targetId: bigint,
    sourceId: bigint,
    targetType: StatusEffectTargetType,
    pktTime: Date
  ): StatusEffect {
    const newValCandidate1: number = se.Value ? se.Value.readUInt32LE() : 0;
    const newValCandidate2: number = se.Value ? se.Value.readUInt32LE(8) : 0;
    const newVal = newValCandidate1 < newValCandidate2 ? newValCandidate1 : newValCandidate2;
    let statusEffectCategory = StatusEffectCategory.Other;
    let statusEffectBuffCategory = StatusEffectBuffCategory.Other;
    let showType = StatusEffectShowType.Other;
    let seName = "Unknown";
    let statusEffectType = StatusEffectType.Other;
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
      switch (effectInfo.type) {
        case "shield":
          statusEffectType = StatusEffectType.Shield;
          break;
      }
    }
    return {
      instanceId: se.EffectInstanceId,
      sourceId: sourceId,
      started: pktTime,
      statusEffectId: se.StatusEffectId,
      targetId: targetId,
      type: targetType,
      value: newVal,
      buffCategory: statusEffectBuffCategory,
      category: statusEffectCategory,
      showType: showType,
      expirationDelay: se.TotalTime,
      expirationTimer: undefined,
      timestamp: se.EndTick,
      expireAt: undefined,
      occurTime: se.OccurTime,
      name: seName,
      pktTime: pktTime,
      effectType: statusEffectType,
    };
  }
  getStatusEffects(
    sourceEntity: Entity,
    targetEntity: Entity | undefined,
    localCharacterId: bigint
  ): [[number, bigint][], [number, bigint][]] {
    const statusEffectsOnTarget: [number, bigint][] = [];
    const statusEffectsOnSource: [number, bigint][] = [];

    const shouldUsePartyBuffForSource = this.#shouldUsePartyStatusEffectForEntity(sourceEntity, localCharacterId);
    const sourceEffects = this.GetStatusEffects(
      shouldUsePartyBuffForSource ? (sourceEntity as Player).characterId : sourceEntity.entityId,
      shouldUsePartyBuffForSource ? StatusEffectTargetType.Party : StatusEffectTargetType.Local
    );
    for (const se of sourceEffects) statusEffectsOnSource.push([se.statusEffectId, se.sourceId]);

    if (targetEntity) {
      const shouldUsePartyBuffForTarget = this.#shouldUsePartyStatusEffectForEntity(targetEntity, localCharacterId);
      const sourceIsInParty = this.#partyTracker.isEntityInParty(sourceEntity.entityId);
      const sourcePartyId = sourceIsInParty
        ? this.#partyTracker.getPartyIdFromEntityId(sourceEntity.entityId)
        : undefined;
      const targetEffects =
        sourceIsInParty && sourcePartyId
          ? this.GetStatusEffectsFromParty(
              shouldUsePartyBuffForTarget ? (targetEntity as Player).characterId : targetEntity.entityId,
              shouldUsePartyBuffForTarget ? StatusEffectTargetType.Party : StatusEffectTargetType.Local,
              sourcePartyId
            )
          : this.GetStatusEffects(
              shouldUsePartyBuffForTarget ? (targetEntity as Player).characterId : targetEntity.entityId,
              shouldUsePartyBuffForTarget ? StatusEffectTargetType.Party : StatusEffectTargetType.Local
            );
      for (const se of targetEffects) statusEffectsOnTarget.push([se.statusEffectId, se.sourceId]);
    }
    return [statusEffectsOnSource, statusEffectsOnTarget];
  }
}
