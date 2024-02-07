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
    objectId: bigint;
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
    paralyzationPoint: number;
    type: number;
    paralyzationMaxPoint: number;
    objectId: bigint;
};

type PKTCounterAttackNotify = {
    targetId: bigint;
    sourceId: bigint;
    type: number;
};

type PKTDeathNotify = {
    unk0: bigint;
    unk2_0?: number;
    targetId: bigint;
    unk4: number;
    unk5: number;
    unk6: number;
    sourceId: bigint;
    unk9_0?: number;
    unk10: number;
    unk12_0?: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    slot: number;
    expireTime: LostArkDateTime;
    level: number;
    unk4_0?: number;
    itemTint: Buffer;
    id: number;
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
    objectId: bigint;
    stance: number;
};

type PKTInitAbility = {
    struct_135: Buffer;
    abilityDataList: AbilityData[];
};

type PKTInitEnv = {
    lostArkDateTime: LostArkDateTime;
    unk1: number;
    unk2: number;
    playerId: bigint;
    unk4: number;
    unk5: bigint;
    struct_29: {
        versionString: string;
        struct_573: string;
        struct_590: string;
    }[];
    struct_590: string;
};

type StatusEffectData = {
    stackCount: number;
    skillLevel: number;
    totalTime: number;
    endTick: bigint;
    struct_441: Buffer;
    effectInstanceId: number;
    occurTime: LostArkDateTime;
    unk8_0?: bigint;
    sourceId: bigint;
    value?: Buffer;
    statusEffectId: number;
};

type PeriodUpdateStatData = {
    unk0: bigint;
    unk1: number;
    unk2: number;
    unk3: bigint;
    unk4: bigint;
    unk5: number;
    unk6: number;
};

type PKTInitPC = {
    unk0: number;
    unk1: bigint;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: bigint;
    playerId: bigint;
    unk7: number;
    unk8: number;
    struct_367: string;
    unk10: number;
    unk11: number;
    statusEffectDatas: StatusEffectData[];
    unk13: Buffer;
    unk14: number;
    unk15: number;
    unk16: number;
    unk17: number;
    unk18: number;
    level: number;
    unk20: bigint;
    characterId: bigint;
    unk22: number;
    unk23: number;
    unk24: number;
    unk25: number;
    unk26: number;
    unk27: number;
    classId: number;
    unk29: bigint;
    unk30: number;
    unk31: Buffer;
    unk32: number;
    unk33: number;
    unk34: number;
    unk35: number;
    unk36: number;
    unk37: number;
    struct_103: Buffer;
    unk39: number;
    unk40: Buffer;
    unk41: number;
    unk42: number;
    unk43: number;
    unk45_0?: number;
    unk46: number;
    unk47: bigint;
    struct_226: Buffer;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    struct_344: Buffer;
    unk51: number;
    unk52: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    gearLevel: number;
    name: string;
    unk56: number;
    unk57: number;
};

type Struct_144 = {
    unk1_0?: Buffer;
};

type Struct_654 = {
    unk0: number;
    unk1: number;
    unk2: number;
    struct_144: Struct_144;
    unk4: number;
    unk5: number;
    unk6: number;
    struct_145: Buffer;
};

type Struct_661 = {
    unk0: number;
    struct_240: Buffer;
    unk2: bigint;
    struct_393: Buffer;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
    unk8: number;
    struct_146: Buffer;
    unk10: number;
    unk11: number;
    struct_238: Struct_654[];
    struct_261: Buffer;
};

type Struct_746 = {
    unk0: number;
    unk1: number;
    struct_97: Buffer;
    unk3: number;
    unk4: number;
    unk5: Buffer;
    unk6: number;
    unk7: number;
};

type Struct_786 = {
    unk0: Buffer;
    unk1: Buffer;
    struct_746?: Struct_746;
    unk4: number;
};

type Struct_660 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk4_0?: Buffer;
    struct_272: Buffer;
    struct_232?: Buffer;
    unk8: number;
    unk1_0?: number;
    struct_193?: Buffer;
    unk1_2?: number;
    unk10: number;
    struct_234: Buffer;
    struct_436: Buffer;
    itemTint: Buffer;
    unk14: number;
    struct_274: Buffer;
    unk16: number;
    struct_786?: Struct_786;
};

type BossKillData = {
    isDead: boolean;
    npcId: number;
};

type Struct_605 = {
    struct_1: {
        unk1_0_0: number;
        struct_523: Buffer;
    }[];
    unk1: number;
    unk2: number;
    bossKillDataList: BossKillData[];
    unk4: number;
};

type Struct_653 = {
    struct_22: {
        unk1_0_0: number;
        struct_233: string;
        unk1_0_2: number;
    }[];
    struct_234: Buffer;
    unk2: number;
    struct_236: Buffer;
    unk4: number;
    unk5: number;
};

