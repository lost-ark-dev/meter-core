import { readFileSync } from "fs";
import { join } from "path";
import { StatusEffectBuffTypeFlags, StatusEffectTarget, type StatusEffect, EntityState } from "./logger/data";
import {
  addontype,
  buffshowprioritycategory,
  combateffectactiontype,
  combateffectactortype,
  combateffectconditiontype,
  hitoption,
  identitycategory,
  npcgrade,
  paramtype,
  skillfeaturetype,
  stattype,
  statuseffecttargettooltiptype,
} from "./packets/generated/enums";
import { Entity, EntityType, Player, Npc as NpcEntity } from "./logger/entityTracker";
export type Npc = {
  id: number;
  name: string;
  grade: keyof typeof npcgrade;
  type: string;
  pushimmune: boolean;
};

export type Skill = {
  id: number;
  name: string;
  desc: string;
  classid: number;
  icon: string;
  identitycategory?: keyof typeof identitycategory;
  groups?: number[];
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
  statuseffectvalues?: number[];
  buffcategory: keyof typeof buffshowprioritycategory;
  target: keyof typeof statuseffecttargettooltiptype;
  uniquegroup: number;
  overlapFlag: number;
  passiveoption: PassiveOption[];
  sourceskill?: number;
  setname?: string; // set nicename when buffcategory === "set"
};

export type SkillFeature = Map<number, SkillFeatureLevelData>;
export type SkillFeatureLevelData = {
  key: number;
  name: string;
  entries: SkillFeatureOption[];
};
export type SkillFeatureOption = {
  type: keyof typeof skillfeaturetype;
  level: number;
  paramtype: keyof typeof paramtype;
  params: number[];
};

export type PassiveOption = {
  type: keyof typeof addontype; //addontype
  keystat: keyof typeof stattype; //stattype
  keyindex: number;
  value: number;
};

