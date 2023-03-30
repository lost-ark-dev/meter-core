type Npc = {
    id: number;
    name: string;
    grade: string;
    type: string;
};
type Skill = {
    id: number;
    name: string;
    desc: string;
    classid: number;
    icon: string;
    summonids?: number[];
    summonsourceskill?: number;
    sourceskill?: number;
};
type SkillBuff = {
    id: number;
    name: string;
    desc: string;
    icon: string;
    iconshowtype: string;
    duration: number;
    category: "buff" | "debuff";
    type: string;
    buffcategory: string;
    target: string;
    uniquegroup: number;
    overlapFlag: number;
    passiveoption: PassiveOption[];
    sourceskill?: number;
    setname?: string;
};
type PassiveOption = {
    type: string;
    keystat: string;
    keyindex: number;
    value: number;
};
type CombatEffect = {
    id: number;
    conditions: CombatEffectCondition[];
    actions: CombatEffectActions[];
};
type CombatEffectCondition = {
    type: string;
    actor: string;
    arg: number;
};
type CombatEffectActions = {
    type: string;
    actor: string;
};
type SkillEffect = {
    id: number;
    comment: string;
    stagger: number;
    sourceskill: number;
    itemname?: string;
    itemdesc?: string;
    icon?: string;
    itemcategory?: string;
};
declare class MeterData {
    dbPath: string;
    modulePath: string;
    enums: Map<string, Map<string, string>>;
    npc: Map<number, Npc>;
    PCData: Map<number, string>;
    skill: Map<number, Skill>;
    skillBuff: Map<number, SkillBuff>;
    skillEffect: Map<number, SkillEffect>;
    combatEffect: Map<number, CombatEffect>;
    constructor(meterDataPath?: string);
    processEnumData(data: {
        [key: string]: {
            [key: string]: string;
        };
    }): void;
    processNpcData(data: {
        [key: string]: Npc;
    }): void;
    processPCData(data: {
        [key: string]: string;
    }): void;
    processSkillData(data: {
        [key: string]: Skill;
    }): void;
    processSkillBuffData(data: {
        [key: string]: SkillBuff;
    }): void;
    processSkillBuffEffectData(data: {
        [key: string]: SkillEffect;
    }): void;
    processCombatEffectData(data: {
        [key: string]: CombatEffect;
    }): void;
    getNpcName(id: number): string;
    getClassName(id: number): string;
    getSkillName(id: number): string;
    getSkillClassId(id: number): number;
    getSkillEffectComment(id: number): string;
    isSupportClassId(id: number): boolean;
    isBattleItem(id: number, type?: "attack" | "buff" | "function"): boolean;
    getBattleItemName(id: number): string;
    loadDbs(basePath: string): void;
}

export { CombatEffect, CombatEffectActions, CombatEffectCondition, MeterData, Npc, PassiveOption, Skill, SkillBuff, SkillEffect };
