import {
  PacketBuffer
} from "../chunk-32GW4DAM.mjs";
import {
  PKT,
  Read,
  Write,
  mapping,
  opcode,
  opcode10,
  opcode11,
  opcode12,
  opcode13,
  opcode14,
  opcode15,
  opcode16,
  opcode17,
  opcode18,
  opcode19,
  opcode2,
  opcode20,
  opcode21,
  opcode22,
  opcode23,
  opcode24,
  opcode25,
  opcode26,
  opcode27,
  opcode28,
  opcode29,
  opcode3,
  opcode30,
  opcode31,
  opcode32,
  opcode33,
  opcode34,
  opcode35,
  opcode36,
  opcode37,
  opcode38,
  opcode39,
  opcode4,
  opcode40,
  opcode41,
  opcode42,
  opcode43,
  opcode44,
  opcode5,
  opcode6,
  opcode7,
  opcode8,
  opcode9,
  read,
  read2,
  read3,
  read4,
  read5,
  read6,
  read7,
  read8,
  write,
  write2,
  write3,
  write4,
  write5,
  write6,
  write7,
  write8
} from "../chunk-MRUX7QB3.mjs";
import "../chunk-NZTU4WRF.mjs";

// src/logger/logger.ts
import { TypedEmitter } from "tiny-typed-emitter";

// src/packets/log/structures/AbilityData.ts
function read9(reader, version2) {
  const data = {};
  data.Points = reader.u16();
  data.Id = reader.u32();
  data.Level = reader.u8();
  return data;
}
function write9(writer, data) {
  writer.u16(data.Points);
  writer.u32(data.Id);
  writer.u8(data.Level);
}

// src/packets/log/definitions/AbilityChangeNotify.ts
function read10(reader, version2) {
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read9(reader, version2), 100);
  return data;
}
function write10(writer, data) {
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write9(writer, obj);
  });
}
var logId = 0;
var name = "AbilityChangeNotify";

// src/packets/log/structures/ActiveAbility.ts
function read11(reader, version2) {
  const data = {};
  data.FeatureType = reader.u16();
  data.Level = reader.u32();
  return data;
}
function write11(writer, data) {
  writer.u16(data.FeatureType);
  writer.u32(data.Level);
}

// src/packets/log/definitions/ActiveAbilityNotify.ts
function read12(reader, version2) {
  const data = {};
  data.activeAbilityList = reader.array(reader.u16(), () => read11(reader, version2), 60);
  data.ObjectId = reader.u64();
  return data;
}
function write12(writer, data) {
  writer.array(data.activeAbilityList, { maxLen: 60, lenType: "u16" }, (obj) => {
    write11(writer, obj);
  });
  writer.u64(data.ObjectId);
}
var logId2 = 1;
var name2 = "ActiveAbilityNotify";

// src/packets/log/definitions/AddonSkillFeatureChangeNotify.ts
function read13(reader, version2) {
  const data = {};
  data.ObjectId = reader.u64();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const c = {};
      c.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      c.SkillId = reader.u32();
      return c;
    },
    200
  );
  return data;
}
function write13(writer, data) {
  writer.u64(data.ObjectId);
  writer.array(
    data.addonSkillFeatureList,
    { maxLen: 200, lenType: "u16" },
    (obj) => {
      writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2) => {
        writer.u32(obj2);
      });
      writer.u32(obj.SkillId);
    }
  );
}
var logId3 = 2;
var name3 = "AddonSkillFeatureChangeNotify";

// src/packets/log/definitions/BlockSkillStateNotify.ts
function read14(reader, version2) {
  const data = {};
  data.ParalyzationMaxPoint = reader.u32();
  data.Type = reader.u8();
  data.ObjectId = reader.u64();
  data.ParalyzationPoint = reader.u32();
  return data;
}
function write14(writer, data) {
  writer.u32(data.ParalyzationMaxPoint);
  writer.u8(data.Type);
  writer.u64(data.ObjectId);
  writer.u32(data.ParalyzationPoint);
}
var logId4 = 4;
var name4 = "BlockSkillStateNotify";

// src/packets/log/definitions/CounterAttackNotify.ts
function read15(reader, version2) {
  const data = {};
  data.SourceId = reader.u64();
  data.TargetId = reader.u64();
  data.Type = reader.u32();
  return data;
}
function write15(writer, data) {
  writer.u64(data.SourceId);
  writer.u64(data.TargetId);
  writer.u32(data.Type);
}
var logId5 = 5;
var name5 = "CounterAttackNotify";

// src/packets/log/definitions/DeathNotify.ts
function read16(reader, version2) {
  const data = {};
  data.SourceId = reader.u64();
  data.TargetId = reader.u64();
  return data;
}
function write16(writer, data) {
  writer.u64(data.SourceId);
  writer.u64(data.TargetId);
}
var logId6 = 6;
var name6 = "DeathNotify";

// src/packets/log/definitions/InitAbility.ts
function read17(reader, version2) {
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read9(reader, version2), 100);
  return data;
}
function write17(writer, data) {
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write9(writer, obj);
  });
}
var logId7 = 7;
var name7 = "InitAbility";

// src/packets/log/definitions/InitEnv.ts
function read18(reader, version2) {
  const data = {};
  data.PlayerId = reader.u64();
  return data;
}
function write18(writer, data) {
  writer.u64(data.PlayerId);
}
var logId8 = 8;
var name8 = "InitEnv";

