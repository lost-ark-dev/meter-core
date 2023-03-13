import { TypedEmitter } from 'tiny-typed-emitter';
import { MeterData } from './data.js';
import { PKTStream } from './pkt-stream.js';
import './decompressor.js';
import 'oodle';
import './PKTTroopMemberUpdateMinNotify-579c5fa8.js';

declare const enum LineId {
    InitEnv = 1,
    PhaseTransition = 2,
    NewPC = 3,
    NewNpc = 4,
    Death = 5,
    SkillStart = 6,
    SkillStage = 7,
    Damage = 8,
    Heal = 9,
    Buff = 10,
    BuffRemove = 11,
    CounterAttack = 12,
    Line15 = 15,
    Debug = 251,
    PacketDump = 252,
    Version = 253,
    Error = 254
}
interface LegacyLoggerEvents {
    line: (line: string) => void;
    [LineId.InitEnv]: (playerId: bigint) => void;
    [LineId.PhaseTransition]: (phaseCode: number) => void;
    [LineId.NewPC]: (id: bigint, name: string, classId: number, className: string, level: number, gearLevel: number, currentHp: number, maxHp: number, characterId: bigint) => void;
    [LineId.NewNpc]: (id: bigint, npcId: number, name: string, currentHp: number, maxHp: number) => void;
    [LineId.Death]: (id: bigint, name: string, killerId: bigint, killerName: string) => void;
    [LineId.SkillStart]: (id: bigint, name: string, skillId: number, skillName: string) => void;
    [LineId.SkillStage]: (id: bigint, name: string, skillId: number, skillName: string, skillStage: number) => void;
    [LineId.Damage]: (id: bigint, name: string, skillId: number, skillName: string, skillEffectId: number, skillEffect: string, targetId: bigint, targetName: string, damage: number, modifier: string, currentHp: number, maxHp: number, effectsOnTarget: (number | bigint)[][], effectsOnSource: (number | bigint)[][]) => void;
    [LineId.Heal]: (id: bigint, name: string, healAmount: number, currentHp: number) => void;
    [LineId.Buff]: (id: bigint, name: string, buffId: number, buffName: string, sourceId: bigint, sourceName: string, shieldAmount: number) => void;
    [LineId.BuffRemove]: (statusId: bigint, statusName: string, targetId: bigint, targetName: string) => void;
    [LineId.CounterAttack]: (id: bigint, name: string, targetId: bigint, targetName: string) => void;
    [LineId.Line15]: () => void;
}
type LegacyLoggerSettings = {
    emitText?: boolean;
    emitLines?: boolean;
    emitObjects?: boolean;
};
declare class LegacyLogger extends TypedEmitter<LegacyLoggerEvents> {
    #private;
    emitText: boolean;
    emitLines: boolean;
    emitObjects: boolean;
    constructor(stream: PKTStream, data: MeterData, settings?: LegacyLoggerSettings);
}

export { LegacyLogger, LegacyLoggerSettings, LineId };
