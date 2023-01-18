type AbilityData = {
    Points: number;
    Id: number;
    Level: number;
};

type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};
declare function read$D(buf: Buffer): PKTAbilityChangeNotify;
declare const name$D = "PKTAbilityChangeNotify";
declare const opcode$D = 41653;

type ActiveAbility = {
    Level: number;
    FeatureType: number;
};

type PKTActiveAbilityNotify = {
    ObjectId: bigint;
    activeAbilityList: ActiveAbility[];
};
declare function read$C(buf: Buffer): PKTActiveAbilityNotify;
declare const name$C = "PKTActiveAbilityNotify";
declare const opcode$C = 40185;

type PKTAddonSkillFeatureChangeNotify = {
    struct_120: Buffer;
    ObjectId: bigint;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
};
declare function read$B(buf: Buffer): PKTAddonSkillFeatureChangeNotify;
declare const name$B = "PKTAddonSkillFeatureChangeNotify";
declare const opcode$B = 26664;

type PKTAuthTokenResult = {
    PacketResultCode: number;
    Unk1_m: Buffer;
};
declare function read$A(buf: Buffer): PKTAuthTokenResult;
declare const name$A = "PKTAuthTokenResult";
declare const opcode$A = 13236;

type PKTBlockSkillStateNotify = {
    ObjectId: bigint;
    ParalyzationPoint: number;
    Type: number;
    ParalyzationMaxPoint: number;
};
declare function read$z(buf: Buffer): PKTBlockSkillStateNotify;
declare const name$z = "PKTBlockSkillStateNotify";
declare const opcode$z = 15059;

type PKTCounterAttackNotify = {
    SourceId: bigint;
    TargetId: bigint;
    Type: number;
};
declare function read$y(buf: Buffer): PKTCounterAttackNotify;
declare const name$y = "PKTCounterAttackNotify";
declare const opcode$y = 1804;

type PKTDeathNotify = {
    Unk0_0?: number;
    Unk1: number;
    Unk2: number;
    Unk3: bigint;
    Unk4: number;
    Unk5_0?: number;
    Unk6: number;
    TargetId: bigint;
    SourceId: bigint;
    Unk9_0?: number;
};
declare function read$x(buf: Buffer): PKTDeathNotify;
declare const name$x = "PKTDeathNotify";
declare const opcode$x = 29634;

type PKTInitAbility = {
    struct_125: Buffer;
    abilityDataList: AbilityData[];
};
declare function read$w(buf: Buffer): PKTInitAbility;
declare const name$w = "PKTInitAbility";
declare const opcode$w = 1769;

type LostArkDateTime = Date;

type PKTInitEnv = {
    Unk0: number;
    Unk1: bigint;
    Unk2: number;
    struct_542: string;
    PlayerId: bigint;
    lostArkDateTime: LostArkDateTime;
    Unk6: number;
    struct_27: {
        struct_530: string;
        versionString: string;
        struct_542: string;
    }[];
};
declare function read$v(buf: Buffer): PKTInitEnv;
declare const name$v = "PKTInitEnv";
declare const opcode$v = 16275;

type StatusEffectData = {
    Unk0_0?: bigint;
    SkillLevel: number;
    Value?: Buffer;
    lostArkDateTime: LostArkDateTime;
    StatusEffectId: number;
    struct_423: Buffer;
    EffectInstanceId: number;
    SourceId: bigint;
    Unk8: number;
    Unk9: number;
    InstanceId: bigint;
};

type Struct_674 = {
    Unk0: number;
    Unk1: bigint;
    Unk2: number;
    Unk3: number;
    Unk4: number;
    Unk5: bigint;
    Unk6: bigint;
};

