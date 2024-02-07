declare enum addontype {
    none = 0,
    slot = 1,
    stat = 2,
    ability_point = 3,
    combat_effect = 4,
    skill_damage = 5,
    skill_critical_ratio = 6,
    skill_critical_damage = 7,
    skill_penetration = 8,
    npc_grade_less_damage = 9,
    npc_grade_less_critical_ratio = 10,
    npc_grade_less_critical_damage = 11,
    npc_grade_less_penetration = 12,
    npc_grade_greater_damage = 13,
    npc_grade_greater_critical_ratio = 14,
    npc_grade_greater_critical_damage = 15,
    npc_grade_greater_penetration = 16,
    npc_species_damage = 17,
    npc_species_critical_ratio = 18,
    npc_species_critical_damage = 19,
    npc_species_penetration = 20,
    npc_attr_damage = 21,
    npc_attr_critical_ratio = 22,
    npc_attr_critical_damage = 23,
    npc_attr_penetration = 24,
    mana_reduction = 25,
    skill_mana_reduction = 26,
    skill_cooldown_reduction = 27,
    ability_feature = 28,
    class_option = 29,
    ability_point_passive = 30,
    instrument = 31,
    skill_feature = 32,
    npc_adaptation = 33,
    skill_group_damage = 34,
    skill_group_cooldown_reduction = 35,
    skill_level = 36,
    skill_feature_level = 37,
    life_casting_speed = 38,
    life_casting_tier = 39,
    life_bonus_type_success = 40,
    life_bonus_type_extra = 41,
    life_bonus_type_skill_bonus = 42,
    life_bonus_type_minigame_perfect = 43,
    life_durability_bonus = 44,
    life_mini_game_difficulty = 45,
    combat_effect_cooldown_reduction = 46,
    skill_damage_addend = 47,
    awakening_usable_count_addend = 48,
    battle_item_heal = 49,
    party_heal = 50,
    party_shield = 51,
    identity_gauge = 52,
    attack_power_amplify_addend = 53,
    attack_power_amplify_multiplier = 54,
    not_in_party_damage = 55,
    skill_effect_group_set_damage = 56
}
declare enum buffshowprioritycategory {
    pet = 0,
    classskill = 1,
    ability = 2,
    set = 3,
    cook = 4,
    identity = 5,
    bracelet = 6,
    battleitem = 7,
    elixir = 8,
    etc = 9
}
declare enum combateffectactiontype {
    none = 0,
    modify_damage = 1,
    modify_final_damage = 2,
    modify_critical_ratio = 3,
    modify_critical_multiplier = 4,
    modify_penetration = 5,
    modify_penetration_when_critical = 6,
    exec_active_effect_when_damage = 7,
    exec_active_effect_when_critical = 8,
    exec_reactive_effect_when_miss = 9,
    exec_reactive_effect_when_damage = 10,
    exec_reactive_effect_when_critical = 11,
    exec_after_effect = 12,
    exec_after_skill = 13,
    apply_heal = 14,
    modify_reactive_damage = 15,
    modify_damage_shield_multiplier = 16,
    exec_active_effect_when_kill = 17,
    exec_start_skill = 18,
    modify_penetration_addend = 19,
    modify_penetration_addend_when_critical = 20,
    modify_reactive_critical_multiplier = 21,
    modify_damage_when_critical = 22,
    modify_paralyzation_point = 23,
    exec_when_counter = 24,
    exec_when_be_killed = 25
}
declare enum combateffectactortype {
    none = 0,
    self = 1,
    target = 2,
    caster = 3
}
declare enum combateffectconditiontype {
    none = 0,
    current_skill = 1,
    hp_less = 2,
    hp_greater = 3,
    mp_less = 4,
    mp_greater = 5,
    npc_grade_less = 6,
    npc_grade_greater = 7,
    npc_grade_equal = 8,
    npc_species = 9,
    npc_attr = 10,
    abnormal_move = 11,
    abnormal_status = 12,
    abnormal_move_immune = 13,
    abnormal_status_immune = 14,
    abnormal_move_all = 15,
    pc = 16,
    skill_effect_id = 17,
    identity_stack_count = 18,
    status_effect_immunetype = 19,
    abnormal_not_move = 20,
    target_count = 21,
    skill_identity_category = 22,
    identity_element_value = 23,
    directional_attack = 24,
    current_skill_group = 25,
    abnormal_move_status_all = 26,
    identity_stance = 27,
    pc_skill = 28,
    skill_effect_group_set = 29,
    npc_id = 30,
    identity_gauge0_value_less = 31,
    pc_without_me = 32,
    npc_scaled_level_equal = 33,
    npc_scaled_level_less = 34,
    npc_scaled_level_greater = 35,
    not_skill_effect_id = 36,
    abnormal_move_not_immune = 37,
    apply_target_marking = 38,
    damage_attr = 39,
    identity_element_value_less = 40,
    command_skill_type = 41
}
declare enum hitoption {
    back_attack = 0,
    frontal_attack = 1,
    flank_attack = 2,
    reduce_damage = 3
}
declare enum identitycategory {
    none = 0,
    berserker_normal = 1,
    berserker_rush = 2,
    warlord_normal = 3,
    warlord_shield_of_battlefield = 4,
    destroyer_normal = 5,
    destroyer_focus = 6,
    destroyer_release = 7,
    battle_master_normal = 8,
    battle_master_bubble = 9,
    infighter_normal = 10,
    infighter_vigor = 11,
    infighter_shock = 12,
    forcemaster_normal = 13,
    forcemaster_soul = 14,
    lance_master_normal = 15,
    lance_master_wild = 16,
    lance_master_focus = 17,
    devil_hunter_normal = 18,
    devil_hunter_pistol = 19,
    devil_hunter_shotgun = 20,
    devil_hunter_rifle = 21,
    blaster_normal = 22,
    blaster_cannon = 23,
    hawkeye_normal = 24,
    hawkeye_summon = 25,
    summoner_normal = 26,
    summoner_ancient = 27,
    arcana_normal = 28,
    arcana_stack = 29,
    arcana_ruin = 30,
    arcana_card = 31,
    bard_normal = 32,
    bard_serenade = 33,
    blade_burst = 34,
    holyknight_normal = 35,
    holyknight_holy = 36,
    holyknight_retribution = 37,
    demonic_normal = 38,
    demonic_capture = 39,
    demonic_demon = 40,
    warlord_lance = 41,
    reaper_normal = 42,
    reaper_dagger = 43,
    reaper_shadow = 44,
    reaper_swoop = 45,
    scouter_scout = 46,
    scouter_drone = 47,
    scouter_hyper_sync = 48,
    scouter_fusion = 49,
    blade_normal = 50,
    elemental_master_normal = 51,
    elemental_master_fire = 52,
    elemental_master_electricity = 53,
    elemental_master_ice = 54,
    yinyangshi_normal = 55,
    yinyangshi_yin = 56,
    yinyangshi_yang = 57,
    weather_artist_weapon = 58,
    weather_artist_weather = 59,
    summoner_summon = 60,
    soul_eater_hollow = 61,
    soul_eater_killer = 62,
    soul_eater_death = 63
}
declare enum npcgrade {
    none = 0,
    underling = 1,
    normal = 2,
    elite = 3,
    named = 4,
    seed = 5,
    boss = 6,
    raid = 7,
    lucky = 8,
    epic_raid = 9,
    commander = 10
}
declare enum paramtype {
    absolute = 0,
    relative = 1
}
declare enum skillfeaturetype {
    none = 0,
    enable_notify = 1,
    enable_dir_change = 2,
    change_move_dist = 3,
    change_layer = 4,
    change_stage_speed = 5,
    change_stage_collision = 6,
    change_max_target = 7,
    change_area_range = 8,
    change_area_angle = 9,
    change_cost = 10,
    recover_cost = 11,
    recover_used_cost = 12,
    reduce_default_cooldown = 13,
    reduce_active_cooldown = 14,
    enable_stage_buff = 15,
    add_stage_buff = 16,
    change_buff_area_range = 17,
    change_buff_duration = 18,
    change_buff_stat = 19,
    change_buff_stack = 20,
    change_buff_param = 21,
    change_buff_expired_action = 22,
    change_chain_ratio = 23,
    change_abnormal = 24,
    change_abnormal_ratio = 25,
    change_dam_attr = 26,
    change_dam_value = 27,
    change_dam_coefficient = 28,
    change_dam_critical = 29,
    change_dam_critical_rate = 30,
    change_attack_stage_speed = 31,
    change_stack_charge_time = 32,
    change_stack_max_count = 33,
    change_targeting = 34,
    change_min_range = 35,
    change_max_range = 36,
    change_push_info = 37,
    change_parts_attack_attr = 38,
    change_skill_chain_info = 39,
    change_skill_chain_delay = 40,
    change_behit_move_info = 41,
    add_buff_stat = 42,
    add_chain_skill_effect = 43,
    remove_chain_skill_effect = 44,
    add_chain_combat_effect = 45,
    remove_chain_combat_effect = 46,
    change_skill_effect_bonus = 47,
    change_skill_effect_ai_point = 48,
    change_dam_addend = 49,
    change_hitted = 50,
    change_skill_move_speed = 51,
    add_skill_buff = 52,
    change_skill_bonus = 53,
    change_skill_normal_info = 54,
    change_skill_invisibility = 55,
    change_skill_constraint = 56,
    change_skill_book_type = 57,
    change_projection_skill_effect_id = 58,
    change_push_pvp_info = 59,
    change_forced_critical = 60,
    change_instance_skill_effect_info = 61,
    change_skill_start_stage = 62,
    change_skill_effect_dir_target = 63,
    change_stage_dir_rate = 64,
    change_projection = 65,
    change_skill_view = 66,
    change_projectile_speed = 67,
    change_projectile_dist = 68,
    change_projectile_resourcescale = 69,
    change_projectile_max_target_hit_count = 70,
    change_summon_trap_lifetime = 71,
    change_summon_trap_destroy_delaytime = 72,
    change_summon_trap_react_info = 73,
    change_summon_trap_invoke_effect = 74,
    change_summon_trap_count = 75,
    enable_identity_event = 76,
    change_identity_proc_value = 77,
    change_skill_effect_identity_proc_info = 78,
    change_identity_proc_pvp_value = 79,
    change_skill_effect_identity_proc_pvp_info = 80,
    change_skill_effect_identity_proc_replace_info = 81,
    change_skill_effect_identity_proc_replace_pvp_info = 82,
    swap_chain_skill_effect = 83,
    swap_chain_combat_effect = 84,
    change_charge_scale = 85,
    change_summon_npc_id = 86,
    change_summon_npc_sight_range = 87,
    change_summon_npc_pursuit_range = 88,
    change_summon_npc_walk_movespeed = 89,
    change_summon_npc_battle_movespeed = 90,
    change_summon_npc_life_time = 91,
    change_summon_npc_ai_index = 92,
    change_summon_npc_invincible_duration = 93,
    change_summon_npc_acquire_identity = 94,
    change_summon_npc_skill_id = 95,
    change_summon_npc_die_skill_id = 96,
    change_summon_npc_destroy_skill_id = 97,
    change_summon_npc_spawn_buff_id = 98,
    change_summon_npc_count = 99,
    change_summon_npc_stat = 100,
    change_summon_npc_threat_point = 101,
    change_summon_npc_skill_usable_tick = 102,
    change_summon_npc_skill_use_order = 103,
    change_combat_effect_arg = 104,
    change_skill_effect_cost = 105,
    change_accumulate_dam_rate = 106,
    change_projectile_bank_data_addend = 107,
    change_identity_category = 108,
    change_skill_slot_visible_effect = 109,
    change_attack_mask = 110,
    change_aim_target_max_range = 111
}
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
    critical_physical_inc_rate = 65,
    critical_magical_inc_rate = 66,
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
    attack_power_addend_2 = 124,
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
    weapon_dam = 151,
    weapon_dam_x = 152
}
declare enum statuseffecttargettooltiptype {
    none = 0,
    self = 1,
    party = 2,
    self_party = 3
}
declare enum zonelevel {
    normal = 0,
    hard = 1,
    hellchaos = 2,
    challenge = 3,
    special = 4,
    extreme = 5
}

