type AbilityData = {
    Level: number;
    Id: number;
    Points: number;
};

type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};
declare function read$F(buf: Buffer): PKTAbilityChangeNotify;
declare const name$F = "PKTAbilityChangeNotify";
declare const opcode$F = 2055;

type ActiveAbility = {
    Level: number;
    FeatureType: number;
};

type PKTActiveAbilityNotify = {
    ObjectId: bigint;
    activeAbilityList: ActiveAbility[];
};
declare function read$E(buf: Buffer): PKTActiveAbilityNotify;
declare const name$E = "PKTActiveAbilityNotify";
declare const opcode$E = 8789;

type PKTAddonSkillFeatureChangeNotify = {
    addonSkillFeatureList: {
        SkillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    ObjectId: bigint;
    struct_120: Buffer;
};
declare function read$D(buf: Buffer): PKTAddonSkillFeatureChangeNotify;
declare const name$D = "PKTAddonSkillFeatureChangeNotify";
declare const opcode$D = 27714;

type PKTAuthTokenResult = {
    Unk1_m: Buffer;
    PacketResultCode: number;
};
declare function read$C(buf: Buffer): PKTAuthTokenResult;
declare const name$C = "PKTAuthTokenResult";
declare const opcode$C = 51585;

type PKTBlockSkillStateNotify = {
    ParalyzationPoint: number;
    ParalyzationMaxPoint: number;
    Type: number;
    ObjectId: bigint;
};
declare function read$B(buf: Buffer): PKTBlockSkillStateNotify;
declare const name$B = "PKTBlockSkillStateNotify";
declare const opcode$B = 14430;

type PKTCounterAttackNotify = {
    TargetId: bigint;
    SourceId: bigint;
    Type: number;
};
declare function read$A(buf: Buffer): PKTCounterAttackNotify;
declare const name$A = "PKTCounterAttackNotify";
declare const opcode$A = 25211;

type PKTDeathNotify = {
    Unk0: bigint;
    TargetId: bigint;
    Unk2_0?: number;
    Unk3_0?: number;
    SourceId: bigint;
    Unk5: number;
    Unk6_0?: number;
    Unk7: number;
    Unk8: number;
    Unk9: number;
};
declare function read$z(buf: Buffer): PKTDeathNotify;
declare const name$z = "PKTDeathNotify";
declare const opcode$z = 1006;

type PKTInitAbility = {
    abilityDataList: AbilityData[];
    struct_125: Buffer;
};
declare function read$y(buf: Buffer): PKTInitAbility;
declare const name$y = "PKTInitAbility";
declare const opcode$y = 59534;

type LostArkDateTime = Date;

type PKTInitEnv = {
    Unk0: number;
    Unk1: number;
    struct_542: string;
    lostArkDateTime: LostArkDateTime;
    struct_27: {
        struct_542: string;
        struct_529: string;
        versionString: string;
    }[];
    Unk5: bigint;
    Unk6: number;
    PlayerId: bigint;
};
declare function read$x(buf: Buffer): PKTInitEnv;
declare const name$x = "PKTInitEnv";
declare const opcode$x = 5818;

type StatusEffectData = {
    lostArkDateTime: LostArkDateTime;
    InstanceId: bigint;
    Unk2: number;
    SourceId: bigint;
    struct_418: Buffer;
    Unk5_0?: bigint;
    Value?: Buffer;
    Unk7: number;
    StatusEffectId: number;
    EffectInstanceId: number;
    SkillLevel: number;
};

type Struct_673 = {
    Unk0: number;
    Unk1: number;
    Unk2: number;
    Unk3: bigint;
    Unk4: bigint;
    Unk5: number;
    Unk6: bigint;
};

type PKTInitPC = {
    Unk0: number;
    Unk1: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk3: number;
    struct_215: Buffer;
    Unk5: bigint;
    Unk6: Buffer;
    Unk7: number;
    Unk8: number;
    statusEffectDatas: StatusEffectData[];
    Name: string;
    Unk11: number;
    Unk12: number;
    Unk13: number;
    ClassId: number;
    Unk15: number;
    Unk16: Buffer;
    Unk17: number;
    struct_343: string;
    Unk19: number;
    Unk20: number;
    Unk21: number;
    Unk22: number;
    Unk23: number;
    Unk24: number;
    Unk25: number;
    Unk26: bigint;
    struct_367: Struct_673[];
    Unk28: bigint;
    Unk29: number;
    Unk30: number;
    Unk31: number;
    Unk32: number;
    Level: number;
    Unk34: number;
    Unk35: number;
    Unk36: number;
    Unk37: number;
    Unk38: Buffer;
    PlayerId: bigint;
    Unk40_0?: number;
    GearLevel: number;
    Unk42: number;
    Unk43: number;
    Unk44: number;
    Unk45: number;
    Unk46: number;
    Unk47: number;
    struct_94: Buffer;
    CharacterId: bigint;
    Unk50: bigint;
    Unk51: number;
    Unk52: number;
    Unk53: number;
    Unk54: number;
    Unk55: number;
    struct_318: Buffer;
};
declare function read$w(buf: Buffer): PKTInitPC;
declare const name$w = "PKTInitPC";
declare const opcode$w = 49736;

type Struct_690 = {
    Unk0: number;
    Unk1: number;
    Unk2_0?: number;
    Unk3_0?: Buffer;
    Unk4: number;
};

type PKTInitLocal = {
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    struct_397: Struct_690[];
    Unk2: number;
    abilityDataList: AbilityData[];
    struct_125: Buffer;
    statusEffectDatas: StatusEffectData[];
    Unk6_0?: number;
    Unk7: number;
    struct_318: Buffer;
    Unk9: number;
    struct_215: Buffer;
    Unk11: bigint;
    Unk12: bigint;
    addonSkillFeatureList: {
        SkillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    struct_120: Buffer;
    Unk15: number;
};
declare function read$v(buf: Buffer): PKTInitLocal;
declare const name$v = "PKTInitLocal";
declare const opcode$v = 7987;

type PKTMigrationExecute = {
    Account_CharacterId1: bigint;
    Account_CharacterId2: bigint;
    ServerAddr: string;
    AuthKey: number;
};
declare function read$u(buf: Buffer): PKTMigrationExecute;
declare const name$u = "PKTMigrationExecute";
declare const opcode$u = 43659;

type Struct_635 = {
    Unk0: number;
    Unk1: number;
    Unk2_0?: number;
    lostArkDateTime: LostArkDateTime;
    Unk4: number;
    struct_423: Buffer;
};

type Struct_670 = {
    struct_87: Buffer;
    Unk1: number;
    Unk2: number;
    Unk3: number;
    struct_296: Struct_635[];
    Unk5: number;
    lostArkString: string;
    Unk7: bigint;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    Unk0: number;
    Unk1_0?: number;
    struct_251?: Buffer;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk4: number;
    struct_670?: Struct_670;
    Unk6_0?: number;
    Unk7: number;
    Unk8_0?: number;
    Unk9: number;
    Unk10: number;
    Unk11_0?: bigint;
    Unk12_0?: number;
    TransitIndex?: number;
    DirectionYaw: Angle;
    struct_314?: Buffer;
    Unk16_0?: number;
    TypeId: number;
    struct_367: Struct_673[];
    ObjectId: bigint;
    statusEffectDatas: StatusEffectData[];
    Unk21: number;
    Unk22_0?: number;
    Unk23_0?: number;
    Unk24: number;
    SpawnIndex: number;
    Position: Vector3F;
    Unk27_0?: number;
    Unk28_0?: number;
    Unk29_0?: number;
    Unk30_0?: number;
    Unk31_0?: number;
    Unk32_0?: number;
};

type PKTNewNpc = {
    Unk0_0?: string;
    Unk0_1?: string;
    Unk1: number;
    Unk2_0?: number;
    NpcStruct: NpcData;
    Unk4_0?: bigint;
};
declare function read$t(buf: Buffer): PKTNewNpc;
declare const name$t = "PKTNewNpc";
declare const opcode$t = 29519;

type PKTNewNpcSummon = {
    NpcData: NpcData;
    PublishReason: number;
    OwnerId: bigint;
};
declare function read$s(buf: Buffer): PKTNewNpcSummon;
declare const name$s = "PKTNewNpcSummon";
declare const opcode$s = 34300;

type TrackMoveInfo = {
    Unk0: number;
    Unk1_0?: Buffer;
    Unk2: number;
    Unk3: Buffer;
};

type PCStruct = {
    struct_296: Struct_635[];
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk2: number;
    Name: string;
    Unk4: number;
    Unk5: number;
    Unk6: number;
    GearLevel: number;
    struct_295: Struct_635[];
    Unk9: Buffer;
    Unk5_m: number;
    CharacterId: bigint;
    Unk12: number;
    Unk13: number;
    struct_120: Buffer;
    Unk15: number;
    Unk16: number;
    Unk17: string;
    Unk18: number;
    Unk19_0?: Buffer;
    ClassId: number;
    Level: number;
    Unk22: number;
    struct_367: Struct_673[];
    Unk24: number;
    Unk25: number;
    Unk26: number;
    Unk27: number;
    Unk28: number;
    Unk29: Buffer;
    Unk30: bigint;
    Heading: Angle;
    Unk32: number;
    Unk33: number;
    Unk34: number;
    Unk35: number;
    Unk36: number;
    addonSkillFeatureList: {
        SkillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    Unk38: number;
    statusEffectDatas: StatusEffectData[];
    PlayerId: bigint;
    Unk41: number;
    Unk42: number;
    struct_87: Buffer;
    Unk44: number;
};

type PKTNewPC = {
    Unk3_0_m?: number;
    Unk5_0_m?: Buffer;
    TrackMoveInfo?: TrackMoveInfo;
    PCStruct: PCStruct;
    Unk2_m: number;
    Unk4_0_m?: Buffer;
    Unk0_m: number;
};
declare function read$r(buf: Buffer): PKTNewPC;
declare const name$r = "PKTNewPC";
declare const opcode$r = 34863;

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
    struct_314?: Buffer;
    Unk1: number;
    SkillLevel: number;
    Unk3: number;
    OwnerId: bigint;
    Unk5: number;
    Unk6: number;
    ProjectileId: bigint;
    SkillId: number;
    Unk9: bigint;
    Unk10_0?: number;
    Unk11: number;
    SkillEffect: number;
    Unk13_0?: bigint;
    Unk14: number;
    tripodLevel: TripodLevel;
    Unk16: number;
    Unk17: number;
    Unk18: bigint;
    tripodIndex: TripodIndex;
    Unk20: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};
declare function read$q(buf: Buffer): PKTNewProjectile;
declare const name$q = "PKTNewProjectile";
declare const opcode$q = 55720;

type PKTParalyzationStateNotify = {
    NoHitCheckTime: number;
    HitCheckTime: number;
    ParalyzationPoint: number;
    ParalyzationMaxPoint: number;
    DecreasePoint: number;
    Enable: boolean;
    ObjectId: bigint;
};
declare function read$p(buf: Buffer): PKTParalyzationStateNotify;
declare const name$p = "PKTParalyzationStateNotify";
declare const opcode$p = 24051;

type PartyMemberData = {
    Auths: number;
    ZoneInstId: bigint;
    Unk2: number;
    Position: Vector3F;
    CharacterLevel: number;
    WorldId: number;
    Unk6: number;
    CharacterId: bigint;
    TransitIndex: number;
    Unk9: number;
    Unk10: number;
    Unk11: number;
    MaxHp: bigint;
    GearLevel: number;
    ZoneId: number;
    Unk15: number;
    ClassId: number;
    CurHp: bigint;
    PartyMemberNumber: number;
    Name: string;
};

type PKTPartyInfo = {
    PartyType: number;
    PartyLootType: number;
    LootGrade: number;
    RaidInstanceId: number;
    PartyInstanceId: number;
    MemberDatas: PartyMemberData[];
};
declare function read$o(buf: Buffer): PKTPartyInfo;
declare const name$o = "PKTPartyInfo";
declare const opcode$o = 10839;

type PKTPartyLeaveResult = {
    PartyInstanceId: number;
    PartyLeaveType: number;
    Name: string;
};
declare function read$n(buf: Buffer): PKTPartyLeaveResult;
declare const name$n = "PKTPartyLeaveResult";
declare const opcode$n = 41810;

type PKTPartyPassiveStatusEffectAddNotify = {
    ObjectId: bigint;
    Unk0_m: number;
    passiveStatusEffectList: number[];
};
declare function read$m(buf: Buffer): PKTPartyPassiveStatusEffectAddNotify;
declare const name$m = "PKTPartyPassiveStatusEffectAddNotify";
declare const opcode$m = 7578;

type PKTPartyPassiveStatusEffectRemoveNotify = {
    ObjectId: bigint;
    passiveStatusEffectList: number[];
};
declare function read$l(buf: Buffer): PKTPartyPassiveStatusEffectRemoveNotify;
declare const name$l = "PKTPartyPassiveStatusEffectRemoveNotify";
declare const opcode$l = 45127;

type PKTPartyStatusEffectAddNotify = {
    Unk0: bigint;
    CharacterId: bigint;
    statusEffectDatas: StatusEffectData[];
    PlayerIdOnRefresh: bigint;
    Unk4: number;
};
declare function read$k(buf: Buffer): PKTPartyStatusEffectAddNotify;
declare const name$k = "PKTPartyStatusEffectAddNotify";
declare const opcode$k = 17518;

type PKTPartyStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    Unk1: bigint;
    Unk2: number;
    CharacterId: bigint;
};
declare function read$j(buf: Buffer): PKTPartyStatusEffectRemoveNotify;
declare const name$j = "PKTPartyStatusEffectRemoveNotify";
declare const opcode$j = 35134;

type PKTPartyStatusEffectResultNotify = {
    CharacterId: bigint;
    PartyInstanceId: number;
    RaidInstanceId: number;
};
declare function read$i(buf: Buffer): PKTPartyStatusEffectResultNotify;
declare const name$i = "PKTPartyStatusEffectResultNotify";
declare const opcode$i = 7534;

type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};
declare function read$h(buf: Buffer): PKTPassiveStatusEffectAddNotify;
declare const name$h = "PKTPassiveStatusEffectAddNotify";
declare const opcode$h = 12065;

