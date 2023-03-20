import PartyTracker from "./partytracker";

export const enum StatusEffecType {
  Party = 0,
  Local = 1,
}

export interface StatusEffect {
  instanceId: number;
  statusEffectId: number;
  targetId: TargetId;
  sourceId: TargetId;
  started: Date;
  type: StatusEffecType;
  value: number;
}

type StatusEffectInstanceId = number;
type TargetId = bigint;
type StatusEffectRegistry = Map<StatusEffectInstanceId, StatusEffect>;
type PlayerStatusEffectRegistry = Map<TargetId, StatusEffectRegistry>;
class StatusTracker {
  #PartyStatusEffectRegistry: PlayerStatusEffectRegistry;
  #LocalStatusEffectRegistry: PlayerStatusEffectRegistry;

  constructor() {
    this.#PartyStatusEffectRegistry = new Map();
    this.#LocalStatusEffectRegistry = new Map();
  }

  #getStatusEffectRegistryForPlayer(id: TargetId, t: StatusEffecType) {
    const registry: PlayerStatusEffectRegistry = this.#getPlayerRegistry(t);
    if (registry.has(id)) return registry.get(id)!;
    const newEntry: StatusEffectRegistry = new Map();
    registry.set(id, newEntry);
    return newEntry;
  }

  #getPlayerRegistry(t: StatusEffecType) {
    switch (t) {
      case StatusEffecType.Local:
        return this.#LocalStatusEffectRegistry;
      case StatusEffecType.Party:
        return this.#PartyStatusEffectRegistry;
      default:
        break;
    }
    return this.#LocalStatusEffectRegistry;
  }

  #sendCancelEffectInfo(seNew: StatusEffect, seOld: StatusEffect) {
    // TODO: Implement some callback or something
  }

  registerValueUpdate(se: StatusEffect) {
    // TODO: Implement
  }

  removeLocalObject(objectId: bigint) {
    this.#LocalStatusEffectRegistry.delete(objectId);
  }

  removePartyObject(objectId: bigint) {
    this.#PartyStatusEffectRegistry.delete(objectId);
  }

  registerStatusEffect(se: StatusEffect) {
    const registry = this.#getStatusEffectRegistryForPlayer(se.targetId, se.type);
    // look if this effect already in on the target by instance id
    const effect = registry.get(se.instanceId);
    if (effect) {
      this.#sendCancelEffectInfo(se, effect);
    }
    registry.set(se.instanceId, se);
  }

  hasAnyStatusEffect(id: TargetId, t: StatusEffecType, statusEffectIds: number[]) {
    const registry: StatusEffectRegistry = this.#getStatusEffectRegistryForPlayer(id, t);
    for (const effectId of registry) {
      for (const key of statusEffectIds) {
        if (key == effectId[1].statusEffectId) return true;
      }
    }
    return false;
  }

  hasAnyStatusEffectFromParty(targetId: TargetId, et: StatusEffecType, partyId: number, statusEffectIds: number[]) {
    const registry = this.#getStatusEffectRegistryForPlayer(targetId, et);
    for (const effect of registry) {
      if (statusEffectIds.includes(effect[1].statusEffectId)) {
        const partyIdOfSource = PartyTracker.getPartyIdFromEntityId(effect[1].sourceId);
        if (partyIdOfSource === partyId) return true;
      }
    }
    return false;
  }

  removeStatusEffect(targetId: TargetId, statusEffectId: number, et: StatusEffecType) {
    const registry = this.#getStatusEffectRegistryForPlayer(targetId, et);
    registry.delete(statusEffectId);
  }

  getStatusEffects(targetId: TargetId, et: StatusEffecType) {
    const registry = this.#getStatusEffectRegistryForPlayer(targetId, et);
    return [...registry.values()];
  }

  getStatusEffectsFromParty(targetId: TargetId, et: StatusEffecType, partyId: number) {
    const registry = this.#getStatusEffectRegistryForPlayer(targetId, et);
    return [...registry.values()].filter((value, _index, _array) => {
      return partyId == PartyTracker.getPartyIdFromEntityId(value.sourceId);
    });
  }

  clear() {
    this.#LocalStatusEffectRegistry.clear();
    this.#PartyStatusEffectRegistry.clear();
  }
}

export default new StatusTracker();
