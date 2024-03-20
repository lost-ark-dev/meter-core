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
    paralyzationPoint: number;
    type: number;
    objectId: bigint;
    paralyzationMaxPoint: number;
};

type PKTCounterAttackNotify = {
    targetId: bigint;
    sourceId: bigint;
    type: number;
};

type PKTDeathNotify = {
    unk0_m: bigint;
    abnormalStatusType?: number;
    effectId: number;
    sourceId: bigint;
    targetId: bigint;
    durabilityDecrement: number;
    directionYaw: number;
    damageAttr?: number;
    unk2_m: number;
    deathType?: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    unk1_0?: number;
    level: number;
    itemTint: Buffer;
    unk4: number;
    expireTime: LostArkDateTime;
    slot: number;
    id: number;
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
    struct_140: Buffer;
    abilityDataList: AbilityData[];
};

type PKTInitEnv = {
    lostArkDateTime: LostArkDateTime;
    unk1: bigint;
    unk2: number;
    playerId: bigint;
    unk4: number;
    struct_33: {
        versionString: string;
        struct_580: string;
        struct_597: string;
    }[];
    struct_597: string;
    unk7: number;
};

type PeriodUpdateStatData = {
    unk0: number;
    unk1: number;
    unk2: bigint;
    unk3: number;
    unk4: bigint;
    unk5: bigint;
    unk6: number;
};

type StatusEffectData = {
    stackCount: number;
    value?: Buffer;
    skillLevel: number;
    sourceId: bigint;
    effectInstanceId: number;
    struct_442: Buffer;
    statusEffectId: number;
    unk9_0?: bigint;
    occurTime: LostArkDateTime;
    endTick: bigint;
    totalTime: number;
};

type PKTInitPC = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    characterId: bigint;
    unk6: number;
    unk7: number;
    struct_336: string;
    unk9: Buffer;
    unk10: number;
    unk11: number;
    struct_342: Buffer;
    unk13: number;
    unk14: number;
    unk15: number;
    unk16: number;
    unk17: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk19: number;
    level: number;
    unk21: number;
    unk22: bigint;
    unk23: number;
    unk24: bigint;
    unk26_0?: number;
    unk27: number;
    struct_226: Buffer;
    unk29: number;
    unk30: bigint;
    unk31: number;
    unk32: bigint;
    unk33: number;
    unk34: number;
    unk35: number;
    unk36: Buffer;
    unk37: bigint;
    playerId: bigint;
    unk39: number;
    unk40: number;
    unk41: number;
    classId: number;
    unk43: number;
    unk44: number;
    unk45: number;
    name: string;
    struct_109: Buffer;
    unk48: number;
    unk49: Buffer;
    unk50: number;
    gearLevel: number;
    unk52: number;
    unk53: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk55: number;
    statusEffectDatas: StatusEffectData[];
    unk57: number;
};

type Struct_148 = {
    unk1_0?: Buffer;
};

type Struct_659 = {
    struct_149: Buffer;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    struct_148: Struct_148;
    unk6: number;
    unk7: number;
};

type Struct_666 = {
    struct_236: Struct_659[];
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    struct_261: Buffer;
    struct_393: Buffer;
    struct_238: Buffer;
    unk10: number;
    struct_150: Buffer;
    unk12: bigint;
    unk13: number;
};

type Struct_750 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: Buffer;
    unk6: number;
    struct_102: Buffer;
};

type Struct_790 = {
    unk0: number;
    unk1: Buffer;
    struct_750?: Struct_750;
    unk4: Buffer;
};

type Struct_665 = {
    unk0: number;
    struct_272: Buffer;
    unk2: number;
    unk3: number;
    struct_437: Buffer;
    unk5: number;
    struct_234: Buffer;
    struct_790?: Struct_790;
    struct_240: Buffer;
    struct_231?: Buffer;
    unk12: number;
    itemTint: Buffer;
    unk1_0?: number;
    unk1_1?: number;
    struct_194?: Buffer;
    unk15: number;
    unk17_0?: Buffer;
    unk18: number;
    unk20_0?: Buffer;
};

type BossKillData = {
    npcId: number;
    isDead: boolean;
};

type Struct_612 = {
    unk0: number;
    struct_1: {
        struct_530: Buffer;
        unk1_0_1: number;
    }[];
    unk2: number;
    bossKillDataList: BossKillData[];
    unk4: number;
};

type Struct_658 = {
    struct_235: Buffer;
    unk1: number;
    unk2: number;
    unk3: number;
    struct_234: Buffer;
    struct_26: {
        unk1_0_0: number;
        struct_233: string;
        unk1_0_2: number;
    }[];
};

type Struct_567 = {
    struct_666?: Struct_666;
    struct_137?: Buffer;
    unk2_1?: number;
    struct_2?: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_530: Buffer;
        unk1_0_3: number;
    }[];
    unk3_0?: Buffer;
    unk4_0?: Buffer;
    unk4_1?: Buffer;
    unk4_2?: number;
    struct_665?: Struct_665;
    struct_612?: Struct_612;
    unk7_0?: Buffer;
    struct_658?: Struct_658;
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

