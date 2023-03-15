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
declare const opcode$D = 5787;

type ActiveAbility = {
    FeatureType: number;
    Level: number;
};

type PKTActiveAbilityNotify = {
    activeAbilityList: ActiveAbility[];
    ObjectId: bigint;
};
declare function read$C(buf: Buffer): PKTActiveAbilityNotify;
declare const name$C = "PKTActiveAbilityNotify";
declare const opcode$C = 39249;

type PKTAddonSkillFeatureChangeNotify = {
    struct_116: Buffer;
    addonSkillFeatureList: {
        SkillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    ObjectId: bigint;
};
declare function read$B(buf: Buffer): PKTAddonSkillFeatureChangeNotify;
declare const name$B = "PKTAddonSkillFeatureChangeNotify";
declare const opcode$B = 12299;

type PKTAuthTokenResult = {
    PacketResultCode: number;
    Unk1_m: Buffer;
};
declare function read$A(buf: Buffer): PKTAuthTokenResult;
declare const name$A = "PKTAuthTokenResult";
declare const opcode$A = 51457;

type PKTBlockSkillStateNotify = {
    Type: number;
    ParalyzationMaxPoint: number;
    ParalyzationPoint: number;
    ObjectId: bigint;
};
declare function read$z(buf: Buffer): PKTBlockSkillStateNotify;
declare const name$z = "PKTBlockSkillStateNotify";
declare const opcode$z = 5952;

type PKTCounterAttackNotify = {
    SourceId: bigint;
    TargetId: bigint;
    Type: number;
};
declare function read$y(buf: Buffer): PKTCounterAttackNotify;
declare const name$y = "PKTCounterAttackNotify";
declare const opcode$y = 17998;

type PKTDeathNotify = {
    Unk0_0?: number;
    Unk1: number;
    Unk2: number;
    Unk3: bigint;
    SourceId: bigint;
    Unk5: number;
    Unk6_0?: number;
    Unk7: number;
    Unk8_0?: number;
    TargetId: bigint;
};
declare function read$x(buf: Buffer): PKTDeathNotify;
declare const name$x = "PKTDeathNotify";
declare const opcode$x = 30293;

type PKTInitAbility = {
    abilityDataList: AbilityData[];
    struct_122: Buffer;
};
declare function read$w(buf: Buffer): PKTInitAbility;
declare const name$w = "PKTInitAbility";
declare const opcode$w = 19004;

type LostArkDateTime = Date;

type PKTInitEnv = {
    Unk0: number;
    Unk1: number;
    struct_23: {
        struct_541: string;
        struct_528: string;
        versionString: string;
    }[];
    lostArkDateTime: LostArkDateTime;
    struct_541: string;
    PlayerId: bigint;
    Unk6: bigint;
    Unk7: number;
};
declare function read$v(buf: Buffer): PKTInitEnv;
declare const name$v = "PKTInitEnv";
declare const opcode$v = 8280;

type StatusEffectData = {
    StatusEffectId: number;
    struct_425: Buffer;
    Unk2: number;
    InstanceId: bigint;
    SourceId: bigint;
    EffectInstanceId: number;
    Value?: Buffer;
    SkillLevel: number;
    Unk8_0?: bigint;
    lostArkDateTime: LostArkDateTime;
    Unk10: number;
};

type Struct_676 = {
    Unk0: bigint;
    Unk1: number;
    Unk2: number;
    Unk3: bigint;
    Unk4: number;
    Unk5: number;
    Unk6: bigint;
};

type PKTInitPC = {
    Unk0: number;
    Unk1: number;
    Unk2: number;
    ClassId: number;
    Unk4: number;
    Unk5: Buffer;
    Unk6: number;
    Unk7: number;
    Unk8: number;
    Unk9: number;
    Unk10: number;
    Unk11: bigint;
    Unk12: number;
    Unk13: number;
    Unk14: Buffer;
    GearLevel: number;
    Unk16: number;
    struct_321: Buffer;
    Unk18: number;
    struct_347: string;
    Unk20: number;
    Unk21: Buffer;
    PlayerId: bigint;
    statusEffectDatas: StatusEffectData[];
    struct_89: Buffer;
    CharacterId: bigint;
    Unk26: number;
    Unk27: bigint;
    Unk28: number;
    Unk29: bigint;
    struct_215: Buffer;
    Unk31: number;
    Unk32: number;
    struct_370: Struct_676[];
    Unk34: number;
    Unk35: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk37: number;
    Unk38: bigint;
    Level: number;
    Unk40: number;
    Unk41: number;
    Unk42: number;
    Unk43: number;
    Unk44: number;
    Unk45: number;
    Unk46: number;
    Name: string;
    Unk48: number;
    Unk49: number;
    Unk50: number;
    Unk51: number;
    Unk52_0?: number;
    Unk53: number;
    Unk54: number;
    Unk55: number;
    Unk56: number;
};
declare function read$u(buf: Buffer): PKTInitPC;
declare const name$u = "PKTInitPC";
declare const opcode$u = 23879;

type Struct_693 = {
    Unk0_0?: Buffer;
    Unk1: number;
    Unk2: number;
    Unk3_0?: number;
    Unk4: number;
};

type PKTInitLocal = {
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    struct_116: Buffer;
    Unk2: number;
    statusEffectDatas: StatusEffectData[];
    abilityDataList: AbilityData[];
    Unk5: number;
    struct_321: Buffer;
    Unk7: bigint;
    struct_122: Buffer;
    Unk9: number;
    Unk10: bigint;
    struct_215: Buffer;
    Unk12: number;
    addonSkillFeatureList: {
        SkillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    Unk14_0?: number;
    struct_403: Struct_693[];
};
declare function read$t(buf: Buffer): PKTInitLocal;
declare const name$t = "PKTInitLocal";
declare const opcode$t = 48300;

type Struct_637 = {
    Unk0: number;
    Unk1: number;
    Unk2: number;
    struct_430: Buffer;
    lostArkDateTime: LostArkDateTime;
    Unk5_0?: number;
};

type Struct_673 = {
    struct_296: Struct_637[];
    lostArkString: string;
    struct_82: Buffer;
    Unk3: number;
    Unk4: number;
    Unk5: number;
    Unk6: number;
    Unk7: bigint;
};

type Angle = number;

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type NpcData = {
    Unk0_0?: number;
    Unk1: number;
    Unk2: number;
    Unk3: number;
    struct_251?: Buffer;
    SpawnIndex: number;
    struct_316?: Buffer;
    Unk7_0?: number;
    TransitIndex?: number;
    TypeId: number;
    Unk10_0?: number;
    Unk11_0?: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk13_0?: number;
    DirectionYaw: Angle;
    Unk15_0?: number;
    Unk16_0?: bigint;
    Unk17: number;
    Unk18: number;
    Unk19_0?: number;
    struct_673?: Struct_673;
    Unk21_0?: number;
    ObjectId: bigint;
    Unk23_0?: number;
    Unk24: number;
    struct_370: Struct_676[];
    Unk26_0?: number;
    Unk27: number;
    statusEffectDatas: StatusEffectData[];
    Position: Vector3F;
    Unk30_0?: number;
    Unk31_0?: number;
    Unk32_0?: number;
};

type PKTNewNpc = {
    Unk0: number;
    Unk0_0?: string;
    Unk0_1?: string;
    NpcStruct: NpcData;
    Unk3_0?: bigint;
    Unk4_0?: number;
};
declare function read$s(buf: Buffer): PKTNewNpc;
declare const name$s = "PKTNewNpc";
declare const opcode$s = 9084;

type PKTNewNpcSummon = {
    OwnerId: bigint;
    NpcData: NpcData;
    PublishReason: number;
};
declare function read$r(buf: Buffer): PKTNewNpcSummon;
declare const name$r = "PKTNewNpcSummon";
declare const opcode$r = 20589;

type PCStruct = {
    Unk0: number;
    addonSkillFeatureList: {
        SkillId: number;
        addonSkillFeatureIdList: number[];
    }[];
    Unk2: number;
    Unk3: number;
    Unk4: number;
    Unk5: number;
    Unk6: number;
    struct_296: Struct_637[];
    Unk8: number;
    ClassId: number;
    Unk10: number;
    Name: string;
    Unk12: number;
    Unk13: number;
    PlayerId: bigint;
    CharacterId: bigint;
    Level: number;
    Unk17: Buffer;
    Unk18: number;
    Unk19: Buffer;
    Unk20: bigint;
    Unk21: number;
    Heading: Angle;
    Unk23: number;
    Unk24: number;
    Unk25: number;
    statusEffectDatas: StatusEffectData[];
    struct_82: Buffer;
    struct_370: Struct_676[];
    Unk29_0?: Buffer;
    Unk30: number;
    Unk5_m: number;
    struct_295: Struct_637[];
    Unk33: number;
    Unk34: string;
    Unk35: number;
    GearLevel: number;
    Unk37: number;
    Unk38: number;
    Unk39: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Unk41: number;
    struct_116: Buffer;
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
    Unk0_m: number;
    Unk5_0_m?: Buffer;
    Unk3_0_m?: number;
    Unk4_0_m?: Buffer;
    PCStruct: PCStruct;
    TrackMoveInfo?: TrackMoveInfo;
    Unk2_m: number;
};
declare function read$q(buf: Buffer): PKTNewPC;
declare const name$q = "PKTNewPC";
declare const opcode$q = 42606;

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
    Unk0: number;
    Unk1: number;
    Unk2: bigint;
    struct_316?: Buffer;
    tripodLevel: TripodLevel;
    Unk5: number;
    Unk6: number;
    Unk7_0?: bigint;
    Unk8: number;
    tripodIndex: TripodIndex;
    OwnerId: bigint;
    SkillId: number;
    Unk12: bigint;
    Unk13_0?: number;
    ProjectileId: bigint;
    Unk15: number;
    Unk16: number;
    Unk17: bigint;
    Unk18: number;
    SkillEffect: number;
    SkillLevel: number;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};
declare function read$p(buf: Buffer): PKTNewProjectile;
declare const name$p = "PKTNewProjectile";
declare const opcode$p = 21277;

type PKTParalyzationStateNotify = {
    ObjectId: bigint;
    ParalyzationPoint: number;
    NoHitCheckTime: number;
    ParalyzationMaxPoint: number;
    DecreasePoint: number;
    Enable: boolean;
    HitCheckTime: number;
};
declare function read$o(buf: Buffer): PKTParalyzationStateNotify;
declare const name$o = "PKTParalyzationStateNotify";
declare const opcode$o = 39081;

type PartyMemberData = {
    Unk0: number;
    Unk1: number;
    Unk2: bigint;
    Unk3: number;
    Unk4: number;
    PartyMemberNumber: number;
    CharacterLevel: number;
    Name: string;
    Unk8: number;
    Unk9: number;
    Unk10: number;
    Unk11: bigint;
    Unk12: number;
    Unk13: bigint;
    CharacterId: bigint;
    Unk15: number;
    Unk16: number;
    Unk17: number;
    Unk18: number;
    Unk19: bigint;
};

type PKTPartyInfo = {
    MemberDatas: PartyMemberData[];
    LootGrade: number;
    PartyLootType: number;
    RaidInstanceId: number;
    PartyType: number;
    PartyInstanceId: number;
};
declare function read$n(buf: Buffer): PKTPartyInfo;
declare const name$n = "PKTPartyInfo";
declare const opcode$n = 39309;

type PKTPartyLeaveResult = {
    PartyLeaveType: number;
    Name: string;
    PartyInstanceId: number;
};
declare function read$m(buf: Buffer): PKTPartyLeaveResult;
declare const name$m = "PKTPartyLeaveResult";
declare const opcode$m = 26884;

type PKTPartyPassiveStatusEffectAddNotify = {
    Unk0_m: number;
    ObjectId: bigint;
    passiveStatusEffectList: number[];
};
declare function read$l(buf: Buffer): PKTPartyPassiveStatusEffectAddNotify;
declare const name$l = "PKTPartyPassiveStatusEffectAddNotify";
declare const opcode$l = 50269;

type PKTPartyPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
    ObjectId: bigint;
};
declare function read$k(buf: Buffer): PKTPartyPassiveStatusEffectRemoveNotify;
declare const name$k = "PKTPartyPassiveStatusEffectRemoveNotify";
declare const opcode$k = 34295;

