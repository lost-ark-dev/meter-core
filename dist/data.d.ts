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
    icon: number;
};
type SkillBuff = {
    id: number;
    name: string;
    desc: string;
    icon: string;
    duration: number;
    overlapFlag: number;
};
type SkillEffect = {
    id: number;
    comment: string;
    stagger: number;
    itemname?: string;
    itemdesc?: string;
    icon?: string;
    itemcategory?: string;
};
declare class MeterData {
    enums: Map<string, Map<string, string>>;
    npc: Map<number, Npc>;
    PCData: Map<number, string>;
    skill: Map<number, Skill>;
    skillBuff: Map<number, SkillBuff>;
    skillEffect: Map<number, SkillEffect>;
    constructor();
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
    getNpcName(id: number): string;
    getClassName(id: number): string;
    getSkillName(id: number): string;
    getSkillClassId(id: number): number;
    getSkillEffectComment(id: number): string;
    isBattleItem(id: number, type?: "attack" | "buff" | "function"): boolean;
    getBattleItemName(id: number): string;
}

export { MeterData, Npc, Skill, SkillBuff, SkillEffect };
