import { readFileSync } from "fs";
import { join } from "path";
import { StatusEffectBuffTypeFlags, StatusEffectTarget, type StatusEffect } from "./logger/data";
import { stattype } from "./packets/generated/enums";
export type Npc = {
  id: number;
  name: string;
  grade: string;
  type: string;
};

export type Skill = {
  id: number;
  name: string;
  desc: string;
  classid: number;
  icon: string;
  summonids?: number[];
  summonsourceskill?: number;
  sourceskill?: number;
};

export type SkillBuff = {
  id: number;
  name: string;
  desc: string;
  icon: string;
  iconshowtype: string; // statuseffecticonshowtype
  duration: number;
  category: "buff" | "debuff";
  type: string; // statuseffecttype
  buffcategory: string;
  target: string;
  uniquegroup: number;
  overlapFlag: number;
  passiveoption: PassiveOption[];
  sourceskill?: number;
  setname?: string; // set nicename when buffcategory === "set"
};

export type PassiveOption = {
  type: string; //addontype
  keystat: string; //stattype
  keyindex: number;
  value: number;
};

export type CombatEffect = {
  id: number;
  conditions: CombatEffectCondition[];
  actions: CombatEffectActions[];
};
export type CombatEffectCondition = {
  type: string; //combateffectconditiontype
  actor: string; //combateffectactortype
  arg: number;
};
export type CombatEffectActions = {
  type: string; //combateffectactiontype
  actor: string; //combateffectactortype
};

export type SkillEffect = {
  id: number;
  comment: string;
  stagger: number;
  sourceskill: number;
  directionalmask: number;
  itemname?: string;
  itemdesc?: string;
  icon?: string;
  itemcategory?: string;
};

export class MeterData {
  dbPath: string = "";
  modulePath: string;

  enums: Map<string, Map<string, string>>;
  npc: Map<number, Npc>;
  PCData: Map<number, string>;
  skill: Map<number, Skill>;
  skillBuff: Map<number, SkillBuff>;
  skillEffect: Map<number, SkillEffect>;
  combatEffect: Map<number, CombatEffect>;

  constructor(meterDataPath: string = "./meter-core/data") {
    this.modulePath = meterDataPath;
    this.enums = new Map();
    this.npc = new Map();
    this.PCData = new Map();
    this.skill = new Map();
    this.skillBuff = new Map();
    this.skillEffect = new Map();
    this.combatEffect = new Map();
  }

  processEnumData(data: { [key: string]: { [key: string]: string } }) {
    for (const [ename, edata] of Object.entries(data)) {
      const en = new Map();
      for (const [k, v] of Object.entries(edata)) en.set(k, v);
      this.enums.set(ename, en);
    }
  }

  processNpcData(data: { [key: string]: Npc }) {
    for (const npc of Object.values(data)) {
      this.npc.set(npc.id, npc);
    }
  }

  processPCData(data: { [key: string]: string }) {
    for (const [k, v] of Object.entries(data)) {
      this.PCData.set(parseInt(k), v);
    }
  }

  processSkillData(data: { [key: string]: Skill }) {
    for (const skill of Object.values(data)) {
      this.skill.set(skill.id, skill);
    }
  }

  processSkillBuffData(data: { [key: string]: SkillBuff }) {
    for (const skillBuff of Object.values(data)) {
      this.skillBuff.set(skillBuff.id, skillBuff);
    }
  }

  processSkillBuffEffectData(data: { [key: string]: SkillEffect }) {
    for (const skillEffect of Object.values(data)) {
      this.skillEffect.set(skillEffect.id, skillEffect);
    }
  }
  processCombatEffectData(data: { [key: string]: CombatEffect }) {
    for (const combatEffect of Object.values(data)) {
      this.combatEffect.set(combatEffect.id, combatEffect);
    }
  }

  getNpcName(id: number) {
    return this.npc.get(id)?.name || "";
  }

  getClassName(id: number) {
    return this.PCData.get(id) || "";
  }

