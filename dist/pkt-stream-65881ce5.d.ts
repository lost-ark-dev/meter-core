import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from './decompressor.js';

type AbilityData = {
    id: number;
    points: number;
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
    objectId: bigint;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    addonFeatureIdList: Buffer;
};

type PKTAuthTokenResult = {
    packetResultCode: number;
    unk1_m: Buffer;
};

type PKTBlockSkillStateNotify = {
    paralyzationPoint: number;
    type: number;
    paralyzationMaxPoint: number;
    objectId: bigint;
};

type PKTCounterAttackNotify = {
    targetId: bigint;
    type: number;
    sourceId: bigint;
};

type PKTDeathNotify = {
    unk0: number;
    unk1: number;
    unk2: bigint;
    unk3: number;
    unk5_0?: number;
    unk6: number;
    targetId: bigint;
    unk9_0?: number;
    sourceId: bigint;
    unk12_0?: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    id: number;
    itemTint: Buffer;
    unk3_0?: number;
    slot: number;
    level: number;
    expireTime: LostArkDateTime;
};

type PKTEquipChangeNotify = {
    equipItemDataList: EquipItemData[];
    objectId: bigint;
    unk2: number;
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
    struct_134: Buffer;
};

type PKTInitEnv = {
    unk0: number;
    struct_572: string;
    playerId: bigint;
    unk3: number;
    struct_29: {
        struct_556: string;
        versionString: string;
        struct_572: string;
    }[];
    unk5: bigint;
    lostArkDateTime: LostArkDateTime;
    unk7: number;
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

type StatusEffectData = {
    occurTime: LostArkDateTime;
    statusEffectId: number;
    struct_436: Buffer;
    sourceId: bigint;
    value?: Buffer;
    stackCount: number;
    effectInstanceId: number;
    endTick: bigint;
    unk10_0?: bigint;
    skillLevel: number;
    totalTime: number;
};

type PKTInitPC = {
    unk0: number;
    unk1: number;
    unk2: Buffer;
    unk3: number;
    struct_336: Buffer;
    unk5: number;
    struct_360: string;
    unk7: number;
    name: string;
    unk9: number;
    characterId: bigint;
    unk11: number;
    unk12: number;
    unk13: number;
    unk14: number;
    unk15: number;
    unk16: number;
    level: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    statusEffectDatas: StatusEffectData[];
    unk20: number;
    unk21: number;
    classId: number;
    struct_102: Buffer;
    unk24: bigint;
    unk25: number;
    unk26: number;
    unk27: number;
    unk28: number;
    unk29: number;
    unk30: number;
    unk31: number;
    unk32: number;
    unk33: number;
    unk34: number;
    playerId: bigint;
    unk36: number;
    struct_222: Buffer;
    unk38: bigint;
    unk39: number;
    unk40: bigint;
    unk41: number;
    unk42: Buffer;
    unk43: number;
    unk44: number;
    gearLevel: number;
    unk46: number;
    unk47: number;
    unk48: number;
    unk50_0?: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk52: number;
    unk53: number;
    unk54: number;
    unk55: bigint;
    unk56: Buffer;
    unk57: bigint;
};

type Struct_141 = {
    unk1_0?: Buffer;
};

type Struct_635 = {
    unk0: number;
    unk1: number;
    unk2: number;
    struct_141: Struct_141;
    struct_142: Buffer;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_641 = {
    struct_386: Buffer;
    unk1: bigint;
    unk2: number;
    unk3: number;
    unk4: number;
    struct_255: Buffer;
    unk6: number;
    struct_232: Struct_635[];
    unk8: number;
    unk9: number;
    struct_296: Buffer;
    struct_143: Buffer;
    unk12: number;
    unk13: number;
};

type Struct_640 = {
    struct_482: Buffer;
    struct_268: Buffer;
    unk2: number;
    unk3: number;
    unk4: number;
    itemTint: Buffer;
    unk6: number;
    struct_189?: Buffer;
    unk1_1?: number;
    unk1_2?: number;
    unk8: number;
    unk9: number;
    struct_228?: Buffer;
    unk12: number;
    struct_266: Buffer;
    struct_431: Buffer;
    unk16_0?: Buffer;
};

type BossKillData = {
    npcId: number;
    isDead: boolean;
};

type Struct_587 = {
    unk0: number;
    bossKillDataList: BossKillData[];
    struct_0: {
        unk1_0_0: number;
        struct_509: Buffer;
    }[];
    unk3: number;
    unk4: number;
};

type Struct_634 = {
    unk0: number;
    struct_482: Buffer;
    unk2: number;
    struct_22: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_230: string;
    }[];
    struct_231: Buffer;
    unk5: number;
};

type Struct_543 = {
    struct_641?: Struct_641;
    struct_1?: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_509: Buffer;
        unk1_0_3: number;
    }[];
    unk2_1?: number;
    struct_131?: Buffer;
    unk3_0?: Buffer;
    unk4_0?: number;
    unk4_1?: Buffer;
    unk4_2?: Buffer;
    struct_640?: Struct_640;
    struct_587?: Struct_587;
    unk7_0?: Buffer;
    struct_634?: Struct_634;
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
    struct_543?: Struct_543;
    unk1_15?: number;
};

