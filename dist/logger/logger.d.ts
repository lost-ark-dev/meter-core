import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from '../decompressor.js';
import { L as LostArkDateTime, V as Vector3F, A as Angle, T as TripodIndex, a as TripodLevel, S as SkillMoveOptionData, b as SkillOptionData, P as PKTStream } from '../pkt-stream-bdf731f3.js';
import { a as GameState } from '../data-868e0116.js';
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

type AbilityDataLog = {
    points: number;
    id: number;
    level: number;
};

type AbilityChangeNotify = {
    abilityDataList: AbilityDataLog[];
};

type ActiveAbilityLog = {
    featureType: number;
    level: number;
};

type ActiveAbilityNotify = {
    activeAbilityList: ActiveAbilityLog[];
    objectId: bigint;
};

type AddonSkillFeatureChangeNotify = {
    objectId: bigint;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
};

type BlockSkillStateNotify = {
    paralyzationMaxPoint: number;
    type: number;
    objectId: bigint;
    paralyzationPoint: number;
};

type CounterAttackNotify = {
    sourceId: bigint;
    targetId: bigint;
    type: number;
};

type DeathNotify = {
    sourceId: bigint;
    targetId: bigint;
};

type InitAbility = {
    abilityDataList: AbilityDataLog[];
};

type InitEnv = {
    playerId: bigint;
};

type StatusEffectDataLog = {
    skillLevel: number;
    occurTime: LostArkDateTime;
    statusEffectId: number;
    sourceId: bigint;
    totalTime: number;
    endTick: bigint;
    value?: Buffer;
    effectInstanceId: number;
    stackCount: number;
};

type InitPC = {
    statPair: {
        statType: number;
        value: bigint;
    }[];
    name: string;
    level: number;
    statusEffectDatas: StatusEffectDataLog[];
    characterId: bigint;
    gearLevel: number;
    playerId: bigint;
    classId: number;
};

type InitLocal = {
    statPair: {
        statType: number;
        value: bigint;
    }[];
    statusEffectDatas: StatusEffectDataLog[];
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    abilityDataList: AbilityDataLog[];
};

type MigrationExecute = {
    account_CharacterId1: bigint;
    serverAddr: string;
    account_CharacterId2: bigint;
};

type NpcDataLog = {
    spawnIndex: number;
    objectId: bigint;
    transitIndex?: number;
    position: Vector3F;
    statusEffectDatas: StatusEffectDataLog[];
    directionYaw: Angle;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    typeId: number;
    level: number;
    balanceLevel?: number;
};

type NewNpc = {
    npcStruct: NpcDataLog;
};

type NewNpcSummon = {
    publishReason: number;
    ownerId: bigint;
    npcData: NpcDataLog;
};

type EquipItemDataLog = {
    slot: number;
    level: number;
    itemTint: Buffer;
    expireTime: LostArkDateTime;
    id: number;
};

type PCStructLog = {
    maxItemLevel: number;
    statPair: {
        statType: number;
        value: bigint;
    }[];
    name: string;
    heading: Angle;
    characterId: bigint;
    playerId: bigint;
    addonSkillFeatureList: {
        addonSkillFeatureIdList: number[];
        skillId: number;
    }[];
    classId: number;
    level: number;
    statusEffectDatas: StatusEffectDataLog[];
    avgItemLevel: number;
    position: Vector3F;
    equipItemDataList: EquipItemDataLog[];
    equipLifeToolDataList: EquipItemDataLog[];
    guildName: string;
    guildId: bigint;
};

type NewPC = {
    pcStruct: PCStructLog;
};

type ProjectileLogInfo = {
    tripodIndex: TripodIndex;
    chainSkillEffect: number;
    skillEffect: number;
    skillId: number;
    targetObjectId: bigint;
    ownerId: bigint;
    skillLevel: number;
    projectileId: bigint;
    tripodLevel: TripodLevel;
};

type NewProjectile = {
    projectileInfo: ProjectileLogInfo;
};