// src/packets/log/structures/StatusEffectData.ts
function read19(reader, version2) {
  const data = {};
  data.SkillLevel = reader.u8();
  data.OccurTime = read(reader, version2);
  data.StatusEffectId = reader.u32();
  data.SourceId = reader.u64();
  data.TotalTime = reader.u32();
  data.EndTick = reader.u64();
  if (reader.bool())
    data.Value = reader.bytes(16);
  data.EffectInstanceId = reader.u32();
  return data;
}
function write19(writer, data) {
  writer.u8(data.SkillLevel);
  write(writer, data.OccurTime);
  writer.u32(data.StatusEffectId);
  writer.u64(data.SourceId);
  writer.u32(data.TotalTime);
  writer.u64(data.EndTick);
  if (writer.bool(data.Value !== void 0)) {
    writer.bytes(data.Value, { length: 16 });
  }
  writer.u32(data.EffectInstanceId);
}

// src/packets/log/definitions/InitPC.ts
function read20(reader, version2) {
  const data = {};
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const h = {};
      h.StatType = reader.u8();
      h.Value = read2(reader, version2);
      return h;
    },
    152
  );
  data.Name = reader.string(20);
  data.Level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => read19(reader, version2), 80);
  data.CharacterId = reader.u64();
  data.GearLevel = reader.u32();
  data.PlayerId = reader.u64();
  data.ClassId = reader.u16();
  return data;
}
function write20(writer, data) {
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.StatType);
    write2(writer, obj.Value);
  });
  writer.string(data.Name, 20);
  writer.u16(data.Level);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
  writer.u64(data.CharacterId);
  writer.u32(data.GearLevel);
  writer.u64(data.PlayerId);
  writer.u16(data.ClassId);
}
var logId9 = 9;
var name9 = "InitPC";

// src/packets/log/definitions/InitLocal.ts
function read21(reader, version2) {
  const data = {};
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const l = {};
      l.StatType = reader.u8();
      l.Value = read2(reader, version2);
      return l;
    },
    152
  );
  data.statusEffectDatas = reader.array(reader.u16(), () => read19(reader, version2), 80);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const n = {};
      n.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      n.SkillId = reader.u32();
      return n;
    },
    200
  );
  data.abilityDataList = reader.array(reader.u16(), () => read9(reader, version2), 100);
  return data;
}
function write21(writer, data) {
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.StatType);
    write2(writer, obj.Value);
  });
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
  writer.array(
    data.addonSkillFeatureList,
    { maxLen: 200, lenType: "u16" },
    (obj) => {
      writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2) => {
        writer.u32(obj2);
      });
      writer.u32(obj.SkillId);
    }
  );
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write9(writer, obj);
  });
}
var logId10 = 10;
var name10 = "InitLocal";

// src/packets/log/definitions/MigrationExecute.ts
function read22(reader, version2) {
  const data = {};
  data.Account_CharacterId1 = reader.u64();
  data.ServerAddr = reader.string(256);
  data.Account_CharacterId2 = reader.u64();
  return data;
}
function write22(writer, data) {
  writer.u64(data.Account_CharacterId1);
  writer.string(data.ServerAddr, 256);
  writer.u64(data.Account_CharacterId2);
}
var logId11 = 11;
var name11 = "MigrationExecute";

// src/packets/log/structures/NpcData.ts
function read23(reader, version2) {
  const data = {};
  data.SpawnIndex = reader.u32();
  data.ObjectId = reader.u64();
  if (reader.bool())
    data.TransitIndex = reader.u32();
  data.Position = read3(reader, version2);
  data.statusEffectDatas = reader.array(reader.u16(), () => read19(reader, version2), 80);
  data.DirectionYaw = read4(reader, version2);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const x = {};
      x.StatType = reader.u8();
      x.Value = read2(reader, version2);
      return x;
    },
    152
  );
  data.TypeId = reader.u32();
  return data;
}
function write23(writer, data) {
  writer.u32(data.SpawnIndex);
  writer.u64(data.ObjectId);
  if (writer.bool(data.TransitIndex !== void 0))
    writer.u32(data.TransitIndex);
  write3(writer, data.Position);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
  write4(writer, data.DirectionYaw);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.StatType);
    write2(writer, obj.Value);
  });
  writer.u32(data.TypeId);
}

// src/packets/log/definitions/NewNpc.ts
function read24(reader, version2) {
  const data = {};
  data.NpcStruct = read23(reader, version2);
  return data;
}
function write24(writer, data) {
  write23(writer, data.NpcStruct);
}
var logId12 = 12;
var name12 = "NewNpc";

// src/packets/log/definitions/NewNpcSummon.ts
function read25(reader, version2) {
  const data = {};
  data.PublishReason = reader.u8();
  data.OwnerId = reader.u64();
  data.NpcData = read23(reader, version2);
  return data;
}
function write25(writer, data) {
  writer.u8(data.PublishReason);
  writer.u64(data.OwnerId);
  write23(writer, data.NpcData);
}
var logId13 = 13;
var name13 = "NewNpcSummon";

