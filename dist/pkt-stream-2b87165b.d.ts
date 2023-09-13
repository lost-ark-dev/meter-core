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
    featureType: number;
    level: number;
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
    objectId: bigint;
    paralyzationPoint: number;
    type: number;
    paralyzationMaxPoint: number;
};

type PKTCounterAttackNotify = {
    type: number;
    sourceId: bigint;
    targetId: bigint;
};

type PKTDeathNotify = {
    unk0: number;
    unk1: number;
    targetId: bigint;
    unk4_0?: number;
    unk5: number;
    unk6: number;
    unk8_0?: number;
    unk10_0?: number;
    unk11: bigint;
    sourceId: bigint;
};

type LostArkDateTime = Date;

type EquipItemData = {
    expireTime: LostArkDateTime;
    unk2_0?: number;
    slot: number;
    itemTint: Buffer;
    id: number;
    level: number;
};

type PKTEquipChangeNotify = {
    objectId: bigint;
    unk1: number;
    unk2: number;
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
    unk0: number;
    unk1: bigint;
    lostArkDateTime: LostArkDateTime;
    struct_576: string;
    struct_30: {
        versionString: string;
        struct_560: string;
        struct_576: string;
    }[];
    unk5: number;
    playerId: bigint;
    unk7: number;
};

type PeriodUpdateStatData = {
    unk0: bigint;
    unk1: number;
    unk2: bigint;
    unk3: number;
    unk4: bigint;
    unk5: number;
    unk6: number;
};

type StatusEffectData = {
    skillLevel: number;
    struct_435: Buffer;
    effectInstanceId: number;
    value?: Buffer;
    occurTime: LostArkDateTime;
    sourceId: bigint;
    endTick: bigint;
    unk9_0?: bigint;
    totalTime: number;
    statusEffectId: number;
    stackCount: number;
};

type PKTInitPC = {
    unk0: number;
    unk1: number;
    struct_355: string;
    unk3: number;
    unk4: number;
    unk5: number;
    name: string;
    unk7: number;
    unk8: number;
    struct_103: Buffer;
    unk10: number;
    unk11: bigint;
    unk12: number;
    classId: number;
    unk14: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk16: bigint;
    unk17: number;
    unk18: Buffer;
    unk19: number;
    unk20: number;
    unk21: number;
    struct_217: Buffer;
    unk23: bigint;
    unk24: number;
    unk25: Buffer;
    unk26: number;
    unk28_0?: number;
    unk29: number;
    unk30: number;
    gearLevel: number;
    unk32: number;
    unk33: number;
    unk34: number;
    unk35: number;
    unk36: bigint;
    unk37: number;
    unk38: Buffer;
    statusEffectDatas: StatusEffectData[];
    playerId: bigint;
    unk41: number;
    unk42: number;
    unk43: number;
    characterId: bigint;
    unk45: number;
    struct_330: Buffer;
    unk47: number;
    level: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk50: number;
    unk51: number;
    unk52: bigint;
    unk53: number;
    unk54: number;
    unk55: number;
    unk56: number;
    unk57: number;
};

type Struct_138 = {
    unk1_0?: Buffer;
};

