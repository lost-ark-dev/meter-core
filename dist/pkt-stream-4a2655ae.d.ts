import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from './decompressor.js';

type AbilityData = {
    level: number;
    id: number;
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
    objectId: bigint;
    paralyzationMaxPoint: number;
    paralyzationPoint: number;
    type: number;
};

type PKTCounterAttackNotify = {
    type: number;
    targetId: bigint;
    sourceId: bigint;
};

type PKTDeathNotify = {
    targetId: bigint;
    unk2_m: number;
    damageAttr?: number;
    effectId: number;
    unk0_m: bigint;
    directionYaw: number;
    deathType?: number;
    durabilityDecrement: number;
    sourceId: bigint;
    abnormalStatusType?: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    unk1_0?: number;
    id: number;
    expireTime: LostArkDateTime;
    itemTint: Buffer;
    unk5: number;
    level: number;
    slot: number;
};

type PKTEquipChangeNotify = {
    unk0: number;
    equipItemDataList: EquipItemData[];
    unk2: number;
    objectId: bigint;
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
    struct_137: Buffer;
};

type PKTInitEnv = {
    lostArkDateTime: LostArkDateTime;
    struct_597: string;
    unk2: number;
    struct_31: {
        versionString: string;
        struct_597: string;
        struct_580: string;
    }[];
    unk4: number;
    playerId: bigint;
    unk6: bigint;
    unk7: number;
};

type StatusEffectData = {
    sourceId: bigint;
    statusEffectId: number;
    totalTime: number;
    effectInstanceId: number;
    endTick: bigint;
    struct_443: Buffer;
    unk7_0?: bigint;
    occurTime: LostArkDateTime;
    skillLevel: number;
    value?: Buffer;
    stackCount: number;
};

type PeriodUpdateStatData = {
    unk0: number;
    unk1: bigint;
    unk2: bigint;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: bigint;
};

type PKTInitPC = {
    unk0: bigint;
    name: string;
    gearLevel: number;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
    statusEffectDatas: StatusEffectData[];
    unk9: number;
    unk10: number;
    unk11: number;
    struct_368: string;
    unk13: number;
    struct_105: Buffer;
    unk15: number;
    unk16: bigint;
    unk17: Buffer;
    unk18: number;
    struct_226: Buffer;
    unk20: bigint;
    unk21: number;
    unk22: number;
    classId: number;
    unk24: Buffer;
    unk25: bigint;
    unk26: number;
    unk27: number;
    unk28: number;
    unk29: Buffer;
    unk30: number;
    unk31: bigint;
    unk33_0?: number;
    unk34: number;
    unk35: number;
    level: number;
    unk37: number;
    unk38: number;
    unk39: number;
    unk40: number;
    unk41: number;
    unk42: number;
    unk43: number;
    playerId: bigint;
    unk45: number;
    characterId: bigint;
    unk47: number;
    unk48: number;
    unk49: number;
    unk50: number;
    unk51: number;
    unk52: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk54: number;
    struct_342: Buffer;
    unk56: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
};

type Struct_145 = {
    unk1_0?: Buffer;
};

type Struct_660 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    struct_145: Struct_145;
    struct_146: Buffer;
};

type Struct_667 = {
    struct_393: Buffer;
    unk1: number;
    struct_147: Buffer;
    struct_237: Buffer;
    unk4: number;
    struct_235: Struct_660[];
    unk6: number;
    unk7: number;
    unk8: number;
    unk9: number;
    struct_258: Buffer;
    unk11: number;
    unk12: number;
    unk13: bigint;
};