declare const PARSED_LOG_VERSION = 19;
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
    topShieldGotten: number;
    totalEffectiveShieldingDone: number;
    topEffectiveShieldingDone: number;
    topEffectiveShieldingUsed: number;
    effectiveShieldingBuffs: Map<number, StatusEffect>;
    appliedShieldingBuffs: Map<number, StatusEffect>;
}
interface GameState {
    startedOn: number;
    lastCombatPacket: number;
    fightStartedOn: number;
    localPlayer: string;
    currentBoss: EntityState | undefined;
    entities: Map<string, EntityState>;
    damageStatistics: DamageStatistics;
    killState: KillState;
    zoneLevel: keyof typeof zonelevel;
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
interface DamageInfo {
    damageDealt: number;
    rdpsDamageReceived: number;
    rdpsDamageReceivedSupp: number;
    rdpsDamageGiven: number;
    damageDealtDebuffedBySupport: number;
    damageDealtBuffedBySupport: number;
}
declare const enum RaidDifficulty {
    UNKNOWN = 0,
    NORMAL = 1,
    HARD = 2,
    HELL = 3,
    TRIAL = 4
}
declare const enum KillState {
    FAIL = 0,
    CLEAR = 1
}
interface EntityState {
    lastUpdate: number;
    id: string;
    npcId: number;
    name: string;
    classId: number;
    isBoss: boolean;
    isPlayer: boolean;
    isEsther?: boolean;
    icon?: string;
    isDead: boolean;
    deaths: number;
    deathTime: number;
    gearScore: number;
    currentHp: number;
    maxHp: number;
    damageInfo: DamageInfo;
    healingDone: number;
    shieldDone: number;
    damageTaken: number;
    skills: Map<number, EntitySkills>;
    hits: Hits;
    damageDealtDebuffedBy: Map<number, number>;
    damageDealtBuffedBy: Map<number, number>;
    shieldReceived: number;
    damagePreventedWithShieldOnOthers: number;
    damagePreventedByShield: number;
    damagePreventedWithShieldOnOthersBy: Map<number, number>;
    damagePreventedByShieldBy: Map<number, number>;
    shieldDoneBy: Map<number, number>;
    shieldReceivedBy: Map<number, number>;
    statApiValid: boolean;
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
    damageInfo: DamageInfo;
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

declare const enum EntityType {
    Unknown = 0,
    Player = 1,
    Npc = 2,
    Summon = 3,
    Esther = 4,
    Projectile = 5
}
type Entity = {
    entityId: bigint;
    entityType: EntityType;
    name: string;
    stats: Map<stattype, bigint>;
};

type Npc = {
    id: number;
    name: string;
    grade: keyof typeof npcgrade;
    type: string;
    pushimmune: boolean;
};
type Skill = {
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
type SkillBuff = {
    id: number;
    name: string;
    desc: string;
    icon: string;
    iconshowtype: string;
    duration: number;
    category: "buff" | "debuff";
    type: string;
    statuseffectvalues?: number[];
    buffcategory: keyof typeof buffshowprioritycategory;
    target: keyof typeof statuseffecttargettooltiptype;
    uniquegroup: number;
    overlapFlag: number;
    passiveoption: PassiveOption[];
    sourceskill?: number;
    setname?: string;
};
type SkillFeature = Map<number, SkillFeatureLevelData>;
type SkillFeatureLevelData = {
    key: number;
    name: string;
    entries: SkillFeatureOption[];
};
type SkillFeatureOption = {
    type: keyof typeof skillfeaturetype;
    level: number;
    paramtype: keyof typeof paramtype;
    params: number[];
};
type PassiveOption = {
    type: keyof typeof addontype;
    keystat: keyof typeof stattype;
    keyindex: number;
    value: number;
};
type CombatEffect = {
    id: number;
    effects: CombatEffectDetail[];
};
type CombatEffectDetail = {
    ratio: number;
    cooldown: number;
    conditions: CombatEffectCondition[];
    actions: CombatEffectAction[];
};
type CombatEffectCondition = {
    type: keyof typeof combateffectconditiontype;
    actor: keyof typeof combateffectactortype;
    arg: number;
};
type CombatEffectAction = {
    type: keyof typeof combateffectactiontype;
    actor: keyof typeof combateffectactortype;
    args: number[];
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
type Esther = {
    name: string;
    icon: string;
    skills: number[];
    npcs: number[];
};
type ItemSetData = {
    setname: string;
    level: number;
};
type ItemSet = {
    items: Map<number, ItemSetData>;
    seteffects: Map<string, ItemSetLevel>;
};
type ItemSetLevel = Map<number, ItemSetCount>;
type ItemSetCount = Map<number, {
    desc: string;
    options: PassiveOption[];
}>;
type CombatEffectConditionData = {
    effect: CombatEffectDetail;
    self?: Entity;
    target?: Entity;
    caster?: Entity | undefined;
    skill?: Skill | undefined;
    hitOption?: hitoption;
    targetCount?: number;
};
type StatQueryFilter = {
    zone: Set<number>;
    raid: Set<number>;
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
    skillFeature: Map<number, SkillFeature>;
    combatEffect: Map<number, CombatEffect>;
    esther: Esther[];
    itemSet: ItemSet;
    statQueryFilter: StatQueryFilter;
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
    processSkillFeature(data: {
        [skillid: string]: {
            skillid: number;
            tripods: {
                [index: string]: {
                    key: number;
                    name: string;
                    entries: SkillFeatureOption[];
                };
            };
        };
    }): void;
    processCombatEffectData(data: {
        [key: string]: CombatEffect;
    }): void;
    processEsther(data: Esther[]): void;
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
    }): void;
    procesStatQueryFilter(data: {
        zone: number[];
        raid: number[];
    }): void;
    getNpcName(id: number): string;
    getClassName(id: number): string;
    getSkillName(id: number): string;
    getSkillClassId(id: number): number;
    getSkillEffectComment(id: number): string;
    getSkillEffectDirectionalMask(id: number): number;
    getSkillEsther(skillId: number): Esther | undefined;
    getNpcEsther(npcId: number): Esther | undefined;
    getStatusEffectHeaderData(buffId: number): StatusEffect | undefined;
    getStatusEffectBuffTypeFlags(buff: SkillBuff): StatusEffectBuffTypeFlags;
    getStatPairMap(statpair: {
        statType: number;
        value: bigint;
    }[]): Map<stattype, bigint>;
    isCombatEffectConditionsValid({ effect, self, target, caster, skill, hitOption, targetCount, }: CombatEffectConditionData): boolean;
    isSupportClassId(id: number): boolean;
    isBattleItem(id: number, type?: "attack" | "buff" | "function"): boolean;
    getBattleItemName(id: number): string;
    loadDbs(basePath: string): void;
}

export { Breakdown as B, CombatEffect as C, DamageStatistics as D, EntityState as E, GameTrackerOptions as G, HealSource as H, ItemSetData as I, KillState as K, MeterData as M, Npc as N, PARSED_LOG_VERSION as P, RaidDifficulty as R, StatusEffectTarget as S, GameState as a, StatusEffectBuffTypeFlags as b, StatusEffect as c, StatusEffectSource as d, GameStateNew as e, DamageInfo as f, EntitySkills as g, Hits as h, Skill as i, SkillBuff as j, SkillFeature as k, SkillFeatureLevelData as l, SkillFeatureOption as m, PassiveOption as n, CombatEffectDetail as o, CombatEffectCondition as p, CombatEffectAction as q, SkillEffect as r, Esther as s, ItemSet as t, ItemSetLevel as u, ItemSetCount as v, CombatEffectConditionData as w, StatQueryFilter as x };
