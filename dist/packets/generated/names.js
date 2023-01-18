"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name41 in all)
    __defProp(target, name41, { get: all[name41], enumerable: true });
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
  PKTAbilityChangeNotify: () => name,
  PKTActiveAbilityNotify: () => name2,
  PKTAddonSkillFeatureChangeNotify: () => name3,
  PKTAuthTokenResult: () => name4,
  PKTBlockSkillStateNotify: () => name5,
  PKTCounterAttackNotify: () => name6,
  PKTDeathNotify: () => name7,
  PKTInitAbility: () => name8,
  PKTInitEnv: () => name9,
  PKTInitLocal: () => name11,
  PKTInitPC: () => name10,
  PKTNewNpc: () => name12,
  PKTNewNpcSummon: () => name13,
  PKTNewPC: () => name14,
  PKTNewProjectile: () => name15,
  PKTParalyzationStateNotify: () => name16,
  PKTPartyInfo: () => name17,
  PKTPartyLeaveResult: () => name18,
  PKTPartyPassiveStatusEffectAddNotify: () => name19,
  PKTPartyPassiveStatusEffectRemoveNotify: () => name20,
  PKTPartyStatusEffectAddNotify: () => name21,
  PKTPartyStatusEffectRemoveNotify: () => name22,
  PKTPartyStatusEffectResultNotify: () => name23,
  PKTPassiveStatusEffectAddNotify: () => name24,
  PKTPassiveStatusEffectRemoveNotify: () => name25,
  PKTRaidBossKillNotify: () => name26,
  PKTRaidResult: () => name27,
  PKTRemoveObject: () => name28,
  PKTSkillDamageAbnormalMoveNotify: () => name29,
  PKTSkillDamageNotify: () => name30,
  PKTSkillStageNotify: () => name31,
  PKTSkillStartNotify: () => name32,
  PKTStatChangeOriginNotify: () => name33,
  PKTStatusEffectAddNotify: () => name34,
  PKTStatusEffectRemoveNotify: () => name35,
  PKTStatusEffectSyncDataNotify: () => name36,
  PKTTriggerBossBattleStatus: () => name37,
  PKTTriggerFinishNotify: () => name38,
  PKTTriggerStartNotify: () => name39,
  PKTTroopMemberUpdateMinNotify: () => name40
});
module.exports = __toCommonJS(names_exports);

// src/packets/generated/definitions/PKTAbilityChangeNotify.ts
var name = "PKTAbilityChangeNotify";

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
var name2 = "PKTActiveAbilityNotify";

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
var name3 = "PKTAddonSkillFeatureChangeNotify";

// src/packets/generated/definitions/PKTAuthTokenResult.ts
var name4 = "PKTAuthTokenResult";

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
var name5 = "PKTBlockSkillStateNotify";

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
var name6 = "PKTCounterAttackNotify";

// src/packets/generated/definitions/PKTDeathNotify.ts
var name7 = "PKTDeathNotify";

// src/packets/generated/definitions/PKTInitAbility.ts
var name8 = "PKTInitAbility";

// src/packets/generated/definitions/PKTInitEnv.ts
var name9 = "PKTInitEnv";

// src/packets/generated/definitions/PKTInitPC.ts
var name10 = "PKTInitPC";

// src/packets/generated/definitions/PKTInitLocal.ts
var name11 = "PKTInitLocal";

// src/packets/generated/definitions/PKTNewNpc.ts
var name12 = "PKTNewNpc";

// src/packets/generated/definitions/PKTNewNpcSummon.ts
var name13 = "PKTNewNpcSummon";

// src/packets/generated/definitions/PKTNewPC.ts
var name14 = "PKTNewPC";

// src/packets/generated/definitions/PKTNewProjectile.ts
var name15 = "PKTNewProjectile";

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
var name16 = "PKTParalyzationStateNotify";

// src/packets/generated/definitions/PKTPartyInfo.ts
var name17 = "PKTPartyInfo";

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
var name18 = "PKTPartyLeaveResult";

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
var name19 = "PKTPartyPassiveStatusEffectAddNotify";

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
var name20 = "PKTPartyPassiveStatusEffectRemoveNotify";

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
var name21 = "PKTPartyStatusEffectAddNotify";

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
var name22 = "PKTPartyStatusEffectRemoveNotify";

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
var name23 = "PKTPartyStatusEffectResultNotify";

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
var name24 = "PKTPassiveStatusEffectAddNotify";

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
var name25 = "PKTPassiveStatusEffectRemoveNotify";

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
var name26 = "PKTRaidBossKillNotify";

// src/packets/generated/definitions/PKTRaidResult.ts
var name27 = "PKTRaidResult";

// src/packets/generated/definitions/PKTRemoveObject.ts
var name28 = "PKTRemoveObject";

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
var name29 = "PKTSkillDamageAbnormalMoveNotify";

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
var name30 = "PKTSkillDamageNotify";

// src/packets/generated/definitions/PKTSkillStageNotify.ts
var name31 = "PKTSkillStageNotify";

// src/packets/generated/definitions/PKTSkillStartNotify.ts
var name32 = "PKTSkillStartNotify";

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
var name33 = "PKTStatChangeOriginNotify";

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
var name34 = "PKTStatusEffectAddNotify";

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
var name35 = "PKTStatusEffectRemoveNotify";

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
var name36 = "PKTStatusEffectSyncDataNotify";

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
var name37 = "PKTTriggerBossBattleStatus";

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
var name38 = "PKTTriggerFinishNotify";

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
var name39 = "PKTTriggerStartNotify";

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
var name40 = "PKTTroopMemberUpdateMinNotify";
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
