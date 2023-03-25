import { PCIdMapper } from "./pcidmapper";

export class PartyTracker {
    private static instance: PartyTracker;
    private characterIdToPartyId: Map<bigint, number>;
    private entityIdToPartyId: Map<bigint, number>;
    private raidInstanceToPartyInstances: Map<number, Set<number>>;
    private ownName: string|undefined;
    private characterNameToCharacterId: Map<string, bigint>;

    private constructor() {
        this.characterIdToPartyId = new Map();
        this.entityIdToPartyId = new Map();
        this.raidInstanceToPartyInstances = new Map();
        this.characterNameToCharacterId = new Map();
    }

    public static getInstance(): PartyTracker {
        if (!PartyTracker.instance) {
            PartyTracker.instance = new PartyTracker();
        }
        return PartyTracker.instance;
    }

    public add(raidInstanceId: number, partyId: number, characterId: bigint|undefined = undefined, entityId: bigint|undefined = undefined, name: string|undefined = undefined) {
        if (!characterId && !entityId) return;
        if (characterId && !entityId) entityId = PCIdMapper.getInstance().getEntityId(characterId);
        if (entityId && !characterId) characterId = PCIdMapper.getInstance().getEntityId(entityId);
        if (characterId) this.characterIdToPartyId.set(characterId, partyId);
        if (entityId) this.entityIdToPartyId.set(entityId, partyId);
        if (name && characterId) this.characterNameToCharacterId.set(name, characterId);
        this.registerPartyId(raidInstanceId, partyId);
    }

    public completeEntry(characterId: bigint, entityId: bigint):void {
        const charPartyId = this.getPartyIdFromCharacterId(characterId);
        const entPartyId = this.getPartyIdFromEntityId(entityId);
        if (charPartyId && entPartyId) return;
        if (!charPartyId && entPartyId) {
            this.characterIdToPartyId.set(characterId, entPartyId);
        }
        if (!entPartyId && charPartyId) {
            this.entityIdToPartyId.set(entityId, charPartyId);
        }
    }

    public changeEntityId(oldEntityId: bigint, newEntityId: bigint):void {
        const partyId = this.getPartyIdFromEntityId(oldEntityId);
        if (partyId) {
            this.entityIdToPartyId.delete(oldEntityId);
            this.entityIdToPartyId.set(newEntityId, partyId);
        }
    }

    public setOwnName(name: string):void {
        this.ownName = name;
    }

    public remove(partyInstanceId: number, name: string):void {
        if (name === this.ownName) {
            this.removePartyMappings(partyInstanceId);
            return;
        }

        const chracterId = this.characterNameToCharacterId.get(name);
        this.characterNameToCharacterId.delete(name);
        if (!chracterId) return;
        this.characterIdToPartyId.delete(chracterId);
        const objectId = PCIdMapper.getInstance().getEntityId(chracterId);
        if (objectId) this.characterIdToPartyId.delete(objectId);
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

    public removePartyMappings(partyInstanceId: number):void {
        const raidId = this.getRaidInstanceId(partyInstanceId);
        const partyIds: Set<number> = raidId ? this.raidInstanceToPartyInstances.get(raidId) ?? new Set([partyInstanceId]) : new Set([partyInstanceId]);
        for (const [characterId, partyId] of this.characterIdToPartyId) {
            if (partyIds.has(partyId)) {
                this.characterIdToPartyId.delete(characterId);
                for (const [name, charId] of this.characterNameToCharacterId) {
                    if (characterId === charId) {
                        this.characterNameToCharacterId.delete(name);
                        break;
                    }
                }
            }
        }
        for (const [entityId, partyId] of this.entityIdToPartyId) {
            if (partyIds.has(partyId)) this.entityIdToPartyId.delete(entityId);
        }
    }

    private getRaidInstanceId(partyId: number):number|undefined {
        for (const data of this.raidInstanceToPartyInstances) {
            if (data[1].has(partyId)) return data[0];
        }
        return undefined;
    }

    private registerPartyId(raidInstanceId: number, partyId: number):void {
        let list: Set<number>|undefined = this.raidInstanceToPartyInstances.get(raidInstanceId);
        if (!list) {
            list = new Set();
            this.raidInstanceToPartyInstances.set(raidInstanceId, list);
        }
        list.add(partyId);
    }


}
