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
    objectId: bigint;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
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
    targetId: bigint;
    type: number;
};

type PKTDeathNotify = {
    unk0: number;
    unk2_0?: number;
    unk4_0?: number;
    unk5: bigint;
    unk6: number;
    unk8_0?: number;
    sourceId: bigint;
    targetId: bigint;
    unk11: number;
    unk12: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    expireTime: LostArkDateTime;
    slot: number;
    itemTint: Buffer;
    id: number;
    level: number;
    unk6_0?: number;
};

type PKTEquipChangeNotify = {
    unk0: number;
    unk1: number;
    equipItemDataList: EquipItemData[];
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
    struct_137: Buffer;
    abilityDataList: AbilityData[];
};

type PKTInitEnv = {
    struct_583: string;
    unk1: number;
    unk2: number;
    struct_30: {
        struct_567: string;
        struct_583: string;
        versionString: string;
    }[];
    playerId: bigint;
    lostArkDateTime: LostArkDateTime;
    unk6: bigint;
    unk7: number;
};

type StatusEffectData = {
    unk1_0?: bigint;
    endTick: bigint;
    stackCount: number;
    struct_437: Buffer;
    sourceId: bigint;
    value?: Buffer;
    totalTime: number;
    occurTime: LostArkDateTime;
    effectInstanceId: number;
    skillLevel: number;
    statusEffectId: number;
};

type PeriodUpdateStatData = {
    unk0: number;
    unk1: bigint;
    unk2: bigint;
    unk3: number;
    unk4: bigint;
    unk5: number;
    unk6: number;
};

type PKTInitPC = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: bigint;
    characterId: bigint;
    unk5: bigint;
    unk6: number;
    unk7: number;
    unk8: number;
    unk9: number;
    unk10: Buffer;
    unk12_0?: number;
    unk13: number;
    unk14: number;
    unk15: number;
    unk16: number;
    statusEffectDatas: StatusEffectData[];
    unk18: number;
    unk19: number;
    unk20: number;
    unk21: number;
    level: number;
    classId: number;
    struct_225: Buffer;
    unk25: number;
    unk26: bigint;
    unk27: number;
    unk28: number;
    unk29: number;
    name: string;
    unk31: number;
    unk32: number;
    unk33: number;
    unk34: Buffer;
    unk35: number;
    gearLevel: number;
    unk37: number;
    unk38: number;
    unk39: number;
    unk40: number;
    playerId: bigint;
    unk42: bigint;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk44: number;
    unk45: number;
    struct_104: Buffer;
    struct_336: Buffer;
    unk48: bigint;
    unk49: number;
    unk50: number;
    unk51: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk53: number;
    struct_361: string;
    unk55: Buffer;
    unk56: number;
    unk57: number;
};

type Struct_145 = {
    unk1_0?: Buffer;
};

type Struct_647 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    struct_146: Buffer;
    unk5: number;
    struct_145: Struct_145;
    unk7: number;
};

type Struct_654 = {
    struct_257: Buffer;
    unk1: number;
    unk2: number;
    unk3: number;
    struct_295: Buffer;
    struct_387: Buffer;
    unk6: number;
    unk7: number;
    unk8: number;
    struct_147: Buffer;
    unk10: number;
    unk11: bigint;
    struct_233: Struct_647[];
    unk13: number;
};