  getSkillName(id: number) {
    return this.skill.get(id)?.name || "";
  }

  getSkillClassId(id: number) {
    return this.skill.get(id)?.classid || 0;
  }

  getSkillEffectComment(id: number) {
    return this.skillEffect.get(id)?.comment || "";
  }
  getSkillEffectDirectionalMask(id: number) {
    return this.skillEffect.get(id)?.directionalmask || 0;
  }
  getStatusEffectHeaderData(buffId: number) {
    const buff = this.skillBuff.get(buffId);
    if (!buff || buff.iconshowtype === "none") return;
    // Category override
    let buffcategory;
    if (buff.buffcategory === "ability" && [501, 502, 503, 504, 505].includes(buff.uniquegroup)) {
      buffcategory = "dropsofether";
    } else {
      buffcategory = buff.buffcategory;
    }
    const statusEffect: StatusEffect = {
      target:
        buff.target === "none"
          ? StatusEffectTarget.OTHER
          : buff.target === "self"
          ? StatusEffectTarget.SELF
          : StatusEffectTarget.PARTY, // self+party
      category: buff.category,
      buffcategory,
      bufftype: this.getStatusEffectBuffTypeFlags(buff),
      uniquegroup: buff.uniquegroup,
      source: {
        name: buff.name,
        desc: buff.desc,
        icon: buff.icon,
      },
    };
    if (buffcategory === "classskill" || buffcategory === "identity") {
      let buffSourceSkill;
      if (buff.sourceskill) {
        // Source skill from db
        buffSourceSkill = this.skill.get(buff.sourceskill);
        if (buffSourceSkill) statusEffect.source.skill = buffSourceSkill;
      } else {
        // Try to guess
        //const skillId = Math.floor(buff.uniquegroup / 100) * 10;
        const skillId = Math.floor(buffId / 100) * 10;
        buffSourceSkill = this.skill.get(skillId);
        if (!buffSourceSkill) {
          const skillId = Math.floor(buff.uniquegroup / 100) * 10;
          buffSourceSkill = this.skill.get(skillId);
        }
        if (buffSourceSkill) statusEffect.source.skill = buffSourceSkill;
      }
      if (buffSourceSkill) statusEffect.source.skill = buffSourceSkill;
    } else if (buffcategory === "ability" && buff.uniquegroup !== 0) {
      let buffSourceSkill;
      if (buff.sourceskill) {
        // Source skill from db
        buffSourceSkill = this.skill.get(buff.sourceskill);
        if (buffSourceSkill) statusEffect.source.skill = buffSourceSkill;
      } else {
        // Try to guess
        //const skillId = Math.floor(buff.uniquegroup / 100) * 10;
        const skillId = Math.floor(buffId / 100) * 10;
        buffSourceSkill = this.skill.get(skillId);
        if (!buffSourceSkill) {
          const skillId = Math.floor(buff.uniquegroup / 100) * 10;
          buffSourceSkill = this.skill.get(skillId);
        }
      }
      if (buffSourceSkill) statusEffect.source.skill = buffSourceSkill;
    } else if (buffcategory === "set" && buff.setname) {
      statusEffect.source.setname = buff.setname;
    }

    return statusEffect;
  }
  getStatusEffectBuffTypeFlags(buff: SkillBuff) {
    let bufftype = StatusEffectBuffTypeFlags.NONE;

    // Extract type from Buff type
    //TODO check & apply condition of buffs
    if (
      [
        "weaken_defense",
        "weaken_resistance",
        "skill_damage_amplify",
        "beattacked_damage_amplify",
        "skill_damage_amplify_attack",
        "directional_attack_amplify",
        "instant_stat_amplify",
        "attack_power_amplify",
        "instant_stat_amplify_by_contents",
      ].includes(buff.type)
    ) {
      bufftype |= StatusEffectBuffTypeFlags.DMG;
    } else if (["move_speed_down", "all_speed_down"].includes(buff.type)) {
      bufftype |= StatusEffectBuffTypeFlags.MOVESPEED;
    } else if (["reset_cooldown"].includes(buff.type)) {
      bufftype |= StatusEffectBuffTypeFlags.COOLDOWN;
    } else if (["change_ai_point", "ai_point_amplify"].includes(buff.type)) {
      bufftype |= StatusEffectBuffTypeFlags.STAGGER;
    } else if (["increase_identity_gauge"].includes(buff.type)) {
      bufftype |= StatusEffectBuffTypeFlags.RESOURCE;
    } /*
    else if (["aura"].includes(buff.type)) {
      //TODO: look into ValueA to get the buff applied by the aura (probably useless as we'll get the buff itself)
    }*/

    // Extract type from passive options
    buff.passiveoption.forEach((option) => {
      if (option.type === "stat") {
        const stat = stattype[option.keystat as keyof typeof stattype];
        if (!stat) return; //Important, as the previous trick might return undefined
        if ([stattype.mastery, stattype.mastery_x, stattype.paralyzation_point_rate].includes(stat)) {
          bufftype |= StatusEffectBuffTypeFlags.STAGGER;
        }
        if ([stattype.rapidity, stattype.rapidity_x, stattype.cooldown_reduction].includes(stat)) {
          bufftype |= StatusEffectBuffTypeFlags.COOLDOWN;
        }
        if (
          [
            stattype.max_mp,
            stattype.max_mp_x,
            stattype.max_mp_x_x,
            stattype.normal_mp_recovery,
            stattype.combat_mp_recovery,
            stattype.normal_mp_recovery_rate,
            stattype.combat_mp_recovery_rate,
            stattype.resource_recovery_rate,
          ].includes(stat)
        ) {
          bufftype |= StatusEffectBuffTypeFlags.RESOURCE;
        }
        if (
          [
            stattype.con,
            stattype.con_x,
            stattype.max_hp,
            stattype.max_hp_x,
            stattype.max_hp_x_x,
            stattype.normal_hp_recovery,
            stattype.combat_hp_recovery,
            stattype.normal_hp_recovery_rate,
            stattype.combat_hp_recovery_rate,
            stattype.self_recovery_rate,
            stattype.drain_hp_dam_rate,
            stattype.vitality,
          ].includes(stat)
        ) {
          bufftype |= StatusEffectBuffTypeFlags.HP;
        }
        if (
          (stattype.def <= stat && stat <= stattype.magical_inc_rate) ||
          [stattype.endurance, stattype.endurance_x].includes(stat)
        ) {
          if ((buff.category === "buff" && option.value >= 0) || (buff.category === "debuff" && option.value <= 0)) {
            bufftype |= StatusEffectBuffTypeFlags.DMG;
          } else bufftype |= StatusEffectBuffTypeFlags.DEFENSE;
        }
        if (stattype.move_speed <= stat && stat <= stattype.vehicle_move_speed_rate) {
          bufftype |= StatusEffectBuffTypeFlags.MOVESPEED;
        }
        if (
          [stattype.attack_speed, stattype.attack_speed_rate, stattype.rapidity, stattype.rapidity_x].includes(stat)
        ) {
          bufftype |= StatusEffectBuffTypeFlags.ATKSPEED;
        }
        if ([stattype.critical_hit_rate, stattype.criticalhit, stattype.criticalhit_x].includes(stat)) {
          bufftype |= StatusEffectBuffTypeFlags.CRIT;
        }
        if (
          (stattype.attack_power_sub_rate_1 <= stat && stat <= stattype.skill_damage_sub_rate_2) ||
          (stattype.fire_dam_rate <= stat && stat <= stattype.elements_dam_rate) ||
          [
            stattype.str,
            stattype.agi,
            stattype.int,
            stattype.str_x,
            stattype.agi_x,
            stattype.int_x,
            stattype.char_attack_dam,
            stattype.attack_power_rate,
            stattype.skill_damage_rate,
            stattype.attack_power_rate_x,
            stattype.skill_damage_rate_x,
            stattype.hit_rate,
            stattype.dodge_rate,
            stattype.critical_dam_rate,
            stattype.awakening_dam_rate,
            stattype.attack_power_addend,
            stattype.weapon_dam,
          ].includes(stat)
        ) {
          if ((buff.category === "buff" && option.value >= 0) || (buff.category === "debuff" && option.value <= 0)) {
            bufftype |= StatusEffectBuffTypeFlags.DMG;
          } else bufftype |= StatusEffectBuffTypeFlags.DEFENSE;
        }
      } else if ("skill_critical_ratio" === option.type) {
        bufftype |= StatusEffectBuffTypeFlags.CRIT;
      } else if (
        ["skill_damage", "class_option", "skill_group_damage", "skill_critical_damage", "skill_penetration"].includes(
          option.type
        )
      ) {
        if ((buff.category === "buff" && option.value >= 0) || (buff.category === "debuff" && option.value <= 0)) {
          bufftype |= StatusEffectBuffTypeFlags.DMG;
        } else bufftype |= StatusEffectBuffTypeFlags.DEFENSE;
      } else if (["skill_cooldown_reduction", "skill_group_cooldown_reduction"].includes(option.type)) {
        bufftype |= StatusEffectBuffTypeFlags.COOLDOWN;
      } else if (["skill_mana_reduction", "mana_reduction"].includes(option.type)) {
        bufftype |= StatusEffectBuffTypeFlags.RESOURCE;
      } else if ("combat_effect" === option.type) {
        // Extract type from combat_effect
        const combatEffect = this.combatEffect.get(option.keyindex);
        if (!combatEffect) return;
        //TODO: evaluate conditions ? or maybe it should be done on meter core & remove those buffs
        combatEffect.actions.forEach((action) => {
          if (
            [
              "modify_damage",
              "modify_final_damage",
              "modify_critical_multiplier",
              "modify_penetration",
              "modify_penetration_when_critical",
              "modify_penetration_addend",
              "modify_penetration_addend_when_critical",
              "modify_damage_shield_multiplier",
            ].includes(action.type)
          ) {
            bufftype |= StatusEffectBuffTypeFlags.DMG;
          } else if ("modify_critical_ratio" === action.type) {
            bufftype |= StatusEffectBuffTypeFlags.CRIT;
          }
        });
      }
    });
    return bufftype;
  }
  getStatPairMap(statpair: { StatType: number; Value: bigint }[]) {
    //TODO: use a "Common" packet for statpair parsing
    const map = new Map<stattype, bigint>();
    statpair.forEach((pair) => {
      map.set(pair.StatType, pair.Value);
    });
    return map;
  }

  isSupportClassId(id: number) {
    return id === 105 || id === 204 || id === 602;
  }
  isBattleItem(id: number, type?: "attack" | "buff" | "function") {
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

  getBattleItemName(id: number) {
    return this.skillEffect.get(id)?.itemname || "";
  }
  loadDbs(basePath: string) {
    this.dbPath = basePath;

    this.processEnumData(JSON.parse(readFileSync(join(basePath, "Enums.json"), "utf-8")));
    this.processNpcData(JSON.parse(readFileSync(join(basePath, "Npc.json"), "utf-8")));
    this.processPCData(JSON.parse(readFileSync(join(basePath, "PCData.json"), "utf-8")));
    this.processSkillData(JSON.parse(readFileSync(join(basePath, "Skill.json"), "utf-8")));
    this.processSkillBuffData(JSON.parse(readFileSync(join(basePath, "SkillBuff.json"), "utf-8")));
    this.processSkillBuffEffectData(JSON.parse(readFileSync(join(basePath, "SkillEffect.json"), "utf-8")));
    this.processCombatEffectData(JSON.parse(readFileSync(join(basePath, "CombatEffect.json"), "utf-8")));
  }
}
