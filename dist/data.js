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
var import_fs = require("fs");
var import_path = require("path");

// src/packets/generated/enums.ts
var stattype = /* @__PURE__ */ ((stattype2) => {
  stattype2[stattype2["none"] = 0] = "none";
  stattype2[stattype2["hp"] = 1] = "hp";
  stattype2[stattype2["mp"] = 2] = "mp";
  stattype2[stattype2["str"] = 3] = "str";
  stattype2[stattype2["agi"] = 4] = "agi";
  stattype2[stattype2["int"] = 5] = "int";
  stattype2[stattype2["con"] = 6] = "con";
  stattype2[stattype2["str_x"] = 7] = "str_x";
  stattype2[stattype2["agi_x"] = 8] = "agi_x";
  stattype2[stattype2["int_x"] = 9] = "int_x";
  stattype2[stattype2["con_x"] = 10] = "con_x";
  stattype2[stattype2["criticalhit"] = 15] = "criticalhit";
  stattype2[stattype2["specialty"] = 16] = "specialty";
  stattype2[stattype2["oppression"] = 17] = "oppression";
  stattype2[stattype2["rapidity"] = 18] = "rapidity";
  stattype2[stattype2["endurance"] = 19] = "endurance";
  stattype2[stattype2["mastery"] = 20] = "mastery";
  stattype2[stattype2["criticalhit_x"] = 21] = "criticalhit_x";
  stattype2[stattype2["specialty_x"] = 22] = "specialty_x";
  stattype2[stattype2["oppression_x"] = 23] = "oppression_x";
  stattype2[stattype2["rapidity_x"] = 24] = "rapidity_x";
  stattype2[stattype2["endurance_x"] = 25] = "endurance_x";
  stattype2[stattype2["mastery_x"] = 26] = "mastery_x";
  stattype2[stattype2["max_hp"] = 27] = "max_hp";
  stattype2[stattype2["max_mp"] = 28] = "max_mp";
  stattype2[stattype2["max_hp_x"] = 29] = "max_hp_x";
  stattype2[stattype2["max_mp_x"] = 30] = "max_mp_x";
  stattype2[stattype2["max_hp_x_x"] = 31] = "max_hp_x_x";
  stattype2[stattype2["max_mp_x_x"] = 32] = "max_mp_x_x";
  stattype2[stattype2["normal_hp_recovery"] = 33] = "normal_hp_recovery";
  stattype2[stattype2["combat_hp_recovery"] = 34] = "combat_hp_recovery";
  stattype2[stattype2["normal_hp_recovery_rate"] = 35] = "normal_hp_recovery_rate";
  stattype2[stattype2["combat_hp_recovery_rate"] = 36] = "combat_hp_recovery_rate";
  stattype2[stattype2["normal_mp_recovery"] = 37] = "normal_mp_recovery";
  stattype2[stattype2["combat_mp_recovery"] = 38] = "combat_mp_recovery";
  stattype2[stattype2["normal_mp_recovery_rate"] = 39] = "normal_mp_recovery_rate";
  stattype2[stattype2["combat_mp_recovery_rate"] = 40] = "combat_mp_recovery_rate";
  stattype2[stattype2["self_recovery_rate"] = 41] = "self_recovery_rate";
  stattype2[stattype2["drain_hp_dam_rate"] = 42] = "drain_hp_dam_rate";
  stattype2[stattype2["drain_mp_dam_rate"] = 43] = "drain_mp_dam_rate";
  stattype2[stattype2["dam_reflection_rate"] = 44] = "dam_reflection_rate";
  stattype2[stattype2["char_attack_dam"] = 47] = "char_attack_dam";
  stattype2[stattype2["skill_effect_dam_addend"] = 48] = "skill_effect_dam_addend";
  stattype2[stattype2["attack_power_rate"] = 49] = "attack_power_rate";
  stattype2[stattype2["skill_damage_rate"] = 50] = "skill_damage_rate";
  stattype2[stattype2["attack_power_rate_x"] = 51] = "attack_power_rate_x";
  stattype2[stattype2["skill_damage_rate_x"] = 52] = "skill_damage_rate_x";
  stattype2[stattype2["cooldown_reduction"] = 53] = "cooldown_reduction";
  stattype2[stattype2["paralyzation_point_rate"] = 54] = "paralyzation_point_rate";
  stattype2[stattype2["def"] = 55] = "def";
  stattype2[stattype2["res"] = 56] = "res";
  stattype2[stattype2["def_x"] = 57] = "def_x";
  stattype2[stattype2["res_x"] = 58] = "res_x";
  stattype2[stattype2["def_x_x"] = 59] = "def_x_x";
  stattype2[stattype2["res_x_x"] = 60] = "res_x_x";
  stattype2[stattype2["def_pen_rate"] = 67] = "def_pen_rate";
  stattype2[stattype2["res_pen_rate"] = 68] = "res_pen_rate";
  stattype2[stattype2["physical_inc_rate"] = 69] = "physical_inc_rate";
  stattype2[stattype2["magical_inc_rate"] = 70] = "magical_inc_rate";
  stattype2[stattype2["self_shield_rate"] = 71] = "self_shield_rate";
  stattype2[stattype2["hit_rate"] = 72] = "hit_rate";
  stattype2[stattype2["dodge_rate"] = 73] = "dodge_rate";
  stattype2[stattype2["critical_hit_rate"] = 74] = "critical_hit_rate";
  stattype2[stattype2["critical_res_rate"] = 75] = "critical_res_rate";
  stattype2[stattype2["critical_dam_rate"] = 76] = "critical_dam_rate";
  stattype2[stattype2["attack_speed"] = 77] = "attack_speed";
  stattype2[stattype2["attack_speed_rate"] = 78] = "attack_speed_rate";
  stattype2[stattype2["move_speed"] = 79] = "move_speed";
  stattype2[stattype2["move_speed_rate"] = 80] = "move_speed_rate";
  stattype2[stattype2["prop_move_speed"] = 81] = "prop_move_speed";
  stattype2[stattype2["prop_move_speed_rate"] = 82] = "prop_move_speed_rate";
  stattype2[stattype2["vehicle_move_speed"] = 83] = "vehicle_move_speed";
  stattype2[stattype2["vehicle_move_speed_rate"] = 84] = "vehicle_move_speed_rate";
  stattype2[stattype2["ship_move_speed"] = 85] = "ship_move_speed";
  stattype2[stattype2["ship_move_speed_rate"] = 86] = "ship_move_speed_rate";
  stattype2[stattype2["fire_dam_rate"] = 87] = "fire_dam_rate";
  stattype2[stattype2["ice_dam_rate"] = 88] = "ice_dam_rate";
  stattype2[stattype2["electricity_dam_rate"] = 89] = "electricity_dam_rate";
  stattype2[stattype2["earth_dam_rate"] = 91] = "earth_dam_rate";
  stattype2[stattype2["dark_dam_rate"] = 92] = "dark_dam_rate";
  stattype2[stattype2["holy_dam_rate"] = 93] = "holy_dam_rate";
  stattype2[stattype2["elements_dam_rate"] = 94] = "elements_dam_rate";
  stattype2[stattype2["fire_res_rate"] = 95] = "fire_res_rate";
  stattype2[stattype2["ice_res_rate"] = 96] = "ice_res_rate";
  stattype2[stattype2["electricity_res_rate"] = 97] = "electricity_res_rate";
  stattype2[stattype2["earth_res_rate"] = 99] = "earth_res_rate";
  stattype2[stattype2["dark_res_rate"] = 100] = "dark_res_rate";
  stattype2[stattype2["holy_res_rate"] = 101] = "holy_res_rate";
  stattype2[stattype2["elements_res_rate"] = 102] = "elements_res_rate";
  stattype2[stattype2["self_cc_time_rate"] = 105] = "self_cc_time_rate";
  stattype2[stattype2["enemy_cc_time_rate"] = 106] = "enemy_cc_time_rate";
  stattype2[stattype2["identity_value1"] = 107] = "identity_value1";
  stattype2[stattype2["identity_value2"] = 108] = "identity_value2";
  stattype2[stattype2["identity_value3"] = 109] = "identity_value3";
  stattype2[stattype2["awakening_dam_rate"] = 110] = "awakening_dam_rate";
  stattype2[stattype2["item_drop_rate"] = 111] = "item_drop_rate";
  stattype2[stattype2["gold_rate"] = 112] = "gold_rate";
  stattype2[stattype2["exp_rate"] = 113] = "exp_rate";
  stattype2[stattype2["attack_power_addend"] = 123] = "attack_power_addend";
  stattype2[stattype2["npc_species_humanoid_dam_rate"] = 125] = "npc_species_humanoid_dam_rate";
  stattype2[stattype2["npc_species_devil_dam_rate"] = 126] = "npc_species_devil_dam_rate";
  stattype2[stattype2["npc_species_substance_dam_rate"] = 127] = "npc_species_substance_dam_rate";
  stattype2[stattype2["npc_species_undead_dam_rate"] = 128] = "npc_species_undead_dam_rate";
  stattype2[stattype2["npc_species_plant_dam_rate"] = 129] = "npc_species_plant_dam_rate";
  stattype2[stattype2["npc_species_insect_dam_rate"] = 130] = "npc_species_insect_dam_rate";
  stattype2[stattype2["npc_species_spirit_dam_rate"] = 131] = "npc_species_spirit_dam_rate";
  stattype2[stattype2["npc_species_wild_beast_dam_rate"] = 132] = "npc_species_wild_beast_dam_rate";
  stattype2[stattype2["npc_species_mechanic_dam_rate"] = 133] = "npc_species_mechanic_dam_rate";
  stattype2[stattype2["npc_species_ancient_dam_rate"] = 134] = "npc_species_ancient_dam_rate";
  stattype2[stattype2["npc_species_god_dam_rate"] = 135] = "npc_species_god_dam_rate";
  stattype2[stattype2["npc_species_archfiend_dam_rate"] = 136] = "npc_species_archfiend_dam_rate";
  stattype2[stattype2["vitality"] = 137] = "vitality";
  stattype2[stattype2["ship_booter_speed"] = 138] = "ship_booter_speed";
  stattype2[stattype2["ship_wreck_speed_rate"] = 139] = "ship_wreck_speed_rate";
  stattype2[stattype2["island_speed_rate"] = 140] = "island_speed_rate";
  stattype2[stattype2["attack_power_sub_rate_1"] = 141] = "attack_power_sub_rate_1";
  stattype2[stattype2["attack_power_sub_rate_2"] = 142] = "attack_power_sub_rate_2";
  stattype2[stattype2["physical_inc_sub_rate_1"] = 143] = "physical_inc_sub_rate_1";
  stattype2[stattype2["physical_inc_sub_rate_2"] = 144] = "physical_inc_sub_rate_2";
  stattype2[stattype2["magical_inc_sub_rate_1"] = 145] = "magical_inc_sub_rate_1";
  stattype2[stattype2["magical_inc_sub_rate_2"] = 146] = "magical_inc_sub_rate_2";
  stattype2[stattype2["skill_damage_sub_rate_1"] = 147] = "skill_damage_sub_rate_1";
  stattype2[stattype2["skill_damage_sub_rate_2"] = 148] = "skill_damage_sub_rate_2";
  stattype2[stattype2["resource_recovery_rate"] = 149] = "resource_recovery_rate";
  stattype2[stattype2["weapon_dam"] = 151] = "weapon_dam";
  return stattype2;
})(stattype || {});