export type CombatEffect = {
  id: number;
  effects: CombatEffectDetail[];
};
export type CombatEffectDetail = {
  ratio: number;
  cooldown: number;
  conditions: CombatEffectCondition[];
  actions: CombatEffectAction[];
};
export type CombatEffectCondition = {
  type: keyof typeof combateffectconditiontype; //combateffectconditiontype
  actor: keyof typeof combateffectactortype; //combateffectactortype
  arg: number;
};
export type CombatEffectAction = {
  type: keyof typeof combateffectactiontype; //combateffectactiontype
  actor: keyof typeof combateffectactortype; //combateffectactortype
  args: number[];
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

export type Esther = {
  name: string;
  icon: string;
  skills: number[];
  npcs: number[];
};
export type ItemSetData = { setname: string; level: number };
export type ItemSet = {
  items: Map<number, ItemSetData>;
  seteffects: Map<string, ItemSetLevel>;
};
export type ItemSetLevel = Map<number, ItemSetCount>;
export type ItemSetCount = Map<number, { desc: string; options: PassiveOption[] }>;
export type CombatEffectConditionData = {
  effect: CombatEffectDetail;
  self?: Entity;
  target?: Entity;
  caster?: Entity | undefined;
  skill?: Skill | undefined;
  hitOption?: hitoption;
  targetCount?: number;
};

export type StatQueryFilter = {
  zone: Set<number>;
  raid: Set<number>;
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
  skillFeature: Map<number, SkillFeature>;
  combatEffect: Map<number, CombatEffect>;
  esther: Esther[];
  itemSet: ItemSet;
  statQueryFilter: StatQueryFilter;

  constructor(meterDataPath: string = "./meter-core/data") {
    this.modulePath = meterDataPath;
    this.enums = new Map();
    this.npc = new Map();
    this.PCData = new Map();
    this.skill = new Map();
    this.skillBuff = new Map();
    this.skillEffect = new Map();
    this.skillFeature = new Map();
    this.combatEffect = new Map();
    this.esther = [];
    this.itemSet = { items: new Map(), seteffects: new Map() };
    this.statQueryFilter = { zone: new Set(), raid: new Set() };
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
  processSkillFeature(data: {
    [skillid: string]: {
      skillid: number;
      tripods: { [index: string]: { key: number; name: string; entries: SkillFeatureOption[] } };
    };
  }) {
    for (const skillFeature of Object.values(data)) {
      const m = new Map<number, SkillFeatureLevelData>();
      for (const levelData of Object.values(skillFeature.tripods)) {
        m.set(levelData.key, levelData);
      }
      this.skillFeature.set(skillFeature.skillid, m);
    }
  }
  processCombatEffectData(data: { [key: string]: CombatEffect }) {
    for (const combatEffect of Object.values(data)) {
      this.combatEffect.set(combatEffect.id, combatEffect);
    }
  }
  processEsther(data: Esther[]) {
    this.esther = Object.values(data);
  }
  processItemSet(data: {
    [setName: string]: {
      [setLevel: string]: {
        itemids: number[];
        value: {
          [setCount: string]: {
            desc: string;
            options: PassiveOption[];
          };
        };
      };
    };
  }) {
    for (const [setName, setNameData] of Object.entries(data)) {
      const m: ItemSetLevel = new Map();
      for (const [level, setLevelData] of Object.entries(setNameData)) {
        const m2: ItemSetCount = new Map();
        for (const [count, setCountData] of Object.entries(setLevelData.value)) {
          m2.set(parseInt(count), setCountData);
        }
        m.set(parseInt(level), m2);
        for (const itemid of Object.values(setLevelData.itemids)) {
          this.itemSet.items.set(itemid, { setname: setName, level: parseInt(level) });
        }
      }
      this.itemSet.seteffects.set(setName, m);
    }
  }

  procesStatQueryFilter(data: { zone: number[]; raid: number[] }) {
    this.statQueryFilter.zone = new Set(data.zone);
    this.statQueryFilter.raid = new Set(data.raid);
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

  getSkillEsther(skillId: number): Esther | undefined {
    for (const esther of this.esther) {
      if (esther.skills.includes(skillId)) return esther;
    }
    return;
  }
  getNpcEsther(npcId: number): Esther | undefined {
    for (const esther of this.esther) {
      if (esther.npcs.includes(npcId)) return esther;
    }
    return;
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
      const addon = addontype[option.type];
      if (option.type === "stat") {
        const stat = stattype[option.keystat];
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
      } else if (addontype.skill_critical_ratio === addon) {
        bufftype |= StatusEffectBuffTypeFlags.CRIT;
      } else if (
        [
          addontype.skill_damage,
          addontype.class_option,
          addontype.skill_group_damage,
          addontype.skill_critical_damage,
          addontype.skill_penetration,
        ].includes(addon)
      ) {
        if ((buff.category === "buff" && option.value >= 0) || (buff.category === "debuff" && option.value <= 0)) {
          bufftype |= StatusEffectBuffTypeFlags.DMG;
        } else bufftype |= StatusEffectBuffTypeFlags.DEFENSE;
      } else if ([addontype.skill_cooldown_reduction, addontype.skill_group_cooldown_reduction].includes(addon)) {
        bufftype |= StatusEffectBuffTypeFlags.COOLDOWN;
      } else if ([addontype.skill_mana_reduction, addontype.mana_reduction].includes(addon)) {
        bufftype |= StatusEffectBuffTypeFlags.RESOURCE;
      } else if (addontype.combat_effect === addon) {
        // Extract type from combat_effect
        const combatEffect = this.combatEffect.get(option.keyindex);
        if (!combatEffect) return;
        combatEffect.effects.forEach((effect) => {
          //TODO: evaluate conditions ? or maybe it should be done on meter core & remove those buffs
          effect.actions.forEach((action) => {
            const actionType = combateffectactiontype[action.type];
            if (
              [
                combateffectactiontype.modify_damage,
                combateffectactiontype.modify_final_damage,
                combateffectactiontype.modify_critical_multiplier,
                combateffectactiontype.modify_penetration,
                combateffectactiontype.modify_penetration_when_critical,
                combateffectactiontype.modify_penetration_addend,
                combateffectactiontype.modify_penetration_addend_when_critical,
                combateffectactiontype.modify_damage_shield_multiplier,
              ].includes(actionType)
            ) {
              bufftype |= StatusEffectBuffTypeFlags.DMG;
            } else if (combateffectactiontype.modify_critical_ratio === actionType) {
              bufftype |= StatusEffectBuffTypeFlags.CRIT;
            }
          });
        });
      }
    });
    return bufftype;
  }
  getStatPairMap(statpair: { statType: number; value: bigint }[]) {
    //TODO: use a "Common" packet for statpair parsing
    const map = new Map<stattype, bigint>();
    statpair.forEach((pair) => {
      map.set(pair.statType, pair.value);
    });
    return map;
  }
  isCombatEffectConditionsValid({
    effect,
    self,
    target,
    caster,
    skill,
    hitOption,
    targetCount,
  }: CombatEffectConditionData): boolean {
    let conditionValid = true;
    effect.conditions.forEach((condition) => {
      if (!conditionValid) return;
      const actor = combateffectactortype[condition.actor];
      switch (combateffectconditiontype[condition.type]) {
        case combateffectconditiontype.target_count:
          if (!targetCount || targetCount !== condition.arg) conditionValid = false;
          break;
        case combateffectconditiontype.current_skill:
          if (!skill || skill.id === condition.arg) conditionValid = false;
          break;
        case combateffectconditiontype.pc:
          if (actor === combateffectactortype.self) {
            if (!self || self.entityType !== EntityType.Player) conditionValid = false;
          } else if (actor === combateffectactortype.target) {
            if (!target || target.entityType !== EntityType.Player) conditionValid = false;
          } else if (actor === combateffectactortype.caster) {
            if (!caster || caster.entityType !== EntityType.Player) conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case combateffectconditiontype.skill_identity_category:
          if (!skill || !skill.identitycategory || identitycategory[skill.identitycategory] != condition.arg)
            conditionValid = false;
          break;
        //S_ImmuneNotify, S_ImmuneStatusNotify
        /**
         * "movetype" enum in AbnormalMoveNotify
         * "movetype" & "MoveOptionData" in SkillDamageAbnormalMoveNotify
         * "ImmuneNotify" takes an effectId, mby it's smthing else ?
         * "ImmuneStatusNotify" has ImmuneData with {DebuffImmuneList, AbnormalStatusImmuneList, StatusEffectTypeImmuneList} each of those have Type/Value
         */
        case combateffectconditiontype.abnormal_move_immune:
          //"Push immune foes", usually tripod "Weak Point Detection"
          if (
            !target ||
            ![EntityType.Npc, EntityType.Summon].includes(target.entityType) ||
            !(target as NpcEntity).pushimmune
          )
            conditionValid = false;
          break;
        case combateffectconditiontype.abnormal_move_all:
          //TODO: implement abnormal move tracking (with expiration & stuff)
          // Only useful for 250841 (Blade's Death Sentence / Confirmed Kill tripod)
          conditionValid = false;
          break;
        case combateffectconditiontype.abnormal_move:
          //TODO: implement abnormal move tracking (with expiration & stuff)
          // Only useful for 250851 (Blade's Death Sentence / Ruthless tripod)
          conditionValid = false;
          break;
        case combateffectconditiontype.abnormal_status:
          //TODO: implement abnormal move tracking (with expiration & stuff)
          // Only useful for 351308 (Machinist's Annihilation Mode / Cross Fire tripod)
          conditionValid = false;
          break;
        case combateffectconditiontype.current_skill_group:
          if (!skill || !skill.groups || !skill.groups.includes(condition.arg)) conditionValid = false;
          break;
        case combateffectconditiontype.hp_less:
          if (actor === combateffectactortype.self) {
            if (
              !self ||
              Number((self.stats.get(stattype.hp) ?? 0n) / (self.stats.get(stattype.max_hp) ?? 0n)) >=
                condition.arg / 100
            )
              conditionValid = false;
          } else if (actor === combateffectactortype.target) {
            if (
              !target ||
              Number((target.stats.get(stattype.hp) ?? 0n) / (target.stats.get(stattype.max_hp) ?? 0n)) >=
                condition.arg / 100
            )
              conditionValid = false;
          } else if (actor === combateffectactortype.caster) {
            if (
              !caster ||
              Number((caster.stats.get(stattype.hp) ?? 0n) / (caster.stats.get(stattype.max_hp) ?? 0n)) >=
                condition.arg / 100
            )
              conditionValid = false;
          } else {
            conditionValid = false;
            break;
          }
          break;
        case combateffectconditiontype.npc_scaled_level_less:
          if (actor === combateffectactortype.target) {
            if (target && [EntityType.Npc, EntityType.Summon].includes(target.entityType)) {
              if ((target as NpcEntity).balanceLevel > condition.arg) conditionValid = false;
            } else conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case combateffectconditiontype.npc_grade_less:
          if (actor === combateffectactortype.target) {
            if (target && [EntityType.Npc, EntityType.Summon].includes(target.entityType)) {
              const grade = npcgrade[(target as NpcEntity).grade];
              if (!grade || grade > condition.arg) conditionValid = false;
            } else conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case combateffectconditiontype.npc_grade_greater:
          if (actor === combateffectactortype.target) {
            if (target && [EntityType.Npc, EntityType.Summon].includes(target.entityType)) {
              const grade = npcgrade[(target as NpcEntity).grade];
              if (!grade || grade < condition.arg) conditionValid = false;
            } else conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case combateffectconditiontype.identity_stance:
          if (actor === combateffectactortype.self) {
            if (!self || self.entityType !== EntityType.Player || (self as Player).stance !== condition.arg)
              conditionValid = false;
          } else {
            conditionValid = false;
          }
          break;
        case combateffectconditiontype.directional_attack:
          if (!hitOption || ((hitOption + 1) & condition.arg) === 0) conditionValid = false;
          break;
        default:
          // The condition isn't handled, invalidate condition
          conditionValid = false;
          break;
      }
    });
    return conditionValid;
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
    this.processSkillFeature(JSON.parse(readFileSync(join(basePath, "SkillFeature.json"), "utf-8")));
    this.processCombatEffectData(JSON.parse(readFileSync(join(basePath, "CombatEffect.json"), "utf-8")));
    this.processEsther(JSON.parse(readFileSync(join(basePath, "Esther.json"), "utf-8")));
    this.processItemSet(JSON.parse(readFileSync(join(basePath, "ItemSet.json"), "utf-8")));
    this.procesStatQueryFilter(JSON.parse(readFileSync(join(basePath, "StatQueryFilter.json"), "utf-8")));
  }
}
