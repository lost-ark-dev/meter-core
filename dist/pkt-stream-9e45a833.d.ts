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
    activeAbilityList: ActiveAbility[];
    objectId: bigint;
};

type PKTAddonSkillFeatureChangeNotify = {
    addonFeatureIdList: Buffer;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    objectId: bigint;
};

type PKTAuthTokenResult = {
    unk1_m: Buffer;
    unk1: number;
};

type PKTBlockSkillStateNotify = {
    type: number;
    paralyzationMaxPoint: number;
    paralyzationPoint: number;
    objectId: bigint;
};

type PKTCounterAttackNotify = {
    sourceId: bigint;
    type: number;
    targetId: bigint;
};

type PKTDeathNotify = {
    unk1_0?: number;
    targetId: bigint;
    unk3: number;
    unk4: bigint;
    unk6_0?: number;
    unk7: number;
    unk8: number;
    unk9: number;
    unk11_0?: number;
    sourceId: bigint;
};

type LostArkDateTime = Date;

type EquipItemData = {
    slot: number;
    level: number;
    expireTime: LostArkDateTime;
    id: number;
    itemTint: Buffer;
    unk6_0?: number;
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
    abilityDataList: AbilityData[];
    struct_135: Buffer;
};

type PKTInitEnv = {
    struct_575: string;
    unk1: number;
    unk2: number;
    playerId: bigint;
    struct_31: {
        struct_559: string;
        versionString: string;
        struct_575: string;
    }[];
    unk5: bigint;
    lostArkDateTime: LostArkDateTime;
    unk7: number;
};

type PeriodUpdateStatData = {
    unk0: number;
    unk1: bigint;
    unk2: number;
    unk3: bigint;
    unk4: number;
    unk5: number;
    unk6: bigint;
};

type StatusEffectData = {
    endTick: bigint;
    occurTime: LostArkDateTime;
    statusEffectId: number;
    skillLevel: number;
    struct_437: Buffer;
    value?: Buffer;
    sourceId: bigint;
    effectInstanceId: number;
    unk10_0?: bigint;
    stackCount: number;
    totalTime: number;
};

type PKTInitPC = {
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk1: bigint;
    struct_222: Buffer;
    unk3: bigint;
    unk4: number;
    playerId: bigint;
    struct_104: Buffer;
    unk7: bigint;
    unk8: number;
    unk9: number;
    unk10: number;
    unk11: number;
    unk12: number;
    unk13: number;
    unk14: number;
    unk15: bigint;
    unk16: Buffer;
    characterId: bigint;
    unk18: number;
    unk19: bigint;
    unk20: number;
    unk21: number;
    unk22: number;
    unk23: number;
    unk24: number;
    unk25: number;
    unk26: number;
    unk27: number;
    unk28: number;
    name: string;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk31: number;
    gearLevel: number;
    struct_337: Buffer;
    unk34: number;
    unk35: number;
    unk36: number;
    unk37: number;
    statusEffectDatas: StatusEffectData[];
    unk39: number;
    unk41_0?: number;
    unk42: Buffer;
    unk43: number;
    level: number;
    unk45: number;
    unk46: number;
    unk47: number;
    unk48: number;
    unk49: Buffer;
    unk50: number;
    unk51: number;
    unk52: number;
    classId: number;
    unk54: number;
    unk55: number;
    unk56: number;
    struct_332: string;
};

type Struct_143 = {
    unk1_0?: Buffer;
};