// src/data.ts
var MeterData = class {
  dbPath = "";
  modulePath;
  enums;
  npc;
  PCData;
  skill;
  skillBuff;
  skillEffect;
  combatEffect;
  constructor(meterDataPath = "./meter-core/data") {
    this.modulePath = meterDataPath;
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
  getSkillEffectDirectionalMask(id) {
    return this.skillEffect.get(id)?.directionalmask || 0;
  }
  getStatusEffectHeaderData(buffId) {
    const buff = this.skillBuff.get(buffId);
    if (!buff || buff.iconshowtype === "none")
      return;
    let buffcategory;
    if (buff.buffcategory === "ability" && [501, 502, 503, 504, 505].includes(buff.uniquegroup)) {
      buffcategory = "dropsofether";
    } else {
      buffcategory = buff.buffcategory;
    }
    const statusEffect = {
      target: buff.target === "none" ? 0 /* OTHER */ : buff.target === "self" ? 2 /* SELF */ : 1 /* PARTY */,
      category: buff.category,
      buffcategory,
      bufftype: this.getStatusEffectBuffTypeFlags(buff),
      uniquegroup: buff.uniquegroup,
      source: {
        name: buff.name,
        desc: buff.desc,
        icon: buff.icon
      }
    };
    if (buffcategory === "classskill" || buffcategory === "identity") {
      let buffSourceSkill;
      if (buff.sourceskill) {
        buffSourceSkill = this.skill.get(buff.sourceskill);
        if (buffSourceSkill)
          statusEffect.source.skill = buffSourceSkill;
      } else {
        const skillId = Math.floor(buffId / 100) * 10;
        buffSourceSkill = this.skill.get(skillId);
        if (!buffSourceSkill) {
          const skillId2 = Math.floor(buff.uniquegroup / 100) * 10;
          buffSourceSkill = this.skill.get(skillId2);
        }
        if (buffSourceSkill)
          statusEffect.source.skill = buffSourceSkill;
      }
      if (buffSourceSkill)
        statusEffect.source.skill = buffSourceSkill;
    } else if (buffcategory === "ability" && buff.uniquegroup !== 0) {
      let buffSourceSkill;
      if (buff.sourceskill) {
        buffSourceSkill = this.skill.get(buff.sourceskill);
        if (buffSourceSkill)
          statusEffect.source.skill = buffSourceSkill;
      } else {
        const skillId = Math.floor(buffId / 100) * 10;
        buffSourceSkill = this.skill.get(skillId);
        if (!buffSourceSkill) {
          const skillId2 = Math.floor(buff.uniquegroup / 100) * 10;
          buffSourceSkill = this.skill.get(skillId2);
        }
      }
      if (buffSourceSkill)
        statusEffect.source.skill = buffSourceSkill;
    } else if (buffcategory === "set" && buff.setname) {
      statusEffect.source.setname = buff.setname;
    }
    return statusEffect;
  }
  getStatusEffectBuffTypeFlags(buff) {
    let bufftype = 0 /* NONE */;
    if ([
      "weaken_defense",
      "weaken_resistance",
      "skill_damage_amplify",
      "beattacked_damage_amplify",
      "skill_damage_amplify_attack",
      "directional_attack_amplify",
      "instant_stat_amplify",
      "attack_power_amplify",
      "instant_stat_amplify_by_contents"
    ].includes(buff.type)) {
      bufftype |= 1 /* DMG */;
    } else if (["move_speed_down", "all_speed_down"].includes(buff.type)) {
      bufftype |= 8 /* MOVESPEED */;
    } else if (["reset_cooldown"].includes(buff.type)) {
      bufftype |= 128 /* COOLDOWN */;
    } else if (["change_ai_point", "ai_point_amplify"].includes(buff.type)) {
      bufftype |= 256 /* STAGGER */;
    } else if (["increase_identity_gauge"].includes(buff.type)) {
      bufftype |= 64 /* RESOURCE */;
    }
    buff.passiveoption.forEach((option) => {
      if (option.type === "stat") {
        const stat = stattype[option.keystat];
        if (!stat)
          return;
        if ([20 /* mastery */, 26 /* mastery_x */, 54 /* paralyzation_point_rate */].includes(stat)) {
          bufftype |= 256 /* STAGGER */;
        }
        if ([18 /* rapidity */, 24 /* rapidity_x */, 53 /* cooldown_reduction */].includes(stat)) {
          bufftype |= 128 /* COOLDOWN */;
        }
        if ([
          28 /* max_mp */,
          30 /* max_mp_x */,
          32 /* max_mp_x_x */,
          37 /* normal_mp_recovery */,
          38 /* combat_mp_recovery */,
          39 /* normal_mp_recovery_rate */,
          40 /* combat_mp_recovery_rate */,
          149 /* resource_recovery_rate */
        ].includes(stat)) {
          bufftype |= 64 /* RESOURCE */;
        }
        if ([
          6 /* con */,
          10 /* con_x */,
          27 /* max_hp */,
          29 /* max_hp_x */,
          31 /* max_hp_x_x */,
          33 /* normal_hp_recovery */,
          34 /* combat_hp_recovery */,
          35 /* normal_hp_recovery_rate */,
          36 /* combat_hp_recovery_rate */,
          41 /* self_recovery_rate */,
          42 /* drain_hp_dam_rate */,
          137 /* vitality */
        ].includes(stat)) {
          bufftype |= 16 /* HP */;
        }
        if (55 /* def */ <= stat && stat <= 70 /* magical_inc_rate */ || [19 /* endurance */, 25 /* endurance_x */].includes(stat)) {
          if (buff.category === "buff" && option.value >= 0 || buff.category === "debuff" && option.value <= 0) {
            bufftype |= 1 /* DMG */;
          } else
            bufftype |= 32 /* DEFENSE */;
        }
        if (79 /* move_speed */ <= stat && stat <= 84 /* vehicle_move_speed_rate */) {
          bufftype |= 8 /* MOVESPEED */;
        }
        if ([77 /* attack_speed */, 78 /* attack_speed_rate */, 18 /* rapidity */, 24 /* rapidity_x */].includes(stat)) {
          bufftype |= 4 /* ATKSPEED */;
        }
        if ([74 /* critical_hit_rate */, 15 /* criticalhit */, 21 /* criticalhit_x */].includes(stat)) {
          bufftype |= 2 /* CRIT */;
        }
        if (141 /* attack_power_sub_rate_1 */ <= stat && stat <= 148 /* skill_damage_sub_rate_2 */ || 87 /* fire_dam_rate */ <= stat && stat <= 94 /* elements_dam_rate */ || [
          3 /* str */,
          4 /* agi */,
          5 /* int */,
          7 /* str_x */,
          8 /* agi_x */,
          9 /* int_x */,
          47 /* char_attack_dam */,
          49 /* attack_power_rate */,
          50 /* skill_damage_rate */,
          51 /* attack_power_rate_x */,
          52 /* skill_damage_rate_x */,
          72 /* hit_rate */,
          73 /* dodge_rate */,
          76 /* critical_dam_rate */,
          110 /* awakening_dam_rate */,
          123 /* attack_power_addend */,
          151 /* weapon_dam */
        ].includes(stat)) {
          if (buff.category === "buff" && option.value >= 0 || buff.category === "debuff" && option.value <= 0) {
            bufftype |= 1 /* DMG */;
          } else
            bufftype |= 32 /* DEFENSE */;
        }
      } else if ("skill_critical_ratio" === option.type) {
        bufftype |= 2 /* CRIT */;
      } else if (["skill_damage", "class_option", "skill_group_damage", "skill_critical_damage", "skill_penetration"].includes(
        option.type
      )) {
        if (buff.category === "buff" && option.value >= 0 || buff.category === "debuff" && option.value <= 0) {
          bufftype |= 1 /* DMG */;
        } else
          bufftype |= 32 /* DEFENSE */;
      } else if (["skill_cooldown_reduction", "skill_group_cooldown_reduction"].includes(option.type)) {
        bufftype |= 128 /* COOLDOWN */;
      } else if (["skill_mana_reduction", "mana_reduction"].includes(option.type)) {
        bufftype |= 64 /* RESOURCE */;
      } else if ("combat_effect" === option.type) {
        const combatEffect = this.combatEffect.get(option.keyindex);
        if (!combatEffect)
          return;
        combatEffect.actions.forEach((action) => {
          if ([
            "modify_damage",
            "modify_final_damage",
            "modify_critical_multiplier",
            "modify_penetration",
            "modify_penetration_when_critical",
            "modify_penetration_addend",
            "modify_penetration_addend_when_critical",
            "modify_damage_shield_multiplier"
          ].includes(action.type)) {
            bufftype |= 1 /* DMG */;
          } else if ("modify_critical_ratio" === action.type) {
            bufftype |= 2 /* CRIT */;
          }
        });
      }
    });
    return bufftype;
  }
  getStatPairMap(statpair) {
    const map = /* @__PURE__ */ new Map();
    statpair.forEach((pair) => {
      map.set(pair.StatType, pair.Value);
    });
    return map;
  }
  isSupportClassId(id) {
    return id === 105 || id === 204 || id === 602;
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
  loadDbs(basePath) {
    this.dbPath = basePath;
    this.processEnumData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "Enums.json"), "utf-8")));
    this.processNpcData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "Npc.json"), "utf-8")));
    this.processPCData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "PCData.json"), "utf-8")));
    this.processSkillData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "Skill.json"), "utf-8")));
    this.processSkillBuffData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "SkillBuff.json"), "utf-8")));
    this.processSkillBuffEffectData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "SkillEffect.json"), "utf-8")));
    this.processCombatEffectData(JSON.parse((0, import_fs.readFileSync)((0, import_path.join)(basePath, "CombatEffect.json"), "utf-8")));
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MeterData
});