type Struct_738 = {
    unk0: number;
    unk1: Buffer;
    unk2: number;
    struct_98: Buffer;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_776 = {
    unk0: number;
    struct_738?: Struct_738;
    struct_521: Buffer;
};

type Struct_653 = {
    struct_229?: Buffer;
    unk2: number;
    struct_268: Buffer;
    unk4: number;
    itemTint: Buffer;
    unk7_0?: Buffer;
    unk8: number;
    struct_192?: Buffer;
    unk1_1?: number;
    unk1_2?: number;
    unk10: number;
    struct_431: Buffer;
    struct_488: Buffer;
    struct_270: Buffer;
    unk14: number;
    unk15: number;
    struct_776?: Struct_776;
    unk18: number;
};

type BossKillData = {
    npcId: number;
    isDead: boolean;
};

type Struct_598 = {
    unk0: number;
    bossKillDataList: BossKillData[];
    struct_1: {
        unk1_0_0: number;
        struct_514: Buffer;
    }[];
    unk3: number;
    unk4: number;
};

type Struct_646 = {
    struct_232: Buffer;
    struct_488: Buffer;
    unk2: number;
    unk3: number;
    unk4: number;
    struct_23: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_230: string;
    }[];
};

type Struct_554 = {
    struct_654?: Struct_654;
    struct_2?: {
        unk1_0_0: number;
        unk1_0_1: number;
        unk1_0_2: number;
        struct_514: Buffer;
    }[];
    unk2_1?: number;
    struct_133?: Buffer;
    unk3_0?: Buffer;
    unk4_0?: number;
    unk4_1?: Buffer;
    unk4_2?: Buffer;
    struct_653?: Struct_653;
    struct_598?: Struct_598;
    unk7_0?: Buffer;
    struct_646?: Struct_646;
    struct_776?: Struct_776;
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
    struct_554?: Struct_554;
    unk1_15?: number;
};

type PKTInitItem = {
    storageType: number;
    itemDataList: ItemData[];
};

type Struct_743 = {
    unk0: number;
    unk1: number;
    unk3_0?: Buffer;
    unk5_0?: number;
    unk6: number;
};

type PKTInitLocal = {
    unk0: bigint;
    unk1: number;
    unk2: number;
    unk4_0?: number;
    struct_416: Struct_743[];
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    struct_137: Buffer;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk9: number;
    struct_225: Buffer;
    unk11: number;
    unk12: bigint;
    statusEffectDatas: StatusEffectData[];
    addonFeatureIdList: Buffer;
    abilityDataList: AbilityData[];
    struct_336: Buffer;
};

type PKTMigrationExecute = {
    serverAddr: string;
    account_CharacterId1: bigint;
    account_CharacterId2: bigint;
    unk3: number;
};

type Struct_722 = {
    unk0: number;
    lostArkString: string;
    lookData: Buffer;
    unk3: bigint;
    unk4: number;
    unk5: number;
    equipItemDataList: EquipItemData[];
    unk7: number;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    statPair: {
        value: bigint;
        statType: number;
    }[];
    struct_269?: Buffer;
    unk4_0?: number;
    spawnIndex: number;
    unk7_0?: bigint;
    unk9_0?: number;
    unk11_0?: number;
    objectId: bigint;
    struct_332?: Buffer;
    unk15: number;
    directionYaw: Angle;
    unk17: number;
    unk19_0?: number;
    unk21_0?: number;
    typeId: number;
    position: Vector3F;
    unk25_0?: number;
    unk27_0?: number;
    unk28: number;
    statusEffectDatas: StatusEffectData[];
    unk31_0?: number;
    unk32: number;
    unk33: number;
    unk34: number;
    unk36_0?: number;
    transitIndex?: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    struct_722?: Struct_722;
    level: number;
    unk44_0?: number;
    unk46_0?: number;
    balanceLevel?: number;
    unk50_0?: number;
};

type PKTNewNpc = {
    unk0: number;
    unk2_0?: number;
    unk4_0?: bigint;
    npcStruct: NpcData;
    unk1_0?: string;
    unk1_1?: string;
};

type PKTNewNpcSummon = {
    ownerId: bigint;
    publishReason: number;
    npcData: NpcData;
};

