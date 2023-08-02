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
    paralyzationMaxPoint: number;
    type: number;
    objectId: bigint;
    paralyzationPoint: number;
};

type PKTCounterAttackNotify = {
    sourceId: bigint;
    type: number;
    targetId: bigint;
};

type PKTDeathNotify = {
    unk1_0?: number;
    unk2: number;
    unk3: number;
    unk4: bigint;
    unk5: number;
    unk7_0?: number;
    unk9_0?: number;
    unk10: number;
    targetId: bigint;
    sourceId: bigint;
};

type LostArkDateTime = Date;

type EquipItemData = {
    expireTime: LostArkDateTime;
    slot: number;
    level: number;
    id: number;
    unk5_0?: number;
    itemTint: Buffer;
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
    objectId: bigint;
    stance: number;
};

type PKTInitAbility = {
    struct_130: Buffer;
    abilityDataList: AbilityData[];
};

type PKTInitEnv = {
    struct_574: string;
    struct_30: {
        struct_574: string;
        struct_560: string;
        versionString: string;
    }[];
    unk2: bigint;
    lostArkDateTime: LostArkDateTime;
    unk4: number;
    unk5: number;
    unk6: number;
    playerId: bigint;
};

type PeriodUpdateStatData = {
    unk0: number;
    unk1: number;
    unk2: bigint;
    unk3: bigint;
    unk4: number;
    unk5: number;
    unk6: bigint;
};

type StatusEffectData = {
    value?: Buffer;
    occurTime: LostArkDateTime;
    effectInstanceId: number;
    totalTime: number;
    struct_445: Buffer;
    endTick: bigint;
    stackCount: number;
    unk9_0?: bigint;
    skillLevel: number;
    sourceId: bigint;
    statusEffectId: number;
};

type PKTInitPC = {
    unk1_0?: number;
    unk2: number;
    unk3: Buffer;
    classId: number;
    unk5: number;
    unk6: number;
    characterId: bigint;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk9: number;
    unk10: number;
    unk11: number;
    unk12: number;
    struct_366: string;
    struct_99: Buffer;
    unk15: number;
    unk16: number;
    unk17: bigint;
    unk18: bigint;
    struct_227: Buffer;
    unk20: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk22: number;
    unk23: number;
    unk24: number;
    unk25: number;
    playerId: bigint;
    unk27: number;
    gearLevel: number;
    unk29: number;
    unk30: number;
    unk31: number;
    unk32: number;
    unk33: number;
    unk34: bigint;
    unk35: number;
    unk36: number;
    name: string;
    unk38: bigint;
    unk39: number;
    unk40: number;
    unk41: number;
    unk42: Buffer;
    unk43: number;
    unk44: number;
    unk45: number;
    unk46: number;
    unk47: Buffer;
    struct_341: Buffer;
    level: number;
    unk50: number;
    unk51: number;
    unk52: number;
    unk53: number;
    unk54: number;
    statusEffectDatas: StatusEffectData[];
    unk56: number;
    unk57: number;
};

type Struct_139 = {
    unk1_0?: Buffer;
};

type Struct_637 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    struct_140: Buffer;
    struct_139: Struct_139;
};

type Struct_643 = {
    struct_238: Buffer;
    struct_141: Buffer;
    unk2: number;
    unk3: number;
    struct_236: Struct_637[];
    unk5: number;
    unk6: number;
    unk7: number;
    unk8: number;
    struct_259: Buffer;
    unk10: number;
    struct_391: Buffer;
    unk12: number;
    unk13: bigint;
};

type Struct_642 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    struct_240: Buffer;
    unk5: number;
    struct_270: Buffer;
    itemTint: Buffer;
    struct_483: Buffer;
    struct_440: Buffer;
    unk11_0?: Buffer;
    unk12: number;
    unk13: number;
    struct_188?: Buffer;
    unk1_1?: number;
    unk1_2?: number;
    struct_232?: Buffer;
};

type BossKillData = {
    npcId: number;
    isDead: boolean;
};

type Struct_586 = {
    bossKillDataList: BossKillData[];
    unk1: number;
    unk2: number;
    struct_0: {
        unk1_0_0: number;
        struct_511: Buffer;
    }[];
    unk4: number;
};

type Struct_636 = {
    struct_22: {
        unk1_0_0: number;
        struct_234: string;
        unk1_0_2: number;
    }[];
    struct_235: Buffer;
    struct_483: Buffer;
    unk3: number;
    unk4: number;
    unk5: number;
};

