import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from './decompressor.js';

type AbilityData = {
    level: number;
    points: number;
    id: number;
};

type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};

type ActiveAbility = {
    featureType: number;
    level: number;
};

type PKTActiveAbilityNotify = {
    objectId: bigint;
    activeAbilityList: ActiveAbility[];
};

type PKTAddonSkillFeatureChangeNotify = {
    addonFeatureIdList: Buffer;
    objectId: bigint;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
};

type PKTAuthTokenResult = {
    packetResultCode: number;
    unk1_m: Buffer;
};

type PKTBlockSkillStateNotify = {
    paralyzationMaxPoint: number;
    type: number;
    paralyzationPoint: number;
    objectId: bigint;
};

type PKTCounterAttackNotify = {
    targetId: bigint;
    type: number;
    sourceId: bigint;
};

type PKTDeathNotify = {
    deathType?: number;
    durabilityDecrement: number;
    targetId: bigint;
    effectId: number;
    damageAttr?: number;
    unk2_m: number;
    abnormalStatusType?: number;
    sourceId: bigint;
    directionYaw: number;
    unk0_m: bigint;
};

type LostArkDateTime = Date;

type EquipItemData = {
    id: number;
    level: number;
    unk2: number;
    itemTint: Buffer;
    slot: number;
    unk6_0?: number;
    expireTime: LostArkDateTime;
};

type PKTEquipChangeNotify = {
    objectId: bigint;
    equipItemDataList: EquipItemData[];
    unk2: number;
    unk3: number;
};

type PKTEquipLifeToolChangeNotify = {
    objectId: bigint;
    equipLifeToolDataList: EquipItemData[];
};

type PKTIdentityStanceChangeNotify = {
    stance: number;
    objectId: bigint;
};

type PKTInitAbility = {
    abilityDataList: AbilityData[];
    struct_137: Buffer;
};

type PKTInitEnv = {
    unk0: number;
    unk1: number;
    unk2: number;
    struct_595: string;
    playerId: bigint;
    unk5: bigint;
    lostArkDateTime: LostArkDateTime;
    struct_30: {
        struct_578: string;
        struct_595: string;
        versionString: string;
    }[];
};

type StatusEffectData = {
    occurTime: LostArkDateTime;
    totalTime: number;
    struct_446: Buffer;
    stackCount: number;
    effectInstanceId: number;
    value?: Buffer;
    skillLevel: number;
    sourceId: bigint;
    endTick: bigint;
    unk11_0?: bigint;
    statusEffectId: number;
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

type PKTInitPC = {
    unk0: number;
    gearLevel: number;
    unk2: number;
    unk3: number;
    unk4: bigint;
    struct_341: string;
    characterId: bigint;
    unk7: number;
    unk8: number;
    unk9: number;
    unk10: number;
    level: number;
    unk12: number;
    unk13: number;
    playerId: bigint;
    unk15: number;
    unk16: number;
    unk17: number;
    unk18: number;
    unk20_0?: number;
    unk21: Buffer;
    unk22: number;
    unk23: number;
    unk24: number;
    name: string;
    unk26: bigint;
    unk27: number;
    struct_105: Buffer;
    unk29: Buffer;
    classId: number;
    unk31: number;
    unk32: number;
    unk33: number;
    struct_230: Buffer;
    unk35: bigint;
    unk36: number;
    statusEffectDatas: StatusEffectData[];
    unk38: bigint;
    unk39: number;
    unk40: number;
    unk41: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk43: bigint;
    unk44: number;
    unk45: number;
    unk46: number;
    unk47: number;
    unk48: number;
    unk49: number;
    unk50: number;
    unk51: number;
    struct_345: Buffer;
    unk53: number;
    unk54: number;
    unk55: Buffer;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk57: number;
};

type Struct_147 = {
    unk1_0?: Buffer;
};

type Struct_658 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    struct_147: Struct_147;
    unk6: number;
    struct_148: Buffer;
};

type Struct_665 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    struct_241: Buffer;
    struct_263: Buffer;
    unk7: number;
    struct_149: Buffer;
    struct_397: Buffer;
    unk10: bigint;
    unk11: number;
    struct_239: Struct_658[];
    unk13: number;
};

type Struct_749 = {
    unk0: number;
    unk1: number;
    struct_98: Buffer;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: Buffer;
    unk7: number;
};

