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
    paralyzationMaxPoint: number;
    objectId: bigint;
    paralyzationPoint: number;
    type: number;
};

type PKTCounterAttackNotify = {
    sourceId: bigint;
    type: number;
    targetId: bigint;
};

type PKTDeathNotify = {
    unk1_0?: number;
    unk3_0?: number;
    unk4: number;
    unk5: number;
    sourceId: bigint;
    targetId: bigint;
    unk8: number;
    unk9: bigint;
    unk10: number;
    unk12_0?: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    level: number;
    expireTime: LostArkDateTime;
    slot: number;
    itemTint: Buffer;
    unk5_0?: number;
    id: number;
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
    struct_129: Buffer;
    abilityDataList: AbilityData[];
};

type PKTInitEnv = {
    struct_573: string;
    struct_28: {
        struct_559: string;
        versionString: string;
        struct_573: string;
    }[];
    unk2: number;
    lostArkDateTime: LostArkDateTime;
    unk4: bigint;
    playerId: bigint;
    unk6: number;
    unk7: number;
};

type StatusEffectData = {
    totalTime: number;
    sourceId: bigint;
    stackCount: number;
    value?: Buffer;
    statusEffectId: number;
    struct_447: Buffer;
    occurTime: LostArkDateTime;
    unk9_0?: bigint;
    skillLevel: number;
    endTick: bigint;
    effectInstanceId: number;
};

type PeriodUpdateStatData = {
    unk0: bigint;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: bigint;
    unk5: bigint;
    unk6: number;
};

type PKTInitPC = {
    unk0: Buffer;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    statusEffectDatas: StatusEffectData[];
    unk8: bigint;
    unk9: number;
    unk10: number;
    unk11: number;
    struct_97: Buffer;
    unk13: number;
    unk14: number;
    unk15: number;
    unk16: number;
    unk17: number;
    unk18: number;
    level: number;
    unk20: number;
    unk21: number;
    unk22: number;
    unk24_0?: number;
    unk25: number;
    unk26: Buffer;
    unk27: number;
    unk28: number;
    unk29: number;
    unk30: bigint;
    unk31: number;
    unk32: number;
    unk33: number;
    struct_220: Buffer;
    unk35: bigint;
    unk36: number;
    name: string;
    unk38: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    struct_334: string;
    unk41: number;
    unk42: number;
    gearLevel: number;
    unk44: Buffer;
    characterId: bigint;
    unk46: number;
    unk47: bigint;
    unk48: number;
    playerId: bigint;
    unk50: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    classId: number;
    unk53: number;
    struct_340: Buffer;
    unk55: number;
    unk56: number;
    unk57: number;
};

type Struct_136 = {
    unk1_0?: Buffer;
};

type Struct_637 = {
    unk0: number;
    unk1: number;
    unk2: number;
    struct_137: Buffer;
    struct_136: Struct_136;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_643 = {
    struct_391: Buffer;
    struct_234: Buffer;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
    struct_232: Struct_637[];
    unk9: number;
    unk10: bigint;
    struct_256: Buffer;
    struct_488: Buffer;
    unk13: number;
};

type Struct_642 = {
    struct_269: Buffer;
    unk1: number;
    itemTint: Buffer;
    unk3: number;
    struct_226?: Buffer;
    unk6: number;
    struct_183?: Buffer;
    unk1_1?: number;
    unk1_2?: number;
    unk8: number;
    unk10_0?: Buffer;
    unk11: number;
    struct_440: Buffer;
    struct_267: Buffer;
    unk14: number;
    unk15: number;
    struct_229: Buffer;
};

type BossKillData = {
    isDead: boolean;
    npcId: number;
};

type Struct_585 = {
    struct_0: {
        struct_514: Buffer;
        unk1_0_1: number;
    }[];
    unk1: number;
    bossKillDataList: BossKillData[];
    unk3: number;
    unk4: number;
};

type Struct_636 = {
    struct_230: Buffer;
    struct_21: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_228: string;
    }[];
    unk2: number;
    unk3: number;
    struct_229: Buffer;
    unk5: number;
};

type Struct_533 = {
    struct_643?: Struct_643;
    struct_125?: Buffer;
    struct_1?: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_514: Buffer;
        unk1_0_3: number;
    }[];
    unk2_2?: number;
    unk3_0?: Buffer;
    unk4_0?: Buffer;
    unk4_1?: number;
    unk4_2?: Buffer;
    struct_642?: Struct_642;
    struct_585?: Struct_585;
    unk7_0?: Buffer;
    struct_636?: Struct_636;
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
    struct_533?: Struct_533;
    unk1_15?: number;
};

type PKTInitItem = {
    storageType: number;
    itemDataList: ItemData[];
};

