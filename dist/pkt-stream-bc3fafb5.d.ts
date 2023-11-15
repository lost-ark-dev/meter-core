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
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    objectId: bigint;
    addonFeatureIdList: Buffer;
};

type PKTAuthTokenResult = {
    packetResultCode: number;
    unk1_m: Buffer;
};

type PKTBlockSkillStateNotify = {
    paralyzationPoint: number;
    objectId: bigint;
    type: number;
    paralyzationMaxPoint: number;
};

type PKTCounterAttackNotify = {
    targetId: bigint;
    sourceId: bigint;
    type: number;
};

type PKTDeathNotify = {
    unk0: bigint;
    targetId: bigint;
    unk2: number;
    unk3: number;
    sourceId: bigint;
    unk6_0?: number;
    unk8_0?: number;
    unk10_0?: number;
    unk11: number;
    unk12: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    expireTime: LostArkDateTime;
    unk2_0?: number;
    itemTint: Buffer;
    level: number;
    id: number;
    slot: number;
};

type PKTEquipChangeNotify = {
    unk0: number;
    equipItemDataList: EquipItemData[];
    objectId: bigint;
    unk3: number;
};

type PKTEquipLifeToolChangeNotify = {
    equipLifeToolDataList: EquipItemData[];
    objectId: bigint;
};

type PKTIdentityStanceChangeNotify = {
    objectId: bigint;
    stance: number;
};

type PKTInitAbility = {
    abilityDataList: AbilityData[];
    struct_131: Buffer;
};

type PKTInitEnv = {
    playerId: bigint;
    unk1: bigint;
    struct_27: {
        struct_565: string;
        struct_581: string;
        versionString: string;
    }[];
    lostArkDateTime: LostArkDateTime;
    struct_581: string;
    unk5: number;
    unk6: number;
    unk7: number;
};

type PeriodUpdateStatData = {
    unk0: bigint;
    unk1: bigint;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: bigint;
    unk6: number;
};

type StatusEffectData = {
    stackCount: number;
    unk2_0?: bigint;
    sourceId: bigint;
    statusEffectId: number;
    occurTime: LostArkDateTime;
    skillLevel: number;
    value?: Buffer;
    struct_438: Buffer;
    endTick: bigint;
    effectInstanceId: number;
    totalTime: number;
};

type PKTInitPC = {
    unk0: number;
    gearLevel: number;
    unk2: number;
    characterId: bigint;
    unk4: number;
    unk5: number;
    unk6: number;
    level: number;
    struct_336: Buffer;
    struct_330: string;
    unk10: number;
    unk11: number;
    unk12: number;
    unk13: Buffer;
    unk14: number;
    unk15: number;
    unk16: bigint;
    struct_222: Buffer;
    unk18: number;
    unk19: number;
    unk20: number;
    unk21: number;
    unk22: number;
    unk23: Buffer;
    unk24: number;
    unk25: number;
    unk26: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk28: number;
    unk29: bigint;
    unk30: number;
    unk31: bigint;
    playerId: bigint;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk34: bigint;
    unk35: number;
    unk36: Buffer;
    name: string;
    unk38: number;
    unk39: number;
    unk40: number;
    unk41: number;
    struct_102: Buffer;
    classId: number;
    unk44: number;
    unk45: number;
    statusEffectDatas: StatusEffectData[];
    unk47: number;
    unk48: bigint;
    unk49: number;
    unk51_0?: number;
    unk52: number;
    unk53: number;
    unk54: number;
    unk55: number;
    unk56: number;
    unk57: number;
};

type Struct_139 = {
    unk1_0?: Buffer;
};

type Struct_645 = {
    unk0: number;
    struct_139: Struct_139;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    struct_140: Buffer;
    unk7: number;
};

type Struct_652 = {
    unk0: number;
    struct_141: Buffer;
    unk2: number;
    struct_291: Buffer;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
    unk8: bigint;
    struct_254: Buffer;
    unk10: number;
    struct_386: Buffer;
    unk12: number;
    struct_230: Struct_645[];
};