type Struct_790 = {
    unk0: number;
    unk1: Buffer;
    unk2: Buffer;
    struct_749?: Struct_749;
};

type Struct_664 = {
    struct_440: Buffer;
    unk1: number;
    unk2: number;
    struct_274: Buffer;
    unk5_0?: Buffer;
    unk6: number;
    struct_790?: Struct_790;
    unk9: number;
    unk10: number;
    itemTint: Buffer;
    unk13_0?: Buffer;
    unk14: number;
    unk1_0?: number;
    struct_197?: Buffer;
    unk1_2?: number;
    struct_237: Buffer;
    struct_234?: Buffer;
    struct_276: Buffer;
    unk20: number;
};

type BossKillData = {
    npcId: number;
    isDead: boolean;
};

type Struct_610 = {
    unk0: number;
    struct_0: {
        unk1_0_0: number;
        struct_525: Buffer;
    }[];
    bossKillDataList: BossKillData[];
    unk3: number;
    unk4: number;
};

type Struct_657 = {
    unk0: number;
    struct_23: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_236: string;
    }[];
    struct_237: Buffer;
    struct_511: Buffer;
    unk4: number;
    unk5: number;
};

type Struct_565 = {
    struct_665?: Struct_665;
    unk2_0?: number;
    struct_1?: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_525: Buffer;
        unk1_0_3: number;
    }[];
    struct_133?: Buffer;
    unk3_0?: Buffer;
    unk4_0?: Buffer;
    unk4_1?: Buffer;
    unk4_2?: number;
    struct_664?: Struct_664;
    struct_610?: Struct_610;
    unk7_0?: Buffer;
    struct_657?: Struct_657;
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
    struct_565?: Struct_565;
    unk1_15?: number;
};

type PKTInitItem = {
    storageType: number;
    itemDataList: ItemData[];
};

type Struct_754 = {
    unk0: number;
    unk2_0?: number;
    unk3: number;
    unk4: number;
    unk6_0?: Buffer;
};

type PKTInitLocal = {
    unk0: number;
    statusEffectDatas: StatusEffectData[];
    unk2: number;
    struct_230: Buffer;
    unk4: bigint;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    struct_424: Struct_754[];
    unk7: number;
    struct_345: Buffer;
    unk9: number;
    struct_137: Buffer;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    addonFeatureIdList: Buffer;
    unk13: bigint;
    unk15_0?: number;
    abilityDataList: AbilityData[];
};

type PKTMigrationExecute = {
    account_CharacterId1: bigint;
    unk1: number;
    serverAddr: string;
    account_CharacterId2: bigint;
};

type Struct_733 = {
    lookData: Buffer;
    unk1: bigint;
    unk2: number;
    unk3: number;
    lostArkString: string;
    unk5: number;
    unk6: number;
    equipItemDataList: EquipItemData[];
    unk8: bigint;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    unk1_0?: number;
    unk2: number;
    objectId: bigint;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    struct_275?: Buffer;
    unk8_0?: number;
    statusEffectDatas: StatusEffectData[];
    directionYaw: Angle;
    unk12_0?: number;
    struct_342?: Buffer;
    unk15: number;
    unk17_0?: number;
    unk19_0?: number;
    unk20: number;
    unk22_0?: bigint;
    balanceLevel?: number;
    unk26_0?: number;
    unk28_0?: number;
    unk30_0?: number;
    struct_733?: Struct_733;
    typeId: number;
    unk35_0?: number;
    transitIndex?: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    position: Vector3F;
    unk40: number;
    unk41: number;
    level: number;
    unk44_0?: number;
    unk45: number;
    spawnIndex: number;
    unk48_0?: number;
    unk50_0?: number;
};

type PKTNewNpc = {
    unk1_0?: string;
    unk1_1?: string;
    unk2_0?: bigint;
    npcStruct: NpcData;
    unk5_0?: number;
    unk6: number;
};

type PKTNewNpcSummon = {
    ownerId: bigint;
    npcData: NpcData;
    publishReason: number;
};

type TrackMoveInfo = {
    unk0: number;
    unk2_0?: Buffer;
    unk3: number;
    unk4: Buffer;
};

