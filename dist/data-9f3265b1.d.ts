declare const PARSED_LOG_VERSION = 16;
declare enum StatusEffectTarget {
    OTHER = 0,
    PARTY = 1,
    SELF = 2
}
declare enum StatusEffectBuffTypeFlags {
    NONE = 0,
    DMG = 1,
    CRIT = 2,
    ATKSPEED = 4,
    MOVESPEED = 8,
    HP = 16,
    DEFENSE = 32,
    RESOURCE = 64,
    COOLDOWN = 128,
    STAGGER = 256,
    SHIELD = 512,
    ANY = 262144
}
interface StatusEffect {
    target: StatusEffectTarget;
    category: "buff" | "debuff";
    buffcategory: string;
    bufftype: StatusEffectBuffTypeFlags;
    uniquegroup: number;
    source: StatusEffectSource;
}
interface StatusEffectSource {
    name: string;
    desc: string;
    icon: string;
    skill?: Skill;
    setname?: string;
}
interface DamageStatistics {
    totalDamageDealt: number;
    topDamageDealt: number;
    totalDamageTaken: number;
    topDamageTaken: number;
    totalHealingDone: number;
    topHealingDone: number;
    totalShieldDone: number;
    topShieldDone: number;
    debuffs: Map<number, StatusEffect>;
    buffs: Map<number, StatusEffect>;
}
interface GameState {
    startedOn: number;
    lastCombatPacket: number;
    fightStartedOn: number;
    localPlayer: string;
    currentBoss: EntityState | undefined;
    entities: Map<string, EntityState>;
    damageStatistics: DamageStatistics;
}
interface GameStateNew {
    startedOn: number;
    lastCombatPacket: number;
    fightStartedOn: number;
    entities: Map<string, EntityState>;
    damageStatistics: DamageStatistics;
}
interface HealSource {
    source: string;
    expires: number;
}
interface EntityState {
    lastUpdate: number;
    id: string;
    npcId: number;
    name: string;
    classId: number;
    isBoss: boolean;
    isPlayer: boolean;
    isDead: boolean;
    deaths: number;
    deathTime: number;
    gearScore: number;
    currentHp: number;
    maxHp: number;
    damageDealt: number;
    damageDealtDebuffedBySupport: number;
    damageDealtBuffedBySupport: number;
    healingDone: number;
    shieldDone: number;
    damageTaken: number;
    skills: Map<number, EntitySkills>;
    hits: Hits;
    damageDealtDebuffedBy: Map<number, number>;
    damageDealtBuffedBy: Map<number, number>;
}
interface Breakdown {
    timestamp: number;
    damage: number;
    targetEntity: string;
    isCrit: boolean;
    isBackAttack: boolean;
    isFrontAttack: boolean;
    isBuffedBySupport: boolean;
    isDebuffedBySupport: boolean;
    debuffedBy: number[];
    buffedBy: number[];
}
interface EntitySkills {
    id: number;
    name: string;
    icon: string | undefined;
    damageDealt: number;
    damageDealtDebuffedBySupport: number;
    damageDealtBuffedBySupport: number;
    maxDamage: number;
    hits: Hits;
    breakdown: Breakdown[];
    damageDealtDebuffedBy: Map<number, number>;
    damageDealtBuffedBy: Map<number, number>;
}
interface Hits {
    casts: number;
    total: number;
    crit: number;
    backAttack: number;
    totalBackAttack: number;
    frontAttack: number;
    totalFrontAttack: number;
    counter: number;
    hitsDebuffedBySupport: number;
    hitsBuffedBySupport: number;
    hitsBuffedBy: Map<number, number>;
    hitsDebuffedBy: Map<number, number>;
}
type GameTrackerOptions = {
    isLive: boolean;
    dontResetOnZoneChange: boolean;
    resetAfterPhaseTransition: boolean;
    splitOnPhaseTransition: boolean;
};

