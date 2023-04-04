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
    expirationDelay: number;
    expirationTimer: NodeJS.Timer | undefined;
    expireAt: Date | undefined;
    occurTime: Date;
    timestamp: bigint;
    name: string;
}

type StatusEffectInstanceId = number;
type TargetId = bigint;
type StatusEffectRegistry = Map<StatusEffectInstanceId, StatusEffect>;
type PlayerStatusEffectRegistry = Map<TargetId, StatusEffectRegistry>;
export class StatusTracker {
    static TIMEOUT_DELAY_MS = 1000;
    private static instance: StatusTracker;

    PartyStatusEffectRegistry: PlayerStatusEffectRegistry;
    LocalStatusEffectRegistry: PlayerStatusEffectRegistry;

    private debug;
    private trace = false;

    private constructor(debug = Boolean(process.env["DEV"])) {
        this.PartyStatusEffectRegistry = new Map();
        this.LocalStatusEffectRegistry = new Map();
        this.debug = debug;
    }

    public static getInstance(): StatusTracker {
        if (!StatusTracker.instance) {
            StatusTracker.instance = new StatusTracker();
        }
        return StatusTracker.instance;
    }

    private getStatusEffectRegistryForPlayer(id: TargetId, t: StatusEffectTargetType) : StatusEffectRegistry {
        const registry: PlayerStatusEffectRegistry = this.getPlayerRegistry(t);
        const ser = registry.get(id);
        if (ser) return ser;
        const newEntry : StatusEffectRegistry = new Map();
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

    public RemoveLocalObject(objectId: bigint) {
        const registry = this.LocalStatusEffectRegistry.get(objectId);
        if (registry) {
            for (const [,se] of registry) {
                this.RemoveStatusEffect(objectId, se.instanceId, StatusEffectTargetType.Local);
            }
        }
        this.LocalStatusEffectRegistry.delete(objectId);
    }

    public RemovePartyObject(objectId: bigint) {
        const registry = this.PartyStatusEffectRegistry.get(objectId);
        if (registry) {
            for (const [,se] of registry) {
                this.RemoveStatusEffect(objectId, se.instanceId, StatusEffectTargetType.Party);
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
        }
        registry.set(se.instanceId, se);

        this.SetupStatusEffectTimeout(se);
    }

    public HasAnyStatusEffect(id: TargetId, t: StatusEffectTargetType, statusEffectIds:number[]) : boolean {
        if (!this.hasStatusEffectRegistryForPlayer(id, t)) return false;
        const registry: StatusEffectRegistry = this.getStatusEffectRegistryForPlayer(id, t);
        for (const [, se] of registry) {
            for (const key of statusEffectIds) {
                if (key === se.statusEffectId)
                    return true;
            }
        }
        return false;
    }

    public HasAnyStatusEffectFromParty(targetId: TargetId, et: StatusEffectTargetType, partyId: number, statusEffectIds:number[]) : boolean {
        if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return false;
        const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        for (const effect of registry) {
            if (statusEffectIds.includes(effect[1].statusEffectId)) {
                // Dagger and Expose Weakness are for the whole raid
                if (this.ValidForWholeRaid(effect[1]))
                    return true;
                const partyIdOfSource = PartyTracker.getInstance().getPartyIdFromEntityId(effect[1].sourceId);
                if (partyIdOfSource === partyId) return true;
            }
        }
        return false;
    }

    public RemoveStatusEffect(targetId: TargetId, statusEffectId: number, et: StatusEffectTargetType) {
        if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return;
        const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        const statusEffect = registry.get(statusEffectId);
        if (statusEffect) {
            clearTimeout(statusEffect.expirationTimer);
            statusEffect.expirationTimer = undefined;
            registry.delete(statusEffectId);
        }
    }
    public GetStatusEffects(targetId: TargetId, et: StatusEffectTargetType): Array<StatusEffect> {
        if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return [];
        const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        return [...registry.values()];
    }

    public GetStatusEffectsFromParty(targetId: TargetId, et:StatusEffectTargetType, partyId: number): Array<StatusEffect> {
        if (!this.hasStatusEffectRegistryForPlayer(targetId, et)) return [];
        const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
        return [...registry.values()].filter((value) => {
            // Dagger and Expose Weakness are for the whole raid
            if (this.ValidForWholeRaid(value)) return true;
            return partyId === PartyTracker.getInstance().getPartyIdFromEntityId(value.sourceId);
        });
    }

    public Clear() {
        let seCountInLocal = 0;
        for (const [,reg] of this.LocalStatusEffectRegistry) {
            for(const [, se] of reg) {
                this.RemoveStatusEffect(se.targetId, se.instanceId, se.type);
            }
            seCountInLocal += reg.size;
        }
        let seCountInParty = 0;
        for (const [,reg] of this.PartyStatusEffectRegistry) {
            for(const [, se] of reg) {
                this.RemoveStatusEffect(se.targetId, se.instanceId, se.type);
            }
            seCountInParty += reg.size;
        }
        if (this.trace)
            console.log("On Clear SE in local", seCountInLocal, "in party", seCountInParty);
        this.LocalStatusEffectRegistry.clear();
        this.PartyStatusEffectRegistry.clear();
    }

    public UpdateDuration(instanceId: number, targetId: bigint, timestamp: bigint, et: StatusEffectTargetType): void {
        const registry: StatusEffectRegistry = this.getStatusEffectRegistryForPlayer(targetId, et);
        const se = registry.get(instanceId);
        if (se) {
            const durationExtensionMs = timestamp - se.timestamp;
            if (this.trace)
                console.log("Clearing timeout for", se.instanceId, "because of duration change")

            if (se.expirationTimer) {
                clearTimeout(se.expirationTimer);
                se.expirationTimer = undefined;
            }
            if (se.expireAt) {
                const timeoutTime = se.expireAt.getTime() + Number(durationExtensionMs);
                const now = new Date();
                const timeoutDelay = timeoutTime - now.getTime();
                if (timeoutDelay > 0) {
                    if (this.trace)
                        console.log("Extending duration by", durationExtensionMs,"ms", "New timeout delay", timeoutDelay, "from", se.expireAt.toISOString(), "to", (new Date(timeoutTime)).toISOString());
                    se.expirationTimer = setTimeout(this.ExpireStatusEffectByTimeout.bind(this, se), timeoutDelay);
                    se.expireAt = new Date(timeoutTime);
                    se.timestamp = timestamp;
                } else {
                    se.expireAt = undefined;
                }
            }
        } else if (this.debug) {
            console.error("Tried to update duration for SE with instanceId", instanceId, " on target", targetId,"but where is no such SE registered");
        }
    }

    private ValidForWholeRaid(se: StatusEffect): boolean {
        return ((se.buffCategory === StatusEffectBuffCategory.Battleitem || se.buffCategory === StatusEffectBuffCategory.Bracelet || se.buffCategory === StatusEffectBuffCategory.Etc)
            && se.category === StatusEffectCategory.Debuff
            && se.showType === StatusEffectShowType.All)
    }

    private SetupStatusEffectTimeout(se: StatusEffect) {
        // set up the timeout to expire effect if it was not canceled by a pkt by then
        // only setup expiration timer if we have a duration in the pkt, for no duration it is -1
        if (se.expirationDelay > 0 && se.expirationDelay < 604800) { // don't set timeout >= 7d
            // we use the later date of state date from the pkt and then time the pkt arrived at our client
            // because we don't want to expire it if we recevie a remove pkt in the future
            const startDate = se.started.getTime() > se.occurTime.getTime() ? se.started : se.occurTime;
            // se.expirationDelay is in seconds as float
            const expirationDelayInMs = Math.ceil(se.expirationDelay*1000);
            const now = new Date();
            const timeoutDelay = startDate.getTime()  + expirationDelayInMs + StatusTracker.TIMEOUT_DELAY_MS - now.getTime();
            se.expireAt = new Date(now.getTime() + timeoutDelay);
            if (this.trace)
                console.log("Setting up statuseffect expiration timer for", se.name, se.instanceId, "with delay", timeoutDelay);
            se.expirationTimer = setTimeout(this.ExpireStatusEffectByTimeout.bind(this, se), timeoutDelay);
        }
    }

    private ExpireStatusEffectByTimeout(se: StatusEffect) {
        if (this.debug)
            console.error("Triggered timeout on", se.name, "with iid", se.instanceId);
        this.RemoveStatusEffect(se.targetId, se.instanceId, se.type);
    }
}