type PCStruct = {
    name: string;
    unk4_m: number;
    identityData: Buffer;
    classId: number;
    unk4: number;
    avatarHide: number;
    unk6: number;
    guildName: string;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk29_m: number;
    unk0_m: Buffer;
    maxItemLevel: number;
    unk7_m: number;
    avgItemLevel: number;
    firstHonorTitleId: number;
    unk17_m: number;
    unk1_m: number;
    unk17: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    guildId: bigint;
    unk32_m: number;
    unk5_m: number;
    addonFeatureIdList: Buffer;
    unk23: bigint;
    petId: number;
    playerId: bigint;
    equipItemDataList: EquipItemData[];
    heading: Angle;
    unk23_m: number;
    position: Vector3F;
    unk25_m: number;
    statusEffectDatas: StatusEffectData[];
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk2_m: number;
    unk34: number;
    lookData: Buffer;
    unk36: number;
    equipLifeToolDataList: EquipItemData[];
    worldId: number;
    rvRLevel: number;
    characterId: bigint;
    unk41: number;
    unk45_m: number;
    level: number;
    secondHonorTitleId: number;
    grabbedData?: Buffer;
};

type PKTNewPC = {
    unk5_0_m?: Buffer;
    trackMoveInfo?: TrackMoveInfo;
    unk2_m: number;
    pcStruct: PCStruct;
    struct_60?: {
        unk1_0_0: bigint;
        itemTint: Buffer;
        unk1_0_2: number;
    }[];
    unk1_0?: number;
    itemTint?: Buffer;
    unk1_2?: bigint;
    unk4_0_m?: Buffer;
    unk3_0_m?: number;
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
    tripodIndex: TripodIndex;
    skillLevel: number;
    unk2: number;
    unk3: bigint;
    projectileId: bigint;
    unk5: number;
    skillEffect: number;
    unk7: number;
    unk8: bigint;
    struct_342?: Buffer;
    ownerId: bigint;
    unk12: number;
    unk13: number;
    unk14: number;
    unk16_0?: bigint;
    skillId: number;
    unk19_0?: number;
    unk20: number;
    chainSkillEffect: number;
    targetObjectId: bigint;
    tripodLevel: TripodLevel;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    skillId: number;
    unk1: number;
    position: Vector3F;
    unk3: number;
    ownerId: bigint;
    unk5: number;
    objectId: bigint;
    unk7: number;
    skillEffect: number;
    unk9: number;
    struct_342?: Buffer;
    unk12: number;
    unk13: number;
};

type PKTNewTrap = {
    unk0: number;
    trapData: TrapData;
    unk2: number;
};

type PKTParalyzationStateNotify = {
    hitCheckTime: number;
    paralyzationMaxPoint: number;
    paralyzationPoint: number;
    objectId: bigint;
    noHitCheckTime: number;
    decreasePoint: number;
    enable: boolean;
};

type PartyMemberData = {
    transitIndex: number;
    unk1: number;
    unk2: number;
    unk3: number;
    zoneInstId: bigint;
    zoneId: number;
    unk6: number;
    name: string;
    characterLevel: number;
    gearLevel: number;
    partyMemberNumber: number;
    characterId: bigint;
    worldId: number;
    position: Vector3F;
    maxHp: bigint;
    curHp: bigint;
    auths: number;
    unk17: number;
    classId: number;
    unk19: number;
};

type PKTPartyInfo = {
    lootGrade: number;
    raidInstanceId: number;
    partyInstanceId: number;
    memberDatas: PartyMemberData[];
    partyType: number;
    partyLootType: number;
};

type PKTPartyLeaveResult = {
    partyLeaveType: number;
    name: string;
    partyInstanceId: number;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    objectId: bigint;
    unk0_m: number;
    passiveStatusEffectList: number[];
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    objectId: bigint;
    passiveStatusEffectList: number[];
};

type PKTPartyStatusEffectAddNotify = {
    unk0: number;
    playerIdOnRefresh: bigint;
    unk2: bigint;
    characterId: bigint;
    statusEffectDatas: StatusEffectData[];
};

type PKTPartyStatusEffectRemoveNotify = {
    unk0: bigint;
    characterId: bigint;
    reason: number;
    statusEffectIds: number[];
};

type PKTPartyStatusEffectResultNotify = {
    raidInstanceId: number;
    characterId: bigint;
    partyInstanceId: number;
};

type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};

type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};

type PKTRaidBegin = {
    initBraveHeartCount: number;
    startTick: bigint;
    endTick: bigint;
    braveHeartCount: number;
    unk1_m: boolean;
    unk6_m: bigint;
    unk4_m: bigint;
    raidResult: number;
    bossKillDataList: BossKillData[];
    unk11_m: boolean;
    unk0_m: boolean;
    totalTime: bigint;
    unk5_m: bigint;
    raidId: number;
};

