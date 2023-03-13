declare class PCIdMapper {
    private static instance;
    private entityToCharacterId;
    private characterToEntityId;
    private constructor();
    static getInstance(): PCIdMapper;
    addMapping(characterId: bigint, entityId: bigint): void;
    getCharacterId(entityId: bigint): bigint | undefined;
    getEntityId(characterId: bigint): bigint | undefined;
    clear(): void;
}

export { PCIdMapper };
