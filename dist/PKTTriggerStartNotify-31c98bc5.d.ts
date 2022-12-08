type PKTAuthTokenResult = {
    PacketResultCode: number;
    Unk1_m: Buffer;
};
declare function read$s(buf: Buffer): PKTAuthTokenResult;
declare const name$s = "PKTAuthTokenResult";
declare const opcode$s = 44294;

type PKTCounterAttackNotify = {
    TargetId: bigint;
    Type: number;
    SourceId: bigint;
};
declare function read$r(buf: Buffer): PKTCounterAttackNotify;
declare const name$r = "PKTCounterAttackNotify";
declare const opcode$r = 23544;

type PKTDeathNotify = {
    Unk0: number;
    SourceId: bigint;
    Unk2_0?: number;
    Unk3: number;
    Unk4_0?: number;
    TargetId: bigint;
    Unk6: bigint;
    Unk7: number;
    Unk8_0?: number;
};
declare function read$q(buf: Buffer): PKTDeathNotify;
declare const name$q = "PKTDeathNotify";
declare const opcode$q = 21940;

type LostArkDateTime = Date;

type PKTInitEnv = {
    Unk0: number;
    PlayerId: bigint;
    lostArkDateTime: LostArkDateTime;
    Unk3: number;
    Unk4: number;
    Unk5: bigint;
    struct_544: string;
    struct_26: {
        struct_544: string;
        versionString: string;
        struct_531: string;
    }[];
};
declare function read$p(buf: Buffer): PKTInitEnv;
declare const name$p = "PKTInitEnv";
declare const opcode$p = 12201;

type StatusEffectData = {
    SourceId: bigint;
    Unk1: number;
    Unk2: number;
    lostArkDateTime: LostArkDateTime;
    SkillLevel: number;
    StatusEffectId: number;
    struct_422: Buffer;
    InstanceId: bigint;
    Value?: Buffer;
    Unk9_0?: bigint;
    EffectInstanceId: number;
};

type Struct_678 = {
    Unk0: bigint;
    Unk1: bigint;
    Unk2: number;
    Unk3: number;
    Unk4: bigint;
    Unk5: number;
    Unk6: number;
};

type PKTInitPC = {
    Unk0: Buffer;
    Unk1: number;
    Unk2: number;
    ClassId: number;
    Unk4: bigint;
    Unk5: number;
    Unk6: number;
    Unk7: number;
    Unk8: number;
    Level: number;
    statPair: {
        readNBytesInt64: bigint;
        Unk0_0_1: number;
    }[];
    Unk11: number;
    Unk12: number;
    Unk13: number;
    Unk14: number;
    Unk15: number;
    statusEffectDatas: StatusEffectData[];
    Unk17: number;
    struct_325: Buffer;
    Unk19: bigint;
    Unk20: number;
    Unk21: number;
    Unk22: number;
    Unk23: number;
    Unk24: number;
    Unk25: number;
    Unk26: number;
    Unk27: number;
    PlayerId: bigint;
    Unk29: number;
    Name: string;
    Unk31: number;
    Unk32: number;
    Unk33: number;
    struct_373: Struct_678[];
    Unk35: number;
    Unk36_0?: number;
    Unk37: number;
    Unk38: number;
    Unk39: bigint;
    CharacterId: bigint;
    struct_320: string;
    Unk42: number;
    Unk43: number;
    Unk44: number;
    struct_219: Buffer;
    Unk46: bigint;
    Unk47: number;
    Unk48: number;
    Unk49: number;
    GearLevel: number;
    Unk51: number;
    struct_92: Buffer;
    Unk53: Buffer;
    Unk54: number;
    Unk55: number;
    Unk56: number;
};
declare function read$o(buf: Buffer): PKTInitPC;
declare const name$o = "PKTInitPC";
declare const opcode$o = 44217;

type Struct_637 = {
    Unk0: number;
    Unk1: number;
    Unk2: number;
    lostArkDateTime: LostArkDateTime;
    Unk4_0?: number;
    struct_429: Buffer;
};

