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
    level: number;
    featureType: number;
};

type PKTActiveAbilityNotify = {
    objectId: bigint;
    activeAbilityList: ActiveAbility[];
};

type PKTAddonSkillFeatureChangeNotify = {
    objectId: bigint;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    addonFeatureIdList: Buffer;
};

type PKTAuthTokenResult = {
    unk1_m: Buffer;
    unk1: number;
};

type PKTBlockSkillStateNotify = {
    paralyzationPoint: number;
    type: number;
    paralyzationMaxPoint: number;
    objectId: bigint;
};

type PKTCounterAttackNotify = {
    type: number;
    sourceId: bigint;
    targetId: bigint;
};

type PKTDeathNotify = {
    sourceId: bigint;
    unk1: number;
    unk2: number;
    unk4_0?: number;
    unk5: number;
    targetId: bigint;
    unk8_0?: number;
    unk9: number;
    unk10: bigint;
    unk12_0?: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    level: number;
    id: number;
    unk3_0?: number;
    itemTint: Buffer;
    expireTime: LostArkDateTime;
    slot: number;
};

type PKTEquipChangeNotify = {
    unk0: number;
    unk1: number;
    objectId: bigint;
    equipItemDataList: EquipItemData[];
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
    lostArkDateTime: LostArkDateTime;
    unk1: bigint;
    unk2: number;
    unk3: number;
    struct_591: string;
    playerId: bigint;
    unk6: number;
    struct_32: {
        struct_574: string;
        versionString: string;
        struct_591: string;
    }[];
};

type PeriodUpdateStatData = {
    unk0: number;
    unk1: bigint;
    unk2: number;
    unk3: bigint;
    unk4: number;
    unk5: bigint;
    unk6: number;
};

type StatusEffectData = {
    struct_441: Buffer;
    endTick: bigint;
    statusEffectId: number;
    unk4_0?: bigint;
    occurTime: LostArkDateTime;
    value?: Buffer;
    effectInstanceId: number;
    stackCount: number;
    totalTime: number;
    sourceId: bigint;
    skillLevel: number;
};

type PKTInitPC = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: bigint;
    unk6: number;
    unk7: number;
    unk8: bigint;
    playerId: bigint;
    struct_363: string;
    unk11: number;
    unk12: Buffer;
    unk13: number;
    struct_107: Buffer;
    unk15: number;
    classId: number;
    unk17: number;
    unk18: number;
    name: string;
    unk20: number;
    unk21: number;
    unk22: bigint;
    unk24_0?: number;
    unk25: number;
    level: number;
    unk27: number;
    unk28: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk30: number;
    statusEffectDatas: StatusEffectData[];
    unk32: number;
    unk33: number;
    unk34: number;
    unk35: number;
    unk36: number;
    unk37: number;
    unk38: number;
    struct_339: Buffer;
    unk40: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk42: number;
    gearLevel: number;
    unk44: bigint;
    unk45: number;
    unk46: number;
    unk47: number;
    unk48: number;
    characterId: bigint;
    unk50: number;
    unk51: number;
    unk52: bigint;
    struct_225: Buffer;
    unk54: number;
    unk55: Buffer;
    unk56: number;
    unk57: Buffer;
};

type Struct_147 = {
    unk1_0?: Buffer;
};

type Struct_655 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    struct_147: Struct_147;
    struct_148: Buffer;
    unk7: number;
};

type Struct_662 = {
    struct_149: Buffer;
    unk1: number;
    unk2: number;
    struct_236: Buffer;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
    struct_388: Buffer;
    unk9: number;
    unk10: bigint;
    struct_234: Struct_655[];
    unk12: number;
    struct_258: Buffer;
};

