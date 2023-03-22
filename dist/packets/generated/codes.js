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
  PKTStatusEffectRemoveNotify: () => opcode36,
  PKTStatusEffectSyncDataNotify: () => opcode37,
  PKTTriggerBossBattleStatus: () => opcode38,
  PKTTriggerFinishNotify: () => opcode39,
  PKTTriggerStartNotify: () => opcode40,
  PKTTroopMemberUpdateMinNotify: () => opcode41
});
module.exports = __toCommonJS(codes_exports);

// src/packets/generated/definitions/PKTAbilityChangeNotify.ts
var opcode = 2055;

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
var opcode2 = 8789;

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
var opcode3 = 27714;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
var opcode4 = 51585;

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
var opcode5 = 14430;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
var opcode6 = 25211;

// src/packets/generated/definitions/PKTDeathNotify.ts
var opcode7 = 1006;

// src/packets/generated/definitions/PKTInitAbility.ts
var opcode8 = 59534;

// src/packets/generated/definitions/PKTInitEnv.ts
var opcode9 = 5818;

// src/packets/generated/definitions/PKTInitPC.ts
var opcode10 = 49736;

// src/packets/generated/definitions/PKTInitLocal.ts
var opcode11 = 7987;

// src/packets/generated/definitions/PKTMigrationExecute.ts
var opcode12 = 43659;

// src/packets/generated/definitions/PKTNewNpc.ts
var opcode13 = 29519;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
var opcode14 = 34300;

// src/packets/generated/definitions/PKTNewPC.ts
var opcode15 = 34863;

// src/packets/generated/definitions/PKTNewProjectile.ts
var opcode16 = 55720;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
var opcode17 = 24051;

// src/packets/generated/definitions/PKTPartyInfo.ts
var opcode18 = 10839;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
var opcode19 = 41810;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
var opcode20 = 7578;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
var opcode21 = 45127;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
var opcode22 = 17518;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
var opcode23 = 35134;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
var opcode24 = 7534;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
var opcode25 = 12065;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
var opcode26 = 28134;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
var opcode27 = 845;

// src/packets/generated/definitions/PKTRaidResult.ts
var opcode28 = 34049;

// src/packets/generated/definitions/PKTRemoveObject.ts
var opcode29 = 57048;

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
var opcode30 = 15322;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
var opcode31 = 30373;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
var opcode32 = 23925;

// src/packets/generated/definitions/PKTSkillStartNotify.ts
var opcode33 = 12114;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
var opcode34 = 3778;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
var opcode35 = 5430;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
var opcode36 = 17974;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
var opcode37 = 30620;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
var opcode38 = 23146;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
var opcode39 = 17709;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
var opcode40 = 43437;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
var opcode41 = 23607;
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
  PKTStatusEffectRemoveNotify,
  PKTStatusEffectSyncDataNotify,
  PKTTriggerBossBattleStatus,
  PKTTriggerFinishNotify,
  PKTTriggerStartNotify,
  PKTTroopMemberUpdateMinNotify
});
