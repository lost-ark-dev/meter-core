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

// src/legacy-logger.ts
var legacy_logger_exports = {};
__export(legacy_logger_exports, {
  LegacyLogger: () => LegacyLogger,
  LineId: () => LineId
});
module.exports = __toCommonJS(legacy_logger_exports);
var import_crypto = require("crypto");
var import_tiny_typed_emitter = require("tiny-typed-emitter");

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
  characterNameToCharacterId;
  constructor() {
    this.characterIdToPartyId = /* @__PURE__ */ new Map();
    this.entityIdToPartyId = /* @__PURE__ */ new Map();
    this.raidInstanceToPartyInstances = /* @__PURE__ */ new Map();
    this.characterNameToCharacterId = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    if (!_PartyTracker.instance) {
      _PartyTracker.instance = new _PartyTracker();
    }
    return _PartyTracker.instance;
  }
  add(raidInstanceId, partyId, characterId = void 0, entityId = void 0, name = void 0) {
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
    if (name && characterId)
      this.characterNameToCharacterId.set(name, characterId);
    this.registerPartyId(raidInstanceId, partyId);
  }
  completeEntry(characterId, entityId) {
    const charPartyId = this.getPartyIdFromCharacterId(characterId);
    const entPartyId = this.getPartyIdFromEntityId(entityId);
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
    const partyId = this.getPartyIdFromEntityId(oldEntityId);
    if (partyId) {
      this.entityIdToPartyId.delete(oldEntityId);
      this.entityIdToPartyId.set(newEntityId, partyId);
    }
  }
  setOwnName(name) {
    this.ownName = name;
  }
  remove(partyInstanceId, name) {
    if (name === this.ownName) {
      this.removePartyMappings(partyInstanceId);
      return;
    }
    const chracterId = this.characterNameToCharacterId.get(name);
    this.characterNameToCharacterId.delete(name);
    if (!chracterId)
      return;
    this.characterIdToPartyId.delete(chracterId);
    const objectId = PCIdMapper.getInstance().getEntityId(chracterId);
    if (objectId)
      this.characterIdToPartyId.delete(objectId);
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
      if (partyIds.has(partyId))
        this.entityIdToPartyId.delete(entityId);
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
    let list = this.raidInstanceToPartyInstances.get(raidInstanceId);
    if (!list) {
      list = /* @__PURE__ */ new Set();
      this.raidInstanceToPartyInstances.set(raidInstanceId, list);
    }
    list.add(partyId);
  }
};
var PartyTracker = _PartyTracker;
__publicField(PartyTracker, "instance");

