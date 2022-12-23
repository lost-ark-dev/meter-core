// Auto Generated, do not edit.
import type { PKT } from "../../pkt-stream";
import type * as types from "./types";
export interface PKTStreamEvents {
  PKTAuthTokenResult: (pkt: PKT<types.PKTAuthTokenResult>) => void;
  PKTCounterAttackNotify: (pkt: PKT<types.PKTCounterAttackNotify>) => void;
  PKTDeathNotify: (pkt: PKT<types.PKTDeathNotify>) => void;
  PKTInitEnv: (pkt: PKT<types.PKTInitEnv>) => void;
  PKTInitPC: (pkt: PKT<types.PKTInitPC>) => void;
  PKTNewNpc: (pkt: PKT<types.PKTNewNpc>) => void;
  PKTNewNpcSummon: (pkt: PKT<types.PKTNewNpcSummon>) => void;
  PKTNewPC: (pkt: PKT<types.PKTNewPC>) => void;
  PKTNewProjectile: (pkt: PKT<types.PKTNewProjectile>) => void;
  PKTParalyzationStateNotify: (pkt: PKT<types.PKTParalyzationStateNotify>) => void;
  PKTPartyInfo: (pkt: PKT<types.PKTPartyInfo>) => void;
  PKTPartyLeaveResult: (pkt: PKT<types.PKTPartyLeaveResult>) => void;
  PKTPartyStatusEffectAddNotify: (pkt: PKT<types.PKTPartyStatusEffectAddNotify>) => void;
  PKTPartyStatusEffectRemoveNotify: (pkt: PKT<types.PKTPartyStatusEffectRemoveNotify>) => void;
  PKTPartyStatusEffectResultNotify: (pkt: PKT<types.PKTPartyStatusEffectResultNotify>) => void;
  PKTRaidBossKillNotify: (pkt: PKT<types.PKTRaidBossKillNotify>) => void;
  PKTRaidResult: (pkt: PKT<types.PKTRaidResult>) => void;
  PKTRemoveObject: (pkt: PKT<types.PKTRemoveObject>) => void;
  PKTSkillDamageAbnormalMoveNotify: (pkt: PKT<types.PKTSkillDamageAbnormalMoveNotify>) => void;
  PKTSkillDamageNotify: (pkt: PKT<types.PKTSkillDamageNotify>) => void;
  PKTSkillStageNotify: (pkt: PKT<types.PKTSkillStageNotify>) => void;
  PKTSkillStartNotify: (pkt: PKT<types.PKTSkillStartNotify>) => void;
  PKTStatChangeOriginNotify: (pkt: PKT<types.PKTStatChangeOriginNotify>) => void;
  PKTStatusEffectAddNotify: (pkt: PKT<types.PKTStatusEffectAddNotify>) => void;
  PKTStatusEffectRemoveNotify: (pkt: PKT<types.PKTStatusEffectRemoveNotify>) => void;
  PKTStatusEffectSyncDataNotify: (pkt: PKT<types.PKTStatusEffectSyncDataNotify>) => void;
  PKTTriggerBossBattleStatus: (pkt: PKT<types.PKTTriggerBossBattleStatus>) => void;
  PKTTriggerFinishNotify: (pkt: PKT<types.PKTTriggerFinishNotify>) => void;
  PKTTriggerStartNotify: (pkt: PKT<types.PKTTriggerStartNotify>) => void;
  "*": (data: Buffer, opcode: number, compression: number, xor: boolean) => void;
}
