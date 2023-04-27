import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from '../decompressor.js';
import { L as LostArkDateTime, V as Vector3F, A as Angle, T as TripodIndex, a as TripodLevel, S as SkillMoveOptionData, b as SkillOptionData, P as PKTStream } from '../pkt-stream-13911688.js';
import { G as GameState } from '../data-9f3265b1.js';
import 'oodle';

declare class Read {
    /** Buffer */
    b: Buffer;
    /** Offset */
    o: number;
    constructor(buf: Buffer);
    skip(length?: number): void;
    bool(): boolean;
    u8(): number;
    i8(): number;
    u16(): number;
    i16(): number;
    u32(): number;
    i32(): number;
    f32(): number;
    u64(): bigint;
    i64(): bigint;
    string(maxLength: number): string;
    bytes(length?: number, maxLength?: number, multiplier?: number): Buffer;
    array(length: number, callbackfn: (...args: any[]) => any, maxLength?: number): any[];
}
declare class Write {
    /** Buffer */
    b: Buffer;
    /** Offset */
    o: number;
    constructor(max?: number);
    get value(): Buffer;
    skip(length?: number): void;
    bool(value?: boolean): boolean;
    u8(value?: number): void;
    i8(value?: number): void;
    u16(value?: number): void;
    i16(value?: number): void;
    u32(value?: number): void;
    i32(value?: number): void;
    f32(value?: number): void;
    u64(value?: bigint): void;
    i64(value?: bigint): void;
    string(value?: string, maxLength?: number): void;
    /**
     * @param opts.length Used when Buffer should be fixed length -> no header
     * @param opts.maxLen Used when Buffer has a max number of chunk -> chunk count is written as header
     * @param opts.lenType Required if maxLen, Used to specify header size possible values: ["u8", "u16", "u32"]
     * @param opts.multiplier Default: 1, Used to specify chunk size, Buffer size should be a multiple of multiplier, defaults to 1
     * @param opts If empty, fallback to opts.length = Buffer.length
     */
    bytes(value?: Buffer, opts?: {
        length?: number;
        maxLen?: number;
        lenType?: "u8" | "u16" | "u32";
        multiplier?: number;
    }): void;
    /**
     *
     * @param opts.maxLen Max size of array, size is set to 0 if overflow
     * @param opts.lenTypeUsed to specify header size possible values: ["u8", "u16", "u32"]
     */
    array(value: any[] | undefined, opts: {
        maxLen: number;
        lenType: "u8" | "u16" | "u32";
    }, callbackfn: (...args: any[]) => any): void;
}

declare class LogEvent<T> {
    #private;
    time: Date;
    constructor(pkt: T, logId: number, write: (writer: Write, data: T) => void);
    constructor(data: Buffer, logId: number, time: Date, read: (reader: Read) => T, write: (writer: Write, data: T) => void);
    get parsed(): T | undefined;
    get serialized(): Buffer | undefined;
}

type AbilityDataLog = {
    Points: number;
    Id: number;
    Level: number;
};

type AbilityChangeNotify = {
    abilityDataList: AbilityDataLog[];
};

type ActiveAbilityLog = {
    FeatureType: number;
    Level: number;
};

type ActiveAbilityNotify = {
    activeAbilityList: ActiveAbilityLog[];
    ObjectId: bigint;
};

type AddonSkillFeatureChangeNotify = {
    ObjectId: bigint;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
};

type BlockSkillStateNotify = {
    ParalyzationMaxPoint: number;
    Type: number;
    ObjectId: bigint;
    ParalyzationPoint: number;
};

type CounterAttackNotify = {
    SourceId: bigint;
    TargetId: bigint;
    Type: number;
};

type DeathNotify = {
    SourceId: bigint;
    TargetId: bigint;
};

type InitAbility = {
    abilityDataList: AbilityDataLog[];
};

type InitEnv = {
    PlayerId: bigint;
};

type StatusEffectDataLog = {
    SkillLevel: number;
    OccurTime: LostArkDateTime;
    StatusEffectId: number;
    SourceId: bigint;
    TotalTime: number;
    EndTick: bigint;
    Value?: Buffer;
    EffectInstanceId: number;
};

