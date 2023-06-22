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
    featureType: number;
    level: number;
};

type PKTActiveAbilityNotify = {
    objectId: bigint;
    activeAbilityList: ActiveAbility[];
};

type PKTAddonSkillFeatureChangeNotify = {
    addonFeatureIdList: Buffer;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    objectId: bigint;
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
    targetId: bigint;
    unk1: number;
    unk2: bigint;
    unk4_0?: number;
    unk5: number;
    unk7_0?: number;
    unk9_0?: number;
    sourceId: bigint;
    unk11: number;
    unk12: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    id: number;
    slot: number;
    itemTint: Buffer;
    unk4_0?: number;
    expireTime: LostArkDateTime;
    level: number;
};

type PKTEquipChangeNotify = {
    equipItemDataList: EquipItemData[];
    objectId: bigint;
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
    struct_131: Buffer;
};

type PKTInitEnv = {
    playerId: bigint;
    lostArkDateTime: LostArkDateTime;
    struct_575: string;
    unk3: number;
    struct_33: {
        struct_575: string;
        versionString: string;
        struct_561: string;
    }[];
    unk5: number;
    unk6: bigint;
    unk7: number;
};

type PeriodUpdateStatData = {
    unk0: number;
    unk1: bigint;
    unk2: number;
    unk3: number;
    unk4: bigint;
    unk5: number;
    unk6: bigint;
};

type StatusEffectData = {
    effectInstanceId: number;
    value?: Buffer;
    totalTime: number;
    sourceId: bigint;
    occurTime: LostArkDateTime;
    unk7_0?: bigint;
    endTick: bigint;
    struct_442: Buffer;
    statusEffectId: number;
    skillLevel: number;
    stackCount: number;
};

type PKTInitPC = {
    unk0: Buffer;
    unk1: number;
    unk2: bigint;
    unk3: number;
    unk4: number;
    classId: number;
    unk6: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk9: number;
    characterId: bigint;
    unk11: bigint;
    unk12: number;
    playerId: bigint;
    gearLevel: number;
    unk15: bigint;
    unk16: number;
    statusEffectDatas: StatusEffectData[];
    unk18: Buffer;
    unk19: number;
    unk20: number;
    unk21: number;
    unk22: number;
    unk23: number;
    struct_332: string;
    unk25: number;
    unk26: number;
    unk27: number;
    unk28: Buffer;
    unk29: number;
    struct_102: Buffer;
    unk31: number;
    unk32: number;
    unk33: number;
    unk34: number;
    unk35: number;
    unk36: number;
    unk37: number;
    unk38: number;
    unk39: number;
    unk40: number;
    unk41: number;
    unk42: number;
    unk44_0?: number;
    unk45: number;
    unk46: number;
    unk47: number;
    level: number;
    unk49: number;
    unk50: number;
    struct_222: Buffer;
    unk52: number;
    unk53: bigint;
    unk54: number;
    struct_337: Buffer;
    unk56: number;
    name: string;
};

type Struct_139 = {
    unk1_0?: Buffer;
};

type Struct_637 = {
    unk0: number;
    struct_140: Buffer;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    struct_139: Struct_139;
    unk7: number;
};

type Struct_643 = {
    unk0: bigint;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    struct_294: Buffer;
    struct_255: Buffer;
    struct_388: Buffer;
    unk8: number;
    struct_232: Struct_637[];
    unk10: number;
    unk11: number;
    struct_486: Buffer;
    unk13: number;
};

type Struct_642 = {
    struct_266: Buffer;
    unk1_0?: number;
    struct_184?: Buffer;
    unk1_2?: number;
    unk2: number;
    struct_235: Buffer;
    unk4: number;
    unk6_0?: Buffer;
    struct_481: Buffer;
    unk8: number;
    struct_227?: Buffer;
    unk11: number;
    struct_437: Buffer;
    unk13: number;
    unk14: number;
    unk15: number;
    itemTint: Buffer;
};

type BossKillData = {
    npcId: number;
    isDead: boolean;
};

type Struct_587 = {
    unk0: number;
    unk1: number;
    struct_1: {
        struct_515: Buffer;
        unk1_0_1: number;
    }[];
    bossKillDataList: BossKillData[];
    unk4: number;
};

type Struct_636 = {
    struct_230: Buffer;
    struct_481: Buffer;
    unk2: number;
    struct_25: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_228: string;
    }[];
    unk4: number;
    unk5: number;
};

