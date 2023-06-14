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
    paralyzationMaxPoint: number;
    objectId: bigint;
    paralyzationPoint: number;
    type: number;
};

type PKTCounterAttackNotify = {
    targetId: bigint;
    type: number;
    sourceId: bigint;
};

type PKTDeathNotify = {
    unk1_0?: number;
    unk2: bigint;
    unk3: number;
    unk5_0?: number;
    targetId: bigint;
    unk7: number;
    unk9_0?: number;
    unk10: number;
    sourceId: bigint;
    unk12: number;
};

type LostArkDateTime = Date;

type EquipItemData = {
    level: number;
    expireTime: LostArkDateTime;
    id: number;
    slot: number;
    unk5_0?: number;
    itemTint: Buffer;
};

type PKTEquipChangeNotify = {
    unk0: number;
    unk1: number;
    objectId: bigint;
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
    struct_130: Buffer;
};

type PKTInitEnv = {
    struct_574: string;
    playerId: bigint;
    unk2: bigint;
    unk3: number;
    unk4: number;
    lostArkDateTime: LostArkDateTime;
    struct_30: {
        struct_560: string;
        struct_574: string;
        versionString: string;
    }[];
    unk7: number;
};

type StatusEffectData = {
    unk1_0?: bigint;
    value?: Buffer;
    occurTime: LostArkDateTime;
    struct_441: Buffer;
    skillLevel: number;
    stackCount: number;
    effectInstanceId: number;
    statusEffectId: number;
    sourceId: bigint;
    endTick: bigint;
    totalTime: number;
};

type PeriodUpdateStatData = {
    unk0: bigint;
    unk1: bigint;
    unk2: bigint;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
};

type PKTInitPC = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
    unk8: number;
    unk9: number;
    unk10: number;
    unk11: number;
    unk12: number;
    unk14_0?: number;
    classId: number;
    unk16: number;
    statusEffectDatas: StatusEffectData[];
    unk18: Buffer;
    struct_336: string;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    unk21: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk23: number;
    unk24: number;
    unk25: number;
    unk26: bigint;
    struct_223: Buffer;
    unk28: number;
    unk29: Buffer;
    unk30: number;
    unk31: number;
    unk32: number;
    gearLevel: number;
    unk34: number;
    unk35: number;
    characterId: bigint;
    unk37: number;
    unk38: bigint;
    unk39: Buffer;
    unk40: number;
    struct_342: Buffer;
    unk42: number;
    unk43: number;
    unk44: number;
    level: number;
    unk46: number;
    playerId: bigint;
    unk48: number;
    unk49: bigint;
    unk50: number;
    unk51: number;
    unk52: number;
    unk53: number;
    unk54: bigint;
    name: string;
    unk56: number;
    struct_99: Buffer;
};

type Struct_139 = {
    unk1_0?: Buffer;
};

type Struct_637 = {
    unk0: number;
    struct_140: Buffer;
    unk2: number;
    struct_139: Struct_139;
    unk4: number;
    unk5: number;
    unk6: number;
    unk7: number;
};

type Struct_643 = {
    unk0: number;
    unk1: number;
    unk2: number;
    unk3: number;
    struct_235: Buffer;
    struct_487: Buffer;
    unk6: number;
    struct_389: Buffer;
    struct_233: Struct_637[];
    unk9: number;
    struct_258: Buffer;
    unk11: bigint;
    unk12: number;
    unk13: number;
};

type Struct_642 = {
    unk0: number;
    struct_436: Buffer;
    unk2: number;
    struct_237: Buffer;
    unk1_0?: number;
    unk1_1?: number;
    struct_185?: Buffer;
    unk5: number;
    struct_269: Buffer;
    unk7: number;
    struct_231: Buffer;
    struct_228?: Buffer;
    itemTint: Buffer;
    unk13_0?: Buffer;
    unk14: number;
    unk15: number;
    unk16: number;
};

type Struct_586 = {
    struct_0: {
        unk1_0_0: number;
        struct_515: Buffer;
    }[];
    unk1: number;
    struct_126: Buffer;
    unk3: number;
    unk4: number;
};

type Struct_636 = {
    struct_23: {
        unk1_0_0: number;
        unk1_0_1: number;
        struct_230: string;
    }[];
    struct_231: Buffer;
    unk2: number;
    unk3: number;
    struct_232: Buffer;
    unk5: number;
};

