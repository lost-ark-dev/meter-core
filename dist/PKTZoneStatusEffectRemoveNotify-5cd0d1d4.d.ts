type AbilityData = {
    Points: number;
    Id: number;
    Level: number;
};

type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};
declare function read$J(buf: Buffer): PKTAbilityChangeNotify;
declare const name$J = "PKTAbilityChangeNotify";
declare const opcode$J = 37279;

type ActiveAbility = {
    FeatureType: number;
    Level: number;
};

type PKTActiveAbilityNotify = {
    activeAbilityList: ActiveAbility[];
    ObjectId: bigint;
};
declare function read$I(buf: Buffer): PKTActiveAbilityNotify;
declare const name$I = "PKTActiveAbilityNotify";
declare const opcode$I = 43908;

type PKTAddonSkillFeatureChangeNotify = {
    ObjectId: bigint;
    struct_117: Buffer;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
};
declare function read$H(buf: Buffer): PKTAddonSkillFeatureChangeNotify;
declare const name$H = "PKTAddonSkillFeatureChangeNotify";
declare const opcode$H = 36297;

type PKTAuthTokenResult = {
    PacketResultCode: number;
    Unk1_m: Buffer;
};
declare function read$G(buf: Buffer): PKTAuthTokenResult;
declare const name$G = "PKTAuthTokenResult";
declare const opcode$G = 36363;

type PKTBlockSkillStateNotify = {
    ParalyzationMaxPoint: number;
    Type: number;
    ObjectId: bigint;
    ParalyzationPoint: number;
};
declare function read$F(buf: Buffer): PKTBlockSkillStateNotify;
declare const name$F = "PKTBlockSkillStateNotify";
declare const opcode$F = 33660;

type PKTCounterAttackNotify = {
    SourceId: bigint;
    Type: number;
    TargetId: bigint;
};
declare function read$E(buf: Buffer): PKTCounterAttackNotify;
declare const name$E = "PKTCounterAttackNotify";
declare const opcode$E = 44612;

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
declare function read$D(buf: Buffer): PKTDeathNotify;
declare const name$D = "PKTDeathNotify";
declare const opcode$D = 27220;

type PKTInitAbility = {
    struct_121: Buffer;
    abilityDataList: AbilityData[];
};
declare function read$C(buf: Buffer): PKTInitAbility;
declare const name$C = "PKTInitAbility";
declare const opcode$C = 48153;

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
declare function read$B(buf: Buffer): PKTInitEnv;
declare const name$B = "PKTInitEnv";
declare const opcode$B = 22330;

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
declare function read$A(buf: Buffer): PKTInitPC;
declare const name$A = "PKTInitPC";
declare const opcode$A = 52266;

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
declare function read$z(buf: Buffer): PKTInitLocal;
declare const name$z = "PKTInitLocal";
declare const opcode$z = 18980;

type PKTMigrationExecute = {
    Account_CharacterId1: bigint;
    ServerAddr: string;
    Account_CharacterId2: bigint;
    Unk3: number;
};
declare function read$y(buf: Buffer): PKTMigrationExecute;
declare const name$y = "PKTMigrationExecute";
declare const opcode$y = 19365;

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
declare function read$x(buf: Buffer): PKTNewNpc;
declare const name$x = "PKTNewNpc";
declare const opcode$x = 1040;

type PKTNewNpcSummon = {
    PublishReason: number;
    OwnerId: bigint;
    NpcData: NpcData;
};
declare function read$w(buf: Buffer): PKTNewNpcSummon;
declare const name$w = "PKTNewNpcSummon";
declare const opcode$w = 3448;

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
declare function read$v(buf: Buffer): PKTNewPC;
declare const name$v = "PKTNewPC";
declare const opcode$v = 15971;

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
declare function read$u(buf: Buffer): PKTNewProjectile;
declare const name$u = "PKTNewProjectile";
declare const opcode$u = 6340;

type PKTParalyzationStateNotify = {
    Enable: boolean;
    ParalyzationPoint: number;
    DecreasePoint: number;
    ParalyzationMaxPoint: number;
    NoHitCheckTime: number;
    HitCheckTime: number;
    ObjectId: bigint;
};
declare function read$t(buf: Buffer): PKTParalyzationStateNotify;
declare const name$t = "PKTParalyzationStateNotify";
declare const opcode$t = 47778;

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
declare function read$s(buf: Buffer): PKTPartyInfo;
declare const name$s = "PKTPartyInfo";
declare const opcode$s = 54811;