type Struct_751 = {
    struct_99: Buffer;
    unk1: number;
    unk2: Buffer;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_792 = {
    struct_751?: Struct_751;
    unk2: Buffer;
    unk3: Buffer;
    unk4: number;
};

type Struct_666 = {
    unk0: number;
    unk1: number;
    unk3_0?: Buffer;
    unk4: number;
    struct_271: Buffer;
    unk6: number;
    unk7: number;
    unk1_0?: number;
    struct_190?: Buffer;
    unk1_2?: number;
    struct_231?: Buffer;
    struct_438: Buffer;
    struct_269: Buffer;
    itemTint: Buffer;
    unk14: number;
    unk16_0?: Buffer;
    struct_792?: Struct_792;
    struct_495: Buffer;
    unk20: number;
};

type BossKillData = {
    isDead: boolean;
    npcId: number;
};

type Struct_612 = {
    unk0: number;
    bossKillDataList: BossKillData[];
    struct_1: {
        unk1_0_0: number;
        struct_524: Buffer;
    }[];
    unk3: number;
    unk4: number;
};

type Struct_659 = {
    unk0: number;
    struct_495: Buffer;
    unk2: number;
    unk3: number;
    struct_234: Buffer;
    struct_24: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_233: string;
    }[];
};

type Struct_567 = {
    struct_667?: Struct_667;
    unk2_0?: number;
    struct_2?: {
        struct_524: Buffer;
        unk1_0_1: number;
        unk1_0_2: number;
        unk1_0_3: number;
    }[];
    struct_134?: Buffer;
    unk3_0?: Buffer;
    unk4_0?: Buffer;
    unk4_1?: Buffer;
    unk4_2?: number;
    struct_666?: Struct_666;
    struct_612?: Struct_612;
    unk7_0?: Buffer;
    struct_659?: Struct_659;
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
    struct_567?: Struct_567;
    unk1_15?: number;
};

type PKTInitItem = {
    itemDataList: ItemData[];
    storageType: number;
};

type Struct_756 = {
    unk0: number;
    unk2_0?: number;
    unk3: number;
    unk5_0?: Buffer;
    unk6: number;
};

type PKTInitLocal = {
    unk0: number;
    struct_226: Buffer;
    unk2: bigint;
    struct_422: Struct_756[];
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk5: number;
    unk6: number;
    statusEffectDatas: StatusEffectData[];
    unk8: bigint;
    struct_137: Buffer;
    addonFeatureIdList: Buffer;
    unk11: number;
    unk13_0?: number;
    abilityDataList: AbilityData[];
    struct_342: Buffer;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
};

type PKTMigrationExecute = {
    account_CharacterId1: bigint;
    serverAddr: string;
    account_CharacterId2: bigint;
    unk3: number;
};

type Struct_735 = {
    equipItemDataList: EquipItemData[];
    lostArkString: string;
    lookData: Buffer;
    unk3: number;
    unk4: bigint;
    unk5: number;
    unk6: bigint;
    unk7: number;
    unk8: number;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    statusEffectDatas: StatusEffectData[];
    unk2_0?: number;
    balanceLevel?: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk7_0?: number;
    unk8: number;
    unk10_0?: number;
    unk12_0?: number;
    struct_337?: Buffer;
    unk16_0?: number;
    transitIndex?: number;
    typeId: number;
    unk21_0?: number;
    unk22: number;
    unk24_0?: number;
    unk25: number;
    unk26: number;
    directionYaw: Angle;
    objectId: bigint;
    unk30_0?: number;
    unk32_0?: number;
    unk34_0?: number;
    unk35: number;
    unk37_0?: bigint;
    position: Vector3F;
    spawnIndex: number;
    unk41_0?: number;
    struct_735?: Struct_735;
    unk44: number;
    unk46_0?: number;
    struct_270?: Buffer;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    level: number;
};

type PKTNewNpc = {
    unk0: number;
    unk1_0?: string;
    unk1_1?: string;
    npcStruct: NpcData;
    unk4_0?: number;
    unk6_0?: bigint;
};

type PKTNewNpcSummon = {
    npcData: NpcData;
    ownerId: bigint;
    publishReason: number;
};

type TrackMoveInfo = {
    unk0: number;
    unk2_0?: Buffer;
    unk3: number;
    unk4: Buffer;
};