type Struct_675 = {
    Unk0: number;
    Unk1: number;
    Unk2: bigint;
    struct_85: Buffer;
    lostArkString: string;
    struct_301: Struct_637[];
    Unk6: number;
    Unk7: number;
};

type Vector3F = {
    x?: number;
    y?: number;
    z?: number;
};

type Angle = number;

type NpcData = {
    struct_675?: Struct_675;
    TransitIndex?: number;
    Unk2: number;
    struct_321?: Buffer;
    ObjectId: bigint;
    SpawnIndex: number;
    statusEffectDatas: StatusEffectData[];
    Unk7: number;
    Position: Vector3F;
    Unk9_0?: number;
    Unk10: number;
    Unk11_0?: number;
    struct_255?: Buffer;
    Unk13: number;
    Unk14: number;
    TypeId: number;
    Unk16_0?: number;
    Unk17_0?: number;
    DirectionYaw: Angle;
    Unk19_0?: number;
    Unk20_0?: number;
    Unk21_0?: number;
    Unk22: number;
    Unk23_0?: number;
    statPair: {
        readNBytesInt64: bigint;
        Unk0_0_1: number;
    }[];
    Unk25_0?: bigint;
    Unk26_0?: number;
    Unk27_0?: number;
    Unk28: number;
    Unk29_0?: number;
    Unk30_0?: number;
    struct_373: Struct_678[];
    Unk32_0?: number;
};

type PKTNewNpc = {
    Unk0_0?: number;
    Unk1_0?: bigint;
    NpcStruct: NpcData;
    Unk3: number;
};
declare function read$n(buf: Buffer): PKTNewNpc;
declare const name$n = "PKTNewNpc";
declare const opcode$n = 31638;

type PKTNewNpcSummon = {
    PublishReason: number;
    OwnerId: bigint;
    NpcData: NpcData;
};
declare function read$m(buf: Buffer): PKTNewNpcSummon;
declare const name$m = "PKTNewNpcSummon";
declare const opcode$m = 57156;

type TrackMoveInfo = {
    Unk0: number;
    Unk1: number;
    Unk2: Buffer;
    Unk3_0?: Buffer;
};

type PCStruct = {
    Unk0: string;
    Unk1: number;
    Unk2: number;
    Unk3: number;
    Unk5_m: number;
    Unk5_0?: Buffer;
    Unk6: number;
    struct_373: Struct_678[];
    struct_301: Struct_637[];
    Unk9: number;
    Unk10: number;
    GearLevel: number;
    struct_3: {
        struct_102: Buffer;
        Unk0_0_1: number;
    }[];
    Unk13: number;
    Unk14: number;
    Unk15: number;
    Unk16: number;
    Unk17: number;
    Level: number;
    struct_85: Buffer;
    Unk20: number;
    Unk21: number;
    Unk22: number;
    Heading: Angle;
    Unk24: bigint;
    Unk25: number;
    CharacterId: bigint;
    struct_300: Struct_637[];
    Unk28: number;
    Unk29: number;
    struct_118: Buffer;
    ClassId: number;
    Unk32: number;
    Unk33: Buffer;
    Name: string;
    Unk35: number;
    Unk36: number;
    statPair: {
        readNBytesInt64: bigint;
        Unk0_0_1: number;
    }[];
    Unk38: Buffer;
    Unk39: number;
    Unk40: number;
    Unk41: number;
    statusEffectDatas: StatusEffectData[];
    PlayerId: bigint;
};

type PKTNewPC = {
    TrackMoveInfo?: TrackMoveInfo;
    Unk5_0_m?: Buffer;
    Unk2_m: number;
    Unk3_0_m?: number;
    Unk0_m: number;
    Unk4_0_m?: Buffer;
    PCStruct: PCStruct;
};
declare function read$l(buf: Buffer): PKTNewPC;
declare const name$l = "PKTNewPC";
declare const opcode$l = 13099;

