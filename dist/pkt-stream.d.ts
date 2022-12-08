import { TypedEmitter } from 'tiny-typed-emitter';
import { Decompressor } from './decompressor.js';
import { P as PKTAuthTokenResult, a as PKTCounterAttackNotify, b as PKTDeathNotify, c as PKTInitEnv, d as PKTInitPC, e as PKTNewNpc, f as PKTNewNpcSummon, g as PKTNewPC, h as PKTNewProjectile, i as PKTParalyzationStateNotify, j as PKTPartyInfo, k as PKTPartyLeaveResult, l as PKTPartyStatusEffectAddNotify, m as PKTPartyStatusEffectRemoveNotify, n as PKTPartyStatusEffectResultNotify, o as PKTRaidBossKillNotify, p as PKTRaidResult, q as PKTRemoveObject, r as PKTSkillDamageAbnormalMoveNotify, s as PKTSkillDamageNotify, t as PKTSkillStageNotify, u as PKTSkillStartNotify, v as PKTStatChangeOriginNotify, w as PKTStatusEffectAddNotify, x as PKTStatusEffectRemoveNotify, y as PKTStatusEffectSyncDataNotify, z as PKTTriggerBossBattleStatus, A as PKTTriggerFinishNotify, B as PKTTriggerStartNotify } from './PKTTriggerStartNotify-31c98bc5.js';
import 'oodle';

interface PKTStreamEvents {
    PKTAuthTokenResult: (pkt: PKT<PKTAuthTokenResult>) => void;
    PKTCounterAttackNotify: (pkt: PKT<PKTCounterAttackNotify>) => void;
    PKTDeathNotify: (pkt: PKT<PKTDeathNotify>) => void;
    PKTInitEnv: (pkt: PKT<PKTInitEnv>) => void;
    PKTInitPC: (pkt: PKT<PKTInitPC>) => void;
    PKTNewNpc: (pkt: PKT<PKTNewNpc>) => void;
    PKTNewNpcSummon: (pkt: PKT<PKTNewNpcSummon>) => void;
    PKTNewPC: (pkt: PKT<PKTNewPC>) => void;
    PKTNewProjectile: (pkt: PKT<PKTNewProjectile>) => void;
    PKTParalyzationStateNotify: (pkt: PKT<PKTParalyzationStateNotify>) => void;
    PKTPartyInfo: (pkt: PKT<PKTPartyInfo>) => void;
    PKTPartyLeaveResult: (pkt: PKT<PKTPartyLeaveResult>) => void;
    PKTPartyStatusEffectAddNotify: (pkt: PKT<PKTPartyStatusEffectAddNotify>) => void;
    PKTPartyStatusEffectRemoveNotify: (pkt: PKT<PKTPartyStatusEffectRemoveNotify>) => void;
    PKTPartyStatusEffectResultNotify: (pkt: PKT<PKTPartyStatusEffectResultNotify>) => void;
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
    PKTStatusEffectSyncDataNotify: (pkt: PKT<PKTStatusEffectSyncDataNotify>) => void;
    PKTTriggerBossBattleStatus: (pkt: PKT<PKTTriggerBossBattleStatus>) => void;
    PKTTriggerFinishNotify: (pkt: PKT<PKTTriggerFinishNotify>) => void;
    PKTTriggerStartNotify: (pkt: PKT<PKTTriggerStartNotify>) => void;
    "*": (data: Buffer, opcode: number, compression: number, xor: number) => void;
}

declare class PKTStream extends TypedEmitter<PKTStreamEvents> {
    #private;
    constructor(decompressor: Decompressor);
    read(buf: Buffer): void;
}
declare class PKT<T> {
    #private;
    constructor(data: Buffer, decompressor: Decompressor, read: (buf: Buffer) => T);
    get parsed(): T;
}

export { PKT, PKTStream };