type PKTPartyStatusEffectAddNotify = {
    Unk0: number;
    PlayerIdOnRefresh: bigint;
    CharacterId: bigint;
    statusEffectDatas: StatusEffectData[];
    Unk4: bigint;
};
declare function read$j(buf: Buffer): PKTPartyStatusEffectAddNotify;
declare const name$j = "PKTPartyStatusEffectAddNotify";
declare const opcode$j = 19066;

type PKTPartyStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    Unk1: bigint;
    CharacterId: bigint;
    Unk3: number;
};
declare function read$i(buf: Buffer): PKTPartyStatusEffectRemoveNotify;
declare const name$i = "PKTPartyStatusEffectRemoveNotify";
declare const opcode$i = 39897;

type PKTPartyStatusEffectResultNotify = {
    RaidInstanceId: number;
    PartyInstanceId: number;
    CharacterId: bigint;
};
declare function read$h(buf: Buffer): PKTPartyStatusEffectResultNotify;
declare const name$h = "PKTPartyStatusEffectResultNotify";
declare const opcode$h = 50964;

type PKTPassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};
declare function read$g(buf: Buffer): PKTPassiveStatusEffectAddNotify;
declare const name$g = "PKTPassiveStatusEffectAddNotify";
declare const opcode$g = 15589;

type PKTPassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};
declare function read$f(buf: Buffer): PKTPassiveStatusEffectRemoveNotify;
declare const name$f = "PKTPassiveStatusEffectRemoveNotify";
declare const opcode$f = 23148;

type PKTRaidBossKillNotify = {
    Unk0: Buffer;
};
declare function read$e(buf: Buffer): PKTRaidBossKillNotify;
declare const name$e = "PKTRaidBossKillNotify";
declare const opcode$e = 44655;

type PKTRaidResult = {
    Unk0: bigint;
    Unk1: bigint;
    Unk2: number;
    Unk3: bigint;
    Unk4: number;
    Unk5: bigint;
    Unk6: number;
    struct_41: {
        Unk0_0_0: number;
        struct_490: Buffer;
        Unk0_0_2: bigint;
        Unk0_0_3: bigint;
    }[];
};
declare function read$d(buf: Buffer): PKTRaidResult;
declare const name$d = "PKTRaidResult";
declare const opcode$d = 54224;

type UnpublishObject = {
    ObjectId: bigint;
    UnpublishReason: number;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};
declare function read$c(buf: Buffer): PKTRemoveObject;
declare const name$c = "PKTRemoveObject";
declare const opcode$c = 47607;

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
    DamageAttr?: number;
    MaxHp: bigint;
    Damage: bigint;
    Unk3_m: number;
    Modifier: number;
    TargetId: bigint;
    CurHp: bigint;
    DamageType: number;
};