type Struct_534 = {
    struct_643?: Struct_643;
    unk2_0?: number;
    struct_2?: {
        struct_515: Buffer;
        unk1_0_1: number;
        unk1_0_2: number;
        unk1_0_3: number;
    }[];
    struct_127?: Buffer;
    unk3_0?: Buffer;
    unk4_0?: Buffer;
    unk4_1?: number;
    unk4_2?: Buffer;
    struct_642?: Struct_642;
    struct_587?: Struct_587;
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
    struct_534?: Struct_534;
    unk1_15?: number;
};

type PKTInitItem = {
    storageType: number;
    itemDataList: ItemData[];
};

type Struct_730 = {
    unk1_0?: number;
    unk2: number;
    unk3: number;
    unk4: number;
    unk6_0?: Buffer;
};

type PKTInitLocal = {
    addonFeatureIdList: Buffer;
    abilityDataList: AbilityData[];
    struct_222: Buffer;
    unk3: number;
    unk4: bigint;
    struct_420: Struct_730[];
    struct_337: Buffer;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk8: number;
    statusEffectDatas: StatusEffectData[];
    struct_131: Buffer;
    unk12_0?: number;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk14: bigint;
    unk15: number;
    unk16: number;
};

type PKTMigrationExecute = {
    account_CharacterId1: bigint;
    unk1: number;
    serverAddr: string;
    account_CharacterId2: bigint;
};

type Struct_710 = {
    lookData: Buffer;
    unk1: number;
    lostArkString: string;
    unk3: bigint;
    equipItemDataList: EquipItemData[];
    unk5: number;
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
    unk1_0?: number;
    unk2: number;
    unk4_0?: number;
    unk6_0?: bigint;
    transitIndex?: number;
    statusEffectDatas: StatusEffectData[];
    objectId: bigint;
    unk11: number;
    unk13_0?: number;
    unk15_0?: number;
    unk17_0?: number;
    struct_267?: Buffer;
    balanceLevel?: number;
    unk22: number;
    unk24_0?: number;
    unk26_0?: number;
    level: number;
    struct_710?: Struct_710;
    struct_333?: Buffer;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    position: Vector3F;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    directionYaw: Angle;
    typeId: number;
    unk38_0?: number;
    unk39: number;
    unk41_0?: number;
    unk43_0?: number;
    unk44: number;
    unk46_0?: number;
    spawnIndex: number;
    unk48: number;
    unk50_0?: number;
};

type PKTNewNpc = {
    unk0: number;
    unk2_0?: bigint;
    unk4_0?: number;
    unk1_0?: string;
    unk1_1?: string;
    npcStruct: NpcData;
};

type PKTNewNpcSummon = {
    npcData: NpcData;
    ownerId: bigint;
    publishReason: number;
};

type PCStruct = {
    equipItemDataList: EquipItemData[];
    avatarHide: number;
    avgItemLevel: number;
    level: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk5_m: number;
    petId: number;
    grabbedData?: Buffer;
    classId: number;
    unk10: number;
    unk11: number;
    position: Vector3F;
    unk13: number;
    unk45_m: number;
    worldId: number;
    unk4_m: number;
    statusEffectDatas: StatusEffectData[];
    unk23_m: number;
    heading: Angle;
    addonFeatureIdList: Buffer;
    maxItemLevel: number;
    name: string;
    unk17_m: number;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk0_m: Buffer;
    unk26: number;
    rvRLevel: number;
    unk2_m: number;
    unk29_m: number;
    unk28_m: number;
    unk32_m: number;
    secondHonorTitleId: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    characterId: bigint;
    unk25_m: number;
    unk1_m: number;
    guildId: number;
    guildName: string;
    playerId: bigint;
    lookData: Buffer;
    equipLifeToolDataList: EquipItemData[];
    unk15_m: number;
    identityData: Buffer;
    unk7_m: number;
    firstHonorTitleId: number;
};

type TrackMoveInfo = {
    unk0: Buffer;
    unk1: number;
    unk3_0?: Buffer;
    unk4: number;
};