type PCStruct = {
    grabbedData?: Buffer;
    guildName: string;
    characterId: bigint;
    avatarHide: number;
    position: Vector3F;
    unk7_m: number;
    level: number;
    unk4_m: number;
    heading: Angle;
    worldId: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    guildId: bigint;
    avgItemLevel: number;
    equipLifeToolDataList: EquipItemData[];
    unk15: bigint;
    name: string;
    addonFeatureIdList: Buffer;
    statusEffectDatas: StatusEffectData[];
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk23_m: number;
    secondHonorTitleId: number;
    unk0_m: Buffer;
    unk23: number;
    unk1_m: number;
    unk45_m: number;
    playerId: bigint;
    lookData: Buffer;
    unk5_m: number;
    firstHonorTitleId: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk31: number;
    unk2_m: number;
    unk33: number;
    unk17_m: number;
    equipItemDataList: EquipItemData[];
    unk36: number;
    rvRLevel: number;
    maxItemLevel: number;
    unk25_m: number;
    petId: number;
    unk32_m: number;
    identityData: Buffer;
    unk29_m: number;
    unk44: number;
    classId: number;
    unk46: number;
};

type PKTNewPC = {
    unk5_0_m?: Buffer;
    unk1_0?: bigint;
    unk1_1?: number;
    itemTint?: Buffer;
    unk4_0_m?: Buffer;
    unk0_m: number;
    trackMoveInfo?: TrackMoveInfo;
    unk3_0_m?: number;
    unk2_m: number;
    pcStruct: PCStruct;
    struct_61?: {
        itemTint: Buffer;
        unk1_0_1: number;
        unk1_0_2: bigint;
    }[];
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
    tripodLevel: TripodLevel;
    chainSkillEffect: number;
    unk3: number;
    unk4: bigint;
    unk5: number;
    ownerId: bigint;
    unk7: number;
    unk8: number;
    skillEffect: number;
    struct_337?: Buffer;
    skillId: number;
    tripodIndex: TripodIndex;
    projectileId: bigint;
    skillLevel: number;
    targetObjectId: bigint;
    unk17: number;
    unk18: number;
    unk20_0?: number;
    unk22_0?: bigint;
    unk23: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    ownerId: bigint;
    skillId: number;
    position: Vector3F;
    unk3: number;
    unk4: number;
    unk5: number;
    skillEffect: number;
    objectId: bigint;
    unk8: number;
    unk9: number;
    unk10: number;
    unk11: number;
    struct_337?: Buffer;
};

type PKTNewTrap = {
    unk0: number;
    trapData: TrapData;
    unk2: number;
};

type PKTParalyzationStateNotify = {
    paralyzationPoint: number;
    decreasePoint: number;
    noHitCheckTime: number;
    enable: boolean;
    objectId: bigint;
    hitCheckTime: number;
    paralyzationMaxPoint: number;
};

type PartyMemberData = {
    unk0: number;
    zoneInstId: bigint;
    name: string;
    characterLevel: number;
    maxHp: bigint;
    gearLevel: number;
    characterId: bigint;
    position: Vector3F;
    auths: number;
    unk9: number;
    curHp: bigint;
    worldId: number;
    unk12: number;
    unk13: number;
    unk14: number;
    partyMemberNumber: number;
    zoneId: number;
    unk17: number;
    transitIndex: number;
    classId: number;
};

type PKTPartyInfo = {
    partyInstanceId: number;
    raidInstanceId: number;
    partyLootType: number;
    lootGrade: number;
    partyType: number;
    memberDatas: PartyMemberData[];
};

type PKTPartyLeaveResult = {
    partyInstanceId: number;
    partyLeaveType: number;
    name: string;
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
    characterId: bigint;
    playerIdOnRefresh: bigint;
    unk3: number;
    statusEffectDatas: StatusEffectData[];
};

