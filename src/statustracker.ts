import { PartyTracker } from "./partytracker";

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

    private getStatusEffectRegistryForPlayer(id: TargetId, t: StatusEffectTargetType) : StatusEffectRegistry {
        var registry: PlayerStatusEffectRegistry = this.getPlayerRegistry(t);
        if (registry.has(id)) return registry.get(id)!;
        var newEntry : StatusEffectRegistry = new Map();
        registry.set(id, newEntry);
        return newEntry;
    }

    private hasStatusEffectRegistryForPlayer(id: TargetId, t: StatusEffectTargetType): boolean {
        const registry: PlayerStatusEffectRegistry = this.getPlayerRegistry(t);
        return registry.has(id);
    }

    private getPlayerRegistry(t: StatusEffectTargetType) : PlayerStatusEffectRegistry {
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

    public HasAnyStatusEffect(id: TargetId, t: StatusEffectTargetType, statusEffectIds:number[]) : boolean {
        if (!this.hasStatusEffectRegistryForPlayer(id, t)) return false;
        var registry: StatusEffectRegistry = this.getStatusEffectRegistryForPlayer(id, t);
        for (const effectId of registry) {
            for (const key of statusEffectIds) {
                if (key == effectId[1].statusEffectId)
                    return true;
            }
        }
        return false;
    }

    public HasAnyStatusEffectFromParty(targetId: TargetId, et: StatusEffectTargetType, partyId: number, statusEffectIds:number[]) : boolean {
        if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return false;
        var registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        for (const effect of registry) {
            if (statusEffectIds.includes(effect[1].statusEffectId)) {
                // Dagger and Expose Weakness are for the whole raid
                if (this.ValidForWholeRaid(effect[1]))
                    return true;
                var partyIdOfSource = PartyTracker.getInstance().getPartyIdFromEntityId(effect[1].sourceId);
                if (partyIdOfSource === partyId) return true;
            }
        }
        return false;
    }

    public RemoveStatusEffect(targetId: TargetId, statusEffectId: number, et: StatusEffectTargetType) {
        if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return;
        var registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        registry.delete(statusEffectId);
    }
    public GetStatusEffects(targetId: TargetId, et: StatusEffectTargetType): Array<StatusEffect> {
        if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return [];
        const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        return [...registry.values()];
    }

    public GetStatusEffectsFromParty(targetId: TargetId, et:StatusEffectTargetType, partyId: number): Array<StatusEffect> {
        if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return [];
        const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        return [...registry.values()].filter((value, _index, _array) => {
            // Dagger and Expose Weakness are for the whole raid
            if (this.ValidForWholeRaid(value)) return true;
            return partyId == PartyTracker.getInstance().getPartyIdFromEntityId(value.sourceId);
        });
    }

    public Clear() {
        this.LocalStatusEffectRegistry.clear();
        this.PartyStatusEffectRegistry.clear();
    }

    private ValidForWholeRaid(se: StatusEffect): boolean {
        return ((se.buffCategory === StatusEffectBuffCategory.Battleitem || se.buffCategory === StatusEffectBuffCategory.Bracelet || se.buffCategory === StatusEffectBuffCategory.Etc)
            && se.category === StatusEffectCategory.Debuff
            && se.showType === StatusEffectShowType.All)
    }

}