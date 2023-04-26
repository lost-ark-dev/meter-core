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
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/logger/parser.ts
var parser_exports = {};
__export(parser_exports, {
  Parser: () => Parser
});
module.exports = __toCommonJS(parser_exports);
var import_tiny_typed_emitter2 = require("tiny-typed-emitter");

// src/logger/statustracker.ts
var _partyTracker, _data, _shouldUsePartyStatusEffectForEntity, shouldUsePartyStatusEffectForEntity_fn, _shouldUsePartyStatusEffect, shouldUsePartyStatusEffect_fn;
var _StatusTracker = class {
  constructor(partyTracker, data, debug = Boolean(process.env["DEV"])) {
    __privateAdd(this, _shouldUsePartyStatusEffectForEntity);
    __privateAdd(this, _shouldUsePartyStatusEffect);
    __publicField(this, "PartyStatusEffectRegistry");
    __publicField(this, "LocalStatusEffectRegistry");
    __privateAdd(this, _partyTracker, void 0);
    __privateAdd(this, _data, void 0);
    __publicField(this, "debug");
    __publicField(this, "trace", false);
    this.PartyStatusEffectRegistry = /* @__PURE__ */ new Map();
    this.LocalStatusEffectRegistry = /* @__PURE__ */ new Map();
    this.debug = debug;
    __privateSet(this, _partyTracker, partyTracker);
    __privateSet(this, _data, data);
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
        const partyIdOfSource = __privateGet(this, _partyTracker).getPartyIdFromEntityId(effect[1].sourceId);
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
      return partyId === __privateGet(this, _partyTracker).getPartyIdFromEntityId(value.sourceId);
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
        const timeoutDelay = timeoutTime - se.pktTime.getTime();
        if (timeoutDelay > 0) {
          if (this.trace)
            console.log(
              "Extending duration by",
              durationExtensionMs,
              "ms",
              "New timeout delay",
              timeoutDelay,
              "from",
              se.expireAt.toISOString(),
              "to",
              new Date(timeoutTime).toISOString()
            );
          se.expirationTimer = setTimeout(this.ExpireStatusEffectByTimeout.bind(this, se), timeoutDelay);
          se.expireAt = new Date(timeoutTime);
          se.timestamp = timestamp;
        } else {
          se.expireAt = void 0;
        }
      }
    } else if (this.debug) {
      console.error(
        "Tried to update duration for SE with instanceId",
        instanceId,
        " on target",
        targetId,
        "but where is no such SE registered"
      );
    }
  }
  ValidForWholeRaid(se) {
    return (se.buffCategory === 3 /* Battleitem */ || se.buffCategory === 1 /* Bracelet */ || se.buffCategory === 2 /* Etc */) && se.category === 1 /* Debuff */ && se.showType === 1 /* All */;
  }
  SetupStatusEffectTimeout(se) {
    if (se.expirationDelay > 0 && se.expirationDelay < 604800) {
      const startDate = se.started.getTime() > se.occurTime.getTime() ? se.started : se.occurTime;
      const expirationDelayInMs = Math.ceil(se.expirationDelay * 1e3);
      const timeoutDelay = startDate.getTime() + expirationDelayInMs + _StatusTracker.TIMEOUT_DELAY_MS - se.pktTime.getTime();
      se.expireAt = new Date(se.pktTime.getTime() + timeoutDelay);
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
  newPC(parsed, localCharacterId, pktTime) {
    const shouldUsePartyStatusEffects = __privateMethod(this, _shouldUsePartyStatusEffect, shouldUsePartyStatusEffect_fn).call(this, parsed.PCStruct.CharacterId, localCharacterId);
    if (shouldUsePartyStatusEffects) {
      this.RemovePartyObject(parsed.PCStruct.CharacterId);
    } else {
      this.RemoveLocalObject(parsed.PCStruct.PlayerId);
    }
    for (const se of parsed.PCStruct.statusEffectDatas) {
      this.RegisterStatusEffect(
        this.buildStatusEffect(
          se,
          shouldUsePartyStatusEffects ? parsed.PCStruct.CharacterId : parsed.PCStruct.PlayerId,
          se.SourceId,
          shouldUsePartyStatusEffects ? 0 /* Party */ : 1 /* Local */,
          pktTime
        )
      );
    }
  }
  buildStatusEffect(se, targetId, sourceId, targetType, pktTime) {
    const val = se.Value ? se.Value.readUInt32LE() : 0;
    let statusEffectCategory = 0 /* Other */;
    let statusEffectBuffCategory = 0 /* Other */;
    let showType = 0 /* Other */;
    let seName = "Unknown";
    const effectInfo = __privateGet(this, _data).skillBuff.get(se.StatusEffectId);
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
      started: pktTime,
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
      name: seName,
      pktTime
    };
  }
  getStatusEffects(sourceEntity, targetEntity, localCharacterId) {
    const statusEffectsOnTarget = [];
    const statusEffectsOnSource = [];
    const shouldUsePartyBuffForSource = __privateMethod(this, _shouldUsePartyStatusEffectForEntity, shouldUsePartyStatusEffectForEntity_fn).call(this, sourceEntity, localCharacterId);
    const sourceEffects = this.GetStatusEffects(
      shouldUsePartyBuffForSource ? sourceEntity.characterId : sourceEntity.entityId,
      shouldUsePartyBuffForSource ? 0 /* Party */ : 1 /* Local */
    );
    for (const se of sourceEffects)
      statusEffectsOnSource.push([se.statusEffectId, se.sourceId]);
    if (targetEntity) {
      const shouldUsePartyBuffForTarget = __privateMethod(this, _shouldUsePartyStatusEffectForEntity, shouldUsePartyStatusEffectForEntity_fn).call(this, targetEntity, localCharacterId);
      const sourceIsInParty = __privateGet(this, _partyTracker).isEntityInParty(sourceEntity.entityId);
      const sourcePartyId = sourceIsInParty ? __privateGet(this, _partyTracker).getPartyIdFromEntityId(sourceEntity.entityId) : void 0;
      const targetEffects = sourceIsInParty && sourcePartyId ? this.GetStatusEffectsFromParty(
        shouldUsePartyBuffForTarget ? targetEntity.characterId : targetEntity.entityId,
        shouldUsePartyBuffForTarget ? 0 /* Party */ : 1 /* Local */,
        sourcePartyId
      ) : this.GetStatusEffects(
        shouldUsePartyBuffForTarget ? targetEntity.characterId : targetEntity.entityId,
        shouldUsePartyBuffForTarget ? 0 /* Party */ : 1 /* Local */
      );
      for (const se of targetEffects)
        statusEffectsOnTarget.push([se.statusEffectId, se.sourceId]);
    }
    return [statusEffectsOnSource, statusEffectsOnTarget];
  }
};
var StatusTracker = _StatusTracker;
_partyTracker = new WeakMap();
_data = new WeakMap();
_shouldUsePartyStatusEffectForEntity = new WeakSet();
shouldUsePartyStatusEffectForEntity_fn = function(entity, localCharacterId) {
  if (entity.entityType !== 1 /* Player */)
    return false;
  const player = entity;
  return __privateMethod(this, _shouldUsePartyStatusEffect, shouldUsePartyStatusEffect_fn).call(this, player.characterId, localCharacterId);
};
_shouldUsePartyStatusEffect = new WeakSet();
shouldUsePartyStatusEffect_fn = function(characterId, localCharacterId) {
  const localPlayerIsInParty = __privateGet(this, _partyTracker).isCharacterInParty(localCharacterId);
  const affectedPlayerIsInParty = __privateGet(this, _partyTracker).isCharacterInParty(characterId);
  if (localPlayerIsInParty) {
    if (!affectedPlayerIsInParty || characterId === localCharacterId) {
      return false;
    }
    const localPlayerPartyId = __privateGet(this, _partyTracker).getPartyIdFromCharacterId(localCharacterId);
    const affectedPlayerPartyId = __privateGet(this, _partyTracker).getPartyIdFromCharacterId(characterId);
    if (localPlayerPartyId === affectedPlayerPartyId) {
      return true;
    }
    return false;
  }
  return false;
};
__publicField(StatusTracker, "TIMEOUT_DELAY_MS", 1e3);