type PCStruct = {
    unk29_m: number;
    addonFeatureIdList: Buffer;
    unk5_m: number;
    guildId: bigint;
    unk4_m: number;
    name: string;
    avatarHide: number;
    maxItemLevel: number;
    unk1_m: number;
    petId: number;
    lookData: Buffer;
    statusEffectDatas: StatusEffectData[];
    unk12: number;
    worldId: number;
    statPair: {
        value: bigint;
        statType: number;
    }[];
    unk15: number;
    equipLifeToolDataList: EquipItemData[];
    unk15_m: number;
    avgItemLevel: number;
    unk19: number;
    unk23_m: number;
    unk21: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    playerId: bigint;
    equipItemDataList: EquipItemData[];
    unk0_m: Buffer;
    unk7_m: number;
    identityData: Buffer;
    unk25_m: number;
    firstHonorTitleId: number;
    secondHonorTitleId: number;
    unk17_m: number;
    heading: Angle;
    guildName: string;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    position: Vector3F;
    unk32_m: number;
    level: number;
    unk45_m: number;
    grabbedData?: Buffer;
    classId: number;
    rvRLevel: number;
    unk2_m: number;
    unk28_m: number;
    characterId: bigint;
};

type TrackMoveInfo = {
    unk0: number;
    unk1: number;
    unk2: Buffer;
    unk4_0?: Buffer;
};

type PKTNewPC = {
    struct_60?: {
        unk1_0_0: bigint;
        itemTint: Buffer;
        unk1_0_2: number;
    }[];
    pcStruct: PCStruct;
    unk0_m: number;
    unk3_0_m?: number;
    unk2_m: number;
    trackMoveInfo?: TrackMoveInfo;
    unk4_0_m?: Buffer;
    unk1_0?: number;
    itemTint?: Buffer;
    unk1_2?: bigint;
    unk5_0_m?: Buffer;
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
    chainSkillEffect: number;
    ownerId: bigint;
    unk2: number;
    unk3: number;
    tripodIndex: TripodIndex;
    projectileId: bigint;
    unk6: number;
    unk7: bigint;
    unk8: number;
    unk9: number;
    unk11_0?: bigint;
    struct_332?: Buffer;
    skillEffect: number;
    skillLevel: number;
    tripodLevel: TripodLevel;
    unk18_0?: number;
    targetObjectId: bigint;
    unk20: number;
    unk21: bigint;
    skillId: number;
    unk23: number;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type TrapData = {
    unk0: number;
    unk1: number;
    unk2: number;
    skillEffect: number;
    ownerId: bigint;
    position: Vector3F;
    struct_332?: Buffer;
    unk8: number;
    unk9: number;
    unk10: number;
    objectId: bigint;
    skillId: number;
    unk13: number;
};

type PKTNewTrap = {
    trapData: TrapData;
    unk1: number;
    unk2: number;
};

type PKTParalyzationStateNotify = {
    enable: boolean;
    paralyzationMaxPoint: number;
    paralyzationPoint: number;
    decreasePoint: number;
    noHitCheckTime: number;
    objectId: bigint;
    hitCheckTime: number;
};

type PartyMemberData = {
    zoneInstId: bigint;
    classId: number;
    unk2: number;
    name: string;
    unk4: number;
    transitIndex: number;
    auths: number;
    unk7: number;
    partyMemberNumber: number;
    unk9: number;
    characterLevel: number;
    unk11: number;
    position: Vector3F;
    worldId: number;
    zoneId: number;
    curHp: bigint;
    gearLevel: number;
    characterId: bigint;
    unk18: number;
    maxHp: bigint;
};

type PKTPartyInfo = {
    memberDatas: PartyMemberData[];
    lootGrade: number;
    partyType: number;
    partyInstanceId: number;
    raidInstanceId: number;
    partyLootType: number;
};

type PKTPartyLeaveResult = {
    name: string;
    partyLeaveType: number;
    partyInstanceId: number;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
    unk0_m: number;
    objectId: bigint;
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    objectId: bigint;
};

type PKTPartyStatusEffectAddNotify = {
    characterId: bigint;
    unk1: bigint;
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
    unk11_m: boolean;
    unk0_m: boolean;
    raidResult: number;
    bossKillDataList: BossKillData[];
    startTick: bigint;
    totalTime: bigint;
    unk1_m: boolean;
    unk4_m: bigint;
    unk5_m: bigint;
    endTick: bigint;
    unk6_m: bigint;
    raidId: number;
    braveHeartCount: number;
    initBraveHeartCount: number;
};

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: bigint;
    unk1: number;
    struct_51: {
        unk1_0_0: bigint;
        unk1_0_1: number;
        struct_520: Buffer;
        unk1_0_3: bigint;
    }[];
    unk3: bigint;
    unk4: bigint;
    unk5: bigint;
    unk6: number;
    unk7: number;
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
    skillLevel: number;
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
    modifier: number;
    unk3_m: number;
    damageAttr?: number;
    maxHp: bigint;
    damage: bigint;
    targetId: bigint;
    damageType: number;
    curHp: bigint;
};