type Struct_637 = {
    struct_144: Buffer;
    unk1: number;
    unk2: number;
    struct_143: Struct_143;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_643 = {
    struct_233: Buffer;
    struct_384: Buffer;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    struct_231: Struct_637[];
    unk7: bigint;
    struct_255: Buffer;
    unk9: number;
    unk10: number;
    struct_145: Buffer;
    unk12: number;
    unk13: number;
};

type Struct_642 = {
    struct_235: Buffer;
    unk1: number;
    struct_266: Buffer;
    unk1_0?: number;
    struct_190?: Buffer;
    unk1_2?: number;
    struct_484: Buffer;
    struct_431: Buffer;
    unk6: number;
    unk8_0?: Buffer;
    unk9: number;
    unk10: number;
    unk11: number;
    struct_226?: Buffer;
    unk14: number;
    itemTint: Buffer;
    unk16: number;
};

type BossKillData = {
    npcId: number;
    isDead: boolean;
};

type Struct_590 = {
    unk0: number;
    struct_0: {
        struct_511: Buffer;
        unk1_0_1: number;
    }[];
    unk2: number;
    bossKillDataList: BossKillData[];
    unk4: number;
};

type Struct_636 = {
    unk0: number;
    struct_23: {
        struct_228: string;
        unk1_0_1: number;
        unk1_0_2: number;
    }[];
    unk2: number;
    struct_484: Buffer;
    struct_229: Buffer;
    unk5: number;
};

type Struct_546 = {
    struct_643?: Struct_643;
    unk2_0?: number;
    struct_132?: Buffer;
    struct_1?: {
        unk1_0_0: number;
        unk1_0_1: number;
        unk1_0_2: number;
        struct_511: Buffer;
    }[];
    unk3_0?: Buffer;
    unk4_0?: Buffer;
    unk4_1?: Buffer;
    unk4_2?: number;
    struct_642?: Struct_642;
    struct_590?: Struct_590;
    unk7_0?: Buffer;
    struct_636?: Struct_636;
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
    struct_546?: Struct_546;
    unk1_15?: number;
};

type PKTInitItem = {
    storageType: number;
    itemDataList: ItemData[];
};

type Struct_731 = {
    unk0: number;
    unk2_0?: number;
    unk3: number;
    unk4: number;
    unk6_0?: Buffer;
};

type PKTInitLocal = {
    struct_135: Buffer;
    unk1: number;
    addonFeatureIdList: Buffer;
    unk3: bigint;
    unk5_0?: number;
    statusEffectDatas: StatusEffectData[];
    abilityDataList: AbilityData[];
    statPair: {
        value: bigint;
        statType: number;
    }[];
    struct_416: Struct_731[];
    unk10: number;
    struct_337: Buffer;
    unk12: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    struct_222: Buffer;
    unk15: bigint;
    unk16: number;
};

type PKTMigrationExecute = {
    serverAddr: string;
    unk1: number;
    account_CharacterId1: bigint;
    account_CharacterId2: bigint;
};

type Struct_711 = {
    unk0: number;
    equipItemDataList: EquipItemData[];
    lostArkString: string;
    unk3: number;
    lookData: Buffer;
    unk5: number;
    unk6: number;
    unk7: bigint;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    unk1_0?: number;
    directionYaw: Angle;
    struct_267?: Buffer;
    unk6_0?: bigint;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    spawnIndex: number;
    transitIndex?: number;
    unk11: number;
    position: Vector3F;
    struct_333?: Buffer;
    statusEffectDatas: StatusEffectData[];
    unk16: number;
    unk17: number;
    typeId: number;
    objectId: bigint;
    unk21_0?: number;
    unk23_0?: number;
    balanceLevel?: number;
    unk27_0?: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    struct_711?: Struct_711;
    unk32_0?: number;
    unk33: number;
    unk35_0?: number;
    unk37_0?: number;
    unk38: number;
    unk40_0?: number;
    unk42_0?: number;
    unk44_0?: number;
    level: number;
    unk46: number;
    unk48_0?: number;
    unk50_0?: number;
};

type PKTNewNpc = {
    unk1_0?: number;
    unk1_0_0?: string;
    unk1_1?: string;
    unk3: number;
    npcStruct: NpcData;
    unk6_0?: bigint;
};

type PKTNewNpcSummon = {
    publishReason: number;
    ownerId: bigint;
    npcData: NpcData;
};

type PCStruct = {
    petId: number;
    lookData: Buffer;
    unk15_m: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    characterId: bigint;
    unk5_m: number;
    unk23_m: number;
    avatarHide: number;
    equipLifeToolDataList: EquipItemData[];
    unk4_m: number;
    unk2_m: number;
    statusEffectDatas: StatusEffectData[];
    level: number;
    worldId: number;
    unk14: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    guildName: string;
    secondHonorTitleId: number;
    addonFeatureIdList: Buffer;
    guildId: bigint;
    rvRLevel: number;
    playerId: bigint;
    identityData: Buffer;
    heading: Angle;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    unk25: number;
    classId: number;
    unk25_m: number;
    grabbedData?: Buffer;
    unk17_m: number;
    equipItemDataList: EquipItemData[];
    unk7_m: number;
    maxItemLevel: number;
    unk1_m: number;
    position: Vector3F;
    unk28_m: number;
    name: string;
    unk29_m: number;
    unk39: number;
    avgItemLevel: number;
    firstHonorTitleId: number;
    unk42: number;
    unk0_m: Buffer;
    unk45_m: number;
    unk32_m: number;
};

type TrackMoveInfo = {
    unk1_0?: Buffer;
    unk2: Buffer;
    unk3: number;
    unk4: number;
};

type PKTNewPC = {
    pcStruct: PCStruct;
    unk5_0_m?: Buffer;
    unk0_m: number;
    unk2_m: number;
    unk3_0_m?: number;
    trackMoveInfo?: TrackMoveInfo;
    unk4_0_m?: Buffer;
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
    unk1_0?: bigint;
    ownerId: bigint;
    unk3: number;
    unk4: number;
    skillId: number;
    unk7_0?: number;
    struct_333?: Buffer;
    unk10: number;
    skillLevel: number;
    unk12: number;
    unk13: bigint;
    projectileId: bigint;
    chainSkillEffect: number;
    unk16: number;
    skillEffect: number;
    unk18: bigint;
    unk19: number;
    targetObjectId: bigint;
    tripodLevel: TripodLevel;
    tripodIndex: TripodIndex;
    unk23: number;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    objectId: bigint;
    unk1: number;
    unk2: number;
    position: Vector3F;
    skillEffect: number;
    ownerId: bigint;
    unk6: number;
    unk7: number;
    unk8: number;
    struct_333?: Buffer;
    unk11: number;
    unk12: number;
    skillId: number;
};

type PKTNewTrap = {
    unk0: number;
    unk1: number;
    trapData: TrapData;
};

type PKTParalyzationStateNotify = {
    paralyzationPoint: number;
    objectId: bigint;
    decreasePoint: number;
    hitCheckTime: number;
    noHitCheckTime: number;
    paralyzationMaxPoint: number;
    enable: boolean;
};

type PartyMemberData = {
    curHp: bigint;
    name: string;
    unk2: number;
    worldId: number;
    maxHp: bigint;
    position: Vector3F;
    unk6: number;
    zoneId: number;
    classId: number;
    auths: number;
    characterLevel: number;
    unk11: number;
    unk12: number;
    transitIndex: number;
    partyMemberNumber: number;
    characterId: bigint;
    zoneInstId: bigint;
    gearLevel: number;
    unk18: number;
    unk19: number;
};

type PKTPartyInfo = {
    partyLootType: number;
    raidInstanceId: number;
    partyType: number;
    memberDatas: PartyMemberData[];
    partyInstanceId: number;
    lootGrade: number;
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
    unk0: bigint;
    playerIdOnRefresh: bigint;
    characterId: bigint;
    statusEffectDatas: StatusEffectData[];
    unk4: number;
};

type PKTPartyStatusEffectRemoveNotify = {
    unk0: bigint;
    reason: number;
    characterId: bigint;
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
    unk11_m: boolean;
    initBraveHeartCount: number;
    braveHeartCount: number;
    raidId: number;
    unk0_m: boolean;
    bossKillDataList: BossKillData[];
    endTick: bigint;
    unk1_m: boolean;
    startTick: bigint;
    totalTime: bigint;
    unk4_m: bigint;
    raidResult: number;
    unk5_m: bigint;
    unk6_m: bigint;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: bigint;
    unk1: number;
    unk2: bigint;
    unk3: number;
    struct_52: {
        unk1_0_0: number;
        unk1_0_1: bigint;
        unk1_0_2: bigint;
        struct_517: Buffer;
    }[];
    unk5: number;
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
    maxHp: bigint;
    damage: bigint;
    curHp: bigint;
    unk3_m: number;
    targetId: bigint;
    modifier: number;
    damageType: number;
    damageAttr?: number;
};

type SkillDamageAbnormalMoveEvent = {
    destination: Vector3F;
    skillMoveOptionData: SkillMoveOptionData;
    position: Vector3F;
    unk4_m: number;
    unk8_m: number;
    skillDamageEvent: SkillDamageEvent;
    unk2_m: bigint;
    unk1_m: number;
    unk3_m: number;
};

type PKTSkillDamageAbnormalMoveNotify = {
    skillId: number;
    unk2_m: number;
    skillEffectId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    sourceId: bigint;
    unk1_m: number;
};

type PKTSkillDamageNotify = {
    sourceId: bigint;
    skillDamageEvents: SkillDamageEvent[];
    skillLevel: number;
    skillId: number;
    skillEffectId: number;
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
    skillLevel: number;
    aimTargetPosition: Vector3F;
    newDirectionYaw: Angle;
    newPosition: Vector3F;
    pitchRotation?: Angle;
    unk1_m?: number;
    skillId: number;
    aiStateId?: number;
    sourceId: bigint;
    skillOptionData: SkillOptionData;
    curPosition: Vector3F;
    curDirectionYaw: Angle;
};

type PKTStatChangeOriginNotify = {
    unk0: {
        value: bigint;
        statType: number;
    }[];
    unk1: {
        value: bigint;
        statType: number;
    }[];
    unk2: number;
    unk4_0?: number;
    objectId: bigint;
};

type PKTStatusEffectAddNotify = {
    objectId: bigint;
    statusEffectData: StatusEffectData;
    unk2: bigint;
    unk4_0?: bigint;
    new: boolean;
};

type PKTStatusEffectRemoveNotify = {
    reason: number;
    objectId: bigint;
    statusEffectIds: number[];
};

type PKTStatusEffectDurationNotify = {
    expirationTick: bigint;
    effectInstanceId: number;
    targetId: bigint;
};

type PKTStatusEffectSyncDataNotify = {
    characterId: bigint;
    effectInstanceId: number;
    objectId: bigint;
    value: number;
};

type PKTTriggerBossBattleStatus = {
    step: number;
    unk2_m: boolean;
    triggerId: number;
};

type PKTTriggerFinishNotify = {
    unk0_m: number;
    involvedPCs: bigint[];
    packetResultCode: number;
    triggerId: number;
};

type PKTTriggerStartNotify = {
    sourceId: bigint;
    triggerId: number;
    triggerSignalType: number;
    involvedPCs: bigint[];
};

type PKTTroopMemberUpdateMinNotify = {
    unk0_m: number;
    statusEffectDatas: StatusEffectData[];
    position: bigint;
    maxHp: bigint;
    curHp: bigint;
    characterId: bigint;
};

type PKTIdentityGaugeChangeNotify = {
    playerId: bigint;
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
};

type PKTZoneMemberLoadStatusNotify = {
    loadComplete: boolean;
    zoneInstId: bigint;
    zoneId: number;
    totalMembers: bigint[];
    firstPCEnterTick: bigint;
    zoneLevel: number;
    completeMembers: bigint[];
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    id: number;
    target: number;
    stackCount: number;
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
