import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from './decompressor.js';

type AbilityData = {
    Points: number;
    Id: number;
    Level: number;
};

type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};

type ActiveAbility = {
    FeatureType: number;
    Level: number;
};

type PKTActiveAbilityNotify = {
    activeAbilityList: ActiveAbility[];
    ObjectId: bigint;
};

type PKTAddonSkillFeatureChangeNotify = {
    ObjectId: bigint;
    struct_117: Buffer;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
};

type PKTAuthTokenResult = {
    PacketResultCode: number;
    Unk1_m: Buffer;
};

type PKTBlockSkillStateNotify = {
    ParalyzationMaxPoint: number;
    Type: number;
    ObjectId: bigint;
    ParalyzationPoint: number;
};

type PKTCounterAttackNotify = {
    SourceId: bigint;
    Type: number;
    TargetId: bigint;
};

type PKTDeathNotify = {
    SourceId: bigint;
    Unk1_0?: number;
    Unk2_0?: number;
    Unk3: number;
    Unk4: number;
    Unk5: number;
    Unk6_0?: number;
    TargetId: bigint;
    Unk8: number;
    Unk9: bigint;
};

type PKTInitAbility = {
    struct_121: Buffer;
    abilityDataList: AbilityData[];
};

type LostArkDateTime = Date;

type PKTInitEnv = {
    Unk0: number;
    Unk1: number;
    Unk2: number;
    PlayerId: bigint;
    lostArkDateTime: LostArkDateTime;
    struct_542: string;
    Unk6: bigint;
    struct_25: {
        struct_529: string;
        versionString: string;
        struct_542: string;
    }[];
};

type StatusEffectData = {
    SkillLevel: number;
    OccurTime: LostArkDateTime;
    StatusEffectId: number;
    SourceId: bigint;
    Unk4_0?: bigint;
    TotalTime: number;
    EndTick: bigint;
    struct_420: Buffer;
    Value?: Buffer;
    EffectInstanceId: number;
    Unk10: number;
};

type Struct_676 = {
    Unk0: bigint;
    Unk1: bigint;
    Unk2: number;
    Unk3: number;
    Unk4: number;
    Unk5: bigint;
    Unk6: number;
};

type PKTInitPC = {
    Unk0: number;
    Unk1: number;
    struct_314: Buffer;
    Unk3: number;
    Unk4: number;
    Unk5: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk7: number;
    Unk8: number;
    Unk9: Buffer;
    Unk10: number;
    Unk11: number;
    Unk12: number;
    Unk13: number;
    Unk14: bigint;
    Unk15: number;
    Unk16: number;
    Unk17: number;
    Unk18: number;
    struct_91: Buffer;
    Name: string;
    Unk21: number;
    Unk22: number;
    Unk23: Buffer;
    Unk24: number;
    Unk25: number;
    Unk26: number;
    Unk27: number;
    Unk28: number;
    Unk29: number;
    Unk30_0?: number;
    Unk31: bigint;
    Unk32: number;
    struct_338: string;
    Unk34: number;
    Unk35: number;
    Unk36: number;
    Level: number;
    Unk38: number;
    Unk39: number;
    Unk40: bigint;
    Unk41: number;
    Unk42: number;
    statusEffectDatas: StatusEffectData[];
    Unk44: number;
    Unk45: Buffer;
    CharacterId: bigint;
    GearLevel: number;
    Unk48: number;
    Unk49: bigint;
    struct_211: Buffer;
    Unk51: number;
    PlayerId: bigint;
    Unk53: number;
    Unk54: number;
    struct_363: Struct_676[];
    ClassId: number;
};

type Struct_693 = {
    Unk0_0?: number;
    Unk1: number;
    Unk2_0?: Buffer;
    Unk3: number;
    Unk4: number;
};

type PKTInitLocal = {
    struct_314: Buffer;
    Unk1: number;
    Unk2_0?: number;
    struct_117: Buffer;
    struct_396: Struct_693[];
    Unk5: number;
    Unk6: bigint;
    struct_211: Buffer;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk9: number;
    Unk10: bigint;
    Unk11: number;
    statusEffectDatas: StatusEffectData[];
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    struct_121: Buffer;
    abilityDataList: AbilityData[];
};

type PKTMigrationExecute = {
    Account_CharacterId1: bigint;
    ServerAddr: string;
    Account_CharacterId2: bigint;
    Unk3: number;
};

type Struct_638 = {
    Unk0: number;
    lostArkDateTime: LostArkDateTime;
    Unk2: number;
    Unk3: number;
    struct_426: Buffer;
    Unk5_0?: number;
};

type Struct_673 = {
    Unk0: number;
    Unk1: number;
    Unk2: number;
    lostArkString: string;
    Unk4: bigint;
    struct_84: Buffer;
    Unk6: number;
    struct_293: Struct_638[];
};

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type Angle = number;

