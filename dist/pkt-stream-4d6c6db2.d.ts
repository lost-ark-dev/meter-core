import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from './decompressor.js';

type AbilityData = {
    points: number;
    level: number;
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
    activeAbilityList: ActiveAbility[];
    objectId: bigint;
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
    unk1_m: Buffer;
    packetResultCode: number;
};

type PKTBlockSkillStateNotify = {
    paralyzationMaxPoint: number;
    type: number;
    objectId: bigint;
    paralyzationPoint: number;
};

type PKTCounterAttackNotify = {
    sourceId: bigint;
    targetId: bigint;
    type: number;
};

type PKTDeathNotify = {
    unk0: number;
    unk2_0?: number;
    unk3: number;
    unk5_0?: number;
    unk6: number;
    unk8_0?: number;
    sourceId: bigint;
    unk10: number;
    targetId: bigint;
    unk12: bigint;
};

type LostArkDateTime = Date;

type EquipItemData = {
    unk1_0?: number;
    slot: number;
    level: number;
    itemTint: Buffer;
    expireTime: LostArkDateTime;
    id: number;
};

type PKTEquipChangeNotify = {
    objectId: bigint;
    equipItemDataList: EquipItemData[];
    unk2: number;
    unk3: number;
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
    struct_129: Buffer;
};

type PKTInitEnv = {
    unk0: bigint;
    unk1: number;
    unk2: number;
    playerId: bigint;
    unk4: number;
    struct_574: string;
    lostArkDateTime: LostArkDateTime;
    struct_30: {
        struct_560: string;
        struct_574: string;
        versionString: string;
    }[];
};

type PeriodUpdateStatData = {
    unk0: number;
    unk1: bigint;
    unk2: bigint;
    unk3: number;
    unk4: number;
    unk5: bigint;
    unk6: number;
};

type StatusEffectData = {
    occurTime: LostArkDateTime;
    struct_445: Buffer;
    stackCount: number;
    effectInstanceId: number;
    statusEffectId: number;
    unk6_0?: bigint;
    skillLevel: number;
    value?: Buffer;
    sourceId: bigint;
    totalTime: number;
    endTick: bigint;
};

type PKTInitPC = {
    classId: number;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
    unk8: number;
    unk9: number;
    unk10: Buffer;
    unk11: number;
    unk12: bigint;
    unk13: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk15: Buffer;
    struct_341: Buffer;
    unk17: number;
    unk18: number;
    struct_336: string;
    unk20: number;
    unk21: number;
    unk22: number;
    unk23: number;
    characterId: bigint;
    unk25: number;
    struct_222: Buffer;
    unk27: bigint;
    unk28: number;
    unk29: number;
    unk30: number;
    unk31: number;
    unk32: number;
    struct_99: Buffer;
    unk34: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk37_0?: number;
    unk38: number;
    unk39: bigint;
    unk40: number;
    unk41: number;
    unk42: number;
    level: number;
    unk44: number;
    unk45: number;
    playerId: bigint;
    unk47: number;
    unk48: number;
    unk49: number;
    unk50: number;
    gearLevel: number;
    unk52: Buffer;
    name: string;
    statusEffectDatas: StatusEffectData[];
    unk55: bigint;
    unk56: number;
    unk57: number;
};

type Struct_139 = {
    unk1_0?: Buffer;
};

type Struct_636 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    struct_140: Buffer;
    struct_139: Struct_139;
    unk6: number;
    unk7: number;
};

type Struct_642 = {
    unk0: number;
    unk1: number;
    struct_391: Buffer;
    unk3: number;
    struct_256: Buffer;
    unk5: number;
    unk6: bigint;
    struct_233: Struct_636[];
    unk8: number;
    struct_235: Buffer;
    unk10: number;
    unk11: number;
    unk12: number;
    struct_489: Buffer;
};

type Struct_641 = {
    unk1_0?: number;
    struct_186?: Buffer;
    unk1_2?: number;
    struct_267: Buffer;
    struct_440: Buffer;
    struct_228?: Buffer;
    unk5: number;
    unk6: number;
    itemTint: Buffer;
    unk8: number;
    struct_230: Buffer;
    unk10: number;
    unk11: number;
    unk12: number;
    struct_269: Buffer;
    unk14: number;
    unk16_0?: Buffer;
};