type Struct_732 = {
    unk0: number;
    unk2_0?: number;
    unk4_0?: Buffer;
    unk5: number;
    unk6: number;
};

type PKTInitLocal = {
    unk0: number;
    struct_340: Buffer;
    statusEffectDatas: StatusEffectData[];
    abilityDataList: AbilityData[];
    addonFeatureIdList: Buffer;
    unk5: bigint;
    unk6: number;
    unk8_0?: number;
    unk9: number;
    struct_220: Buffer;
    unk11: bigint;
    struct_129: Buffer;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    struct_423: Struct_732[];
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    unk16: number;
};

type PKTMigrationExecute = {
    unk0: number;
    account_CharacterId1: bigint;
    serverAddr: string;
    account_CharacterId2: bigint;
};

type Struct_712 = {
    lookData: Buffer;
    unk1: number;
    unk2: bigint;
    equipItemDataList: EquipItemData[];
    unk4: number;
    unk5: number;
    unk6: number;
    lostArkString: string;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    struct_335?: Buffer;
    unk2: number;
    unk4_0?: number;
    unk6_0?: number;
    spawnIndex: number;
    typeId: number;
    statusEffectDatas: StatusEffectData[];
    unk11_0?: number;
    struct_268?: Buffer;
    unk14: number;
    directionYaw: Angle;
    unk17_0?: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk20_0?: number;
    unk22_0?: number;
    transitIndex?: number;
    unk25: number;
    level: number;
    position: Vector3F;
    struct_712?: Struct_712;
    unk31_0?: number;
    unk33_0?: number;
    unk35_0?: number;
    unk36: number;
    unk37: number;
    unk39_0?: number;
    objectId: bigint;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk43_0?: number;
    unk45_0?: bigint;
    balanceLevel?: number;
    unk49_0?: number;
    unk50: number;
};

type PKTNewNpc = {
    unk0: number;
    unk2_0?: bigint;
    unk1_0?: string;
    unk1_1?: string;
    unk5_0?: number;
    npcStruct: NpcData;
};

type PKTNewNpcSummon = {
    npcData: NpcData;
    ownerId: bigint;
    publishReason: number;
};

type PCStruct = {
    identityData: Buffer;
    equipLifeToolDataList: EquipItemData[];
    avatarHide: number;
    unk1_m: number;
    unk15_m: number;
    unk5: number;
    petId: number;
    name: string;
    lookData: Buffer;
    unk45_m: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk11: number;
    secondHonorTitleId: number;
    unk13: number;
    guildName: string;
    unk23_m: number;
    level: number;
    equipItemDataList: EquipItemData[];
    classId: number;
    grabbedData?: Buffer;
    unk0_m: Buffer;
    unk17_m: number;
    playerId: bigint;
    characterId: bigint;
    unk28_m: number;
    unk29_m: number;
    rvRLevel: number;
    addonFeatureIdList: Buffer;
    statusEffectDatas: StatusEffectData[];
    avgItemLevel: number;
    unk5_m: number;
    unk32_m: number;
    heading: Angle;
    firstHonorTitleId: number;
    position: Vector3F;
    worldId: number;
    unk2_m: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    unk7_m: number;
    unk25_m: number;
    unk42: number;
    unk4_m: number;
    guildId: number;
    maxItemLevel: number;
};

type TrackMoveInfo = {
    unk0: Buffer;
    unk1: number;
    unk3_0?: Buffer;
    unk4: number;
};

type PKTNewPC = {
    unk5_0_m?: Buffer;
    unk2_m: number;
    unk3_0_m?: number;
    unk0_m: number;
    pcStruct: PCStruct;
    trackMoveInfo?: TrackMoveInfo;
    unk4_0_m?: Buffer;
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
    unk1_0?: bigint;
    skillEffect: number;
    unk3: number;
    unk4: number;
    tripodIndex: TripodIndex;
    unk6: number;
    skillId: number;
    skillLevel: number;
    unk9: number;
    chainSkillEffect: number;
    unk11: number;
    struct_335?: Buffer;
    tripodLevel: TripodLevel;
    targetObjectId: bigint;
    unk16: number;
    unk17: number;
    unk19_0?: number;
    projectileId: bigint;
    unk21: bigint;
    ownerId: bigint;
    unk23: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type PKTParalyzationStateNotify = {
    noHitCheckTime: number;
    objectId: bigint;
    decreasePoint: number;
    paralyzationPoint: number;
    paralyzationMaxPoint: number;
    hitCheckTime: number;
    enable: boolean;
};

type PartyMemberData = {
    unk0: number;
    transitIndex: number;
    zoneId: number;
    unk3: number;
    unk4: number;
    unk5: number;
    characterId: bigint;
    position: Vector3F;
    curHp: bigint;
    gearLevel: number;
    maxHp: bigint;
    auths: number;
    unk12: number;
    zoneInstId: bigint;
    partyMemberNumber: number;
    classId: number;
    name: string;
    characterLevel: number;
    worldId: number;
    unk19: number;
};

type PKTPartyInfo = {
    partyInstanceId: number;
    partyType: number;
    partyLootType: number;
    lootGrade: number;
    raidInstanceId: number;
    memberDatas: PartyMemberData[];
};

type PKTPartyLeaveResult = {
    name: string;
    partyLeaveType: number;
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
    playerIdOnRefresh: bigint;
    unk1: number;
    unk2: bigint;
    characterId: bigint;
    statusEffectDatas: StatusEffectData[];
};

type PKTPartyStatusEffectRemoveNotify = {
    characterId: bigint;
    reason: number;
    unk2: bigint;
    statusEffectIds: number[];
};

type PKTPartyStatusEffectResultNotify = {
    raidInstanceId: number;
    partyInstanceId: number;
    characterId: bigint;
};

type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};