type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};
declare function read$g(buf: Buffer): PKTPassiveStatusEffectRemoveNotify;
declare const name$g = "PKTPassiveStatusEffectRemoveNotify";
declare const opcode$g = 28134;

type PKTRaidBossKillNotify = {
    Unk0: Buffer;
};
declare function read$f(buf: Buffer): PKTRaidBossKillNotify;
declare const name$f = "PKTRaidBossKillNotify";
declare const opcode$f = 845;

type PKTRaidResult = {
    Unk0: number;
    Unk1: bigint;
    Unk2: bigint;
    Unk3: bigint;
    Unk4: bigint;
    Unk5: number;
    struct_46: {
        struct_489: Buffer;
        Unk0_0_1: number;
        Unk0_0_2: bigint;
        Unk0_0_3: bigint;
    }[];
    Unk7: number;
};
declare function read$e(buf: Buffer): PKTRaidResult;
declare const name$e = "PKTRaidResult";
declare const opcode$e = 34049;

type UnpublishObject = {
    ObjectId: bigint;
    UnpublishReason: number;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};
declare function read$d(buf: Buffer): PKTRemoveObject;
declare const name$d = "PKTRemoveObject";
declare const opcode$d = 57048;

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
    MaxHp: bigint;
    Modifier: number;
    DamageAttr?: number;
    TargetId: bigint;
    CurHp: bigint;
    Damage: bigint;
    Unk3_m: number;
    DamageType: number;
};