type SkillDamageAbnormalMoveEvent = {
    SkillMoveOptionData: SkillMoveOptionData;
    Unk4_m: number;
    Destination: Vector3F;
    Unk8_m: number;
    Unk3_m: number;
    Unk1_m: number;
    Unk2_m: bigint;
    Position: Vector3F;
    skillDamageEvent: SkillDamageEvent;
};

type PKTSkillDamageAbnormalMoveNotify = {
    SkillEffectId: number;
    Unk2_m: number;
    SkillId: number;
    Unk1_m: number;
    SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    SourceId: bigint;
};
declare function read$b(buf: Buffer): PKTSkillDamageAbnormalMoveNotify;
declare const name$b = "PKTSkillDamageAbnormalMoveNotify";
declare const opcode$b = 43771;

type PKTSkillDamageNotify = {
    SourceId: bigint;
    SkillDamageEvents: SkillDamageEvent[];
    SkillEffectId: number;
    SkillId: number;
    SkillLevel: number;
};
declare function read$a(buf: Buffer): PKTSkillDamageNotify;
declare const name$a = "PKTSkillDamageNotify";
declare const opcode$a = 17502;

type PKTSkillStageNotify = {
    SourceId: bigint;
    SkillId: number;
    Stage: number;
};
declare function read$9(buf: Buffer): PKTSkillStageNotify;
declare const name$9 = "PKTSkillStageNotify";
declare const opcode$9 = 29272;

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
    Unk1_m?: number;
    AiStateId?: number;
    SkillOptionData: SkillOptionData;
    AimTargetPosition: Vector3F;
    NewDirectionYaw: Angle;
    SkillId: number;
    NewPosition: Vector3F;
    CurPosition: Vector3F;
    SkillLevel: number;
    PitchRotation?: Angle;
};
declare function read$8(buf: Buffer): PKTSkillStartNotify;
declare const name$8 = "PKTSkillStartNotify";
declare const opcode$8 = 37729;