type Struct_639 = {
    unk0: number;
    unk1: number;
    unk2: number;
    struct_139: Buffer;
    struct_138: Struct_138;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_645 = {
    unk0: number;
    unk1: number;
    struct_252: Buffer;
    unk3: number;
    unk4: number;
    struct_228: Struct_639[];
    unk6: bigint;
    unk7: number;
    unk8: number;
    struct_140: Buffer;
    unk10: number;
    struct_382: Buffer;
    struct_230: Buffer;
    unk13: number;
};

type Struct_644 = {
    itemTint: Buffer;
    unk1: number;
    struct_232: Buffer;
    unk3: number;
    struct_225: Buffer;
    unk6_0?: Buffer;
    struct_430: Buffer;
    unk8: number;
    unk9: number;
    unk10: number;
    struct_185?: Buffer;
    unk1_1?: number;
    unk1_2?: number;
    unk12: number;
    struct_263: Buffer;
    struct_222?: Buffer;
    unk16: number;
};

type BossKillData = {
    npcId: number;
    isDead: boolean;
};

type Struct_591 = {
    unk0: number;
    bossKillDataList: BossKillData[];
    unk2: number;
    unk3: number;
    struct_1: {
        struct_512: Buffer;
        unk1_0_1: number;
    }[];
};

type Struct_638 = {
    unk0: number;
    struct_226: Buffer;
    unk2: number;
    struct_23: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_224: string;
    }[];
    unk4: number;
    struct_225: Buffer;
};

type Struct_547 = {
    struct_645?: Struct_645;
    unk2_0?: number;
    struct_130?: Buffer;
    struct_2?: {
        unk1_0_0: number;
        unk1_0_1: number;
        unk1_0_2: number;
        struct_512: Buffer;
    }[];
    unk3_0?: Buffer;
    unk4_0?: Buffer;
    unk4_1?: Buffer;
    unk4_2?: number;
    struct_644?: Struct_644;
    struct_591?: Struct_591;
    unk7_0?: Buffer;
    struct_638?: Struct_638;
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
    struct_547?: Struct_547;
    unk1_15?: number;
};

type PKTInitItem = {
    storageType: number;
    itemDataList: ItemData[];
};

type Struct_734 = {
    unk1_0?: Buffer;
    unk3_0?: number;
    unk4: number;
    unk5: number;
    unk6: number;
};

type PKTInitLocal = {
    statusEffectDatas: StatusEffectData[];
    unk2_0?: number;
    struct_132: Buffer;
    abilityDataList: AbilityData[];
    addonFeatureIdList: Buffer;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk7: number;
    unk8: bigint;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    struct_330: Buffer;
    unk11: number;
    unk12: number;
    struct_217: Buffer;
    unk14: bigint;
    unk15: number;
    struct_414: Struct_734[];
};

type PKTMigrationExecute = {
    account_CharacterId1: bigint;
    account_CharacterId2: bigint;
    unk2: number;
    serverAddr: string;
};

type Struct_714 = {
    lostArkString: string;
    unk1: bigint;
    lookData: Buffer;
    unk3: number;
    unk4: number;
    equipItemDataList: EquipItemData[];
    unk6: number;
    unk7: number;
};

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type Angle = number;

type NpcData = {
    struct_327?: Buffer;
    unk3_0?: number;
    statusEffectDatas: StatusEffectData[];
    unk5: number;
    unk7_0?: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk10_0?: number;
    level: number;
    unk13_0?: bigint;
    unk15_0?: number;
    unk17_0?: number;
    position: Vector3F;
    typeId: number;
    unk20: number;
    unk22_0?: number;
    unk24_0?: number;
    objectId: bigint;
    spawnIndex: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk29_0?: number;
    directionYaw: Angle;
    unk32_0?: number;
    unk33: number;
    unk35_0?: number;
    unk36: number;
    struct_264?: Buffer;
    struct_714?: Struct_714;
    unk41: number;
    transitIndex?: number;
    unk44: number;
    unk46_0?: number;
    balanceLevel?: number;
    unk50_0?: number;
};

type PKTNewNpc = {
    unk0: number;
    unk2_0?: bigint;
    npcStruct: NpcData;
    unk5_0?: number;
    unk1_0?: string;
    unk1_1?: string;
};

type PKTNewNpcSummon = {
    npcData: NpcData;
    ownerId: bigint;
    publishReason: number;
};