type PKTInitPC = {
    statusEffectDatas: StatusEffectData[];
    Unk1: number;
    Unk2: number;
    Unk3: number;
    GearLevel: number;
    Unk5: number;
    Unk6: number;
    Name: string;
    Unk8: number;
    Unk9: number;
    Unk10: number;
    Unk11: number;
    Unk12: Buffer;
    Unk13: number;
    Unk14: number;
    Unk15: bigint;
    struct_372: Struct_674[];
    Unk17: number;
    Unk18: number;
    Unk19: number;
    Unk20: number;
    Unk21: number;
    Unk22: number;
    Unk23_0?: number;
    struct_93: Buffer;
    Unk25: number;
    Unk26: number;
    Unk27: number;
    Unk28: bigint;
    struct_218: Buffer;
    CharacterId: bigint;
    Unk31: number;
    Unk32: number;
    Unk33: number;
    Unk34: number;
    Unk35: number;
    Unk36: number;
    Unk37: number;
    PlayerId: bigint;
    Unk39: number;
    Unk40: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk42: number;
    struct_323: Buffer;
    Unk44: bigint;
    Unk45: number;
    Unk46: number;
    Unk47: Buffer;
    Unk48: number;
    Level: number;
    Unk50: bigint;
    struct_349: string;
    ClassId: number;
    Unk53: number;
    Unk54: number;
    Unk55: number;
    Unk56: number;
};
declare function read$u(buf: Buffer): PKTInitPC;
declare const name$u = "PKTInitPC";
declare const opcode$u = 50429;

type Struct_691 = {
    Unk0_0?: Buffer;
    Unk1: number;
    Unk2_0?: number;
    Unk3: number;
    Unk4: number;
};

type PKTInitLocal = {
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    Unk1_0?: number;
    struct_323: Buffer;
    Unk3: number;
    statusEffectDatas: StatusEffectData[];
    Unk5: bigint;
    struct_125: Buffer;
    Unk7: number;
    Unk8: number;
    Unk9: bigint;
    struct_218: Buffer;
    struct_120: Buffer;
    Unk12: number;
    struct_403: Struct_691[];
    abilityDataList: AbilityData[];
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
};
declare function read$t(buf: Buffer): PKTInitLocal;
declare const name$t = "PKTInitLocal";
declare const opcode$t = 3753;

type Struct_636 = {
    Unk0_0?: number;
    Unk1: number;
    lostArkDateTime: LostArkDateTime;
    struct_429: Buffer;
    Unk4: number;
    Unk5: number;
};

type Struct_671 = {
    Unk0: number;
    struct_300: Struct_636[];
    Unk2: number;
    Unk3: number;
    Unk4: number;
    lostArkString: string;
    struct_86: Buffer;
    Unk7: bigint;
};

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type Angle = number;

type NpcData = {
    Unk0_0?: number;
    Unk1_0?: number;
    Unk2: number;
    struct_253?: Buffer;
    struct_372: Struct_674[];
    SpawnIndex: number;
    Unk6_0?: number;
    Unk7: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk9_0?: number;
    struct_318?: Buffer;
    Unk11_0?: number;
    struct_671?: Struct_671;
    Unk13_0?: number;
    statusEffectDatas: StatusEffectData[];
    Unk15_0?: number;
    Unk16: number;
    Position: Vector3F;
    Unk18_0?: bigint;
    Unk19_0?: number;
    Unk20_0?: number;
    Unk21: number;
    Unk22_0?: number;
    Unk23: number;
    Unk24_0?: number;
    TransitIndex?: number;
    Unk26: number;
    Unk27_0?: number;
    DirectionYaw: Angle;
    Unk29_0?: number;
    Unk30: number;
    ObjectId: bigint;
    TypeId: number;
};

type PKTNewNpc = {
    NpcStruct: NpcData;
    Unk1: number;
    Unk2_0?: bigint;
    Unk3_0?: number;
    Unk0_0?: string;
    Unk0_1?: string;
};
declare function read$s(buf: Buffer): PKTNewNpc;
declare const name$s = "PKTNewNpc";
declare const opcode$s = 11763;

type PKTNewNpcSummon = {
    OwnerId: bigint;
    PublishReason: number;
    NpcData: NpcData;
};
declare function read$r(buf: Buffer): PKTNewNpcSummon;
declare const name$r = "PKTNewNpcSummon";
declare const opcode$r = 13729;

