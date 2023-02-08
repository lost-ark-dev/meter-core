type AbilityData = {
    Points: number;
    Level: number;
    Id: number;
};

type PKTAbilityChangeNotify = {
    abilityDataList: AbilityData[];
};
declare function read$D(buf: Buffer): PKTAbilityChangeNotify;
declare const name$D = "PKTAbilityChangeNotify";
declare const opcode$D = 17235;

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
declare const opcode$C = 27962;

type PKTAddonSkillFeatureChangeNotify = {
    struct_113: Buffer;
    ObjectId: bigint;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
};
declare function read$B(buf: Buffer): PKTAddonSkillFeatureChangeNotify;
declare const name$B = "PKTAddonSkillFeatureChangeNotify";
declare const opcode$B = 31789;

type PKTAuthTokenResult = {
    PacketResultCode: number;
    Unk1_m: Buffer;
};
declare function read$A(buf: Buffer): PKTAuthTokenResult;
declare const name$A = "PKTAuthTokenResult";
declare const opcode$A = 59533;

type PKTBlockSkillStateNotify = {
    Type: number;
    ParalyzationPoint: number;
    ObjectId: bigint;
    ParalyzationMaxPoint: number;
};
declare function read$z(buf: Buffer): PKTBlockSkillStateNotify;
declare const name$z = "PKTBlockSkillStateNotify";
declare const opcode$z = 44742;

type PKTCounterAttackNotify = {
    TargetId: bigint;
    SourceId: bigint;
    Type: number;
};
declare function read$y(buf: Buffer): PKTCounterAttackNotify;
declare const name$y = "PKTCounterAttackNotify";
declare const opcode$y = 20908;

type PKTDeathNotify = {
    Unk0: bigint;
    Unk1_0?: number;
    TargetId: bigint;
    Unk3_0?: number;
    Unk4: number;
    Unk5: number;
    Unk6: number;
    SourceId: bigint;
    Unk8_0?: number;
    Unk9: number;
};
declare function read$x(buf: Buffer): PKTDeathNotify;
declare const name$x = "PKTDeathNotify";
declare const opcode$x = 14668;

type PKTInitAbility = {
    struct_116: Buffer;
    abilityDataList: AbilityData[];
};
declare function read$w(buf: Buffer): PKTInitAbility;
declare const name$w = "PKTInitAbility";
declare const opcode$w = 29723;

type LostArkDateTime = Date;

type PKTInitEnv = {
    struct_24: {
        versionString: string;
        struct_540: string;
        struct_528: string;
    }[];
    struct_540: string;
    Unk2: number;
    Unk3: number;
    lostArkDateTime: LostArkDateTime;
    Unk5: number;
    PlayerId: bigint;
    Unk7: bigint;
};
declare function read$v(buf: Buffer): PKTInitEnv;
declare const name$v = "PKTInitEnv";
declare const opcode$v = 57806;

type Struct_672 = {
    Unk0: number;
    Unk1: number;
    Unk2: bigint;
    Unk3: bigint;
    Unk4: number;
    Unk5: number;
    Unk6: bigint;
};

type StatusEffectData = {
    StatusEffectId: number;
    EffectInstanceId: number;
    SourceId: bigint;
    InstanceId: bigint;
    Unk4: number;
    Unk5: number;
    Unk6_0?: bigint;
    Value?: Buffer;
    struct_419: Buffer;
    SkillLevel: number;
    lostArkDateTime: LostArkDateTime;
};