type Struct_533 = {
    struct_643?: Struct_643;
    struct_1?: {
        unk1_0_0: number;
        unk1_0_1: number;
        unk1_0_2: number;
        struct_515: Buffer;
    }[];
    unk2_1?: number;
    struct_125?: Buffer;
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
    itemDataList: ItemData[];
    storageType: number;
};

type Struct_731 = {
    unk0: number;
    unk1: number;
    unk3_0?: Buffer;
    unk4: number;
    unk6_0?: number;
};

type PKTInitLocal = {
    unk0: number;
    abilityDataList: AbilityData[];
    unk2: bigint;
    struct_223: Buffer;
    unk4: number;
    unk5: number;
    unk7_0?: number;
    struct_342: Buffer;
    struct_130: Buffer;
    addonFeatureIdList: Buffer;
    unk11: bigint;
    struct_419: Struct_731[];
    statusEffectDatas: StatusEffectData[];
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    unk15: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
};

type PKTMigrationExecute = {
    account_CharacterId1: bigint;
    unk1: number;
    serverAddr: string;
    account_CharacterId2: bigint;
};

type Struct_711 = {
    unk0: number;
    unk1: number;
    equipItemDataList: EquipItemData[];
    lookData: Buffer;
    unk4: bigint;
    unk5: number;
    unk6: number;
    lostArkString: string;
};

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type Angle = number;

type NpcData = {
    statusEffectDatas: StatusEffectData[];
    transitIndex?: number;
    struct_337?: Buffer;
    unk6_0?: number;
    balanceLevel?: number;
    unk9: number;
    objectId: bigint;
    unk11: number;
    unk12: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk15_0?: number;
    unk16: number;
    unk18_0?: number;
    typeId: number;
    unk21_0?: number;
    struct_711?: Struct_711;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    spawnIndex: number;
    unk27_0?: number;
    struct_270?: Buffer;
    position: Vector3F;
    unk31: number;
    unk33_0?: number;
    unk35_0?: bigint;
    unk37_0?: number;
    unk39_0?: number;
    directionYaw: Angle;
    unk42_0?: number;
    unk43: number;
    unk45_0?: number;
    level: number;
    unk48_0?: number;
    unk50_0?: number;
};

type PKTNewNpc = {
    npcStruct: NpcData;
    unk2_0?: number;
    unk1_0?: string;
    unk1_1?: string;
    unk4: number;
    unk6_0?: bigint;
};

type PKTNewNpcSummon = {
    publishReason: number;
    ownerId: bigint;
    npcData: NpcData;
};

type TrackMoveInfo = {
    unk0: number;
    unk1: number;
    unk3_0?: Buffer;
    unk4: Buffer;
};