type InitPC = {
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Name: string;
    Level: number;
    statusEffectDatas: StatusEffectDataLog[];
    CharacterId: bigint;
    GearLevel: number;
    PlayerId: bigint;
    ClassId: number;
};

type InitLocal = {
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    statusEffectDatas: StatusEffectDataLog[];
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    abilityDataList: AbilityDataLog[];
};

type MigrationExecute = {
    Account_CharacterId1: bigint;
    ServerAddr: string;
    Account_CharacterId2: bigint;
};

type NpcDataLog = {
    SpawnIndex: number;
    ObjectId: bigint;
    TransitIndex?: number;
    Position: Vector3F;
    statusEffectDatas: StatusEffectDataLog[];
    DirectionYaw: Angle;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    TypeId: number;
};

type NewNpc = {
    NpcStruct: NpcDataLog;
};

type NewNpcSummon = {
    PublishReason: number;
    OwnerId: bigint;
    NpcData: NpcDataLog;
};

type PCLogStruct = {
    GearLevel: number;
    statPair: {
        StatType: number;
        Value: bigint;
    }[];
    Name: string;
    Heading: Angle;
    CharacterId: bigint;
    PlayerId: bigint;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        SkillId: number;
    }[];
    ClassId: number;
    Level: number;
    statusEffectDatas: StatusEffectDataLog[];
};

type NewPC = {
    PCStruct: PCLogStruct;
};

type ProjectileLogInfo = {
    tripodIndex: TripodIndex;
    ChainSkillEffect: number;
    SkillEffect: number;
    SkillId: number;
    TargetObjectId: bigint;
    OwnerId: bigint;
    SkillLevel: number;
    ProjectileId: bigint;
    tripodLevel: TripodLevel;
};

type NewProjectile = {
    projectileInfo: ProjectileLogInfo;
};

type ParalyzationStateNotify = {
    Enable: boolean;
    ParalyzationPoint: number;
    DecreasePoint: number;
    ParalyzationMaxPoint: number;
    NoHitCheckTime: number;
    HitCheckTime: number;
    ObjectId: bigint;
};

type PartyMemberDataLog = {
    MaxHp: bigint;
    CharacterId: bigint;
    Position: Vector3F;
    TransitIndex: number;
    CurHp: bigint;
    CharacterLevel: number;
    GearLevel: number;
    ZoneId: number;
    PartyMemberNumber: number;
    Name: string;
    ZoneInstId: bigint;
    WorldId: number;
    ClassId: number;
    Auths: number;
};

type PartyInfo = {
    RaidInstanceId: number;
    LootGrade: number;
    PartyType: number;
    PartyInstanceId: number;
    PartyLootType: number;
    MemberDatas: PartyMemberDataLog[];
};

type PartyLeaveResult = {
    PartyLeaveType: number;
    PartyInstanceId: number;
    Name: string;
};

type PartyPassiveStatusEffectAddNotify = {
    ObjectId: bigint;
    passiveStatusEffectList: number[];
    Unk0_m: number;
};

type PartyPassiveStatusEffectRemoveNotify = {
    ObjectId: bigint;
    passiveStatusEffectList: number[];
};

type PartyStatusEffectAddNotify = {
    CharacterId: bigint;
    statusEffectDatas: StatusEffectDataLog[];
    PlayerIdOnRefresh: bigint;
};

type PartyStatusEffectRemoveNotify = {
    CharacterId: bigint;
    statusEffectIds: number[];
    Reason: number;
};

type PartyStatusEffectResultNotify = {
    PartyInstanceId: number;
    RaidInstanceId: number;
    CharacterId: bigint;
};

type PassiveStatusEffectAddNotify = {
    passiveStatusEffectList: number[];
};

type PassiveStatusEffectRemoveNotify = {
    passiveStatusEffectList: number[];
};

type RaidBossKillNotify = {};

type RaidResult = {};

type UnpublishObjectLog = {
    UnpublishReason: number;
    ObjectId: bigint;
};

type RemoveObject = {
    unpublishedObjects: UnpublishObjectLog[];
};