type PKTInitPC = {
    struct_365: Struct_672[];
    Unk1: Buffer;
    Unk2: number;
    Unk3: number;
    Unk4: number;
    struct_89: Buffer;
    Unk6: number;
    Unk7: number;
    Unk8: number;
    Unk9: number;
    Unk10: number;
    statPair: {
        Value: bigint;
        StatType: number;
    }[];
    Unk12: number;
    Unk13: number;
    Unk14: number;
    Unk15: number;
    CharacterId: bigint;
    Unk17: bigint;
    Unk18: Buffer;
    Unk19: number;
    Unk20: number;
    Unk21: number;
    Unk22: number;
    Unk23: number;
    ClassId: number;
    Unk25: number;
    Unk26: number;
    Unk27: number;
    Unk28: number;
    struct_339: string;
    Unk30: number;
    Unk31: bigint;
    Unk32: number;
    Unk33: number;
    GearLevel: number;
    Unk35: number;
    Unk36: Buffer;
    PlayerId: bigint;
    Unk38: number;
    Unk39: number;
    statusEffectDatas: StatusEffectData[];
    Unk41: bigint;
    Unk42: number;
    Unk43: number;
    Unk44: number;
    Unk45: number;
    Unk46: number;
    Level: number;
    Unk48: number;
    Unk49_0?: number;
    Unk50: number;
    Unk51: number;
    Name: string;
    struct_315: Buffer;
    Unk54: bigint;
    struct_209: Buffer;
    Unk56: number;
};
declare function read$u(buf: Buffer): PKTInitPC;
declare const name$u = "PKTInitPC";
declare const opcode$u = 20790;

type Struct_689 = {
    Unk0: number;
    Unk1: number;
    Unk2_0?: number;
    Unk3_0?: Buffer;
    Unk4: number;
};

type PKTInitLocal = {
    Unk0: number;
    abilityDataList: AbilityData[];
    Unk2: number;
    Unk3: bigint;
    struct_209: Buffer;
    Unk5: number;
    statusEffectDatas: StatusEffectData[];
    struct_116: Buffer;
    Unk8_0?: number;
    struct_113: Buffer;
    struct_315: Buffer;
    Unk11: bigint;
    statPair: {
        Value: bigint;
        StatType: number;
    }[];
    struct_398: Struct_689[];
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    Unk15: number;
};
declare function read$t(buf: Buffer): PKTInitLocal;
declare const name$t = "PKTInitLocal";
declare const opcode$t = 9782;

type Struct_634 = {
    Unk0: number;
    lostArkDateTime: LostArkDateTime;
    struct_424: Buffer;
    Unk3: number;
    Unk4: number;
    Unk5_0?: number;
};

type Struct_669 = {
    Unk0: number;
    struct_293: Struct_634[];
    Unk2: bigint;
    struct_82: Buffer;
    Unk4: number;
    lostArkString: string;
    Unk6: number;
    Unk7: number;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    TransitIndex?: number;
    Unk1_0?: number;
    Unk2_0?: number;
    struct_311?: Buffer;
    Unk4_0?: number;
    Unk5: number;
    Unk6_0?: number;
    Unk7: number;
    Unk8_0?: number;
    Unk9_0?: number;
    struct_245?: Buffer;
    Unk11: number;
    Unk12: number;
    Unk13_0?: number;
    Unk14_0?: number;
    statPair: {
        Value: bigint;
        StatType: number;
    }[];
    struct_669?: Struct_669;
    DirectionYaw: Angle;
    Position: Vector3F;
    Unk19_0?: bigint;
    Unk20_0?: number;
    Unk21: number;
    Unk22_0?: number;
    TypeId: number;
    Unk24_0?: number;
    Unk25_0?: number;
    struct_365: Struct_672[];
    SpawnIndex: number;
    Unk28: number;
    Unk29: number;
    statusEffectDatas: StatusEffectData[];
    Unk31_0?: number;
    ObjectId: bigint;
};

type PKTNewNpc = {
    NpcStruct: NpcData;
    Unk1: number;
    Unk0_0?: string;
    Unk0_1?: string;
    Unk3_0?: number;
    Unk4_0?: bigint;
};
declare function read$s(buf: Buffer): PKTNewNpc;
declare const name$s = "PKTNewNpc";
declare const opcode$s = 19263;

type PKTNewNpcSummon = {
    PublishReason: number;
    NpcData: NpcData;
    OwnerId: bigint;
};
declare function read$r(buf: Buffer): PKTNewNpcSummon;
declare const name$r = "PKTNewNpcSummon";
declare const opcode$r = 45531;