type SkillDamageAbnormalMoveEvent = {
    SkillMoveOptionData: SkillMoveOptionData;
    skillDamageEvent: SkillDamageEvent;
    Unk4_m: number;
    Position: Vector3F;
    Unk8_m: number;
    Destination: Vector3F;
    Unk3_m: number;
    Unk1_m: number;
    Unk2_m: bigint;
};

type PKTSkillDamageAbnormalMoveNotify = {
    Unk2_m: number;
    Unk1_m: number;
    SkillEffectId: number;
    SkillId: number;
    SourceId: bigint;
    SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
};
declare function read$c(buf: Buffer): PKTSkillDamageAbnormalMoveNotify;
declare const name$c = "PKTSkillDamageAbnormalMoveNotify";
declare const opcode$c = 15322;

type PKTSkillDamageNotify = {
    SourceId: bigint;
    SkillId: number;
    SkillLevel: number;
    SkillDamageEvents: SkillDamageEvent[];
    SkillEffectId: number;
};
declare function read$b(buf: Buffer): PKTSkillDamageNotify;
declare const name$b = "PKTSkillDamageNotify";
declare const opcode$b = 30373;

type PKTSkillStageNotify = {
    Stage: number;
    SourceId: bigint;
    SkillId: number;
};
declare function read$a(buf: Buffer): PKTSkillStageNotify;
declare const name$a = "PKTSkillStageNotify";
declare const opcode$a = 23925;

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
    AiStateId?: number;
    AimTargetPosition: Vector3F;
    CurDirectionYaw: Angle;
    SkillLevel: number;
    CurPosition: Vector3F;
    NewDirectionYaw: Angle;
    NewPosition: Vector3F;
    PitchRotation?: Angle;
    Unk1_m?: number;
    SourceId: bigint;
    SkillOptionData: SkillOptionData;
    SkillId: number;
};
declare function read$9(buf: Buffer): PKTSkillStartNotify;
declare const name$9 = "PKTSkillStartNotify";
declare const opcode$9 = 12114;