type SkillDamageEventLog = {
    Modifier: number;
    TargetId: bigint;
    DamageType: number;
    DamageAttr?: number;
    CurHp: bigint;
    Unk3_m: number;
    MaxHp: bigint;
    Damage: bigint;
};

type SkillDamageAbnormalMoveEventLog = {
    SkillMoveOptionData: SkillMoveOptionData;
    Destination: Vector3F;
    Position: Vector3F;
    skillDamageEvent: SkillDamageEventLog;
};

type SkillDamageAbnormalMoveNotify = {
    SkillId: number;
    SkillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEventLog[];
    SkillEffectId: number;
    SourceId: bigint;
};

type SkillDamageNotify = {
    SkillLevel: number;
    SourceId: bigint;
    SkillId: number;
    SkillDamageEvents: SkillDamageEventLog[];
    SkillEffectId: number;
};

type SkillStageNotify = {
    SourceId: bigint;
    SkillId: number;
    Stage: number;
};

type SkillStartNotify = {
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

type StatusEffectAddNotify = {
    statusEffectData: StatusEffectDataLog;
    ObjectId: bigint;
    New: boolean;
};

type StatusEffectRemoveNotify = {
    statusEffectIds: number[];
    ObjectId: bigint;
    Reason: number;
};

type StatusEffectDurationNotify = {
    EffectInstanceId: number;
    TargetId: bigint;
    ExpirationTick: bigint;
};

type StatusEffectSyncDataNotify = {
    ObjectId: bigint;
    EffectInstanceId: number;
    CharacterId: bigint;
    Value: number;
};

type TriggerBossBattleStatus = {
    Step: number;
    Unk2_m: boolean;
    TriggerId: number;
};

type TriggerFinishNotify = {
    PacketResultCode: number;
    TriggerId: number;
    Unk0_m: number;
    InvolvedPCs: bigint[];
};

type TriggerStartNotify = {
    TriggerId: number;
    TriggerSignalType: number;
    SourceId: bigint;
    InvolvedPCs: bigint[];
};

type TroopMemberUpdateMinNotify = {
    MaxHp: bigint;
    CharacterId: bigint;
    Unk0_m: number;
    statusEffectDatas: StatusEffectDataLog[];
    Position: bigint;
    CurHp: bigint;
};

type IdentityGaugeChangeNotify = {
    IdentityGauge1: number;
    IdentityGauge2: number;
    IdentityGauge3: number;
    PlayerId: bigint;
};

type ZoneObjectUnpublishNotify = {
    ObjectId: bigint;
};

type ZoneStatusEffectDataLog = {
    StackCount: number;
    Target: number;
    Id: number;
};

type ZoneStatusEffectAddNotify = {
    zoneStatusEffectDataList: ZoneStatusEffectDataLog[];
};

type ZoneStatusEffectRemoveNotify = {
    StatusEffectId: number;
};

interface LogStreamEvent {
    AbilityChangeNotify: (pkt: LogEvent<AbilityChangeNotify>) => void;
    ActiveAbilityNotify: (pkt: LogEvent<ActiveAbilityNotify>) => void;
    AddonSkillFeatureChangeNotify: (pkt: LogEvent<AddonSkillFeatureChangeNotify>) => void;
    BlockSkillStateNotify: (pkt: LogEvent<BlockSkillStateNotify>) => void;
    CounterAttackNotify: (pkt: LogEvent<CounterAttackNotify>) => void;
    DeathNotify: (pkt: LogEvent<DeathNotify>) => void;
    InitAbility: (pkt: LogEvent<InitAbility>) => void;
    InitEnv: (pkt: LogEvent<InitEnv>) => void;
    InitPC: (pkt: LogEvent<InitPC>) => void;
    InitLocal: (pkt: LogEvent<InitLocal>) => void;
    MigrationExecute: (pkt: LogEvent<MigrationExecute>) => void;
    NewNpc: (pkt: LogEvent<NewNpc>) => void;
    NewNpcSummon: (pkt: LogEvent<NewNpcSummon>) => void;
    NewPC: (pkt: LogEvent<NewPC>) => void;
    NewProjectile: (pkt: LogEvent<NewProjectile>) => void;
    ParalyzationStateNotify: (pkt: LogEvent<ParalyzationStateNotify>) => void;
    PartyInfo: (pkt: LogEvent<PartyInfo>) => void;
    PartyLeaveResult: (pkt: LogEvent<PartyLeaveResult>) => void;
    PartyPassiveStatusEffectAddNotify: (pkt: LogEvent<PartyPassiveStatusEffectAddNotify>) => void;
    PartyPassiveStatusEffectRemoveNotify: (pkt: LogEvent<PartyPassiveStatusEffectRemoveNotify>) => void;
    PartyStatusEffectAddNotify: (pkt: LogEvent<PartyStatusEffectAddNotify>) => void;
    PartyStatusEffectRemoveNotify: (pkt: LogEvent<PartyStatusEffectRemoveNotify>) => void;
    PartyStatusEffectResultNotify: (pkt: LogEvent<PartyStatusEffectResultNotify>) => void;
    PassiveStatusEffectAddNotify: (pkt: LogEvent<PassiveStatusEffectAddNotify>) => void;
    PassiveStatusEffectRemoveNotify: (pkt: LogEvent<PassiveStatusEffectRemoveNotify>) => void;
    RaidBossKillNotify: (pkt: LogEvent<RaidBossKillNotify>) => void;
    RaidResult: (pkt: LogEvent<RaidResult>) => void;
    RemoveObject: (pkt: LogEvent<RemoveObject>) => void;
    SkillDamageAbnormalMoveNotify: (pkt: LogEvent<SkillDamageAbnormalMoveNotify>) => void;
    SkillDamageNotify: (pkt: LogEvent<SkillDamageNotify>) => void;
    SkillStageNotify: (pkt: LogEvent<SkillStageNotify>) => void;
    SkillStartNotify: (pkt: LogEvent<SkillStartNotify>) => void;
    StatusEffectAddNotify: (pkt: LogEvent<StatusEffectAddNotify>) => void;
    StatusEffectRemoveNotify: (pkt: LogEvent<StatusEffectRemoveNotify>) => void;
    StatusEffectDurationNotify: (pkt: LogEvent<StatusEffectDurationNotify>) => void;
    StatusEffectSyncDataNotify: (pkt: LogEvent<StatusEffectSyncDataNotify>) => void;
    TriggerBossBattleStatus: (pkt: LogEvent<TriggerBossBattleStatus>) => void;
    TriggerFinishNotify: (pkt: LogEvent<TriggerFinishNotify>) => void;
    TriggerStartNotify: (pkt: LogEvent<TriggerStartNotify>) => void;
    TroopMemberUpdateMinNotify: (pkt: LogEvent<TroopMemberUpdateMinNotify>) => void;
    IdentityGaugeChangeNotify: (pkt: LogEvent<IdentityGaugeChangeNotify>) => void;
    ZoneObjectUnpublishNotify: (pkt: LogEvent<ZoneObjectUnpublishNotify>) => void;
    ZoneStatusEffectAddNotify: (pkt: LogEvent<ZoneStatusEffectAddNotify>) => void;
    ZoneStatusEffectRemoveNotify: (pkt: LogEvent<ZoneStatusEffectRemoveNotify>) => void;
    logData: (data: Buffer) => void;
    fileEnd: (output: string) => void;
    "*": (name: string, pkt: LogEvent<Object>) => void;
}

declare abstract class Logger extends TypedEmitter<LogStreamEvent> {
}
declare class LiveLogger extends Logger {
    #private;
    constructor(stream: PKTStream, decompressor: Decompressor, filepath?: string);
    handlePkt(data: Buffer, opcode: number, compression: number, xor: boolean): void;
    appendLog(logEvent: LogEvent<any>): void;
}
declare class ReplayLogger extends Logger {
    readLogByChunk(filepath: string): void;
    readLogChunk(buf: Buffer, version: number): false | void;
    readVersion(b: Buffer): number;
}
type LogFileEntry = {
    filename: string;
    parsedContents: GameState;
    date: Date;
};

export { LiveLogger, LogFileEntry, Logger, ReplayLogger };