type PCStruct = {
    classId: number;
    unk7_m: number;
    unk29_m: number;
    guildId: bigint;
    lookData: Buffer;
    unk4_m: number;
    addonFeatureIdList: Buffer;
    statusEffectDatas: StatusEffectData[];
    unk8: number;
    maxItemLevel: number;
    name: string;
    identityData: Buffer;
    unk1_m: number;
    unk25_m: number;
    unk17_m: number;
    unk5_m: number;
    worldId: number;
    equipLifeToolDataList: EquipItemData[];
    unk18: number;
    unk15_m: number;
    petId: number;
    unk2_m: number;
    unk32_m: number;
    unk23: number;
    rvRLevel: number;
    secondHonorTitleId: number;
    playerId: bigint;
    characterId: bigint;
    grabbedData?: Buffer;
    avatarHide: number;
    unk0_m: Buffer;
    heading: Angle;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    level: number;
    firstHonorTitleId: number;
    unk28_m: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk38: number;
    equipItemDataList: EquipItemData[];
    periodUpdateStatDataList: PeriodUpdateStatData[];
    guildName: string;
    avgItemLevel: number;
    unk45_m: number;
    unk23_m: number;
    position: Vector3F;
};

type TrackMoveInfo = {
    unk1_0?: Buffer;
    unk2: number;
    unk3: Buffer;
    unk4: number;
};

type PKTNewPC = {
    pcStruct: PCStruct;
    unk4_0_m?: Buffer;
    unk5_0_m?: Buffer;
    trackMoveInfo?: TrackMoveInfo;
    unk2_m: number;
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
    unk0: number;
    struct_327?: Buffer;
    unk3: bigint;
    unk4: number;
    unk5: number;
    ownerId: bigint;
    unk7: number;
    unk8: number;
    unk9: number;
    tripodIndex: TripodIndex;
    tripodLevel: TripodLevel;
    unk13_0?: number;
    projectileId?: bigint;
    skillId: number;
    skillEffect: number;
    unk18: number;
    unk19: bigint;
    unk20: bigint;
    targetObjectId: bigint;
    chainSkillEffect: number;
    skillLevel: number;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    unk0: number;
    struct_327?: Buffer;
    skillId: number;
    unk4: number;
    unk5: number;
    position: Vector3F;
    ownerId: bigint;
    unk8: number;
    objectId: bigint;
    unk10: number;
    unk11: number;
    skillEffect: number;
    unk13: number;
};

type PKTNewTrap = {
    unk0: number;
    unk1: number;
    trapData: TrapData;
};

type PKTParalyzationStateNotify = {
    hitCheckTime: number;
    paralyzationPoint: number;
    decreasePoint: number;
    enable: boolean;
    paralyzationMaxPoint: number;
    noHitCheckTime: number;
    objectId: bigint;
};

type PartyMemberData = {
    partyMemberNumber: number;
    name: string;
    gearLevel: number;
    unk3: number;
    unk4: number;
    characterId: bigint;
    zoneInstId: bigint;
    unk7: number;
    zoneId: number;
    worldId: number;
    unk10: number;
    characterLevel: number;
    curHp: bigint;
    auths: number;
    transitIndex: number;
    classId: number;
    unk16: number;
    maxHp: bigint;
    position: Vector3F;
    unk19: number;
};

type PKTPartyInfo = {
    memberDatas: PartyMemberData[];
    raidInstanceId: number;
    partyLootType: number;
    partyType: number;
    partyInstanceId: number;
    lootGrade: number;
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
    objectId: bigint;
    passiveStatusEffectList: number[];
};

type PKTPartyStatusEffectAddNotify = {
    playerIdOnRefresh: bigint;
    unk1: bigint;
    unk2: number;
    characterId: bigint;
    statusEffectDatas: StatusEffectData[];
};