type ProjectileInfo = {
    Unk0: number;
    ProjectileId: bigint;
    Unk2: number;
    Unk3: number;
    Unk4_0?: number;
    struct_321?: Buffer;
    Unk6: number;
    Unk7: number;
    SkillEffect: number;
    Tripods: Buffer;
    Unk10: bigint;
    Unk11: number;
    SkillLevel: number;
    Unk13: Buffer;
    Unk14: bigint;
    Unk15: number;
    Unk16: number;
    Unk17_0?: bigint;
    Unk18: bigint;
    SkillId: number;
    OwnerId: bigint;
};

type PKTNewProjectile = {
    projectileInfo: ProjectileInfo;
};
declare function read$k(buf: Buffer): PKTNewProjectile;
declare const name$k = "PKTNewProjectile";
declare const opcode$k = 1296;

type PKTParalyzationStateNotify = {
    Unk0: Buffer;
};
declare function read$j(buf: Buffer): PKTParalyzationStateNotify;
declare const name$j = "PKTParalyzationStateNotify";
declare const opcode$j = 1696;

type PartyMemberData = {
    CharacterLevel: number;
    Unk1: number;
    Unk2: bigint;
    Unk3: number;
    Unk4: number;
    Unk5: number;
    Unk6: bigint;
    Name: string;
    PartyMemberNumber: number;
    Unk9: bigint;
    Unk10: bigint;
    CharacterId: bigint;
    Unk12: number;
    Unk13: number;
    Unk14: number;
    Unk15: number;
    Unk16: number;
    Unk17: number;
    Unk18: number;
    Unk19: number;
};

type PKTPartyInfo = {
    PartyInstanceId: number;
    MemberDatas: PartyMemberData[];
    PartyType: number;
    RaidInstanceId: number;
    LootGrade: number;
    PartyLootType: number;
};
declare function read$i(buf: Buffer): PKTPartyInfo;
declare const name$i = "PKTPartyInfo";
declare const opcode$i = 20135;

type PKTPartyLeaveResult = {
    PartyInstanceId: number;
    Name: string;
    PartyLeaveType: number;
};
declare function read$h(buf: Buffer): PKTPartyLeaveResult;
declare const name$h = "PKTPartyLeaveResult";
declare const opcode$h = 12275;

type PKTPartyStatusEffectAddNotify = {
    statusEffectDatas: StatusEffectData[];
    PlayerIdOnRefresh: bigint;
    CharacterId: bigint;
    Unk3: bigint;
    Unk4: number;
};
declare function read$g(buf: Buffer): PKTPartyStatusEffectAddNotify;
declare const name$g = "PKTPartyStatusEffectAddNotify";
declare const opcode$g = 8895;

type PKTPartyStatusEffectRemoveNotify = {
    Unk0: bigint;
    Unk1: number;
    CharacterId: bigint;
    statusEffectIds: number[];
};
declare function read$f(buf: Buffer): PKTPartyStatusEffectRemoveNotify;
declare const name$f = "PKTPartyStatusEffectRemoveNotify";
declare const opcode$f = 13843;

type PKTPartyStatusEffectResultNotify = {
    CharacterId: bigint;
    RaidInstanceId: number;
    PartyInstanceId: number;
};
declare function read$e(buf: Buffer): PKTPartyStatusEffectResultNotify;
declare const name$e = "PKTPartyStatusEffectResultNotify";
declare const opcode$e = 601;

type PKTRaidBossKillNotify = {
    Unk0: Buffer;
};
declare function read$d(buf: Buffer): PKTRaidBossKillNotify;
declare const name$d = "PKTRaidBossKillNotify";
declare const opcode$d = 20140;

type PKTRaidResult = {
    Unk0: number;
    Unk1: bigint;
    Unk2: number;
    Unk3: bigint;
    Unk4: number;
    struct_44: {
        struct_493: Buffer;
        Unk0_0_1: bigint;
        Unk0_0_2: number;
        Unk0_0_3: bigint;
    }[];
    Unk6: bigint;
    Unk7: bigint;
};
declare function read$c(buf: Buffer): PKTRaidResult;
declare const name$c = "PKTRaidResult";
declare const opcode$c = 17609;

type UnpublishObject = {
    UnpublishReason: number;
    ObjectId: bigint;
};