type Struct_533 = {
    struct_643?: Struct_643;
    struct_1?: {
        struct_511: Buffer;
        unk1_0_1: number;
        unk1_0_2: number;
        unk1_0_3: number;
    }[];
    struct_127?: Buffer;
    unk2_2?: number;
    unk3_0?: Buffer;
    unk4_0?: number;
    unk4_1?: Buffer;
    unk4_2?: Buffer;
    struct_642?: Struct_642;
    struct_586?: Struct_586;
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

type Struct_731 = {
    unk0: number;
    unk1: number;
    unk3_0?: Buffer;
    unk5_0?: number;
    unk6: number;
};

type PKTInitLocal = {
    unk0: number;
    addonFeatureIdList: Buffer;
    struct_341: Buffer;
    struct_130: Buffer;
    unk4: bigint;
    struct_227: Buffer;
    unk6: number;
    unk7: bigint;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk9: number;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk12_0?: number;
    unk13: number;
    abilityDataList: AbilityData[];
    statusEffectDatas: StatusEffectData[];
    struct_422: Struct_731[];
};

type PKTMigrationExecute = {
    account_CharacterId1: bigint;
    unk1: number;
    serverAddr: string;
    account_CharacterId2: bigint;
};

type Struct_711 = {
    unk0: number;
    lostArkString: string;
    lookData: Buffer;
    unk3: bigint;
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
    level: number;
    unk2_0?: number;
    position: Vector3F;
    transitIndex?: number;
    unk7_0?: number;
    balanceLevel?: number;
    unk11_0?: number;
    statusEffectDatas: StatusEffectData[];
    directionYaw: Angle;
    unk14: number;
    unk15: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk18_0?: number;
    unk19: number;
    unk21_0?: bigint;
    objectId: bigint;
    unk24_0?: number;
    unk26_0?: number;
    unk27: number;
    struct_711?: Struct_711;
    unk31_0?: number;
    typeId: number;
    struct_271?: Buffer;
    unk36_0?: number;
    struct_336?: Buffer;
    unk40_0?: number;
    unk42_0?: number;
    unk43: number;
    spawnIndex: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk47_0?: number;
    unk49_0?: number;
    unk50: number;
};

type PKTNewNpc = {
    unk1_0?: bigint;
    unk1_0_0?: string;
    unk1_1?: string;
    unk4_0?: number;
    unk5: number;
    npcStruct: NpcData;
};

type PKTNewNpcSummon = {
    npcData: NpcData;
    publishReason: number;
    ownerId: bigint;
};

type TrackMoveInfo = {
    unk1_0?: Buffer;
    unk2: number;
    unk3: number;
    unk4: Buffer;
};

type PCStruct = {
    heading: Angle;
    unk15_m: number;
    unk2: number;
    unk3: number;
    secondHonorTitleId: number;
    lookData: Buffer;
    name: string;
    unk45_m: number;
    unk23_m: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk2_m: number;
    unk29_m: number;
    avatarHide: number;
    avgItemLevel: number;
    grabbedData?: Buffer;
    unk7_m: number;
    equipLifeToolDataList: EquipItemData[];
    unk5_m: number;
    unk0_m: Buffer;
    unk1_m: number;
    unk21: number;
    rvRLevel: number;
    level: number;
    playerId: bigint;
    petId: number;
    classId: number;
    characterId: bigint;
    guildId: number;
    statusEffectDatas: StatusEffectData[];
    identityData: Buffer;
    unk17_m: number;
    unk32: number;
    position: Vector3F;
    unk32_m: number;
    unk25_m: number;
    equipItemDataList: EquipItemData[];
    addonFeatureIdList: Buffer;
    firstHonorTitleId: number;
    guildName: string;
    unk28_m: number;
    worldId: number;
    unk4_m: number;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    statPair: {
        statType: number;
        value: bigint;
    }[];
    maxItemLevel: number;
};

type PKTNewPC = {
    unk4_0_m?: Buffer;
    unk3_0_m?: number;
    unk0_m: number;
    trackMoveInfo?: TrackMoveInfo;
    pcStruct: PCStruct;
    unk2_m: number;
    unk5_0_m?: Buffer;
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
    ownerId: bigint;
    targetObjectId: bigint;
    unk2: number;
    chainSkillEffect: number;
    projectileId: bigint;
    unk5: number;
    unk6: bigint;
    unk7: number;
    unk8: number;
    unk9: number;
    unk10: number;
    tripodLevel: TripodLevel;
    skillLevel: number;
    unk14_0?: bigint;
    unk16_0?: number;
    unk17: number;
    skillId: number;
    skillEffect: number;
    struct_336?: Buffer;
    unk22: bigint;
    tripodIndex: TripodIndex;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type PKTParalyzationStateNotify = {
    paralyzationPoint: number;
    decreasePoint: number;
    noHitCheckTime: number;
    objectId: bigint;
    hitCheckTime: number;
    paralyzationMaxPoint: number;
    enable: boolean;
};

type PartyMemberData = {
    unk0: number;
    zoneInstId: bigint;
    zoneId: number;
    characterLevel: number;
    curHp: bigint;
    maxHp: bigint;
    name: string;
    gearLevel: number;
    unk8: number;
    transitIndex: number;
    unk10: number;
    unk11: number;
    worldId: number;
    characterId: bigint;
    classId: number;
    position: Vector3F;
    unk16: number;
    unk17: number;
    auths: number;
    partyMemberNumber: number;
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
    partyLeaveType: number;
    name: string;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    objectId: bigint;
    unk0_m: number;
    passiveStatusEffectList: number[];
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    objectId: bigint;
};

type PKTPartyStatusEffectAddNotify = {
    characterId: bigint;
    unk1: number;
    unk2: bigint;
    statusEffectDatas: StatusEffectData[];
    playerIdOnRefresh: bigint;
};

type PKTPartyStatusEffectRemoveNotify = {
    reason: number;
    characterId: bigint;
    statusEffectIds: number[];
    unk3: bigint;
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
    unk6_m: bigint;
    initBraveHeartCount: number;
    unk5_m: bigint;
    endTick: bigint;
    raidResult: number;
    unk0_m: boolean;
    raidId: number;
    bossKillDataList: BossKillData[];
    unk4_m: bigint;
    totalTime: bigint;
    startTick: bigint;
    unk1_m: boolean;
    unk11_m: boolean;
    braveHeartCount: number;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: bigint;
    unk1: number;
    unk2: bigint;
    unk3: bigint;
    unk4: number;
    unk5: number;
    struct_49: {
        unk1_0_0: number;
        unk1_0_1: bigint;
        unk1_0_2: bigint;
        struct_517: Buffer;
    }[];
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

type SkillDamageEvent = {
    targetId: bigint;
    unk3_m: number;
    modifier: number;
    curHp: bigint;
    damageType: number;
    damageAttr?: number;
    maxHp: bigint;
    damage: bigint;
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
    destination: Vector3F;
    unk1_m: number;
    unk4_m: number;
    skillDamageEvent: SkillDamageEvent;
    unk8_m: number;
    skillMoveOptionData: SkillMoveOptionData;
    unk3_m: number;
    position: Vector3F;
    unk2_m: bigint;
};

type PKTSkillDamageAbnormalMoveNotify = {
    unk1_m: number;
    skillEffectId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    sourceId: bigint;
    unk2_m: number;
    skillId: number;
};

type PKTSkillDamageNotify = {
    sourceId: bigint;
    skillLevel: number;
    skillEffectId: number;
    skillDamageEvents: SkillDamageEvent[];
    skillId: number;
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
    aiStateId?: number;
    newPosition: Vector3F;
    curPosition: Vector3F;
    curDirectionYaw: Angle;
    skillId: number;
    skillLevel: number;
    sourceId: bigint;
    skillOptionData: SkillOptionData;
    pitchRotation?: Angle;
    unk1_m?: number;
    newDirectionYaw: Angle;
    aimTargetPosition: Vector3F;
};

type PKTStatChangeOriginNotify = {
    unk0: {
        statType: number;
        value: bigint;
    }[];
    objectId: bigint;
    unk2: {
        statType: number;
        value: bigint;
    }[];
    unk4_0?: number;
    unk5: number;
};

type PKTStatusEffectAddNotify = {
    unk0: bigint;
    unk2_0?: bigint;
    new: boolean;
    objectId: bigint;
    statusEffectData: StatusEffectData;
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
    effectInstanceId: number;
    characterId: bigint;
    value: number;
};

type PKTTriggerBossBattleStatus = {
    unk2_m: boolean;
    triggerId: number;
    step: number;
};

type PKTTriggerFinishNotify = {
    triggerId: number;
    involvedPCs: bigint[];
    packetResultCode: number;
    unk0_m: number;
};

type PKTTriggerStartNotify = {
    involvedPCs: bigint[];
    sourceId: bigint;
    triggerId: number;
    triggerSignalType: number;
};

type PKTTroopMemberUpdateMinNotify = {
    position: bigint;
    unk0_m: number;
    maxHp: bigint;
    curHp: bigint;
    characterId: bigint;
    statusEffectDatas: StatusEffectData[];
};

type PKTIdentityGaugeChangeNotify = {
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
    playerId: bigint;
};

type PKTZoneMemberLoadStatusNotify = {
    zoneInstId: bigint;
    firstPCEnterTick: bigint;
    completeMembers: bigint[];
    loadComplete: boolean;
    zoneId: number;
    totalMembers: bigint[];
    zoneLevel: number;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    stackCount: number;
    instanceId: number;
    id: number;
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