type PKTPartyStatusEffectRemoveNotify = {
    characterId: bigint;
    reason: number;
    statusEffectIds: number[];
    unk3: bigint;
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
    endTick: bigint;
    startTick: bigint;
    unk0_m: boolean;
    braveHeartCount: number;
    raidResult: number;
    totalTime: bigint;
    unk6_m: bigint;
    unk5_m: bigint;
    unk11_m: boolean;
    bossKillDataList: BossKillData[];
    unk1_m: boolean;
    unk4_m: bigint;
    initBraveHeartCount: number;
    raidId: number;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: number;
    unk1: bigint;
    unk2: bigint;
    unk3: number;
    unk4: bigint;
    struct_51: {
        struct_518: Buffer;
        unk1_0_1: number;
        unk1_0_2: bigint;
        unk1_0_3: bigint;
    }[];
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
    damage: bigint;
    damageAttr?: number;
    curHp: bigint;
    targetId: bigint;
    unk3_m: number;
    maxHp: bigint;
    damageType: number;
    modifier: number;
};

type SkillDamageAbnormalMoveEvent = {
    unk4_m: number;
    destination: Vector3F;
    unk8_m: number;
    unk3_m: number;
    skillMoveOptionData: SkillMoveOptionData;
    unk2_m: bigint;
    unk1_m: number;
    skillDamageEvent: SkillDamageEvent;
    position: Vector3F;
};

type PKTSkillDamageAbnormalMoveNotify = {
    skillEffectId: number;
    unk2_m: number;
    sourceId: bigint;
    unk1_m: number;
    skillId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
};

type PKTSkillDamageNotify = {
    sourceId: bigint;
    skillDamageEvents: SkillDamageEvent[];
    skillLevel: number;
    skillEffectId: number;
    skillId: number;
};

type PKTSkillStageNotify = {
    sourceId: bigint;
    stage: number;
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
    curDirectionYaw: Angle;
    skillId: number;
    curPosition: Vector3F;
    pitchRotation?: Angle;
    skillLevel: number;
    skillOptionData: SkillOptionData;
    newDirectionYaw: Angle;
    aiStateId?: number;
    newPosition: Vector3F;
    aimTargetPosition: Vector3F;
    sourceId: bigint;
    unk1_m?: number;
};

type PKTStatChangeOriginNotify = {
    statPairList: {
        statType: number;
        value: bigint;
    }[];
    unk1: number;
    unk3_0?: number;
    objectId: bigint;
    unk5: {
        statType: number;
        value: bigint;
    }[];
};

type PKTStatusEffectAddNotify = {
    new: boolean;
    statusEffectData: StatusEffectData;
    unk2: bigint;
    objectId: bigint;
    unk5_0?: bigint;
};

type PKTStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    reason: number;
    objectId: bigint;
};

type PKTStatusEffectDurationNotify = {
    targetId: bigint;
    expirationTick: bigint;
    effectInstanceId: number;
};

type PKTStatusEffectSyncDataNotify = {
    value: number;
    characterId: bigint;
    objectId: bigint;
    effectInstanceId: number;
};

type PKTTriggerBossBattleStatus = {
    triggerId: number;
    unk2_m: boolean;
    step: number;
};

type PKTTriggerFinishNotify = {
    packetResultCode: number;
    involvedPCs: bigint[];
    triggerId: number;
    unk0_m: number;
};

type PKTTriggerStartNotify = {
    involvedPCs: bigint[];
    triggerSignalType: number;
    sourceId: bigint;
    triggerId: number;
};

type PKTTroopMemberUpdateMinNotify = {
    curHp: bigint;
    characterId: bigint;
    statusEffectDatas: StatusEffectData[];
    unk0_m: number;
    position: bigint;
    maxHp: bigint;
};

type PKTIdentityGaugeChangeNotify = {
    playerId: bigint;
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
};

type PKTZoneMemberLoadStatusNotify = {
    completeMembers: bigint[];
    zoneInstId: bigint;
    loadComplete: boolean;
    zoneLevel: number;
    zoneId: number;
    totalMembers: bigint[];
    firstPCEnterTick: bigint;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    instanceId: number;
    id: number;
    stackCount: number;
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