type Struct_746 = {
    unk0: number;
    unk1: Buffer;
    struct_101: Buffer;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_786 = {
    unk0: Buffer;
    struct_746?: Struct_746;
    unk3: number;
    unk4: Buffer;
};

type Struct_661 = {
    unk0: number;
    unk1: number;
    unk2: number;
    struct_192?: Buffer;
    unk1_1?: number;
    unk1_2?: number;
    struct_238: Buffer;
    struct_434: Buffer;
    unk7_0?: Buffer;
    struct_229?: Buffer;
    itemTint: Buffer;
    unk11: number;
    struct_269: Buffer;
    struct_786?: Struct_786;
    unk15: number;
    struct_232: Buffer;
    unk17: number;
    unk18: number;
};

type BossKillData = {
    isDead: boolean;
    npcId: number;
};

type Struct_606 = {
    bossKillDataList: BossKillData[];
    unk1: number;
    unk2: number;
    unk3: number;
    struct_2: {
        struct_522: Buffer;
        unk1_0_1: number;
    }[];
};

type Struct_654 = {
    struct_232: Buffer;
    unk1: number;
    unk2: number;
    struct_233: Buffer;
    unk4: number;
    struct_24: {
        struct_231: string;
        unk1_0_1: number;
        unk1_0_2: number;
    }[];
};

type Struct_561 = {
    struct_662?: Struct_662;
    struct_136?: Buffer;
    struct_3?: {
        struct_522: Buffer;
        unk1_0_1: number;
        unk1_0_2: number;
        unk1_0_3: number;
    }[];
    unk2_2?: number;
    unk3_0?: Buffer;
    unk4_0?: Buffer;
    unk4_1?: Buffer;
    unk4_2?: number;
    struct_661?: Struct_661;
    struct_606?: Struct_606;
    unk7_0?: Buffer;
    struct_654?: Struct_654;
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
    struct_561?: Struct_561;
    unk1_15?: number;
};

type PKTInitItem = {
    storageType: number;
    itemDataList: ItemData[];
};

type Struct_751 = {
    unk0: number;
    unk2_0?: number;
    unk4_0?: Buffer;
    unk5: number;
    unk6: number;
};

type PKTInitLocal = {
    unk1_0?: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    abilityDataList: AbilityData[];
    unk4: number;
    unk5: number;
    unk6: bigint;
    struct_225: Buffer;
    addonFeatureIdList: Buffer;
    statusEffectDatas: StatusEffectData[];
    unk10: number;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    struct_339: Buffer;
    unk13: bigint;
    struct_139: Buffer;
    unk15: number;
    struct_419: Struct_751[];
};

type PKTMigrationExecute = {
    account_CharacterId1: bigint;
    account_CharacterId2: bigint;
    serverAddr: string;
    unk3: number;
};

type Struct_730 = {
    unk0: number;
    lookData: Buffer;
    lostArkString: string;
    unk3: number;
    unk4: bigint;
    unk5: bigint;
    unk6: number;
    equipItemDataList: EquipItemData[];
    unk8: number;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    level: number;
    struct_270?: Buffer;
    unk4_0?: number;
    unk5: number;
    directionYaw: Angle;
    unk8_0?: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk11_0?: number;
    position: Vector3F;
    unk14_0?: number;
    balanceLevel?: number;
    unk18_0?: bigint;
    unk19: number;
    transitIndex?: number;
    unk22: number;
    unk23: number;
    unk25_0?: number;
    typeId: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    statusEffectDatas: StatusEffectData[];
    unk30_0?: number;
    unk32_0?: number;
    objectId: bigint;
    unk35_0?: number;
    unk37_0?: number;
    unk38: number;
    spawnIndex: number;
    struct_730?: Struct_730;
    unk43_0?: number;
    unk45_0?: number;
    struct_335?: Buffer;
    unk49_0?: number;
    unk50: number;
};

type PKTNewNpc = {
    unk1_0?: bigint;
    unk2: number;
    npcStruct: NpcData;
    unk1_0_0?: string;
    unk1_1?: string;
    unk6_0?: number;
};

type PKTNewNpcSummon = {
    publishReason: number;
    ownerId: bigint;
    npcData: NpcData;
};

type PCStruct = {
    statusEffectDatas: StatusEffectData[];
    unk1: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk29_m: number;
    firstHonorTitleId: number;
    guildName: string;
    unk7_m: number;
    guildId: bigint;
    unk17_m: number;
    classId: number;
    equipLifeToolDataList: EquipItemData[];
    heading: Angle;
    equipItemDataList: EquipItemData[];
    unk1_m: number;
    petId: number;
    playerId: bigint;
    unk16: number;
    unk17: number;
    unk0_m: Buffer;
    name: string;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    lookData: Buffer;
    rvRLevel: number;
    avgItemLevel: number;
    addonFeatureIdList: Buffer;
    unk23_m: number;
    unk2_m: number;
    maxItemLevel: number;
    secondHonorTitleId: number;
    unk29: bigint;
    unk4_m: number;
    grabbedData?: Buffer;
    unk33: number;
    position: Vector3F;
    unk35: number;
    unk5_m: number;
    unk25_m: number;
    level: number;
    characterId: bigint;
    unk32_m: number;
    unk45_m: number;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk43: number;
    avatarHide: number;
    worldId: number;
    identityData: Buffer;
};

type TrackMoveInfo = {
    unk0: number;
    unk1: Buffer;
    unk3_0?: Buffer;
    unk4: number;
};

type PKTNewPC = {
    unk0_m: number;
    unk2_m: number;
    pcStruct: PCStruct;
    unk5_0_m?: Buffer;
    unk4_0_m?: Buffer;
    itemTint?: Buffer;
    unk1_1?: bigint;
    unk1_2?: number;
    struct_63?: {
        unk1_0_0: bigint;
        unk1_0_1: number;
        itemTint: Buffer;
    }[];
    unk3_0_m?: number;
    trackMoveInfo?: TrackMoveInfo;
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
    unk0: number;
    skillId: number;
    unk2: number;
    struct_335?: Buffer;
    unk5: number;
    unk6: number;
    skillEffect: number;
    tripodIndex: TripodIndex;
    unk9: number;
    chainSkillEffect: number;
    unk12_0?: bigint;
    unk14_0?: number;
    unk15: number;
    targetObjectId: bigint;
    unk17: bigint;
    tripodLevel: TripodLevel;
    unk19: number;
    skillLevel: number;
    projectileId: bigint;
    unk22: bigint;
    ownerId: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    skillEffect: number;
    skillId: number;
    position: Vector3F;
    ownerId: bigint;
    unk4: number;
    unk5: number;
    unk6: number;
    struct_335?: Buffer;
    unk9: number;
    unk10: number;
    objectId: bigint;
    unk12: number;
    unk13: number;
};

type PKTNewTrap = {
    unk0: number;
    unk1: number;
    trapData: TrapData;
};

type PKTParalyzationStateNotify = {
    hitCheckTime: number;
    enable: boolean;
    objectId: bigint;
    noHitCheckTime: number;
    paralyzationMaxPoint: number;
    paralyzationPoint: number;
    decreasePoint: number;
};

type PartyMemberData = {
    position: Vector3F;
    characterLevel: number;
    zoneId: number;
    unk3: number;
    name: string;
    maxHp: bigint;
    auths: number;
    partyMemberNumber: number;
    gearLevel: number;
    unk9: number;
    zoneInstId: bigint;
    unk11: number;
    classId: number;
    characterId: bigint;
    worldId: number;
    unk15: number;
    unk16: number;
    curHp: bigint;
    transitIndex: number;
    unk19: number;
};

type PKTPartyInfo = {
    lootGrade: number;
    partyLootType: number;
    memberDatas: PartyMemberData[];
    partyType: number;
    raidInstanceId: number;
    partyInstanceId: number;
};

type PKTPartyLeaveResult = {
    name: string;
    partyInstanceId: number;
    partyLeaveType: number;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    objectId: bigint;
    passiveStatusEffectList: number[];
    unk0_m: number;
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    objectId: bigint;
    passiveStatusEffectList: number[];
};

type PKTPartyStatusEffectAddNotify = {
    statusEffectDatas: StatusEffectData[];
    unk1: bigint;
    characterId: bigint;
    unk3: number;
    playerIdOnRefresh: bigint;
};

type PKTPartyStatusEffectRemoveNotify = {
    unk0: bigint;
    statusEffectIds: number[];
    reason: number;
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
    unk5_m: bigint;
    unk4_m: bigint;
    unk6_m: bigint;
    totalTime: bigint;
    bossKillDataList: BossKillData[];
    startTick: bigint;
    raidResult: number;
    endTick: bigint;
    unk0_m: boolean;
    braveHeartCount: number;
    unk1_m: boolean;
    initBraveHeartCount: number;
    unk11_m: boolean;
    raidId: number;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: number;
    struct_53: {
        unk1_0_0: number;
        struct_528: Buffer;
        unk1_0_2: bigint;
        unk1_0_3: bigint;
    }[];
    unk2: number;
    unk3: number;
    unk4: bigint;
    unk5: bigint;
    unk6: bigint;
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
    skillId: number;
    skillLevel: number;
};

type SkillDamageEvent = {
    damage: bigint;
    maxHp: bigint;
    modifier: number;
    curHp: bigint;
    unk3_m: number;
    targetId: bigint;
    damageType: number;
    damageAttr?: number;
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
    unk8_m: number;
    unk3_m: number;
    destination: Vector3F;
    unk1_m: number;
    skillDamageEvent: SkillDamageEvent;
    position: Vector3F;
    skillMoveOptionData: SkillMoveOptionData;
    unk2_m: bigint;
    unk4_m: number;
};

type PKTSkillDamageAbnormalMoveNotify = {
    unk1_m: number;
    sourceId: bigint;
    skillEffectId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    unk2_m: number;
    skillId: number;
};

type PKTSkillDamageNotify = {
    skillDamageEvents: SkillDamageEvent[];
    unk2_0?: number;
    skillEffectId?: number;
    sourceId: bigint;
    skillId: number;
    skillLevel: number;
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
    unk1_m?: number;
    aiStateId?: number;
    pitchRotation?: Angle;
    newDirectionYaw: Angle;
    sourceId: bigint;
    newPosition: Vector3F;
    skillOptionData: SkillOptionData;
    aimTargetPosition: Vector3F;
    curDirectionYaw: Angle;
    curPosition: Vector3F;
    skillId: number;
    skillLevel: number;
};

type PKTStatChangeOriginNotify = {
    statPairChangedList: {
        statType: number;
        value: bigint;
    }[];
    unk1: {
        statType: number;
        value: bigint;
    }[];
    unk2: number;
    objectId: bigint;
    unk5_0?: number;
};

type PKTStatusEffectAddNotify = {
    statusEffectData: StatusEffectData;
    objectId: bigint;
    unk3_0?: bigint;
    new: boolean;
    unk5: bigint;
};

type PKTStatusEffectRemoveNotify = {
    reason: number;
    objectId: bigint;
    statusEffectIds: number[];
};

type PKTStatusEffectDurationNotify = {
    targetId: bigint;
    expirationTick: bigint;
    effectInstanceId: number;
};

type PKTStatusEffectSyncDataNotify = {
    characterId: bigint;
    objectId: bigint;
    value: number;
    effectInstanceId: number;
};

type PKTTriggerBossBattleStatus = {
    triggerId: number;
    step: number;
    unk2_m: boolean;
};

type PKTTriggerFinishNotify = {
    triggerId: number;
    unk0_m: number;
    involvedPCs: bigint[];
    packetResultCode: number;
};

type PKTTriggerStartNotify = {
    involvedPCs: bigint[];
    sourceId: bigint;
    triggerSignalType: number;
    triggerId: number;
};

type PKTTroopMemberUpdateMinNotify = {
    maxHp: bigint;
    characterId: bigint;
    curHp: bigint;
    statusEffectDatas: StatusEffectData[];
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
    loadComplete: boolean;
    completeMembers: bigint[];
    firstPCEnterTick: bigint;
    totalMembers: bigint[];
    zoneInstId: bigint;
    zoneId: number;
    zoneLevel: number;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    stackCount: number;
    target: number;
    instanceId: number;
    id: number;
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