type Struct_586 = {
    struct_126: Buffer;
    unk1: number;
    struct_0: {
        struct_516: Buffer;
        unk1_0_1: number;
    }[];
    unk3: number;
    unk4: number;
};

type Struct_635 = {
    unk0: number;
    struct_232: Buffer;
    unk2: number;
    struct_23: {
        unk1_0_0: number;
        struct_229: string;
        unk1_0_2: number;
    }[];
    unk4: number;
    struct_230: Buffer;
};

type Struct_533 = {
    struct_642?: Struct_642;
    struct_125?: Buffer;
    unk2_1?: number;
    struct_1?: {
        struct_516: Buffer;
        unk1_0_1: number;
        unk1_0_2: number;
        unk1_0_3: number;
    }[];
    unk3_0?: Buffer;
    unk4_0?: number;
    unk4_1?: Buffer;
    unk4_2?: Buffer;
    struct_641?: Struct_641;
    struct_586?: Struct_586;
    unk7_0?: Buffer;
    struct_635?: Struct_635;
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
    itemDataList: ItemData[];
    storageType: number;
};

type Struct_729 = {
    unk1_0?: Buffer;
    unk3_0?: number;
    unk4: number;
    unk5: number;
    unk6: number;
};

type PKTInitLocal = {
    unk0: number;
    unk1: number;
    struct_222: Buffer;
    unk3: bigint;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk6: number;
    struct_129: Buffer;
    abilityDataList: AbilityData[];
    addonFeatureIdList: Buffer;
    struct_341: Buffer;
    statusEffectDatas: StatusEffectData[];
    struct_422: Struct_729[];
    unk13: number;
    unk15_0?: number;
    unk16: bigint;
};

type PKTMigrationExecute = {
    account_CharacterId1: bigint;
    serverAddr: string;
    account_CharacterId2: bigint;
    unk3: number;
};

type Struct_709 = {
    lostArkString: string;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: bigint;
    equipItemDataList: EquipItemData[];
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
    unk1_0?: number;
    unk3_0?: bigint;
    unk5_0?: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk8_0?: number;
    unk10_0?: number;
    struct_337?: Buffer;
    unk14_0?: number;
    unk15: number;
    unk17_0?: number;
    unk18: number;
    position: Vector3F;
    struct_268?: Buffer;
    unk23_0?: number;
    unk24: number;
    balanceLevel?: number;
    unk27: number;
    unk29_0?: number;
    level: number;
    typeId: number;
    directionYaw: Angle;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    spawnIndex: number;
    unk35: number;
    objectId: bigint;
    statusEffectDatas: StatusEffectData[];
    unk39_0?: number;
    unk41_0?: number;
    struct_709?: Struct_709;
    transitIndex?: number;
    unk46: number;
    unk48_0?: number;
    unk50_0?: number;
};

type PKTNewNpc = {
    unk1_0_0?: bigint;
    unk2: number;
    unk1_0?: string;
    unk1_1?: string;
    unk5_0?: number;
    npcStruct: NpcData;
};

type PKTNewNpcSummon = {
    npcData: NpcData;
    publishReason: number;
    ownerId: bigint;
};

type PCStruct = {
    unk0_m: Buffer;
    unk1_m: number;
    unk2_m: number;
    level: number;
    unk4_m: number;
    unk7_m: number;
    secondHonorTitleId: number;
    unk5_m: number;
    statusEffectDatas: StatusEffectData[];
    classId: number;
    heading: Angle;
    identityData: Buffer;
    avatarHide: number;
    unk13: number;
    rvRLevel: number;
    unk15_m: number;
    avgItemLevel: number;
    unk17_m: number;
    addonFeatureIdList: Buffer;
    lookData: Buffer;
    equipLifeToolDataList: EquipItemData[];
    periodUpdateStatDataList: PeriodUpdateStatData[];
    firstHonorTitleId: number;
    unk23_m: number;
    unk24: number;
    unk25_m: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk27_m: number;
    unk28_m: number;
    unk29_m: number;
    name: string;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk32_m: number;
    grabbedData?: Buffer;
    playerId: bigint;
    guildName: string;
    unk37: number;
    guildId: number;
    maxItemLevel: number;
    petId: number;
    equipItemDataList: EquipItemData[];
    position: Vector3F;
    characterId: bigint;
    unk44: number;
    unk45_m: number;
};