type PKTInitItem = {
    itemDataList: ItemData[];
    storageType: number;
};

type Struct_730 = {
    unk1_0?: Buffer;
    unk2: number;
    unk4_0?: number;
    unk5: number;
    unk6: number;
};

type PKTInitLocal = {
    unk0: bigint;
    addonFeatureIdList: Buffer;
    statusEffectDatas: StatusEffectData[];
    unk3: number;
    struct_336: Buffer;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    struct_222: Buffer;
    unk7: bigint;
    unk8: number;
    unk9: number;
    unk11_0?: number;
    abilityDataList: AbilityData[];
    struct_416: Struct_730[];
    unk14: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    struct_134: Buffer;
};

type PKTMigrationExecute = {
    serverAddr: string;
    account_CharacterId1: bigint;
    unk2: number;
    account_CharacterId2: bigint;
};

type Struct_710 = {
    unk0: number;
    lostArkString: string;
    unk2: bigint;
    unk3: number;
    equipItemDataList: EquipItemData[];
    unk5: number;
    lookData: Buffer;
    unk7: number;
};

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type Angle = number;

type NpcData = {
    periodUpdateStatDataList: PeriodUpdateStatData[];
    position: Vector3F;
    unk3_0?: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    directionYaw: Angle;
    transitIndex?: number;
    level: number;
    statusEffectDatas: StatusEffectData[];
    unk11_0?: number;
    unk13_0?: number;
    balanceLevel?: number;
    struct_332?: Buffer;
    unk19_0?: number;
    unk20: number;
    unk21: number;
    unk23_0?: number;
    objectId: bigint;
    unk26_0?: number;
    unk27: number;
    unk29_0?: number;
    unk31_0?: number;
    struct_710?: Struct_710;
    unk34: number;
    struct_267?: Buffer;
    unk38_0?: number;
    unk40_0?: number;
    unk41: number;
    spawnIndex: number;
    unk44_0?: bigint;
    unk46_0?: number;
    unk47: number;
    typeId: number;
    unk50_0?: number;
};

type PKTNewNpc = {
    unk1_0?: string;
    unk1_1?: string;
    npcStruct: NpcData;
    unk3_0?: number;
    unk4: number;
    unk6_0?: bigint;
};

type PKTNewNpcSummon = {
    npcData: NpcData;
    ownerId: bigint;
    publishReason: number;
};

type PCStruct = {
    identityData: Buffer;
    characterId: bigint;
    unk28_m: number;
    unk45_m: number;
    unk1_m: number;
    playerId: bigint;
    unk29_m: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    level: number;
    heading: Angle;
    name: string;
    position: Vector3F;
    petId: number;
    unk13: number;
    avatarHide: number;
    unk15: number;
    unk16: number;
    unk17_m: number;
    guildName: string;
    addonFeatureIdList: Buffer;
    maxItemLevel: number;
    secondHonorTitleId: number;
    worldId: number;
    unk32_m: number;
    statusEffectDatas: StatusEffectData[];
    avgItemLevel: number;
    unk23_m: number;
    unk2_m: number;
    unk0_m: Buffer;
    unk25_m: number;
    unk5_m: number;
    classId: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    unk33: number;
    lookData: Buffer;
    firstHonorTitleId: number;
    unk7_m: number;
    unk15_m: number;
    equipLifeToolDataList: EquipItemData[];
    rvRLevel: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    guildId: bigint;
    equipItemDataList: EquipItemData[];
    unk4_m: number;
    grabbedData?: Buffer;
};

type TrackMoveInfo = {
    unk1_0?: Buffer;
    unk2: number;
    unk3: number;
    unk4: Buffer;
};

type PKTNewPC = {
    unk4_0_m?: Buffer;
    unk0_m: number;
    unk2_m: number;
    unk5_0_m?: Buffer;
    pcStruct: PCStruct;
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
    unk2: bigint;
    chainSkillEffect: number;
    projectileId: bigint;
    unk5: number;
    unk6: bigint;
    unk7: number;
    unk8: number;
    tripodIndex: TripodIndex;
    skillLevel: number;
    skillId: number;
    targetObjectId: bigint;
    unk13: number;
    unk14: number;
    tripodLevel: TripodLevel;
    struct_332?: Buffer;
    ownerId: bigint;
    unk19: number;
    unk20: number;
    skillEffect: number;
    unk23_0?: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    objectId: bigint;
    skillId: number;
    unk2: number;
    position: Vector3F;
    struct_332?: Buffer;
    unk6: number;
    skillEffect: number;
    unk8: number;
    unk9: number;
    ownerId: bigint;
    unk11: number;
    unk12: number;
    unk13: number;
};

type PKTNewTrap = {
    trapData: TrapData;
    unk1: number;
    unk2: number;
};