type PCStruct = {
    Unk0: number;
    Unk1: number;
    Unk5_m: number;
    Unk3_0?: Buffer;
    Unk4: number;
    struct_300: Struct_636[];
    Unk6: Buffer;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Name: string;
    CharacterId: bigint;
    Unk10: number;
    Unk11: Buffer;
    struct_120: Buffer;
    Heading: Angle;
    Unk14: number;
    Unk15: number;
    Unk16: number;
    struct_299: Struct_636[];
    ClassId: number;
    Unk19: number;
    Unk20: string;
    Unk21: number;
    Unk22: number;
    PlayerId: bigint;
    Unk24: number;
    Unk25: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    Unk27: number;
    Unk28: number;
    statusEffectDatas: StatusEffectData[];
    Unk30: number;
    Unk31: number;
    Unk32: number;
    GearLevel: number;
    Unk34: bigint;
    Unk35: number;
    Unk36: number;
    Unk37: number;
    struct_86: Buffer;
    struct_372: Struct_674[];
    Level: number;
    Unk41: number;
    Unk42: number;
    Unk43: number;
};

type TrackMoveInfo = {
    Unk0: number;
    Unk1: Buffer;
    Unk2: number;
    Unk3_0?: Buffer;
};

type PKTNewPC = {
    Unk5_0_m?: Buffer;
    Unk4_0_m?: Buffer;
    Unk2_m: number;
    Unk0_m: number;
    PCStruct: PCStruct;
    TrackMoveInfo?: TrackMoveInfo;
    Unk3_0_m?: number;
};
declare function read$q(buf: Buffer): PKTNewPC;
declare const name$q = "PKTNewPC";
declare const opcode$q = 55660;

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
    SkillEffect: number;
    ProjectileId: bigint;
    Unk2_0?: bigint;
    tripodIndex: TripodIndex;
    Unk4: number;
    Unk5: number;
    Unk6: number;
    SkillLevel: number;
    Unk8: bigint;
    Unk9: number;
    OwnerId: bigint;
    Unk11: bigint;
    Unk12: bigint;
    tripodLevel: TripodLevel;
    Unk14: number;
    Unk15_0?: number;
    struct_318?: Buffer;
    Unk17: number;
    SkillId: number;
    Unk19: number;
    Unk20: number;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};
declare function read$p(buf: Buffer): PKTNewProjectile;
declare const name$p = "PKTNewProjectile";
declare const opcode$p = 36459;

type PKTParalyzationStateNotify = {
    HitCheckTime: number;
    ParalyzationMaxPoint: number;
    Enable: boolean;
    DecreasePoint: number;
    ObjectId: bigint;
    ParalyzationPoint: number;
    NoHitCheckTime: number;
};
declare function read$o(buf: Buffer): PKTParalyzationStateNotify;
declare const name$o = "PKTParalyzationStateNotify";
declare const opcode$o = 34438;

type PartyMemberData = {
    Unk0: number;
    Unk1: bigint;
    Unk2: number;
    Unk3: number;
    CharacterLevel: number;
    Unk5: bigint;
    Unk6: number;
    Unk7: number;
    Unk8: number;
    Unk9: number;
    Unk10: number;
    Unk11: number;
    Unk12: number;
    Name: string;
    Unk14: number;
    CharacterId: bigint;
    Unk16: bigint;
    Unk17: bigint;
    Unk18: number;
    PartyMemberNumber: number;
};

type PKTPartyInfo = {
    PartyLootType: number;
    RaidInstanceId: number;
    LootGrade: number;
    MemberDatas: PartyMemberData[];
    PartyInstanceId: number;
    PartyType: number;
};
declare function read$n(buf: Buffer): PKTPartyInfo;
declare const name$n = "PKTPartyInfo";
declare const opcode$n = 43950;

type PKTPartyLeaveResult = {
    Name: string;
    PartyInstanceId: number;
    PartyLeaveType: number;
};
declare function read$m(buf: Buffer): PKTPartyLeaveResult;
declare const name$m = "PKTPartyLeaveResult";
declare const opcode$m = 59312;

type PKTPartyPassiveStatusEffectAddNotify = {
    ObjectId: bigint;
    Unk0_m: number;
    passiveStatusEffectList: number[];
};
declare function read$l(buf: Buffer): PKTPartyPassiveStatusEffectAddNotify;
declare const name$l = "PKTPartyPassiveStatusEffectAddNotify";
declare const opcode$l = 20854;

