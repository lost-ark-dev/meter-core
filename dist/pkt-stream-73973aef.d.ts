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
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    objectId: bigint;
};

type PKTAuthTokenResult = {
    packetResultCode: number;
    unk1_m: Buffer;
};

type PKTBlockSkillStateNotify = {
    type: number;
    paralyzationPoint: number;
    objectId: bigint;
    paralyzationMaxPoint: number;
};

type PKTCounterAttackNotify = {
    type: number;
    sourceId: bigint;
    targetId: bigint;
};

type PKTDeathNotify = {
    targetId: bigint;
    unk1: number;
    unk3_0?: number;
    unk4: bigint;
    unk5: number;
    sourceId: bigint;
    unk7: number;
    unk9_0?: number;
    unk11_0?: number;
    unk12: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    level: number;
    slot: number;
    id: number;
    itemTint: Buffer;
    unk5_0?: number;
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
    stance: number;
    objectId: bigint;
};

type PKTInitAbility = {
    struct_132: Buffer;
    abilityDataList: AbilityData[];
};

type PKTInitEnv = {
    lostArkDateTime: LostArkDateTime;
    unk1: number;
    struct_28: {
        struct_559: string;
        versionString: string;
        struct_575: string;
    }[];
    unk3: number;
    unk4: bigint;
    struct_575: string;
    playerId: bigint;
    unk7: number;
};

