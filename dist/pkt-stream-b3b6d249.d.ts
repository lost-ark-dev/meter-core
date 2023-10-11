import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from './decompressor.js';

type AbilityData = {
    points: number;
    id: number;
    level: number;
};

type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};

type ActiveAbility = {
    level: number;
    featureType: number;
};

type PKTActiveAbilityNotify = {
    objectId: bigint;
    activeAbilityList: ActiveAbility[];
};

type PKTAddonSkillFeatureChangeNotify = {
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    objectId: bigint;
    addonFeatureIdList: Buffer;
};

type PKTAuthTokenResult = {
    unk1_m: Buffer;
    unk1: number;
};

type PKTBlockSkillStateNotify = {
    type: number;
    objectId: bigint;
    paralyzationPoint: number;
    paralyzationMaxPoint: number;
};

type PKTCounterAttackNotify = {
    sourceId: bigint;
    type: number;
    targetId: bigint;
};

type PKTDeathNotify = {
    unk0: number;
    unk2_0?: number;
    sourceId: bigint;
    unk4: number;
    targetId: bigint;
    unk7_0?: number;
    unk8: bigint;
    unk9: number;
    unk11_0?: number;
    unk12: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    expireTime: LostArkDateTime;
    slot: number;
    itemTint: Buffer;
    level: number;
    id: number;
    unk6_0?: number;
};

type PKTEquipChangeNotify = {
    unk0: number;
    unk1: number;
    objectId: bigint;
    equipItemDataList: EquipItemData[];
};

type PKTEquipLifeToolChangeNotify = {
    equipLifeToolDataList: EquipItemData[];
    objectId: bigint;
};

type PKTIdentityStanceChangeNotify = {
    stance: number;
    objectId: bigint;
};

type PKTInitAbility = {
    abilityDataList: AbilityData[];
    struct_132: Buffer;
};

type PKTInitEnv = {
    struct_29: {
        struct_558: string;
        struct_574: string;
        versionString: string;
    }[];
    unk1: number;
    struct_574: string;
    unk3: bigint;
    unk4: number;
    unk5: number;
    playerId: bigint;
    lostArkDateTime: LostArkDateTime;
};

type PeriodUpdateStatData = {
    unk0: number;
    unk1: number;
    unk2: bigint;
    unk3: number;
    unk4: bigint;
    unk5: number;
    unk6: bigint;
};

type StatusEffectData = {
    unk1_0?: bigint;
    totalTime: number;
    value?: Buffer;
    endTick: bigint;
    statusEffectId: number;
    struct_437: Buffer;
    skillLevel: number;
    sourceId: bigint;
    effectInstanceId: number;
    occurTime: LostArkDateTime;
    stackCount: number;
};

type PKTInitPC = {
    unk0: number;
    unk1: number;
    unk2: number;
    struct_335: Buffer;
    unk4: bigint;
    unk5: number;
    unk6: number;
    unk7: number;
    unk8: number;
    unk9: number;
    unk10: number;
    unk11: Buffer;
    unk12: number;
    level: number;
    unk14: number;
    gearLevel: number;
    unk16: Buffer;
    unk17: number;
    unk18: number;
    unk19: number;
    classId: number;
    unk21: number;
    unk22: number;
    unk23: number;
    playerId: bigint;
    unk25: number;
    unk26: number;
    unk27: number;
    unk28: bigint;
    unk29: bigint;
    unk31_0?: number;
    unk32: bigint;
    unk33: number;
    unk34: number;
    struct_331: string;
    unk36: Buffer;
    unk37: number;
    unk38: number;
    unk39: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk41: number;
    unk42: bigint;
    struct_219: Buffer;
    unk44: number;
    unk45: number;
    unk46: number;
    unk47: number;
    name: string;
    struct_101: Buffer;
    unk50: number;
    unk51: number;
    unk52: number;
    characterId: bigint;
    unk54: number;
    unk55: number;
    statusEffectDatas: StatusEffectData[];
    statPair: {
        statType: number;
        value: bigint;
    }[];
};

type Struct_140 = {
    unk1_0?: Buffer;
};

