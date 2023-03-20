class PCIdMapper {
  #entityToCharacterId: Map<bigint, bigint>;
  #characterToEntityId: Map<bigint, bigint>;

  constructor() {
    this.#entityToCharacterId = new Map();
    this.#characterToEntityId = new Map();
  }

  addMapping(characterId: bigint, entityId: bigint) {
    this.#entityToCharacterId.set(entityId, characterId);
    this.#characterToEntityId.set(characterId, entityId);
  }

  getCharacterId(entityId: bigint): bigint | undefined {
    return this.#entityToCharacterId.get(entityId);
  }

  getEntityId(characterId: bigint): bigint | undefined {
    return this.#characterToEntityId.get(characterId);
  }

  clear(): void {
    this.#entityToCharacterId.clear();
    this.#characterToEntityId.clear();
  }
}

export default new PCIdMapper();