type PKTStatChangeOriginNotify = {
    Unk0: {
        StatType: number;
        Value: bigint;
    }[];
    Unk1: {
        StatType: number;
        Value: bigint;
    }[];
    Unk2: number;
    ObjectId: bigint;
    Unk4_0?: number;
};
declare function read$8(buf: Buffer): PKTStatChangeOriginNotify;
declare const name$8 = "PKTStatChangeOriginNotify";
declare const opcode$8 = 3778;

type PKTStatusEffectAddNotify = {
    Unk0_0?: bigint;
    New: boolean;
    ObjectId: bigint;
    Unk3: bigint;
    statusEffectData: StatusEffectData;
};
declare function read$7(buf: Buffer): PKTStatusEffectAddNotify;
declare const name$7 = "PKTStatusEffectAddNotify";
declare const opcode$7 = 5430;

type PKTStatusEffectRemoveNotify = {
    Reason: number;
    statusEffectIds: number[];
    ObjectId: bigint;
};
declare function read$6(buf: Buffer): PKTStatusEffectRemoveNotify;
declare const name$6 = "PKTStatusEffectRemoveNotify";
declare const opcode$6 = 17974;

type PKTStatusEffectSyncDataNotify = {
    Value: number;
    ObjectId: bigint;
    EffectInstanceId: number;
    CharacterId: bigint;
};
declare function read$5(buf: Buffer): PKTStatusEffectSyncDataNotify;
declare const name$5 = "PKTStatusEffectSyncDataNotify";
declare const opcode$5 = 30620;