type Struct_560 = {
    struct_661?: Struct_661;
    struct_132?: Buffer;
    struct_2?: {
        unk1_0_0: number;
        struct_523: Buffer;
        unk1_0_2: number;
        unk1_0_3: number;
    }[];
    unk2_2?: number;
    unk3_0?: Buffer;
    unk4_0?: Buffer;
    unk4_1?: Buffer;
    unk4_2?: number;
    struct_660?: Struct_660;
    struct_605?: Struct_605;
    unk7_0?: Buffer;
    struct_653?: Struct_653;
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
    struct_560?: Struct_560;
    unk1_15?: number;
};

type PKTInitItem = {
    itemDataList: ItemData[];
    storageType: number;
};

type Struct_751 = {
    unk1_0?: Buffer;
    unk2: number;
    unk3: number;
    unk5_0?: number;
    unk6: number;
};

type PKTInitLocal = {
    struct_344: Buffer;
    addonFeatureIdList: Buffer;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk3: number;
    statusEffectDatas: StatusEffectData[];
    struct_420: Struct_751[];
    unk7_0?: number;
    struct_135: Buffer;
    unk9: number;
    unk10: bigint;
    unk11: number;
    abilityDataList: AbilityData[];
    unk13: number;
    unk14: bigint;
    struct_226: Buffer;
    statPair: {
        value: bigint;
        statType: number;
    }[];
};

type PKTMigrationExecute = {
    serverAddr: string;
    account_CharacterId1: bigint;
    unk2: number;
    account_CharacterId2: bigint;
};

type Struct_730 = {
    lostArkString: string;
    unk1: number;
    lookData: Buffer;
    unk3: bigint;
    unk4: number;
    equipItemDataList: EquipItemData[];
    unk6: number;
    unk7: bigint;
    unk8: number;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    objectId: bigint;
    unk1: number;
    unk3_0?: number;
    unk5_0?: number;
    statusEffectDatas: StatusEffectData[];
    unk8_0?: number;
    balanceLevel?: number;
    unk12_0?: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk14: number;
    unk15: number;
    struct_730?: Struct_730;
    unk19_0?: bigint;
    struct_341?: Buffer;
    typeId: number;
    unk24_0?: number;
    unk26_0?: number;
    unk27: number;
    unk29_0?: number;
    transitIndex?: number;
    unk33_0?: number;
    unk34: number;
    unk36_0?: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    level: number;
    directionYaw: Angle;
    position: Vector3F;
    struct_273?: Buffer;
    unk44_0?: number;
    spawnIndex: number;
    unk47_0?: number;
    unk49_0?: number;
    unk50: number;
};

type PKTNewNpc = {
    unk1_0?: number;
    unk2: number;
    unk1_0_0?: string;
    unk1_1?: string;
    unk5_0?: bigint;
    npcStruct: NpcData;
};

type PKTNewNpcSummon = {
    publishReason: number;
    npcData: NpcData;
    ownerId: bigint;
};

type TrackMoveInfo = {
    unk1_0?: Buffer;
    unk2: Buffer;
    unk3: number;
    unk4: number;
};

type PCStruct = {
    unk45_m: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    statPair: {
        value: bigint;
        statType: number;
    }[];
    maxItemLevel: number;
    characterId: bigint;
    grabbedData?: Buffer;
    heading: Angle;
    unk1_m: number;
    name: string;
    statusEffectDatas: StatusEffectData[];
    position: Vector3F;
    avgItemLevel: number;
    petId: number;
    unk25_m: number;
    unk4_m: number;
    unk2_m: number;
    equipItemDataList: EquipItemData[];
    unk17_m: number;
    equipLifeToolDataList: EquipItemData[];
    secondHonorTitleId: number;
    unk21: bigint;
    unk7_m: number;
    unk32_m: number;
    lookData: Buffer;
    unk0_m: Buffer;
    worldId: number;
    guildId: bigint;
    firstHonorTitleId: number;
    avatarHide: number;
    unk30: number;
    addonFeatureIdList: Buffer;
    unk29_m: number;
    unk23_m: number;
    rvRLevel: number;
    unk35: number;
    guildName: string;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk38: number;
    unk5_m: number;
    unk40: number;
    unk41: number;
    unk42: number;
    classId: number;
    level: number;
    identityData: Buffer;
    playerId: bigint;
};

type PKTNewPC = {
    unk5_0_m?: Buffer;
    unk3_0_m?: number;
    trackMoveInfo?: TrackMoveInfo;
    unk4_0_m?: Buffer;
    struct_59?: {
        itemTint: Buffer;
        unk1_0_1: number;
        unk1_0_2: bigint;
    }[];
    unk2_m: number;
    pcStruct: PCStruct;
    unk1_0?: number;
    itemTint?: Buffer;
    unk1_2?: bigint;
    unk0_m: number;
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
    unk1: number;
    unk3_0?: number;
    unk4: number;
    targetObjectId: bigint;
    unk6: number;
    unk7: bigint;
    ownerId: bigint;
    chainSkillEffect: number;
    unk10: number;
    unk11: bigint;
    tripodLevel: TripodLevel;
    skillId: number;
    projectileId: bigint;
    unk15: number;
    unk17_0?: bigint;
    unk18: number;
    skillEffect: number;
    skillLevel: number;
    struct_341?: Buffer;
    tripodIndex: TripodIndex;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    skillEffect: number;
    unk1: number;
    position: Vector3F;
    unk3: number;
    objectId: bigint;
    skillId: number;
    unk6: number;
    unk7: number;
    ownerId: bigint;
    unk9: number;
    struct_341?: Buffer;
    unk12: number;
    unk13: number;
};