type StatusEffectData = {
    stackCount: number;
    sourceId: bigint;
    struct_436: Buffer;
    effectInstanceId: number;
    skillLevel: number;
    value?: Buffer;
    unk8_0?: bigint;
    occurTime: LostArkDateTime;
    totalTime: number;
    statusEffectId: number;
    endTick: bigint;
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

type PKTInitPC = {
    unk0: number;
    struct_101: Buffer;
    unk2: number;
    unk3: number;
    unk5_0?: number;
    unk6: Buffer;
    struct_337: Buffer;
    unk8: number;
    struct_220: Buffer;
    unk10: bigint;
    unk11: number;
    unk12: number;
    unk13: number;
    unk14: number;
    unk15: number;
    level: number;
    unk17: number;
    unk18: number;
    unk19: Buffer;
    unk20: number;
    unk21: Buffer;
    unk22: number;
    unk23: number;
    unk24: number;
    unk25: number;
    unk26: number;
    unk27: number;
    unk28: bigint;
    unk29: number;
    statusEffectDatas: StatusEffectData[];
    unk31: number;
    name: string;
    playerId: bigint;
    classId: number;
    unk35: number;
    unk36: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk38: number;
    unk39: number;
    unk40: number;
    characterId: bigint;
    struct_332: string;
    unk43: number;
    unk44: number;
    unk45: number;
    unk46: number;
    unk47: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk49: number;
    unk50: number;
    unk51: bigint;
    unk52: number;
    unk53: number;
    unk54: number;
    unk55: bigint;
    unk56: bigint;
    gearLevel: number;
};

type Struct_140 = {
    unk1_0?: Buffer;
};

type Struct_637 = {
    unk0: number;
    struct_140: Struct_140;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    struct_141: Buffer;
};

type Struct_643 = {
    unk0: number;
    struct_386: Buffer;
    struct_142: Buffer;
    unk3: number;
    struct_230: Struct_637[];
    unk5: number;
    unk6: number;
    unk7: bigint;
    unk8: number;
    unk9: number;
    unk10: number;
    unk11: number;
    struct_257: Buffer;
    struct_232: Buffer;
};

type Struct_642 = {
    unk0: number;
    unk1: number;
    struct_431: Buffer;
    struct_268: Buffer;
    struct_227: Buffer;
    unk1_0?: number;
    unk1_1?: number;
    struct_188?: Buffer;
    struct_234: Buffer;
    unk7: number;
    unk8: number;
    unk9: number;
    unk11_0?: Buffer;
    unk12: number;
    struct_224?: Buffer;
    unk15: number;
    itemTint: Buffer;
};

type BossKillData = {
    isDead: boolean;
    npcId: number;
};

type Struct_590 = {
    unk0: number;
    unk1: number;
    struct_0: {
        unk1_0_0: number;
        struct_509: Buffer;
    }[];
    bossKillDataList: BossKillData[];
    unk4: number;
};

type Struct_636 = {
    unk0: number;
    unk1: number;
    unk2: number;
    struct_22: {
        struct_226: string;
        unk1_0_1: number;
        unk1_0_2: number;
    }[];
    struct_228: Buffer;
    struct_227: Buffer;
};

type Struct_546 = {
    struct_643?: Struct_643;
    unk2_0?: number;
    struct_128?: Buffer;
    struct_1?: {
        unk1_0_0: number;
        unk1_0_1: number;
        unk1_0_2: number;
        struct_509: Buffer;
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
    itemDataList: ItemData[];
    storageType: number;
};

type Struct_732 = {
    unk0: number;
    unk2_0?: Buffer;
    unk3: number;
    unk5_0?: number;
    unk6: number;
};

type PKTInitLocal = {
    unk1_0?: number;
    abilityDataList: AbilityData[];
    struct_132: Buffer;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    struct_337: Buffer;
    unk6: number;
    statusEffectDatas: StatusEffectData[];
    addonFeatureIdList: Buffer;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    unk10: number;
    unk11: number;
    struct_220: Buffer;
    unk13: bigint;
    unk14: bigint;
    unk15: number;
    struct_415: Struct_732[];
};

type PKTMigrationExecute = {
    unk0: number;
    account_CharacterId1: bigint;
    account_CharacterId2: bigint;
    serverAddr: string;
};

type Struct_712 = {
    unk0: number;
    lookData: Buffer;
    unk2: number;
    lostArkString: string;
    equipItemDataList: EquipItemData[];
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
    directionYaw: Angle;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk3_0?: number;
    typeId: number;
    unk6_0?: number;
    transitIndex?: number;
    spawnIndex: number;
    unk10: number;
    struct_333?: Buffer;
    unk13: number;
    unk14: number;
    unk15: number;
    position: Vector3F;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    statusEffectDatas: StatusEffectData[];
    unk20_0?: number;
    unk22_0?: number;
    balanceLevel?: number;
    unk26_0?: number;
    struct_269?: Buffer;
    level: number;
    unk31_0?: number;
    unk32: number;
    unk34_0?: bigint;
    struct_712?: Struct_712;
    unk38_0?: number;
    unk40_0?: number;
    unk42_0?: number;
    unk44_0?: number;
    objectId: bigint;
    unk47_0?: number;
    unk48: number;
    unk50_0?: number;
};

type PKTNewNpc = {
    unk1_0?: number;
    npcStruct: NpcData;
    unk1_0_0?: string;
    unk1_1?: string;
    unk5_0?: bigint;
    unk6: number;
};

type PKTNewNpcSummon = {
    npcData: NpcData;
    ownerId: bigint;
    publishReason: number;
};

type PCStruct = {
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk0_m: Buffer;
    level: number;
    avgItemLevel: number;
    position: Vector3F;
    unk5: number;
    grabbedData?: Buffer;
    addonFeatureIdList: Buffer;
    maxItemLevel: number;
    secondHonorTitleId: number;
    classId: number;
    unk5_m: number;
    equipItemDataList: EquipItemData[];
    petId: number;
    lookData: Buffer;
    unk17_m: number;
    identityData: Buffer;
    playerId: bigint;
    unk28_m: number;
    unk7_m: number;
    unk23_m: number;
    firstHonorTitleId: number;
    avatarHide: number;
    guildName: string;
    unk45_m: number;
    name: string;
    unk27: number;
    rvRLevel: number;
    guildId: bigint;
    worldId: number;
    unk25_m: number;
    characterId: bigint;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk34: number;
    unk4_m: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    equipLifeToolDataList: EquipItemData[];
    heading: Angle;
    unk15_m: number;
    unk29_m: number;
    unk1_m: number;
    unk2_m: number;
    unk32_m: number;
    statusEffectDatas: StatusEffectData[];
    unk45: number;
};

type TrackMoveInfo = {
    unk0: number;
    unk1: number;
    unk3_0?: Buffer;
    unk4: Buffer;
};

type PKTNewPC = {
    unk3_0_m?: number;
    unk4_0_m?: Buffer;
    pcStruct: PCStruct;
    unk5_0_m?: Buffer;
    unk0_m: number;
    trackMoveInfo?: TrackMoveInfo;
    unk2_m: number;
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
    projectileId: bigint;
    unk1: number;
    unk2: number;
    unk3: bigint;
    tripodIndex: TripodIndex;
    unk5: number;
    unk6: number;
    unk7: number;
    unk8: number;
    targetObjectId: bigint;
    tripodLevel: TripodLevel;
    ownerId: bigint;
    unk13_0?: number;
    unk14: number;
    chainSkillEffect: number;
    skillLevel: number;
    skillId: number;
    skillEffect: number;
    struct_333?: Buffer;
    unk21: bigint;
    unk23_0?: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    position: Vector3F;
    unk1: number;
    unk2: number;
    unk3: number;
    objectId: bigint;
    unk5: number;
    unk6: number;
    ownerId: bigint;
    unk8: number;
    unk9: number;
    skillId: number;
    skillEffect: number;
    struct_333?: Buffer;
};

type PKTNewTrap = {
    unk0: number;
    trapData: TrapData;
    unk2: number;
};

type PKTParalyzationStateNotify = {
    decreasePoint: number;
    enable: boolean;
    paralyzationPoint: number;
    paralyzationMaxPoint: number;
    hitCheckTime: number;
    objectId: bigint;
    noHitCheckTime: number;
};

type PartyMemberData = {
    transitIndex: number;
    classId: number;
    characterLevel: number;
    unk3: number;
    partyMemberNumber: number;
    unk5: number;
    unk6: number;
    name: string;
    gearLevel: number;
    auths: number;
    zoneInstId: bigint;
    zoneId: number;
    unk12: number;
    maxHp: bigint;
    unk14: number;
    position: Vector3F;
    worldId: number;
    characterId: bigint;
    curHp: bigint;
    unk19: number;
};

type PKTPartyInfo = {
    partyLootType: number;
    lootGrade: number;
    memberDatas: PartyMemberData[];
    raidInstanceId: number;
    partyType: number;
    partyInstanceId: number;
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
    objectId: bigint;
    passiveStatusEffectList: number[];
};

type PKTPartyStatusEffectAddNotify = {
    playerIdOnRefresh: bigint;
    unk1: bigint;
    characterId: bigint;
    statusEffectDatas: StatusEffectData[];
    unk4: number;
};

type PKTPartyStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    reason: number;
    unk2: bigint;
    characterId: bigint;
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
    unk1_m: boolean;
    bossKillDataList: BossKillData[];
    unk11_m: boolean;
    totalTime: bigint;
    unk6_m: bigint;
    raidId: number;
    initBraveHeartCount: number;
    startTick: bigint;
    endTick: bigint;
    unk4_m: bigint;
    unk5_m: bigint;
    braveHeartCount: number;
    unk0_m: boolean;
    raidResult: number;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: bigint;
    unk1: bigint;
    unk2: bigint;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: bigint;
    struct_49: {
        unk1_0_0: number;
        unk1_0_1: bigint;
        unk1_0_2: bigint;
        struct_515: Buffer;
    }[];
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
    unk3_m: number;
    damage: bigint;
    maxHp: bigint;
    modifier: number;
    damageAttr?: number;
    curHp: bigint;
    damageType: number;
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
    skillDamageEvent: SkillDamageEvent;
    destination: Vector3F;
    position: Vector3F;
    unk3_m: number;
    unk8_m: number;
    unk2_m: bigint;
    unk4_m: number;
    skillMoveOptionData: SkillMoveOptionData;
    unk1_m: number;
};

type PKTSkillDamageAbnormalMoveNotify = {
    unk1_m: number;
    unk2_m: number;
    skillId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    sourceId: bigint;
    skillEffectId: number;
};

type PKTSkillDamageNotify = {
    skillLevel: number;
    sourceId: bigint;
    skillId: number;
    skillEffectId: number;
    skillDamageEvents: SkillDamageEvent[];
};

type PKTSkillStageNotify = {
    skillId: number;
    stage: number;
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
    skillLevel: number;
    aimTargetPosition: Vector3F;
    skillOptionData: SkillOptionData;
    newPosition: Vector3F;
    pitchRotation?: Angle;
    curPosition: Vector3F;
    newDirectionYaw: Angle;
    curDirectionYaw: Angle;
    skillId: number;
    sourceId: bigint;
    aiStateId?: number;
};

type PKTStatChangeOriginNotify = {
    unk0: {
        statType: number;
        value: bigint;
    }[];
    unk2_0?: number;
    objectId: bigint;
    unk4: number;
    unk5: {
        statType: number;
        value: bigint;
    }[];
};

type PKTStatusEffectAddNotify = {
    objectId: bigint;
    unk1: bigint;
    unk3_0?: bigint;
    new: boolean;
    statusEffectData: StatusEffectData;
};

type PKTStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    reason: number;
    objectId: bigint;
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
    step: number;
    triggerId: number;
    unk2_m: boolean;
};

type PKTTriggerFinishNotify = {
    involvedPCs: bigint[];
    packetResultCode: number;
    triggerId: number;
    unk0_m: number;
};

type PKTTriggerStartNotify = {
    triggerSignalType: number;
    involvedPCs: bigint[];
    triggerId: number;
    sourceId: bigint;
};

type PKTTroopMemberUpdateMinNotify = {
    position: bigint;
    statusEffectDatas: StatusEffectData[];
    unk0_m: number;
    characterId: bigint;
    maxHp: bigint;
    curHp: bigint;
};

type PKTIdentityGaugeChangeNotify = {
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
    playerId: bigint;
};

type PKTZoneMemberLoadStatusNotify = {
    totalMembers: bigint[];
    zoneInstId: bigint;
    loadComplete: boolean;
    completeMembers: bigint[];
    firstPCEnterTick: bigint;
    zoneId: number;
    zoneLevel: number;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    target: number;
    stackCount: number;
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