type Struct_636 = {
    unk0: number;
    struct_141: Buffer;
    unk2: number;
    unk3: number;
    struct_140: Struct_140;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_642 = {
    unk0: number;
    unk1: number;
    unk2: bigint;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    struct_251: Buffer;
    unk8: number;
    struct_230: Buffer;
    struct_383: Buffer;
    struct_228: Struct_636[];
    struct_142: Buffer;
    unk13: number;
};

type Struct_641 = {
    unk0: number;
    struct_262: Buffer;
    struct_224?: Buffer;
    unk5_0?: Buffer;
    struct_431: Buffer;
    unk7: number;
    itemTint: Buffer;
    unk9: number;
    unk10: number;
    unk11: number;
    unk12: number;
    unk1_0?: number;
    struct_188?: Buffer;
    unk1_2?: number;
    unk14: number;
    struct_483: Buffer;
    struct_264: Buffer;
};

type BossKillData = {
    npcId: number;
    isDead: boolean;
};

type Struct_589 = {
    unk0: number;
    unk1: number;
    unk2: number;
    struct_0: {
        unk1_0_0: number;
        struct_511: Buffer;
    }[];
    bossKillDataList: BossKillData[];
};

type Struct_635 = {
    struct_483: Buffer;
    struct_22: {
        unk1_0_0: number;
        struct_226: string;
        unk1_0_2: number;
    }[];
    unk2: number;
    struct_227: Buffer;
    unk4: number;
    unk5: number;
};

type Struct_545 = {
    struct_642?: Struct_642;
    struct_129?: Buffer;
    unk2_1?: number;
    struct_1?: {
        struct_511: Buffer;
        unk1_0_1: number;
        unk1_0_2: number;
        unk1_0_3: number;
    }[];
    unk3_0?: Buffer;
    unk4_0?: Buffer;
    unk4_1?: number;
    unk4_2?: Buffer;
    struct_641?: Struct_641;
    struct_589?: Struct_589;
    unk7_0?: Buffer;
    struct_635?: Struct_635;
    unk9_0?: number;
};

type ItemData = {
    serialNumber?: bigint;
    id?: number;
    level?: number;
    slot?: number;
    durability?: number;
    unk1_6_m?: number;
    flag?: number;
    expireTime?: LostArkDateTime;
    lockUpdateTime?: LostArkDateTime;
    unk1_10_0?: Buffer;
    unk1_11?: number;
    unk1_12?: number;
    unk1_13?: number;
    struct_545?: Struct_545;
    unk1_15?: number;
};

type PKTInitItem = {
    storageType: number;
    itemDataList: ItemData[];
};

type Struct_731 = {
    unk1_0?: Buffer;
    unk3_0?: number;
    unk4: number;
    unk5: number;
    unk6: number;
};

type PKTInitLocal = {
    unk0: number;
    unk1: bigint;
    struct_219: Buffer;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    unk4: number;
    struct_335: Buffer;
    statusEffectDatas: StatusEffectData[];
    struct_132: Buffer;
    unk9_0?: number;
    struct_415: Struct_731[];
    unk11: bigint;
    unk12: number;
    addonFeatureIdList: Buffer;
    abilityDataList: AbilityData[];
    unk15: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
};

type PKTMigrationExecute = {
    account_CharacterId1: bigint;
    serverAddr: string;
    account_CharacterId2: bigint;
    unk3: number;
};

type Struct_711 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: bigint;
    equipItemDataList: EquipItemData[];
    unk5: number;
    lostArkString: string;
    lookData: Buffer;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    unk1_0?: number;
    unk3_0?: number;
    unk5_0?: number;
    spawnIndex: number;
    unk8_0?: number;
    directionYaw: Angle;
    unk11_0?: number;
    unk13_0?: number;
    level: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk17_0?: bigint;
    statusEffectDatas: StatusEffectData[];
    balanceLevel?: number;
    unk22_0?: number;
    transitIndex?: number;
    unk25: number;
    unk27_0?: number;
    unk29_0?: number;
    position: Vector3F;
    unk31: number;
    struct_263?: Buffer;
    unk34: number;
    struct_332?: Buffer;
    unk38_0?: number;
    unk40_0?: number;
    unk41: number;
    unk43_0?: number;
    unk44: number;
    objectId: bigint;
    struct_711?: Struct_711;
    unk48: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    typeId: number;
};

