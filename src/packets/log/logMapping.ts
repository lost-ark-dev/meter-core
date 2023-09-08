import { logId } from "./logIds";
import * as names from "./names";
import * as reads from "./reads";
import * as writes from "./writes";
import type { Read, Write } from "../stream";
export const logMapping = new Map<
  number,
  [string, (reader: Read, version: number) => any, (writer: Write, data: any) => any]
>([
  [logId.AbilityChangeNotify, [names.AbilityChangeNotify, reads.AbilityChangeNotify, writes.AbilityChangeNotify]],
  [logId.ActiveAbilityNotify, [names.ActiveAbilityNotify, reads.ActiveAbilityNotify, writes.ActiveAbilityNotify]],
  [
    logId.AddonSkillFeatureChangeNotify,
    [names.AddonSkillFeatureChangeNotify, reads.AddonSkillFeatureChangeNotify, writes.AddonSkillFeatureChangeNotify],
  ],
  [
    logId.BlockSkillStateNotify,
    [names.BlockSkillStateNotify, reads.BlockSkillStateNotify, writes.BlockSkillStateNotify],
  ],
  [logId.CounterAttackNotify, [names.CounterAttackNotify, reads.CounterAttackNotify, writes.CounterAttackNotify]],
  [logId.DeathNotify, [names.DeathNotify, reads.DeathNotify, writes.DeathNotify]],
  [logId.InitAbility, [names.InitAbility, reads.InitAbility, writes.InitAbility]],
  [logId.InitEnv, [names.InitEnv, reads.InitEnv, writes.InitEnv]],
  [logId.InitPC, [names.InitPC, reads.InitPC, writes.InitPC]],
  [logId.InitLocal, [names.InitLocal, reads.InitLocal, writes.InitLocal]],
  [logId.MigrationExecute, [names.MigrationExecute, reads.MigrationExecute, writes.MigrationExecute]],
  [logId.NewNpc, [names.NewNpc, reads.NewNpc, writes.NewNpc]],
  [logId.NewNpcSummon, [names.NewNpcSummon, reads.NewNpcSummon, writes.NewNpcSummon]],
  [logId.NewPC, [names.NewPC, reads.NewPC, writes.NewPC]],
  [logId.NewProjectile, [names.NewProjectile, reads.NewProjectile, writes.NewProjectile]],
  [
    logId.ParalyzationStateNotify,
    [names.ParalyzationStateNotify, reads.ParalyzationStateNotify, writes.ParalyzationStateNotify],
  ],
  [logId.PartyInfo, [names.PartyInfo, reads.PartyInfo, writes.PartyInfo]],
  [logId.PartyLeaveResult, [names.PartyLeaveResult, reads.PartyLeaveResult, writes.PartyLeaveResult]],
  [
    logId.PartyPassiveStatusEffectAddNotify,
    [
      names.PartyPassiveStatusEffectAddNotify,
      reads.PartyPassiveStatusEffectAddNotify,
      writes.PartyPassiveStatusEffectAddNotify,
    ],
  ],
  [
    logId.PartyPassiveStatusEffectRemoveNotify,
    [
      names.PartyPassiveStatusEffectRemoveNotify,
      reads.PartyPassiveStatusEffectRemoveNotify,
      writes.PartyPassiveStatusEffectRemoveNotify,
    ],
  ],
  [
    logId.PartyStatusEffectAddNotify,
    [names.PartyStatusEffectAddNotify, reads.PartyStatusEffectAddNotify, writes.PartyStatusEffectAddNotify],
  ],
  [
    logId.PartyStatusEffectRemoveNotify,
    [names.PartyStatusEffectRemoveNotify, reads.PartyStatusEffectRemoveNotify, writes.PartyStatusEffectRemoveNotify],
  ],
  [
    logId.PartyStatusEffectResultNotify,
    [names.PartyStatusEffectResultNotify, reads.PartyStatusEffectResultNotify, writes.PartyStatusEffectResultNotify],
  ],
  [
    logId.PassiveStatusEffectAddNotify,
    [names.PassiveStatusEffectAddNotify, reads.PassiveStatusEffectAddNotify, writes.PassiveStatusEffectAddNotify],
  ],
  [
    logId.PassiveStatusEffectRemoveNotify,
    [
      names.PassiveStatusEffectRemoveNotify,
      reads.PassiveStatusEffectRemoveNotify,
      writes.PassiveStatusEffectRemoveNotify,
    ],
  ],
  [logId.RaidBossKillNotify, [names.RaidBossKillNotify, reads.RaidBossKillNotify, writes.RaidBossKillNotify]],
  [logId.RaidResult, [names.RaidResult, reads.RaidResult, writes.RaidResult]],
  [logId.RemoveObject, [names.RemoveObject, reads.RemoveObject, writes.RemoveObject]],
  [
    logId.SkillDamageAbnormalMoveNotify,
    [names.SkillDamageAbnormalMoveNotify, reads.SkillDamageAbnormalMoveNotify, writes.SkillDamageAbnormalMoveNotify],
  ],
  [logId.SkillDamageNotify, [names.SkillDamageNotify, reads.SkillDamageNotify, writes.SkillDamageNotify]],
  [logId.SkillStageNotify, [names.SkillStageNotify, reads.SkillStageNotify, writes.SkillStageNotify]],
  [logId.SkillStartNotify, [names.SkillStartNotify, reads.SkillStartNotify, writes.SkillStartNotify]],
  [
    logId.StatusEffectAddNotify,
    [names.StatusEffectAddNotify, reads.StatusEffectAddNotify, writes.StatusEffectAddNotify],
  ],
  [
    logId.StatusEffectRemoveNotify,
    [names.StatusEffectRemoveNotify, reads.StatusEffectRemoveNotify, writes.StatusEffectRemoveNotify],
  ],
  [
    logId.StatusEffectDurationNotify,
    [names.StatusEffectDurationNotify, reads.StatusEffectDurationNotify, writes.StatusEffectDurationNotify],
  ],
  [
    logId.StatusEffectSyncDataNotify,
    [names.StatusEffectSyncDataNotify, reads.StatusEffectSyncDataNotify, writes.StatusEffectSyncDataNotify],
  ],
  [
    logId.TriggerBossBattleStatus,
    [names.TriggerBossBattleStatus, reads.TriggerBossBattleStatus, writes.TriggerBossBattleStatus],
  ],
  [logId.TriggerFinishNotify, [names.TriggerFinishNotify, reads.TriggerFinishNotify, writes.TriggerFinishNotify]],
  [logId.TriggerStartNotify, [names.TriggerStartNotify, reads.TriggerStartNotify, writes.TriggerStartNotify]],
  [
    logId.TroopMemberUpdateMinNotify,
    [names.TroopMemberUpdateMinNotify, reads.TroopMemberUpdateMinNotify, writes.TroopMemberUpdateMinNotify],
  ],
  [
    logId.IdentityGaugeChangeNotify,
    [names.IdentityGaugeChangeNotify, reads.IdentityGaugeChangeNotify, writes.IdentityGaugeChangeNotify],
  ],
  [
    logId.ZoneObjectUnpublishNotify,
    [names.ZoneObjectUnpublishNotify, reads.ZoneObjectUnpublishNotify, writes.ZoneObjectUnpublishNotify],
  ],
  [
    logId.ZoneStatusEffectAddNotify,
    [names.ZoneStatusEffectAddNotify, reads.ZoneStatusEffectAddNotify, writes.ZoneStatusEffectAddNotify],
  ],
  [
    logId.ZoneStatusEffectRemoveNotify,
    [names.ZoneStatusEffectRemoveNotify, reads.ZoneStatusEffectRemoveNotify, writes.ZoneStatusEffectRemoveNotify],
  ],
  [logId.SkillCastNotify, [names.SkillCastNotify, reads.SkillCastNotify, writes.SkillCastNotify]],
  [
    logId.IdentityStanceChangeNotify,
    [names.IdentityStanceChangeNotify, reads.IdentityStanceChangeNotify, writes.IdentityStanceChangeNotify],
  ],
  [logId.EquipChangeNotify, [names.EquipChangeNotify, reads.EquipChangeNotify, writes.EquipChangeNotify]],
  [
    logId.EquipLifeToolChangeNotify,
    [names.EquipLifeToolChangeNotify, reads.EquipLifeToolChangeNotify, writes.EquipLifeToolChangeNotify],
  ],
  [logId.InitItem, [names.InitItem, reads.InitItem, writes.InitItem]],
  [logId.RaidBegin, [names.RaidBegin, reads.RaidBegin, writes.RaidBegin]],
  [
    logId.ZoneMemberLoadStatusNotify,
    [names.ZoneMemberLoadStatusNotify, reads.ZoneMemberLoadStatusNotify, writes.ZoneMemberLoadStatusNotify],
  ],
  [logId.NewTrap, [names.NewTrap, reads.NewTrap, writes.NewTrap]],

  [logId.APP_StatApi, [names.APP_StatApi, reads.APP_StatApi, writes.APP_StatApi]],
]);