type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    ObjectId: bigint;
};
declare function read$k(buf: Buffer): PKTPartyPassiveStatusEffectRemoveNotify;
declare const name$k = "PKTPartyPassiveStatusEffectRemoveNotify";
declare const opcode$k = 48340;

type PKTPartyStatusEffectAddNotify = {
    PlayerIdOnRefresh: bigint;
    CharacterId: bigint;
    Unk2: number;
    Unk3: bigint;
    statusEffectDatas: StatusEffectData[];
};
declare function read$j(buf: Buffer): PKTPartyStatusEffectAddNotify;
declare const name$j = "PKTPartyStatusEffectAddNotify";
declare const opcode$j = 29152;

type PKTPartyStatusEffectRemoveNotify = {
    Unk0: number;
    CharacterId: bigint;
    statusEffectIds: number[];
    Unk3: bigint;
};
declare function read$i(buf: Buffer): PKTPartyStatusEffectRemoveNotify;
declare const name$i = "PKTPartyStatusEffectRemoveNotify";
declare const opcode$i = 49827;

type PKTPartyStatusEffectResultNotify = {
    RaidInstanceId: number;
    PartyInstanceId: number;
    CharacterId: bigint;
};
declare function read$h(buf: Buffer): PKTPartyStatusEffectResultNotify;
declare const name$h = "PKTPartyStatusEffectResultNotify";
declare const opcode$h = 37755;

type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};
declare function read$g(buf: Buffer): PKTPassiveStatusEffectAddNotify;
declare const name$g = "PKTPassiveStatusEffectAddNotify";
declare const opcode$g = 33210;

type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};
declare function read$f(buf: Buffer): PKTPassiveStatusEffectRemoveNotify;
declare const name$f = "PKTPassiveStatusEffectRemoveNotify";
declare const opcode$f = 16624;

type PKTRaidBossKillNotify = {
    Unk0: Buffer;
};
declare function read$e(buf: Buffer): PKTRaidBossKillNotify;
declare const name$e = "PKTRaidBossKillNotify";
declare const opcode$e = 35914;

type PKTRaidResult = {
    Unk0: bigint;
    Unk1: number;
    Unk2: number;
    Unk3: bigint;
    struct_45: {
        Unk0_0_0: bigint;
        Unk0_0_1: bigint;
        struct_495: Buffer;
        Unk0_0_3: number;
    }[];
    Unk5: number;
    Unk6: bigint;
    Unk7: bigint;
};
declare function read$d(buf: Buffer): PKTRaidResult;
declare const name$d = "PKTRaidResult";
declare const opcode$d = 24561;

type PKTRemoveObject = {
    unpublishedObjects: Buffer[];
};
declare function read$c(buf: Buffer): PKTRemoveObject;
declare const name$c = "PKTRemoveObject";
declare const opcode$c = 33454;

type MoveOptionData = {
    Mod?: number;
    Speed?: number;
    NextPos?: bigint;
    flag8?: number;
    flag10?: Buffer;
    flag20?: Buffer;
    flag40?: Buffer;
};

type SkillDamageEvent = {
    Unk3_m: number;
    CurHp: bigint;
    Damage: bigint;
    DamageAttr?: number;
    DamageType: number;
    Modifier: number;
    TargetId: bigint;
    MaxHp: bigint;
};

type SkillDamageAbnormalMoveEvent = {
    Unk1_m: number;
    Unk2_m: bigint;
    Unk0_m: MoveOptionData;
    Unk4_m: number;
    Unk8_m: number;
    Destination: Vector3F;
    Unk3_m: number;
    Position: Vector3F;
    skillDamageEvent: SkillDamageEvent;
};

type PKTSkillDamageAbnormalMoveNotify = {
    Unk1_m: number;
    SourceId: bigint;
    Unk2_m: number;
    SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    SkillId: number;
    SkillEffectId: number;
};
declare function read$b(buf: Buffer): PKTSkillDamageAbnormalMoveNotify;
declare const name$b = "PKTSkillDamageAbnormalMoveNotify";
declare const opcode$b = 10555;