type Struct_736 = {
    unk0: number;
    unk1: number;
    unk2: Buffer;
    struct_96: Buffer;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_773 = {
    unk0: number;
    struct_736?: Struct_736;
    struct_519: Buffer;
};

type Struct_651 = {
    struct_227?: Buffer;
    struct_432: Buffer;
    struct_267: Buffer;
    struct_773?: Struct_773;
    unk6: number;
    struct_265: Buffer;
    unk8: number;
    unk1_0?: number;
    unk1_1?: number;
    struct_188?: Buffer;
    itemTint: Buffer;
    unk11: number;
    unk12: number;
    struct_485: Buffer;
    unk15_0?: Buffer;
    unk16: number;
    unk17: number;
    unk18: number;
};

type BossKillData = {
    isDead: boolean;
    npcId: number;
};

type Struct_596 = {
    struct_0: {
        unk1_0_0: number;
        struct_513: Buffer;
    }[];
    unk1: number;
    unk2: number;
    unk3: number;
    bossKillDataList: BossKillData[];
};

type Struct_644 = {
    struct_485: Buffer;
    unk1: number;
    struct_20: {
        unk1_0_0: number;
        struct_229: string;
        unk1_0_2: number;
    }[];
    struct_499: Buffer;
    unk4: number;
    unk5: number;
};

type Struct_552 = {
    struct_652?: Struct_652;
    struct_1?: {
        struct_513: Buffer;
        unk1_0_1: number;
        unk1_0_2: number;
        unk1_0_3: number;
    }[];
    struct_128?: Buffer;
    unk2_2?: number;
    unk3_0?: Buffer;
    unk4_0?: Buffer;
    unk4_1?: number;
    unk4_2?: Buffer;
    struct_651?: Struct_651;
    struct_596?: Struct_596;
    unk7_0?: Buffer;
    struct_644?: Struct_644;
    struct_773?: Struct_773;
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
    struct_552?: Struct_552;
    unk1_15?: number;
};

type PKTInitItem = {
    storageType: number;
    itemDataList: ItemData[];
};

type Struct_741 = {
    unk1_0?: number;
    unk3_0?: Buffer;
    unk4: number;
    unk5: number;
    unk6: number;
};

type PKTInitLocal = {
    struct_336: Buffer;
    addonFeatureIdList: Buffer;
    unk2: number;
    statusEffectDatas: StatusEffectData[];
    statPair: {
        statType: number;
        value: bigint;
    }[];
    abilityDataList: AbilityData[];
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk8_0?: number;
    unk9: number;
    unk10: bigint;
    struct_222: Buffer;
    unk12: number;
    struct_131: Buffer;
    unk14: bigint;
    unk15: number;
    struct_417: Struct_741[];
};

type PKTMigrationExecute = {
    serverAddr: string;
    unk1: number;
    account_CharacterId1: bigint;
    account_CharacterId2: bigint;
};

type Struct_720 = {
    unk0: number;
    unk1: number;
    equipItemDataList: EquipItemData[];
    unk3: bigint;
    unk4: number;
    lookData: Buffer;
    lostArkString: string;
    unk7: number;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    unk1_0?: number;
    transitIndex?: number;
    directionYaw: Angle;
    level: number;
    unk7_0?: number;
    unk9_0?: number;
    unk11_0?: bigint;
    unk13_0?: number;
    balanceLevel?: number;
    objectId: bigint;
    unk17: number;
    unk18: number;
    unk20_0?: number;
    struct_331?: Buffer;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    spawnIndex: number;
    unk26_0?: number;
    unk27: number;
    unk29_0?: number;
    struct_720?: Struct_720;
    unk32: number;
    position: Vector3F;
    unk35_0?: number;
    unk36: number;
    unk38_0?: number;
    unk39: number;
    unk41_0?: number;
    unk43_0?: number;
    typeId: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk47_0?: number;
    statusEffectDatas: StatusEffectData[];
    struct_266?: Buffer;
};

type PKTNewNpc = {
    unk1_0?: string;
    unk1_1?: string;
    npcStruct: NpcData;
    unk3_0?: bigint;
    unk4: number;
    unk6_0?: number;
};

type PKTNewNpcSummon = {
    publishReason: number;
    ownerId: bigint;
    npcData: NpcData;
};

type PCStruct = {
    firstHonorTitleId: number;
    unk1: number;
    unk45_m: number;
    identityData: Buffer;
    unk4: number;
    petId: number;
    lookData: Buffer;
    unk7: number;
    unk5_m: number;
    unk28_m: number;
    addonFeatureIdList: Buffer;
    avatarHide: number;
    unk12: number;
    unk4_m: number;
    statusEffectDatas: StatusEffectData[];
    unk15_m: number;
    avgItemLevel: number;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    position: Vector3F;
    guildName: string;
    unk23_m: number;
    worldId: number;
    equipItemDataList: EquipItemData[];
    statPair: {
        statType: number;
        value: bigint;
    }[];
    secondHonorTitleId: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    classId: number;
    name: string;
    heading: Angle;
    unk7_m: number;
    unk17_m: number;
    guildId: bigint;
    grabbedData?: Buffer;
    unk32_m: number;
    maxItemLevel: number;
    unk1_m: number;
    unk2_m: number;
    equipLifeToolDataList: EquipItemData[];
    rvRLevel: number;
    unk25_m: number;
    unk0_m: Buffer;
    level: number;
    characterId: bigint;
    unk29_m: number;
    playerId: bigint;
};

type TrackMoveInfo = {
    unk0: number;
    unk2_0?: Buffer;
    unk3: number;
    unk4: Buffer;
};

type PKTNewPC = {
    unk5_0_m?: Buffer;
    unk4_0_m?: Buffer;
    unk0_m: number;
    itemTint?: Buffer;
    unk1_1?: number;
    unk1_2?: bigint;
    unk2_m: number;
    pcStruct: PCStruct;
    struct_58?: {
        unk1_0_0: number;
        unk1_0_1: bigint;
        itemTint: Buffer;
    }[];
    trackMoveInfo?: TrackMoveInfo;
    unk3_0_m?: number;
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
    skillEffect: number;
    unk3: bigint;
    unk4: number;
    struct_331?: Buffer;
    unk7: number;
    unk8: number;
    unk9: number;
    projectileId: bigint;
    unk12_0?: bigint;
    skillId: number;
    unk14: number;
    ownerId: bigint;
    tripodIndex: TripodIndex;
    tripodLevel: TripodLevel;
    unk18: bigint;
    unk19: number;
    targetObjectId: bigint;
    skillLevel: number;
    chainSkillEffect: number;
    unk23: number;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    unk0: number;
    unk1: number;
    unk2: number;
    struct_331?: Buffer;
    skillId: number;
    unk6: number;
    unk7: number;
    unk8: number;
    unk9: number;
    skillEffect: number;
    position: Vector3F;
    objectId: bigint;
    ownerId: bigint;
};

type PKTNewTrap = {
    unk0: number;
    trapData: TrapData;
    unk2: number;
};

type PKTParalyzationStateNotify = {
    paralyzationPoint: number;
    objectId: bigint;
    hitCheckTime: number;
    paralyzationMaxPoint: number;
    decreasePoint: number;
    noHitCheckTime: number;
    enable: boolean;
};

type PartyMemberData = {
    unk0: number;
    unk1: number;
    unk2: number;
    characterId: bigint;
    worldId: number;
    unk5: number;
    partyMemberNumber: number;
    name: string;
    zoneInstId: bigint;
    gearLevel: number;
    characterLevel: number;
    position: Vector3F;
    transitIndex: number;
    zoneId: number;
    unk14: number;
    curHp: bigint;
    maxHp: bigint;
    auths: number;
    unk18: number;
    classId: number;
};

type PKTPartyInfo = {
    memberDatas: PartyMemberData[];
    raidInstanceId: number;
    partyType: number;
    lootGrade: number;
    partyLootType: number;
    partyInstanceId: number;
};

type PKTPartyLeaveResult = {
    partyInstanceId: number;
    name: string;
    partyLeaveType: number;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    unk0_m: number;
    passiveStatusEffectList: number[];
    objectId: bigint;
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    objectId: bigint;
};

type PKTPartyStatusEffectAddNotify = {
    unk0: number;
    unk1: bigint;
    statusEffectDatas: StatusEffectData[];
    characterId: bigint;
    playerIdOnRefresh: bigint;
};

type PKTPartyStatusEffectRemoveNotify = {
    unk0: bigint;
    reason: number;
    statusEffectIds: number[];
    characterId: bigint;
};

type PKTPartyStatusEffectResultNotify = {
    partyInstanceId: number;
    raidInstanceId: number;
    characterId: bigint;
};

type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};