type PKTRemoveObject = {
    unpublishedObjects: UnpublishObject[];
};
declare function read$b(buf: Buffer): PKTRemoveObject;
declare const name$b = "PKTRemoveObject";
declare const opcode$b = 39958;

type ReadFlagBytes2 = {
    flag1?: number;
    flag2?: number;
    flag4?: number;
    flag8?: number;
    flag10?: number;
    flag20?: number;
    flag40?: Buffer;
};

type SkillDamageEvent = {
    CurHp: bigint;
    TargetId: bigint;
    MaxHp: bigint;
    DamageAttr?: number;
    DamageType: number;
    Unk3_m: number;
    Modifier: number;
    Damage: bigint;
};

type SkillDamageAbnormalMoveEvent = {
    Unk0_m: ReadFlagBytes2;
    Unk8_m: number;
    Unk2_m: bigint;
    Destination: Vector3F;
    Unk4_m: number;
    skillDamageEvent: SkillDamageEvent;
    Position: Vector3F;
    Unk3_m: number;
    Unk1_m: number;
};

type PKTSkillDamageAbnormalMoveNotify = {
    Unk2_m: number;
    SourceId: bigint;
    Unk1_m: number;
    SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEvent[];
    SkillEffectId: number;
    SkillId: number;
};
declare function read$a(buf: Buffer): PKTSkillDamageAbnormalMoveNotify;
declare const name$a = "PKTSkillDamageAbnormalMoveNotify";
declare const opcode$a = 29416;

type PKTSkillDamageNotify = {
    SkillDamageEvents: SkillDamageEvent[];
    SkillId: number;
    SourceId: bigint;
    SkillLevel: number;
    SkillEffectId: number;
};
declare function read$9(buf: Buffer): PKTSkillDamageNotify;
declare const name$9 = "PKTSkillDamageNotify";
declare const opcode$9 = 1847;

type PKTSkillStageNotify = {
    SourceId: bigint;
    Stage: number;
    SkillId: number;
};
declare function read$8(buf: Buffer): PKTSkillStageNotify;
declare const name$8 = "PKTSkillStageNotify";
declare const opcode$8 = 6028;

type ReadFlagBytes = {
    flag1?: number;
    flag2?: number;
    flag4?: number;
    flag8?: number;
    flag10?: number;
    flag20?: Buffer;
    flag40?: Buffer;
};

type PKTSkillStartNotify = {
    AimTargetPosition: Vector3F;
    CurPosition: Vector3F;
    CurDirectionYaw: Angle;
    PitchRotation?: Angle;
    SkillId: number;
    NewPosition: Vector3F;
    SourceId: bigint;
    Unk1_m?: number;
    SkillOptionData: ReadFlagBytes;
    AiStateId?: number;
    SkillLevel: number;
    NewDirectionYaw: Angle;
};
declare function read$7(buf: Buffer): PKTSkillStartNotify;
declare const name$7 = "PKTSkillStartNotify";
declare const opcode$7 = 45202;

type PKTStatChangeOriginNotify = {
    StatPairList: {
        readNBytesInt64: bigint;
        Unk0_0_1: number;
    }[];
    Unk1: {
        readNBytesInt64: bigint;
        Unk0_0_1: number;
    }[];
    Unk2: number;
    Unk3_0?: number;
    ObjectId: bigint;
};
declare function read$6(buf: Buffer): PKTStatChangeOriginNotify;
declare const name$6 = "PKTStatChangeOriginNotify";
declare const opcode$6 = 36460;

type PKTStatusEffectAddNotify = {
    ObjectId: bigint;
    Unk1_0?: bigint;
    statusEffectData: StatusEffectData;
    Unk3: bigint;
    New: boolean;
};
declare function read$5(buf: Buffer): PKTStatusEffectAddNotify;
declare const name$5 = "PKTStatusEffectAddNotify";
declare const opcode$5 = 4713;

type PKTStatusEffectRemoveNotify = {
    statusEffectIds: number[];
    Reason: number;
    ObjectId: bigint;
};
declare function read$4(buf: Buffer): PKTStatusEffectRemoveNotify;
declare const name$4 = "PKTStatusEffectRemoveNotify";
declare const opcode$4 = 55030;