type PKTStatChangeOriginNotify = {
    StatPairList: {
        StatType: number;
        Value: bigint;
    }[];
    Unk1: number;
    Unk2_0?: number;
    ObjectId: bigint;
    Unk4: {
        StatType: number;
        Value: bigint;
    }[];
};
declare function read$7(buf: Buffer): PKTStatChangeOriginNotify;
declare const name$7 = "PKTStatChangeOriginNotify";
declare const opcode$7 = 19960;

type PKTStatusEffectAddNotify = {
    statusEffectData: StatusEffectData;
    ObjectId: bigint;
    Unk2_0?: bigint;
    Unk3: bigint;
    New: boolean;
};
declare function read$6(buf: Buffer): PKTStatusEffectAddNotify;
declare const name$6 = "PKTStatusEffectAddNotify";
declare const opcode$6 = 22838;

type PKTStatusEffectRemoveNotify = {
    Reason: number;
    statusEffectIds: number[];
    ObjectId: bigint;
};
declare function read$5(buf: Buffer): PKTStatusEffectRemoveNotify;
declare const name$5 = "PKTStatusEffectRemoveNotify";
declare const opcode$5 = 22139;

type PKTStatusEffectSyncDataNotify = {
    CharacterId: bigint;
    Value: number;
    EffectInstanceId: number;
    ObjectId: bigint;
};
declare function read$4(buf: Buffer): PKTStatusEffectSyncDataNotify;
declare const name$4 = "PKTStatusEffectSyncDataNotify";
declare const opcode$4 = 38506;

type PKTTriggerBossBattleStatus = {
    TriggerId: number;
    Unk2_m: boolean;
    Step: number;
};
declare function read$3(buf: Buffer): PKTTriggerBossBattleStatus;
declare const name$3 = "PKTTriggerBossBattleStatus";
declare const opcode$3 = 42951;

type PKTTriggerFinishNotify = {
    PacketResultCode: number;
    TriggerId: number;
    InvolvedPCs: bigint[];
    Unk0_m: number;
};
declare function read$2(buf: Buffer): PKTTriggerFinishNotify;
declare const name$2 = "PKTTriggerFinishNotify";
declare const opcode$2 = 31636;

type PKTTriggerStartNotify = {
    TriggerId: number;
    SourceId: bigint;
    TriggerSignalType: number;
    InvolvedPCs: bigint[];
};
declare function read$1(buf: Buffer): PKTTriggerStartNotify;
declare const name$1 = "PKTTriggerStartNotify";
declare const opcode$1 = 59762;

type PKTTroopMemberUpdateMinNotify = {
    statusEffectDatas: StatusEffectData[];
    MaxHp: bigint;
    CurHp: bigint;
    CharacterId: bigint;
    Unk0_m: number;
    Position: bigint;
};
declare function read(buf: Buffer): PKTTroopMemberUpdateMinNotify;
declare const name = "PKTTroopMemberUpdateMinNotify";
declare const opcode = 927;