type PKTSkillDamageNotify = {
    SkillId: number;
    SkillLevel: number;
    SkillEffectId: number;
    SkillDamageEvents: SkillDamageEvent[];
    SourceId: bigint;
};
declare function read$a(buf: Buffer): PKTSkillDamageNotify;
declare const name$a = "PKTSkillDamageNotify";
declare const opcode$a = 17998;

type PKTSkillStageNotify = {
    SkillId: number;
    SourceId: bigint;
    Stage: number;
};
declare function read$9(buf: Buffer): PKTSkillStageNotify;
declare const name$9 = "PKTSkillStageNotify";
declare const opcode$9 = 47144;

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
    CurPosition: Vector3F;
    Unk1_m?: number;
    NewPosition: Vector3F;
    CurDirectionYaw: Angle;
    AimTargetPosition: Vector3F;
    AiStateId?: number;
    SkillLevel: number;
    SkillId: number;
    NewDirectionYaw: Angle;
    SkillOptionData: SkillOptionData;
    PitchRotation?: Angle;
};
declare function read$8(buf: Buffer): PKTSkillStartNotify;
declare const name$8 = "PKTSkillStartNotify";
declare const opcode$8 = 28344;

type PKTStatChangeOriginNotify = {
    ObjectId: bigint;
    Unk1_0?: number;
    Unk2: {
        StatType: number;
        Value: bigint;
    }[];
    Unk3: number;
    Unk4: {
        StatType: number;
        Value: bigint;
    }[];
};
declare function read$7(buf: Buffer): PKTStatChangeOriginNotify;
declare const name$7 = "PKTStatChangeOriginNotify";
declare const opcode$7 = 37312;

type PKTStatusEffectAddNotify = {
    ObjectId: bigint;
    Unk1_0?: bigint;
    Unk2: bigint;
    statusEffectData: StatusEffectData;
    New: boolean;
};
declare function read$6(buf: Buffer): PKTStatusEffectAddNotify;
declare const name$6 = "PKTStatusEffectAddNotify";
declare const opcode$6 = 12655;

type PKTStatusEffectRemoveNotify = {
    ObjectId: bigint;
    Reason: number;
    statusEffectIds: number[];
};
declare function read$5(buf: Buffer): PKTStatusEffectRemoveNotify;
declare const name$5 = "PKTStatusEffectRemoveNotify";
declare const opcode$5 = 42373;

type PKTStatusEffectSyncDataNotify = {
    Value: number;
    EffectInstanceId: number;
    ObjectId: bigint;
    CharacterId: bigint;
};
declare function read$4(buf: Buffer): PKTStatusEffectSyncDataNotify;
declare const name$4 = "PKTStatusEffectSyncDataNotify";
declare const opcode$4 = 10266;

type PKTTriggerBossBattleStatus = {
    Step: number;
    Unk2_m: boolean;
    TriggerId: number;
};
declare function read$3(buf: Buffer): PKTTriggerBossBattleStatus;
declare const name$3 = "PKTTriggerBossBattleStatus";
declare const opcode$3 = 4265;

type PKTTriggerFinishNotify = {
    InvolvedPCs: bigint[];
    PacketResultCode: number;
    TriggerId: number;
    Unk0_m: number;
};
declare function read$2(buf: Buffer): PKTTriggerFinishNotify;
declare const name$2 = "PKTTriggerFinishNotify";
declare const opcode$2 = 38227;

type PKTTriggerStartNotify = {
    SourceId: bigint;
    TriggerSignalType: number;
    InvolvedPCs: bigint[];
    TriggerId: number;
};
declare function read$1(buf: Buffer): PKTTriggerStartNotify;
declare const name$1 = "PKTTriggerStartNotify";
declare const opcode$1 = 11378;

type PKTTroopMemberUpdateMinNotify = {
    MaxHp: bigint;
    statusEffectDatas: StatusEffectData[];
    CharacterId: bigint;
    Unk0_m: number;
    Position: bigint;
    CurHp: bigint;
};
declare function read(buf: Buffer): PKTTroopMemberUpdateMinNotify;
declare const name = "PKTTroopMemberUpdateMinNotify";
declare const opcode = 53789;