// src/packets/log/structures/PCStruct.ts
function read26(reader, version2) {
  const data = {};
  data.GearLevel = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const z = {};
      z.StatType = reader.u8();
      z.Value = read2(reader, version2);
      return z;
    },
    152
  );
  data.Name = reader.string(20);
  data.Heading = read4(reader, version2);
  data.CharacterId = reader.u64();
  data.PlayerId = reader.u64();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const C = {};
      C.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      C.SkillId = reader.u32();
      return C;
    },
    200
  );
  data.ClassId = reader.u16();
  data.Level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => read19(reader, version2), 80);
  return data;
}
function write26(writer, data) {
  writer.u32(data.GearLevel);
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj) => {
    writer.u8(obj.StatType);
    write2(writer, obj.Value);
  });
  writer.string(data.Name, 20);
  write4(writer, data.Heading);
  writer.u64(data.CharacterId);
  writer.u64(data.PlayerId);
  writer.array(
    data.addonSkillFeatureList,
    { maxLen: 200, lenType: "u16" },
    (obj) => {
      writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2) => {
        writer.u32(obj2);
      });
      writer.u32(obj.SkillId);
    }
  );
  writer.u16(data.ClassId);
  writer.u16(data.Level);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
}

// src/packets/log/definitions/NewPC.ts
function read27(reader, version2) {
  const data = {};
  data.PCStruct = read26(reader, version2);
  return data;
}
function write27(writer, data) {
  write26(writer, data.PCStruct);
}
var logId14 = 14;
var name14 = "NewPC";

// src/packets/log/structures/ProjectileInfo.ts
function read28(reader, version2) {
  const data = {};
  data.tripodIndex = read5(reader, version2);
  data.ChainSkillEffect = reader.u32();
  data.SkillEffect = reader.u32();
  data.SkillId = reader.u32();
  data.TargetObjectId = reader.u64();
  data.OwnerId = reader.u64();
  data.SkillLevel = reader.u8();
  data.ProjectileId = reader.u64();
  data.tripodLevel = read6(reader, version2);
  return data;
}
function write28(writer, data) {
  write5(writer, data.tripodIndex);
  writer.u32(data.ChainSkillEffect);
  writer.u32(data.SkillEffect);
  writer.u32(data.SkillId);
  writer.u64(data.TargetObjectId);
  writer.u64(data.OwnerId);
  writer.u8(data.SkillLevel);
  writer.u64(data.ProjectileId);
  write6(writer, data.tripodLevel);
}

// src/packets/log/definitions/NewProjectile.ts
function read29(reader, version2) {
  const data = {};
  data.projectileInfo = read28(reader, version2);
  return data;
}
function write29(writer, data) {
  write28(writer, data.projectileInfo);
}
var logId15 = 15;
var name15 = "NewProjectile";

// src/packets/log/definitions/ParalyzationStateNotify.ts
function read30(reader, version2) {
  const data = {};
  data.Enable = reader.bool();
  data.ParalyzationPoint = reader.u32();
  data.DecreasePoint = reader.u32();
  data.ParalyzationMaxPoint = reader.u32();
  data.NoHitCheckTime = reader.u32();
  data.HitCheckTime = reader.u32();
  data.ObjectId = reader.u64();
  return data;
}
function write30(writer, data) {
  writer.bool(data.Enable);
  writer.u32(data.ParalyzationPoint);
  writer.u32(data.DecreasePoint);
  writer.u32(data.ParalyzationMaxPoint);
  writer.u32(data.NoHitCheckTime);
  writer.u32(data.HitCheckTime);
  writer.u64(data.ObjectId);
}
var logId16 = 16;
var name16 = "ParalyzationStateNotify";

// src/packets/log/structures/PartyMemberData.ts
function read31(reader, version2) {
  const data = {};
  data.MaxHp = read2(reader, version2);
  data.CharacterId = reader.u64();
  data.Position = read3(reader, version2);
  data.TransitIndex = reader.u32();
  data.CurHp = read2(reader, version2);
  data.CharacterLevel = reader.u16();
  data.GearLevel = reader.u32();
  data.ZoneId = reader.u32();
  data.PartyMemberNumber = reader.u8();
  data.Name = reader.string(20);
  data.ZoneInstId = reader.u64();
  data.WorldId = reader.u8();
  data.ClassId = reader.u16();
  data.Auths = reader.u8();
  return data;
}
function write31(writer, data) {
  write2(writer, data.MaxHp);
  writer.u64(data.CharacterId);
  write3(writer, data.Position);
  writer.u32(data.TransitIndex);
  write2(writer, data.CurHp);
  writer.u16(data.CharacterLevel);
  writer.u32(data.GearLevel);
  writer.u32(data.ZoneId);
  writer.u8(data.PartyMemberNumber);
  writer.string(data.Name, 20);
  writer.u64(data.ZoneInstId);
  writer.u8(data.WorldId);
  writer.u16(data.ClassId);
  writer.u8(data.Auths);
}

// src/packets/log/definitions/PartyInfo.ts
function read32(reader, version2) {
  const data = {};
  data.RaidInstanceId = reader.u32();
  data.LootGrade = reader.u32();
  data.PartyType = reader.u8();
  data.PartyInstanceId = reader.u32();
  data.PartyLootType = reader.u8();
  data.MemberDatas = reader.array(reader.u16(), () => read31(reader, version2), 40);
  return data;
}
function write32(writer, data) {
  writer.u32(data.RaidInstanceId);
  writer.u32(data.LootGrade);
  writer.u8(data.PartyType);
  writer.u32(data.PartyInstanceId);
  writer.u8(data.PartyLootType);
  writer.array(data.MemberDatas, { maxLen: 40, lenType: "u16" }, (obj) => {
    write31(writer, obj);
  });
}
var logId17 = 17;
var name17 = "PartyInfo";

