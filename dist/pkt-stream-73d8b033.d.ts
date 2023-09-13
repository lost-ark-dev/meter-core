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
    activeAbilityList: ActiveAbility[];
    objectId: bigint;
};

type PKTAddonSkillFeatureChangeNotify = {
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    addonFeatureIdList: Buffer;
    objectId: bigint;
};

type PKTAuthTokenResult = {
    unk1_m: Buffer;
    unk1: number;
};

type PKTBlockSkillStateNotify = {
    type: number;
    paralyzationMaxPoint: number;
    objectId: bigint;
    paralyzationPoint: number;
};

type PKTCounterAttackNotify = {
    targetId: bigint;
    type: number;
    sourceId: bigint;
};

type PKTDeathNotify = {
    unk1_0?: number;
    sourceId: bigint;
    unk3: number;
    unk4: number;
    targetId: bigint;
    unk7_0?: number;
    unk8: number;
    unk10_0?: number;
    unk11: number;
    unk12: bigint;
};

type LostArkDateTime = Date;

type EquipItemData = {
    unk1_0?: number;
    id: number;
    slot: number;
    expireTime: LostArkDateTime;
    level: number;
    itemTint: Buffer;
};

type PKTEquipChangeNotify = {
    unk0: number;
    objectId: bigint;
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
    struct_132: Buffer;
};

type PKTInitEnv = {
    unk0: number;
    unk1: number;
    unk2: number;
    struct_576: string;
    unk4: bigint;
    playerId: bigint;
    struct_29: {
        struct_560: string;
        versionString: string;
        struct_576: string;
    }[];
    lostArkDateTime: LostArkDateTime;
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
    skillLevel: number;
    sourceId: bigint;
    occurTime: LostArkDateTime;
    stackCount: number;
    value?: Buffer;
    struct_437: Buffer;
    effectInstanceId: number;
    totalTime: number;
    statusEffectId: number;
    endTick: bigint;
    unk12_0?: bigint;
};

type PKTInitPC = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    struct_102: Buffer;
    unk6: Buffer;
    unk7: number;
    playerId: bigint;
    unk9: number;
    unk10: number;
    unk11: number;
    unk12: number;
    unk13: number;
    unk14: number;
    unk15: bigint;
    unk16: number;
    struct_217: Buffer;
    unk18: number;
    unk19: number;
    unk20: number;
    unk21: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk23: number;
    gearLevel: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk26: number;
    unk27: number;
    classId: number;
    unk29: bigint;
    unk30: number;
    unk31: bigint;
    unk32: number;
    unk33: bigint;
    unk34: number;
    level: number;
    unk36: bigint;
    unk37: number;
    unk38: number;
    unk40_0?: number;
    unk41: number;
    unk42: number;
    characterId: bigint;
    unk44: number;
    unk45: Buffer;
    unk46: Buffer;
    unk47: number;
    unk48: number;
    name: string;
    struct_328: string;
    unk51: number;
    unk52: number;
    statusEffectDatas: StatusEffectData[];
    unk54: number;
    unk55: number;
    unk56: number;
    struct_334: Buffer;
};

type Struct_138 = {
    unk1_0?: Buffer;
};

type Struct_638 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    struct_138: Struct_138;
    struct_139: Buffer;
    unk6: number;
    unk7: number;
};

type Struct_644 = {
    unk0: number;
    unk1: number;
    struct_251: Buffer;
    unk3: number;
    struct_227: Struct_638[];
    unk5: number;
    struct_383: Buffer;
    unk7: number;
    unk8: bigint;
    unk9: number;
    struct_229: Buffer;
    unk11: number;
    struct_140: Buffer;
    unk13: number;
};

type Struct_643 = {
    struct_225: Buffer;
    unk1: number;
    itemTint: Buffer;
    struct_262: Buffer;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
    struct_264: Buffer;
    unk9: number;
    unk10: number;
    unk12_0?: Buffer;
    unk1_0?: number;
    unk1_1?: number;
    struct_184?: Buffer;
    struct_222?: Buffer;
    struct_432: Buffer;
};

type BossKillData = {
    isDead: boolean;
    npcId: number;
};

type Struct_591 = {
    unk0: number;
    unk1: number;
    struct_1: {
        struct_511: Buffer;
        unk1_0_1: number;
    }[];
    unk3: number;
    bossKillDataList: BossKillData[];
};

type Struct_637 = {
    struct_23: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_224: string;
    }[];
    unk1: number;
    unk2: number;
    struct_226: Buffer;
    struct_225: Buffer;
    unk5: number;
};

