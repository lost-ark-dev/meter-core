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
var opcode = 16300;

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
var opcode2 = 29688;

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
var opcode3 = 14375;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
var opcode4 = 35847;

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
var opcode5 = 23429;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
var opcode6 = 22606;

// src/packets/generated/definitions/PKTDeathNotify.ts
var opcode7 = 21574;

// src/packets/generated/definitions/PKTInitAbility.ts
var opcode8 = 29820;

// src/packets/generated/definitions/PKTInitEnv.ts
var opcode9 = 43353;

// src/packets/generated/definitions/PKTInitPC.ts
var opcode10 = 399;

// src/packets/generated/definitions/PKTInitLocal.ts
var opcode11 = 25609;

// src/packets/generated/definitions/PKTNewNpc.ts
var opcode12 = 32635;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
var opcode13 = 26596;

// src/packets/generated/definitions/PKTNewPC.ts
var opcode14 = 58123;

// src/packets/generated/definitions/PKTNewProjectile.ts
var opcode15 = 45143;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
var opcode16 = 10632;

// src/packets/generated/definitions/PKTPartyInfo.ts
var opcode17 = 8616;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
var opcode18 = 56943;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
var opcode19 = 24702;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
var opcode20 = 59968;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
var opcode21 = 5853;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
var opcode22 = 15434;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
var opcode23 = 57506;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
var opcode24 = 6905;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
var opcode25 = 50847;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
var opcode26 = 34040;

// src/packets/generated/definitions/PKTRaidResult.ts
var opcode27 = 13462;

// src/packets/generated/definitions/PKTRemoveObject.ts
var opcode28 = 29821;

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
var opcode29 = 16593;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
var opcode30 = 2813;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
var opcode31 = 17861;

// src/packets/generated/definitions/PKTSkillStartNotify.ts
var opcode32 = 13284;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
var opcode33 = 24475;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
var opcode34 = 35476;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
var opcode35 = 54795;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
var opcode36 = 17356;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
var opcode37 = 51236;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
var opcode38 = 43614;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
var opcode39 = 4099;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
var opcode40 = 6981;
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
