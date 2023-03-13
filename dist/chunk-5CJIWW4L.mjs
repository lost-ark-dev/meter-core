import {
  PCIdMapper
} from "./chunk-KLBR2DOF.mjs";
import {
  __publicField
} from "./chunk-NHABU752.mjs";

// src/partytracker.ts
var _PartyTracker = class {
  characterIdToPartyId;
  entityIdToPartyId;
  raidInstanceToPartyInstances;
  ownName;
  constructor() {
    this.characterIdToPartyId = /* @__PURE__ */ new Map();
    this.entityIdToPartyId = /* @__PURE__ */ new Map();
    this.raidInstanceToPartyInstances = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    if (!_PartyTracker.instance) {
      _PartyTracker.instance = new _PartyTracker();
    }
    return _PartyTracker.instance;
  }
  add(characterId, entityId, partyId, raidInstanceId) {
    if (!characterId && !entityId)
      return;
    if (characterId && !entityId)
      entityId = PCIdMapper.getInstance().getEntityId(characterId);
    if (entityId && !characterId)
      characterId = PCIdMapper.getInstance().getEntityId(entityId);
    if (characterId)
      this.characterIdToPartyId.set(characterId, partyId);
    if (entityId)
      this.entityIdToPartyId.set(entityId, partyId);
    this.registerPartyId(raidInstanceId, partyId);
  }
  addCharacterId(characterId) {
    var entityId = PCIdMapper.getInstance().getEntityId(characterId);
    if (!entityId)
      return;
    var partyId = this.getPartyIdFromEntityId(entityId);
    if (!partyId)
      return;
    this.characterIdToPartyId.set(characterId, partyId);
  }
  addEntityId(entityId) {
    var characterId = PCIdMapper.getInstance().getCharacterId(entityId);
    if (!characterId)
      return;
    var partyId = this.getPartyIdFromCharacterId(characterId);
    if (!partyId)
      return;
    this.entityIdToPartyId.set(entityId, partyId);
  }
  completeEntry(characterId, entityId) {
    var charPartyId = this.getPartyIdFromCharacterId(characterId);
    var entPartyId = this.getPartyIdFromEntityId(entityId);
    if (charPartyId && entPartyId)
      return;
    if (!charPartyId && entPartyId) {
      this.characterIdToPartyId.set(characterId, entPartyId);
    }
    if (!entPartyId && charPartyId) {
      this.entityIdToPartyId.set(entityId, charPartyId);
    }
  }
  changeEntityId(oldEntityId, newEntityId) {
    var partyId = this.getPartyIdFromEntityId(oldEntityId);
    if (partyId) {
      this.entityIdToPartyId.delete(oldEntityId);
      this.entityIdToPartyId.set(newEntityId, partyId);
    }
  }
  setOwnName(name) {
    this.ownName = name;
  }
  remove(partyInstanceId, name) {
    if (name === this.ownName)
      this.removePartyMappings(partyInstanceId);
  }
  isCharacterInParty(characterId) {
    return this.characterIdToPartyId.has(characterId);
  }
  isEntityInParty(entityId) {
    return this.entityIdToPartyId.has(entityId);
  }
  getPartyIdFromCharacterId(characterId) {
    return this.characterIdToPartyId.get(characterId);
  }
  getPartyIdFromEntityId(entityId) {
    return this.entityIdToPartyId.get(entityId);
  }
  removePartyMappings(partyInstanceId) {
    const raidId = this.getRaidInstanceId(partyInstanceId);
    const partyIds = raidId ? this.raidInstanceToPartyInstances.get(raidId) ?? /* @__PURE__ */ new Set([partyInstanceId]) : /* @__PURE__ */ new Set([partyInstanceId]);
    for (const e of this.characterIdToPartyId) {
      if (partyIds.has(e[1]))
        this.characterIdToPartyId.delete(e[0]);
    }
    for (const e of this.entityIdToPartyId) {
      if (partyIds.has(e[1]))
        this.entityIdToPartyId.delete(e[0]);
    }
  }
  getRaidInstanceId(partyId) {
    for (const data of this.raidInstanceToPartyInstances) {
      if (data[1].has(partyId))
        return data[0];
    }
    return void 0;
  }
  registerPartyId(raidInstanceId, partyId) {
    var list = this.raidInstanceToPartyInstances.get(raidInstanceId);
    if (!list) {
      list = /* @__PURE__ */ new Set();
      this.raidInstanceToPartyInstances.set(raidInstanceId, list);
    }
    list.add(partyId);
  }
};
var PartyTracker = _PartyTracker;
__publicField(PartyTracker, "instance");

export {
  PartyTracker
};