type PKTRaidBossKillNotify = {
    typeId: number;
};

type PKTRaidResult = {
    unk0: number;
    unk1: number;
    unk2: bigint;
    struct_51: {
        unk1_0_0: bigint;
        unk1_0_1: number;
        unk1_0_2: bigint;
        struct_531: Buffer;
    }[];
    raidResult: number;
    unk5: bigint;
    unk6: bigint;
    unk7: bigint;
};

type UnpublishObject = {
    objectId: bigint;
    unpublishReason: number;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};

type PKTSkillCancelNotify = {
    caster: bigint;
    newPosition: Vector3F;
    newDirectionYaw: Angle;
    skillId: number;
    cancelReason: number;
};

type PKTSkillCastNotify = {
    caster: bigint;
    skillId: number;
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
    maxHp: bigint;
    damageType: number;
    damage: bigint;
    unk3_m: number;
    curHp: bigint;
    targetId: bigint;
    modifier: number;
    damageAttr?: number;
};

type SkillDamageAbnormalMoveEvent = {
    unk8_m: number;
    unk2_m: bigint;
    unk3_m: number;
    unk1_m: number;
    unk4_m: number;
    skillMoveOptionData: SkillMoveOptionData;
    position: Vector3F;
    skillDamageEvent: SkillDamageEvent;
    destination: Vector3F;
};

type PKTSkillDamageAbnormalMoveNotify = {
    skillEffectId: number;
    unk2_m: number;
    skillId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    sourceId: bigint;
    unk1_m: number;
};

type PKTSkillDamageNotify = {
    skillId: number;
    skillDamageEvents: SkillDamageEvent[];
    unk3_0?: number;
    sourceId: bigint;
    skillEffectId?: number;
    skillLevel: number;
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
    sourceId: bigint;
    skillId: number;
    aimTargetPosition: Vector3F;
    unk1_m?: number;
    newDirectionYaw: Angle;
    aiStateId?: number;
    newPosition: Vector3F;
    curPosition: Vector3F;
    pitchRotation?: Angle;
    skillLevel: number;
    curDirectionYaw: Angle;
    skillOptionData: SkillOptionData;
};

type PKTStatChangeOriginNotify = {
    unk1_0?: number;
    objectId: bigint;
    unk3: {
        statType: number;
        value: bigint;
    }[];
    unk4: {
        statType: number;
        value: bigint;
    }[];
    unk5: number;
};

type PKTStatusEffectAddNotify = {
    objectId: bigint;
    new: boolean;
    unk3_0?: bigint;
    statusEffectData: StatusEffectData;
    unk5: bigint;
};

type PKTStatusEffectRemoveNotify = {
    reason: number;
    statusEffectIds: number[];
    objectId: bigint;
};

type PKTStatusEffectDurationNotify = {
    targetId: bigint;
    expirationTick: bigint;
    effectInstanceId: number;
};

type PKTStatusEffectSyncDataNotify = {
    objectId: bigint;
    characterId: bigint;
    value: number;
    effectInstanceId: number;
};

type PKTTriggerBossBattleStatus = {
    step: number;
    triggerId: number;
    unk2_m: boolean;
};

type PKTTriggerFinishNotify = {
    involvedPCs: bigint[];
    triggerId: number;
    packetResultCode: number;
    unk0_m: number;
};

type PKTTriggerStartNotify = {
    sourceId: bigint;
    involvedPCs: bigint[];
    triggerSignalType: number;
    triggerId: number;
};

type PKTTroopMemberUpdateMinNotify = {
    position: bigint;
    maxHp: bigint;
    curHp: bigint;
    statusEffectDatas: StatusEffectData[];
    characterId: bigint;
    unk0_m: number;
};

type PKTIdentityGaugeChangeNotify = {
    playerId: bigint;
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
};

type PKTZoneMemberLoadStatusNotify = {
    totalMembers: bigint[];
    firstPCEnterTick: bigint;
    zoneId: number;
    zoneInstId: bigint;
    completeMembers: bigint[];
    loadComplete: boolean;
    zoneLevel: number;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    target: number;
    instanceId: number;
    id: number;
    stackCount: number;
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
    PKTSkillCancelNotify: (pkt: PKT<PKTSkillCancelNotify>) => void;
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