type PKTTriggerBossBattleStatus = {
    Step: number;
    TriggerId: number;
    Unk2_m: boolean;
};
declare function read$4(buf: Buffer): PKTTriggerBossBattleStatus;
declare const name$4 = "PKTTriggerBossBattleStatus";
declare const opcode$4 = 23146;

type PKTTriggerFinishNotify = {
    TriggerId: number;
    Unk0_m: number;
    InvolvedPCs: bigint[];
    PacketResultCode: number;
};
declare function read$3(buf: Buffer): PKTTriggerFinishNotify;
declare const name$3 = "PKTTriggerFinishNotify";
declare const opcode$3 = 17709;

type PKTTriggerStartNotify = {
    TriggerId: number;
    TriggerSignalType: number;
    InvolvedPCs: bigint[];
    SourceId: bigint;
};
declare function read$2(buf: Buffer): PKTTriggerStartNotify;
declare const name$2 = "PKTTriggerStartNotify";
declare const opcode$2 = 43437;

type PKTTroopMemberUpdateMinNotify = {
    CurHp: bigint;
    CharacterId: bigint;
    MaxHp: bigint;
    Position: bigint;
    statusEffectDatas: StatusEffectData[];
    Unk0_m: number;
};
declare function read$1(buf: Buffer): PKTTroopMemberUpdateMinNotify;
declare const name$1 = "PKTTroopMemberUpdateMinNotify";
declare const opcode$1 = 23607;

type PKTIdentityGaugeChangeNotify = {
    PlayerId: bigint;
    IdentityGauge1: number;
    IdentityGauge2: number;
    IdentityGauge3: number;
};
declare function read(buf: Buffer): PKTIdentityGaugeChangeNotify;
declare const name = "PKTIdentityGaugeChangeNotify";
declare const opcode = 45217;