type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};

type PKTRaidBegin = {
    totalTime: bigint;
    unk11_m: boolean;
    unk0_m: boolean;
    initBraveHeartCount: number;
    unk4_m: bigint;
    braveHeartCount: number;
    raidResult: number;
    unk1_m: boolean;
    raidId: number;
    bossKillDataList: BossKillData[];
    unk5_m: bigint;
    endTick: bigint;
    startTick: bigint;
    unk6_m: bigint;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    struct_48: {
        unk1_0_0: bigint;
        struct_518: Buffer;
        unk1_0_2: number;
        unk1_0_3: bigint;
    }[];
    unk1: bigint;
    unk2: number;
    unk3: number;
    unk4: bigint;
    unk5: bigint;
    unk6: number;
    unk7: bigint;
};

type UnpublishObject = {
    unpublishReason: number;
    objectId: bigint;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};

type PKTSkillCastNotify = {
    caster: bigint;
    skillLevel: number;
    skillId: number;
};

type SkillDamageEvent = {
    damageAttr?: number;
    curHp: bigint;
    unk3_m: number;
    modifier: number;
    damageType: number;
    targetId: bigint;
    damage: bigint;
    maxHp: bigint;
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

type SkillDamageAbnormalMoveEvent = {
    position: Vector3F;
    unk2_m: bigint;
    unk4_m: number;
    destination: Vector3F;
    skillDamageEvent: SkillDamageEvent;
    unk1_m: number;
    unk3_m: number;
    skillMoveOptionData: SkillMoveOptionData;
    unk8_m: number;
};

type PKTSkillDamageAbnormalMoveNotify = {
    sourceId: bigint;
    skillId: number;
    unk2_m: number;
    skillEffectId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    unk1_m: number;
};

type PKTSkillDamageNotify = {
    skillId: number;
    sourceId: bigint;
    skillLevel: number;
    skillEffectId: number;
    skillDamageEvents: SkillDamageEvent[];
};

type PKTSkillStageNotify = {
    stage: number;
    sourceId: bigint;
    skillId: number;
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
    aimTargetPosition: Vector3F;
    skillOptionData: SkillOptionData;
    sourceId: bigint;
    skillId: number;
    curPosition: Vector3F;
    newDirectionYaw: Angle;
    newPosition: Vector3F;
    pitchRotation?: Angle;
    curDirectionYaw: Angle;
    aiStateId?: number;
};

type PKTStatChangeOriginNotify = {
    objectId: bigint;
    unk1: number;
    unk3_0?: number;
    unk4: {
        statType: number;
        value: bigint;
    }[];
    statPairChangedList: {
        statType: number;
        value: bigint;
    }[];
};

type PKTStatusEffectAddNotify = {
    objectId: bigint;
    unk1: bigint;
    statusEffectData: StatusEffectData;
    unk4_0?: bigint;
    new: boolean;
};

type PKTStatusEffectRemoveNotify = {
    reason: number;
    objectId: bigint;
    statusEffectIds: number[];
};

type PKTStatusEffectDurationNotify = {
    effectInstanceId: number;
    targetId: bigint;
    expirationTick: bigint;
};

type PKTStatusEffectSyncDataNotify = {
    objectId: bigint;
    characterId: bigint;
    effectInstanceId: number;
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
    involvedPCs: bigint[];
    triggerId: number;
    triggerSignalType: number;
    sourceId: bigint;
};

type PKTTroopMemberUpdateMinNotify = {
    statusEffectDatas: StatusEffectData[];
    maxHp: bigint;
    curHp: bigint;
    characterId: bigint;
    position: bigint;
    unk0_m: number;
};

type PKTIdentityGaugeChangeNotify = {
    playerId: bigint;
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
};

type PKTZoneMemberLoadStatusNotify = {
    zoneInstId: bigint;
    loadComplete: boolean;
    zoneId: number;
    completeMembers: bigint[];
    firstPCEnterTick: bigint;
    totalMembers: bigint[];
    zoneLevel: number;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    stackCount: number;
    id: number;
    instanceId: number;
    target: number;
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
