"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/partytracker.ts
var partytracker_exports = {};
__export(partytracker_exports, {
  PartyTracker: () => PartyTracker
});
module.exports = __toCommonJS(partytracker_exports);

// src/pcidmapper.ts
var _PCIdMapper = class {
  entityToCharacterId;
  characterToEntityId;
  constructor() {
    this.entityToCharacterId = /* @__PURE__ */ new Map();
    this.characterToEntityId = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    if (!_PCIdMapper.instance) {
      _PCIdMapper.instance = new _PCIdMapper();
    }
    return _PCIdMapper.instance;
  }
  addMapping(characterId, entityId) {
    this.entityToCharacterId.set(entityId, characterId);
    this.characterToEntityId.set(characterId, entityId);
  }
  getCharacterId(entityId) {
    return this.entityToCharacterId.get(entityId);
  }
  getEntityId(characterId) {
    return this.characterToEntityId.get(characterId);
  }
  clear() {
    this.entityToCharacterId.clear();
    this.characterToEntityId.clear();
  }
};
var PCIdMapper = _PCIdMapper;
__publicField(PCIdMapper, "instance");

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PartyTracker
});
