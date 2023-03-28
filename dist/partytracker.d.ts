declare class PartyTracker {
    private static instance;
    private characterIdToPartyId;
    private entityIdToPartyId;
    private raidInstanceToPartyInstances;
    private ownName;
    private characterNameToCharacterId;
    private constructor();
    static getInstance(): PartyTracker;
    add(raidInstanceId: number, partyId: number, characterId?: bigint | undefined, entityId?: bigint | undefined, name?: string | undefined): void;
    completeEntry(characterId: bigint, entityId: bigint): void;
    changeEntityId(oldEntityId: bigint, newEntityId: bigint): void;
    setOwnName(name: string): void;
    remove(partyInstanceId: number, name: string): void;
    isCharacterInParty(characterId: bigint): boolean;
    isEntityInParty(entityId: bigint): boolean;
    getPartyIdFromCharacterId(characterId: bigint): number | undefined;
    getPartyIdFromEntityId(entityId: bigint): number | undefined;
    removePartyMappings(partyInstanceId: number): void;
    private getRaidInstanceId;
    private registerPartyId;
}

export { PartyTracker };