type Struct_755 = {
    unk1_0?: Buffer;
    unk3_0?: number;
    unk4: number;
    unk5: number;
    unk6: number;
};

type PKTInitLocal = {
    addonFeatureIdList: Buffer;
    statusEffectDatas: StatusEffectData[];
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    unk3: number;
    unk4: bigint;
    unk5: number;
    unk7_0?: number;
    struct_140: Buffer;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    struct_226: Buffer;
    unk11: number;
    unk12: bigint;
    struct_342: Buffer;
    abilityDataList: AbilityData[];
    unk15: number;
    struct_421: Struct_755[];
};

type PKTMigrationExecute = {
    serverAddr: string;
    account_CharacterId1: bigint;
    account_CharacterId2: bigint;
    unk3: number;
};

type Struct_734 = {
    unk0: bigint;
    unk1: number;
    unk2: bigint;
    unk3: number;
    lostArkString: string;
    unk5: number;
    equipItemDataList: EquipItemData[];
    unk7: number;
    lookData: Buffer;
};

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type Angle = number;

type NpcData = {
    unk1_0?: bigint;
    struct_734?: Struct_734;
    unk5_0?: number;
    balanceLevel?: number;
    transitIndex?: number;
    unk11_0?: number;
    level: number;
    unk13: number;
    unk15_0?: number;
    unk17_0?: number;
    unk19_0?: number;
    unk21_0?: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk24_0?: number;
    unk26_0?: number;
    statusEffectDatas: StatusEffectData[];
    unk29_0?: number;
    position: Vector3F;
    spawnIndex: number;
    unk33_0?: number;
    objectId: bigint;
    struct_273?: Buffer;
    unk38_0?: number;
    unk39: number;
    unk40: number;
    struct_337?: Buffer;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk45_0?: number;
    unk46: number;
    unk47: number;
    typeId: number;
    directionYaw: Angle;
    unk50: number;
};

type PKTNewNpc = {
    unk1_0?: number;
    unk2: number;
    npcStruct: NpcData;
    unk5_0?: bigint;
    unk1_0_0?: string;
    unk1_1?: string;
};

type PKTNewNpcSummon = {
    npcData: NpcData;
    ownerId: bigint;
    publishReason: number;
};

type TrackMoveInfo = {
    unk0: Buffer;
    unk1: number;
    unk3_0?: Buffer;
    unk4: number;
};

type PCStruct = {
    avgItemLevel: number;
    equipLifeToolDataList: EquipItemData[];
    unk2: number;
    unk23_m: number;
    unk0_m: Buffer;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    rvRLevel: number;
    lookData: Buffer;
    guildName: string;
    unk1_m: number;
    firstHonorTitleId: number;
    worldId: number;
    unk29_m: number;
    statusEffectDatas: StatusEffectData[];
    unk14: number;
    unk4_m: number;
    level: number;
    unk17_m: number;
    addonFeatureIdList: Buffer;
    unk45_m: number;
    position: Vector3F;
    name: string;
    equipItemDataList: EquipItemData[];
    unk23: number;
    guildId: bigint;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk5_m: number;
    unk27: number;
    unk28: number;
    unk29: number;
    classId: number;
    avatarHide: number;
    unk32: bigint;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    maxItemLevel: number;
    unk7_m: number;
    unk2_m: number;
    identityData: Buffer;
    playerId: bigint;
    petId: number;
    secondHonorTitleId: number;
    grabbedData?: Buffer;
    heading: Angle;
    unk32_m: number;
    unk25_m: number;
    characterId: bigint;
};

type PKTNewPC = {
    unk2_m: number;
    struct_64?: {
        unk1_0_0: number;
        unk1_0_1: bigint;
        itemTint: Buffer;
    }[];
    itemTint?: Buffer;
    unk1_1?: bigint;
    unk1_2?: number;
    unk0_m: number;
    trackMoveInfo?: TrackMoveInfo;
    pcStruct: PCStruct;
    unk4_0_m?: Buffer;
    unk5_0_m?: Buffer;
    unk3_0_m?: number;
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
    unk2_0?: bigint;
    tripodLevel: TripodLevel;
    unk4: number;
    unk5: number;
    unk6: number;
    targetObjectId: bigint;
    ownerId: bigint;
    unk9: number;
    unk10: bigint;
    unk12_0?: number;
    struct_337?: Buffer;
    tripodIndex: TripodIndex;
    chainSkillEffect: number;
    skillLevel: number;
    unk18: number;
    skillId: number;
    projectileId: bigint;
    unk21: number;
    skillEffect: number;
    unk23: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    ownerId: bigint;
    objectId: bigint;
    skillId: number;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    struct_337?: Buffer;
    skillEffect: number;
    unk10: number;
    unk11: number;
    position: Vector3F;
    unk13: number;
};

type PKTNewTrap = {
    unk0: number;
    trapData: TrapData;
    unk2: number;
};

type PKTParalyzationStateNotify = {
    paralyzationMaxPoint: number;
    enable: boolean;
    hitCheckTime: number;
    paralyzationPoint: number;
    objectId: bigint;
    decreasePoint: number;
    noHitCheckTime: number;
};