// src/logger/utils.ts
function u32tof32(v) {
  const buf = Buffer.alloc(4);
  buf.writeUInt32LE(v);
  return Math.round(buf.readFloatLE() * 100) / 100;
}

// src/logger/entityTracker.ts
var EntityTracker = class {
  #pcIdMapper;
  #partyTracker;
  #statusTracker;
  #data;
  entities = /* @__PURE__ */ new Map();
  localPlayer;
  constructor(pcIdMapper, partyTracker, statusTracker, data) {
    this.#pcIdMapper = pcIdMapper;
    this.#partyTracker = partyTracker;
    this.#statusTracker = statusTracker;
    this.#data = data;
    this.localPlayer = {
      entityId: 0n,
      entityType: EntityType.Player,
      name: "You",
      class: 0,
      gearLevel: 0,
      characterId: 0n
    };
  }
  processNewPC(pkt) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    const player = {
      entityId: parsed.PCStruct.PlayerId,
      entityType: EntityType.Player,
      name: parsed.PCStruct.Name,
      class: parsed.PCStruct.ClassId,
      gearLevel: u32tof32(parsed.PCStruct.GearLevel),
      characterId: parsed.PCStruct.CharacterId
    };
    this.entities.set(player.entityId, player);
    const oldEntityId = this.#pcIdMapper.getEntityId(player.characterId);
    if (oldEntityId) {
      this.#partyTracker.changeEntityId(oldEntityId, parsed.PCStruct.PlayerId);
    }
    this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    this.#partyTracker.completeEntry(player.characterId, player.entityId);
    this.#statusTracker.newPC(parsed, this.localPlayer.characterId, pkt.time);
    return player;
  }
  processInitEnv(pkt) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    if (this.localPlayer.entityId !== 0n)
      this.#partyTracker.changeEntityId(this.localPlayer.entityId, parsed.PlayerId);
    this.entities.clear();
    const player = {
      entityId: parsed.PlayerId,
      entityType: EntityType.Player,
      name: this.localPlayer.name,
      class: this.localPlayer.class,
      gearLevel: this.localPlayer.gearLevel,
      characterId: this.localPlayer.characterId
    };
    this.localPlayer = player;
    this.entities.set(player.entityId, player);
    this.#pcIdMapper.clear();
    this.#statusTracker.Clear();
    if (player.characterId !== 0n)
      this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    if (this.localPlayer && this.localPlayer.characterId && this.localPlayer.characterId > 0n)
      this.#partyTracker.completeEntry(this.localPlayer.characterId, parsed.PlayerId);
  }
  processInitPC(pkt) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    this.entities.clear();
    const player = {
      entityId: parsed.PlayerId,
      entityType: EntityType.Player,
      name: parsed.Name,
      class: parsed.ClassId,
      gearLevel: u32tof32(parsed.GearLevel),
      characterId: parsed.CharacterId
    };
    this.localPlayer = player;
    this.entities.set(player.entityId, player);
    this.#pcIdMapper.addMapping(player.characterId, player.entityId);
    this.#partyTracker.setOwnName(parsed.Name);
    this.#partyTracker.completeEntry(player.characterId, parsed.PlayerId);
    this.#statusTracker.RemoveLocalObject(parsed.PlayerId);
    for (const se of parsed.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.SourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.PlayerId,
          sourceEntity.entityId,
          1 /* Local */,
          pkt.time
        )
      );
    }
    return player;
  }
  processNewNpc(pkt) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    let isBoss = false;
    const npcData = this.#data.npc.get(parsed.NpcStruct.TypeId);
    if (npcData && ["boss", "raid", "epic_raid", "commander"].includes(npcData.grade)) {
      isBoss = true;
    }
    const npc = {
      entityId: parsed.NpcStruct.ObjectId,
      entityType: EntityType.Npc,
      name: npcData?.name ?? parsed.NpcStruct.ObjectId.toString(16),
      typeId: parsed.NpcStruct.TypeId,
      isBoss
    };
    this.entities.set(npc.entityId, npc);
    this.#statusTracker.RemoveLocalObject(parsed.NpcStruct.ObjectId);
    for (const se of parsed.NpcStruct.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.SourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.NpcStruct.ObjectId,
          sourceEntity.entityId,
          1 /* Local */,
          pkt.time
        )
      );
    }
    return npc;
  }
  processNewNpcSummon(pkt) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    let isBoss = false;
    const npc = this.#data.npc.get(parsed.NpcData.TypeId);
    if (npc && ["boss", "raid", "epic_raid", "commander"].includes(npc.grade)) {
      isBoss = true;
    }
    const summon = {
      entityId: parsed.NpcData.ObjectId,
      entityType: EntityType.Summon,
      name: npc?.name ?? parsed.NpcData.ObjectId.toString(16),
      ownerId: parsed.OwnerId,
      typeId: parsed.NpcData.TypeId,
      isBoss
    };
    this.#statusTracker.RemoveLocalObject(parsed.NpcData.ObjectId);
    for (const se of parsed.NpcData.statusEffectDatas) {
      const sourceEntity = this.getSourceEntity(se.SourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          se,
          parsed.NpcData.ObjectId,
          sourceEntity.entityId,
          1 /* Local */,
          pkt.time
        )
      );
    }
    this.entities.set(summon.entityId, summon);
    return summon;
  }
  getSourceEntity(id) {
    let entity = this.entities.get(id);
    if (entity?.entityType === EntityType.Projectile) {
      id = entity.ownerId;
    } else if (entity?.entityType === EntityType.Summon) {
      id = entity.ownerId;
    }
    entity = this.entities.get(id);
    if (entity)
      return entity;
    const newEntity = {
      entityId: id,
      entityType: EntityType.Npc,
      name: id.toString(16)
    };
    this.entities.set(id, newEntity);
    return newEntity;
  }
  guessIsPlayer(entity, skillid) {
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
      this.entities.set(entity.entityId, newEntity);
      return newEntity;
    }
    return entity;
  }
  getOrCreateEntity(entityId) {
    let ent = this.entities.get(entityId);
    if (!ent) {
      ent = { entityId, entityType: EntityType.Unknown, name: entityId.toString(16) };
      this.entities.set(entityId, ent);
    }
    return ent;
  }
};
var EntityType = /* @__PURE__ */ ((EntityType2) => {
  EntityType2[EntityType2["Unknown"] = 0] = "Unknown";
  EntityType2[EntityType2["Player"] = 1] = "Player";
  EntityType2[EntityType2["Npc"] = 2] = "Npc";
  EntityType2[EntityType2["Summon"] = 3] = "Summon";
  EntityType2[EntityType2["Projectile"] = 4] = "Projectile";
  return EntityType2;
})(EntityType || {});

