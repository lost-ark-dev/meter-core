import { TypedEmitter } from "tiny-typed-emitter";
import { PartyTracker } from "./partytracker";

export enum StatusEffecTargetType {
    Party = 0,
    Local = 1,
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
    type: StatusEffecTargetType;
    value: number;
    effectType:  StatusEffectType;
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
    private static instance: StatusTracker;

    PartyStatusEffectRegistry: PlayerStatusEffectRegistry;
    LocalStatusEffectRegistry: PlayerStatusEffectRegistry;

    private constructor() {
        super();
        this.PartyStatusEffectRegistry = new Map();
        this.LocalStatusEffectRegistry = new Map();
    }

    public static getInstance(): StatusTracker {
        if (!StatusTracker.instance) {
            StatusTracker.instance = new StatusTracker();
        }
        return StatusTracker.instance;
    }

    private getStatusEffectRegistryForPlayer(id: TargetId, t: StatusEffecTargetType) : StatusEffectRegistry {
        var registry: PlayerStatusEffectRegistry = this.getPlayerRegistry(t);
        if (registry.has(id)) return registry.get(id)!;
        var newEntry : StatusEffectRegistry = new Map();
        registry.set(id, newEntry);
        return newEntry;
    }

    private getPlayerRegistry(t: StatusEffecTargetType) : PlayerStatusEffectRegistry {
        switch (t) {
            case StatusEffecTargetType.Local:
                return this.LocalStatusEffectRegistry;
            case StatusEffecTargetType.Party:
                return this.PartyStatusEffectRegistry;
            default:
                break;
        }
        return this.LocalStatusEffectRegistry;
    }

    private sendCancelEffectInfo(seNew: StatusEffect, seOld: StatusEffect) {
        // TODO: Implement some callback or something
    }

    private RegisterValueUpdate(se: StatusEffect, oldValue: number, newValue: number) {
        if (se.effectType === StatusEffectType.Shield) {
            this.emit("shieldChanged", se, oldValue, newValue);
        }
    }

    public RemoveLocalObject(objectId: bigint) {
        this.LocalStatusEffectRegistry.delete(objectId);
    }

    public RemovePartyObject(objectId: bigint) {
        this.PartyStatusEffectRegistry.delete(objectId);
    }

    public SyncStatusEffect(instanceId: number, targetId: bigint, value: number, et: StatusEffecTargetType) {
        // this updates status effects for party members and other
        // if the characterId is not in the party status effect registry try the registry for local objects
        const registry: StatusEffectRegistry = this.getStatusEffectRegistryForPlayer(targetId, et);
        const se = registry.get(instanceId);
        if (!se) return;
        const oldValue = se.value;
        se.value = value;
        this.RegisterValueUpdate(se, oldValue, value);
    }

    public RegisterStatusEffect(se: StatusEffect) {
        var registry = this.getStatusEffectRegistryForPlayer(se.targetId, se.type);
        // look if this effect already in on the target by instance id
        var effect = registry.get(se.instanceId);
        if (effect) {
            this.sendCancelEffectInfo(se, effect);
        }
        registry.set(se.instanceId, se);

        if (!effect && se.effectType === StatusEffectType.Shield) {
            this.emit("shieldApplied", se);
        }
    }

    public HasAnyStatusEffect(id: TargetId, t: StatusEffecTargetType, statusEffectIds:number[]) : boolean {
        var registry: StatusEffectRegistry = this.getStatusEffectRegistryForPlayer(id, t);
        for (const effectId of registry) {
            for (const key of statusEffectIds) {
                if (key == effectId[1].statusEffectId)
                    return true;
            }
        }
        return false;
    }

    public HasAnyStatusEffectFromParty(targetId: TargetId, et: StatusEffecTargetType, partyId: number, statusEffectIds:number[]) : boolean {
        var registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        for (const effect of registry) {
            if (statusEffectIds.includes(effect[1].statusEffectId)) {
                var partyIdOfSource = PartyTracker.getInstance().getPartyIdFromEntityId(effect[1].sourceId);
                if (partyIdOfSource === partyId) return true;
            }
        }
        return false;
    }

    public RemoveStatusEffect(targetId: TargetId, statusEffectId: number, et: StatusEffecTargetType) {
        var registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        registry.delete(statusEffectId);
    }
    public GetStatusEffects(targetId: TargetId, et: StatusEffecTargetType): Array<StatusEffect> {
        const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        return [...registry.values()];
    }

    public GetStatusEffectsFromParty(targetId: TargetId, et:StatusEffecTargetType, partyId: number): Array<StatusEffect> {
        const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        return [...registry.values()].filter((value, _index, _array) => { return partyId == PartyTracker.getInstance().getPartyIdFromEntityId(value.sourceId); });
    }

    public Clear() {
        this.LocalStatusEffectRegistry.clear();
        this.PartyStatusEffectRegistry.clear();
    }

}