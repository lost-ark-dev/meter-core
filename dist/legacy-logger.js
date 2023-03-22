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

// src/statustracker.ts
var _StatusTracker = class {
  PartyStatusEffectRegistry;
  LocalStatusEffectRegistry;
  constructor() {
    this.PartyStatusEffectRegistry = /* @__PURE__ */ new Map();
    this.LocalStatusEffectRegistry = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    if (!_StatusTracker.instance) {
      _StatusTracker.instance = new _StatusTracker();
    }
    return _StatusTracker.instance;
  }
  getStatusEffectRegistryForPlayer(id, t) {
    var registry = this.getPlayerRegistry(t);
    if (registry.has(id))
      return registry.get(id);
    var newEntry = /* @__PURE__ */ new Map();
    registry.set(id, newEntry);
    return newEntry;
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
  sendCancelEffectInfo(seNew, seOld) {
  }
  RegisterValueUpdate(se) {
  }
  RemoveLocalObject(objectId) {
    this.LocalStatusEffectRegistry.delete(objectId);
  }
  RemovePartyObject(objectId) {
    this.PartyStatusEffectRegistry.delete(objectId);
  }
  RegisterStatusEffect(se) {
    var registry = this.getStatusEffectRegistryForPlayer(se.targetId, se.type);
    var effect = registry.get(se.instanceId);
    if (effect) {
      this.sendCancelEffectInfo(se, effect);
    }
    registry.set(se.instanceId, se);
  }
  HasAnyStatusEffect(id, t, statusEffectIds) {
    var registry = this.getStatusEffectRegistryForPlayer(id, t);
    for (const effectId of registry) {
      for (const key of statusEffectIds) {
        if (key == effectId[1].statusEffectId)
          return true;
      }
    }
    return false;
  }
  HasAnyStatusEffectFromParty(targetId, et, partyId, statusEffectIds) {
    var registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    for (const effect of registry) {
      if (statusEffectIds.includes(effect[1].statusEffectId)) {
        var partyIdOfSource = PartyTracker.getInstance().getPartyIdFromEntityId(effect[1].sourceId);
        if (partyIdOfSource === partyId)
          return true;
      }
    }
    return false;
  }
  RemoveStatusEffect(targetId, statusEffectId, et) {
    var registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    registry.delete(statusEffectId);
  }
  GetStatusEffects(targetId, et) {
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    return [...registry.values()];
  }
  GetStatusEffectsFromParty(targetId, et, partyId) {
    const registry = this.getStatusEffectRegistryForPlayer(targetId, et);
    return [...registry.values()].filter((value, _index, _array) => {
      return partyId == PartyTracker.getInstance().getPartyIdFromEntityId(value.sourceId);
    });
  }
  Clear() {
    this.LocalStatusEffectRegistry.clear();
    this.PartyStatusEffectRegistry.clear();
  }
};
var StatusTracker = _StatusTracker;
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
        let p = this.#currentEncounter.entities.get(parsed.TargetId);
        if (p?.name == this.#localPlayer.name) {
          StatusTracker.getInstance().RemoveLocalObject(parsed.TargetId);
        } else {
          let charId = PCIdMapper.getInstance().getCharacterId(parsed.TargetId);
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
      this.#currentEncounter = new Encounter();
      const player = {
        entityId: parsed.PlayerId,
        entityType: EntityType.Player,
        name: this.#localPlayer.name,
        class: this.#localPlayer.class,
        gearLevel: this.#localPlayer.gearLevel,
        characterId: this.#localPlayer.characterId
      };
      this.#currentEncounter.entities.set(player.entityId, player);
      PCIdMapper.getInstance().clear();
      StatusTracker.getInstance().Clear();
      if (player.characterId != 0n)
        PCIdMapper.getInstance().addMapping(player.characterId, player.entityId);
      if (this.#localPlayer && this.#localPlayer.characterId && this.#localPlayer.characterId > 0n)
        PartyTracker.getInstance().completeEntry(this.#localPlayer.characterId, parsed.PlayerId);
      if (this.#needEmit)
        this.#buildLine(1 /* InitEnv */, player.entityId);
    }).on("PKTInitPC", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#localPlayer = {
        name: parsed.Name,
        class: parsed.ClassId,
        gearLevel: this.#u32tof32(parsed.GearLevel),
        characterId: parsed.CharacterId
      };
      this.#currentEncounter = new Encounter();
      const player = {
        entityId: parsed.PlayerId,
        entityType: EntityType.Player,
        name: parsed.Name,
        class: parsed.ClassId,
        gearLevel: this.#u32tof32(parsed.GearLevel),
        characterId: parsed.CharacterId
      };
      this.#currentEncounter.entities.set(player.entityId, player);
      PCIdMapper.getInstance().addMapping(player.characterId, player.entityId);
      PartyTracker.getInstance().completeEntry(player.characterId, parsed.PlayerId);
      for (let se of parsed.statusEffectDatas) {
        const val = se.Value ? se.Value.readUInt32LE() : 0;
        StatusTracker.getInstance().RegisterStatusEffect({
          instanceId: se.EffectInstanceId,
          sourceId: se.SourceId,
          started: new Date(),
          statusEffectId: se.StatusEffectId,
          targetId: parsed.PlayerId,
          type: 1 /* Local */,
          value: val
        });
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
      if (this.#needEmit) {
        const statsMap = this.#getStatPairMap(pkt.parsed.NpcStruct.statPair);
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
      PCIdMapper.getInstance().addMapping(player.characterId, player.entityId);
      PartyTracker.getInstance().completeEntry(player.characterId, player.entityId);
      for (let se of parsed.PCStruct.statusEffectDatas) {
        const val = se.Value ? se.Value.readUInt32LE() : 0;
        StatusTracker.getInstance().RegisterStatusEffect({
          instanceId: se.EffectInstanceId,
          sourceId: se.SourceId,
          started: new Date(),
          statusEffectId: se.StatusEffectId,
          targetId: parsed.PCStruct.PlayerId,
          type: 1 /* Local */,
          value: val
        });
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
      if (parsed.MemberDatas.length == 1 && parsed.MemberDatas[0]?.Name === this.#localPlayer.name) {
        PartyTracker.getInstance().remove(parsed.PartyInstanceId, parsed.MemberDatas[0].Name);
        return;
      }
      PartyTracker.getInstance().removePartyMappings(parsed.PartyInstanceId);
      for (const pm of parsed.MemberDatas) {
        PartyTracker.getInstance().add(pm.CharacterId, void 0, parsed.PartyInstanceId, parsed.RaidInstanceId);
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
      for (const effect of parsed.statusEffectDatas) {
        const sourceId = parsed.PlayerIdOnRefresh != 0n ? parsed.PlayerIdOnRefresh : effect.SourceId;
        const sourceEnt = this.#getSourceEntity(sourceId);
        const val = effect.Value ? effect.Value.readUInt32LE() : 0;
        var se = {
          instanceId: effect.EffectInstanceId,
          sourceId: sourceEnt.entityId,
          started: new Date(),
          statusEffectId: effect.StatusEffectId,
          targetId: parsed.CharacterId,
          type: 0 /* Party */,
          value: val
        };
        StatusTracker.getInstance().RegisterStatusEffect(se);
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
      PartyTracker.getInstance().add(parsed.CharacterId, void 0, parsed.PartyInstanceId, parsed.RaidInstanceId);
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
      for (let upo of parsed.unpublishedObjects)
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
          var statusEffectsOnTarget = [];
          var statusEffectsOnSource = [];
          if (sourceEntity.entityType === EntityType.Player) {
            const p = sourceEntity;
            const isLocalPlayer = p.name == this.#localPlayer.name;
            var isInParty = PartyTracker.getInstance().isCharacterInParty(p.characterId);
            if (isInParty) {
              const partyId = PartyTracker.getInstance().getPartyIdFromCharacterId(p.characterId);
              if (partyId) {
                const effect = StatusTracker.getInstance().GetStatusEffects(
                  isLocalPlayer ? p.entityId : p.characterId,
                  isLocalPlayer ? 1 /* Local */ : 0 /* Party */
                );
                for (var ef of effect)
                  statusEffectsOnSource.push([ef.statusEffectId, ef.sourceId]);
                const tEffects = StatusTracker.getInstance().GetStatusEffectsFromParty(
                  event.skillDamageEvent.TargetId,
                  1 /* Local */,
                  partyId
                );
                for (var ef of tEffects)
                  statusEffectsOnTarget.push([ef.statusEffectId, ef.sourceId]);
              }
            } else if (isLocalPlayer) {
              const effect = StatusTracker.getInstance().GetStatusEffects(p.entityId, 1 /* Local */);
              for (var ef of effect)
                statusEffectsOnSource.push([ef.statusEffectId, ef.sourceId]);
              const tEffects = StatusTracker.getInstance().GetStatusEffects(
                event.skillDamageEvent.TargetId,
                1 /* Local */
              );
              for (var ef of tEffects)
                statusEffectsOnTarget.push([ef.statusEffectId, ef.sourceId]);
            }
          }
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
          var statusEffectsOnTarget = [];
          var statusEffectsOnSource = [];
          if (sourceEntity.entityType === EntityType.Player) {
            const p = sourceEntity;
            const isLocalPlayer = p.name == this.#localPlayer.name;
            var isInParty = PartyTracker.getInstance().isCharacterInParty(p.characterId);
            if (isInParty) {
              const partyId = PartyTracker.getInstance().getPartyIdFromCharacterId(p.characterId);
              if (partyId) {
                const effect = StatusTracker.getInstance().GetStatusEffects(
                  isLocalPlayer ? p.entityId : p.characterId,
                  isLocalPlayer ? 1 /* Local */ : 0 /* Party */
                );
                for (var ef of effect)
                  statusEffectsOnSource.push([ef.statusEffectId, ef.sourceId]);
                const tEffects = StatusTracker.getInstance().GetStatusEffectsFromParty(
                  event.TargetId,
                  1 /* Local */,
                  partyId
                );
                for (var ef of tEffects)
                  statusEffectsOnTarget.push([ef.statusEffectId, ef.sourceId]);
              }
            } else if (isLocalPlayer) {
              const effect = StatusTracker.getInstance().GetStatusEffects(p.entityId, 1 /* Local */);
              for (var ef of effect)
                statusEffectsOnSource.push([ef.statusEffectId, ef.sourceId]);
              const tEffects = StatusTracker.getInstance().GetStatusEffects(event.TargetId, 1 /* Local */);
              for (var ef of tEffects)
                statusEffectsOnTarget.push([ef.statusEffectId, ef.sourceId]);
            }
          }
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
      const val = parsed.statusEffectData.Value ? parsed.statusEffectData.Value.readUInt32LE() : 0;
      const sourceEnt = this.#getSourceEntity(parsed.statusEffectData.SourceId);
      var se = {
        instanceId: parsed.statusEffectData.EffectInstanceId,
        sourceId: sourceEnt.entityId,
        started: new Date(),
        statusEffectId: parsed.statusEffectData.StatusEffectId,
        targetId: parsed.ObjectId,
        type: 1 /* Local */,
        value: val
      };
      StatusTracker.getInstance().RegisterStatusEffect(se);
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