// src/packets/log/definitions/PartyLeaveResult.ts
function read33(reader, version2) {
  const data = {};
  data.PartyLeaveType = reader.u8();
  data.PartyInstanceId = reader.u32();
  data.Name = reader.string(20);
  return data;
}
function write33(writer, data) {
  writer.u8(data.PartyLeaveType);
  writer.u32(data.PartyInstanceId);
  writer.string(data.Name, 20);
}
var logId18 = 18;
var name18 = "PartyLeaveResult";

// src/packets/log/definitions/PartyPassiveStatusEffectAddNotify.ts
function read34(reader, version2) {
  const data = {};
  data.ObjectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.Unk0_m = reader.u8();
  return data;
}
function write34(writer, data) {
  writer.u64(data.ObjectId);
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
  writer.u8(data.Unk0_m);
}
var logId19 = 19;
var name19 = "PartyPassiveStatusEffectAddNotify";

// src/packets/log/definitions/PartyPassiveStatusEffectRemoveNotify.ts
function read35(reader, version2) {
  const data = {};
  data.ObjectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write35(writer, data) {
  writer.u64(data.ObjectId);
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var logId20 = 20;
var name20 = "PartyPassiveStatusEffectRemoveNotify";

// src/packets/log/definitions/PartyStatusEffectAddNotify.ts
function read36(reader, version2) {
  const data = {};
  data.CharacterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read19(reader, version2), 80);
  data.PlayerIdOnRefresh = reader.u64();
  return data;
}
function write36(writer, data) {
  writer.u64(data.CharacterId);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
  writer.u64(data.PlayerIdOnRefresh);
}
var logId21 = 21;
var name21 = "PartyStatusEffectAddNotify";

// src/packets/log/definitions/PartyStatusEffectRemoveNotify.ts
function read37(reader, version2) {
  const data = {};
  data.CharacterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.Reason = reader.u8();
  return data;
}
function write37(writer, data) {
  writer.u64(data.CharacterId);
  writer.array(data.statusEffectIds, { maxLen: 80, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
  writer.u8(data.Reason);
}
var logId22 = 22;
var name22 = "PartyStatusEffectRemoveNotify";

// src/packets/log/definitions/PartyStatusEffectResultNotify.ts
function read38(reader, version2) {
  const data = {};
  data.PartyInstanceId = reader.u32();
  data.RaidInstanceId = reader.u32();
  data.CharacterId = reader.u64();
  return data;
}
function write38(writer, data) {
  writer.u32(data.PartyInstanceId);
  writer.u32(data.RaidInstanceId);
  writer.u64(data.CharacterId);
}
var logId23 = 23;
var name23 = "PartyStatusEffectResultNotify";

// src/packets/log/definitions/PassiveStatusEffectAddNotify.ts
function read39(reader, version2) {
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write39(writer, data) {
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var logId24 = 24;
var name24 = "PassiveStatusEffectAddNotify";

// src/packets/log/definitions/PassiveStatusEffectRemoveNotify.ts
function read40(reader, version2) {
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
function write40(writer, data) {
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
}
var logId25 = 25;
var name25 = "PassiveStatusEffectRemoveNotify";

// src/packets/log/definitions/RaidBossKillNotify.ts
function read41(reader, version2) {
  const data = {};
  return data;
}
function write41(writer, data) {
}
var logId26 = 26;
var name26 = "RaidBossKillNotify";

// src/packets/log/definitions/RaidResult.ts
function read42(reader, version2) {
  const data = {};
  return data;
}
function write42(writer, data) {
}
var logId27 = 27;
var name27 = "RaidResult";

// src/packets/log/structures/UnpublishObject.ts
function read43(reader, version2) {
  const data = {};
  data.UnpublishReason = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}
function write43(writer, data) {
  writer.u8(data.UnpublishReason);
  writer.u64(data.ObjectId);
}

// src/packets/log/definitions/RemoveObject.ts
function read44(reader, version2) {
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read43(reader, version2), 200);
  return data;
}
function write44(writer, data) {
  writer.array(data.unpublishedObjects, { maxLen: 200, lenType: "u16" }, (obj) => {
    write43(writer, obj);
  });
}
var logId28 = 28;
var name28 = "RemoveObject";

// src/packets/log/structures/SkillDamageEvent.ts
function read45(reader, version2) {
  const data = {};
  data.Modifier = reader.u8();
  data.TargetId = reader.u64();
  data.DamageType = reader.u8();
  if (reader.bool())
    data.DamageAttr = reader.u8();
  data.CurHp = read2(reader, version2);
  data.Unk3_m = reader.u16();
  data.MaxHp = read2(reader, version2);
  data.Damage = read2(reader, version2);
  return data;
}
function write45(writer, data) {
  writer.u8(data.Modifier);
  writer.u64(data.TargetId);
  writer.u8(data.DamageType);
  if (writer.bool(data.DamageAttr !== void 0))
    writer.u8(data.DamageAttr);
  write2(writer, data.CurHp);
  writer.u16(data.Unk3_m);
  write2(writer, data.MaxHp);
  write2(writer, data.Damage);
}

// src/packets/log/structures/SkillDamageAbnormalMoveEvent.ts
function read46(reader, version2) {
  const data = {};
  data.SkillMoveOptionData = read7(reader, version2);
  data.Destination = read3(reader, version2);
  data.Position = read3(reader, version2);
  data.skillDamageEvent = read45(reader, version2);
  return data;
}
function write46(writer, data) {
  write7(writer, data.SkillMoveOptionData);
  write3(writer, data.Destination);
  write3(writer, data.Position);
  write45(writer, data.skillDamageEvent);
}

// src/packets/log/definitions/SkillDamageAbnormalMoveNotify.ts
function read47(reader, version2) {
  const data = {};
  data.SkillId = reader.u32();
  data.SkillDamageAbnormalMoveEvents = reader.array(
    reader.u16(),
    () => read46(reader, version2),
    50
  );
  data.SkillEffectId = reader.u32();
  data.SourceId = reader.u64();
  return data;
}
function write47(writer, data) {
  writer.u32(data.SkillId);
  writer.array(
    data.SkillDamageAbnormalMoveEvents,
    { maxLen: 50, lenType: "u16" },
    (obj) => {
      write46(writer, obj);
    }
  );
  writer.u32(data.SkillEffectId);
  writer.u64(data.SourceId);
}
var logId29 = 29;
var name29 = "SkillDamageAbnormalMoveNotify";

// src/packets/log/definitions/SkillDamageNotify.ts
function read48(reader, version2) {
  const data = {};
  data.SkillLevel = reader.u8();
  data.SourceId = reader.u64();
  data.SkillId = reader.u32();
  data.SkillDamageEvents = reader.array(reader.u16(), () => read45(reader, version2), 50);
  data.SkillEffectId = reader.u32();
  return data;
}
function write48(writer, data) {
  writer.u8(data.SkillLevel);
  writer.u64(data.SourceId);
  writer.u32(data.SkillId);
  writer.array(data.SkillDamageEvents, { maxLen: 50, lenType: "u16" }, (obj) => {
    write45(writer, obj);
  });
  writer.u32(data.SkillEffectId);
}
var logId30 = 30;
var name30 = "SkillDamageNotify";

// src/packets/log/definitions/SkillStageNotify.ts
function read49(reader, version2) {
  const data = {};
  data.SourceId = reader.u64();
  data.SkillId = reader.u32();
  data.Stage = reader.u8();
  return data;
}
function write49(writer, data) {
  writer.u64(data.SourceId);
  writer.u32(data.SkillId);
  writer.u8(data.Stage);
}
var logId31 = 31;
var name31 = "SkillStageNotify";

// src/packets/log/definitions/SkillStartNotify.ts
function read50(reader, version2) {
  const data = {};
  data.SourceId = reader.u64();
  data.CurDirectionYaw = read4(reader, version2);
  data.NewDirectionYaw = read4(reader, version2);
  data.AimTargetPosition = read3(reader, version2);
  if (reader.bool())
    data.PitchRotation = read4(reader, version2);
  if (reader.bool())
    data.AiStateId = reader.u32();
  data.CurPosition = read3(reader, version2);
  if (reader.bool())
    data.Unk1_m = reader.u32();
  data.SkillLevel = reader.u8();
  data.NewPosition = read3(reader, version2);
  data.SkillId = reader.u32();
  data.SkillOptionData = read8(reader, version2);
  return data;
}
function write50(writer, data) {
  writer.u64(data.SourceId);
  write4(writer, data.CurDirectionYaw);
  write4(writer, data.NewDirectionYaw);
  write3(writer, data.AimTargetPosition);
  if (writer.bool(data.PitchRotation !== void 0))
    write4(writer, data.PitchRotation);
  if (writer.bool(data.AiStateId !== void 0))
    writer.u32(data.AiStateId);
  write3(writer, data.CurPosition);
  if (writer.bool(data.Unk1_m !== void 0))
    writer.u32(data.Unk1_m);
  writer.u8(data.SkillLevel);
  write3(writer, data.NewPosition);
  writer.u32(data.SkillId);
  write8(writer, data.SkillOptionData);
}
var logId32 = 32;
var name32 = "SkillStartNotify";

// src/packets/log/definitions/StatusEffectAddNotify.ts
function read51(reader, version2) {
  const data = {};
  data.statusEffectData = read19(reader, version2);
  data.ObjectId = reader.u64();
  data.New = reader.bool();
  return data;
}
function write51(writer, data) {
  write19(writer, data.statusEffectData);
  writer.u64(data.ObjectId);
  writer.bool(data.New);
}
var logId33 = 34;
var name33 = "StatusEffectAddNotify";

// src/packets/log/definitions/StatusEffectRemoveNotify.ts
function read52(reader, version2) {
  const data = {};
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.ObjectId = reader.u64();
  data.Reason = reader.u8();
  return data;
}
function write52(writer, data) {
  writer.array(data.statusEffectIds, { maxLen: 80, lenType: "u16" }, (obj) => {
    writer.u32(obj);
  });
  writer.u64(data.ObjectId);
  writer.u8(data.Reason);
}
var logId34 = 35;
var name34 = "StatusEffectRemoveNotify";

// src/packets/log/definitions/StatusEffectDurationNotify.ts
function read53(reader, version2) {
  const data = {};
  data.EffectInstanceId = reader.u32();
  data.TargetId = reader.u64();
  data.ExpirationTick = reader.u64();
  return data;
}
function write53(writer, data) {
  writer.u32(data.EffectInstanceId);
  writer.u64(data.TargetId);
  writer.u64(data.ExpirationTick);
}
var logId35 = 36;
var name35 = "StatusEffectDurationNotify";

// src/packets/log/definitions/StatusEffectSyncDataNotify.ts
function read54(reader, version2) {
  const data = {};
  data.ObjectId = reader.u64();
  data.EffectInstanceId = reader.u32();
  data.CharacterId = reader.u64();
  data.Value = reader.u32();
  return data;
}
function write54(writer, data) {
  writer.u64(data.ObjectId);
  writer.u32(data.EffectInstanceId);
  writer.u64(data.CharacterId);
  writer.u32(data.Value);
}
var logId36 = 37;
var name36 = "StatusEffectSyncDataNotify";

// src/packets/log/definitions/TriggerBossBattleStatus.ts
function read55(reader, version2) {
  const data = {};
  data.Step = reader.u32();
  data.Unk2_m = reader.bool();
  data.TriggerId = reader.u32();
  return data;
}
function write55(writer, data) {
  writer.u32(data.Step);
  writer.bool(data.Unk2_m);
  writer.u32(data.TriggerId);
}
var logId37 = 38;
var name37 = "TriggerBossBattleStatus";

// src/packets/log/definitions/TriggerFinishNotify.ts
function read56(reader, version2) {
  const data = {};
  data.PacketResultCode = reader.u32();
  data.TriggerId = reader.u32();
  data.Unk0_m = reader.u32();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
function write56(writer, data) {
  writer.u32(data.PacketResultCode);
  writer.u32(data.TriggerId);
  writer.u32(data.Unk0_m);
  writer.array(data.InvolvedPCs, { maxLen: 40, lenType: "u16" }, (obj) => {
    writer.u64(obj);
  });
}
var logId38 = 39;
var name38 = "TriggerFinishNotify";

// src/packets/log/definitions/TriggerStartNotify.ts
function read57(reader, version2) {
  const data = {};
  data.TriggerId = reader.u32();
  data.TriggerSignalType = reader.u32();
  data.SourceId = reader.u64();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
function write57(writer, data) {
  writer.u32(data.TriggerId);
  writer.u32(data.TriggerSignalType);
  writer.u64(data.SourceId);
  writer.array(data.InvolvedPCs, { maxLen: 40, lenType: "u16" }, (obj) => {
    writer.u64(obj);
  });
}
var logId39 = 40;
var name39 = "TriggerStartNotify";

// src/packets/log/definitions/TroopMemberUpdateMinNotify.ts
function read58(reader, version2) {
  const data = {};
  data.MaxHp = read2(reader, version2);
  data.CharacterId = reader.u64();
  data.Unk0_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read19(reader, version2), 80);
  data.Position = reader.u64();
  data.CurHp = read2(reader, version2);
  return data;
}
function write58(writer, data) {
  write2(writer, data.MaxHp);
  writer.u64(data.CharacterId);
  writer.u32(data.Unk0_m);
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj) => {
    write19(writer, obj);
  });
  writer.u64(data.Position);
  write2(writer, data.CurHp);
}
var logId40 = 41;
var name40 = "TroopMemberUpdateMinNotify";

// src/packets/log/definitions/IdentityGaugeChangeNotify.ts
function read59(reader, version2) {
  const data = {};
  data.IdentityGauge1 = reader.u32();
  data.IdentityGauge2 = reader.u32();
  data.IdentityGauge3 = reader.u32();
  data.PlayerId = reader.u64();
  return data;
}
function write59(writer, data) {
  writer.u32(data.IdentityGauge1);
  writer.u32(data.IdentityGauge2);
  writer.u32(data.IdentityGauge3);
  writer.u64(data.PlayerId);
}
var logId41 = 42;
var name41 = "IdentityGaugeChangeNotify";

// src/packets/log/definitions/ZoneObjectUnpublishNotify.ts
function read60(reader, version2) {
  const data = {};
  data.ObjectId = reader.u64();
  return data;
}
function write60(writer, data) {
  writer.u64(data.ObjectId);
}
var logId42 = 43;
var name42 = "ZoneObjectUnpublishNotify";

// src/packets/log/structures/ZoneStatusEffectData.ts
function read61(reader, version2) {
  const data = {};
  data.StackCount = reader.u8();
  data.Target = reader.u8();
  data.Id = reader.u32();
  return data;
}
function write61(writer, data) {
  writer.u8(data.StackCount);
  writer.u8(data.Target);
  writer.u32(data.Id);
}

// src/packets/log/definitions/ZoneStatusEffectAddNotify.ts
function read62(reader, version2) {
  const data = {};
  data.zoneStatusEffectDataList = reader.array(reader.u16(), () => read61(reader, version2), 4);
  return data;
}
function write62(writer, data) {
  writer.array(
    data.zoneStatusEffectDataList,
    { maxLen: 4, lenType: "u16" },
    (obj) => {
      write61(writer, obj);
    }
  );
}
var logId43 = 44;
var name43 = "ZoneStatusEffectAddNotify";

// src/packets/log/definitions/ZoneStatusEffectRemoveNotify.ts
function read63(reader, version2) {
  const data = {};
  data.StatusEffectId = reader.u32();
  return data;
}
function write63(writer, data) {
  writer.u32(data.StatusEffectId);
}
var logId44 = 45;
var name44 = "ZoneStatusEffectRemoveNotify";

// src/packets/log/codeMapping.ts
var codeMapping = /* @__PURE__ */ new Map([
  [opcode, [logId]],
  [opcode2, [logId2]],
  [opcode3, [logId3]],
  [opcode4, [logId4]],
  [opcode5, [logId5]],
  [opcode6, [logId6]],
  [opcode7, [logId7]],
  [opcode8, [logId8]],
  [opcode9, [logId9]],
  [opcode10, [logId10]],
  [opcode11, [logId11]],
  [opcode12, [logId12]],
  [opcode13, [logId13]],
  [opcode14, [logId14]],
  [opcode15, [logId15]],
  [opcode16, [logId16]],
  [opcode17, [logId17]],
  [opcode18, [logId18]],
  [opcode19, [logId19]],
  [opcode20, [logId20]],
  [opcode21, [logId21]],
  [opcode22, [logId22]],
  [opcode23, [logId23]],
  [opcode24, [logId24]],
  [opcode25, [logId25]],
  [opcode26, [logId26]],
  [opcode27, [logId27]],
  [opcode28, [logId28]],
  [opcode29, [logId29]],
  [opcode30, [logId30]],
  [opcode31, [logId31]],
  [opcode32, [logId32]],
  [opcode33, [logId33]],
  [opcode34, [logId34]],
  [opcode35, [logId35]],
  [opcode36, [logId36]],
  [opcode37, [logId37]],
  [opcode38, [logId38]],
  [opcode39, [logId39]],
  [opcode40, [logId40]],
  [opcode41, [logId41]],
  [opcode42, [logId42]],
  [opcode43, [logId43]],
  [opcode44, [logId44]]
]);

// src/packets/log/logMapping.ts
var logMapping = /* @__PURE__ */ new Map([
  [logId, [name, read10, write10]],
  [logId2, [name2, read12, write12]],
  [
    logId3,
    [name3, read13, write13]
  ],
  [
    logId4,
    [name4, read14, write14]
  ],
  [logId5, [name5, read15, write15]],
  [logId6, [name6, read16, write16]],
  [logId7, [name7, read17, write17]],
  [logId8, [name8, read18, write18]],
  [logId9, [name9, read20, write20]],
  [logId10, [name10, read21, write21]],
  [logId11, [name11, read22, write22]],
  [logId12, [name12, read24, write24]],
  [logId13, [name13, read25, write25]],
  [logId14, [name14, read27, write27]],
  [logId15, [name15, read29, write29]],
  [
    logId16,
    [name16, read30, write30]
  ],
  [logId17, [name17, read32, write32]],
  [logId18, [name18, read33, write33]],
  [
    logId19,
    [
      name19,
      read34,
      write34
    ]
  ],
  [
    logId20,
    [
      name20,
      read35,
      write35
    ]
  ],
  [
    logId21,
    [name21, read36, write36]
  ],
  [
    logId22,
    [name22, read37, write37]
  ],
  [
    logId23,
    [name23, read38, write38]
  ],
  [
    logId24,
    [name24, read39, write39]
  ],
  [
    logId25,
    [
      name25,
      read40,
      write40
    ]
  ],
  [logId26, [name26, read41, write41]],
  [logId27, [name27, read42, write42]],
  [logId28, [name28, read44, write44]],
  [
    logId29,
    [name29, read47, write47]
  ],
  [logId30, [name30, read48, write48]],
  [logId31, [name31, read49, write49]],
  [logId32, [name32, read50, write50]],
  [
    logId33,
    [name33, read51, write51]
  ],
  [
    logId34,
    [name34, read52, write52]
  ],
  [
    logId35,
    [name35, read53, write53]
  ],
  [
    logId36,
    [name36, read54, write54]
  ],
  [
    logId37,
    [name37, read55, write55]
  ],
  [logId38, [name38, read56, write56]],
  [logId39, [name39, read57, write57]],
  [
    logId40,
    [name40, read58, write58]
  ],
  [
    logId41,
    [name41, read59, write59]
  ],
  [
    logId42,
    [name42, read60, write60]
  ],
  [
    logId43,
    [name43, read62, write62]
  ],
  [
    logId44,
    [name44, read63, write63]
  ]
]);

// src/logger/logEvent.ts
var LogEvent = class {
  time;
  #logId;
  #data;
  #read;
  #write;
  constructor(...args) {
    if (args.length === 5) {
      const [data, logId45, time, read64, write64] = args;
      this.#data = data;
      this.time = time;
      this.#logId = logId45;
      this.#read = read64;
      this.#write = write64;
    } else if (args.length === 3) {
      const [pkt, logId45, write64] = args;
      this.#data = Buffer.alloc(0);
      this.time = new Date();
      this.#logId = logId45;
      this.#read = () => pkt;
      this.#write = write64;
    } else {
      throw new Error(`[meter-core/logger/parser] - LogEvent<T>: Invalid constructor arguments`);
    }
  }
  #readCached;
  get parsed() {
    if (!this.#readCached) {
      try {
        this.#readCached = this.#read(new Read(this.#data));
      } catch (e) {
        console.error(`[meter-core/logger/parser] - parsed - ${e}`);
        return void 0;
      }
    }
    return this.#readCached;
  }
  #writeCached;
  get serialized() {
    if (!this.#writeCached) {
      try {
        if (!this.parsed)
          return void 0;
        const writer = new Write();
        writer.skip(HEADER_FULL_SIZE);
        this.#write(writer, this.parsed);
        const buf = writer.value;
        buf.writeUint16LE(buf.length, HEADER_LEN_OFFSET);
        buf.writeUint16LE(this.#logId, HEADER_ID_OFFSET);
        buf.writeUintLE(+new Date(), HEADER_DATE_OFFSET, HEADER_DATE_SIZE);
        this.#writeCached = writer.value;
      } catch (e) {
        console.error(`[meter-core/logger/parser] - serialized - ${e}`);
        return void 0;
      }
    }
    return this.#writeCached;
  }
};
var HEADER_VERSION_SIZE = 6;
var HEADER_LEN_SIZE = 2;
var HEADER_LEN_OFFSET = 0;
var HEADER_ID_SIZE = 2;
var HEADER_ID_OFFSET = HEADER_LEN_OFFSET + HEADER_LEN_SIZE;
var HEADER_DATE_SIZE = 6;
var HEADER_DATE_OFFSET = HEADER_ID_OFFSET + HEADER_ID_SIZE;
var HEADER_FULL_SIZE = HEADER_LEN_SIZE + HEADER_ID_SIZE + HEADER_DATE_SIZE;

// src/logger/logger.ts
import { createWriteStream } from "fs";
import { createReadStream } from "fs";

// src/packets/log/version.ts
var version = 0;

// src/logger/logger.ts
var Logger = class extends TypedEmitter {
};
var LiveLogger = class extends Logger {
  #decompressor;
  #logWriter;
  constructor(stream, decompressor, filepath) {
    super();
    this.#decompressor = decompressor;
    if (filepath) {
      this.#logWriter = createWriteStream(filepath, { highWaterMark: 0 });
    }
    const versionBuffer = Buffer.allocUnsafe(HEADER_VERSION_SIZE);
    versionBuffer.writeUIntLE(version, 0, HEADER_VERSION_SIZE);
    this.#logWriter?.write(versionBuffer);
    stream.on("*", this.handlePkt.bind(this));
  }
  handlePkt(data, opcode45, compression, xor) {
    try {
      const pktMap = mapping.get(opcode45);
      const codeMap = codeMapping.get(opcode45);
      if (pktMap && codeMap) {
        const [logId45] = codeMap;
        const [pktName, readPkt] = pktMap;
        const logMap = logMapping.get(logId45);
        if (logMap) {
          const [logName, readLog, writeLog] = logMap;
          const pkt = new PKT(Buffer.from(data), opcode45, compression, Boolean(xor), this.#decompressor, readPkt);
          const parsed = pkt.parsed;
          if (!parsed)
            return;
          const logEvent = new LogEvent(parsed, logId45, writeLog);
          this.emit(logName, logEvent);
          this.emit("*", logName, logEvent);
          this.appendLog(logEvent);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  appendLog(logEvent) {
    if (this.#logWriter && logEvent.serialized)
      this.#logWriter.write(logEvent.serialized);
  }
};
var ReplayLogger = class extends Logger {
  readLogByChunk(filepath) {
    const pktBuffer = new PacketBuffer();
    const logReader = createReadStream(filepath);
    let end = false;
    let ver;
    logReader.on("data", (chunk) => {
      if (ver === void 0) {
        ver = this.readVersion(chunk);
        if (ver > version) {
          logReader.destroy();
          return;
        }
        chunk = chunk.subarray(HEADER_VERSION_SIZE);
      }
      pktBuffer.write(chunk);
      let pkt;
      while (pkt = pktBuffer.read()) {
        this.readLogChunk(pkt, ver);
      }
    }).on("end", () => {
      end = true;
      this.emit("fileEnd", "end");
    }).on("close", () => {
      if (!end)
        this.emit("fileEnd", "closed");
    });
  }
  readLogChunk(buf, version2) {
    try {
      if (buf.length < 8)
        return false;
      const logId45 = buf.readUIntLE(HEADER_ID_OFFSET, HEADER_ID_SIZE);
      const time = new Date(buf.readUintLE(HEADER_DATE_OFFSET, HEADER_DATE_SIZE));
      const data = buf.subarray(HEADER_FULL_SIZE);
      const logMap = logMapping.get(logId45);
      if (logMap) {
        const [logName, readLog, writeLog] = logMap;
        const logEvent = new LogEvent(data, logId45, new Date(time), (reader) => readLog(reader, version2), writeLog);
        this.emit(logName, logEvent);
        this.emit("*", logName, logEvent);
      }
    } catch (e) {
      console.error(e);
    }
  }
  readVersion(b) {
    return b.readUintLE(0, HEADER_VERSION_SIZE);
  }
};
export {
  LiveLogger,
  Logger,
  ReplayLogger
};