export { opcode$q as $, PKTRemoveObject as A, PKTSkillDamageAbnormalMoveNotify as B, PKTSkillDamageNotify as C, PKTSkillStageNotify as D, PKTSkillStartNotify as E, PKTStatChangeOriginNotify as F, PKTStatusEffectAddNotify as G, PKTStatusEffectRemoveNotify as H, PKTStatusEffectSyncDataNotify as I, PKTTriggerBossBattleStatus as J, PKTTriggerFinishNotify as K, PKTTriggerStartNotify as L, PKTTroopMemberUpdateMinNotify as M, opcode$D as N, opcode$C as O, PKTAbilityChangeNotify as P, opcode$B as Q, opcode$A as R, opcode$z as S, opcode$y as T, opcode$x as U, opcode$w as V, opcode$v as W, opcode$u as X, opcode$t as Y, opcode$s as Z, opcode$r as _, PKTActiveAbilityNotify as a, name$2 as a$, opcode$p as a0, opcode$o as a1, opcode$n as a2, opcode$m as a3, opcode$l as a4, opcode$k as a5, opcode$j as a6, opcode$i as a7, opcode$h as a8, opcode$g as a9, name$t as aA, name$s as aB, name$r as aC, name$q as aD, name$p as aE, name$o as aF, name$n as aG, name$m as aH, name$l as aI, name$k as aJ, name$j as aK, name$i as aL, name$h as aM, name$g as aN, name$f as aO, name$e as aP, name$d as aQ, name$c as aR, name$b as aS, name$a as aT, name$9 as aU, name$8 as aV, name$7 as aW, name$6 as aX, name$5 as aY, name$4 as aZ, name$3 as a_, opcode$f as aa, opcode$e as ab, opcode$d as ac, opcode$c as ad, opcode$b as ae, opcode$a as af, opcode$9 as ag, opcode$8 as ah, opcode$7 as ai, opcode$6 as aj, opcode$5 as ak, opcode$4 as al, opcode$3 as am, opcode$2 as an, opcode$1 as ao, opcode as ap, name$D as aq, name$C as ar, name$B as as, name$A as at, name$z as au, name$y as av, name$x as aw, name$w as ax, name$v as ay, name$u as az, PKTAddonSkillFeatureChangeNotify as b, name$1 as b0, name as b1, read$D as b2, read$C as b3, read$B as b4, read$A as b5, read$z as b6, read$y as b7, read$x as b8, read$w as b9, read$5 as bA, read$4 as bB, read$3 as bC, read$2 as bD, read$1 as bE, read as bF, read$v as ba, read$u as bb, read$t as bc, read$s as bd, read$r as be, read$q as bf, read$p as bg, read$o as bh, read$n as bi, read$m as bj, read$l as bk, read$k as bl, read$j as bm, read$i as bn, read$h as bo, read$g as bp, read$f as bq, read$e as br, read$d as bs, read$c as bt, read$b as bu, read$a as bv, read$9 as bw, read$8 as bx, read$7 as by, read$6 as bz, PKTAuthTokenResult as c, PKTBlockSkillStateNotify as d, PKTCounterAttackNotify as e, PKTDeathNotify as f, PKTInitAbility as g, PKTInitEnv as h, PKTInitPC as i, PKTInitLocal as j, PKTNewNpc as k, PKTNewNpcSummon as l, PKTNewPC as m, PKTNewProjectile as n, PKTParalyzationStateNotify as o, PKTPartyInfo as p, PKTPartyLeaveResult as q, PKTPartyPassiveStatusEffectAddNotify as r, PKTPartyPassiveStatusEffectRemoveNotify as s, PKTPartyStatusEffectAddNotify as t, PKTPartyStatusEffectRemoveNotify as u, PKTPartyStatusEffectResultNotify as v, PKTPassiveStatusEffectAddNotify as w, PKTPassiveStatusEffectRemoveNotify as x, PKTRaidBossKillNotify as y, PKTRaidResult as z };