type PKTPartyStatusEffectRemoveNotify = {
    characterId: bigint;
    statusEffectIds: number[];
    reason: number;
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
    initBraveHeartCount: number;
    unk0_m: boolean;
    unk4_m: bigint;
    unk5_m: bigint;
    raidResult: number;
    unk1_m: boolean;
    startTick: bigint;
    unk6_m: bigint;
    unk11_m: boolean;
    totalTime: bigint;
    bossKillDataList: BossKillData[];
    braveHeartCount: number;
    raidId: number;
    endTick: bigint;
};

type PKTRaidBossKillNotify = {
    typeId: number;
};

type PKTRaidResult = {
    unk0: bigint;
    unk1: bigint;
    unk2: number;
    unk3: bigint;
    unk4: number;
    struct_52: {
        unk1_0_0: bigint;
        unk1_0_1: bigint;
        struct_530: Buffer;
        unk1_0_3: number;
    }[];
    raidResult: number;
    unk7: bigint;
};

type UnpublishObject = {
    objectId: bigint;
    unpublishReason: number;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};

type PKTSkillCancelNotify = {
    skillId: number;
    newDirectionYaw: Angle;
    cancelReason: number;
    caster: bigint;
    newPosition: Vector3F;
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
    unk3_m: number;
    damageType: number;
    maxHp: bigint;
    modifier: number;
    damageAttr?: number;
    curHp: bigint;
    damage: bigint;
    targetId: bigint;
};

type SkillDamageAbnormalMoveEvent = {
    skillMoveOptionData: SkillMoveOptionData;
    unk8_m: number;
    position: Vector3F;
    unk4_m: number;
    unk1_m: number;
    unk3_m: number;
    destination: Vector3F;
    skillDamageEvent: SkillDamageEvent;
    unk2_m: bigint;
};

type PKTSkillDamageAbnormalMoveNotify = {
    unk2_m: number;
    unk1_m: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    sourceId: bigint;
    skillEffectId: number;
    skillId: number;
};

type PKTSkillDamageNotify = {
    unk1_0?: number;
    skillEffectId?: number;
    sourceId: bigint;
    skillLevel: number;
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
    pitchRotation?: Angle;
    newDirectionYaw: Angle;
    curPosition: Vector3F;
    sourceId: bigint;
    unk1_m?: number;
    curDirectionYaw: Angle;
    skillId: number;
    skillLevel: number;
    skillOptionData: SkillOptionData;
    aimTargetPosition: Vector3F;
    newPosition: Vector3F;
    aiStateId?: number;
};

type PKTStatChangeOriginNotify = {
    objectId: bigint;
    unk1: {
        statType: number;
        value: bigint;
    }[];
    unk2: number;
    unk3: {
        statType: number;
        value: bigint;
    }[];
    unk5_0?: number;
};

type PKTStatusEffectAddNotify = {
    objectId: bigint;
    unk1: bigint;
    unk3_0?: bigint;
    new: boolean;
    statusEffectData: StatusEffectData;
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
    value: number;
    objectId: bigint;
    characterId: bigint;
    effectInstanceId: number;
};

type PKTTriggerBossBattleStatus = {
    unk2_m: boolean;
    step: number;
    triggerId: number;
};

type PKTTriggerFinishNotify = {
    involvedPCs: bigint[];
    triggerId: number;
    unk0_m: number;
    packetResultCode: number;
};

type PKTTriggerStartNotify = {
    involvedPCs: bigint[];
    triggerSignalType: number;
    triggerId: number;
    sourceId: bigint;
};

type PKTTroopMemberUpdateMinNotify = {
    unk0_m: number;
    position: bigint;
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
    firstPCEnterTick: bigint;
    zoneInstId: bigint;
    loadComplete: boolean;
    totalMembers: bigint[];
    zoneId: number;
    zoneLevel: number;
    completeMembers: bigint[];
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    target: number;
    instanceId: number;
    id: number;
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