type Struct_547 = {
    struct_644?: Struct_644;
    unk2_0?: number;
    struct_129?: Buffer;
    struct_2?: {
        unk1_0_0: number;
        unk1_0_1: number;
        unk1_0_2: number;
        struct_511: Buffer;
    }[];
    unk3_0?: Buffer;
    unk4_0?: number;
    unk4_1?: Buffer;
    unk4_2?: Buffer;
    struct_643?: Struct_643;
    struct_591?: Struct_591;
    unk7_0?: Buffer;
    struct_637?: Struct_637;
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
    itemDataList: ItemData[];
    storageType: number;
};

type Struct_733 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk4_0?: Buffer;
    unk6_0?: number;
};

type PKTInitLocal = {
    unk0: bigint;
    unk1: number;
    struct_217: Buffer;
    struct_334: Buffer;
    unk4: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    struct_415: Struct_733[];
    unk7: number;
    unk8: bigint;
    addonFeatureIdList: Buffer;
    unk10: number;
    statusEffectDatas: StatusEffectData[];
    struct_132: Buffer;
    unk14_0?: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    abilityDataList: AbilityData[];
};

type PKTMigrationExecute = {
    account_CharacterId1: bigint;
    unk1: number;
    account_CharacterId2: bigint;
    serverAddr: string;
};

type Struct_713 = {
    equipItemDataList: EquipItemData[];
    unk1: bigint;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    lookData: Buffer;
    lostArkString: string;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    directionYaw: Angle;
    struct_263?: Buffer;
    unk4_0?: number;
    level: number;
    unk6: number;
    unk8_0?: number;
    unk10_0?: number;
    struct_329?: Buffer;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk14: number;
    balanceLevel?: number;
    spawnIndex: number;
    unk19_0?: number;
    unk21_0?: number;
    unk23_0?: number;
    unk24: number;
    unk26_0?: bigint;
    unk27: number;
    unk29_0?: number;
    unk30: number;
    unk32_0?: number;
    struct_713?: Struct_713;
    unk36_0?: number;
    unk38_0?: number;
    unk40_0?: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk43_0?: number;
    position: Vector3F;
    statusEffectDatas: StatusEffectData[];
    unk46: number;
    objectId: bigint;
    transitIndex?: number;
    typeId: number;
};

type PKTNewNpc = {
    unk1_0?: number;
    unk3_0?: bigint;
    npcStruct: NpcData;
    unk1_0_0?: string;
    unk1_1?: string;
    unk6: number;
};

type PKTNewNpcSummon = {
    ownerId: bigint;
    publishReason: number;
    npcData: NpcData;
};

type PCStruct = {
    unk4_m: number;
    unk17_m: number;
    unk29_m: number;
    unk23_m: number;
    heading: Angle;
    guildId: bigint;
    position: Vector3F;
    unk7_m: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    addonFeatureIdList: Buffer;
    rvRLevel: number;
    secondHonorTitleId: number;
    unk15_m: number;
    grabbedData?: Buffer;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk17: number;
    avatarHide: number;
    name: string;
    unk45_m: number;
    unk1_m: number;
    unk22: number;
    unk2_m: number;
    equipItemDataList: EquipItemData[];
    equipLifeToolDataList: EquipItemData[];
    unk26: number;
    level: number;
    unk0_m: Buffer;
    petId: number;
    unk5_m: number;
    unk32_m: number;
    worldId: number;
    unk25_m: number;
    guildName: string;
    avgItemLevel: number;
    lookData: Buffer;
    firstHonorTitleId: number;
    characterId: bigint;
    playerId: bigint;
    identityData: Buffer;
    unk28_m: number;
    unk42: number;
    statusEffectDatas: StatusEffectData[];
    maxItemLevel: number;
    classId: number;
};

type TrackMoveInfo = {
    unk0: number;
    unk1: number;
    unk2: Buffer;
    unk4_0?: Buffer;
};

type PKTNewPC = {
    pcStruct: PCStruct;
    unk0_m: number;
    trackMoveInfo?: TrackMoveInfo;
    unk2_m: number;
    unk4_0_m?: Buffer;
    unk3_0_m?: number;
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
    unk1_0?: number;
    unk2: number;
    unk3: bigint;
    unk4: bigint;
    unk6_0?: bigint;
    ownerId: bigint;
    unk8: number;
    unk9: number;
    unk10: number;
    unk11: number;
    unk12: number;
    struct_329?: Buffer;
    chainSkillEffect: number;
    skillEffect: number;
    targetObjectId: bigint;
    unk18: number;
    skillLevel: number;
    skillId: number;
    tripodLevel: TripodLevel;
    tripodIndex: TripodIndex;
    projectileId: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    unk0: number;
    unk1: number;
    skillId: number;
    ownerId: bigint;
    skillEffect: number;
    objectId: bigint;
    position: Vector3F;
    unk7: number;
    unk8: number;
    unk9: number;
    unk10: number;
    unk11: number;
    struct_329?: Buffer;
};

type PKTNewTrap = {
    unk0: number;
    unk1: number;
    trapData: TrapData;
};