type NpcData = {
    Unk0: number;
    Unk1_0?: number;
    Unk2: number;
    SpawnIndex: number;
    struct_247?: Buffer;
    ObjectId: bigint;
    Unk6: number;
    Unk7_0?: number;
    TransitIndex?: number;
    Unk9_0?: number;
    Unk10: number;
    Unk11: number;
    Position: Vector3F;
    struct_363: Struct_676[];
    Unk14_0?: number;
    Unk15_0?: number;
    Unk16_0?: bigint;
    Unk17: number;
    statusEffectDatas: StatusEffectData[];
    Unk19_0?: number;
    Unk20_0?: number;
    Unk21: number;
    Unk22_0?: number;
    Unk23_0?: number;
    DirectionYaw: Angle;
    struct_673?: Struct_673;
    Unk26_0?: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    struct_310?: Buffer;
    Unk29_0?: number;
    TypeId: number;
    Unk31_0?: number;
    Unk32_0?: number;
};

type PKTNewNpc = {
    NpcStruct: NpcData;
    Unk1: number;
    Unk0_0?: string;
    Unk0_1?: string;
    Unk3_0?: bigint;
    Unk4_0?: number;
};

type PKTNewNpcSummon = {
    PublishReason: number;
    OwnerId: bigint;
    NpcData: NpcData;
};

type PCStruct = {
    Unk0: number;
    Unk1: number;
    GearLevel: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk4: number;
    Unk5: bigint;
    Name: string;
    Unk7: Buffer;
    Heading: Angle;
    Unk9: number;
    Unk10: number;
    CharacterId: bigint;
    Unk12: number;
    Unk13: number;
    Unk14: number;
    Unk15: string;
    struct_363: Struct_676[];
    Unk5_m: number;
    Unk18: number;
    Unk19: number;
    PlayerId: bigint;
    struct_293: Struct_638[];
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    Unk23: Buffer;
    Unk24: number;
    Unk25: number;
    Unk26: number;
    ClassId: number;
    Unk28: number;
    Unk29: number;
    Unk30: number;
    Unk31: number;
    struct_292: Struct_638[];
    Level: number;
    Unk34: number;
    Unk35: number;
    struct_117: Buffer;
    statusEffectDatas: StatusEffectData[];
    Unk38: number;
    Unk39: number;
    Unk40: number;
    struct_84: Buffer;
    Unk42_0?: Buffer;
    Unk43: number;
    Unk44: number;
};

type TrackMoveInfo = {
    Unk0: number;
    Unk1: number;
    Unk2_0?: Buffer;
    Unk3: Buffer;
};

type PKTNewPC = {
    Unk3_0_m?: number;
    PCStruct: PCStruct;
    Unk0_m: number;
    TrackMoveInfo?: TrackMoveInfo;
    Unk2_m: number;
    Unk4_0_m?: Buffer;
    Unk5_0_m?: Buffer;
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
    tripodIndex: TripodIndex;
    ChainSkillEffect: number;
    struct_310?: Buffer;
    Unk4: number;
    Unk5_0?: bigint;
    Unk6: number;
    Unk7: bigint;
    Unk8: number;
    SkillEffect: number;
    Unk10: bigint;
    Unk11: number;
    SkillId: number;
    TargetObjectId: bigint;
    Unk14: number;
    OwnerId: bigint;
    SkillLevel: number;
    Unk17_0?: number;
    Unk18: number;
    ProjectileId: bigint;
    tripodLevel: TripodLevel;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};

type PKTParalyzationStateNotify = {
    Enable: boolean;
    ParalyzationPoint: number;
    DecreasePoint: number;
    ParalyzationMaxPoint: number;
    NoHitCheckTime: number;
    HitCheckTime: number;
    ObjectId: bigint;
};

type PartyMemberData = {
    MaxHp: bigint;
    Unk1: number;
    CharacterId: bigint;
    Position: Vector3F;
    TransitIndex: number;
    CurHp: bigint;
    Unk6: number;
    CharacterLevel: number;
    GearLevel: number;
    ZoneId: number;
    Unk10: number;
    Unk11: number;
    PartyMemberNumber: number;
    Name: string;
    Unk14: number;
    ZoneInstId: bigint;
    WorldId: number;
    ClassId: number;
    Unk18: number;
    Auths: number;
};

type PKTPartyInfo = {
    RaidInstanceId: number;
    LootGrade: number;
    PartyType: number;
    PartyInstanceId: number;
    PartyLootType: number;
    MemberDatas: PartyMemberData[];
};

type PKTPartyLeaveResult = {
    PartyLeaveType: number;
    PartyInstanceId: number;
    Name: string;
};