type PKTNewNpc = {
    unk1_0?: bigint;
    npcStruct: NpcData;
    unk4_0?: number;
    unk1_0_0?: string;
    unk1_1?: string;
    unk6: number;
};

type PKTNewNpcSummon = {
    npcData: NpcData;
    ownerId: bigint;
    publishReason: number;
};

type PCStruct = {
    identityData: Buffer;
    unk1_m: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    unk3: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk45_m: number;
    statusEffectDatas: StatusEffectData[];
    rvRLevel: number;
    unk2_m: number;
    petId: number;
    classId: number;
    addonFeatureIdList: Buffer;
    firstHonorTitleId: number;
    unk29_m: number;
    avatarHide: number;
    unk0_m: Buffer;
    unk16: number;
    unk17: number;
    unk15_m: number;
    maxItemLevel: number;
    unk28_m: number;
    playerId: bigint;
    guildName: string;
    worldId: number;
    level: number;
    lookData: Buffer;
    guildId: bigint;
    grabbedData?: Buffer;
    position: Vector3F;
    equipItemDataList: EquipItemData[];
    unk23_m: number;
    equipLifeToolDataList: EquipItemData[];
    heading: Angle;
    unk32_m: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    avgItemLevel: number;
    name: string;
    unk38: number;
    unk5_m: number;
    unk7_m: number;
    characterId: bigint;
    secondHonorTitleId: number;
    unk17_m: number;
    unk4_m: number;
    unk25_m: number;
};

type TrackMoveInfo = {
    unk0: Buffer;
    unk2_0?: Buffer;
    unk3: number;
    unk4: number;
};

type PKTNewPC = {
    unk5_0_m?: Buffer;
    unk3_0_m?: number;
    unk4_0_m?: Buffer;
    pcStruct: PCStruct;
    trackMoveInfo?: TrackMoveInfo;
    unk2_m: number;
    unk0_m: number;
};

type TripodIndex = {
    first: number;
    second: number;
    third: number;
};

type TripodLevel = {
    first: number;
    second: number;
    third: number;
};

type ProjectileInfo = {
    unk1_0?: number;
    tripodIndex: TripodIndex;
    skillId: number;
    unk4: number;
    unk5: bigint;
    ownerId: bigint;
    skillLevel: number;
    unk8: number;
    skillEffect: number;
    unk10: bigint;
    targetObjectId: bigint;
    tripodLevel: TripodLevel;
    unk13: number;
    unk14: number;
    chainSkillEffect: number;
    unk16: number;
    unk17: number;
    projectileId: bigint;
    struct_332?: Buffer;
    unk21: number;
    unk23_0?: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    unk0: number;
    unk1: number;
    ownerId: bigint;
    skillId: number;
    unk4: number;
    unk5: number;
    skillEffect: number;
    unk7: number;
    objectId: bigint;
    unk9: number;
    unk10: number;
    struct_332?: Buffer;
    position: Vector3F;
};

type PKTNewTrap = {
    unk0: number;
    unk1: number;
    trapData: TrapData;
};

type PKTParalyzationStateNotify = {
    paralyzationPoint: number;
    objectId: bigint;
    enable: boolean;
    noHitCheckTime: number;
    decreasePoint: number;
    paralyzationMaxPoint: number;
    hitCheckTime: number;
};

type PartyMemberData = {
    maxHp: bigint;
    auths: number;
    partyMemberNumber: number;
    unk3: number;
    characterId: bigint;
    curHp: bigint;
    name: string;
    characterLevel: number;
    zoneId: number;
    position: Vector3F;
    unk10: number;
    transitIndex: number;
    unk12: number;
    unk13: number;
    worldId: number;
    unk15: number;
    unk16: number;
    gearLevel: number;
    classId: number;
    zoneInstId: bigint;
};

type PKTPartyInfo = {
    memberDatas: PartyMemberData[];
    lootGrade: number;
    partyInstanceId: number;
    partyLootType: number;
    raidInstanceId: number;
    partyType: number;
};

type PKTPartyLeaveResult = {
    partyLeaveType: number;
    partyInstanceId: number;
    name: string;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
    objectId: bigint;
    unk0_m: number;
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    objectId: bigint;
};