// src/logger/gameTracker.ts
var import_tiny_typed_emitter = require("tiny-typed-emitter");
var defaultOptions = {
  isLive: true,
  dontResetOnZoneChange: false,
  resetAfterPhaseTransition: false,
  splitOnPhaseTransition: false
};
var GameTracker = class extends import_tiny_typed_emitter.TypedEmitter {
  #game;
  encounters;
  #entityTracker;
  #statusTracker;
  #data;
  options;
  resetTimer;
  phaseTransitionResetRequest;
  phaseTransitionResetRequestTime;
  constructor(entityTracker, statusTracker, data, options) {
    super();
    this.#entityTracker = entityTracker;
    this.#statusTracker = statusTracker;
    this.#data = data;
    this.options = { ...defaultOptions, ...options };
    this.resetTimer = null;
    this.phaseTransitionResetRequest = false;
    this.phaseTransitionResetRequestTime = 0;
    this.encounters = [];
    this.#game = {
      startedOn: 0,
      lastCombatPacket: 0,
      fightStartedOn: 0,
      localPlayer: this.#entityTracker.localPlayer.name,
      currentBoss: void 0,
      entities: /* @__PURE__ */ new Map(),
      damageStatistics: {
        totalDamageDealt: 0,
        topDamageDealt: 0,
        totalDamageTaken: 0,
        topDamageTaken: 0,
        totalHealingDone: 0,
        topHealingDone: 0,
        totalShieldDone: 0,
        topShieldDone: 0,
        debuffs: /* @__PURE__ */ new Map(),
        buffs: /* @__PURE__ */ new Map()
      }
    };
  }
  onCounterAttack(source, time) {
    const entity = this.updateEntity(source, {}, time);
    entity.hits.counter += 1;
  }
  onInitEnv(pkt, time) {
    if (this.options.isLive) {
      this.#game.entities.forEach((e, k, m) => {
        if (e.hits.total === 0) {
          m.delete(k);
        }
      });
      if (this.options.dontResetOnZoneChange === false && this.resetTimer == null) {
        this.resetTimer = setTimeout(() => {
          this.resetState(+time + 6e3);
        }, 6e3);
        this.emit("message", "new-zone");
      }
    } else {
      this.splitEncounter(time);
      this.emit("message", "new-zone");
    }
  }
  splitEncounter(time) {
    if (this.#game.fightStartedOn != 0 && (this.#game.damageStatistics.totalDamageDealt != 0 || this.#game.damageStatistics.totalDamageTaken)) {
      const curState = structuredClone(this.#game);
      this.encounters.push(curState);
    }
    this.resetState(+time);
  }
  getBossIfStillExist() {
    if (this.#game.currentBoss?.id) {
      const id = BigInt(`0x0${this.#game.currentBoss?.id}`);
      return this.#entityTracker.entities.has(id) ? this.#game.currentBoss : void 0;
    }
    return void 0;
  }
  resetState(curTime) {
    this.#game = {
      startedOn: +curTime,
      lastCombatPacket: +curTime,
      fightStartedOn: 0,
      localPlayer: this.#entityTracker.localPlayer.name,
      currentBoss: this.getBossIfStillExist(),
      entities: /* @__PURE__ */ new Map(),
      damageStatistics: {
        totalDamageDealt: 0,
        topDamageDealt: 0,
        totalDamageTaken: 0,
        topDamageTaken: 0,
        totalHealingDone: 0,
        topHealingDone: 0,
        totalShieldDone: 0,
        topShieldDone: 0,
        debuffs: /* @__PURE__ */ new Map(),
        buffs: /* @__PURE__ */ new Map()
      }
    };
    this.emit("reset-state", this.#game);
  }
  cancelReset() {
    if (this.resetTimer)
      clearTimeout(this.resetTimer);
    this.resetTimer = null;
  }
  onPhaseTransition(phaseCode, time) {
    if (this.options.isLive) {
      this.emit("message", `phase-transition-${phaseCode}`);
      if (this.options.resetAfterPhaseTransition) {
        this.phaseTransitionResetRequest = true;
        this.phaseTransitionResetRequestTime = +time;
      }
    }
    if (!this.options.isLive && this.options.splitOnPhaseTransition) {
      this.splitEncounter(time);
    }
  }
  updateOptions(options) {
    this.options = { ...this.options, ...options };
  }
  onDeath(target, time) {
    const entity = this.#game.entities.get(target.name);
    let deaths = 0;
    if (!entity)
      deaths = 1;
    else if (entity.isDead)
      deaths = entity.deaths;
    else
      deaths = entity.deaths + 1;
    this.updateEntity(target, { isDead: true, deathTime: +time, deaths }, time);
  }
  onDamage(owner, source, target, damageData, time) {
    if ((damageData.modifier & 15) === 11 /* damage_share */ && damageData.skillId === 0 && damageData.skillEffectId === 0)
      return;
    if (this.phaseTransitionResetRequest && this.phaseTransitionResetRequestTime > 0 && this.phaseTransitionResetRequestTime < +time - 8e3) {
      this.resetState(+time);
      this.phaseTransitionResetRequest = false;
    }
    const [statusEffectsOnSource, statusEffectsOnTarget] = this.#statusTracker.getStatusEffects(
      owner,
      target,
      this.#entityTracker.localPlayer.characterId
    );
    if (this.#data.isBattleItem(damageData.skillEffectId, "attack")) {
      if (source && source.entityType === 4 /* Projectile */) {
        const proj = source;
        damageData.skillEffectId = proj.skillEffectId;
      }
    }
    const damageOwner = this.updateEntity(owner, {}, time);
    const damageTarget = this.updateEntity(
      target,
      {
        currentHp: damageData.targetCurHp,
        maxHp: damageData.targetMaxHp
      },
      time
    );
    if (!damageOwner || !damageTarget)
      return;
    if (!damageTarget.isPlayer && damageData.targetCurHp < 0) {
      damageData.damage = damageData.damage + damageData.targetCurHp;
    }
    let skillId = damageData.skillId;
    if (damageData.skillId === 0 && damageData.skillEffectId !== 0) {
      skillId = damageData.skillEffectId;
    }
    let skill = damageOwner.skills.get(skillId);
    if (!skill) {
      skill = {
        ...this.createEntitySkill(),
        ...{
          id: skillId
        },
        ...this.getSkillNameIcon(damageData.skillId, damageData.skillEffectId)
      };
      damageOwner.skills.set(skillId, skill);
    }
    const hitFlag = damageData.modifier & 15;
    const hitOption = (damageData.modifier >> 4 & 7) - 1;
    const isCrit = (hitFlag & (1 /* critical */ | 8 /* dot_critical */)) !== 0;
    const mappedSeOnSource = /* @__PURE__ */ new Set();
    const mappedSeOnTarget = /* @__PURE__ */ new Set();
    statusEffectsOnSource.forEach((buffId) => {
      mappedSeOnSource.add(buffId[0]);
    });
    statusEffectsOnTarget.forEach((buffId) => {
      mappedSeOnTarget.add(buffId[0]);
    });
    skill.damageDealt += damageData.damage;
    if (damageData.damage > skill.maxDamage)
      skill.maxDamage = damageData.damage;
    damageOwner.hits.total += 1;
    skill.hits.total += 1;
    damageOwner.damageDealt += damageData.damage;
    damageTarget.damageTaken += damageData.damage;
    const critCount = isCrit ? 1 : 0;
    damageOwner.hits.crit += critCount;
    skill.hits.crit += critCount;
    let isFrontAttack = false, isBackAttack = false;
    const directionalmask = this.#data.getSkillEffectDirectionalMask(damageData.skillEffectId) - 1;
    if (directionalmask === 0 /* back_attack */ || directionalmask === 2 /* flank_attack */) {
      isBackAttack = hitOption === 0 /* back_attack */;
      const backAttackCount = isBackAttack ? 1 : 0;
      damageOwner.hits.backAttack += backAttackCount;
      damageOwner.hits.totalBackAttack += 1;
      skill.hits.backAttack += backAttackCount;
      skill.hits.totalBackAttack += 1;
    }
    if (directionalmask === 1 /* frontal_attack */ || directionalmask === 2 /* flank_attack */) {
      isFrontAttack = hitOption === 1 /* frontal_attack */;
      const frontAttackCount = isFrontAttack ? 1 : 0;
      damageOwner.hits.frontAttack += frontAttackCount;
      damageOwner.hits.totalFrontAttack += 1;
      skill.hits.frontAttack += frontAttackCount;
      skill.hits.totalFrontAttack += 1;
    }
    if (damageOwner.isPlayer) {
      this.#game.damageStatistics.totalDamageDealt += damageData.damage;
      this.#game.damageStatistics.topDamageDealt = Math.max(
        this.#game.damageStatistics.topDamageDealt,
        damageOwner.damageDealt
      );
      let isBuffedBySupport = false, isDebuffedBySupport = false;
      mappedSeOnSource.forEach((buffId) => {
        if (!this.#game.damageStatistics.buffs.has(buffId)) {
          const statusEffect2 = this.#data.getStatusEffectHeaderData(buffId);
          if (statusEffect2)
            this.#game.damageStatistics.buffs.set(buffId, statusEffect2);
        }
        const statusEffect = this.#game.damageStatistics.buffs.get(buffId);
        if (statusEffect && !isBuffedBySupport) {
          isBuffedBySupport = (statusEffect.buffcategory === "classskill" || statusEffect.buffcategory === "identity" || statusEffect.buffcategory === "ability") && statusEffect.source.skill !== void 0 && statusEffect.target === 1 /* PARTY */ && this.#data.isSupportClassId(statusEffect.source.skill.classid);
        }
      });
      mappedSeOnTarget.forEach((buffId) => {
        if (!this.#game.damageStatistics.debuffs.has(buffId)) {
          const statusEffect2 = this.#data.getStatusEffectHeaderData(buffId);
          if (statusEffect2)
            this.#game.damageStatistics.debuffs.set(buffId, statusEffect2);
        }
        const statusEffect = this.#game.damageStatistics.debuffs.get(buffId);
        if (statusEffect && !isDebuffedBySupport) {
          isDebuffedBySupport = (statusEffect.buffcategory === "classskill" || statusEffect.buffcategory === "identity" || statusEffect.buffcategory === "ability") && statusEffect.source.skill !== void 0 && statusEffect.target === 1 /* PARTY */ && this.#data.isSupportClassId(statusEffect.source.skill.classid);
        }
      });
      const debuffAttackCount = isDebuffedBySupport ? 1 : 0;
      const buffAttackCount = isBuffedBySupport ? 1 : 0;
      skill.damageDealtBuffedBySupport += isBuffedBySupport ? damageData.damage : 0;
      skill.damageDealtDebuffedBySupport += isDebuffedBySupport ? damageData.damage : 0;
      mappedSeOnSource.forEach((buffId) => {
        const oldval = skill.damageDealtBuffedBy.get(buffId) ?? 0;
        skill.damageDealtBuffedBy.set(buffId, oldval + damageData.damage);
        const oldOwnerDamage = damageOwner.damageDealtBuffedBy.get(buffId) ?? 0;
        damageOwner.damageDealtBuffedBy.set(buffId, oldOwnerDamage + damageData.damage);
      });
      mappedSeOnTarget.forEach((buffId) => {
        const oldSkillDmg = skill.damageDealtDebuffedBy.get(buffId) ?? 0;
        skill.damageDealtDebuffedBy.set(buffId, oldSkillDmg + damageData.damage);
        const oldOwnerDamage = damageOwner.damageDealtDebuffedBy.get(buffId) ?? 0;
        damageOwner.damageDealtDebuffedBy.set(buffId, oldOwnerDamage + damageData.damage);
      });
      damageOwner.damageDealtBuffedBySupport += isBuffedBySupport ? damageData.damage : 0;
      damageOwner.damageDealtDebuffedBySupport += isDebuffedBySupport ? damageData.damage : 0;
      damageOwner.hits.hitsBuffedBySupport += buffAttackCount;
      damageOwner.hits.hitsDebuffedBySupport += debuffAttackCount;
      mappedSeOnSource.forEach((buffId) => {
        const oldHitAmountTotal = damageOwner.hits.hitsBuffedBy.get(buffId) ?? 0;
        damageOwner.hits.hitsBuffedBy.set(buffId, oldHitAmountTotal + 1);
        const oldHitAmountSkill = skill.hits.hitsBuffedBy.get(buffId) ?? 0;
        skill.hits.hitsBuffedBy.set(buffId, oldHitAmountSkill + 1);
      });
      mappedSeOnTarget.forEach((buffId) => {
        const oldHitAmountTotal = damageOwner.hits.hitsDebuffedBy.get(buffId) ?? 0;
        damageOwner.hits.hitsDebuffedBy.set(buffId, oldHitAmountTotal + 1);
        const oldHitAmountSkill = skill.hits.hitsDebuffedBy.get(buffId) ?? 0;
        skill.hits.hitsDebuffedBy.set(buffId, oldHitAmountSkill + 1);
      });
      skill.hits.hitsBuffedBySupport += buffAttackCount;
      skill.hits.hitsDebuffedBySupport += debuffAttackCount;
      const breakdown = {
        timestamp: +time,
        damage: damageData.damage,
        targetEntity: damageTarget.id,
        isCrit,
        isBackAttack,
        isFrontAttack,
        isBuffedBySupport,
        isDebuffedBySupport,
        buffedBy: [...mappedSeOnSource],
        debuffedBy: [...mappedSeOnTarget]
      };
      skill.breakdown.push(breakdown);
    }
    if (damageTarget.isPlayer) {
      this.#game.damageStatistics.totalDamageTaken += damageData.damage;
      this.#game.damageStatistics.topDamageTaken = Math.max(
        this.#game.damageStatistics.topDamageTaken,
        damageTarget.damageTaken
      );
    }
    if (damageTarget.isBoss) {
      this.#game.currentBoss = damageTarget;
    }
    if (this.#game.fightStartedOn === 0)
      this.#game.fightStartedOn = +time;
    this.#game.lastCombatPacket = +time;
  }
  onStartSkill(owner, skillId, time) {
    const entity = this.updateEntity(
      owner,
      {
        isDead: false
      },
      time
    );
    if (entity) {
      entity.hits.casts += 1;
      let skill = entity.skills.get(skillId);
      if (!skill) {
        skill = {
          ...this.createEntitySkill(),
          ...{
            id: skillId
          },
          ...this.getSkillNameIcon(skillId, 0)
        };
        entity.skills.set(skillId, skill);
      }
      skill.hits.casts += 1;
    }
  }
  getSkillNameIcon(skillId, skillEffectId) {
    if (skillId === 0 && skillEffectId === 0) {
      return { name: "Bleed", icon: "buff_168.png" };
    } else if (skillId === 0) {
      const effect = this.#data.skillEffect.get(skillEffectId);
      if (effect && effect.itemname) {
        return { name: effect.itemname, icon: effect.icon ?? "" };
      } else if (effect) {
        if (effect.sourceskill) {
          const skill = this.#data.skill.get(effect.sourceskill);
          if (skill)
            return { name: skill.name, icon: skill.icon };
        } else {
          const skill = this.#data.skill.get(Math.floor(skillEffectId / 10));
          if (skill)
            return { name: skill.name, icon: skill.icon };
        }
        return { name: effect.comment };
      } else {
        return { name: this.#data.getSkillName(skillId) };
      }
    } else {
      let skill = this.#data.skill.get(skillId);
      if (!skill) {
        skill = this.#data.skill.get(skillId - skillId % 10);
        if (!skill)
          return { name: this.#data.getSkillName(skillId), icon: "" };
      }
      if (skill.summonsourceskill) {
        skill = this.#data.skill.get(skill.summonsourceskill);
        if (skill) {
          return { name: skill.name + " (Summon)", icon: skill.icon };
        } else {
          return { name: this.#data.getSkillName(skillId), icon: "" };
        }
      } else if (skill.sourceskill) {
        skill = this.#data.skill.get(skill.sourceskill);
        if (skill) {
          return { name: skill.name, icon: skill.icon };
        } else {
          return { name: this.#data.getSkillName(skillId), icon: "" };
        }
      } else {
        return { name: skill.name, icon: skill.icon };
      }
    }
  }
  updateEntity(entity, values, time) {
    const updateTime = { lastUpdate: +time };
    let entityState = this.#game.entities.get(entity.name);
    if (entityState) {
      Object.assign(entityState, values, updateTime);
    } else {
      let extraInfo = {};
      if (entity.entityType === 1 /* Player */) {
        const player = entity;
        extraInfo = { classId: player.class, gearScore: player.gearLevel, isPlayer: true };
      } else if (entity.entityType === 2 /* Npc */) {
        const npc = entity;
        extraInfo = { npcId: npc.typeId, isBoss: npc.isBoss };
      }
      entityState = {
        ...this.createEntity(),
        ...values,
        ...updateTime,
        ...extraInfo,
        ...{ name: entity.name },
        ...{ id: entity.entityId.toString(16) }
      };
      this.#game.entities.set(entity.name, entityState);
    }
    return entityState;
  }
  updateOrCreateEntity(entity, entityState, time) {
    if (!entityState.name || !entityState.id)
      return;
    for (const [k, e] of this.#game.entities) {
      if (entityState.id === e.id) {
        this.#game.entities.delete(k);
        this.updateEntity(entity, { ...e, ...entityState }, time);
        return;
      }
    }
    this.updateEntity(entity, entityState, time);
  }
  createEntitySkill() {
    const newEntitySkill = {
      id: 0,
      name: "",
      icon: "",
      damageDealt: 0,
      damageDealtDebuffedBySupport: 0,
      damageDealtBuffedBySupport: 0,
      maxDamage: 0,
      hits: {
        casts: 0,
        total: 0,
        crit: 0,
        backAttack: 0,
        totalBackAttack: 0,
        frontAttack: 0,
        totalFrontAttack: 0,
        counter: 0,
        hitsDebuffedBySupport: 0,
        hitsBuffedBySupport: 0,
        hitsBuffedBy: /* @__PURE__ */ new Map(),
        hitsDebuffedBy: /* @__PURE__ */ new Map()
      },
      breakdown: [],
      damageDealtDebuffedBy: /* @__PURE__ */ new Map(),
      damageDealtBuffedBy: /* @__PURE__ */ new Map()
    };
    return newEntitySkill;
  }
  createEntity() {
    const newEntity = {
      lastUpdate: 0,
      id: "",
      npcId: 0,
      name: "",
      classId: 0,
      isBoss: false,
      isPlayer: false,
      isDead: false,
      deaths: 0,
      deathTime: 0,
      gearScore: 0,
      currentHp: 0,
      maxHp: 0,
      damageDealt: 0,
      damageDealtDebuffedBySupport: 0,
      damageDealtBuffedBySupport: 0,
      healingDone: 0,
      shieldDone: 0,
      damageTaken: 0,
      skills: /* @__PURE__ */ new Map(),
      hits: {
        casts: 0,
        total: 0,
        crit: 0,
        backAttack: 0,
        totalBackAttack: 0,
        frontAttack: 0,
        totalFrontAttack: 0,
        counter: 0,
        hitsDebuffedBySupport: 0,
        hitsBuffedBySupport: 0,
        hitsBuffedBy: /* @__PURE__ */ new Map(),
        hitsDebuffedBy: /* @__PURE__ */ new Map()
      },
      damageDealtDebuffedBy: /* @__PURE__ */ new Map(),
      damageDealtBuffedBy: /* @__PURE__ */ new Map()
    };
    return newEntity;
  }
  getBroadcast() {
    const clone = { ...this.#game };
    clone.entities = /* @__PURE__ */ new Map();
    this.#game.entities.forEach((e, k, m) => {
      if (!e.isPlayer) {
        return;
      }
      const eCopy = { ...e };
      eCopy.skills = new Map(e.skills);
      eCopy.skills.forEach((s) => {
        s.breakdown = [];
      });
      clone.entities.set(k, eCopy);
    });
    clone.localPlayer = this.#entityTracker.localPlayer.name;
    return clone;
  }
};

// src/logger/partytracker.ts
var PartyTracker = class {
  characterIdToPartyId;
  entityIdToPartyId;
  raidInstanceToPartyInstances;
  ownName;
  characterNameToCharacterId;
  #pcIdMapper;
  constructor(pcIdMapper) {
    this.characterIdToPartyId = /* @__PURE__ */ new Map();
    this.entityIdToPartyId = /* @__PURE__ */ new Map();
    this.raidInstanceToPartyInstances = /* @__PURE__ */ new Map();
    this.characterNameToCharacterId = /* @__PURE__ */ new Map();
    this.#pcIdMapper = pcIdMapper;
  }
  add(raidInstanceId, partyId, characterId = void 0, entityId = void 0, name = void 0) {
    if (!characterId && !entityId)
      return;
    if (characterId && !entityId)
      entityId = this.#pcIdMapper.getEntityId(characterId);
    if (entityId && !characterId)
      characterId = this.#pcIdMapper.getEntityId(entityId);
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
    const objectId = this.#pcIdMapper.getEntityId(chracterId);
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
  partyInfo(pkt, entities, localPlayer) {
    const parsed = pkt.parsed;
    if (!parsed)
      return;
    if (parsed.MemberDatas.length === 1 && parsed.MemberDatas[0]?.Name === localPlayer.name) {
      this.remove(parsed.PartyInstanceId, parsed.MemberDatas[0].Name);
      return;
    }
    this.removePartyMappings(parsed.PartyInstanceId);
    for (const pm of parsed.MemberDatas) {
      if (pm.CharacterId === localPlayer.characterId) {
        this.setOwnName(pm.Name);
      }
      const entityId = this.#pcIdMapper.getEntityId(pm.CharacterId);
      if (entityId) {
        const ent = entities.get(entityId);
        if (ent && ent.entityType === 1 /* Player */ && ent.name !== pm.Name) {
          const p = ent;
          p.gearLevel = u32tof32(pm.GearLevel);
          p.name = pm.Name;
          p.class = pm.ClassId;
        }
      }
      this.add(parsed.RaidInstanceId, parsed.PartyInstanceId, pm.CharacterId, entityId, pm.Name);
    }
  }
};

// src/logger/pcidmapper.ts
var PCIdMapper = class {
  entityToCharacterId;
  characterToEntityId;
  constructor() {
    this.entityToCharacterId = /* @__PURE__ */ new Map();
    this.characterToEntityId = /* @__PURE__ */ new Map();
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

// src/logger/parser.ts
var Parser = class extends import_tiny_typed_emitter2.TypedEmitter {
  #logger;
  #data;
  #pcIdMapper;
  #partyTracker;
  #statusTracker;
  #entityTracker;
  #gameTracker;
  #wasWipe;
  #wasKill;
  constructor(logger, data, options) {
    super();
    this.#logger = logger;
    this.#data = data;
    this.#pcIdMapper = new PCIdMapper();
    this.#partyTracker = new PartyTracker(this.#pcIdMapper);
    this.#statusTracker = new StatusTracker(this.#partyTracker, this.#data);
    this.#entityTracker = new EntityTracker(this.#pcIdMapper, this.#partyTracker, this.#statusTracker, this.#data);
    this.#gameTracker = new GameTracker(this.#entityTracker, this.#statusTracker, this.#data, options);
    this.#gameTracker.emit = this.emit.bind(this);
    this.#wasWipe = false;
    this.#wasKill = false;
    if (this.#gameTracker.options.isLive) {
      setInterval(this.broadcastStateChange.bind(this), 100);
    }
    this.#logger.on("AbilityChangeNotify", (pkt) => {
    }).on("ActiveAbilityNotify", (pkt) => {
    }).on("AddonSkillFeatureChangeNotify", (pkt) => {
    }).on("BlockSkillStateNotify", (pkt) => {
    }).on("CounterAttackNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const source = this.#entityTracker.entities.get(parsed.SourceId);
      if (source)
        this.#gameTracker.onCounterAttack(source, pkt.time);
    }).on("DeathNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const target = this.#entityTracker.entities.get(parsed.TargetId);
      if (this.#partyTracker.isEntityInParty(parsed.TargetId)) {
        if (target?.name === this.#entityTracker.localPlayer.name) {
          this.#statusTracker.RemoveLocalObject(parsed.TargetId);
        } else {
          const charId = this.#pcIdMapper.getCharacterId(parsed.TargetId);
          if (charId)
            this.#statusTracker.RemovePartyObject(charId);
        }
      } else {
        this.#statusTracker.RemoveLocalObject(parsed.TargetId);
      }
      if (target)
        this.#gameTracker.onDeath(target, pkt.time);
    }).on("IdentityGaugeChangeNotify", (pkt) => {
    }).on("InitAbility", (pkt) => {
    }).on("InitEnv", (pkt) => {
      this.#entityTracker.processInitEnv(pkt);
      this.#gameTracker.onInitEnv(pkt, pkt.time);
    }).on("InitLocal", (pkt) => {
    }).on("InitPC", (pkt) => {
      const player = this.#entityTracker.processInitPC(pkt);
      if (player && pkt.parsed) {
        const statsMap = this.#data.getStatPairMap(pkt.parsed.statPair);
        this.#gameTracker.updateOrCreateEntity(
          player,
          {
            id: player.entityId.toString(16),
            name: player.name,
            classId: player.class,
            isPlayer: true,
            gearScore: player.gearLevel,
            currentHp: Number(statsMap.get(1 /* hp */)) || 0,
            maxHp: Number(statsMap.get(27 /* max_hp */)) || 0
          },
          pkt.time
        );
      }
    }).on("MigrationExecute", (pkt) => {
      if (this.#entityTracker.localPlayer.characterId !== 0n)
        return;
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#entityTracker.localPlayer.characterId = parsed.Account_CharacterId1 < parsed.Account_CharacterId2 ? parsed.Account_CharacterId1 : parsed.Account_CharacterId2;
    }).on("NewNpc", (pkt) => {
      const npcEntity = this.#entityTracker.processNewNpc(pkt);
      if (npcEntity && pkt.parsed) {
        const statsMap = this.#data.getStatPairMap(pkt.parsed.NpcStruct.statPair);
        this.#gameTracker.updateOrCreateEntity(
          npcEntity,
          {
            id: npcEntity.entityId.toString(16),
            name: npcEntity.name,
            npcId: npcEntity.typeId,
            isPlayer: false,
            isBoss: npcEntity.isBoss,
            currentHp: Number(statsMap.get(1 /* hp */)) || 0,
            maxHp: Number(statsMap.get(27 /* max_hp */)) || 0
          },
          pkt.time
        );
      }
    }).on("NewNpcSummon", (pkt) => {
      const npcEntity = this.#entityTracker.processNewNpcSummon(pkt);
      if (npcEntity && pkt.parsed) {
        const statsMap = this.#data.getStatPairMap(pkt.parsed.NpcData.statPair);
        this.#gameTracker.updateOrCreateEntity(
          npcEntity,
          {
            id: npcEntity.entityId.toString(16),
            name: npcEntity.name,
            npcId: npcEntity.typeId,
            isPlayer: false,
            isBoss: npcEntity.isBoss,
            currentHp: Number(statsMap.get(1 /* hp */)) || 0,
            maxHp: Number(statsMap.get(27 /* max_hp */)) || 0
          },
          pkt.time
        );
      }
    }).on("NewPC", (pkt) => {
      const player = this.#entityTracker.processNewPC(pkt);
      if (player && pkt.parsed) {
        const statsMap = this.#data.getStatPairMap(pkt.parsed.PCStruct.statPair);
        this.#gameTracker.updateOrCreateEntity(
          player,
          {
            id: player.entityId.toString(16),
            name: player.name,
            classId: player.class,
            isPlayer: true,
            gearScore: player.gearLevel,
            currentHp: Number(statsMap.get(1 /* hp */)) || 0,
            maxHp: Number(statsMap.get(27 /* max_hp */)) || 0
          },
          pkt.time
        );
      }
    }).on("NewProjectile", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const projectile = {
        entityId: parsed.projectileInfo.ProjectileId,
        entityType: 4 /* Projectile */,
        name: parsed.projectileInfo.ProjectileId.toString(16),
        ownerId: parsed.projectileInfo.OwnerId,
        skillEffectId: parsed.projectileInfo.SkillEffect,
        skillId: parsed.projectileInfo.SkillId
      };
      this.#entityTracker.entities.set(projectile.entityId, projectile);
    }).on("ParalyzationStateNotify", (pkt) => {
    }).on("PartyInfo", (pkt) => {
      this.#partyTracker.partyInfo(pkt, this.#entityTracker.entities, this.#entityTracker.localPlayer);
    }).on("PartyLeaveResult", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#partyTracker.remove(parsed.PartyInstanceId, parsed.Name);
    }).on("PartyPassiveStatusEffectAddNotify", (pkt) => {
    }).on("PartyPassiveStatusEffectRemoveNotify", (pkt) => {
    }).on("PartyStatusEffectAddNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      for (const effect of parsed.statusEffectDatas) {
        const sourceId = parsed.PlayerIdOnRefresh !== 0n ? parsed.PlayerIdOnRefresh : effect.SourceId;
        const sourceEnt = this.#entityTracker.getSourceEntity(sourceId);
        this.#statusTracker.RegisterStatusEffect(
          this.#statusTracker.buildStatusEffect(
            effect,
            parsed.CharacterId,
            sourceEnt.entityId,
            0 /* Party */,
            pkt.time
          )
        );
      }
    }).on("PartyStatusEffectRemoveNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      for (const effectId of parsed.statusEffectIds)
        this.#statusTracker.RemoveStatusEffect(parsed.CharacterId, effectId, 0 /* Party */);
    }).on("PartyStatusEffectResultNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#partyTracker.add(parsed.RaidInstanceId, parsed.PartyInstanceId, parsed.CharacterId);
    }).on("PassiveStatusEffectAddNotify", (pkt) => {
    }).on("PassiveStatusEffectRemoveNotify", (pkt) => {
    }).on("RaidBossKillNotify", (pkt) => {
      this.#gameTracker.onPhaseTransition(1, pkt.time);
    }).on("RaidResult", (pkt) => {
      this.#gameTracker.onPhaseTransition(0, pkt.time);
    }).on("RemoveObject", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      for (const upo of parsed.unpublishedObjects)
        this.#statusTracker.RemoveLocalObject(upo.ObjectId);
    }).on("SkillDamageAbnormalMoveNotify", (pkt) => {
      const parsedDmg = pkt.parsed;
      if (!parsedDmg)
        return;
      let ownerEntity = this.#entityTracker.getSourceEntity(parsedDmg.SourceId);
      ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsedDmg.SkillId);
      parsedDmg.SkillDamageAbnormalMoveEvents.forEach((event) => {
        const targetEntity = this.#entityTracker.getOrCreateEntity(event.skillDamageEvent.TargetId);
        const sourceEntity = this.#entityTracker.getOrCreateEntity(parsedDmg.SourceId);
        this.#gameTracker.onDamage(
          ownerEntity,
          sourceEntity,
          targetEntity,
          {
            skillId: parsedDmg.SkillId,
            skillEffectId: parsedDmg.SkillEffectId,
            damage: Number(event.skillDamageEvent.Damage),
            modifier: event.skillDamageEvent.Modifier,
            targetCurHp: Number(event.skillDamageEvent.CurHp),
            targetMaxHp: Number(event.skillDamageEvent.MaxHp)
          },
          pkt.time
        );
      });
    }).on("SkillDamageNotify", (pkt) => {
      const parsedDmg = pkt.parsed;
      if (!parsedDmg)
        return;
      let ownerEntity = this.#entityTracker.getSourceEntity(parsedDmg.SourceId);
      ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsedDmg.SkillId);
      parsedDmg.SkillDamageEvents.forEach((event) => {
        const targetEntity = this.#entityTracker.getOrCreateEntity(event.TargetId);
        const sourceEntity = this.#entityTracker.getOrCreateEntity(parsedDmg.SourceId);
        this.#gameTracker.onDamage(
          ownerEntity,
          sourceEntity,
          targetEntity,
          {
            skillId: parsedDmg.SkillId,
            skillEffectId: parsedDmg.SkillEffectId,
            damage: Number(event.Damage),
            modifier: event.Modifier,
            targetCurHp: Number(event.CurHp),
            targetMaxHp: Number(event.MaxHp)
          },
          pkt.time
        );
      });
    }).on("SkillStageNotify", (pkt) => {
    }).on("SkillStartNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      let ownerEntity = this.#entityTracker.getSourceEntity(parsed.SourceId);
      ownerEntity = this.#entityTracker.guessIsPlayer(ownerEntity, parsed.SkillId);
      this.#gameTracker.onStartSkill(ownerEntity, parsed.SkillId, pkt.time);
    }).on("StatusEffectAddNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      const sourceEnt = this.#entityTracker.getSourceEntity(parsed.statusEffectData.SourceId);
      this.#statusTracker.RegisterStatusEffect(
        this.#statusTracker.buildStatusEffect(
          parsed.statusEffectData,
          parsed.ObjectId,
          sourceEnt.entityId,
          1 /* Local */,
          pkt.time
        )
      );
    }).on("StatusEffectDurationNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#statusTracker.UpdateDuration(
        parsed.EffectInstanceId,
        parsed.TargetId,
        parsed.ExpirationTick,
        1 /* Local */
      );
    }).on("StatusEffectRemoveNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      for (const effectId of parsed.statusEffectIds)
        this.#statusTracker.RemoveStatusEffect(parsed.ObjectId, effectId, 1 /* Local */);
    }).on("StatusEffectSyncDataNotify", (pkt) => {
    }).on("TriggerBossBattleStatus", (pkt) => {
      this.#gameTracker.onPhaseTransition(2, pkt.time);
    }).on("TriggerFinishNotify", (pkt) => {
    }).on("TriggerStartNotify", (pkt) => {
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
    }).on("TroopMemberUpdateMinNotify", (pkt) => {
    }).on("ZoneObjectUnpublishNotify", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#statusTracker.RemoveLocalObject(parsed.ObjectId);
    }).on("ZoneStatusEffectAddNotify", (pkt) => {
    }).on("ZoneStatusEffectRemoveNotify", (pkt) => {
    });
  }
  broadcastStateChange() {
    this.emit("state-change", this.#gameTracker.getBroadcast());
  }
  reset() {
    this.#gameTracker.resetState(+new Date());
  }
  cancelReset() {
    this.#gameTracker.cancelReset();
  }
  updateOptions(options) {
    this.#gameTracker.updateOptions(options);
  }
  get encounters() {
    this.#gameTracker.splitEncounter(new Date());
    return this.#gameTracker.encounters;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Parser
});