type PCStruct = {
    rvRLevel: number;
    unk32_m: number;
    unk17_m: number;
    unk1_m: number;
    classId: number;
    unk23_m: number;
    unk2_m: number;
    guildId: number;
    characterId: bigint;
    secondHonorTitleId: number;
    unk28_m: number;
    unk5_m: number;
    avatarHide: number;
    firstHonorTitleId: number;
    identityData: Buffer;
    unk15: number;
    unk16: number;
    position: Vector3F;
    statusEffectDatas: StatusEffectData[];
    lookData: Buffer;
    addonSkillFeatureList: {
        skillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    addonFeatureIdList: Buffer;
    unk29_m: number;
    equipLifeToolDataList: EquipItemData[];
    petId: number;
    grabbedData?: Buffer;
    unk0_m: Buffer;
    heading: Angle;
    equipItemDataList: EquipItemData[];
    guildName: string;
    playerId: bigint;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    level: number;
    avgItemLevel: number;
    worldId: number;
    maxItemLevel: number;
    unk45_m: number;
    unk15_m: number;
    unk39: number;
    name: string;
    unk7_m: number;
    unk42: number;
    unk4_m: number;
    periodUpdateStatDataList: PeriodUpdateStatData[];
    unk25_m: number;
};

type PKTNewPC = {
    unk5_0_m?: Buffer;
    unk0_m: number;
    unk4_0_m?: Buffer;
    unk3_0_m?: number;
    unk2_m: number;
    trackMoveInfo?: TrackMoveInfo;
    pcStruct: PCStruct;
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
    struct_337?: Buffer;
    tripodIndex: TripodIndex;
    unk4: number;
    unk5: number;
    skillEffect: number;
    unk7: bigint;
    unk8: number;
    projectileId: bigint;
    skillLevel: number;
    targetObjectId: bigint;
    unk12: bigint;
    unk14_0?: number;
    unk15: number;
    unk16: number;
    unk17: number;
    chainSkillEffect: number;
    tripodLevel: TripodLevel;
    unk20: number;
    skillId: number;
    unk23_0?: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type PKTParalyzationStateNotify = {
    paralyzationPoint: number;
    hitCheckTime: number;
    paralyzationMaxPoint: number;
    noHitCheckTime: number;
    decreasePoint: number;
    objectId: bigint;
    enable: boolean;
};

type PartyMemberData = {
    classId: number;
    characterId: bigint;
    position: Vector3F;
    unk3: number;
    partyMemberNumber: number;
    curHp: bigint;
    maxHp: bigint;
    unk7: number;
    unk8: number;
    transitIndex: number;
    unk10: number;
    name: string;
    unk12: number;
    characterLevel: number;
    unk14: number;
    zoneId: number;
    worldId: number;
    zoneInstId: bigint;
    auths: number;
    gearLevel: number;
};

type PKTPartyInfo = {
    partyLootType: number;
    partyInstanceId: number;
    lootGrade: number;
    memberDatas: PartyMemberData[];
    partyType: number;
    raidInstanceId: number;
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
    unk1: number;
    statusEffectDatas: StatusEffectData[];
    playerIdOnRefresh: bigint;
    characterId: bigint;
};

type PKTPartyStatusEffectRemoveNotify = {
    unk0: bigint;
    reason: number;
    statusEffectIds: number[];
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

type PKTRaidBossKillNotify = {
    unk0: Buffer;
};

type PKTRaidResult = {
    unk0: bigint;
    unk1: number;
    unk2: bigint;
    unk3: number;
    unk4: number;
    struct_50: {
        unk1_0_0: bigint;
        struct_521: Buffer;
        unk1_0_2: bigint;
        unk1_0_3: number;
    }[];
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
    skillLevel: number;
    caster: bigint;
    skillId: number;
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
    damageAttr?: number;
    modifier: number;
    targetId: bigint;
    curHp: bigint;
    damage: bigint;
};

type SkillDamageAbnormalMoveEvent = {
    unk2_m: bigint;
    destination: Vector3F;
    position: Vector3F;
    skillMoveOptionData: SkillMoveOptionData;
    skillDamageEvent: SkillDamageEvent;
    unk8_m: number;
    unk4_m: number;
    unk1_m: number;
    unk3_m: number;
};

type PKTSkillDamageAbnormalMoveNotify = {
    sourceId: bigint;
    unk2_m: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    unk1_m: number;
    skillEffectId: number;
    skillId: number;
};

type PKTSkillDamageNotify = {
    skillLevel: number;
    skillId: number;
    skillEffectId: number;
    sourceId: bigint;
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
    skillOptionData: SkillOptionData;
    skillLevel: number;
    aiStateId?: number;
    pitchRotation?: Angle;
    sourceId: bigint;
    curPosition: Vector3F;
    newPosition: Vector3F;
    unk1_m?: number;
    curDirectionYaw: Angle;
    skillId: number;
    aimTargetPosition: Vector3F;
    newDirectionYaw: Angle;
};

type PKTStatChangeOriginNotify = {
    objectId: bigint;
    unk2_0?: number;
    unk3: number;
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
    unk1_0?: bigint;
    new: boolean;
    unk3: bigint;
    objectId: bigint;
    statusEffectData: StatusEffectData;
};

type PKTStatusEffectRemoveNotify = {
    objectId: bigint;
    statusEffectIds: number[];
    reason: number;
};

type PKTStatusEffectDurationNotify = {
    targetId: bigint;
    effectInstanceId: number;
    expirationTick: bigint;
};

type PKTStatusEffectSyncDataNotify = {
    characterId: bigint;
    objectId: bigint;
    effectInstanceId: number;
    value: number;
};

type PKTTriggerBossBattleStatus = {
    triggerId: number;
    unk2_m: boolean;
    step: number;
};

type PKTTriggerFinishNotify = {
    involvedPCs: bigint[];
    packetResultCode: number;
    triggerId: number;
    unk0_m: number;
};

type PKTTriggerStartNotify = {
    triggerId: number;
    sourceId: bigint;
    triggerSignalType: number;
    involvedPCs: bigint[];
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
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
    playerId: bigint;
};

type PKTZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectData = {
    instanceId: bigint;
    target: number;
    stackCount: number;
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