type PKTPartyStatusEffectAddNotify = {
    unk0: number;
    unk1: bigint;
    playerIdOnRefresh: bigint;
    characterId: bigint;
    statusEffectDatas: StatusEffectData[];
};

type PKTPartyStatusEffectRemoveNotify = {
    unk0: bigint;
    reason: number;
    statusEffectIds: number[];
    characterId: bigint;
};

type PKTPartyStatusEffectResultNotify = {
    characterId: bigint;
    raidInstanceId: number;
    partyInstanceId: number;
};

type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};

type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};

type PKTRaidBegin = {
    startTick: bigint;
    unk5_m: bigint;
    endTick: bigint;
    unk1_m: boolean;
    totalTime: bigint;
    braveHeartCount: number;
    unk4_m: bigint;
    raidId: number;
    unk11_m: boolean;
    unk0_m: boolean;
    bossKillDataList: BossKillData[];
    initBraveHeartCount: number;
    raidResult: number;
    unk6_m: bigint;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    struct_49: {
        unk1_0_0: bigint;
        struct_517: Buffer;
        unk1_0_2: number;
        unk1_0_3: bigint;
    }[];
    unk1: bigint;
    unk2: bigint;
    unk3: number;
    unk4: bigint;
    unk5: number;
    unk6: number;
    unk7: bigint;
};

type UnpublishObject = {
    objectId: bigint;
    unpublishReason: number;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};

type PKTSkillCastNotify = {
    skillId: number;
    caster: bigint;
    skillLevel: number;
};

type SkillMoveOptionData = {
    moveTime?: number;
    standUpTime?: number;
    downTime?: number;
    freezeTime?: number;
    moveHeight?: number;
    farmostDist?: number;
    flag40?: Buffer;
};

type SkillDamageEvent = {
    curHp: bigint;
    targetId: bigint;
    damageType: number;
    damage: bigint;
    maxHp: bigint;
    unk3_m: number;
    damageAttr?: number;
    modifier: number;
};

type SkillDamageAbnormalMoveEvent = {
    unk8_m: number;
    skillMoveOptionData: SkillMoveOptionData;
    destination: Vector3F;
    position: Vector3F;
    unk3_m: number;
    skillDamageEvent: SkillDamageEvent;
    unk1_m: number;
    unk4_m: number;
    unk2_m: bigint;
};

type PKTSkillDamageAbnormalMoveNotify = {
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    skillEffectId: number;
    skillId: number;
    unk1_m: number;
    unk2_m: number;
    sourceId: bigint;
};

type PKTSkillDamageNotify = {
    skillEffectId: number;
    skillLevel: number;
    skillId: number;
    skillDamageEvents: SkillDamageEvent[];
    sourceId: bigint;
};

type PKTSkillStageNotify = {
    skillId: number;
    stage: number;
    sourceId: bigint;
};

type SkillOptionData = {
    layerIndex?: number;
    startStageIndex?: number;
    transitIndex?: number;
    stageStartTime?: number;
    farmostDistance?: number;
    tripodIndex?: TripodIndex;
    tripodLevel?: TripodLevel;
};

type PKTSkillStartNotify = {
    unk1_m?: number;
    skillLevel: number;
    aiStateId?: number;
    sourceId: bigint;
    skillOptionData: SkillOptionData;
    newPosition: Vector3F;
    curPosition: Vector3F;
    aimTargetPosition: Vector3F;
    curDirectionYaw: Angle;
    skillId: number;
    newDirectionYaw: Angle;
    pitchRotation?: Angle;
};

type PKTStatChangeOriginNotify = {
    unk0: number;
    unk1: {
        statType: number;
        value: bigint;
    }[];
    unk3_0?: number;
    objectId: bigint;
    unk5: {
        statType: number;
        value: bigint;
    }[];
};

type PKTStatusEffectAddNotify = {
    new: boolean;
    unk2_0?: bigint;
    unk3: bigint;
    statusEffectData: StatusEffectData;
    objectId: bigint;
};

type PKTStatusEffectRemoveNotify = {
    objectId: bigint;
    reason: number;
    statusEffectIds: number[];
};

