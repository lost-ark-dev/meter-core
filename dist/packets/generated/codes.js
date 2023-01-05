"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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

// src/packets/generated/codes.ts
var codes_exports = {};
__export(codes_exports, {
  PKTAuthTokenResult: () => opcode,
  PKTCounterAttackNotify: () => opcode2,
  PKTDeathNotify: () => opcode3,
  PKTInitEnv: () => opcode4,
  PKTInitPC: () => opcode5,
  PKTNewNpc: () => opcode6,
  PKTNewNpcSummon: () => opcode7,
  PKTNewPC: () => opcode8,
  PKTNewProjectile: () => opcode9,
  PKTParalyzationStateNotify: () => opcode10,
  PKTPartyInfo: () => opcode11,
  PKTPartyLeaveResult: () => opcode12,
  PKTPartyStatusEffectAddNotify: () => opcode13,
  PKTPartyStatusEffectRemoveNotify: () => opcode14,
  PKTPartyStatusEffectResultNotify: () => opcode15,
  PKTRaidBossKillNotify: () => opcode16,
  PKTRaidResult: () => opcode17,
  PKTRemoveObject: () => opcode18,
  PKTSkillDamageAbnormalMoveNotify: () => opcode19,
  PKTSkillDamageNotify: () => opcode20,
  PKTSkillStageNotify: () => opcode21,
  PKTSkillStartNotify: () => opcode22,
  PKTStatChangeOriginNotify: () => opcode23,
  PKTStatusEffectAddNotify: () => opcode24,
  PKTStatusEffectRemoveNotify: () => opcode25,
  PKTStatusEffectSyncDataNotify: () => opcode26,
  PKTTriggerBossBattleStatus: () => opcode27,
  PKTTriggerFinishNotify: () => opcode28,
  PKTTriggerStartNotify: () => opcode29
});
module.exports = __toCommonJS(codes_exports);

// src/packets/generated/definitions/PKTAuthTokenResult.ts
var opcode = 44294;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
var opcode2 = 23544;

// src/packets/generated/definitions/PKTDeathNotify.ts
var opcode3 = 21940;

// src/packets/generated/definitions/PKTInitEnv.ts
var opcode4 = 12201;

// src/packets/generated/definitions/PKTInitPC.ts
var opcode5 = 44217;

// src/packets/generated/definitions/PKTNewNpc.ts
var opcode6 = 31638;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
var opcode7 = 57156;

// src/packets/generated/definitions/PKTNewPC.ts
var opcode8 = 13099;

// src/packets/generated/definitions/PKTNewProjectile.ts
var opcode9 = 1296;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
var opcode10 = 1696;

// src/packets/generated/definitions/PKTPartyInfo.ts
var opcode11 = 20135;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
var opcode12 = 12275;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
var opcode13 = 8895;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
var opcode14 = 13843;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
var opcode15 = 601;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
var opcode16 = 20140;

// src/packets/generated/definitions/PKTRaidResult.ts
var opcode17 = 17609;

// src/packets/generated/definitions/PKTRemoveObject.ts
var opcode18 = 39958;

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
var opcode19 = 29416;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
var opcode20 = 1847;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
var opcode21 = 6028;

// src/packets/generated/definitions/PKTSkillStartNotify.ts
var opcode22 = 45202;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
var opcode23 = 36460;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
var opcode24 = 4713;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
var opcode25 = 55030;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
var opcode26 = 35589;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
var opcode27 = 35800;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
var opcode28 = 53300;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
var opcode29 = 50016;
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