type PKTPartyLeaveResult = {
    PartyLeaveType: number;
    PartyInstanceId: number;
    Name: string;
};
declare function read$r(buf: Buffer): PKTPartyLeaveResult;
declare const name$r = "PKTPartyLeaveResult";
declare const opcode$r = 43243;

type PKTPartyPassiveStatusEffectAddNotify = {
    ObjectId: bigint;
    passiveStatusEffectList: number[];
    Unk0_m: number;
};
declare function read$q(buf: Buffer): PKTPartyPassiveStatusEffectAddNotify;
declare const name$q = "PKTPartyPassiveStatusEffectAddNotify";
declare const opcode$q = 19025;

type PKTPartyPassiveStatusEffectRemoveNotify = {
    ObjectId: bigint;
    passiveStatusEffectList: number[];
};
declare function read$p(buf: Buffer): PKTPartyPassiveStatusEffectRemoveNotify;
declare const name$p = "PKTPartyPassiveStatusEffectRemoveNotify";
declare const opcode$p = 40394;

type PKTPartyStatusEffectAddNotify = {
    Unk0: bigint;
    CharacterId: bigint;
    statusEffectDatas: StatusEffectData[];
    Unk3: number;
    PlayerIdOnRefresh: bigint;
};
declare function read$o(buf: Buffer): PKTPartyStatusEffectAddNotify;
declare const name$o = "PKTPartyStatusEffectAddNotify";
declare const opcode$o = 12206;

type PKTPartyStatusEffectRemoveNotify = {
    CharacterId: bigint;
    Unk1: bigint;
    statusEffectIds: number[];
    Unk3: number;
};
declare function read$n(buf: Buffer): PKTPartyStatusEffectRemoveNotify;
declare const name$n = "PKTPartyStatusEffectRemoveNotify";
declare const opcode$n = 38092;

type PKTPartyStatusEffectResultNotify = {
    PartyInstanceId: number;
    RaidInstanceId: number;
    CharacterId: bigint;
};
declare function read$m(buf: Buffer): PKTPartyStatusEffectResultNotify;
declare const name$m = "PKTPartyStatusEffectResultNotify";
declare const opcode$m = 35973;

type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};
declare function read$l(buf: Buffer): PKTPassiveStatusEffectAddNotify;
declare const name$l = "PKTPassiveStatusEffectAddNotify";
declare const opcode$l = 12394;

type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};
declare function read$k(buf: Buffer): PKTPassiveStatusEffectRemoveNotify;
declare const name$k = "PKTPassiveStatusEffectRemoveNotify";
declare const opcode$k = 2763;

type PKTRaidBossKillNotify = {
    Unk0: Buffer;
};
declare function read$j(buf: Buffer): PKTRaidBossKillNotify;
declare const name$j = "PKTRaidBossKillNotify";
declare const opcode$j = 1876;

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
declare function read$i(buf: Buffer): PKTRaidResult;
declare const name$i = "PKTRaidResult";
declare const opcode$i = 10861;

type UnpublishObject = {
    UnpublishReason: number;
    ObjectId: bigint;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};
declare function read$h(buf: Buffer): PKTRemoveObject;
declare const name$h = "PKTRemoveObject";
declare const opcode$h = 25018;

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
declare function read$g(buf: Buffer): PKTSkillDamageAbnormalMoveNotify;
declare const name$g = "PKTSkillDamageAbnormalMoveNotify";
declare const opcode$g = 44143;

type PKTSkillDamageNotify = {
    SkillLevel: number;
    SourceId: bigint;
    SkillId: number;
    SkillDamageEvents: SkillDamageEvent[];
    SkillEffectId: number;
};
declare function read$f(buf: Buffer): PKTSkillDamageNotify;
declare const name$f = "PKTSkillDamageNotify";
declare const opcode$f = 50947;

type PKTSkillStageNotify = {
    SourceId: bigint;
    SkillId: number;
    Stage: number;
};
declare function read$e(buf: Buffer): PKTSkillStageNotify;
declare const name$e = "PKTSkillStageNotify";
declare const opcode$e = 44221;

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
declare function read$d(buf: Buffer): PKTSkillStartNotify;
declare const name$d = "PKTSkillStartNotify";
declare const opcode$d = 16905;

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
declare function read$c(buf: Buffer): PKTStatChangeOriginNotify;
declare const name$c = "PKTStatChangeOriginNotify";
declare const opcode$c = 6051;