type PKTPartyPassiveStatusEffectAddNotify = {
    ObjectId: bigint;
    passiveStatusEffectList: number[];
    Unk0_m: number;
};

type PKTPartyPassiveStatusEffectRemoveNotify = {
    ObjectId: bigint;
    passiveStatusEffectList: number[];
};

type PKTPartyStatusEffectAddNotify = {
    Unk0: bigint;
    CharacterId: bigint;
    statusEffectDatas: StatusEffectData[];
    Unk3: number;
    PlayerIdOnRefresh: bigint;
};

type PKTPartyStatusEffectRemoveNotify = {
    CharacterId: bigint;
    Unk1: bigint;
    statusEffectIds: number[];
    Reason: number;
};

type PKTPartyStatusEffectResultNotify = {
    PartyInstanceId: number;
    RaidInstanceId: number;
    CharacterId: bigint;
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
    struct_44: {
        Unk0_0_0: bigint;
        Unk0_0_1: number;
        struct_494: Buffer;
        Unk0_0_3: bigint;
    }[];
    Unk3: number;
    Unk4: number;
    Unk5: bigint;
    Unk6: number;
    Unk7: bigint;
};

type UnpublishObject = {
    UnpublishReason: number;
    ObjectId: bigint;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
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

type SkillDamageEvent = {
    Modifier: number;
    TargetId: bigint;
    DamageType: number;
    DamageAttr?: number;
    CurHp: bigint;
    Unk3_m: number;
    MaxHp: bigint;
    Damage: bigint;
};

type SkillDamageAbnormalMoveEvent = {
    Unk1_m: number;
    Unk2_m: bigint;
    Unk4_m: number;
    SkillMoveOptionData: SkillMoveOptionData;
    Destination: Vector3F;
    Position: Vector3F;
    Unk8_m: number;
    skillDamageEvent: SkillDamageEvent;
    Unk3_m: number;
};

type PKTSkillDamageAbnormalMoveNotify = {
    SkillId: number;
    Unk2_m: number;
    Unk1_m: number;
    SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    SkillEffectId: number;
    SourceId: bigint;
};

type PKTSkillDamageNotify = {
    SkillLevel: number;
    SourceId: bigint;
    SkillId: number;
    SkillDamageEvents: SkillDamageEvent[];
    SkillEffectId: number;
};

type PKTSkillStageNotify = {
    SourceId: bigint;
    SkillId: number;
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
    SourceId: bigint;
    CurDirectionYaw: Angle;
    NewDirectionYaw: Angle;
    AimTargetPosition: Vector3F;
    PitchRotation?: Angle;
    AiStateId?: number;
    CurPosition: Vector3F;
    Unk1_m?: number;
    SkillLevel: number;
    NewPosition: Vector3F;
    SkillId: number;
    SkillOptionData: SkillOptionData;
};

type PKTStatChangeOriginNotify = {
    Unk0: {
        StatType: number;
        Value: bigint;
    }[];
    Unk1: {
        StatType: number;
        Value: bigint;
    }[];
    Unk2_0?: number;
    Unk3: number;
    ObjectId: bigint;
};

type PKTStatusEffectAddNotify = {
    statusEffectData: StatusEffectData;
    ObjectId: bigint;
    New: boolean;
    Unk3: bigint;
    Unk4_0?: bigint;
};

type PKTStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    ObjectId: bigint;
    Reason: number;
};

type PKTStatusEffectDurationNotify = {
    EffectInstanceId: number;
    TargetId: bigint;
    ExpirationTick: bigint;
};

type PKTStatusEffectSyncDataNotify = {
    ObjectId: bigint;
    EffectInstanceId: number;
    CharacterId: bigint;
    Value: number;
};

type PKTTriggerBossBattleStatus = {
    Step: number;
    Unk2_m: boolean;
    TriggerId: number;
};

type PKTTriggerFinishNotify = {
    PacketResultCode: number;
    TriggerId: number;
    Unk0_m: number;
    InvolvedPCs: bigint[];
};

type PKTTriggerStartNotify = {
    TriggerId: number;
    TriggerSignalType: number;
    SourceId: bigint;
    InvolvedPCs: bigint[];
};

type PKTTroopMemberUpdateMinNotify = {
    MaxHp: bigint;
    CharacterId: bigint;
    Unk0_m: number;
    statusEffectDatas: StatusEffectData[];
    Position: bigint;
    CurHp: bigint;
};

type PKTIdentityGaugeChangeNotify = {
    IdentityGauge1: number;
    IdentityGauge2: number;
    IdentityGauge3: number;
    PlayerId: bigint;
};

type PKTZoneObjectUnpublishNotify = {
    ObjectId: bigint;
};

type ZoneStatusEffectData = {
    StackCount: number;
    Target: number;
    Id: number;
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
