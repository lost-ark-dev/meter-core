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
var opcode = 5787;

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
var opcode2 = 39249;

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
var opcode3 = 12299;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
var opcode4 = 51457;

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
var opcode5 = 5952;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
var opcode6 = 17998;

// src/packets/generated/definitions/PKTDeathNotify.ts
var opcode7 = 30293;

// src/packets/generated/definitions/PKTInitAbility.ts
var opcode8 = 19004;

// src/packets/generated/definitions/PKTInitEnv.ts
var opcode9 = 8280;

// src/packets/generated/definitions/PKTInitPC.ts
var opcode10 = 23879;

// src/packets/generated/definitions/PKTInitLocal.ts
var opcode11 = 48300;

// src/packets/generated/definitions/PKTNewNpc.ts
var opcode12 = 9084;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
var opcode13 = 20589;

// src/packets/generated/definitions/PKTNewPC.ts
var opcode14 = 42606;

// src/packets/generated/definitions/PKTNewProjectile.ts
var opcode15 = 21277;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
var opcode16 = 39081;

// src/packets/generated/definitions/PKTPartyInfo.ts
var opcode17 = 39309;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
var opcode18 = 26884;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
var opcode19 = 50269;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
var opcode20 = 34295;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
var opcode21 = 19066;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
var opcode22 = 39897;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
var opcode23 = 50964;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
var opcode24 = 15589;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
var opcode25 = 23148;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
var opcode26 = 44655;

// src/packets/generated/definitions/PKTRaidResult.ts
var opcode27 = 54224;

// src/packets/generated/definitions/PKTRemoveObject.ts
var opcode28 = 47607;

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
var opcode29 = 43771;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
var opcode30 = 17502;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
var opcode31 = 29272;

// src/packets/generated/definitions/PKTSkillStartNotify.ts
var opcode32 = 37729;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
var opcode33 = 19960;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
var opcode34 = 22838;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
var opcode35 = 22139;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
var opcode36 = 38506;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
var opcode37 = 42951;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
var opcode38 = 31636;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
var opcode39 = 59762;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
var opcode40 = 927;
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
