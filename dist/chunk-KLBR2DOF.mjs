import {
  __publicField
} from "./chunk-NHABU752.mjs";

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

export {
  PCIdMapper
};