type PKTStatusEffectAddNotify = {
    statusEffectData: StatusEffectData;
    ObjectId: bigint;
    New: boolean;
    Unk3: bigint;
    Unk4_0?: bigint;
};
declare function read$b(buf: Buffer): PKTStatusEffectAddNotify;
declare const name$b = "PKTStatusEffectAddNotify";
declare const opcode$b = 56830;

type PKTStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    ObjectId: bigint;
    Reason: number;
};
declare function read$a(buf: Buffer): PKTStatusEffectRemoveNotify;
declare const name$a = "PKTStatusEffectRemoveNotify";
declare const opcode$a = 23914;

type PKTStatusEffectDurationNotify = {
    EffectInstanceId: number;
    TargetId: bigint;
    ExpirationTick: bigint;
};
declare function read$9(buf: Buffer): PKTStatusEffectDurationNotify;
declare const name$9 = "PKTStatusEffectDurationNotify";
declare const opcode$9 = 46140;

type PKTStatusEffectSyncDataNotify = {
    ObjectId: bigint;
    EffectInstanceId: number;
    CharacterId: bigint;
    Value: number;
};
declare function read$8(buf: Buffer): PKTStatusEffectSyncDataNotify;
declare const name$8 = "PKTStatusEffectSyncDataNotify";
declare const opcode$8 = 2750;

type PKTTriggerBossBattleStatus = {
    Step: number;
    Unk2_m: boolean;
    TriggerId: number;
};
declare function read$7(buf: Buffer): PKTTriggerBossBattleStatus;
declare const name$7 = "PKTTriggerBossBattleStatus";
declare const opcode$7 = 9915;

type PKTTriggerFinishNotify = {
    PacketResultCode: number;
    TriggerId: number;
    Unk0_m: number;
    InvolvedPCs: bigint[];
};
declare function read$6(buf: Buffer): PKTTriggerFinishNotify;
declare const name$6 = "PKTTriggerFinishNotify";
declare const opcode$6 = 53812;

type PKTTriggerStartNotify = {
    TriggerId: number;
    TriggerSignalType: number;
    SourceId: bigint;
    InvolvedPCs: bigint[];
};
declare function read$5(buf: Buffer): PKTTriggerStartNotify;
declare const name$5 = "PKTTriggerStartNotify";
declare const opcode$5 = 49092;

type PKTTroopMemberUpdateMinNotify = {
    Unk0: bigint;
    Unk1: bigint;
    Unk0_m: number;
    statusEffectDatas: StatusEffectData[];
    Unk4: bigint;
    Unk5: bigint;
};
declare function read$4(buf: Buffer): PKTTroopMemberUpdateMinNotify;
declare const name$4 = "PKTTroopMemberUpdateMinNotify";
declare const opcode$4 = 7345;

type PKTIdentityGaugeChangeNotify = {
    IdentityGauge1: number;
    IdentityGauge2: number;
    IdentityGauge3: number;
    PlayerId: bigint;
};
declare function read$3(buf: Buffer): PKTIdentityGaugeChangeNotify;
declare const name$3 = "PKTIdentityGaugeChangeNotify";
declare const opcode$3 = 11255;

type PKTZoneObjectUnpublishNotify = {
    ObjectId: bigint;
};
declare function read$2(buf: Buffer): PKTZoneObjectUnpublishNotify;
declare const name$2 = "PKTZoneObjectUnpublishNotify";
declare const opcode$2 = 53893;

type ZoneStatusEffectData = {
    StackCount: number;
    Target: number;
    Id: number;
};

type PKTZoneStatusEffectAddNotify = {
    zoneStatusEffectDataList: ZoneStatusEffectData[];
};
declare function read$1(buf: Buffer): PKTZoneStatusEffectAddNotify;
declare const name$1 = "PKTZoneStatusEffectAddNotify";
declare const opcode$1 = 49467;

type PKTZoneStatusEffectRemoveNotify = {
    StatusEffectId: number;
};
declare function read(buf: Buffer): PKTZoneStatusEffectRemoveNotify;
declare const name = "PKTZoneStatusEffectRemoveNotify";
declare const opcode = 5255;