type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};

type PKTRaidBegin = {
    raidResult: number;
    unk5_m: bigint;
    braveHeartCount: number;
    initBraveHeartCount: number;
    startTick: bigint;
    endTick: bigint;
    raidId: number;
    unk1_m: boolean;
    totalTime: bigint;
    unk11_m: boolean;
    unk6_m: bigint;
    unk0_m: boolean;
    unk4_m: bigint;
    bossKillDataList: BossKillData[];
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: bigint;
    unk1: bigint;
    struct_47: {
        struct_520: Buffer;
        unk1_0_1: bigint;
        unk1_0_2: number;
        unk1_0_3: bigint;
    }[];
    unk3: bigint;
    unk4: number;
    unk5: bigint;
    unk6: number;
    unk7: number;
};

type UnpublishObject = {
    objectId: bigint;
    unpublishReason: number;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
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
    curHp: bigint;
    modifier: number;
    maxHp: bigint;
    unk3_m: number;
    damageAttr?: number;
    damageType: number;
    targetId: bigint;
    damage: bigint;
};

type SkillDamageAbnormalMoveEvent = {
    skillMoveOptionData: SkillMoveOptionData;
    skillDamageEvent: SkillDamageEvent;
    unk2_m: bigint;
    unk8_m: number;
    position: Vector3F;
    destination: Vector3F;
    unk3_m: number;
    unk4_m: number;
    unk1_m: number;
};

type PKTSkillDamageAbnormalMoveNotify = {
    sourceId: bigint;
    unk1_m: number;
    skillId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    skillEffectId: number;
    unk2_m: number;
};

type PKTSkillDamageNotify = {
    skillLevel: number;
    skillDamageEvents: SkillDamageEvent[];
    skillEffectId: number;
    skillId: number;
    sourceId: bigint;
};

type PKTSkillStageNotify = {
    sourceId: bigint;
    skillId: number;
    stage: number;
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
    unk1_m?: number;
    skillLevel: number;
    newDirectionYaw: Angle;
    newPosition: Vector3F;
    skillId: number;
    skillOptionData: SkillOptionData;
    curPosition: Vector3F;
    aiStateId?: number;
    sourceId: bigint;
    pitchRotation?: Angle;
    aimTargetPosition: Vector3F;
};

type PKTStatChangeOriginNotify = {
    unk1_0?: number;
    objectId: bigint;
    statPairChangedList: {
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
    unk1_0?: bigint;
    unk2: bigint;
    new: boolean;
    statusEffectData: StatusEffectData;
    objectId: bigint;
};

type PKTStatusEffectRemoveNotify = {
    objectId: bigint;
    statusEffectIds: number[];
    reason: number;
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
    packetResultCode: number;
    involvedPCs: bigint[];
    unk0_m: number;
    triggerId: number;
};

type PKTTriggerStartNotify = {
    sourceId: bigint;
    triggerId: number;
    involvedPCs: bigint[];
    triggerSignalType: number;
};

type PKTTroopMemberUpdateMinNotify = {
    position: bigint;
    characterId: bigint;
    maxHp: bigint;
    unk0_m: number;
    curHp: bigint;
    statusEffectDatas: StatusEffectData[];
};

type PKTIdentityGaugeChangeNotify = {
    playerId: bigint;
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
};

type PKTZoneMemberLoadStatusNotify = {
    completeMembers: bigint[];
    loadComplete: boolean;
    zoneLevel: number;
    totalMembers: bigint[];
    zoneId: number;
    zoneInstId: bigint;
    firstPCEnterTick: bigint;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    stackCount: number;
    target: number;
    id: number;
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