type PKTParalyzationStateNotify = {
    objectId: bigint;
    hitCheckTime: number;
    noHitCheckTime: number;
    decreasePoint: number;
    paralyzationMaxPoint: number;
    enable: boolean;
    paralyzationPoint: number;
};

type PartyMemberData = {
    classId: number;
    unk1: number;
    position: Vector3F;
    unk3: number;
    transitIndex: number;
    worldId: number;
    unk6: number;
    name: string;
    auths: number;
    unk9: number;
    characterLevel: number;
    curHp: bigint;
    partyMemberNumber: number;
    maxHp: bigint;
    gearLevel: number;
    unk15: number;
    characterId: bigint;
    unk17: number;
    zoneInstId: bigint;
    zoneId: number;
};

type PKTPartyInfo = {
    partyType: number;
    lootGrade: number;
    partyInstanceId: number;
    memberDatas: PartyMemberData[];
    raidInstanceId: number;
    partyLootType: number;
};

type PKTPartyLeaveResult = {
    name: string;
    partyInstanceId: number;
    partyLeaveType: number;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
    unk0_m: number;
    objectId: bigint;
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    objectId: bigint;
    passiveStatusEffectList: number[];
};

type PKTPartyStatusEffectAddNotify = {
    unk0: bigint;
    characterId: bigint;
    playerIdOnRefresh: bigint;
    statusEffectDatas: StatusEffectData[];
    unk4: number;
};

type PKTPartyStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    characterId: bigint;
    reason: number;
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
    initBraveHeartCount: number;
    unk0_m: boolean;
    raidId: number;
    unk4_m: bigint;
    endTick: bigint;
    unk11_m: boolean;
    bossKillDataList: BossKillData[];
    unk1_m: boolean;
    startTick: bigint;
    unk6_m: bigint;
    unk5_m: bigint;
    raidResult: number;
    totalTime: bigint;
    braveHeartCount: number;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: number;
    unk1: bigint;
    struct_50: {
        unk1_0_0: bigint;
        unk1_0_1: number;
        unk1_0_2: bigint;
        struct_517: Buffer;
    }[];
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
    skillLevel: number;
    skillId: number;
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
    unk3_m: number;
    targetId: bigint;
    maxHp: bigint;
    modifier: number;
    damageType: number;
    curHp: bigint;
    damageAttr?: number;
    damage: bigint;
};

type SkillDamageAbnormalMoveEvent = {
    unk1_m: number;
    skillMoveOptionData: SkillMoveOptionData;
    destination: Vector3F;
    unk3_m: number;
    unk2_m: bigint;
    unk4_m: number;
    unk8_m: number;
    skillDamageEvent: SkillDamageEvent;
    position: Vector3F;
};

type PKTSkillDamageAbnormalMoveNotify = {
    unk1_m: number;
    skillId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    sourceId: bigint;
    skillEffectId: number;
    unk2_m: number;
};

type PKTSkillDamageNotify = {
    skillId: number;
    skillDamageEvents: SkillDamageEvent[];
    skillEffectId: number;
    skillLevel: number;
    sourceId: bigint;
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
    newDirectionYaw: Angle;
    sourceId: bigint;
    skillOptionData: SkillOptionData;
    curDirectionYaw: Angle;
    aimTargetPosition: Vector3F;
    unk1_m?: number;
    aiStateId?: number;
    pitchRotation?: Angle;
    newPosition: Vector3F;
    skillId: number;
    curPosition: Vector3F;
    skillLevel: number;
};

type PKTStatChangeOriginNotify = {
    statPairList: {
        value: bigint;
        statType: number;
    }[];
    unk2_0?: number;
    unk3: {
        value: bigint;
        statType: number;
    }[];
    unk4: number;
    objectId: bigint;
};

type PKTStatusEffectAddNotify = {
    statusEffectData: StatusEffectData;
    unk1: bigint;
    new: boolean;
    objectId: bigint;
    unk5_0?: bigint;
};

type PKTStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    objectId: bigint;
    reason: number;
};

type PKTStatusEffectDurationNotify = {
    effectInstanceId: number;
    expirationTick: bigint;
    targetId: bigint;
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
    involvedPCs: bigint[];
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
    characterId: bigint;
    maxHp: bigint;
    unk0_m: number;
    curHp: bigint;
    position: bigint;
    statusEffectDatas: StatusEffectData[];
};

type PKTIdentityGaugeChangeNotify = {
    playerId: bigint;
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
};

type PKTZoneMemberLoadStatusNotify = {
    zoneId: number;
    completeMembers: bigint[];
    zoneLevel: number;
    totalMembers: bigint[];
    zoneInstId: bigint;
    loadComplete: boolean;
    firstPCEnterTick: bigint;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    stackCount: number;
    id: number;
    target: number;
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
