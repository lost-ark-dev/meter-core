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
  PKTIdentityGaugeChangeNotify: () => opcode43,
  PKTInitAbility: () => opcode8,
  PKTInitEnv: () => opcode9,
  PKTInitLocal: () => opcode11,
  PKTInitPC: () => opcode10,
  PKTMigrationExecute: () => opcode12,
  PKTNewNpc: () => opcode13,
  PKTNewNpcSummon: () => opcode14,
  PKTNewPC: () => opcode15,
  PKTNewProjectile: () => opcode16,
  PKTParalyzationStateNotify: () => opcode17,
  PKTPartyInfo: () => opcode18,
  PKTPartyLeaveResult: () => opcode19,
  PKTPartyPassiveStatusEffectAddNotify: () => opcode20,
  PKTPartyPassiveStatusEffectRemoveNotify: () => opcode21,
  PKTPartyStatusEffectAddNotify: () => opcode22,
  PKTPartyStatusEffectRemoveNotify: () => opcode23,
  PKTPartyStatusEffectResultNotify: () => opcode24,
  PKTPassiveStatusEffectAddNotify: () => opcode25,
  PKTPassiveStatusEffectRemoveNotify: () => opcode26,
  PKTRaidBossKillNotify: () => opcode27,
  PKTRaidResult: () => opcode28,
  PKTRemoveObject: () => opcode29,
  PKTSkillDamageAbnormalMoveNotify: () => opcode30,
  PKTSkillDamageNotify: () => opcode31,
  PKTSkillStageNotify: () => opcode32,
  PKTSkillStartNotify: () => opcode33,
  PKTStatChangeOriginNotify: () => opcode34,
  PKTStatusEffectAddNotify: () => opcode35,
  PKTStatusEffectDurationNotify: () => opcode37,
  PKTStatusEffectRemoveNotify: () => opcode36,
  PKTStatusEffectSyncDataNotify: () => opcode38,
  PKTTriggerBossBattleStatus: () => opcode39,
  PKTTriggerFinishNotify: () => opcode40,
  PKTTriggerStartNotify: () => opcode41,
  PKTTroopMemberUpdateMinNotify: () => opcode42,
  PKTZoneObjectUnpublishNotify: () => opcode44,
  PKTZoneStatusEffectAddNotify: () => opcode45,
  PKTZoneStatusEffectRemoveNotify: () => opcode46
});
module.exports = __toCommonJS(codes_exports);

// src/packets/generated/definitions/PKTAbilityChangeNotify.ts
var opcode = 37279;

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
var opcode2 = 43908;

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
var opcode3 = 36297;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
var opcode4 = 36363;

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
var opcode5 = 33660;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
var opcode6 = 44612;

// src/packets/generated/definitions/PKTDeathNotify.ts
var opcode7 = 27220;

// src/packets/generated/definitions/PKTInitAbility.ts
var opcode8 = 48153;

// src/packets/generated/definitions/PKTInitEnv.ts
var opcode9 = 22330;

// src/packets/generated/definitions/PKTInitPC.ts
var opcode10 = 52266;

// src/packets/generated/definitions/PKTInitLocal.ts
var opcode11 = 18980;

// src/packets/generated/definitions/PKTMigrationExecute.ts
var opcode12 = 19365;

// src/packets/generated/definitions/PKTNewNpc.ts
var opcode13 = 1040;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
var opcode14 = 3448;

// src/packets/generated/definitions/PKTNewPC.ts
var opcode15 = 15971;

// src/packets/generated/definitions/PKTNewProjectile.ts
var opcode16 = 6340;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
var opcode17 = 47778;

// src/packets/generated/definitions/PKTPartyInfo.ts
var opcode18 = 54811;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
var opcode19 = 43243;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
var opcode20 = 19025;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
var opcode21 = 40394;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
var opcode22 = 12206;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
var opcode23 = 38092;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
var opcode24 = 35973;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
var opcode25 = 12394;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
var opcode26 = 2763;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
var opcode27 = 1876;

// src/packets/generated/definitions/PKTRaidResult.ts
var opcode28 = 10861;

// src/packets/generated/definitions/PKTRemoveObject.ts
var opcode29 = 25018;

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
var opcode30 = 44143;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
var opcode31 = 50947;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
var opcode32 = 44221;

// src/packets/generated/definitions/PKTSkillStartNotify.ts
var opcode33 = 16905;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
var opcode34 = 6051;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
var opcode35 = 56830;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
var opcode36 = 23914;

// src/packets/generated/definitions/PKTStatusEffectDurationNotify.ts
var opcode37 = 46140;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
var opcode38 = 2750;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
var opcode39 = 9915;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
var opcode40 = 53812;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
var opcode41 = 49092;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
var opcode42 = 7345;

// src/packets/generated/definitions/PKTIdentityGaugeChangeNotify.ts
var opcode43 = 11255;

// src/packets/generated/definitions/PKTZoneObjectUnpublishNotify.ts
var opcode44 = 53893;

// src/packets/generated/definitions/PKTZoneStatusEffectAddNotify.ts
var opcode45 = 49467;

// src/packets/generated/definitions/PKTZoneStatusEffectRemoveNotify.ts
var opcode46 = 5255;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PKTAbilityChangeNotify,
  PKTActiveAbilityNotify,
  PKTAddonSkillFeatureChangeNotify,
  PKTAuthTokenResult,
  PKTBlockSkillStateNotify,
  PKTCounterAttackNotify,
  PKTDeathNotify,
  PKTIdentityGaugeChangeNotify,
  PKTInitAbility,
  PKTInitEnv,
  PKTInitLocal,
  PKTInitPC,
  PKTMigrationExecute,
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
  PKTStatusEffectDurationNotify,
  PKTStatusEffectRemoveNotify,
  PKTStatusEffectSyncDataNotify,
  PKTTriggerBossBattleStatus,
  PKTTriggerFinishNotify,
  PKTTriggerStartNotify,
  PKTTroopMemberUpdateMinNotify,
  PKTZoneObjectUnpublishNotify,
  PKTZoneStatusEffectAddNotify,
  PKTZoneStatusEffectRemoveNotify
});