type PartyMemberData = {
    characterLevel: number;
    name: string;
    curHp: bigint;
    position: Vector3F;
    auths: number;
    classId: number;
    zoneInstId: bigint;
    unk7: number;
    gearLevel: number;
    unk9: number;
    zoneId: number;
    transitIndex: number;
    unk12: number;
    unk13: number;
    worldId: number;
    partyMemberNumber: number;
    characterId: bigint;
    unk17: number;
    maxHp: bigint;
    unk19: number;
};

type PKTPartyInfo = {
    partyInstanceId: number;
    memberDatas: PartyMemberData[];
    partyType: number;
    lootGrade: number;
    partyLootType: number;
    raidInstanceId: number;
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
    playerIdOnRefresh: bigint;
    unk2: number;
    statusEffectDatas: StatusEffectData[];
    characterId: bigint;
};

type PKTPartyStatusEffectRemoveNotify = {
    unk0: bigint;
    statusEffectIds: number[];
    reason: number;
    characterId: bigint;
};

type PKTPartyStatusEffectResultNotify = {
    raidInstanceId: number;
    characterId: bigint;
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
    unk6_m: bigint;
    raidResult: number;
    bossKillDataList: BossKillData[];
    unk4_m: bigint;
    unk0_m: boolean;
    unk5_m: bigint;
    startTick: bigint;
    totalTime: bigint;
    braveHeartCount: number;
    raidId: number;
    initBraveHeartCount: number;
    unk1_m: boolean;
    unk11_m: boolean;
};

type PKTRaidBossKillNotify = {
    typeId: number;
};

type PKTRaidResult = {
    struct_54: {
        unk1_0_0: bigint;
        unk1_0_1: number;
        unk1_0_2: bigint;
        struct_535: Buffer;
    }[];
    unk1: bigint;
    raidResult: number;
    unk3: number;
    unk4: number;
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

type PKTSkillCancelNotify = {
    skillId: number;
    newDirectionYaw: Angle;
    cancelReason: number;
    newPosition: Vector3F;
    caster: bigint;
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
    damageType: number;
    unk3_m: number;
    damageAttr?: number;
    curHp: bigint;
    targetId: bigint;
    damage: bigint;
    modifier: number;
};

type SkillDamageAbnormalMoveEvent = {
    skillMoveOptionData: SkillMoveOptionData;
    destination: Vector3F;
    unk8_m: number;
    unk4_m: number;
    skillDamageEvent: SkillDamageEvent;
    position: Vector3F;
    unk3_m: number;
    unk1_m: number;
    unk2_m: bigint;
};

type PKTSkillDamageAbnormalMoveNotify = {
    unk2_m: number;
    unk1_m: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    skillEffectId: number;
    skillId: number;
    sourceId: bigint;
};

type PKTSkillDamageNotify = {
    unk1_0?: number;
    skillId: number;
    sourceId: bigint;
    skillLevel: number;
    skillEffectId?: number;
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
    skillOptionData: SkillOptionData;
    newPosition: Vector3F;
    sourceId: bigint;
    aimTargetPosition: Vector3F;
    skillLevel: number;
    pitchRotation?: Angle;
    curPosition: Vector3F;
    aiStateId?: number;
    newDirectionYaw: Angle;
    skillId: number;
    curDirectionYaw: Angle;
    unk1_m?: number;
};

type PKTStatChangeOriginNotify = {
    unk0: number;
    unk1: {
        value: bigint;
        statType: number;
    }[];
    unk3_0?: number;
    unk4: {
        value: bigint;
        statType: number;
    }[];
    objectId: bigint;
};

type PKTStatusEffectAddNotify = {
    objectId: bigint;
    unk1: bigint;
    statusEffectData: StatusEffectData;
    unk4_0?: bigint;
    new: boolean;
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
    characterId: bigint;
    value: number;
    objectId: bigint;
    effectInstanceId: number;
};

type PKTTriggerBossBattleStatus = {
    step: number;
    triggerId: number;
    unk2_m: boolean;
};

type PKTTriggerFinishNotify = {
    packetResultCode: number;
    triggerId: number;
    unk0_m: number;
    involvedPCs: bigint[];
};

type PKTTriggerStartNotify = {
    triggerId: number;
    involvedPCs: bigint[];
    sourceId: bigint;
    triggerSignalType: number;
};

type PKTTroopMemberUpdateMinNotify = {
    characterId: bigint;
    maxHp: bigint;
    position: bigint;
    unk0_m: number;
    curHp: bigint;
    statusEffectDatas: StatusEffectData[];
};

type PKTIdentityGaugeChangeNotify = {
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
    playerId: bigint;
};

type PKTZoneMemberLoadStatusNotify = {
    totalMembers: bigint[];
    completeMembers: bigint[];
    zoneLevel: number;
    loadComplete: boolean;
    firstPCEnterTick: bigint;
    zoneId: number;
    zoneInstId: bigint;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    instanceId: number;
    stackCount: number;
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
