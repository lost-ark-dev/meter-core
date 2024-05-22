import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from './decompressor.js';

type AbilityData = {
    id: number;
    level: number;
    points: number;
};

type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};

type ActiveAbility = {
    level: number;
    featureType: number;
};

type PKTActiveAbilityNotify = {
    activeAbilityList: ActiveAbility[];
    objectId: bigint;
};

type PKTAddonSkillFeatureChangeNotify = {
    objectId: bigint;
    addonFeatureIdList: Buffer;
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
    type: number;
    paralyzationPoint: number;
    paralyzationMaxPoint: number;
    objectId: bigint;
};

type PKTCounterAttackNotify = {
    targetId: bigint;
    sourceId: bigint;
    type: number;
};

type PKTDeathNotify = {
    durabilityDecrement: number;
    deathType?: number;
    sourceId: bigint;
    unk2_m: number;
    unk0_m: bigint;
    abnormalStatusType?: number;
    directionYaw: number;
    targetId: bigint;
    damageAttr?: number;
    effectId: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    itemTint: Buffer;
    slot: number;
    id: number;
    level: number;
    expireTime: LostArkDateTime;
    unk5: number;
    unk7_0?: number;
};

type PKTEquipChangeNotify = {
    equipItemDataList: EquipItemData[];
    unk1: number;
    unk3_0?: bigint;
    unk4: number;
    objectId: bigint;
};

type PKTEquipLifeToolChangeNotify = {
    objectId: bigint;
    equipLifeToolDataList: EquipItemData[];
};

type PKTIdentityStanceChangeNotify = {
    objectId: bigint;
    stance: number;
};

type PKTInitAbility = {
    struct_139: Buffer;
    abilityDataList: AbilityData[];
};

type PKTInitEnv = {
    struct_31: {
        struct_609: string;
        struct_592: string;
        versionString: string;
    }[];
    unk1: number;
    playerId: bigint;
    unk3: number;
    lostArkDateTime: LostArkDateTime;
    unk5: number;
    struct_609: string;
    unk7: bigint;
};

type StatusEffectData = {
    endTick: bigint;
    occurTime: LostArkDateTime;
    value?: Buffer;
    unk5_0?: bigint;
    effectInstanceId: number;
    stackCount: number;
    skillLevel: number;
    struct_454: Buffer;
    sourceId: bigint;
    totalTime: number;
    statusEffectId: number;
};

type PeriodUpdateStatData = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: bigint;
    unk4: bigint;
    unk5: bigint;
    unk6: number;
};

type PKTInitPC = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk4_0?: number;
    unk5: bigint;
    struct_342: string;
    unk7: number;
    unk8: number;
    unk9: number;
    statusEffectDatas: StatusEffectData[];
    unk11: Buffer;
    classId: number;
    unk13: number;
    unk14: number;
    characterId: bigint;
    level: number;
    unk17: number;
    struct_227: Buffer;
    unk19: bigint;
    unk20: number;
    unk21: bigint;
    unk22: number;
    unk23: Buffer;
    struct_348: Buffer;
    unk25: number;
    unk26: number;
    unk27: number;
    struct_108: Buffer;
    unk29: number;
    unk30: number;
    unk31: number;
    unk32: number;
    unk33: number;
    unk34: number;
    unk35: number;
    unk36: number;
    unk37: bigint;
    unk38: number;
    unk39: number;
    unk40: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    name: string;
    unk43: number;
    playerId: bigint;
    unk45: Buffer;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk47: number;
    gearLevel: number;
    unk49: number;
    unk50: number;
    unk51: bigint;
    unk52: number;
    unk53: number;
    unk54: number;
    unk55: bigint;
    unk56: number;
    unk57: number;
    unk58: number;
};

type Struct_147 = {
    unk1_0?: Buffer;
};