type PCStruct = {
    struct_113: Buffer;
    Unk1: number;
    Unk2: number;
    Unk3: number;
    ClassId: number;
    Unk5: number;
    Unk6: number;
    Unk7: number;
    Unk8: number;
    Unk9: bigint;
    statusEffectDatas: StatusEffectData[];
    Unk11: number;
    GearLevel: number;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    Unk14: number;
    Unk15: number;
    Unk16: number;
    Unk17: number;
    Unk18: number;
    struct_82: Buffer;
    Level: number;
    PlayerId: bigint;
    struct_293: Struct_634[];
    Unk23: number;
    Unk24: number;
    Unk25: Buffer;
    Unk26: number;
    Unk27: Buffer;
    Unk28: number;
    Heading: Angle;
    Unk5_m: number;
    Name: string;
    Unk32: string;
    Unk33_0?: Buffer;
    struct_365: Struct_672[];
    Unk35: number;
    Unk36: number;
    CharacterId: bigint;
    Unk38: number;
    struct_292: Struct_634[];
    Unk40: number;
    Unk41: number;
    statPair: {
        Value: bigint;
        StatType: number;
    }[];
    Unk43: number;
};

type TrackMoveInfo = {
    Unk0: number;
    Unk1: number;
    Unk2: Buffer;
    Unk3_0?: Buffer;
};

type PKTNewPC = {
    Unk0_m: number;
    Unk4_0_m?: Buffer;
    Unk5_0_m?: Buffer;
    PCStruct: PCStruct;
    Unk2_m: number;
    Unk3_0_m?: number;
    TrackMoveInfo?: TrackMoveInfo;
};
declare function read$q(buf: Buffer): PKTNewPC;
declare const name$q = "PKTNewPC";
declare const opcode$q = 8067;

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
    Unk1_0?: number;
    Unk2: bigint;
    tripodIndex: TripodIndex;
    Unk4: number;
    SkillId: number;
    OwnerId: bigint;
    Unk7: number;
    Unk8: number;
    Unk9: bigint;
    struct_311?: Buffer;
    Unk11_0?: bigint;
    SkillLevel: number;
    Unk13: number;
    Unk14: number;
    Unk15: number;
    SkillEffect: number;
    Unk17: bigint;
    tripodLevel: TripodLevel;
    ProjectileId: bigint;
    Unk20: number;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};
declare function read$p(buf: Buffer): PKTNewProjectile;
declare const name$p = "PKTNewProjectile";
declare const opcode$p = 38002;

type PKTParalyzationStateNotify = {
    ObjectId: bigint;
    DecreasePoint: number;
    ParalyzationPoint: number;
    HitCheckTime: number;
    NoHitCheckTime: number;
    Enable: boolean;
    ParalyzationMaxPoint: number;
};
declare function read$o(buf: Buffer): PKTParalyzationStateNotify;
declare const name$o = "PKTParalyzationStateNotify";
declare const opcode$o = 1165;

type PartyMemberData = {
    Unk0: number;
    Unk1: number;
    Unk2: number;
    Unk3: bigint;
    Unk4: number;
    Unk5: number;
    Unk6: number;
    Unk7: number;
    PartyMemberNumber: number;
    Unk9: number;
    Unk10: number;
    Unk11: number;
    CharacterId: bigint;
    Unk13: number;
    Unk14: number;
    Unk15: bigint;
    Name: string;
    CharacterLevel: number;
    Unk18: bigint;
    Unk19: bigint;
};

type PKTPartyInfo = {
    PartyType: number;
    PartyInstanceId: number;
    RaidInstanceId: number;
    LootGrade: number;
    MemberDatas: PartyMemberData[];
    PartyLootType: number;
};
declare function read$n(buf: Buffer): PKTPartyInfo;
declare const name$n = "PKTPartyInfo";
declare const opcode$n = 31845;

type PKTPartyLeaveResult = {
    PartyInstanceId: number;
    PartyLeaveType: number;
    Name: string;
};
declare function read$m(buf: Buffer): PKTPartyLeaveResult;
declare const name$m = "PKTPartyLeaveResult";
declare const opcode$m = 25148;