type PKTNewTrap = {
    unk0: number;
    trapData: TrapData;
    unk2: number;
};

type PKTParalyzationStateNotify = {
    decreasePoint: number;
    hitCheckTime: number;
    noHitCheckTime: number;
    objectId: bigint;
    paralyzationMaxPoint: number;
    enable: boolean;
    paralyzationPoint: number;
};

type PartyMemberData = {
    name: string;
    worldId: number;
    auths: number;
    position: Vector3F;
    zoneInstId: bigint;
    classId: number;
    unk6: number;
    transitIndex: number;
    unk8: number;
    unk9: number;
    unk10: number;
    unk11: number;
    maxHp: bigint;
    partyMemberNumber: number;
    gearLevel: number;
    unk15: number;
    curHp: bigint;
    characterId: bigint;
    zoneId: number;
    characterLevel: number;
};

type PKTPartyInfo = {
    memberDatas: PartyMemberData[];
    partyLootType: number;
    lootGrade: number;
    partyType: number;
    raidInstanceId: number;
    partyInstanceId: number;
};

type PKTPartyLeaveResult = {
    name: string;
    partyInstanceId: number;
    partyLeaveType: number;
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
    raidResult: number;
    totalTime: bigint;
    unk1_m: boolean;
    unk4_m: bigint;
    endTick: bigint;
    unk11_m: boolean;
    unk6_m: bigint;
    unk0_m: boolean;
    braveHeartCount: number;
    initBraveHeartCount: number;
    bossKillDataList: BossKillData[];
    unk5_m: bigint;
    startTick: bigint;
    raidId: number;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    struct_49: {
        unk1_0_0: bigint;
        unk1_0_1: number;
        unk1_0_2: bigint;
        struct_529: Buffer;
    }[];
    unk1: bigint;
    unk2: bigint;
    unk3: number;
    unk4: number;
    unk5: bigint;
    raidResult: number;
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

type SkillDamageEvent = {
    maxHp: bigint;
    curHp: bigint;
    damageAttr?: number;
    damage: bigint;
    unk3_m: number;
    modifier: number;
    targetId: bigint;
    damageType: number;
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
    unk2_m: bigint;
    skillDamageEvent: SkillDamageEvent;
    unk8_m: number;
    destination: Vector3F;
    unk4_m: number;
    skillMoveOptionData: SkillMoveOptionData;
    unk1_m: number;
    unk3_m: number;
    position: Vector3F;
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
    unk1_0?: number;
    sourceId: bigint;
    skillLevel: number;
    skillEffectId?: number;
    skillId: number;
    skillDamageEvents: SkillDamageEvent[];
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
    aimTargetPosition: Vector3F;
    curPosition: Vector3F;
    sourceId: bigint;
    skillLevel: number;
    skillOptionData: SkillOptionData;
    aiStateId?: number;
    curDirectionYaw: Angle;
    unk1_m?: number;
    newPosition: Vector3F;
    skillId: number;
    pitchRotation?: Angle;
    newDirectionYaw: Angle;
};

type PKTStatChangeOriginNotify = {
    statPairList: {
        value: bigint;
        statType: number;
    }[];
    objectId: bigint;
    unk3_0?: number;
    unk4: {
        value: bigint;
        statType: number;
    }[];
    unk5: number;
};

type PKTStatusEffectAddNotify = {
    unk1_0?: bigint;
    new: boolean;
    statusEffectData: StatusEffectData;
    objectId: bigint;
    unk5: bigint;
};

type PKTStatusEffectRemoveNotify = {
    reason: number;
    objectId: bigint;
    statusEffectIds: number[];
};

type PKTStatusEffectDurationNotify = {
    effectInstanceId: number;
    expirationTick: bigint;
    targetId: bigint;
};

type PKTStatusEffectSyncDataNotify = {
    effectInstanceId: number;
    characterId: bigint;
    value: number;
    objectId: bigint;
};

type PKTTriggerBossBattleStatus = {
    triggerId: number;
    step: number;
    unk2_m: boolean;
};

type PKTTriggerFinishNotify = {
    unk0_m: number;
    packetResultCode: number;
    triggerId: number;
    involvedPCs: bigint[];
};

type PKTTriggerStartNotify = {
    sourceId: bigint;
    triggerSignalType: number;
    involvedPCs: bigint[];
    triggerId: number;
};

type PKTTroopMemberUpdateMinNotify = {
    unk0_m: number;
    characterId: bigint;
    maxHp: bigint;
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
    totalMembers: bigint[];
    zoneInstId: bigint;
    loadComplete: boolean;
    completeMembers: bigint[];
    zoneId: number;
    zoneLevel: number;
    firstPCEnterTick: bigint;
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