type Struct_674 = {
    unk0: number;
    struct_148: Buffer;
    struct_147: Struct_147;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_681 = {
    struct_149: Buffer;
    struct_262: Buffer;
    struct_403: Buffer;
    unk3: number;
    struct_238: Struct_674[];
    unk5: bigint;
    unk6: number;
    struct_302: Buffer;
    unk8: number;
    unk9: number;
    unk10: number;
    unk11: number;
    unk12: number;
    unk13: number;
};

type Struct_626 = {
    unk0: number;
    unk1: number;
    struct_151: Buffer;
    unk3: number;
    unk4: number;
};

type Struct_768 = {
    unk0: number;
    unk1: Buffer;
    struct_102: Buffer;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_809 = {
    struct_768?: Struct_768;
    unk2: Buffer;
    unk3: number;
    unk4: Buffer;
};

type Struct_680 = {
    struct_241: Buffer;
    unk2_0?: Buffer;
    unk3: number;
    struct_236: Buffer;
    unk1_0?: number;
    struct_195?: Buffer;
    unk1_2?: number;
    struct_626?: Struct_626;
    unk8: number;
    struct_233?: Buffer;
    unk11: number;
    unk12: number;
    struct_809?: Struct_809;
    unk15: number;
    struct_448: Buffer;
    unk17: number;
    struct_274: Buffer;
    unk19: number;
    itemTint: Buffer;
};

type BossKillData = {
    isDead: boolean;
    npcId: number;
};

type Struct_624 = {
    bossKillDataList: BossKillData[];
    unk1: number;
    unk2: number;
    struct_1: {
        struct_542: Buffer;
        unk1_0_1: number;
    }[];
    unk4: number;
};

type Struct_673 = {
    unk0: number;
    unk1: number;
    struct_237: Buffer;
    struct_236: Buffer;
    unk4: number;
    struct_23: {
        struct_235: string;
        unk1_0_1: number;
        unk1_0_2: number;
    }[];
};

type Struct_577 = {
    struct_681?: Struct_681;
    struct_136?: Buffer;
    struct_2?: {
        struct_542: Buffer;
        unk1_0_1: number;
        unk1_0_2: number;
        unk1_0_3: number;
    }[];
    unk2_2?: number;
    unk3_0?: Buffer;
    unk4_0?: number;
    unk4_1?: Buffer;
    unk4_2?: Buffer;
    struct_680?: Struct_680;
    struct_624?: Struct_624;
    unk7_0?: Buffer;
    struct_673?: Struct_673;
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
    struct_577?: Struct_577;
    unk1_15?: number;
};

type PKTInitItem = {
    itemDataList: ItemData[];
    storageType: number;
};

type Struct_773 = {
    unk0: number;
    unk1: number;
    unk3_0?: number;
    unk5_0?: Buffer;
    unk6: number;
};

type PKTInitLocal = {
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk1: number;
    unk2: number;
    addonFeatureIdList: Buffer;
    struct_227: Buffer;
    unk5: bigint;
    unk6: number;
    struct_432: Struct_773[];
    unk9_0?: number;
    abilityDataList: AbilityData[];
    unk11: bigint;
    struct_348: Buffer;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk14: number;
    struct_139: Buffer;
    statusEffectDatas: StatusEffectData[];
};

type PKTMigrationExecute = {
    unk0: number;
    account_CharacterId1: bigint;
    serverAddr: string;
    account_CharacterId2: bigint;
};

type Struct_752 = {
    equipItemDataList: EquipItemData[];
    unk1: bigint;
    unk2: number;
    unk3: number;
    unk4: bigint;
    lostArkString: string;
    unk6: number;
    lookData: Buffer;
    unk8: bigint;
    unk9: number;
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
    unk4: number;
    spawnIndex: number;
    typeId: number;
    unk8_0?: number;
    unk10_0?: number;
    struct_50?: {
        unk1_0_0: number;
        unk1_0_1: bigint;
        unk1_0_2: bigint;
        unk1_0_3: bigint;
    }[];
    statPair: {
        value: bigint;
        statType: number;
    }[];
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk15_0?: number;
    struct_752?: Struct_752;
    unk19_0?: number;
    unk20: number;
    unk21: number;
    unk22: number;
    directionYaw: Angle;
    struct_275?: Buffer;
    unk27_0?: number;
    unk29_0?: number;
    unk31_0?: number;
    unk33_0?: number;
    unk35_0?: number;
    unk36: number;
    unk37: number;
    level: number;
    transitIndex?: number;
    unk42_0?: number;
    statusEffectDatas: StatusEffectData[];
    unk45_0?: bigint;
    balanceLevel?: number;
    position: Vector3F;
    struct_343?: Buffer;
    objectId: bigint;
};

type PKTNewNpc = {
    unk0: number;
    unk2_0?: number;
    npcStruct: NpcData;
    unk5_0?: bigint;
    unk1_0?: string;
    unk1_1?: string;
};

type PKTNewNpcSummon = {
    npcData: NpcData;
    publishReason: number;
    ownerId: bigint;
};

type PCStruct = {
    unk0: bigint;
    unk45_m: number;
    equipItemDataList: EquipItemData[];
    maxItemLevel: number;
    playerId: bigint;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk5_m: number;
    unk32_m: number;
    unk17_m: number;
    heading: Angle;
    unk25_m: number;
    petId: number;
    firstHonorTitleId: number;
    equipLifeToolDataList: EquipItemData[];
    worldId: number;
    unk15: bigint;
    rvRLevel: number;
    guildName: string;
    unk1_m: number;
    unk23_m: number;
    classId: number;
    unk21: number;
    avgItemLevel: number;
    unk4_m: number;
    guildId: bigint;
    position: Vector3F;
    level: number;
    identityData: Buffer;
    unk29_m: number;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    name: string;
    unk0_m: Buffer;
    unk32: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    lookData: Buffer;
    grabbedData?: Buffer;
    unk2_m: number;
    statusEffectDatas: StatusEffectData[];
    characterId: bigint;
    avatarHide: number;
    unk41: number;
    unk42: number;
    addonFeatureIdList: Buffer;
    unk44: number;
    unk7_m: number;
    unk46: number;
    secondHonorTitleId: number;
};

type TrackMoveInfo = {
    unk0: number;
    unk1: Buffer;
    unk2: number;
    unk4_0?: Buffer;
};

type PKTNewPC = {
    unk3_0_m?: number;
    struct_63?: {
        unk1_0_0: number;
        itemTint: Buffer;
        unk1_0_2: bigint;
    }[];
    unk5_0_m?: Buffer;
    unk2_m: number;
    pcStruct: PCStruct;
    unk4_0_m?: Buffer;
    trackMoveInfo?: TrackMoveInfo;
    unk0_m: number;
    unk1_0?: bigint;
    itemTint?: Buffer;
    unk1_2?: number;
};

type TripodLevel = {
    first: number;
    second: number;
    third: number;
};

type TripodIndex = {
    first: number;
    second: number;
    third: number;
};

type ProjectileInfo = {
    unk0: number;
    skillId: number;
    struct_343?: Buffer;
    ownerId: bigint;
    projectileId: bigint;
    chainSkillEffect: number;
    unk7: number;
    unk8: number;
    unk9: number;
    tripodLevel: TripodLevel;
    unk12_0?: number;
    targetObjectId: bigint;
    unk14: number;
    unk15: bigint;
    skillEffect: number;
    unk17: bigint;
    unk18: number;
    skillLevel: number;
    unk21_0?: bigint;
    tripodIndex: TripodIndex;
    unk23: number;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    skillEffect: number;
    unk1: number;
    position: Vector3F;
    objectId: bigint;
    unk4: number;
    unk5: number;
    unk6: number;
    ownerId: bigint;
    unk8: number;
    unk9: number;
    skillId: number;
    unk11: number;
    struct_343?: Buffer;
};

type PKTNewTrap = {
    unk0: number;
    trapData: TrapData;
    unk2: number;
};

type PKTParalyzationStateNotify = {
    decreasePoint: number;
    enable: boolean;
    paralyzationPoint: number;
    noHitCheckTime: number;
    hitCheckTime: number;
    paralyzationMaxPoint: number;
    objectId: bigint;
};

type PartyMemberData = {
    gearLevel: number;
    classId: number;
    partyMemberNumber: number;
    unk3: number;
    unk4: number;
    position: Vector3F;
    zoneId: number;
    name: string;
    unk8: number;
    characterId: bigint;
    auths: number;
    maxHp: bigint;
    worldId: number;
    transitIndex: number;
    curHp: bigint;
    unk15: number;
    zoneInstId: bigint;
    unk17: number;
    characterLevel: number;
    unk19: number;
};

type PKTPartyInfo = {
    memberDatas: PartyMemberData[];
    partyInstanceId: number;
    partyLootType: number;
    partyType: number;
    lootGrade: number;
    raidInstanceId: number;
};

type PKTPartyLeaveResult = {
    name: string;
    partyLeaveType: number;
    partyInstanceId: number;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    unk0_m: number;
    objectId: bigint;
    passiveStatusEffectList: number[];
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    objectId: bigint;
    passiveStatusEffectList: number[];
};

type PKTPartyStatusEffectAddNotify = {
    unk0: bigint;
    statusEffectDatas: StatusEffectData[];
    playerIdOnRefresh: bigint;
    characterId: bigint;
    unk4: number;
};

type PKTPartyStatusEffectRemoveNotify = {
    characterId: bigint;
    unk1: bigint;
    reason: number;
    statusEffectIds: number[];
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
    endTick: bigint;
    unk6_m: bigint;
    bossKillDataList: BossKillData[];
    braveHeartCount: number;
    unk11_m: boolean;
    totalTime: bigint;
    raidId: number;
    unk5_m: bigint;
    unk4_m: bigint;
    unk0_m: boolean;
    unk1_m: boolean;
    initBraveHeartCount: number;
    startTick: bigint;
    raidResult: number;
};

type PKTRaidBossKillNotify = {
    typeId: number;
};

type PKTRaidResult = {
    unk0: number;
    unk1: bigint;
    unk2: bigint;
    unk3: bigint;
    raidResult: number;
    unk5: bigint;
    unk6: number;
    struct_54: {
        struct_540: Buffer;
        unk1_0_1: bigint;
        unk1_0_2: number;
        unk1_0_3: bigint;
    }[];
};

type UnpublishObject = {
    unpublishReason: number;
    objectId: bigint;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};

type PKTSkillCancelNotify = {
    newPosition: Vector3F;
    skillId: number;
    cancelReason: number;
    caster: bigint;
    newDirectionYaw: Angle;
};

type PKTSkillCastNotify = {
    skillLevel: number;
    caster: bigint;
    skillId: number;
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
    targetId: bigint;
    curHp: bigint;
    maxHp: bigint;
    damageAttr?: number;
    modifier: number;
    unk3_m: number;
    damage: bigint;
    damageType: number;
};

type SkillDamageAbnormalMoveEvent = {
    skillMoveOptionData: SkillMoveOptionData;
    unk3_m: number;
    unk1_m: number;
    position: Vector3F;
    skillDamageEvent: SkillDamageEvent;
    unk2_m: bigint;
    unk4_m: number;
    unk8_m: number;
    destination: Vector3F;
};

type PKTSkillDamageAbnormalMoveNotify = {
    skillEffectId: number;
    unk2_m: number;
    unk1_m: number;
    sourceId: bigint;
    skillId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
};

type PKTSkillDamageNotify = {
    skillEffectId?: number;
    sourceId: bigint;
    skillLevel: number;
    unk5_0?: number;
    skillId: number;
    skillDamageEvents: SkillDamageEvent[];
};

type PKTSkillStageNotify = {
    stage: number;
    skillId: number;
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
    aiStateId?: number;
    aimTargetPosition: Vector3F;
    skillId: number;
    curPosition: Vector3F;
    newPosition: Vector3F;
    pitchRotation?: Angle;
    skillLevel: number;
    curDirectionYaw: Angle;
    skillOptionData: SkillOptionData;
    newDirectionYaw: Angle;
    unk1_m?: number;
};

type PKTStatChangeOriginNotify = {
    unk0: number;
    unk2_0?: number;
    objectId: bigint;
    unk4: {
        value: bigint;
        statType: number;
    }[];
    unk5: {
        value: bigint;
        statType: number;
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
    targetId: bigint;
    expirationTick: bigint;
};

type PKTStatusEffectSyncDataNotify = {
    objectId: bigint;
    characterId: bigint;
    value: number;
    effectInstanceId: number;
};

type PKTTriggerBossBattleStatus = {
    unk2_m: boolean;
    triggerId: number;
    step: number;
};

type PKTTriggerFinishNotify = {
    involvedPCs: bigint[];
    triggerId: number;
    unk0_m: number;
    packetResultCode: number;
};

type PKTTriggerStartNotify = {
    involvedPCs: bigint[];
    sourceId: bigint;
    triggerSignalType: number;
    triggerId: number;
};

type PKTTroopMemberUpdateMinNotify = {
    unk0_m: number;
    position: bigint;
    statusEffectDatas: StatusEffectData[];
    characterId: bigint;
    maxHp: bigint;
    curHp: bigint;
};

type PKTIdentityGaugeChangeNotify = {
    playerId: bigint;
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
};

type PKTZoneMemberLoadStatusNotify = {
    firstPCEnterTick: bigint;
    completeMembers: bigint[];
    zoneInstId: bigint;
    zoneId: number;
    loadComplete: boolean;
    zoneLevel: number;
    totalMembers: bigint[];
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    target: number;
    id: number;
    instanceId: number;
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