type PKTStatusEffectDurationNotify = {
    effectInstanceId: number;
    expirationTick: bigint;
    targetId: bigint;
};

type PKTStatusEffectSyncDataNotify = {
    objectId: bigint;
    effectInstanceId: number;
    characterId: bigint;
    value: number;
};

type PKTTriggerBossBattleStatus = {
    triggerId: number;
    unk2_m: boolean;
    step: number;
};

type PKTTriggerFinishNotify = {
    involvedPCs: bigint[];
    triggerId: number;
    packetResultCode: number;
    unk0_m: number;
};

type PKTTriggerStartNotify = {
    triggerId: number;
    triggerSignalType: number;
    involvedPCs: bigint[];
    sourceId: bigint;
};

type PKTTroopMemberUpdateMinNotify = {
    statusEffectDatas: StatusEffectData[];
    unk0_m: number;
    position: bigint;
    characterId: bigint;
    curHp: bigint;
    maxHp: bigint;
};

type PKTIdentityGaugeChangeNotify = {
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
    playerId: bigint;
};

type PKTZoneMemberLoadStatusNotify = {
    zoneId: number;
    completeMembers: bigint[];
    zoneInstId: bigint;
    totalMembers: bigint[];
    loadComplete: boolean;
    zoneLevel: number;
    firstPCEnterTick: bigint;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    id: number;
    stackCount: number;
    target: number;
    instanceId: number;
};

type PKTZoneStatusEffectAddNotify = {
    zoneStatusEffectDataList: ZoneStatusEffectData[];
};

type PKTZoneStatusEffectRemoveNotify = {
    statusEffectId: number;
};