// src/statustracker.ts
var _StatusTracker = class {
  PartyStatusEffectRegistry;
  LocalStatusEffectRegistry;
  debug;
  trace = false;
  constructor(debug = Boolean(process.env["DEV"])) {
    this.PartyStatusEffectRegistry = /* @__PURE__ */ new Map();
    this.LocalStatusEffectRegistry = /* @__PURE__ */ new Map();
    this.debug = debug;
  }
  static getInstance() {
    if (!_StatusTracker.instance) {
      _StatusTracker.instance = new _StatusTracker();
    }
    return _StatusTracker.instance;
  }
  getStatusEffectRegistryForPlayer(id, t) {
    const registry = this.getPlayerRegistry(t);
    const ser = registry.get(id);
    if (ser)
      return ser;
    const newEntry = /* @__PURE__ */ new Map();
    registry.set(id, newEntry);
    return newEntry;
  }
  hasStatusEffectRegistryForPlayer(id, t) {
    const registry = this.getPlayerRegistry(t);
    return registry.has(id);
  }
  getPlayerRegistry(t) {
    switch (t) {
      case 1 /* Local */:
        return this.LocalStatusEffectRegistry;
      case 0 /* Party */:
        return this.PartyStatusEffectRegistry;
      default:
        break;
    }
    return this.LocalStatusEffectRegistry;
  }
  RemoveLocalObject(objectId) {
    const registry = this.LocalStatusEffectRegistry.get(objectId);
    if (registry) {
      for (const [, se] of registry) {
        this.RemoveStatusEffect(objectId, se.instanceId, 1 /* Local */);
      }
    }
    this.LocalStatusEffectRegistry.delete(objectId);
  }
  RemovePartyObject(objectId) {
    const registry = this.PartyStatusEffectRegistry.get(objectId);
    if (registry) {
      for (const [, se] of registry) {
        this.RemoveStatusEffect(objectId, se.instanceId, 0 /* Party */);
      }
    }
    this.PartyStatusEffectRegistry.delete(objectId);
  }
  RegisterStatusEffect(se) {
    const registry = this.getStatusEffectRegistryForPlayer(se.targetId, se.type);
    const oldEffect = registry.get(se.instanceId);
    if (oldEffect) {
      if (oldEffect.expirationTimer) {
        clearTimeout(oldEffect.expirationTimer);
        oldEffect.expirationTimer = void 0;
      }
    }
    registry.set(se.instanceId, se);
    this.SetupStatusEffectTimeout(se);
  }
  HasAnyStatusEffect(id, t, statusEffectIds) {
    if (!this.hasStatusEffectRegistryForPlayer(id, t))
      return false;
    const registry = this.getStatusEffectRegistryForPlayer(id, t);
    for (const [, se] of registry) {
      for (const key of statusEffectIds) {
        if (key === se.statusEffectId)
          return true;
      }
    }
    return false;
  }
  HasAnyStatusEffectFromParty(targetId, et, partyId, statusEffectIds) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et))
      return false;
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    for (const effect of registry) {
      if (statusEffectIds.includes(effect[1].statusEffectId)) {
        if (this.ValidForWholeRaid(effect[1]))
          return true;
        const partyIdOfSource = PartyTracker.getInstance().getPartyIdFromEntityId(effect[1].sourceId);
        if (partyIdOfSource === partyId)
          return true;
      }
    }
    return false;
  }
  RemoveStatusEffect(targetId, statusEffectId, et) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et))
      return;
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    const statusEffect = registry.get(statusEffectId);
    if (statusEffect) {
      clearTimeout(statusEffect.expirationTimer);
      statusEffect.expirationTimer = void 0;
      registry.delete(statusEffectId);
    }
  }
  GetStatusEffects(targetId, et) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et))
      return [];
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    return [...registry.values()];
  }
  GetStatusEffectsFromParty(targetId, et, partyId) {
    if (!this.hasStatusEffectRegistryForPlayer(targetId, et))
      return [];
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    return [...registry.values()].filter((value) => {
      if (this.ValidForWholeRaid(value))
        return true;
      return partyId === PartyTracker.getInstance().getPartyIdFromEntityId(value.sourceId);
    });
  }
  Clear() {
    let seCountInLocal = 0;
    for (const [, reg] of this.LocalStatusEffectRegistry) {
      for (const [, se] of reg) {
        this.RemoveStatusEffect(se.targetId, se.instanceId, se.type);
      }
      seCountInLocal += reg.size;
    }
    let seCountInParty = 0;
    for (const [, reg] of this.PartyStatusEffectRegistry) {
      for (const [, se] of reg) {
        this.RemoveStatusEffect(se.targetId, se.instanceId, se.type);
      }
      seCountInParty += reg.size;
    }
    if (this.trace)
      console.log("On Clear SE in local", seCountInLocal, "in party", seCountInParty);
    this.LocalStatusEffectRegistry.clear();
    this.PartyStatusEffectRegistry.clear();
  }
  UpdateDuration(instanceId, targetId, timestamp, et) {
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    const se = registry.get(instanceId);
    if (se) {
      const durationExtensionMs = timestamp - se.timestamp;
      if (this.trace)
        console.log("Clearing timeout for", se.instanceId, "because of duration change");
      if (se.expirationTimer) {
        clearTimeout(se.expirationTimer);
        se.expirationTimer = void 0;
      }
      if (se.expireAt) {
        const timeoutTime = se.expireAt.getTime() + Number(durationExtensionMs);
        const now = new Date();
        const timeoutDelay = timeoutTime - now.getTime();
        if (timeoutDelay > 0) {
          if (this.trace)
            console.log("Extending duration by", durationExtensionMs, "ms", "New timeout delay", timeoutDelay, "from", se.expireAt.toISOString(), "to", new Date(timeoutTime).toISOString());
          se.expirationTimer = setTimeout(this.ExpireStatusEffectByTimeout.bind(this, se), timeoutDelay);
          se.expireAt = new Date(timeoutTime);
          se.timestamp = timestamp;
        } else {
          se.expireAt = void 0;
        }
      }
    } else if (this.debug) {
      console.error("Tried to update duration for SE with instanceId", instanceId, " on target", targetId, "but where is no such SE registered");
    }
  }
  ValidForWholeRaid(se) {
    return (se.buffCategory === 3 /* Battleitem */ || se.buffCategory === 1 /* Bracelet */ || se.buffCategory === 2 /* Etc */) && se.category === 1 /* Debuff */ && se.showType === 1 /* All */;
  }
  SetupStatusEffectTimeout(se) {
    if (se.expirationDelay > 0 && se.expirationDelay < 604800) {
      const startDate = se.started.getTime() > se.occurTime.getTime() ? se.started : se.occurTime;
      const expirationDelayInMs = Math.ceil(se.expirationDelay * 1e3);
      const now = new Date();
      const timeoutDelay = startDate.getTime() + expirationDelayInMs + _StatusTracker.TIMEOUT_DELAY_MS - now.getTime();
      se.expireAt = new Date(now.getTime() + timeoutDelay);
      if (this.trace)
        console.log("Setting up statuseffect expiration timer for", se.name, se.instanceId, "with delay", timeoutDelay);
      se.expirationTimer = setTimeout(this.ExpireStatusEffectByTimeout.bind(this, se), timeoutDelay);
    }
  }
  ExpireStatusEffectByTimeout(se) {
    if (this.debug)
      console.error("Triggered timeout on", se.name, "with iid", se.instanceId);
    this.RemoveStatusEffect(se.targetId, se.instanceId, se.type);
  }
};
var StatusTracker = _StatusTracker;
__publicField(StatusTracker, "TIMEOUT_DELAY_MS", 1e3);
__publicField(StatusTracker, "instance");

