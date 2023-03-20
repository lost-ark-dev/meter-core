import PCIdMapper from "./pcidmapper";

class PartyTracker {
  #characterIdToPartyId: Map<bigint, number>;
  #entityIdToPartyId: Map<bigint, number>;
  #raidInstanceToPartyInstances: Map<number, Set<number>>;
  #ownName: string | undefined;

  constructor() {
    this.#characterIdToPartyId = new Map();
    this.#entityIdToPartyId = new Map();
    this.#raidInstanceToPartyInstances = new Map();
  }

  add(characterId: bigint | undefined, entityId: bigint | undefined, partyId: number, raidInstanceId: number) {
    if (!characterId && !entityId) return;
    if (characterId && !entityId) entityId = PCIdMapper.getEntityId(characterId);
    if (entityId && !characterId) characterId = PCIdMapper.getEntityId(entityId);
    if (characterId) this.#characterIdToPartyId.set(characterId, partyId);
    if (entityId) this.#entityIdToPartyId.set(entityId, partyId);
    this.#registerPartyId(raidInstanceId, partyId);
  }

  addCharacterId(characterId: bigint) {
    const entityId = PCIdMapper.getEntityId(characterId);
    if (!entityId) return;
    const partyId = this.getPartyIdFromEntityId(entityId);
    if (!partyId) return;
    this.#characterIdToPartyId.set(characterId, partyId);
  }

  addEntityId(entityId: bigint) {
    const characterId = PCIdMapper.getCharacterId(entityId);
    if (!characterId) return;
    const partyId = this.getPartyIdFromCharacterId(characterId);
    if (!partyId) return;
    this.#entityIdToPartyId.set(entityId, partyId);
  }

  completeEntry(characterId: bigint, entityId: bigint) {
    const charPartyId = this.getPartyIdFromCharacterId(characterId);
    const entPartyId = this.getPartyIdFromEntityId(entityId);
    if (charPartyId && entPartyId) return;
    if (!charPartyId && entPartyId) {
      this.#characterIdToPartyId.set(characterId, entPartyId);
    }
    if (!entPartyId && charPartyId) {
      this.#entityIdToPartyId.set(entityId, charPartyId);
    }
  }

  changeEntityId(oldEntityId: bigint, newEntityId: bigint) {
    const partyId = this.getPartyIdFromEntityId(oldEntityId);
    if (partyId) {
      this.#entityIdToPartyId.delete(oldEntityId);
      this.#entityIdToPartyId.set(newEntityId, partyId);
    }
  }

  setOwnName(name: string) {
    this.#ownName = name;
  }

  remove(partyInstanceId: number, name: string) {
    if (name === this.#ownName) this.removePartyMappings(partyInstanceId);
  }

  isCharacterInParty(characterId: bigint) {
    return this.#characterIdToPartyId.has(characterId);
  }

  isEntityInParty(entityId: bigint) {
    return this.#entityIdToPartyId.has(entityId);
  }

  getPartyIdFromCharacterId(characterId: bigint): number | undefined {
    return this.#characterIdToPartyId.get(characterId);
  }

  getPartyIdFromEntityId(entityId: bigint): number | undefined {
    return this.#entityIdToPartyId.get(entityId);
  }

  removePartyMappings(partyInstanceId: number) {
    const raidId = this.#getRaidInstanceId(partyInstanceId);
    const partyIds: Set<number> = raidId
      ? this.#raidInstanceToPartyInstances.get(raidId) ?? new Set([partyInstanceId])
      : new Set([partyInstanceId]);
    for (const e of this.#characterIdToPartyId) {
      if (partyIds.has(e[1])) this.#characterIdToPartyId.delete(e[0]);
    }
    for (const e of this.#entityIdToPartyId) {
      if (partyIds.has(e[1])) this.#entityIdToPartyId.delete(e[0]);
    }
  }

  #getRaidInstanceId(partyId: number): number | undefined {
    for (const data of this.#raidInstanceToPartyInstances) {
      if (data[1].has(partyId)) return data[0];
    }
    return undefined;
  }

  #registerPartyId(raidInstanceId: number, partyId: number) {
    let list: Set<number> | undefined = this.#raidInstanceToPartyInstances.get(raidInstanceId);
    if (!list) {
      list = new Set();
      this.#raidInstanceToPartyInstances.set(raidInstanceId, list);
    }
    list.add(partyId);
  }
}

export default new PartyTracker();