export { opcode$C as $, PKTRaidResult as A, PKTRemoveObject as B, PKTSkillDamageAbnormalMoveNotify as C, PKTSkillDamageNotify as D, PKTSkillStageNotify as E, PKTSkillStartNotify as F, PKTStatChangeOriginNotify as G, PKTStatusEffectAddNotify as H, PKTStatusEffectRemoveNotify as I, PKTStatusEffectDurationNotify as J, PKTStatusEffectSyncDataNotify as K, PKTTriggerBossBattleStatus as L, PKTTriggerFinishNotify as M, PKTTriggerStartNotify as N, PKTTroopMemberUpdateMinNotify as O, PKTAbilityChangeNotify as P, PKTIdentityGaugeChangeNotify as Q, PKTZoneObjectUnpublishNotify as R, PKTZoneStatusEffectAddNotify as S, PKTZoneStatusEffectRemoveNotify as T, opcode$J as U, opcode$I as V, opcode$H as W, opcode$G as X, opcode$F as Y, opcode$E as Z, opcode$D as _, PKTActiveAbilityNotify as a, name$k as a$, opcode$B as a0, opcode$A as a1, opcode$z as a2, opcode$y as a3, opcode$x as a4, opcode$w as a5, opcode$v as a6, opcode$u as a7, opcode$t as a8, opcode$s as a9, opcode$1 as aA, opcode as aB, name$J as aC, name$I as aD, name$H as aE, name$G as aF, name$F as aG, name$E as aH, name$D as aI, name$C as aJ, name$B as aK, name$A as aL, name$z as aM, name$y as aN, name$x as aO, name$w as aP, name$v as aQ, name$u as aR, name$t as aS, name$s as aT, name$r as aU, name$q as aV, name$p as aW, name$o as aX, name$n as aY, name$m as aZ, name$l as a_, opcode$r as aa, opcode$q as ab, opcode$p as ac, opcode$o as ad, opcode$n as ae, opcode$m as af, opcode$l as ag, opcode$k as ah, opcode$j as ai, opcode$i as aj, opcode$h as ak, opcode$g as al, opcode$f as am, opcode$e as an, opcode$d as ao, opcode$c as ap, opcode$b as aq, opcode$a as ar, opcode$9 as as, opcode$8 as at, opcode$7 as au, opcode$6 as av, opcode$5 as aw, opcode$4 as ax, opcode$3 as ay, opcode$2 as az, PKTAddonSkillFeatureChangeNotify as b, read$2 as b$, name$j as b0, name$i as b1, name$h as b2, name$g as b3, name$f as b4, name$e as b5, name$d as b6, name$c as b7, name$b as b8, name$a as b9, read$t as bA, read$s as bB, read$r as bC, read$q as bD, read$p as bE, read$o as bF, read$n as bG, read$m as bH, read$l as bI, read$k as bJ, read$j as bK, read$i as bL, read$h as bM, read$g as bN, read$f as bO, read$e as bP, read$d as bQ, read$c as bR, read$b as bS, read$a as bT, read$9 as bU, read$8 as bV, read$7 as bW, read$6 as bX, read$5 as bY, read$4 as bZ, read$3 as b_, name$9 as ba, name$8 as bb, name$7 as bc, name$6 as bd, name$5 as be, name$4 as bf, name$3 as bg, name$2 as bh, name$1 as bi, name as bj, read$J as bk, read$I as bl, read$H as bm, read$G as bn, read$F as bo, read$E as bp, read$D as bq, read$C as br, read$B as bs, read$A as bt, read$z as bu, read$y as bv, read$x as bw, read$w as bx, read$v as by, read$u as bz, PKTAuthTokenResult as c, read$1 as c0, read as c1, PKTBlockSkillStateNotify as d, PKTCounterAttackNotify as e, PKTDeathNotify as f, PKTInitAbility as g, PKTInitEnv as h, PKTInitPC as i, PKTInitLocal as j, PKTMigrationExecute as k, PKTNewNpc as l, PKTNewNpcSummon as m, PKTNewPC as n, PKTNewProjectile as o, PKTParalyzationStateNotify as p, PKTPartyInfo as q, PKTPartyLeaveResult as r, PKTPartyPassiveStatusEffectAddNotify as s, PKTPartyPassiveStatusEffectRemoveNotify as t, PKTPartyStatusEffectAddNotify as u, PKTPartyStatusEffectRemoveNotify as v, PKTPartyStatusEffectResultNotify as w, PKTPassiveStatusEffectAddNotify as x, PKTPassiveStatusEffectRemoveNotify as y, PKTRaidBossKillNotify as z };