type TrackMoveInfo = {
    unk0: Buffer;
    unk2_0?: Buffer;
    unk3: number;
    unk4: number;
};

type PKTNewPC = {
    unk5_0_m?: Buffer;
    unk3_0_m?: number;
    pcStruct: PCStruct;
    unk0_m: number;
    trackMoveInfo?: TrackMoveInfo;
    unk2_m: number;
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
    unk0: number;
    unk1: number;
    targetObjectId: bigint;
    unk3: number;
    unk4: number;
    skillEffect: number;
    tripodIndex: TripodIndex;
    unk7: number;
    tripodLevel: TripodLevel;
    unk9: bigint;
    unk11_0?: number;
    projectileId: bigint;
    struct_337?: Buffer;
    ownerId: bigint;
    unk16: number;
    chainSkillEffect: number;
    unk18: bigint;
    skillLevel: number;
    skillId: number;
    unk21: number;
    unk23_0?: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type PKTParalyzationStateNotify = {
    objectId: bigint;
    noHitCheckTime: number;
    paralyzationMaxPoint: number;
    paralyzationPoint: number;
    hitCheckTime: number;
    enable: boolean;
    decreasePoint: number;
};

type PartyMemberData = {
    zoneId: number;
    unk1: number;
    unk2: number;
    worldId: number;
    classId: number;
    unk5: number;
    unk6: number;
    maxHp: bigint;
    position: Vector3F;
    unk9: number;
    curHp: bigint;
    auths: number;
    name: string;
    transitIndex: number;
    characterLevel: number;
    characterId: bigint;
    partyMemberNumber: number;
    gearLevel: number;
    unk18: number;
    zoneInstId: bigint;
};

type PKTPartyInfo = {
    raidInstanceId: number;
    lootGrade: number;
    partyLootType: number;
    partyInstanceId: number;
    memberDatas: PartyMemberData[];
    partyType: number;
};

type PKTPartyLeaveResult = {
    partyInstanceId: number;
    name: string;
    partyLeaveType: number;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
    objectId: bigint;
    unk0_m: number;
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    objectId: bigint;
};

type PKTPartyStatusEffectAddNotify = {
    statusEffectDatas: StatusEffectData[];
    playerIdOnRefresh: bigint;
    characterId: bigint;
    unk3: number;
    unk4: bigint;
};

type PKTPartyStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    characterId: bigint;
    unk2: bigint;
    reason: number;
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

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: bigint;
    unk1: bigint;
    unk2: number;
    unk3: number;
    unk4: bigint;
    unk5: number;
    struct_50: {
        struct_522: Buffer;
        unk1_0_1: bigint;
        unk1_0_2: bigint;
        unk1_0_3: number;
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
    skillLevel: number;
    caster: bigint;
    skillId: number;
};

type SkillDamageEvent = {
    damageType: number;
    modifier: number;
    unk3_m: number;
    maxHp: bigint;
    damageAttr?: number;
    curHp: bigint;
    damage: bigint;
    targetId: bigint;
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
    position: Vector3F;
    skillDamageEvent: SkillDamageEvent;
    unk4_m: number;
    unk2_m: bigint;
    unk3_m: number;
    skillMoveOptionData: SkillMoveOptionData;
    unk1_m: number;
    destination: Vector3F;
};

type PKTSkillDamageAbnormalMoveNotify = {
    skillEffectId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    unk1_m: number;
    unk2_m: number;
    skillId: number;
    sourceId: bigint;
};

type PKTSkillDamageNotify = {
    skillLevel: number;
    sourceId: bigint;
    skillEffectId: number;
    skillDamageEvents: SkillDamageEvent[];
    skillId: number;
};

type PKTSkillStageNotify = {
    skillId: number;
    sourceId: bigint;
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
    skillId: number;
    newPosition: Vector3F;
    curDirectionYaw: Angle;
    unk1_m?: number;
    skillLevel: number;
    pitchRotation?: Angle;
    skillOptionData: SkillOptionData;
    newDirectionYaw: Angle;
    sourceId: bigint;
    aiStateId?: number;
    aimTargetPosition: Vector3F;
    curPosition: Vector3F;
};

type PKTStatChangeOriginNotify = {
    objectId: bigint;
    unk1: number;
    unk3_0?: number;
    statPairChangedList: {
        statType: number;
        value: bigint;
    }[];
    unk5: {
        statType: number;
        value: bigint;
    }[];
};

type PKTStatusEffectAddNotify = {
    new: boolean;
    unk1: bigint;
    unk3_0?: bigint;
    objectId: bigint;
    statusEffectData: StatusEffectData;
};

type PKTStatusEffectRemoveNotify = {
    reason: number;
    statusEffectIds: number[];
    objectId: bigint;
};

type PKTStatusEffectDurationNotify = {
    targetId: bigint;
    expirationTick: bigint;
    effectInstanceId: number;
};

type PKTStatusEffectSyncDataNotify = {
    objectId: bigint;
    value: number;
    effectInstanceId: number;
    characterId: bigint;
};

type PKTTriggerBossBattleStatus = {
    triggerId: number;
    unk2_m: boolean;
    step: number;
};

type PKTTriggerFinishNotify = {
    packetResultCode: number;
    unk0_m: number;
    involvedPCs: bigint[];
    triggerId: number;
};

type PKTTriggerStartNotify = {
    triggerSignalType: number;
    triggerId: number;
    sourceId: bigint;
    involvedPCs: bigint[];
};

type PKTTroopMemberUpdateMinNotify = {
    position: bigint;
    maxHp: bigint;
    statusEffectDatas: StatusEffectData[];
    unk0_m: number;
    curHp: bigint;
    characterId: bigint;
};

type PKTIdentityGaugeChangeNotify = {
    playerId: bigint;
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    stackCount: number;
    id: number;
    instanceId: bigint;
    target: number;
};

type PKTZoneStatusEffectAddNotify = {
    zoneStatusEffectDataList: ZoneStatusEffectData[];
};

type PKTZoneStatusEffectRemoveNotify = {
    statusEffectId: number;
};

type PKTPCInspectResult = {
    unk0: number;
    serverAddr: string;
    unk2: number;
    unk3: number;
    unk4: Buffer;
    struct_135: Buffer;
    unk6: number;
    passiveStatusEffectList: number[];
    unk8: Buffer;
    unk9: number;
    unk10: string;
    struct_289: Buffer;
    unk12: number;
    lookData: Buffer;
    struct_413: Buffer;
    struct_307: ItemData[];
    struct_556: string;
    unk17: number;
    unk18: number;
    unk19: number;
    unk20: string;
    unk21: number;
    struct_298: Buffer;
    struct_297: Buffer;
    struct_389: Buffer;
    unk25: number;
    unk26: number;
    unk27: number;
    struct_487: Buffer;
    unk29: number;
    unk30: bigint;
    struct_518: Buffer;
    struct_114: Buffer;
    unk33: Buffer;
    struct_310: ItemData[];
    unk35: Buffer;
    unk36: number;
    unk37: Buffer;
    unk38: number;
    unk39: number;
    abilityDataList: AbilityData[];
    unk41: number;
    unk42: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk44: number;
    struct_525: Buffer;
    unk46: number;
    unk47: number;
    struct_197: Buffer;
    struct_308: ItemData[];
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
    PKTZoneObjectUnpublishNotify: (pkt: PKT<PKTZoneObjectUnpublishNotify>) => void;
    PKTZoneStatusEffectAddNotify: (pkt: PKT<PKTZoneStatusEffectAddNotify>) => void;
    PKTZoneStatusEffectRemoveNotify: (pkt: PKT<PKTZoneStatusEffectRemoveNotify>) => void;
    PKTPCInspectResult: (pkt: PKT<PKTPCInspectResult>) => void;
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
