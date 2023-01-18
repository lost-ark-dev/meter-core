"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/legacy-logger.ts
var legacy_logger_exports = {};
__export(legacy_logger_exports, {
  LegacyLogger: () => LegacyLogger,
  LineId: () => LineId
});
module.exports = __toCommonJS(legacy_logger_exports);
var import_crypto = require("crypto");
var import_tiny_typed_emitter = require("tiny-typed-emitter");
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
      gearLevel: 0
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
      if (this.#needEmit) {
        const parsed = pkt.parsed;
        if (!parsed)
          return;
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
        gearLevel: this.#localPlayer.gearLevel
      };
      this.#currentEncounter.entities.set(player.entityId, player);
      if (this.#needEmit)
        this.#buildLine(1 /* InitEnv */, player.entityId);
    }).on("PKTInitPC", (pkt) => {
      const parsed = pkt.parsed;
      if (!parsed)
        return;
      this.#localPlayer = { name: parsed.Name, class: parsed.ClassId, gearLevel: this.#u32tof32(parsed.GearLevel) };
      this.#currentEncounter = new Encounter();
      const player = {
        entityId: parsed.PlayerId,
        entityType: EntityType.Player,
        name: parsed.Name,
        class: parsed.ClassId,
        gearLevel: this.#u32tof32(parsed.GearLevel)
      };
      this.#currentEncounter.entities.set(player.entityId, player);
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
          Number(statsMap.get(27 /* max_hp */)) || 0
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
        gearLevel: this.#u32tof32(parsed.PCStruct.GearLevel)
      };
      this.#currentEncounter.entities.set(player.entityId, player);
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
          Number(statsMap.get(27 /* max_hp */)) || 0
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
        ownerId: parsed.projectileInfo.OwnerId
      };
      this.#currentEncounter.entities.set(projectile.entityId, projectile);
    }).on("PKTParalyzationStateNotify", (pkt) => {
    }).on("PKTPartyInfo", (pkt) => {
    }).on("PKTPartyLeaveResult", (pkt) => {
    }).on("PKTPartyStatusEffectAddNotify", (pkt) => {
    }).on("PKTPartyStatusEffectRemoveNotify", (pkt) => {
    }).on("PKTPartyStatusEffectResultNotify", (pkt) => {
    }).on("PKTRaidBossKillNotify", (pkt) => {
      if (this.#needEmit)
        this.#buildLine(2 /* PhaseTransition */, 1);
    }).on("PKTRaidResult", (pkt) => {
      if (this.#needEmit)
        this.#buildLine(2 /* PhaseTransition */, 0);
    }).on("PKTRemoveObject", (pkt) => {
    }).on("PKTSkillDamageAbnormalMoveNotify", (pkt) => {
      if (this.#needEmit) {
        const parsedDmg = pkt.parsed;
        if (!parsedDmg)
          return;
        let sourceEntity = this.#getSourceEntity(parsedDmg.SourceId);
        let skillName = this.#data.getSkillName(parsedDmg.SkillId);
        const skillEffect = this.#data.getSkillEffectComment(parsedDmg.SkillEffectId);
        sourceEntity = this.#guessIsPlayer(sourceEntity, parsedDmg.SkillId);
        parsedDmg.SkillDamageAbnormalMoveEvents.forEach((event) => {
          if ((event.skillDamageEvent.Modifier & 15) === 11 /* damage_share */ && parsedDmg.SkillId === 0 && parsedDmg.SkillEffectId === 0)
            return;
          if (parsedDmg.SkillId === 0 && parsedDmg.SkillEffectId === 0 && event.skillDamageEvent.Modifier & (4 /* dot */ | 8 /* dot_critical */))
            skillName = "Bleed";
          this.#buildLine(
            8 /* Damage */,
            sourceEntity.entityId,
            sourceEntity.name,
            parsedDmg.SkillId,
            skillName,
            parsedDmg.SkillEffectId,
            skillEffect,
            event.skillDamageEvent.TargetId,
            this.#getEntityName(event.skillDamageEvent.TargetId),
            Number(event.skillDamageEvent.Damage),
            event.skillDamageEvent.Modifier.toString(16),
            Number(event.skillDamageEvent.CurHp),
            Number(event.skillDamageEvent.MaxHp)
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
          this.#buildLine(
            8 /* Damage */,
            sourceEntity.entityId,
            sourceEntity.name,
            parsedDmg.SkillId,
            skillName,
            parsedDmg.SkillEffectId,
            skillEffect,
            event.TargetId,
            this.#getEntityName(event.TargetId),
            Number(event.Damage),
            event.Modifier.toString(16),
            Number(event.CurHp),
            Number(event.MaxHp)
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
    }).on("PKTStatusEffectRemoveNotify", (pkt) => {
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
          gearLevel: player.gearLevel
        };
      } else {
        newEntity = {
          entityId: entity.entityId,
          entityType: EntityType.Player,
          name: entity.name,
          class: classId,
          gearLevel: 0
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
        0
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