type PKTPartyPassiveStatusEffectAddNotify = {
    ObjectId: bigint;
    Unk0_m: number;
    passiveStatusEffectList: number[];
};
declare function read$l(buf: Buffer): PKTPartyPassiveStatusEffectAddNotify;
declare const name$l = "PKTPartyPassiveStatusEffectAddNotify";
declare const opcode$l = 23968;

type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    ObjectId: bigint;
};
declare function read$k(buf: Buffer): PKTPartyPassiveStatusEffectRemoveNotify;
declare const name$k = "PKTPartyPassiveStatusEffectRemoveNotify";
declare const opcode$k = 10132;

type PKTPartyStatusEffectAddNotify = {
    statusEffectDatas: StatusEffectData[];
    CharacterId: bigint;
    Unk2: bigint;
    Unk3: number;
    PlayerIdOnRefresh: bigint;
};
declare function read$j(buf: Buffer): PKTPartyStatusEffectAddNotify;
declare const name$j = "PKTPartyStatusEffectAddNotify";
declare const opcode$j = 44010;

type PKTPartyStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    Unk1: bigint;
    CharacterId: bigint;
    Unk3: number;
};
declare function read$i(buf: Buffer): PKTPartyStatusEffectRemoveNotify;
declare const name$i = "PKTPartyStatusEffectRemoveNotify";
declare const opcode$i = 22567;

type PKTPartyStatusEffectResultNotify = {
    CharacterId: bigint;
    PartyInstanceId: number;
    RaidInstanceId: number;
};
declare function read$h(buf: Buffer): PKTPartyStatusEffectResultNotify;
declare const name$h = "PKTPartyStatusEffectResultNotify";
declare const opcode$h = 35964;

type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};
declare function read$g(buf: Buffer): PKTPassiveStatusEffectAddNotify;
declare const name$g = "PKTPassiveStatusEffectAddNotify";
declare const opcode$g = 57428;

type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};
declare function read$f(buf: Buffer): PKTPassiveStatusEffectRemoveNotify;
declare const name$f = "PKTPassiveStatusEffectRemoveNotify";
declare const opcode$f = 50974;

type PKTRaidBossKillNotify = {
    Unk0: Buffer;
};
declare function read$e(buf: Buffer): PKTRaidBossKillNotify;
declare const name$e = "PKTRaidBossKillNotify";
declare const opcode$e = 23147;

type PKTRaidResult = {
    Unk0: number;
    struct_42: {
        Unk0_0_0: bigint;
        Unk0_0_1: number;
        struct_492: Buffer;
        Unk0_0_3: bigint;
    }[];
    Unk2: number;
    Unk3: number;
    Unk4: bigint;
    Unk5: bigint;
    Unk6: bigint;
    Unk7: bigint;
};
declare function read$d(buf: Buffer): PKTRaidResult;
declare const name$d = "PKTRaidResult";
declare const opcode$d = 6589;

type UnpublishObject = {
    UnpublishReason: number;
    ObjectId: bigint;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};
declare function read$c(buf: Buffer): PKTRemoveObject;
declare const name$c = "PKTRemoveObject";
declare const opcode$c = 49888;

type SkillDamageEvent = {
    TargetId: bigint;
    DamageAttr?: number;
    CurHp: bigint;
    MaxHp: bigint;
    Modifier: number;
    Unk3_m: number;
    DamageType: number;
    Damage: bigint;
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
    Unk2_m: bigint;
    Unk4_m: number;
    skillDamageEvent: SkillDamageEvent;
    Destination: Vector3F;
    Unk1_m: number;
    Position: Vector3F;
    Unk3_m: number;
    SkillMoveOptionData: SkillMoveOptionData;
    Unk8_m: number;
};

type PKTSkillDamageAbnormalMoveNotify = {
    SourceId: bigint;
    SkillEffectId: number;
    SkillId: number;
    SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    Unk1_m: number;
    Unk2_m: number;
};
declare function read$b(buf: Buffer): PKTSkillDamageAbnormalMoveNotify;
declare const name$b = "PKTSkillDamageAbnormalMoveNotify";
declare const opcode$b = 46539;

