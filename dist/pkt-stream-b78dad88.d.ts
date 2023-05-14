import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from './decompressor.js';

type AbilityData = {
    Points: number;
    Level: number;
    Id: number;
};

type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};

type ActiveAbility = {
    Level: number;
    FeatureType: number;
};

type PKTActiveAbilityNotify = {
    activeAbilityList: ActiveAbility[];
    ObjectId: bigint;
};

type PKTAddonSkillFeatureChangeNotify = {
    struct_120: Buffer;
    addonSkillFeatureList: {
        SkillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    ObjectId: bigint;
};

type PKTAuthTokenResult = {
    Unk1_m: Buffer;
    PacketResultCode: number;
};

type PKTBlockSkillStateNotify = {
    ParalyzationMaxPoint: number;
    Type: number;
    ObjectId: bigint;
    ParalyzationPoint: number;
};

type PKTCounterAttackNotify = {
    SourceId: bigint;
    TargetId: bigint;
    Type: number;
};

type PKTDeathNotify = {
    Unk0: number;
    Unk1_0?: number;
    Unk2: number;
    Unk3_0?: number;
    Unk4: number;
    Unk5_0?: number;
    SourceId: bigint;
    Unk7: number;
    TargetId: bigint;
    Unk9: bigint;
};

type PKTInitAbility = {
    abilityDataList: AbilityData[];
    struct_125: Buffer;
};

type LostArkDateTime = Date;

type PKTInitEnv = {
    Unk0: bigint;
    Unk1: number;
    Unk2: number;
    PlayerId: bigint;
    Unk4: number;
    struct_557: string;
    lostArkDateTime: LostArkDateTime;
    struct_27: {
        struct_543: string;
        struct_557: string;
        versionString: string;
    }[];
};

type Struct_690 = {
    Unk0: number;
    Unk1: bigint;
    Unk2: bigint;
    Unk3: number;
    Unk4: number;
    Unk5: bigint;
    Unk6: number;
};

type StatusEffectData = {
    OccurTime: LostArkDateTime;
    struct_430: Buffer;
    Unk2: number;
    EffectInstanceId: number;
    StatusEffectId: number;
    Unk5_0?: bigint;
    SkillLevel: number;
    Value?: Buffer;
    SourceId: bigint;
    TotalTime: number;
    EndTick: bigint;
};

type PKTInitPC = {
    ClassId: number;
    Unk1: number;
    Unk2: number;
    Unk3: number;
    Unk4: number;
    Unk5: number;
    Unk6: number;
    Unk7: number;
    Unk8: number;
    Unk9: number;
    Unk10: Buffer;
    Unk11: number;
    Unk12: bigint;
    Unk13: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk15: Buffer;
    struct_328: Buffer;
    Unk17: number;
    Unk18: number;
    struct_323: string;
    Unk20: number;
    Unk21: number;
    Unk22: number;
    Unk23: number;
    CharacterId: bigint;
    Unk25: number;
    struct_215: Buffer;
    Unk27: bigint;
    Unk28: number;
    Unk29: number;
    Unk30: number;
    Unk31: number;
    Unk32: number;
    struct_96: Buffer;
    Unk34: number;
    struct_375: Struct_690[];
    Unk36_0?: number;
    Unk37: number;
    Unk38: bigint;
    Unk39: number;
    Unk40: number;
    Unk41: number;
    Level: number;
    Unk43: number;
    Unk44: number;
    PlayerId: bigint;
    Unk46: number;
    Unk47: number;
    Unk48: number;
    Unk49: number;
    GearLevel: number;
    Unk51: Buffer;
    Name: string;
    statusEffectDatas: StatusEffectData[];
    Unk54: bigint;
    Unk55: number;
    Unk56: number;
};

type Struct_707 = {
    Unk0_0?: Buffer;
    Unk1_0?: number;
    Unk2: number;
    Unk3: number;
    Unk4: number;
};

type PKTInitLocal = {
    Unk0: number;
    Unk1: number;
    struct_215: Buffer;
    Unk3: bigint;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    addonSkillFeatureList: {
        SkillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    Unk6: number;
    struct_125: Buffer;
    abilityDataList: AbilityData[];
    struct_120: Buffer;
    struct_328: Buffer;
    statusEffectDatas: StatusEffectData[];
    struct_408: Struct_707[];
    Unk13: number;
    Unk14_0?: number;
    Unk15: bigint;
};

type PKTMigrationExecute = {
    Account_CharacterId1: bigint;
    ServerAddr: string;
    Account_CharacterId2: bigint;
    Unk3: number;
};

type Struct_651 = {
    Unk0_0?: number;
    Unk1: number;
    Unk2: number;
    struct_436: Buffer;
    lostArkDateTime: LostArkDateTime;
    Unk5: number;
};

type Struct_687 = {
    lostArkString: string;
    Unk1: number;
    Unk2: number;
    Unk3: number;
    Unk4: bigint;
    struct_302: Struct_651[];
    struct_88: Buffer;
    Unk7: number;
};

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type Angle = number;

type NpcData = {
    Unk0_0?: number;
    Unk1_0?: bigint;
    Unk2_0?: number;
    struct_375: Struct_690[];
    Unk4_0?: number;
    Unk5_0?: number;
    struct_324?: Buffer;
    Unk7_0?: number;
    Unk8: number;
    Unk9_0?: number;
    Unk10: number;
    Position: Vector3F;
    struct_255?: Buffer;
    Unk13_0?: number;
    Unk14: number;
    Unk15_0?: number;
    Unk16: number;
    Unk17_0?: number;
    Unk18: number;
    TypeId: number;
    DirectionYaw: Angle;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    SpawnIndex: number;
    Unk23: number;
    ObjectId: bigint;
    statusEffectDatas: StatusEffectData[];
    Unk26_0?: number;
    Unk27_0?: number;
    struct_687?: Struct_687;
    TransitIndex?: number;
    Unk30: number;
    Unk31_0?: number;
    Unk32_0?: number;
};

type PKTNewNpc = {
    Unk0_0_0?: bigint;
    Unk1: number;
    Unk0_0?: string;
    Unk0_1?: string;
    Unk3_0?: number;
    NpcStruct: NpcData;
};

type PKTNewNpcSummon = {
    NpcData: NpcData;
    PublishReason: number;
    OwnerId: bigint;
};

type PCStruct = {
    Unk0: Buffer;
    Unk1: number;
    Unk2: number;
    Level: number;
    Unk4: number;
    Unk5: number;
    Unk6: number;
    Unk5_m: number;
    statusEffectDatas: StatusEffectData[];
    ClassId: number;
    Heading: Angle;
    Unk11: Buffer;
    Unk12: number;
    Unk13: number;
    Unk14: number;
    Unk15: number;
    Unk16: number;
    Unk17: number;
    struct_120: Buffer;
    struct_88: Buffer;
    struct_301: Struct_651[];
    struct_375: Struct_690[];
    Unk22: number;
    Unk23: number;
    Unk24: number;
    Unk25: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk27: number;
    Unk28: number;
    Unk29: number;
    Name: string;
    addonSkillFeatureList: {
        SkillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    Unk32: number;
    Unk33_0?: Buffer;
    PlayerId: bigint;
    Unk35: string;
    Unk36: number;
    Unk37: number;
    GearLevel: number;
    Unk39: number;
    struct_302: Struct_651[];
    Unk41: bigint;
    CharacterId: bigint;
    Unk43: number;
    Unk44: number;
};

type TrackMoveInfo = {
    Unk0: Buffer;
    Unk1_0?: Buffer;
    Unk2: number;
    Unk3: number;
};

type PKTNewPC = {
    Unk5_0_m?: Buffer;
    Unk3_0_m?: number;
    PCStruct: PCStruct;
    Unk0_m: number;
    TrackMoveInfo?: TrackMoveInfo;
    Unk2_m: number;
    Unk4_0_m?: Buffer;
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
    Unk0: number;
    Unk1: number;
    TargetObjectId: bigint;
    Unk3: number;
    Unk4: number;
    SkillEffect: number;
    tripodIndex: TripodIndex;
    Unk7: number;
    tripodLevel: TripodLevel;
    Unk9: bigint;
    Unk10_0?: number;
    ProjectileId: bigint;
    struct_324?: Buffer;
    OwnerId: bigint;
    Unk14: number;
    ChainSkillEffect: number;
    Unk16: bigint;
    SkillLevel: number;
    SkillId: number;
    Unk19: number;
    Unk20_0?: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type PKTParalyzationStateNotify = {
    ObjectId: bigint;
    NoHitCheckTime: number;
    ParalyzationMaxPoint: number;
    ParalyzationPoint: number;
    HitCheckTime: number;
    Enable: boolean;
    DecreasePoint: number;
};

type PartyMemberData = {
    ZoneId: number;
    Unk1: number;
    Unk2: number;
    WorldId: number;
    ClassId: number;
    Unk5: number;
    Unk6: number;
    MaxHp: bigint;
    Position: Vector3F;
    Unk9: number;
    CurHp: bigint;
    Auths: number;
    Name: string;
    TransitIndex: number;
    CharacterLevel: number;
    CharacterId: bigint;
    PartyMemberNumber: number;
    GearLevel: number;
    Unk18: number;
    ZoneInstId: bigint;
};

type PKTPartyInfo = {
    RaidInstanceId: number;
    LootGrade: number;
    PartyLootType: number;
    PartyInstanceId: number;
    MemberDatas: PartyMemberData[];
    PartyType: number;
};

type PKTPartyLeaveResult = {
    PartyInstanceId: number;
    Name: string;
    PartyLeaveType: number;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
    ObjectId: bigint;
    Unk0_m: number;
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    ObjectId: bigint;
};

type PKTPartyStatusEffectAddNotify = {
    statusEffectDatas: StatusEffectData[];
    PlayerIdOnRefresh: bigint;
    CharacterId: bigint;
    Unk3: number;
    Unk4: bigint;
};

type PKTPartyStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    CharacterId: bigint;
    Unk2: bigint;
    Reason: number;
};

type PKTPartyStatusEffectResultNotify = {
    CharacterId: bigint;
    RaidInstanceId: number;
    PartyInstanceId: number;
};

type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};

type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};

type PKTRaidBossKillNotify = {
    Unk0: Buffer;
};

type PKTRaidResult = {
    Unk0: bigint;
    Unk1: bigint;
    Unk2: number;
    Unk3: number;
    Unk4: bigint;
    Unk5: number;
    struct_47: {
        struct_506: Buffer;
        Unk0_0_1: bigint;
        Unk0_0_2: bigint;
        Unk0_0_3: number;
    }[];
    Unk7: bigint;
};

type UnpublishObject = {
    UnpublishReason: number;
    ObjectId: bigint;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};

type PKTSkillCastNotify = {
    SkillLevel: number;
    Caster: bigint;
    SkillId: number;
};

type SkillDamageEvent = {
    DamageType: number;
    Modifier: number;
    Unk3_m: number;
    MaxHp: bigint;
    DamageAttr?: number;
    CurHp: bigint;
    Damage: bigint;
    TargetId: bigint;
};

type SkillMoveOptionData = {
    MoveTime?: number;
    StandUpTime?: number;
    DownTime?: number;
    FreezeTime?: number;
    MoveHeight?: number;
    FarmostDist?: number;
    flag40?: Buffer;
};

type SkillDamageAbnormalMoveEvent = {
    Unk8_m: number;
    Position: Vector3F;
    skillDamageEvent: SkillDamageEvent;
    Unk4_m: number;
    Unk2_m: bigint;
    Unk3_m: number;
    SkillMoveOptionData: SkillMoveOptionData;
    Unk1_m: number;
    Destination: Vector3F;
};

type PKTSkillDamageAbnormalMoveNotify = {
    SkillEffectId: number;
    SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    Unk1_m: number;
    Unk2_m: number;
    SkillId: number;
    SourceId: bigint;
};

type PKTSkillDamageNotify = {
    SkillLevel: number;
    SourceId: bigint;
    SkillEffectId: number;
    SkillDamageEvents: SkillDamageEvent[];
    SkillId: number;
};

type PKTSkillStageNotify = {
    SkillId: number;
    SourceId: bigint;
    Stage: number;
};

type SkillOptionData = {
    LayerIndex?: number;
    StartStageIndex?: number;
    TransitIndex?: number;
    StageStartTime?: number;
    FarmostDistance?: number;
    TripodIndex?: TripodIndex;
    TripodLevel?: TripodLevel;
};

type PKTSkillStartNotify = {
    SkillId: number;
    NewPosition: Vector3F;
    CurDirectionYaw: Angle;
    Unk1_m?: number;
    SkillLevel: number;
    PitchRotation?: Angle;
    SkillOptionData: SkillOptionData;
    NewDirectionYaw: Angle;
    SourceId: bigint;
    AiStateId?: number;
    AimTargetPosition: Vector3F;
    CurPosition: Vector3F;
};

type PKTStatChangeOriginNotify = {
    ObjectId: bigint;
    Unk1: number;
    Unk2_0?: number;
    StatPairChangedList: {
        StatType: number;
        Value: bigint;
    }[];
    Unk4: {
        StatType: number;
        Value: bigint;
    }[];
};

type PKTStatusEffectAddNotify = {
    New: boolean;
    Unk1: bigint;
    Unk2_0?: bigint;
    ObjectId: bigint;
    statusEffectData: StatusEffectData;
};

type PKTStatusEffectRemoveNotify = {
    Reason: number;
    statusEffectIds: number[];
    ObjectId: bigint;
};

type PKTStatusEffectDurationNotify = {
    TargetId: bigint;
    ExpirationTick: bigint;
    EffectInstanceId: number;
};

type PKTStatusEffectSyncDataNotify = {
    ObjectId: bigint;
    Value: number;
    EffectInstanceId: number;
    CharacterId: bigint;
};

type PKTTriggerBossBattleStatus = {
    TriggerId: number;
    Unk2_m: boolean;
    Step: number;
};

type PKTTriggerFinishNotify = {
    PacketResultCode: number;
    Unk0_m: number;
    InvolvedPCs: bigint[];
    TriggerId: number;
};

type PKTTriggerStartNotify = {
    TriggerSignalType: number;
    TriggerId: number;
    SourceId: bigint;
    InvolvedPCs: bigint[];
};

type PKTTroopMemberUpdateMinNotify = {
    Position: bigint;
    MaxHp: bigint;
    statusEffectDatas: StatusEffectData[];
    Unk0_m: number;
    CurHp: bigint;
    CharacterId: bigint;
};

type PKTIdentityGaugeChangeNotify = {
    PlayerId: bigint;
    IdentityGauge1: number;
    IdentityGauge2: number;
    IdentityGauge3: number;
};

type PKTZoneObjectUnpublishNotify = {
    ObjectId: bigint;
};

type ZoneStatusEffectData = {
    StackCount: number;
    Id: number;
    InstanceId: bigint;
    Target: number;
};

type PKTZoneStatusEffectAddNotify = {
    zoneStatusEffectDataList: ZoneStatusEffectData[];
};

type PKTZoneStatusEffectRemoveNotify = {
    StatusEffectId: number;
};

interface PKTStreamEvents {
    PKTAbilityChangeNotify: (pkt: PKT<PKTAbilityChangeNotify>) => void;
    PKTActiveAbilityNotify: (pkt: PKT<PKTActiveAbilityNotify>) => void;
    PKTAddonSkillFeatureChangeNotify: (pkt: PKT<PKTAddonSkillFeatureChangeNotify>) => void;
    PKTAuthTokenResult: (pkt: PKT<PKTAuthTokenResult>) => void;
    PKTBlockSkillStateNotify: (pkt: PKT<PKTBlockSkillStateNotify>) => void;
    PKTCounterAttackNotify: (pkt: PKT<PKTCounterAttackNotify>) => void;
    PKTDeathNotify: (pkt: PKT<PKTDeathNotify>) => void;
    PKTInitAbility: (pkt: PKT<PKTInitAbility>) => void;
    PKTInitEnv: (pkt: PKT<PKTInitEnv>) => void;
    PKTInitPC: (pkt: PKT<PKTInitPC>) => void;
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