// src/legacy-logger.ts
var LineId = /* @__PURE__ */ ((LineId2) => {
  LineId2[LineId2["InitEnv"] = 1] = "InitEnv";
  LineId2[LineId2["PhaseTransition"] = 2] = "PhaseTransition";
  LineId2[LineId2["NewPC"] = 3] = "NewPC";
  LineId2[LineId2["NewNpc"] = 4] = "NewNpc";
  LineId2[LineId2["Death"] = 5] = "Death";
  LineId2[LineId2["SkillStart"] = 6] = "SkillStart";
  LineId2[LineId2["SkillStage"] = 7] = "SkillStage";
  LineId2[LineId2["Damage"] = 8] = "Damage";
  LineId2[LineId2["Heal"] = 9] = "Heal";
  LineId2[LineId2["Buff"] = 10] = "Buff";
  LineId2[LineId2["BuffRemove"] = 11] = "BuffRemove";
  LineId2[LineId2["CounterAttack"] = 12] = "CounterAttack";
  LineId2[LineId2["Line15"] = 15] = "Line15";
  LineId2[LineId2["Debug"] = 251] = "Debug";
  LineId2[LineId2["PacketDump"] = 252] = "PacketDump";
  LineId2[LineId2["Version"] = 253] = "Version";
  LineId2[LineId2["Error"] = 254] = "Error";
  return LineId2;
})(LineId || {});
var LegacyLogger = class extends import_tiny_typed_emitter.TypedEmitter {
  #data;
  emitText;
  emitLines;
  emitObjects;
  #encounters;
  #currentEncounter;
  #wasWipe;
  #wasKill;
  #localPlayer;
  constructor(stream, data, settings = {}) {
    super();
    this.#data = data;
    this.emitText = settings.emitText || true;
    this.emitLines = settings.emitLines || true;
    this.emitObjects = settings.emitObjects || false;
    this.#encounters = /* @__PURE__ */ new Set();
    this.#currentEncounter = new Encounter();
    this.#wasWipe = false;
    this.#wasKill = false;
    this.#localPlayer = {
      entityId: 0n,
      entityType: EntityType.Player,
      name: "You",
      class: 0,
      gearLevel: 0,
      characterId: 0n
    };
    stream.on("PKTAuthTokenResult", (pkt) => {
    }).on("PKTCounterAttackNotify", (pkt) => {
      if (this.#needEmit) {
        const parsed = pkt.parsed;
        if (!parsed)
          return;
        this.#buildLine(
          12 /* CounterAttack */,
          parsed.SourceId,
          this.#getEntityName(parsed.SourceId),
          parsed.TargetId,
          this.#getEntityName(parsed.TargetId)
        );
      }
    }).on("PKTDeathNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      if (PartyTracker.getInstance().isEntityInParty(parsed.TargetId)) {
        const p = this.#currentEncounter.entities.get(parsed.TargetId);
        if (p?.name === this.#localPlayer.name) {
          StatusTracker.getInstance().RemoveLocalObject(parsed.TargetId);
        } else {
          const charId = PCIdMapper.getInstance().getCharacterId(parsed.TargetId);
          if (charId)
            StatusTracker.getInstance().RemovePartyObject(charId);
        }
      } else {
        StatusTracker.getInstance().RemoveLocalObject(parsed.TargetId);
      }
      if (this.#needEmit) {
        this.#buildLine(
          5 /* Death */,
          parsed.TargetId,
          this.#getEntityName(parsed.TargetId),
          parsed.SourceId,
          this.#getEntityName(parsed.SourceId)
        );
      }
    }).on("PKTInitEnv", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      if (this.#localPlayer.entityId !== 0n)
        PartyTracker.getInstance().changeEntityId(this.#localPlayer.entityId, parsed.PlayerId);
      this.#currentEncounter = new Encounter();
      const player = {
        entityId: parsed.PlayerId,
        entityType: EntityType.Player,
        name: this.#localPlayer.name,
        class: this.#localPlayer.class,
        gearLevel: this.#localPlayer.gearLevel,
        characterId: this.#localPlayer.characterId
      };
      this.#localPlayer = player;
      this.#currentEncounter.entities.set(player.entityId, player);
      PCIdMapper.getInstance().clear();
      StatusTracker.getInstance().Clear();
      if (player.characterId !== 0n)
        PCIdMapper.getInstance().addMapping(player.characterId, player.entityId);
      if (this.#localPlayer && this.#localPlayer.characterId && this.#localPlayer.characterId > 0n)
        PartyTracker.getInstance().completeEntry(this.#localPlayer.characterId, parsed.PlayerId);
      if (this.#needEmit)
        this.#buildLine(1 /* InitEnv */, player.entityId);
    }).on("PKTInitPC", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#currentEncounter = new Encounter();
      const player = {
        entityId: parsed.PlayerId,
        entityType: EntityType.Player,
        name: parsed.Name,
        class: parsed.ClassId,
        gearLevel: this.#u32tof32(parsed.GearLevel),
        characterId: parsed.CharacterId
      };
      this.#localPlayer = player;
      this.#currentEncounter.entities.set(player.entityId, player);
      PCIdMapper.getInstance().addMapping(player.characterId, player.entityId);
      PartyTracker.getInstance().setOwnName(parsed.Name);
      PartyTracker.getInstance().completeEntry(player.characterId, parsed.PlayerId);
      const tracker = StatusTracker.getInstance();
      tracker.RemoveLocalObject(parsed.PlayerId);
      for (const se of parsed.statusEffectDatas) {
        const sourceEntity = this.#getSourceEntity(se.SourceId);
        tracker.RegisterStatusEffect(
          this.#buildStatusEffect(
            se,
            parsed.PlayerId,
            sourceEntity.entityId,
            1 /* Local */
          )
        );
      }
      if (this.#needEmit) {
        const statsMap = this.#getStatPairMap(pkt.parsed.statPair);
        this.#buildLine(
          3 /* NewPC */,
          player.entityId,
          player.name,
          player.class,
          this.#data.getClassName(player.class),
          parsed.Level,
          player.gearLevel,
          Number(statsMap.get(1 /* hp */)) || 0,
          Number(statsMap.get(27 /* max_hp */)) || 0,
          player.characterId
        );
      }
    }).on("PKTNewNpc", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const npc = {
        entityId: parsed.NpcStruct.ObjectId,
        entityType: EntityType.Npc,
        name: this.#data.getNpcName(parsed.NpcStruct.TypeId),
        typeId: parsed.NpcStruct.TypeId
      };
      this.#currentEncounter.entities.set(npc.entityId, npc);
      const tracker = StatusTracker.getInstance();
      tracker.RemoveLocalObject(parsed.NpcStruct.ObjectId);
      for (const se of parsed.NpcStruct.statusEffectDatas) {
        const sourceEntity = this.#getSourceEntity(se.SourceId);
        tracker.RegisterStatusEffect(
          this.#buildStatusEffect(
            se,
            parsed.NpcStruct.ObjectId,
            sourceEntity.entityId,
            1 /* Local */
          )
        );
      }
      if (this.#needEmit) {
        const statsMap = this.#getStatPairMap(parsed.NpcStruct.statPair);
        this.#buildLine(
          4 /* NewNpc */,
          npc.entityId,
          npc.typeId,
          npc.name,
          Number(statsMap.get(1 /* hp */)) || 0,
          Number(statsMap.get(27 /* max_hp */)) || 0
        );
      }
    }).on("PKTNewNpcSummon", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const summon = {
        entityId: parsed.NpcData.ObjectId,
        entityType: EntityType.Summon,
        name: parsed.NpcData.ObjectId.toString(16),
        ownerId: parsed.OwnerId
      };
      const tracker = StatusTracker.getInstance();
      tracker.RemoveLocalObject(parsed.NpcData.ObjectId);
      for (const se of parsed.NpcData.statusEffectDatas) {
        const sourceEntity = this.#getSourceEntity(se.SourceId);
        tracker.RegisterStatusEffect(
          this.#buildStatusEffect(
            se,
            parsed.NpcData.ObjectId,
            sourceEntity.entityId,
            1 /* Local */
          )
        );
      }
      if (this.#needEmit) {
        const owner = this.#currentEncounter.entities.get(parsed.OwnerId);
        if (owner && owner.entityType === EntityType.Npc) {
          summon.name = this.#data.getNpcName(parsed.NpcData.TypeId);
          const statsMap = this.#getStatPairMap(parsed.NpcData.statPair);
          this.#buildLine(
            4 /* NewNpc */,
            summon.entityId,
            parsed.NpcData.TypeId,
            summon.name,
            Number(statsMap.get(1 /* hp */)) || 0,
            Number(statsMap.get(27 /* max_hp */)) || 0
          );
        }
      }
      this.#currentEncounter.entities.set(summon.entityId, summon);
    }).on("PKTNewPC", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const player = {
        entityId: parsed.PCStruct.PlayerId,
        entityType: EntityType.Player,
        name: parsed.PCStruct.Name,
        class: parsed.PCStruct.ClassId,
        gearLevel: this.#u32tof32(parsed.PCStruct.GearLevel),
        characterId: parsed.PCStruct.CharacterId
      };
      this.#currentEncounter.entities.set(player.entityId, player);
      const oldEntityId = PCIdMapper.getInstance().getEntityId(player.characterId);
      if (oldEntityId) {
        PartyTracker.getInstance().changeEntityId(oldEntityId, parsed.PCStruct.PlayerId);
      }
      PCIdMapper.getInstance().addMapping(player.characterId, player.entityId);
      PartyTracker.getInstance().completeEntry(player.characterId, player.entityId);
      const tracker = StatusTracker.getInstance();
      const shouldUsePartyStatusEffects = this.#shouldUsePartyStatusEffect(player.characterId);
      if (shouldUsePartyStatusEffects) {
        tracker.RemovePartyObject(parsed.PCStruct.CharacterId);
      } else {
        tracker.RemoveLocalObject(parsed.PCStruct.PlayerId);
      }
      for (const se of parsed.PCStruct.statusEffectDatas) {
        tracker.RegisterStatusEffect(
          this.#buildStatusEffect(
            se,
            shouldUsePartyStatusEffects ? player.characterId : player.entityId,
            se.SourceId,
            shouldUsePartyStatusEffects ? 0 /* Party */ : 1 /* Local */
          )
        );
      }
      if (this.#needEmit) {
        const statsMap = this.#getStatPairMap(pkt.parsed.PCStruct.statPair);
        this.#buildLine(
          3 /* NewPC */,
          player.entityId,
          player.name,
          player.class,
          this.#data.getClassName(player.class),
          parsed.PCStruct.Level,
          player.gearLevel,
          Number(statsMap.get(1 /* hp */)) || 0,
          Number(statsMap.get(27 /* max_hp */)) || 0,
          player.characterId
        );
      }
    }).on("PKTNewProjectile", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const projectile = {
        entityId: parsed.projectileInfo.ProjectileId,
        entityType: EntityType.Projectile,
        name: parsed.projectileInfo.ProjectileId.toString(16),
        ownerId: parsed.projectileInfo.OwnerId,
        skillEffectId: parsed.projectileInfo.SkillEffect,
        skillId: parsed.projectileInfo.SkillId
      };
      this.#currentEncounter.entities.set(projectile.entityId, projectile);
    }).on("PKTParalyzationStateNotify", (pkt) => {
    }).on("PKTPartyInfo", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      if (parsed.MemberDatas.length === 1 && parsed.MemberDatas[0]?.Name === this.#localPlayer.name) {
        PartyTracker.getInstance().remove(parsed.PartyInstanceId, parsed.MemberDatas[0].Name);
        return;
      }
      PartyTracker.getInstance().removePartyMappings(parsed.PartyInstanceId);
      for (const pm of parsed.MemberDatas) {
        if (pm.CharacterId === this.#localPlayer.characterId) {
          PartyTracker.getInstance().setOwnName(pm.Name);
        }
        const entityId = PCIdMapper.getInstance().getEntityId(pm.CharacterId);
        if (entityId) {
          const ent = this.#currentEncounter.entities.get(entityId);
          if (ent && ent.entityType === EntityType.Player && ent.name !== pm.Name) {
            const p = ent;
            p.gearLevel = this.#u32tof32(pm.GearLevel);
            p.name = pm.Name;
            p.class = pm.ClassId;
            if (this.#needEmit) {
              this.#buildLine(
                3 /* NewPC */,
                p.entityId,
                p.name,
                p.class,
                this.#data.getClassName(p.class),
                pm.CharacterLevel,
                p.gearLevel,
                Number(pm.CurHp),
                Number(pm.MaxHp),
                p.characterId
              );
            }
          }
        }
        PartyTracker.getInstance().add(
          parsed.RaidInstanceId,
          parsed.PartyInstanceId,
          pm.CharacterId,
          entityId,
          pm.Name
        );
      }
    }).on("PKTPartyLeaveResult", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      PartyTracker.getInstance().remove(parsed.PartyInstanceId, parsed.Name);
    }).on("PKTPartyStatusEffectAddNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const tracker = StatusTracker.getInstance();
      for (const effect of parsed.statusEffectDatas) {
        const sourceId = parsed.PlayerIdOnRefresh !== 0n ? parsed.PlayerIdOnRefresh : effect.SourceId;
        const sourceEnt = this.#getSourceEntity(sourceId);
        tracker.RegisterStatusEffect(
          this.#buildStatusEffect(effect, parsed.CharacterId, sourceEnt.entityId, 0 /* Party */)
        );
      }
    }).on("PKTPartyStatusEffectRemoveNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      for (const effectId of parsed.statusEffectIds)
        StatusTracker.getInstance().RemoveStatusEffect(parsed.CharacterId, effectId, 0 /* Party */);
    }).on("PKTPartyStatusEffectResultNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      PartyTracker.getInstance().add(parsed.RaidInstanceId, parsed.PartyInstanceId, parsed.CharacterId);
    }).on("PKTRaidBossKillNotify", (pkt) => {
      if (this.#needEmit)
        this.#buildLine(2 /* PhaseTransition */, 1);
    }).on("PKTRaidResult", (pkt) => {
      if (this.#needEmit)
        this.#buildLine(2 /* PhaseTransition */, 0);
    }).on("PKTRemoveObject", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      for (const upo of parsed.unpublishedObjects)
        StatusTracker.getInstance().RemoveLocalObject(upo.ObjectId);
    }).on("PKTSkillDamageAbnormalMoveNotify", (pkt) => {
      if (this.#needEmit) {
        const parsedDmg = pkt.parsed;
        if (!parsedDmg)
          return;
        let sourceEntity = this.#getSourceEntity(parsedDmg.SourceId);
        let skillName = this.#data.getSkillName(parsedDmg.SkillId);
        sourceEntity = this.#guessIsPlayer(sourceEntity, parsedDmg.SkillId);
        parsedDmg.SkillDamageAbnormalMoveEvents.forEach((event) => {
          if ((event.skillDamageEvent.Modifier & 15) === 11 /* damage_share */ && parsedDmg.SkillId === 0 && parsedDmg.SkillEffectId === 0)
            return;
          if (parsedDmg.SkillId === 0 && parsedDmg.SkillEffectId === 0 && event.skillDamageEvent.Modifier & (4 /* dot */ | 8 /* dot_critical */))
            skillName = "Bleed";
          const targetEntity = this.#currentEncounter.entities.get(event.skillDamageEvent.TargetId);
          const [statusEffectsOnSource, statusEffectsOnTarget] = this.#getStatusEffects(sourceEntity, targetEntity);
          let skillEffectId = parsedDmg.SkillEffectId;
          let skillEffect;
          if (this.#data.isBattleItem(skillEffectId, "attack")) {
            const entity = this.#currentEncounter.entities.get(parsedDmg.SourceId);
            if (entity && entity.entityType === EntityType.Projectile) {
              const proj = entity;
              skillEffectId = proj.skillEffectId;
              skillEffect = this.#data.getBattleItemName(skillEffectId);
            }
          }
          skillEffect = skillEffect ?? this.#data.getSkillEffectComment(skillEffectId);
          this.#buildLine(
            8 /* Damage */,
            sourceEntity.entityId,
            sourceEntity.name,
            parsedDmg.SkillId,
            skillName,
            skillEffectId,
            skillEffect,
            event.skillDamageEvent.TargetId,
            this.#getEntityName(event.skillDamageEvent.TargetId),
            Number(event.skillDamageEvent.Damage),
            event.skillDamageEvent.Modifier.toString(16),
            Number(event.skillDamageEvent.CurHp),
            Number(event.skillDamageEvent.MaxHp),
            statusEffectsOnTarget,
            statusEffectsOnSource
          );
        });
      }
    }).on("PKTSkillDamageNotify", (pkt) => {
      if (this.#needEmit) {
        const parsedDmg = pkt.parsed;
        if (!parsedDmg)
          return;
        let sourceEntity = this.#getSourceEntity(parsedDmg.SourceId);
        let skillName = this.#data.getSkillName(parsedDmg.SkillId);
        const skillEffect = this.#data.getSkillEffectComment(parsedDmg.SkillEffectId);
        sourceEntity = this.#guessIsPlayer(sourceEntity, parsedDmg.SkillId);
        parsedDmg.SkillDamageEvents.forEach((event) => {
          if ((event.Modifier & 15) === 11 /* damage_share */ && parsedDmg.SkillId === 0 && parsedDmg.SkillEffectId === 0)
            return;
          if (parsedDmg.SkillId === 0 && parsedDmg.SkillEffectId === 0 && event.Modifier & (4 /* dot */ | 8 /* dot_critical */))
            skillName = "Bleed";
          const targetEntity = this.#currentEncounter.entities.get(event.TargetId);
          const [statusEffectsOnSource, statusEffectsOnTarget] = this.#getStatusEffects(sourceEntity, targetEntity);
          let skillEffectId = parsedDmg.SkillEffectId;
          let skillEffect2;
          if (this.#data.isBattleItem(skillEffectId, "attack")) {
            const entity = this.#currentEncounter.entities.get(parsedDmg.SourceId);
            if (entity && entity.entityType === EntityType.Projectile) {
              const proj = entity;
              skillEffectId = proj.skillEffectId;
              skillEffect2 = this.#data.getBattleItemName(skillEffectId);
            }
          }
          skillEffect2 = skillEffect2 ?? this.#data.getSkillEffectComment(skillEffectId);
          this.#buildLine(
            8 /* Damage */,
            sourceEntity.entityId,
            sourceEntity.name,
            parsedDmg.SkillId,
            skillName,
            skillEffectId,
            skillEffect2,
            event.TargetId,
            this.#getEntityName(event.TargetId),
            Number(event.Damage),
            event.Modifier.toString(16),
            Number(event.CurHp),
            Number(event.MaxHp),
            statusEffectsOnTarget,
            statusEffectsOnSource
          );
        });
      }
    }).on("PKTSkillStageNotify", (pkt) => {
      if (this.#needEmit) {
        const parsed = pkt.parsed;
        if (!parsed)
          return;
        let sourceEntity = this.#getSourceEntity(parsed.SourceId);
        sourceEntity = this.#guessIsPlayer(sourceEntity, parsed.SkillId);
        this.#buildLine(
          7 /* SkillStage */,
          sourceEntity.entityId,
          sourceEntity.name,
          parsed.SkillId,
          this.#data.getSkillName(parsed.SkillId),
          parsed.Stage
        );
      }
    }).on("PKTSkillStartNotify", (pkt) => {
      if (this.#needEmit) {
        const parsed = pkt.parsed;
        if (!parsed)
          return;
        let sourceEntity = this.#getSourceEntity(parsed.SourceId);
        sourceEntity = this.#guessIsPlayer(sourceEntity, parsed.SkillId);
        this.#buildLine(
          6 /* SkillStart */,
          sourceEntity.entityId,
          sourceEntity.name,
          parsed.SkillId,
          this.#data.getSkillName(parsed.SkillId)
        );
      }
    }).on("PKTStatChangeOriginNotify", (pkt) => {
      if (this.#needEmit) {
      }
    }).on("PKTStatusEffectAddNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const sourceEnt = this.#getSourceEntity(parsed.statusEffectData.SourceId);
      StatusTracker.getInstance().RegisterStatusEffect(
        this.#buildStatusEffect(
          parsed.statusEffectData,
          parsed.ObjectId,
          sourceEnt.entityId,
          1 /* Local */
        )
      );
    }).on("PKTStatusEffectRemoveNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      for (const effectId of parsed.statusEffectIds)
        StatusTracker.getInstance().RemoveStatusEffect(parsed.ObjectId, effectId, 1 /* Local */);
    }).on("PKTTriggerBossBattleStatus", (pkt) => {
      if (this.#needEmit)
        this.#buildLine(2 /* PhaseTransition */, 2);
    }).on("PKTTriggerFinishNotify", (pkt) => {
    }).on("PKTTriggerStartNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      switch (parsed.TriggerSignalType) {
        case 57 /* dungeon_phase1_clear */:
        case 59 /* dungeon_phase2_clear */:
        case 61 /* dungeon_phase3_clear */:
        case 63 /* dungeon_phase4_clear */:
        case 74 /* dungeon_phase5_clear */:
        case 76 /* dungeon_phase6_clear */:
          this.#wasKill = true;
          this.#wasWipe = false;
          break;
        case 58 /* dungeon_phase1_fail */:
        case 60 /* dungeon_phase2_fail */:
        case 62 /* dungeon_phase3_fail */:
        case 64 /* dungeon_phase4_fail */:
        case 75 /* dungeon_phase5_fail */:
        case 77 /* dungeon_phase6_fail */:
          this.#wasKill = false;
          this.#wasWipe = true;
          break;
      }
    }).on("PKTMigrationExecute", (pkt) => {
      if (this.#localPlayer.characterId !== 0n)
        return;
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#localPlayer.characterId = parsed.Account_CharacterId1 < parsed.Account_CharacterId2 ? parsed.Account_CharacterId1 : parsed.Account_CharacterId2;
    }).on("PKTZoneObjectUnpublishNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      StatusTracker.getInstance().RemoveLocalObject(parsed.ObjectId);
    }).on("PKTStatusEffectDurationNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      StatusTracker.getInstance().UpdateDuration(parsed.EffectInstanceId, parsed.TargetId, parsed.ExpirationTick, 1 /* Local */);
    });
  }
  #buildLine(id, ...args) {
    if (this.emitText) {
      let line = `${id}|${new Date().toISOString()}|${args.map((v) => typeof v === "bigint" ? v.toString(16) : v).join("|")}`;
      line = [line, (0, import_crypto.createHash)("md5").update(line).digest("hex")].join("|");
      this.emit("line", line);
    }
    if (this.emitLines)
      this.emit(id, ...args);
  }
  get #needEmit() {
    return this.emitText || this.emitLines;
  }
  #getSourceEntity(id) {
    let entity = this.#currentEncounter.entities.get(id);
    if (entity?.entityType === EntityType.Projectile) {
      id = entity.ownerId;
    } else if (entity?.entityType === EntityType.Summon) {
      id = entity.ownerId;
    }
    entity = this.#currentEncounter.entities.get(id);
    if (entity)
      return entity;
    const newEntity = {
      entityId: id,
      entityType: EntityType.Npc,
      name: id.toString(16)
    };
    this.#currentEncounter.entities.set(id, newEntity);
    return newEntity;
  }
  #guessIsPlayer(entity, skillid) {
    const classId = this.#data.getSkillClassId(skillid);
    if (classId !== 0) {
      let newEntity;
      if (entity.entityType === EntityType.Player) {
        const player = entity;
        if (player.class == classId)
          return player;
        newEntity = {
          entityId: player.entityId,
          entityType: EntityType.Player,
          name: player.name,
          class: classId,
          gearLevel: player.gearLevel,
          characterId: player.characterId
        };
      } else {
        newEntity = {
          entityId: entity.entityId,
          entityType: EntityType.Player,
          name: entity.name,
          class: classId,
          gearLevel: 0,
          characterId: 0n
        };
      }
      this.#currentEncounter.entities.set(entity.entityId, newEntity);
      this.#buildLine(
        3 /* NewPC */,
        newEntity.entityId,
        newEntity.name,
        newEntity.class,
        this.#data.getClassName(newEntity.class),
        1,
        newEntity.gearLevel,
        0,
        0,
        newEntity.characterId
      );
      return newEntity;
    }
    return entity;
  }
  #getEntityName(id) {
    return this.#currentEncounter.entities.get(id)?.name || id.toString(16);
  }
  #getStatPairMap(statpair) {
    const map = /* @__PURE__ */ new Map();
    statpair.forEach((pair) => {
      map.set(pair.StatType, pair.Value);
    });
    return map;
  }
  #u32tof32(v) {
    const buf = Buffer.alloc(4);
    buf.writeUInt32LE(v);
    return Math.round(buf.readFloatLE() * 100) / 100;
  }
  #shouldUsePartyStatusEffectForEntity(entity) {
    if (entity.entityType !== EntityType.Player)
      return false;
    const player = entity;
    return this.#shouldUsePartyStatusEffect(player.characterId);
  }
  #shouldUsePartyStatusEffect(characterId) {
    const localPlayerIsInParty = PartyTracker.getInstance().isCharacterInParty(this.#localPlayer.characterId);
    const affectedPlayerIsInParty = PartyTracker.getInstance().isCharacterInParty(characterId);
    if (localPlayerIsInParty) {
      if (!affectedPlayerIsInParty || characterId === this.#localPlayer.characterId) {
        return false;
      }
      const localPlayerPartyId = PartyTracker.getInstance().getPartyIdFromCharacterId(this.#localPlayer.characterId);
      const affectedPlayerPartyId = PartyTracker.getInstance().getPartyIdFromCharacterId(characterId);
      if (localPlayerPartyId === affectedPlayerPartyId) {
        return true;
      }
      return false;
    }
    return false;
  }
  #isEntityInParty(entity) {
    if (entity.entityType !== EntityType.Player)
      return false;
    const player = entity;
    return PartyTracker.getInstance().isCharacterInParty(player.characterId);
  }
  #buildStatusEffect(se, targetId, sourceId, targetType) {
    const val = se.Value ? se.Value.readUInt32LE() : 0;
    let statusEffectCategory = 0 /* Other */;
    let statusEffectBuffCategory = 0 /* Other */;
    let showType = 0 /* Other */;
    let seName = "Unknown";
    const effectInfo = this.#data.skillBuff.get(se.StatusEffectId);
    if (effectInfo) {
      seName = effectInfo.name;
      switch (effectInfo.category) {
        case "debuff":
          statusEffectCategory = 1 /* Debuff */;
          break;
      }
      switch (effectInfo.buffcategory) {
        case "bracelet":
          statusEffectBuffCategory = 1 /* Bracelet */;
          break;
        case "etc":
          statusEffectBuffCategory = 2 /* Etc */;
          break;
        case "battleitem":
          statusEffectBuffCategory = 3 /* Battleitem */;
          break;
      }
      switch (effectInfo.iconshowtype) {
        case "all":
          showType = 1 /* All */;
          break;
      }
    }
    return {
      instanceId: se.EffectInstanceId,
      sourceId,
      started: new Date(),
      statusEffectId: se.StatusEffectId,
      targetId,
      type: targetType,
      value: val,
      buffCategory: statusEffectBuffCategory,
      category: statusEffectCategory,
      showType,
      expirationDelay: se.TotalTime,
      expirationTimer: void 0,
      timestamp: se.EndTick,
      expireAt: void 0,
      occurTime: se.OccurTime,
      name: seName
    };
  }
  #getStatusEffects(sourceEntity, targetEntity) {
    const statusEffectsOnTarget = [];
    const statusEffectsOnSource = [];
    const shouldUsePartyBuffForSource = this.#shouldUsePartyStatusEffectForEntity(sourceEntity);
    const sourceEffects = StatusTracker.getInstance().GetStatusEffects(
      shouldUsePartyBuffForSource ? sourceEntity.characterId : sourceEntity.entityId,
      shouldUsePartyBuffForSource ? 0 /* Party */ : 1 /* Local */
    );
    for (const se of sourceEffects)
      statusEffectsOnSource.push([se.statusEffectId, se.sourceId]);
    if (targetEntity) {
      const shouldUsePartyBuffForTarget = this.#shouldUsePartyStatusEffectForEntity(targetEntity);
      const sourceIsInParty = this.#isEntityInParty(sourceEntity);
      const sourcePartyId = sourceIsInParty ? PartyTracker.getInstance().getPartyIdFromEntityId(sourceEntity.entityId) : void 0;
      const targetEffects = sourceIsInParty && sourcePartyId ? StatusTracker.getInstance().GetStatusEffectsFromParty(
        shouldUsePartyBuffForTarget ? targetEntity.characterId : targetEntity.entityId,
        shouldUsePartyBuffForTarget ? 0 /* Party */ : 1 /* Local */,
        sourcePartyId
      ) : StatusTracker.getInstance().GetStatusEffects(
        shouldUsePartyBuffForTarget ? targetEntity.characterId : targetEntity.entityId,
        shouldUsePartyBuffForTarget ? 0 /* Party */ : 1 /* Local */
      );
      for (const se of targetEffects)
        statusEffectsOnTarget.push([se.statusEffectId, se.sourceId]);
    }
    return [statusEffectsOnSource, statusEffectsOnTarget];
  }
};
var Encounter = class {
  start;
  entities;
  constructor() {
    this.start = Date.now();
    this.entities = /* @__PURE__ */ new Map();
  }
};
var EntityType = /* @__PURE__ */ ((EntityType2) => {
  EntityType2[EntityType2["Player"] = 0] = "Player";
  EntityType2[EntityType2["Npc"] = 1] = "Npc";
  EntityType2[EntityType2["Summon"] = 2] = "Summon";
  EntityType2[EntityType2["Projectile"] = 3] = "Projectile";
  return EntityType2;
})(EntityType || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LegacyLogger,
  LineId
});