type ParalyzationStateNotify = {
    enable: boolean;
    paralyzationPoint: number;
    decreasePoint: number;
    paralyzationMaxPoint: number;
    noHitCheckTime: number;
    hitCheckTime: number;
    objectId: bigint;
};

type PartyMemberDataLog = {
    maxHp: bigint;
    characterId: bigint;
    position: Vector3F;
    transitIndex: number;
    curHp: bigint;
    characterLevel: number;
    gearLevel: number;
    zoneId: number;
    partyMemberNumber: number;
    name: string;
    zoneInstId: bigint;
    worldId: number;
    classId: number;
    auths: number;
};

type PartyInfo = {
    raidInstanceId: number;
    lootGrade: number;
    partyType: number;
    partyInstanceId: number;
    partyLootType: number;
    memberDatas: PartyMemberDataLog[];
};

type PartyLeaveResult = {
    partyLeaveType: number;
    partyInstanceId: number;
    name: string;
};

type PartyPassiveStatusEffectAddNotify = {
    objectId: bigint;
    passiveStatusEffectList: number[];
    unk0_m: number;
};

type PartyPassiveStatusEffectRemoveNotify = {
    objectId: bigint;
    passiveStatusEffectList: number[];
};

type PartyStatusEffectAddNotify = {
    characterId: bigint;
    statusEffectDatas: StatusEffectDataLog[];
    playerIdOnRefresh: bigint;
};

type PartyStatusEffectRemoveNotify = {
    characterId: bigint;
    statusEffectIds: number[];
    reason: number;
};

type PartyStatusEffectResultNotify = {
    partyInstanceId: number;
    raidInstanceId: number;
    characterId: bigint;
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
    unpublishReason: number;
    objectId: bigint;
};

type RemoveObject = {
    unpublishedObjects: UnpublishObjectLog[];
};

type SkillDamageEventLog = {
    modifier: number;
    targetId: bigint;
    damageType: number;
    damageAttr?: number;
    curHp: bigint;
    unk3_m: number;
    maxHp: bigint;
    damage: bigint;
};

type SkillDamageAbnormalMoveEventLog = {
    skillMoveOptionData: SkillMoveOptionData;
    destination: Vector3F;
    position: Vector3F;
    skillDamageEvent: SkillDamageEventLog;
};

type SkillDamageAbnormalMoveNotify = {
    skillId: number;
    skillDamageAbnormalMoveEvents: SkillDamageAbnormalMoveEventLog[];
    skillEffectId: number;
    sourceId: bigint;
};

type SkillDamageNotify = {
    skillLevel: number;
    sourceId: bigint;
    skillId: number;
    skillDamageEvents: SkillDamageEventLog[];
    skillEffectId: number;
};

type SkillStageNotify = {
    sourceId: bigint;
    skillId: number;
    stage: number;
};

type SkillStartNotify = {
    sourceId: bigint;
    curDirectionYaw: Angle;
    newDirectionYaw: Angle;
    aimTargetPosition: Vector3F;
    pitchRotation?: Angle;
    aiStateId?: number;
    curPosition: Vector3F;
    unk1_m?: number;
    skillLevel: number;
    newPosition: Vector3F;
    skillId: number;
    skillOptionData: SkillOptionData;
};

type StatusEffectAddNotify = {
    statusEffectData: StatusEffectDataLog;
    objectId: bigint;
    new: boolean;
};

type StatusEffectRemoveNotify = {
    statusEffectIds: number[];
    objectId: bigint;
    reason: number;
};

type StatusEffectDurationNotify = {
    effectInstanceId: number;
    targetId: bigint;
    expirationTick: bigint;
};

type StatusEffectSyncDataNotify = {
    objectId: bigint;
    effectInstanceId: number;
    characterId: bigint;
    value: number;
};

type TriggerBossBattleStatus = {
    step: number;
    unk2_m: boolean;
    triggerId: number;
};

type TriggerFinishNotify = {
    packetResultCode: number;
    triggerId: number;
    unk0_m: number;
    involvedPCs: bigint[];
};

type TriggerStartNotify = {
    triggerId: number;
    triggerSignalType: number;
    sourceId: bigint;
    involvedPCs: bigint[];
};

