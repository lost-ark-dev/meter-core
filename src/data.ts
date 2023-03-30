import { readFileSync } from "fs";
import { join } from "path";
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
  isSupportClassId(id: number) {
    return id === 105 || id === 204 || id === 603;
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
