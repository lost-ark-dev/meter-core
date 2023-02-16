import { PartyTracker } from "./partytracker";

export enum StatusEffecType {
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
export class StatusTracker {
    private static instance: StatusTracker;

    PartyStatusEffectRegistry: PlayerStatusEffectRegistry;
    LocalStatusEffectRegistry: PlayerStatusEffectRegistry;

    private constructor() {
        this.PartyStatusEffectRegistry = new Map();
        this.LocalStatusEffectRegistry = new Map();
    }

    public static getInstance(): StatusTracker {
        if (!StatusTracker.instance) {
            StatusTracker.instance = new StatusTracker();
        }
        return StatusTracker.instance;
    }

    private getStatusEffectRegistryForPlayer(id: TargetId, t: StatusEffecType) : StatusEffectRegistry {
        var registry: PlayerStatusEffectRegistry = this.getPlayerRegistry(t);
        if (registry.has(id)) return registry.get(id)!;
        var newEntry : StatusEffectRegistry = new Map();
        registry.set(id, newEntry);
        return newEntry;
    }

    private getPlayerRegistry(t: StatusEffecType) : PlayerStatusEffectRegistry {
        switch (t) {
            case StatusEffecType.Local:
                return this.LocalStatusEffectRegistry;
            case StatusEffecType.Party:
                return this.PartyStatusEffectRegistry;
            default:
                break;
        }
        return this.LocalStatusEffectRegistry;
    }

    private sendCancelEffectInfo(seNew: StatusEffect, seOld: StatusEffect) {
        // TODO: Implement some callback or something
    }

    public RegisterValueUpdate(se: StatusEffect) {
        // TODO: Implement
    }

    public RemoveLocalObject(objectId: bigint) {
        this.LocalStatusEffectRegistry.delete(objectId);
    }

    public RemovePartyObject(objectId: bigint) {
        this.PartyStatusEffectRegistry.delete(objectId);
    }

    public RegisterStatusEffect(se: StatusEffect) {
        var registry = this.getStatusEffectRegistryForPlayer(se.targetId, se.type);
        // look if this effect already in on the target by instance id
        var effect = registry.get(se.instanceId);
        if (effect) {
            this.sendCancelEffectInfo(se, effect);
        }
        registry.set(se.instanceId, se);
    }

    public HasAnyStatusEffect(id: TargetId, t: StatusEffecType, statusEffectIds:number[]) : boolean {
        var registry: StatusEffectRegistry = this.getStatusEffectRegistryForPlayer(id, t);
        for (const effectId of registry) {
            for (const key of statusEffectIds) {
                if (key == effectId[1].statusEffectId)
                    return true;
            }
        }
        return false;
    }

    public HasAnyStatusEffectFromParty(targetId: TargetId, et: StatusEffecType, partyId: number, statusEffectIds:number[]) : boolean {
        var registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        for (const effect of registry) {
            if (statusEffectIds.includes(effect[1].statusEffectId)) {
                var partyIdOfSource = PartyTracker.getInstance().getPartyIdFromEntityId(effect[1].sourceId);
                if (partyIdOfSource === partyId) return true;
            }
        }
        return false;
    }

    public RemoveStatusEffect(targetId: TargetId, statusEffectId: number, et: StatusEffecType) {
        var registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        registry.delete(statusEffectId);
    }
    public GetStatusEffects(targetId: TargetId, et: StatusEffecType): Array<StatusEffect> {
        const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        return [...registry.values()];
    }

    public GetStatusEffectsFromParty(targetId: TargetId, et:StatusEffecType, partyId: number): Array<StatusEffect> {
        const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        return [...registry.values()].filter((value, _index, _array) => { return partyId == PartyTracker.getInstance().getPartyIdFromEntityId(value.sourceId); });
    }

    public Clear() {
        this.LocalStatusEffectRegistry.clear();
        this.PartyStatusEffectRegistry.clear();
    }

}