type SkillDamageAbnormalMoveEvent = {
    unk2_m: bigint;
    unk1_m: number;
    position: Vector3F;
    unk8_m: number;
    skillMoveOptionData: SkillMoveOptionData;
    skillDamageEvent: SkillDamageEvent;
    unk4_m: number;
    destination: Vector3F;
    unk3_m: number;
};

type PKTSkillDamageAbnormalMoveNotify = {
    sourceId: bigint;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    unk2_m: number;
    skillId: number;
    skillEffectId: number;
    unk1_m: number;
};

type PKTSkillDamageNotify = {
    skillLevel: number;
    skillDamageEvents: SkillDamageEvent[];
    sourceId: bigint;
    skillEffectId: number;
    skillId: number;
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
    unk1_m?: number;
    curPosition: Vector3F;
    pitchRotation?: Angle;
    aimTargetPosition: Vector3F;
    newDirectionYaw: Angle;
    aiStateId?: number;
    sourceId: bigint;
    skillId: number;
    skillOptionData: SkillOptionData;
    curDirectionYaw: Angle;
    newPosition: Vector3F;
};

type PKTStatChangeOriginNotify = {
    unk0: number;
    statPairChangedList: {
        value: bigint;
        statType: number;
    }[];
    objectId: bigint;
    unk3: {
        value: bigint;
        statType: number;
    }[];
    unk5_0?: number;
};

type PKTStatusEffectAddNotify = {
    new: boolean;
    unk2_0?: bigint;
    statusEffectData: StatusEffectData;
    unk4: bigint;
    objectId: bigint;
};

type PKTStatusEffectRemoveNotify = {
    objectId: bigint;
    reason: number;
    statusEffectIds: number[];
};

type PKTStatusEffectDurationNotify = {
    targetId: bigint;
    effectInstanceId: number;
    expirationTick: bigint;
};

type PKTStatusEffectSyncDataNotify = {
    value: number;
    objectId: bigint;
    characterId: bigint;
    effectInstanceId: number;
};

type PKTTriggerBossBattleStatus = {
    triggerId: number;
    unk2_m: boolean;
    step: number;
};

type PKTTriggerFinishNotify = {
    involvedPCs: bigint[];
    unk0_m: number;
    packetResultCode: number;
    triggerId: number;
};

type PKTTriggerStartNotify = {
    sourceId: bigint;
    triggerSignalType: number;
    triggerId: number;
    involvedPCs: bigint[];
};

type PKTTroopMemberUpdateMinNotify = {
    position: bigint;
    statusEffectDatas: StatusEffectData[];
    curHp: bigint;
    maxHp: bigint;
    unk0_m: number;
    characterId: bigint;
};

type PKTIdentityGaugeChangeNotify = {
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
    playerId: bigint;
};

type PKTZoneMemberLoadStatusNotify = {
    completeMembers: bigint[];
    zoneLevel: number;
    totalMembers: bigint[];
    zoneId: number;
    firstPCEnterTick: bigint;
    zoneInstId: bigint;
    loadComplete: boolean;
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
