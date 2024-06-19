export class PCIdMapper {
  private entityToCharacterId: Map<bigint, bigint>;
  private characterToEntityId: Map<bigint, bigint>;

  constructor() {
    this.entityToCharacterId = new Map();
    this.characterToEntityId = new Map();
  }

  public addMapping(characterId: bigint, entityId: bigint): void {
    this.entityToCharacterId.set(entityId, characterId);
    this.characterToEntityId.set(characterId, entityId);
  }

  public getCharacterId(entityId: bigint): bigint | undefined {
    return this.entityToCharacterId.get(entityId);
  }
  public getEntityId(characterId: bigint): bigint | undefined {
    return this.characterToEntityId.get(characterId);
  }
  public clear(charIds: bigint[]): void {
    this.entityToCharacterId = new Map([...this.entityToCharacterId].filter(([ent, char]) => charIds.includes(char)));
    this.characterToEntityId = new Map([...this.characterToEntityId].filter(([char, ent]) => charIds.includes(char)));
  }
}
