import { ReadableStreamDefaultController } from "stream/web";
import { PCIdMapper } from "./pcidmapper";

export class PartyTracker {
    private static instance: PartyTracker;
    private characterIdToPartyId: Map<bigint, number>;
    private entityIdToPartyId: Map<bigint, number>;
    private raidInstanceToPartyInstances: Map<number, Set<number>>;
    private ownName: string|undefined;

    private constructor() {
        this.characterIdToPartyId = new Map();
        this.entityIdToPartyId = new Map();
        this.raidInstanceToPartyInstances = new Map();
    }

    public static getInstance(): PartyTracker {
        if (!PartyTracker.instance) {
            PartyTracker.instance = new PartyTracker();
        }
        return PartyTracker.instance;
    }

    public add(characterId: bigint | undefined, entityId: bigint | undefined, partyId: number, raidInstanceId: number) {
        if (!characterId && !entityId) return;
        if (characterId && !entityId) entityId = PCIdMapper.getInstance().getEntityId(characterId);
        if (entityId && !characterId) characterId = PCIdMapper.getInstance().getEntityId(entityId);
        if (characterId) this.characterIdToPartyId.set(characterId, partyId);
        if (entityId) this.entityIdToPartyId.set(entityId, partyId);
        this.registerPartyId(raidInstanceId, partyId);
    }

    public addCharacterId(characterId: bigint) {
        var entityId = PCIdMapper.getInstance().getEntityId(characterId);
        if (!entityId) return;
        var partyId = this.getPartyIdFromEntityId(entityId);
        if (!partyId) return;
        this.characterIdToPartyId.set(characterId, partyId);
    }

    public addEntityId(entityId: bigint) {
        var characterId = PCIdMapper.getInstance().getCharacterId(entityId);
        if (!characterId) return;
        var partyId = this.getPartyIdFromCharacterId(characterId);
        if (!partyId) return;
        this.entityIdToPartyId.set(entityId, partyId);
    }

    public completeEntry(characterId: bigint, entityId: bigint) {
        var charPartyId = this.getPartyIdFromCharacterId(characterId);
        var entPartyId = this.getPartyIdFromEntityId(entityId);
        if (charPartyId && entPartyId) return;
        if (!charPartyId && entPartyId) {
            this.characterIdToPartyId.set(characterId, entPartyId);
        }
        if (!entPartyId && charPartyId) {
            this.entityIdToPartyId.set(entityId, charPartyId);
        }
    }

    public changeEntityId(oldEntityId: bigint, newEntityId: bigint) {
        var partyId = this.getPartyIdFromEntityId(oldEntityId);
        if (partyId) {
            this.entityIdToPartyId.delete(oldEntityId);
            this.entityIdToPartyId.set(newEntityId, partyId);
        }
    }

    public setOwnName(name: string) {
        this.ownName = name;
    }

    public remove(partyInstanceId: number, name: string) {
        if (name === this.ownName) this.removePartyMappings(partyInstanceId);
    }

    public isCharacterInParty(characterId: bigint):boolean {
        return this.characterIdToPartyId.has(characterId);
    }

    public isEntityInParty(entityId: bigint):boolean {
        return this.entityIdToPartyId.has(entityId);
    }

    public getPartyIdFromCharacterId(characterId: bigint):number|undefined {
        return this.characterIdToPartyId.get(characterId);
    }

    public getPartyIdFromEntityId(entityId: bigint):number|undefined {
        return this.entityIdToPartyId.get(entityId);
    }

    public removePartyMappings(partyInstanceId: number) {
        const raidId = this.getRaidInstanceId(partyInstanceId);
        const partyIds: Set<number> = raidId ? this.raidInstanceToPartyInstances.get(raidId) ?? new Set([partyInstanceId]) : new Set([partyInstanceId]);
        for (const e of this.characterIdToPartyId) {
            if (partyIds.has(e[1])) this.characterIdToPartyId.delete(e[0]);
        }
        for (const e of this.entityIdToPartyId) {
            if (partyIds.has(e[1])) this.entityIdToPartyId.delete(e[0]);
        }
    }

    private getRaidInstanceId(partyId: number): number|undefined {
        for (const data of this.raidInstanceToPartyInstances) {
            if (data[1].has(partyId)) return data[0];
        }
        return undefined;
    }

    private registerPartyId(raidInstanceId: number, partyId: number) {
        var list: Set<number>|undefined = this.raidInstanceToPartyInstances.get(raidInstanceId);
        if (!list) {
            list = new Set();
            this.raidInstanceToPartyInstances.set(raidInstanceId, list);
        }
        list.add(partyId);
    }


}