declare enum stattype {
    none = 0,
    hp = 1,
    mp = 2,
    str = 3,
    agi = 4,
    int = 5,
    con = 6,
    str_x = 7,
    agi_x = 8,
    int_x = 9,
    con_x = 10,
    criticalhit = 15,
    specialty = 16,
    oppression = 17,
    rapidity = 18,
    endurance = 19,
    mastery = 20,
    criticalhit_x = 21,
    specialty_x = 22,
    oppression_x = 23,
    rapidity_x = 24,
    endurance_x = 25,
    mastery_x = 26,
    max_hp = 27,
    max_mp = 28,
    max_hp_x = 29,
    max_mp_x = 30,
    max_hp_x_x = 31,
    max_mp_x_x = 32,
    normal_hp_recovery = 33,
    combat_hp_recovery = 34,
    normal_hp_recovery_rate = 35,
    combat_hp_recovery_rate = 36,
    normal_mp_recovery = 37,
    combat_mp_recovery = 38,
    normal_mp_recovery_rate = 39,
    combat_mp_recovery_rate = 40,
    self_recovery_rate = 41,
    drain_hp_dam_rate = 42,
    drain_mp_dam_rate = 43,
    dam_reflection_rate = 44,
    char_attack_dam = 47,
    skill_effect_dam_addend = 48,
    attack_power_rate = 49,
    skill_damage_rate = 50,
    attack_power_rate_x = 51,
    skill_damage_rate_x = 52,
    cooldown_reduction = 53,
    paralyzation_point_rate = 54,
    def = 55,
    res = 56,
    def_x = 57,
    res_x = 58,
    def_x_x = 59,
    res_x_x = 60,
    def_pen_rate = 67,
    res_pen_rate = 68,
    physical_inc_rate = 69,
    magical_inc_rate = 70,
    self_shield_rate = 71,
    hit_rate = 72,
    dodge_rate = 73,
    critical_hit_rate = 74,
    critical_res_rate = 75,
    critical_dam_rate = 76,
    attack_speed = 77,
    attack_speed_rate = 78,
    move_speed = 79,
    move_speed_rate = 80,
    prop_move_speed = 81,
    prop_move_speed_rate = 82,
    vehicle_move_speed = 83,
    vehicle_move_speed_rate = 84,
    ship_move_speed = 85,
    ship_move_speed_rate = 86,
    fire_dam_rate = 87,
    ice_dam_rate = 88,
    electricity_dam_rate = 89,
    earth_dam_rate = 91,
    dark_dam_rate = 92,
    holy_dam_rate = 93,
    elements_dam_rate = 94,
    fire_res_rate = 95,
    ice_res_rate = 96,
    electricity_res_rate = 97,
    earth_res_rate = 99,
    dark_res_rate = 100,
    holy_res_rate = 101,
    elements_res_rate = 102,
    self_cc_time_rate = 105,
    enemy_cc_time_rate = 106,
    identity_value1 = 107,
    identity_value2 = 108,
    identity_value3 = 109,
    awakening_dam_rate = 110,
    item_drop_rate = 111,
    gold_rate = 112,
    exp_rate = 113,
    attack_power_addend = 123,
    npc_species_humanoid_dam_rate = 125,
    npc_species_devil_dam_rate = 126,
    npc_species_substance_dam_rate = 127,
    npc_species_undead_dam_rate = 128,
    npc_species_plant_dam_rate = 129,
    npc_species_insect_dam_rate = 130,
    npc_species_spirit_dam_rate = 131,
    npc_species_wild_beast_dam_rate = 132,
    npc_species_mechanic_dam_rate = 133,
    npc_species_ancient_dam_rate = 134,
    npc_species_god_dam_rate = 135,
    npc_species_archfiend_dam_rate = 136,
    vitality = 137,
    ship_booter_speed = 138,
    ship_wreck_speed_rate = 139,
    island_speed_rate = 140,
    attack_power_sub_rate_1 = 141,
    attack_power_sub_rate_2 = 142,
    physical_inc_sub_rate_1 = 143,
    physical_inc_sub_rate_2 = 144,
    magical_inc_sub_rate_1 = 145,
    magical_inc_sub_rate_2 = 146,
    skill_damage_sub_rate_1 = 147,
    skill_damage_sub_rate_2 = 148,
    resource_recovery_rate = 149,
    weapon_dam = 151
}

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
    directionalmask: number;
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
    getSkillEffectDirectionalMask(id: number): number;
    getStatusEffectHeaderData(buffId: number): StatusEffect | undefined;
    getStatusEffectBuffTypeFlags(buff: SkillBuff): StatusEffectBuffTypeFlags;
    getStatPairMap(statpair: {
        StatType: number;
        Value: bigint;
    }[]): Map<stattype, bigint>;
    isSupportClassId(id: number): boolean;
    isBattleItem(id: number, type?: "attack" | "buff" | "function"): boolean;
    getBattleItemName(id: number): string;
    loadDbs(basePath: string): void;
}

export { Breakdown as B, CombatEffect as C, DamageStatistics as D, EntityState as E, GameState as G, HealSource as H, MeterData as M, Npc as N, PARSED_LOG_VERSION as P, StatusEffectTarget as S, GameTrackerOptions as a, StatusEffectBuffTypeFlags as b, StatusEffect as c, StatusEffectSource as d, GameStateNew as e, EntitySkills as f, Hits as g, Skill as h, SkillBuff as i, PassiveOption as j, CombatEffectCondition as k, CombatEffectActions as l, SkillEffect as m };