type PKTNewPC = {
    unk2_m: number;
    pcStruct: PCStruct;
    unk3_0_m?: number;
    unk5_0_m?: Buffer;
    unk0_m: number;
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
    ownerId: bigint;
    unk1: number;
    tripodIndex: TripodIndex;
    skillLevel: number;
    unk4: bigint;
    skillEffect: number;
    unk6: number;
    targetObjectId: bigint;
    unk8: bigint;
    unk9: number;
    unk10: number;
    unk12_0?: bigint;
    struct_333?: Buffer;
    chainSkillEffect: number;
    tripodLevel: TripodLevel;
    projectileId: bigint;
    unk19_0?: number;
    skillId: number;
    unk21: number;
    unk22: number;
    unk23: number;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type PKTParalyzationStateNotify = {
    hitCheckTime: number;
    noHitCheckTime: number;
    enable: boolean;
    paralyzationMaxPoint: number;
    decreasePoint: number;
    objectId: bigint;
    paralyzationPoint: number;
};

type PartyMemberData = {
    worldId: number;
    auths: number;
    unk2: number;
    unk3: number;
    name: string;
    unk5: number;
    gearLevel: number;
    unk7: number;
    unk8: number;
    curHp: bigint;
    zoneId: number;
    unk11: number;
    maxHp: bigint;
    characterId: bigint;
    zoneInstId: bigint;
    position: Vector3F;
    characterLevel: number;
    transitIndex: number;
    classId: number;
    partyMemberNumber: number;
};

type PKTPartyInfo = {
    memberDatas: PartyMemberData[];
    partyType: number;
    lootGrade: number;
    raidInstanceId: number;
    partyLootType: number;
    partyInstanceId: number;
};

type PKTPartyLeaveResult = {
    partyLeaveType: number;
    name: string;
    partyInstanceId: number;
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
    characterId: bigint;
    unk1: number;
    playerIdOnRefresh: bigint;
    statusEffectDatas: StatusEffectData[];
    unk4: bigint;
};

type PKTPartyStatusEffectRemoveNotify = {
    characterId: bigint;
    statusEffectIds: number[];
    reason: number;
    unk3: bigint;
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
    unk1_m: boolean;
    raidResult: number;
    unk5_m: bigint;
    raidId: number;
    unk4_m: bigint;
    totalTime: bigint;
    unk11_m: boolean;
    bossKillDataList: BossKillData[];
    endTick: bigint;
    unk6_m: bigint;
    startTick: bigint;
    initBraveHeartCount: number;
    unk0_m: boolean;
    braveHeartCount: number;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: number;
    unk1: bigint;
    unk2: bigint;
    unk3: bigint;
    unk4: number;
    unk5: number;
    struct_53: {
        unk1_0_0: number;
        unk1_0_1: bigint;
        unk1_0_2: bigint;
        struct_521: Buffer;
    }[];
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
    skillLevel: number;
    caster: bigint;
    skillId: number;
};

type SkillDamageEvent = {
    maxHp: bigint;
    modifier: number;
    damageType: number;
    damage: bigint;
    unk3_m: number;
    targetId: bigint;
    curHp: bigint;
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
    unk1_m: number;
    unk2_m: bigint;
    position: Vector3F;
    unk3_m: number;
    unk4_m: number;
    skillDamageEvent: SkillDamageEvent;
    skillMoveOptionData: SkillMoveOptionData;
    destination: Vector3F;
};

type PKTSkillDamageAbnormalMoveNotify = {
    unk2_m: number;
    skillId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    skillEffectId: number;
    unk1_m: number;
    sourceId: bigint;
};

type PKTSkillDamageNotify = {
    skillId: number;
    skillDamageEvents: SkillDamageEvent[];
    sourceId: bigint;
    skillEffectId: number;
    skillLevel: number;
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
    pitchRotation?: Angle;
    curDirectionYaw: Angle;
    skillId: number;
    skillOptionData: SkillOptionData;
    aiStateId?: number;
    unk1_m?: number;
    newDirectionYaw: Angle;
    sourceId: bigint;
    curPosition: Vector3F;
    aimTargetPosition: Vector3F;
    skillLevel: number;
    newPosition: Vector3F;
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
    unk0: bigint;
    objectId: bigint;
    new: boolean;
    unk4_0?: bigint;
    statusEffectData: StatusEffectData;
};

type PKTStatusEffectRemoveNotify = {
    reason: number;
    statusEffectIds: number[];
    objectId: bigint;
};

type PKTStatusEffectDurationNotify = {
    expirationTick: bigint;
    targetId: bigint;
    effectInstanceId: number;
};

type PKTStatusEffectSyncDataNotify = {
    value: number;
    objectId: bigint;
    characterId: bigint;
    effectInstanceId: number;
};

type PKTTriggerBossBattleStatus = {
    step: number;
    triggerId: number;
    unk2_m: boolean;
};

type PKTTriggerFinishNotify = {
    involvedPCs: bigint[];
    unk0_m: number;
    packetResultCode: number;
    triggerId: number;
};

type PKTTriggerStartNotify = {
    triggerId: number;
    involvedPCs: bigint[];
    sourceId: bigint;
    triggerSignalType: number;
};

type PKTTroopMemberUpdateMinNotify = {
    curHp: bigint;
    characterId: bigint;
    position: bigint;
    statusEffectDatas: StatusEffectData[];
    maxHp: bigint;
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
    zoneId: number;
    loadComplete: boolean;
    completeMembers: bigint[];
    totalMembers: bigint[];
    firstPCEnterTick: bigint;
    zoneLevel: number;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    target: number;
    stackCount: number;
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