type PKTStatusEffectSyncDataNotify = {
    ObjectId: bigint;
    EffectInstanceId: number;
    Value: number;
    CharacterId: bigint;
};
declare function read$3(buf: Buffer): PKTStatusEffectSyncDataNotify;
declare const name$3 = "PKTStatusEffectSyncDataNotify";
declare const opcode$3 = 35589;

type PKTTriggerBossBattleStatus = {
    Unk2_m: boolean;
    Step: number;
    TriggerId: number;
};
declare function read$2(buf: Buffer): PKTTriggerBossBattleStatus;
declare const name$2 = "PKTTriggerBossBattleStatus";
declare const opcode$2 = 35800;

type PKTTriggerFinishNotify = {
    TriggerId: number;
    PacketResultCode: number;
    Unk0_m: number;
    InvolvedPCs: bigint[];
};
declare function read$1(buf: Buffer): PKTTriggerFinishNotify;
declare const name$1 = "PKTTriggerFinishNotify";
declare const opcode$1 = 53300;

type PKTTriggerStartNotify = {
    TriggerId: number;
    InvolvedPCs: bigint[];
    SourceId: bigint;
    TriggerSignalType: number;
};
declare function read(buf: Buffer): PKTTriggerStartNotify;
declare const name = "PKTTriggerStartNotify";
declare const opcode = 50016;

export { opcode$4 as $, PKTTriggerFinishNotify as A, PKTTriggerStartNotify as B, opcode$s as C, opcode$r as D, opcode$q as E, opcode$p as F, opcode$o as G, opcode$n as H, opcode$m as I, opcode$l as J, opcode$k as K, opcode$j as L, opcode$i as M, opcode$h as N, opcode$g as O, PKTAuthTokenResult as P, opcode$f as Q, opcode$e as R, opcode$d as S, opcode$c as T, opcode$b as U, opcode$a as V, opcode$9 as W, opcode$8 as X, opcode$7 as Y, opcode$6 as Z, opcode$5 as _, PKTCounterAttackNotify as a, opcode$3 as a0, opcode$2 as a1, opcode$1 as a2, opcode as a3, name$s as a4, name$r as a5, name$q as a6, name$p as a7, name$o as a8, name$n as a9, read$p as aA, read$o as aB, read$n as aC, read$m as aD, read$l as aE, read$k as aF, read$j as aG, read$i as aH, read$h as aI, read$g as aJ, read$f as aK, read$e as aL, read$d as aM, read$c as aN, read$b as aO, read$a as aP, read$9 as aQ, read$8 as aR, read$7 as aS, read$6 as aT, read$5 as aU, read$4 as aV, read$3 as aW, read$2 as aX, read$1 as aY, read as aZ, name$m as aa, name$l as ab, name$k as ac, name$j as ad, name$i as ae, name$h as af, name$g as ag, name$f as ah, name$e as ai, name$d as aj, name$c as ak, name$b as al, name$a as am, name$9 as an, name$8 as ao, name$7 as ap, name$6 as aq, name$5 as ar, name$4 as as, name$3 as at, name$2 as au, name$1 as av, name as aw, read$s as ax, read$r as ay, read$q as az, PKTDeathNotify as b, PKTInitEnv as c, PKTInitPC as d, PKTNewNpc as e, PKTNewNpcSummon as f, PKTNewPC as g, PKTNewProjectile as h, PKTParalyzationStateNotify as i, PKTPartyInfo as j, PKTPartyLeaveResult as k, PKTPartyStatusEffectAddNotify as l, PKTPartyStatusEffectRemoveNotify as m, PKTPartyStatusEffectResultNotify as n, PKTRaidBossKillNotify as o, PKTRaidResult as p, PKTRemoveObject as q, PKTSkillDamageAbnormalMoveNotify as r, PKTSkillDamageNotify as s, PKTSkillStageNotify as t, PKTSkillStartNotify as u, PKTStatChangeOriginNotify as v, PKTStatusEffectAddNotify as w, PKTStatusEffectRemoveNotify as x, PKTStatusEffectSyncDataNotify as y, PKTTriggerBossBattleStatus as z };