type TroopMemberUpdateMinNotify = {
    maxHp: bigint;
    characterId: bigint;
    unk0_m: number;
    statusEffectDatas: StatusEffectDataLog[];
    position: bigint;
    curHp: bigint;
};

type IdentityGaugeChangeNotify = {
    identityGauge1: number;
    identityGauge2: number;
    identityGauge3: number;
    playerId: bigint;
};

type ZoneObjectUnpublishNotify = {
    objectId: bigint;
};

type ZoneStatusEffectDataLog = {
    stackCount: number;
    target: number;
    id: number;
};

type ZoneStatusEffectAddNotify = {
    zoneStatusEffectDataList: ZoneStatusEffectDataLog[];
};

type ZoneStatusEffectRemoveNotify = {
    statusEffectId: number;
};

type SkillCastNotify = {
    skillLevel: number;
    caster: bigint;
    skillId: number;
};

type IdentityStanceChangeNotify = {
    objectId: bigint;
    stance: number;
};

type EquipChangeNotify = {
    objectId: bigint;
    equipItemDataList: EquipItemDataLog[];
};

type EquipLifeToolChangeNotify = {
    objectId: bigint;
    equipLifeToolDataList: EquipItemDataLog[];
};

type ItemDataLog = {
    serialNumber?: bigint;
    id?: number;
    level?: number;
    slot?: number;
    durability?: number;
    unk1_6_m?: number;
    flag?: number;
    expireTime?: LostArkDateTime;
    lockUpdateTime?: LostArkDateTime;
};

type InitItem = {
    itemDataList: ItemDataLog[];
    storageType: number;
};

type BossKillDataLog = {
    npcId: number;
    isDead: boolean;
};

type RaidBegin = {
    raidResult: number;
    raidId: number;
    totalTime: bigint;
    bossKillDataList: BossKillDataLog[];
    endTick: bigint;
    startTick: bigint;
};

type ZoneMemberLoadStatusNotify = {
    zoneInstId: bigint;
    zoneId: number;
    loadComplete: boolean;
    completeMembers: bigint[];
    totalMembers: bigint[];
    firstPCEnterTick: bigint;
    zoneLevel: number;
};

type TrapDataLog = {
    position: Vector3F;
    objectId: bigint;
    ownerId: bigint;
    skillId: number;
    skillEffect: number;
};

type NewTrap = {
    trapData: TrapDataLog;
};

declare enum ApiStatType {
    CRIT = 0,
    SPEC = 1,
    SWIFT = 2,
    EXP = 3,
    ATKPOWER = 4,
    SKILLDMG = 5
}
type CharacterExportInfo = {
    name: string;
    stats: {
        id: ApiStatType;
        value: number;
    }[];
};

type APP_StatApi = {
    players: CharacterExportInfo[];
};

declare class LogEvent<T> {
    #private;
    time: Date;
    constructor(pkt: T, logId: number, write: (writer: Write, data: T) => void);
    constructor(data: Buffer, logId: number, time: Date, read: (reader: Read) => T, write: (writer: Write, data: T) => void);
    get parsed(): T | undefined;
    get serialized(): Buffer | undefined;
}

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
    SkillCastNotify: (pkt: LogEvent<SkillCastNotify>) => void;
    IdentityStanceChangeNotify: (pkt: LogEvent<IdentityStanceChangeNotify>) => void;
    EquipChangeNotify: (pkt: LogEvent<EquipChangeNotify>) => void;
    EquipLifeToolChangeNotify: (pkt: LogEvent<EquipLifeToolChangeNotify>) => void;
    InitItem: (pkt: LogEvent<InitItem>) => void;
    RaidBegin: (pkt: LogEvent<RaidBegin>) => void;
    ZoneMemberLoadStatusNotify: (pkt: LogEvent<ZoneMemberLoadStatusNotify>) => void;
    NewTrap: (pkt: LogEvent<NewTrap>) => void;
    logData: (data: Buffer) => void;
    fileEnd: (output: string) => void;
    APP_StatApi: (pkt: LogEvent<APP_StatApi>) => void;
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
