"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name47 in all)
    __defProp(target, name47, { get: all[name47], enumerable: true });
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
  PKTIdentityGaugeChangeNotify: () => name43,
  PKTInitAbility: () => name8,
  PKTInitEnv: () => name9,
  PKTInitLocal: () => name11,
  PKTInitPC: () => name10,
  PKTMigrationExecute: () => name12,
  PKTNewNpc: () => name13,
  PKTNewNpcSummon: () => name14,
  PKTNewPC: () => name15,
  PKTNewProjectile: () => name16,
  PKTParalyzationStateNotify: () => name17,
  PKTPartyInfo: () => name18,
  PKTPartyLeaveResult: () => name19,
  PKTPartyPassiveStatusEffectAddNotify: () => name20,
  PKTPartyPassiveStatusEffectRemoveNotify: () => name21,
  PKTPartyStatusEffectAddNotify: () => name22,
  PKTPartyStatusEffectRemoveNotify: () => name23,
  PKTPartyStatusEffectResultNotify: () => name24,
  PKTPassiveStatusEffectAddNotify: () => name25,
  PKTPassiveStatusEffectRemoveNotify: () => name26,
  PKTRaidBossKillNotify: () => name27,
  PKTRaidResult: () => name28,
  PKTRemoveObject: () => name29,
  PKTSkillDamageAbnormalMoveNotify: () => name30,
  PKTSkillDamageNotify: () => name31,
  PKTSkillStageNotify: () => name32,
  PKTSkillStartNotify: () => name33,
  PKTStatChangeOriginNotify: () => name34,
  PKTStatusEffectAddNotify: () => name35,
  PKTStatusEffectDurationNotify: () => name37,
  PKTStatusEffectRemoveNotify: () => name36,
  PKTStatusEffectSyncDataNotify: () => name38,
  PKTTriggerBossBattleStatus: () => name39,
  PKTTriggerFinishNotify: () => name40,
  PKTTriggerStartNotify: () => name41,
  PKTTroopMemberUpdateMinNotify: () => name42,
  PKTZoneObjectUnpublishNotify: () => name44,
  PKTZoneStatusEffectAddNotify: () => name45,
  PKTZoneStatusEffectRemoveNotify: () => name46
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

// src/packets/generated/definitions/PKTMigrationExecute.ts
var name12 = "PKTMigrationExecute";

// src/packets/generated/definitions/PKTNewNpc.ts
var name13 = "PKTNewNpc";

// src/packets/generated/definitions/PKTNewNpcSummon.ts
var name14 = "PKTNewNpcSummon";

// src/packets/generated/definitions/PKTNewPC.ts
var name15 = "PKTNewPC";

// src/packets/generated/definitions/PKTNewProjectile.ts
var name16 = "PKTNewProjectile";

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
var name17 = "PKTParalyzationStateNotify";

// src/packets/generated/definitions/PKTPartyInfo.ts
var name18 = "PKTPartyInfo";

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
var name19 = "PKTPartyLeaveResult";

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
var name20 = "PKTPartyPassiveStatusEffectAddNotify";

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
var name21 = "PKTPartyPassiveStatusEffectRemoveNotify";

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
var name22 = "PKTPartyStatusEffectAddNotify";

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
var name23 = "PKTPartyStatusEffectRemoveNotify";

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
var name24 = "PKTPartyStatusEffectResultNotify";

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
var name25 = "PKTPassiveStatusEffectAddNotify";

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
var name26 = "PKTPassiveStatusEffectRemoveNotify";

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
var name27 = "PKTRaidBossKillNotify";

// src/packets/generated/definitions/PKTRaidResult.ts
var name28 = "PKTRaidResult";

// src/packets/generated/definitions/PKTRemoveObject.ts
var name29 = "PKTRemoveObject";

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
var name30 = "PKTSkillDamageAbnormalMoveNotify";

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
var name31 = "PKTSkillDamageNotify";

// src/packets/generated/definitions/PKTSkillStageNotify.ts
var name32 = "PKTSkillStageNotify";

// src/packets/generated/definitions/PKTSkillStartNotify.ts
var name33 = "PKTSkillStartNotify";

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
var name34 = "PKTStatChangeOriginNotify";

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
var name35 = "PKTStatusEffectAddNotify";

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
var name36 = "PKTStatusEffectRemoveNotify";

// src/packets/generated/definitions/PKTStatusEffectDurationNotify.ts
var name37 = "PKTStatusEffectDurationNotify";

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
var name38 = "PKTStatusEffectSyncDataNotify";

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
var name39 = "PKTTriggerBossBattleStatus";

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
var name40 = "PKTTriggerFinishNotify";

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
var name41 = "PKTTriggerStartNotify";

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
var name42 = "PKTTroopMemberUpdateMinNotify";

// src/packets/generated/definitions/PKTIdentityGaugeChangeNotify.ts
var name43 = "PKTIdentityGaugeChangeNotify";

// src/packets/generated/definitions/PKTZoneObjectUnpublishNotify.ts
var name44 = "PKTZoneObjectUnpublishNotify";

// src/packets/generated/definitions/PKTZoneStatusEffectAddNotify.ts
var name45 = "PKTZoneStatusEffectAddNotify";

// src/packets/generated/definitions/PKTZoneStatusEffectRemoveNotify.ts
var name46 = "PKTZoneStatusEffectRemoveNotify";
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
