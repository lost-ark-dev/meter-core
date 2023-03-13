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

// src/data.ts
var data_exports = {};
__export(data_exports, {
  MeterData: () => MeterData
});
module.exports = __toCommonJS(data_exports);
var MeterData = class {
  enums;
  npc;
  PCData;
  skill;
  skillBuff;
  skillEffect;
  combatEffect;
  constructor() {
    this.enums = /* @__PURE__ */ new Map();
    this.npc = /* @__PURE__ */ new Map();
    this.PCData = /* @__PURE__ */ new Map();
    this.skill = /* @__PURE__ */ new Map();
    this.skillBuff = /* @__PURE__ */ new Map();
    this.skillEffect = /* @__PURE__ */ new Map();
    this.combatEffect = /* @__PURE__ */ new Map();
  }
  processEnumData(data) {
    for (const [ename, edata] of Object.entries(data)) {
      const en = /* @__PURE__ */ new Map();
      for (const [k, v] of Object.entries(edata))
        en.set(k, v);
      this.enums.set(ename, en);
    }
  }
  processNpcData(data) {
    for (const npc of Object.values(data)) {
      this.npc.set(npc.id, npc);
    }
  }
  processPCData(data) {
    for (const [k, v] of Object.entries(data)) {
      this.PCData.set(parseInt(k), v);
    }
  }
  processSkillData(data) {
    for (const skill of Object.values(data)) {
      this.skill.set(skill.id, skill);
    }
  }
  processSkillBuffData(data) {
    for (const skillBuff of Object.values(data)) {
      this.skillBuff.set(skillBuff.id, skillBuff);
    }
  }
  processSkillBuffEffectData(data) {
    for (const skillEffect of Object.values(data)) {
      this.skillEffect.set(skillEffect.id, skillEffect);
    }
  }
  processCombatEffectData(data) {
    for (const combatEffect of Object.values(data)) {
      this.combatEffect.set(combatEffect.id, combatEffect);
    }
  }
  getNpcName(id) {
    return this.npc.get(id)?.name || "";
  }
  getClassName(id) {
    return this.PCData.get(id) || "";
  }
  getSkillName(id) {
    return this.skill.get(id)?.name || "";
  }
  getSkillClassId(id) {
    return this.skill.get(id)?.classid || 0;
  }
  getSkillEffectComment(id) {
    return this.skillEffect.get(id)?.comment || "";
  }
  isSupportClassId(id) {
    return id === 105 || id === 204 || id === 603;
  }
  isBattleItem(id, type) {
    const itemcategory = this.skillEffect.get(id)?.itemcategory;
    switch (type) {
      case "attack":
        return itemcategory === "useup_battle_item_common_attack";
      case "buff":
        return itemcategory === "useup_battle_item_common_buff";
      case "function":
        return itemcategory === "useup_battle_item_common_function";
      default:
        return typeof itemcategory === "string";
    }
  }
  getBattleItemName(id) {
    return this.skillEffect.get(id)?.itemname || "";
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MeterData
});