export { opcode$q as $, PKTRemoveObject as A, PKTSkillDamageAbnormalMoveNotify as B, PKTSkillDamageNotify as C, PKTSkillStageNotify as D, PKTSkillStartNotify as E, PKTStatChangeOriginNotify as F, PKTStatusEffectAddNotify as G, PKTStatusEffectRemoveNotify as H, PKTStatusEffectSyncDataNotify as I, PKTTriggerBossBattleStatus as J, PKTTriggerFinishNotify as K, PKTTriggerStartNotify as L, PKTTroopMemberUpdateMinNotify as M, opcode$D as N, opcode$C as O, PKTAbilityChangeNotify as P, opcode$B as Q, opcode$A as R, opcode$z as S, opcode$y as T, opcode$x as U, opcode$w as V, opcode$v as W, opcode$u as X, opcode$t as Y, opcode$s as Z, opcode$r as _, PKTActiveAbilityNotify as a, name$2 as a$, opcode$p as a0, opcode$o as a1, opcode$n as a2, opcode$m as a3, opcode$l as a4, opcode$k as a5, opcode$j as a6, opcode$i as a7, opcode$h as a8, opcode$g as a9, name$t as aA, name$s as aB, name$r as aC, name$q as aD, name$p as aE, name$o as aF, name$n as aG, name$m as aH, name$l as aI, name$k as aJ, name$j as aK, name$i as aL, name$h as aM, name$g as aN, name$f as aO, name$e as aP, name$d as aQ, name$c as aR, name$b as aS, name$a as aT, name$9 as aU, name$8 as aV, name$7 as aW, name$6 as aX, name$5 as aY, name$4 as aZ, name$3 as a_, opcode$f as aa, opcode$e as ab, opcode$d as ac, opcode$c as ad, opcode$b as ae, opcode$a as af, opcode$9 as ag, opcode$8 as ah, opcode$7 as ai, opcode$6 as aj, opcode$5 as ak, opcode$4 as al, opcode$3 as am, opcode$2 as an, opcode$1 as ao, opcode as ap, name$D as aq, name$C as ar, name$B as as, name$A as at, name$z as au, name$y as av, name$x as aw, name$w as ax, name$v as ay, name$u as az, PKTAddonSkillFeatureChangeNotify as b, name$1 as b0, name as b1, read$D as b2, read$C as b3, read$B as b4, read$A as b5, read$z as b6, read$y as b7, read$x as b8, read$w as b9, read$5 as bA, read$4 as bB, read$3 as bC, read$2 as bD, read$1 as bE, read as bF, read$v as ba, read$u as bb, read$t as bc, read$s as bd, read$r as be, read$q as bf, read$p as bg, read$o as bh, read$n as bi, read$m as bj, read$l as bk, read$k as bl, read$j as bm, read$i as bn, read$h as bo, read$g as bp, read$f as bq, read$e as br, read$d as bs, read$c as bt, read$b as bu, read$a as bv, read$9 as bw, read$8 as bx, read$7 as by, read$6 as bz, PKTAuthTokenResult as c, PKTBlockSkillStateNotify as d, PKTCounterAttackNotify as e, PKTDeathNotify as f, PKTInitAbility as g, PKTInitEnv as h, PKTInitPC as i, PKTInitLocal as j, PKTNewNpc as k, PKTNewNpcSummon as l, PKTNewPC as m, PKTNewProjectile as n, PKTParalyzationStateNotify as o, PKTPartyInfo as p, PKTPartyLeaveResult as q, PKTPartyPassiveStatusEffectAddNotify as r, PKTPartyPassiveStatusEffectRemoveNotify as s, PKTPartyStatusEffectAddNotify as t, PKTPartyStatusEffectRemoveNotify as u, PKTPartyStatusEffectResultNotify as v, PKTPassiveStatusEffectAddNotify as w, PKTPassiveStatusEffectRemoveNotify as x, PKTRaidBossKillNotify as y, PKTRaidResult as z };