interface PKTStreamEvents {
    PKTAbilityChangeNotify: (pkt: PKT<PKTAbilityChangeNotify>) => void;
    PKTActiveAbilityNotify: (pkt: PKT<PKTActiveAbilityNotify>) => void;
    PKTAddonSkillFeatureChangeNotify: (pkt: PKT<PKTAddonSkillFeatureChangeNotify>) => void;
    PKTAuthTokenResult: (pkt: PKT<PKTAuthTokenResult>) => void;
    PKTBlockSkillStateNotify: (pkt: PKT<PKTBlockSkillStateNotify>) => void;
    PKTCounterAttackNotify: (pkt: PKT<PKTCounterAttackNotify>) => void;
    PKTDeathNotify: (pkt: PKT<PKTDeathNotify>) => void;
    PKTEquipChangeNotify: (pkt: PKT<PKTEquipChangeNotify>) => void;
    PKTEquipLifeToolChangeNotify: (pkt: PKT<PKTEquipLifeToolChangeNotify>) => void;
    PKTIdentityStanceChangeNotify: (pkt: PKT<PKTIdentityStanceChangeNotify>) => void;
    PKTInitAbility: (pkt: PKT<PKTInitAbility>) => void;
    PKTInitEnv: (pkt: PKT<PKTInitEnv>) => void;
    PKTInitPC: (pkt: PKT<PKTInitPC>) => void;
    PKTInitItem: (pkt: PKT<PKTInitItem>) => void;
    PKTInitLocal: (pkt: PKT<PKTInitLocal>) => void;
    PKTMigrationExecute: (pkt: PKT<PKTMigrationExecute>) => void;
    PKTNewNpc: (pkt: PKT<PKTNewNpc>) => void;
    PKTNewNpcSummon: (pkt: PKT<PKTNewNpcSummon>) => void;
    PKTNewPC: (pkt: PKT<PKTNewPC>) => void;
    PKTNewProjectile: (pkt: PKT<PKTNewProjectile>) => void;
    PKTNewTrap: (pkt: PKT<PKTNewTrap>) => void;
    PKTParalyzationStateNotify: (pkt: PKT<PKTParalyzationStateNotify>) => void;
    PKTPartyInfo: (pkt: PKT<PKTPartyInfo>) => void;
    PKTPartyLeaveResult: (pkt: PKT<PKTPartyLeaveResult>) => void;
    PKTPartyPassiveStatusEffectAddNotify: (pkt: PKT<PKTPartyPassiveStatusEffectAddNotify>) => void;
    PKTPartyPassiveStatusEffectRemoveNotify: (pkt: PKT<PKTPartyPassiveStatusEffectRemoveNotify>) => void;
    PKTPartyStatusEffectAddNotify: (pkt: PKT<PKTPartyStatusEffectAddNotify>) => void;
    PKTPartyStatusEffectRemoveNotify: (pkt: PKT<PKTPartyStatusEffectRemoveNotify>) => void;
    PKTPartyStatusEffectResultNotify: (pkt: PKT<PKTPartyStatusEffectResultNotify>) => void;
    PKTPassiveStatusEffectAddNotify: (pkt: PKT<PKTPassiveStatusEffectAddNotify>) => void;
    PKTPassiveStatusEffectRemoveNotify: (pkt: PKT<PKTPassiveStatusEffectRemoveNotify>) => void;
    PKTRaidBegin: (pkt: PKT<PKTRaidBegin>) => void;
    PKTRaidBossKillNotify: (pkt: PKT<PKTRaidBossKillNotify>) => void;
    PKTRaidResult: (pkt: PKT<PKTRaidResult>) => void;
    PKTRemoveObject: (pkt: PKT<PKTRemoveObject>) => void;
    PKTSkillCastNotify: (pkt: PKT<PKTSkillCastNotify>) => void;
    PKTSkillDamageAbnormalMoveNotify: (pkt: PKT<PKTSkillDamageAbnormalMoveNotify>) => void;
    PKTSkillDamageNotify: (pkt: PKT<PKTSkillDamageNotify>) => void;
    PKTSkillStageNotify: (pkt: PKT<PKTSkillStageNotify>) => void;
    PKTSkillStartNotify: (pkt: PKT<PKTSkillStartNotify>) => void;
    PKTStatChangeOriginNotify: (pkt: PKT<PKTStatChangeOriginNotify>) => void;
    PKTStatusEffectAddNotify: (pkt: PKT<PKTStatusEffectAddNotify>) => void;
    PKTStatusEffectRemoveNotify: (pkt: PKT<PKTStatusEffectRemoveNotify>) => void;
    PKTStatusEffectDurationNotify: (pkt: PKT<PKTStatusEffectDurationNotify>) => void;
    PKTStatusEffectSyncDataNotify: (pkt: PKT<PKTStatusEffectSyncDataNotify>) => void;
    PKTTriggerBossBattleStatus: (pkt: PKT<PKTTriggerBossBattleStatus>) => void;
    PKTTriggerFinishNotify: (pkt: PKT<PKTTriggerFinishNotify>) => void;
    PKTTriggerStartNotify: (pkt: PKT<PKTTriggerStartNotify>) => void;
    PKTTroopMemberUpdateMinNotify: (pkt: PKT<PKTTroopMemberUpdateMinNotify>) => void;
    PKTIdentityGaugeChangeNotify: (pkt: PKT<PKTIdentityGaugeChangeNotify>) => void;
    PKTZoneMemberLoadStatusNotify: (pkt: PKT<PKTZoneMemberLoadStatusNotify>) => void;
    PKTZoneObjectUnpublishNotify: (pkt: PKT<PKTZoneObjectUnpublishNotify>) => void;
    PKTZoneStatusEffectAddNotify: (pkt: PKT<PKTZoneStatusEffectAddNotify>) => void;
    PKTZoneStatusEffectRemoveNotify: (pkt: PKT<PKTZoneStatusEffectRemoveNotify>) => void;
    "*": (data: Buffer, opcode: number, compression: number, xor: boolean) => void;
}

declare class PKTStream extends TypedEmitter<PKTStreamEvents> {
    #private;
    constructor(decompressor: Decompressor);
    /**
     * @returns `false` if packet is malformed
     */
    read(buf: Buffer): false | void;
}
declare class PKT<T> {
    #private;
    constructor(data: Buffer, opcode: number, compression: number, xor: boolean, decompressor: Decompressor, read: (buf: Buffer) => T);
    get parsed(): T | undefined;
}

export { Angle as A, LostArkDateTime as L, PKTStream as P, SkillMoveOptionData as S, TripodIndex as T, Vector3F as V, TripodLevel as a, SkillOptionData as b, PKT as c };
