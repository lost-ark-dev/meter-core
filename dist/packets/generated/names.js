"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name30 in all)
    __defProp(target, name30, { get: all[name30], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/packets/generated/names.ts
var names_exports = {};
__export(names_exports, {
  PKTAuthTokenResult: () => name,
  PKTCounterAttackNotify: () => name2,
  PKTDeathNotify: () => name3,
  PKTInitEnv: () => name4,
  PKTInitPC: () => name5,
  PKTNewNpc: () => name6,
  PKTNewNpcSummon: () => name7,
  PKTNewPC: () => name8,
  PKTNewProjectile: () => name9,
  PKTParalyzationStateNotify: () => name10,
  PKTPartyInfo: () => name11,
  PKTPartyLeaveResult: () => name12,
  PKTPartyStatusEffectAddNotify: () => name13,
  PKTPartyStatusEffectRemoveNotify: () => name14,
  PKTPartyStatusEffectResultNotify: () => name15,
  PKTRaidBossKillNotify: () => name16,
  PKTRaidResult: () => name17,
  PKTRemoveObject: () => name18,
  PKTSkillDamageAbnormalMoveNotify: () => name19,
  PKTSkillDamageNotify: () => name20,
  PKTSkillStageNotify: () => name21,
  PKTSkillStartNotify: () => name22,
  PKTStatChangeOriginNotify: () => name23,
  PKTStatusEffectAddNotify: () => name24,
  PKTStatusEffectRemoveNotify: () => name25,
  PKTStatusEffectSyncDataNotify: () => name26,
  PKTTriggerBossBattleStatus: () => name27,
  PKTTriggerFinishNotify: () => name28,
  PKTTriggerStartNotify: () => name29
});
module.exports = __toCommonJS(names_exports);

// src/packets/generated/definitions/PKTAuthTokenResult.ts
var name = "PKTAuthTokenResult";

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
var name2 = "PKTCounterAttackNotify";

// src/packets/generated/definitions/PKTDeathNotify.ts
var name3 = "PKTDeathNotify";

// src/packets/generated/definitions/PKTInitEnv.ts
var name4 = "PKTInitEnv";

// src/packets/generated/definitions/PKTInitPC.ts
var name5 = "PKTInitPC";

// src/packets/generated/definitions/PKTNewNpc.ts
var name6 = "PKTNewNpc";

// src/packets/generated/definitions/PKTNewNpcSummon.ts
var name7 = "PKTNewNpcSummon";

// src/packets/generated/definitions/PKTNewPC.ts
var name8 = "PKTNewPC";

// src/packets/generated/definitions/PKTNewProjectile.ts
var name9 = "PKTNewProjectile";

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
var name10 = "PKTParalyzationStateNotify";

// src/packets/generated/definitions/PKTPartyInfo.ts
var name11 = "PKTPartyInfo";

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
var name12 = "PKTPartyLeaveResult";

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
var name13 = "PKTPartyStatusEffectAddNotify";

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
var name14 = "PKTPartyStatusEffectRemoveNotify";

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
var name15 = "PKTPartyStatusEffectResultNotify";

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
var name16 = "PKTRaidBossKillNotify";

// src/packets/generated/definitions/PKTRaidResult.ts
var name17 = "PKTRaidResult";

// src/packets/generated/definitions/PKTRemoveObject.ts
var name18 = "PKTRemoveObject";

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
var name19 = "PKTSkillDamageAbnormalMoveNotify";

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
var name20 = "PKTSkillDamageNotify";

// src/packets/generated/definitions/PKTSkillStageNotify.ts
var name21 = "PKTSkillStageNotify";

// src/packets/generated/definitions/PKTSkillStartNotify.ts
var name22 = "PKTSkillStartNotify";

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
var name23 = "PKTStatChangeOriginNotify";

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
var name24 = "PKTStatusEffectAddNotify";

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
var name25 = "PKTStatusEffectRemoveNotify";

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
var name26 = "PKTStatusEffectSyncDataNotify";

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
var name27 = "PKTTriggerBossBattleStatus";

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
var name28 = "PKTTriggerFinishNotify";

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
var name29 = "PKTTriggerStartNotify";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PKTAuthTokenResult,
  PKTCounterAttackNotify,
  PKTDeathNotify,
  PKTInitEnv,
  PKTInitPC,
  PKTNewNpc,
  PKTNewNpcSummon,
  PKTNewPC,
  PKTNewProjectile,
  PKTParalyzationStateNotify,
  PKTPartyInfo,
  PKTPartyLeaveResult,
  PKTPartyStatusEffectAddNotify,
  PKTPartyStatusEffectRemoveNotify,
  PKTPartyStatusEffectResultNotify,
  PKTRaidBossKillNotify,
  PKTRaidResult,
  PKTRemoveObject,
  PKTSkillDamageAbnormalMoveNotify,
  PKTSkillDamageNotify,
  PKTSkillStageNotify,
  PKTSkillStartNotify,
  PKTStatChangeOriginNotify,
  PKTStatusEffectAddNotify,
  PKTStatusEffectRemoveNotify,
  PKTStatusEffectSyncDataNotify,
  PKTTriggerBossBattleStatus,
  PKTTriggerFinishNotify,
  PKTTriggerStartNotify
});
