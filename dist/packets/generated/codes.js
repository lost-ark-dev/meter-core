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
  PKTAbilityChangeNotify: () => opcode,
  PKTActiveAbilityNotify: () => opcode2,
  PKTAddonSkillFeatureChangeNotify: () => opcode3,
  PKTAuthTokenResult: () => opcode4,
  PKTBlockSkillStateNotify: () => opcode5,
  PKTCounterAttackNotify: () => opcode6,
  PKTDeathNotify: () => opcode7,
  PKTInitAbility: () => opcode8,
  PKTInitEnv: () => opcode9,
  PKTInitLocal: () => opcode11,
  PKTInitPC: () => opcode10,
  PKTNewNpc: () => opcode12,
  PKTNewNpcSummon: () => opcode13,
  PKTNewPC: () => opcode14,
  PKTNewProjectile: () => opcode15,
  PKTParalyzationStateNotify: () => opcode16,
  PKTPartyInfo: () => opcode17,
  PKTPartyLeaveResult: () => opcode18,
  PKTPartyPassiveStatusEffectAddNotify: () => opcode19,
  PKTPartyPassiveStatusEffectRemoveNotify: () => opcode20,
  PKTPartyStatusEffectAddNotify: () => opcode21,
  PKTPartyStatusEffectRemoveNotify: () => opcode22,
  PKTPartyStatusEffectResultNotify: () => opcode23,
  PKTPassiveStatusEffectAddNotify: () => opcode24,
  PKTPassiveStatusEffectRemoveNotify: () => opcode25,
  PKTRaidBossKillNotify: () => opcode26,
  PKTRaidResult: () => opcode27,
  PKTRemoveObject: () => opcode28,
  PKTSkillDamageAbnormalMoveNotify: () => opcode29,
  PKTSkillDamageNotify: () => opcode30,
  PKTSkillStageNotify: () => opcode31,
  PKTSkillStartNotify: () => opcode32,
  PKTStatChangeOriginNotify: () => opcode33,
  PKTStatusEffectAddNotify: () => opcode34,
  PKTStatusEffectRemoveNotify: () => opcode35,
  PKTStatusEffectSyncDataNotify: () => opcode36,
  PKTTriggerBossBattleStatus: () => opcode37,
  PKTTriggerFinishNotify: () => opcode38,
  PKTTriggerStartNotify: () => opcode39,
  PKTTroopMemberUpdateMinNotify: () => opcode40
});
module.exports = __toCommonJS(codes_exports);

// src/packets/generated/definitions/PKTAbilityChangeNotify.ts
var opcode = 17235;

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
var opcode2 = 27962;

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
var opcode3 = 31789;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
var opcode4 = 59533;

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
var opcode5 = 44742;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
var opcode6 = 20908;

// src/packets/generated/definitions/PKTDeathNotify.ts
var opcode7 = 14668;

// src/packets/generated/definitions/PKTInitAbility.ts
var opcode8 = 29723;

// src/packets/generated/definitions/PKTInitEnv.ts
var opcode9 = 57806;

// src/packets/generated/definitions/PKTInitPC.ts
var opcode10 = 20790;

// src/packets/generated/definitions/PKTInitLocal.ts
var opcode11 = 9782;

// src/packets/generated/definitions/PKTNewNpc.ts
var opcode12 = 19263;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
var opcode13 = 45531;

// src/packets/generated/definitions/PKTNewPC.ts
var opcode14 = 8067;

// src/packets/generated/definitions/PKTNewProjectile.ts
var opcode15 = 38002;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
var opcode16 = 1165;

// src/packets/generated/definitions/PKTPartyInfo.ts
var opcode17 = 31845;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
var opcode18 = 25148;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
var opcode19 = 23968;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
var opcode20 = 10132;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
var opcode21 = 44010;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
var opcode22 = 22567;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
var opcode23 = 35964;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
var opcode24 = 57428;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
var opcode25 = 50974;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
var opcode26 = 23147;

// src/packets/generated/definitions/PKTRaidResult.ts
var opcode27 = 6589;

// src/packets/generated/definitions/PKTRemoveObject.ts
var opcode28 = 49888;

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
var opcode29 = 46539;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
var opcode30 = 23135;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
var opcode31 = 51700;

// src/packets/generated/definitions/PKTSkillStartNotify.ts
var opcode32 = 38704;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
var opcode33 = 52643;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
var opcode34 = 23393;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
var opcode35 = 47620;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
var opcode36 = 43648;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
var opcode37 = 50014;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
var opcode38 = 44444;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
var opcode39 = 53998;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
var opcode40 = 27115;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PKTAbilityChangeNotify,
  PKTActiveAbilityNotify,
  PKTAddonSkillFeatureChangeNotify,
  PKTAuthTokenResult,
  PKTBlockSkillStateNotify,
  PKTCounterAttackNotify,
  PKTDeathNotify,
  PKTInitAbility,
  PKTInitEnv,
  PKTInitLocal,
  PKTInitPC,
  PKTNewNpc,
  PKTNewNpcSummon,
  PKTNewPC,
  PKTNewProjectile,
  PKTParalyzationStateNotify,
  PKTPartyInfo,
  PKTPartyLeaveResult,
  PKTPartyPassiveStatusEffectAddNotify,
  PKTPartyPassiveStatusEffectRemoveNotify,
  PKTPartyStatusEffectAddNotify,
  PKTPartyStatusEffectRemoveNotify,
  PKTPartyStatusEffectResultNotify,
  PKTPassiveStatusEffectAddNotify,
  PKTPassiveStatusEffectRemoveNotify,
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
  PKTTriggerStartNotify,
  PKTTroopMemberUpdateMinNotify
});
