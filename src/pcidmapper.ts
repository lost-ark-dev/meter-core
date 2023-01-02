export class PCIdMapper {
    private static instance: PCIdMapper;
    private entityToCharacterId: Map<bigint, bigint>;
    private characterToEntityId: Map<bigint, bigint>;

    private constructor() {
        this.entityToCharacterId = new Map();
        this.characterToEntityId = new Map();
    }

    public static getInstance() {
        if(!PCIdMapper.instance) {
            PCIdMapper.instance = new PCIdMapper();
        }
        return PCIdMapper.instance;
    }

    public addMapping(characterId: bigint, entityId: bigint):void {
        this.entityToCharacterId.set(entityId, characterId);
        this.characterToEntityId.set(characterId, entityId);
    }

    public getCharacterId(entityId: bigint):bigint|undefined {
        return this.entityToCharacterId.get(entityId);
    }
    public getEntityId(characterId: bigint):bigint|undefined {
        return this.characterToEntityId.get(characterId);
    }
    public clear(): void {
        this.entityToCharacterId.clear();
        this.characterToEntityId.clear();
    }

}