type PKTSkillDamageNotify = {
    SkillEffectId: number;
    SkillId: number;
    SourceId: bigint;
    SkillLevel: number;
    SkillDamageEvents: SkillDamageEvent[];
};
declare function read$a(buf: Buffer): PKTSkillDamageNotify;
declare const name$a = "PKTSkillDamageNotify";
declare const opcode$a = 23135;

type PKTSkillStageNotify = {
    SourceId: bigint;
    SkillId: number;
    Stage: number;
};
declare function read$9(buf: Buffer): PKTSkillStageNotify;
declare const name$9 = "PKTSkillStageNotify";
declare const opcode$9 = 51700;

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
    CurDirectionYaw: Angle;
    SourceId: bigint;
    SkillLevel: number;
    CurPosition: Vector3F;
    PitchRotation?: Angle;
    NewPosition: Vector3F;
    AimTargetPosition: Vector3F;
    SkillOptionData: SkillOptionData;
    NewDirectionYaw: Angle;
    SkillId: number;
    Unk1_m?: number;
    AiStateId?: number;
};
declare function read$8(buf: Buffer): PKTSkillStartNotify;
declare const name$8 = "PKTSkillStartNotify";
declare const opcode$8 = 38704;

type PKTStatChangeOriginNotify = {
    Unk0_0?: number;
    Unk1: {
        Value: bigint;
        StatType: number;
    }[];
    Unk2: number;
    ObjectId: bigint;
    Unk4: {
        Value: bigint;
        StatType: number;
    }[];
};
declare function read$7(buf: Buffer): PKTStatChangeOriginNotify;
declare const name$7 = "PKTStatChangeOriginNotify";
declare const opcode$7 = 52643;

type PKTStatusEffectAddNotify = {
    Unk0: bigint;
    Unk1_0?: bigint;
    New: boolean;
    statusEffectData: StatusEffectData;
    ObjectId: bigint;
};
declare function read$6(buf: Buffer): PKTStatusEffectAddNotify;
declare const name$6 = "PKTStatusEffectAddNotify";
declare const opcode$6 = 23393;

type PKTStatusEffectRemoveNotify = {
    Reason: number;
    ObjectId: bigint;
    statusEffectIds: number[];
};
declare function read$5(buf: Buffer): PKTStatusEffectRemoveNotify;
declare const name$5 = "PKTStatusEffectRemoveNotify";
declare const opcode$5 = 47620;

type PKTStatusEffectSyncDataNotify = {
    CharacterId: bigint;
    Value: number;
    EffectInstanceId: number;
    ObjectId: bigint;
};
declare function read$4(buf: Buffer): PKTStatusEffectSyncDataNotify;
declare const name$4 = "PKTStatusEffectSyncDataNotify";
declare const opcode$4 = 43648;

type PKTTriggerBossBattleStatus = {
    Unk2_m: boolean;
    TriggerId: number;
    Step: number;
};
declare function read$3(buf: Buffer): PKTTriggerBossBattleStatus;
declare const name$3 = "PKTTriggerBossBattleStatus";
declare const opcode$3 = 50014;

type PKTTriggerFinishNotify = {
    PacketResultCode: number;
    InvolvedPCs: bigint[];
    TriggerId: number;
    Unk0_m: number;
};
declare function read$2(buf: Buffer): PKTTriggerFinishNotify;
declare const name$2 = "PKTTriggerFinishNotify";
declare const opcode$2 = 44444;

type PKTTriggerStartNotify = {
    InvolvedPCs: bigint[];
    TriggerSignalType: number;
    SourceId: bigint;
    TriggerId: number;
};
declare function read$1(buf: Buffer): PKTTriggerStartNotify;
declare const name$1 = "PKTTriggerStartNotify";
declare const opcode$1 = 53998;

type PKTTroopMemberUpdateMinNotify = {
    Unk0_m: number;
    CurHp: bigint;
    CharacterId: bigint;
    statusEffectDatas: StatusEffectData[];
    MaxHp: bigint;
    Position: bigint;
};
declare function read(buf: Buffer): PKTTroopMemberUpdateMinNotify;
declare const name = "PKTTroopMemberUpdateMinNotify";
declare const opcode = 27115;