export { opcode$u as $, PKTRaidResult as A, PKTRemoveObject as B, PKTSkillDamageAbnormalMoveNotify as C, PKTSkillDamageNotify as D, PKTSkillStageNotify as E, PKTSkillStartNotify as F, PKTStatChangeOriginNotify as G, PKTStatusEffectAddNotify as H, PKTStatusEffectRemoveNotify as I, PKTStatusEffectSyncDataNotify as J, PKTTriggerBossBattleStatus as K, PKTTriggerFinishNotify as L, PKTTriggerStartNotify as M, PKTTroopMemberUpdateMinNotify as N, PKTIdentityGaugeChangeNotify as O, PKTAbilityChangeNotify as P, opcode$F as Q, opcode$E as R, opcode$D as S, opcode$C as T, opcode$B as U, opcode$A as V, opcode$z as W, opcode$y as X, opcode$x as Y, opcode$w as Z, opcode$v as _, PKTActiveAbilityNotify as a, name$8 as a$, opcode$t as a0, opcode$s as a1, opcode$r as a2, opcode$q as a3, opcode$p as a4, opcode$o as a5, opcode$n as a6, opcode$m as a7, opcode$l as a8, opcode$k as a9, name$z as aA, name$y as aB, name$x as aC, name$w as aD, name$v as aE, name$u as aF, name$t as aG, name$s as aH, name$r as aI, name$q as aJ, name$p as aK, name$o as aL, name$n as aM, name$m as aN, name$l as aO, name$k as aP, name$j as aQ, name$i as aR, name$h as aS, name$g as aT, name$f as aU, name$e as aV, name$d as aW, name$c as aX, name$b as aY, name$a as aZ, name$9 as a_, opcode$j as aa, opcode$i as ab, opcode$h as ac, opcode$g as ad, opcode$f as ae, opcode$e as af, opcode$d as ag, opcode$c as ah, opcode$b as ai, opcode$a as aj, opcode$9 as ak, opcode$8 as al, opcode$7 as am, opcode$6 as an, opcode$5 as ao, opcode$4 as ap, opcode$3 as aq, opcode$2 as ar, opcode$1 as as, opcode as at, name$F as au, name$E as av, name$D as aw, name$C as ax, name$B as ay, name$A as az, PKTAddonSkillFeatureChangeNotify as b, name$7 as b0, name$6 as b1, name$5 as b2, name$4 as b3, name$3 as b4, name$2 as b5, name$1 as b6, name as b7, read$F as b8, read$E as b9, read$d as bA, read$c as bB, read$b as bC, read$a as bD, read$9 as bE, read$8 as bF, read$7 as bG, read$6 as bH, read$5 as bI, read$4 as bJ, read$3 as bK, read$2 as bL, read$1 as bM, read as bN, read$D as ba, read$C as bb, read$B as bc, read$A as bd, read$z as be, read$y as bf, read$x as bg, read$w as bh, read$v as bi, read$u as bj, read$t as bk, read$s as bl, read$r as bm, read$q as bn, read$p as bo, read$o as bp, read$n as bq, read$m as br, read$l as bs, read$k as bt, read$j as bu, read$i as bv, read$h as bw, read$g as bx, read$f as by, read$e as bz, PKTAuthTokenResult as c, PKTBlockSkillStateNotify as d, PKTCounterAttackNotify as e, PKTDeathNotify as f, PKTInitAbility as g, PKTInitEnv as h, PKTInitPC as i, PKTInitLocal as j, PKTMigrationExecute as k, PKTNewNpc as l, PKTNewNpcSummon as m, PKTNewPC as n, PKTNewProjectile as o, PKTParalyzationStateNotify as p, PKTPartyInfo as q, PKTPartyLeaveResult as r, PKTPartyPassiveStatusEffectAddNotify as s, PKTPartyPassiveStatusEffectRemoveNotify as t, PKTPartyStatusEffectAddNotify as u, PKTPartyStatusEffectRemoveNotify as v, PKTPartyStatusEffectResultNotify as w, PKTPassiveStatusEffectAddNotify as x, PKTPassiveStatusEffectRemoveNotify as y, PKTRaidBossKillNotify as z };