type PKTParalyzationStateNotify = {
    noHitCheckTime: number;
    objectId: bigint;
    decreasePoint: number;
    enable: boolean;
    paralyzationMaxPoint: number;
    hitCheckTime: number;
    paralyzationPoint: number;
};

type PartyMemberData = {
    classId: number;
    unk1: number;
    worldId: number;
    partyMemberNumber: number;
    auths: number;
    gearLevel: number;
    zoneId: number;
    unk7: number;
    zoneInstId: bigint;
    unk9: number;
    characterId: bigint;
    curHp: bigint;
    characterLevel: number;
    transitIndex: number;
    unk14: number;
    name: string;
    unk16: number;
    maxHp: bigint;
    unk18: number;
    position: Vector3F;
};

type PKTPartyInfo = {
    memberDatas: PartyMemberData[];
    lootGrade: number;
    partyInstanceId: number;
    partyType: number;
    partyLootType: number;
    raidInstanceId: number;
};

type PKTPartyLeaveResult = {
    partyLeaveType: number;
    name: string;
    partyInstanceId: number;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    objectId: bigint;
    passiveStatusEffectList: number[];
    unk0_m: number;
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    objectId: bigint;
};

type PKTPartyStatusEffectAddNotify = {
    statusEffectDatas: StatusEffectData[];
    playerIdOnRefresh: bigint;
    unk2: number;
    characterId: bigint;
    unk4: bigint;
};

type PKTPartyStatusEffectRemoveNotify = {
    unk0: bigint;
    characterId: bigint;
    statusEffectIds: number[];
    reason: number;
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
    unk6_m: bigint;
    unk5_m: bigint;
    raidResult: number;
    initBraveHeartCount: number;
    totalTime: bigint;
    endTick: bigint;
    bossKillDataList: BossKillData[];
    unk11_m: boolean;
    unk4_m: bigint;
    braveHeartCount: number;
    unk1_m: boolean;
    raidId: number;
    unk0_m: boolean;
    startTick: bigint;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: number;
    unk1: number;
    struct_50: {
        struct_515: Buffer;
        unk1_0_1: number;
        unk1_0_2: bigint;
        unk1_0_3: bigint;
    }[];
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
    skillId: number;
    skillLevel: number;
    caster: bigint;
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
    damage: bigint;
    modifier: number;
    unk3_m: number;
    damageType: number;
    curHp: bigint;
    maxHp: bigint;
    damageAttr?: number;
};

type SkillDamageAbnormalMoveEvent = {
    unk2_m: bigint;
    unk4_m: number;
    skillMoveOptionData: SkillMoveOptionData;
    position: Vector3F;
    unk8_m: number;
    destination: Vector3F;
    skillDamageEvent: SkillDamageEvent;
    unk3_m: number;
    unk1_m: number;
};

type PKTSkillDamageAbnormalMoveNotify = {
    sourceId: bigint;
    skillId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    unk1_m: number;
    unk2_m: number;
    skillEffectId: number;
};

type PKTSkillDamageNotify = {
    skillDamageEvents: SkillDamageEvent[];
    skillId: number;
    skillLevel: number;
    sourceId: bigint;
    skillEffectId: number;
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
    skillId: number;
    unk1_m?: number;
    curDirectionYaw: Angle;
    curPosition: Vector3F;
    newDirectionYaw: Angle;
    aiStateId?: number;
    pitchRotation?: Angle;
    aimTargetPosition: Vector3F;
    sourceId: bigint;
    newPosition: Vector3F;
    skillOptionData: SkillOptionData;
    skillLevel: number;
};

type PKTStatChangeOriginNotify = {
    unk0: number;
    objectId: bigint;
    unk2: {
        value: bigint;
        statType: number;
    }[];
    unk4_0?: number;
    unk5: {
        value: bigint;
        statType: number;
    }[];
};

type PKTStatusEffectAddNotify = {
    unk0: bigint;
    statusEffectData: StatusEffectData;
    new: boolean;
    objectId: bigint;
    unk5_0?: bigint;
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
    value: number;
    characterId: bigint;
    effectInstanceId: number;
};

type PKTTriggerBossBattleStatus = {
    triggerId: number;
    unk2_m: boolean;
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
    triggerId: number;
    triggerSignalType: number;
};

type PKTTroopMemberUpdateMinNotify = {
    position: bigint;
    characterId: bigint;
    maxHp: bigint;
    statusEffectDatas: StatusEffectData[];
    curHp: bigint;
    unk0_m: number;
};

type PKTIdentityGaugeChangeNotify = {
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
    playerId: bigint;
};

type PKTZoneMemberLoadStatusNotify = {
    zoneLevel: number;
    zoneId: number;
    completeMembers: bigint[];
    zoneInstId: bigint;
    firstPCEnterTick: bigint;
    totalMembers: bigint[];
    loadComplete: boolean;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    instanceId: number;
    target: number;
    stackCount: number;
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