export { opcode$q as $, PKTRemoveObject as A, PKTSkillDamageAbnormalMoveNotify as B, PKTSkillDamageNotify as C, PKTSkillStageNotify as D, PKTSkillStartNotify as E, PKTStatChangeOriginNotify as F, PKTStatusEffectAddNotify as G, PKTStatusEffectRemoveNotify as H, PKTStatusEffectSyncDataNotify as I, PKTTriggerBossBattleStatus as J, PKTTriggerFinishNotify as K, PKTTriggerStartNotify as L, PKTTroopMemberUpdateMinNotify as M, opcode$D as N, opcode$C as O, PKTAbilityChangeNotify as P, opcode$B as Q, opcode$A as R, opcode$z as S, opcode$y as T, opcode$x as U, opcode$w as V, opcode$v as W, opcode$u as X, opcode$t as Y, opcode$s as Z, opcode$r as _, PKTActiveAbilityNotify as a, name$2 as a$, opcode$p as a0, opcode$o as a1, opcode$n as a2, opcode$m as a3, opcode$l as a4, opcode$k as a5, opcode$j as a6, opcode$i as a7, opcode$h as a8, opcode$g as a9, name$t as aA, name$s as aB, name$r as aC, name$q as aD, name$p as aE, name$o as aF, name$n as aG, name$m as aH, name$l as aI, name$k as aJ, name$j as aK, name$i as aL, name$h as aM, name$g as aN, name$f as aO, name$e as aP, name$d as aQ, name$c as aR, name$b as aS, name$a as aT, name$9 as aU, name$8 as aV, name$7 as aW, name$6 as aX, name$5 as aY, name$4 as aZ, name$3 as a_, opcode$f as aa, opcode$e as ab, opcode$d as ac, opcode$c as ad, opcode$b as ae, opcode$a as af, opcode$9 as ag, opcode$8 as ah, opcode$7 as ai, opcode$6 as aj, opcode$5 as ak, opcode$4 as al, opcode$3 as am, opcode$2 as an, opcode$1 as ao, opcode as ap, name$D as aq, name$C as ar, name$B as as, name$A as at, name$z as au, name$y as av, name$x as aw, name$w as ax, name$v as ay, name$u as az, PKTAddonSkillFeatureChangeNotify as b, name$1 as b0, name as b1, read$D as b2, read$C as b3, read$B as b4, read$A as b5, read$z as b6, read$y as b7, read$x as b8, read$w as b9, read$5 as bA, read$4 as bB, read$3 as bC, read$2 as bD, read$1 as bE, read as bF, read$v as ba, read$u as bb, read$t as bc, read$s as bd, read$r as be, read$q as bf, read$p as bg, read$o as bh, read$n as bi, read$m as bj, read$l as bk, read$k as bl, read$j as bm, read$i as bn, read$h as bo, read$g as bp, read$f as bq, read$e as br, read$d as bs, read$c as bt, read$b as bu, read$a as bv, read$9 as bw, read$8 as bx, read$7 as by, read$6 as bz, PKTAuthTokenResult as c, PKTBlockSkillStateNotify as d, PKTCounterAttackNotify as e, PKTDeathNotify as f, PKTInitAbility as g, PKTInitEnv as h, PKTInitPC as i, PKTInitLocal as j, PKTNewNpc as k, PKTNewNpcSummon as l, PKTNewPC as m, PKTNewProjectile as n, PKTParalyzationStateNotify as o, PKTPartyInfo as p, PKTPartyLeaveResult as q, PKTPartyPassiveStatusEffectAddNotify as r, PKTPartyPassiveStatusEffectRemoveNotify as s, PKTPartyStatusEffectAddNotify as t, PKTPartyStatusEffectRemoveNotify as u, PKTPartyStatusEffectResultNotify as v, PKTPassiveStatusEffectAddNotify as w, PKTPassiveStatusEffectRemoveNotify as x, PKTRaidBossKillNotify as y, PKTRaidResult as z };
