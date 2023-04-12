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

// src/packets/generated/reads.ts
var reads_exports = {};
__export(reads_exports, {
  PKTAbilityChangeNotify: () => read2,
  PKTActiveAbilityNotify: () => read4,
  PKTAddonSkillFeatureChangeNotify: () => read5,
  PKTAuthTokenResult: () => read6,
  PKTBlockSkillStateNotify: () => read7,
  PKTCounterAttackNotify: () => read8,
  PKTDeathNotify: () => read9,
  PKTIdentityGaugeChangeNotify: () => read66,
  PKTInitAbility: () => read10,
  PKTInitEnv: () => read12,
  PKTInitLocal: () => read18,
  PKTInitPC: () => read16,
  PKTMigrationExecute: () => read19,
  PKTNewNpc: () => read25,
  PKTNewNpcSummon: () => read26,
  PKTNewPC: () => read29,
  PKTNewProjectile: () => read33,
  PKTParalyzationStateNotify: () => read34,
  PKTPartyInfo: () => read36,
  PKTPartyLeaveResult: () => read37,
  PKTPartyPassiveStatusEffectAddNotify: () => read38,
  PKTPartyPassiveStatusEffectRemoveNotify: () => read39,
  PKTPartyStatusEffectAddNotify: () => read40,
  PKTPartyStatusEffectRemoveNotify: () => read41,
  PKTPartyStatusEffectResultNotify: () => read42,
  PKTPassiveStatusEffectAddNotify: () => read43,
  PKTPassiveStatusEffectRemoveNotify: () => read44,
  PKTRaidBossKillNotify: () => read45,
  PKTRaidResult: () => read46,
  PKTRemoveObject: () => read48,
  PKTSkillDamageAbnormalMoveNotify: () => read52,
  PKTSkillDamageNotify: () => read53,
  PKTSkillStageNotify: () => read54,
  PKTSkillStartNotify: () => read56,
  PKTStatChangeOriginNotify: () => read57,
  PKTStatusEffectAddNotify: () => read58,
  PKTStatusEffectDurationNotify: () => read60,
  PKTStatusEffectRemoveNotify: () => read59,
  PKTStatusEffectSyncDataNotify: () => read61,
  PKTTriggerBossBattleStatus: () => read62,
  PKTTriggerFinishNotify: () => read63,
  PKTTriggerStartNotify: () => read64,
  PKTTroopMemberUpdateMinNotify: () => read65,
  PKTZoneObjectUnpublishNotify: () => read67,
  PKTZoneStatusEffectAddNotify: () => read69,
  PKTZoneStatusEffectRemoveNotify: () => read70
});
module.exports = __toCommonJS(reads_exports);

// src/packets/stream.ts
var Read = class {
  b;
  o;
  constructor(buf) {
    this.b = buf;
    this.o = 0;
  }
  skip(length = 0) {
    this.o += length;
  }
  bool() {
    return this.u8() === 1;
  }
  u8() {
    return this.b.readUint8(this.o++);
  }
  i8() {
    return this.b.readInt8(this.o++);
  }
  u16() {
    const value = this.b.readUint16LE(this.o);
    this.o += 2;
    return value;
  }
  i16() {
    const value = this.b.readInt16LE(this.o);
    this.o += 2;
    return value;
  }
  u32() {
    const value = this.b.readUint32LE(this.o);
    this.o += 4;
    return value;
  }
  i32() {
    const value = this.b.readInt32LE(this.o);
    this.o += 4;
    return value;
  }
  f32() {
    const value = this.b.readFloatLE(this.o);
    this.o += 4;
    return value;
  }
  u64() {
    const value = this.b.readBigUint64LE(this.o);
    this.o += 8;
    return value;
  }
  i64() {
    const value = this.b.readBigInt64LE(this.o);
    this.o += 8;
    return value;
  }
  string(maxLength) {
    let length = this.u16();
    if (length <= maxLength) {
      length = length * 2;
      const value = this.b.toString("utf16le", this.o, this.o + length);
      this.o += length;
      return value;
    }
    return "";
  }
  bytes(length = 0, maxLength, multiplier) {
    if (maxLength && length > maxLength)
      return Buffer.alloc(0);
    if (multiplier)
      length = length * multiplier;
    const value = Buffer.from(this.b.subarray(this.o, this.o + length));
    this.o += length;
    return value;
  }
  array(length, callbackfn, maxLength) {
    if (maxLength && length > maxLength)
      return [];
    return new Array(length).fill(void 0).map(callbackfn);
  }
};

// src/packets/generated/structures/AbilityData.ts
function read(reader) {
  const data = {};
  data.Points = reader.u16();
  data.Id = reader.u32();
  data.Level = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTAbilityChangeNotify.ts
function read2(buf) {
  const reader = new Read(buf);
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  return data;
}

// src/packets/generated/structures/ActiveAbility.ts
function read3(reader) {
  const data = {};
  data.FeatureType = reader.u16();
  data.Level = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
function read4(buf) {
  const reader = new Read(buf);
  const data = {};
  data.activeAbilityList = reader.array(reader.u16(), () => read3(reader), 60);
  data.ObjectId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
function read5(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.struct_117 = reader.bytes(reader.u16(), 200, 4);
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

// src/packets/generated/definitions/PKTAuthTokenResult.ts
function read6(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PacketResultCode = reader.u32();
  data.Unk1_m = reader.bytes(reader.u32(), 688);
  return data;
}

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
function read7(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.ParalyzationMaxPoint = reader.u32();
  data.Type = reader.u8();
  data.ObjectId = reader.u64();
  reader.skip(1);
  data.ParalyzationPoint = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
function read8(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.SourceId = reader.u64();
  data.Type = reader.u32();
  data.TargetId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTDeathNotify.ts
function read9(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SourceId = reader.u64();
  if (reader.bool())
    data.Unk1_0 = reader.u8();
  if (reader.bool())
    data.Unk2_0 = reader.u8();
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u8();
  if (reader.bool())
    data.Unk6_0 = reader.u8();
  data.TargetId = reader.u64();
  data.Unk8 = reader.u16();
  data.Unk9 = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTInitAbility.ts
function read10(buf) {
  const reader = new Read(buf);
  const data = {};
  data.struct_121 = reader.bytes(reader.u16(), 348, 48);
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  return data;
}

// src/packets/common/LostArkDateTime.ts
var daysInMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function IsLeapYear(y) {
  return !(y % 4 || !(y % 100) && y % 400);
}
function isValidDate(year, month, day) {
  if (year > 99) {
    if (year < 1752 || year == 1752 && (month < 9 || month == 9 && day << 14)) {
      return false;
    }
  } else {
    year += 1900;
  }
  return day > 0 && month <= 12 && (day <= daysInMonths[month] || day == 29 && month == 2 && IsLeapYear(year));
}
function bigintToDate(value) {
  let LODWORD = Number(value & 0xffffffffn);
  let HIDWORD = Number(value >> 32n & 0xffffffffn);
  let year = LODWORD & 4095;
  let month = (LODWORD & 65535) >> 12;
  let day = LODWORD >> 16 & 31;
  if (isValidDate(year, month, day)) {
  } else {
    year = month = day = 0;
  }
  let h = LODWORD >> 21 & 31;
  let m = LODWORD >> 26 & 63;
  let s = HIDWORD & 63;
  let ms = HIDWORD >> 6 & 16383;
  if (h < 24 && m < 60 && s < 60 && ms < 1e3) {
  } else {
    h = 24;
    m = s = ms = 0;
  }
  return new Date(Date.UTC(year <= 99 ? year + 1900 : year, month - 1, day, h, m, s, ms));
}
function read11(reader) {
  const s = reader.u16();
  if ((s & 4095) < 2079) {
    reader.o -= 2;
    return bigintToDate(reader.i64());
  } else {
    return bigintToDate(BigInt(s) & 0xfffn | 0x11000n);
  }
}

// src/packets/generated/definitions/PKTInitEnv.ts
function read12(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u32();
  data.PlayerId = reader.u64();
  data.lostArkDateTime = read11(reader);
  data.struct_542 = reader.string(128);
  data.Unk6 = reader.u64();
  data.struct_25 = reader.array(
    reader.u16(),
    () => {
      const g = {};
      g.struct_529 = reader.string(32);
      g.versionString = reader.string(64);
      g.struct_542 = reader.string(128);
      return g;
    },
    64
  );
  return data;
}

// src/packets/common/ReadNBytesInt64.ts
function bytesToInt64(value) {
  if (value.length === 0)
    return 0n;
  if (value.length > 8)
    throw new Error("Value is too large");
  const buf = Buffer.alloc(8);
  value.copy(buf);
  return buf.readBigInt64LE();
}
function read13(reader) {
  const flag = reader.u8();
  const bytes = reader.bytes(flag >> 1 & 7);
  const result = bytesToInt64(bytes) << 4n | BigInt(flag >> 4);
  return (flag & 1) === 0 ? result : -result;
}

// src/packets/generated/structures/StatusEffectData.ts
function read14(reader) {
  const data = {};
  data.SkillLevel = reader.u8();
  data.OccurTime = read11(reader);
  data.StatusEffectId = reader.u32();
  data.SourceId = reader.u64();
  if (reader.bool())
    data.Unk4_0 = reader.u64();
  data.TotalTime = reader.u32();
  data.EndTick = reader.u64();
  data.struct_420 = reader.bytes(reader.u16(), 8, 7);
  if (reader.bool())
    data.Value = reader.bytes(16);
  data.EffectInstanceId = reader.u32();
  data.Unk10 = reader.u8();
  return data;
}

// src/packets/generated/structures/Struct_676.ts
function read15(reader) {
  const data = {};
  data.Unk0 = read13(reader);
  data.Unk1 = read13(reader);
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTInitPC.ts
function read16(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u16();
  data.Unk1 = reader.u8();
  data.struct_314 = reader.bytes(reader.u16(), 104, 30);
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u16();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const h = {};
      h.StatType = reader.u8();
      h.Value = read13(reader);
      return h;
    },
    152
  );
  data.Unk7 = reader.u8();
  data.Unk8 = reader.u8();
  data.Unk9 = reader.bytes(116);
  data.Unk10 = reader.u32();
  data.Unk11 = reader.u32();
  data.Unk12 = reader.u8();
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u64();
  data.Unk15 = reader.u32();
  data.Unk16 = reader.u32();
  data.Unk17 = reader.u8();
  data.Unk18 = reader.u32();
  data.struct_91 = reader.bytes(reader.u16(), 57);
  data.Name = reader.string(20);
  data.Unk21 = reader.u32();
  data.Unk22 = reader.u8();
  data.Unk23 = reader.bytes(35);
  data.Unk24 = reader.u8();
  data.Unk25 = reader.u8();
  data.Unk26 = reader.u8();
  data.Unk27 = reader.u32();
  data.Unk28 = reader.u32();
  data.Unk29 = reader.u8();
  if (reader.bool())
    data.Unk30_0 = reader.u32();
  data.Unk31 = reader.u64();
  data.Unk32 = reader.u8();
  data.struct_338 = reader.string(7);
  data.Unk34 = reader.u8();
  data.Unk35 = reader.u16();
  data.Unk36 = reader.u8();
  data.Level = reader.u16();
  data.Unk38 = reader.u16();
  data.Unk39 = reader.u32();
  data.Unk40 = reader.u64();
  data.Unk41 = reader.u8();
  data.Unk42 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  data.Unk44 = reader.u8();
  data.Unk45 = reader.bytes(25);
  data.CharacterId = reader.u64();
  data.GearLevel = reader.u32();
  data.Unk48 = reader.u8();
  data.Unk49 = reader.u64();
  data.struct_211 = reader.bytes(reader.u16(), 3, 17);
  data.Unk51 = reader.u32();
  data.PlayerId = reader.u64();
  data.Unk53 = reader.u32();
  data.Unk54 = reader.u8();
  data.struct_363 = reader.array(reader.u16(), () => read15(reader), 5);
  data.ClassId = reader.u16();
  return data;
}

// src/packets/generated/structures/Struct_693.ts
function read17(reader) {
  const data = {};
  if (reader.bool())
    data.Unk0_0 = reader.u32();
  data.Unk1 = reader.u32();
  if (reader.bool())
    data.Unk2_0 = reader.bytes(9);
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTInitLocal.ts
function read18(buf) {
  const reader = new Read(buf);
  const data = {};
  data.struct_314 = reader.bytes(reader.u16(), 104, 30);
  data.Unk1 = reader.u32();
  if (reader.bool())
    data.Unk2_0 = reader.u32();
  data.struct_117 = reader.bytes(reader.u16(), 200, 4);
  data.struct_396 = reader.array(reader.u16(), () => read17(reader), 300);
  data.Unk5 = reader.u8();
  data.Unk6 = reader.u64();
  data.struct_211 = reader.bytes(reader.u16(), 3, 17);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const l = {};
      l.StatType = reader.u8();
      l.Value = read13(reader);
      return l;
    },
    152
  );
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u64();
  data.Unk11 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
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
  data.struct_121 = reader.bytes(reader.u16(), 348, 48);
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  return data;
}

// src/packets/generated/definitions/PKTMigrationExecute.ts
function read19(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Account_CharacterId1 = reader.u64();
  data.ServerAddr = reader.string(256);
  data.Account_CharacterId2 = reader.u64();
  data.Unk3 = reader.u32();
  return data;
}

// src/packets/generated/structures/Struct_638.ts
function read20(reader) {
  const data = {};
  data.Unk0 = reader.u16();
  data.lostArkDateTime = read11(reader);
  data.Unk2 = reader.u16();
  data.Unk3 = reader.u32();
  data.struct_426 = reader.bytes(reader.u16(), 3, 14);
  if (reader.bool())
    data.Unk5_0 = reader.u8();
  return data;
}

// src/packets/generated/structures/Struct_673.ts
function read21(reader) {
  const data = {};
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u16();
  data.lostArkString = reader.string(20);
  data.Unk4 = reader.u64();
  data.struct_84 = reader.bytes(reader.u32(), 512);
  data.Unk6 = reader.u8();
  data.struct_293 = reader.array(reader.u16(), () => read20(reader), 32);
  return data;
}

// src/packets/common/Vector3F.ts
function i21(n) {
  if (n >> 20 === 1)
    return -((~n >>> 0) + 1 & 2097151);
  return n;
}
function read22(reader) {
  let b = reader.u64();
  return {
    x: i21(Number(b & 0x1fffffn)),
    y: i21(Number(b >> 21n & 0x1fffffn)),
    z: i21(Number(b >> 42n & 0x1fffffn))
  };
}

// src/packets/common/Angle.ts
function read23(reader) {
  return reader.u16() * (2 * Math.PI) / 65536;
}

// src/packets/generated/structures/NpcData.ts
function read24(reader) {
  const data = {};
  data.Unk0 = reader.u16();
  if (reader.bool())
    data.Unk1_0 = reader.u8();
  data.Unk2 = reader.u8();
  data.SpawnIndex = reader.i32();
  if (reader.bool())
    data.struct_247 = reader.bytes(reader.u16(), 12, 12);
  data.ObjectId = reader.u64();
  data.Unk6 = reader.u8();
  if (reader.bool())
    data.Unk7_0 = reader.u8();
  if (reader.bool())
    data.TransitIndex = reader.u32();
  if (reader.bool())
    data.Unk9_0 = reader.u8();
  data.Unk10 = reader.u8();
  data.Unk11 = reader.u8();
  data.Position = read22(reader);
  data.struct_363 = reader.array(reader.u16(), () => read15(reader), 5);
  if (reader.bool())
    data.Unk14_0 = reader.u16();
  if (reader.bool())
    data.Unk15_0 = reader.u16();
  if (reader.bool())
    data.Unk16_0 = reader.u64();
  data.Unk17 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  if (reader.bool())
    data.Unk19_0 = reader.u32();
  if (reader.bool())
    data.Unk20_0 = reader.u32();
  data.Unk21 = reader.u8();
  if (reader.bool())
    data.Unk22_0 = reader.u32();
  if (reader.bool())
    data.Unk23_0 = reader.u32();
  data.DirectionYaw = read23(reader);
  if (reader.bool())
    data.struct_673 = read21(reader);
  if (reader.bool())
    data.Unk26_0 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const x = {};
      x.StatType = reader.u8();
      x.Value = read13(reader);
      return x;
    },
    152
  );
  if (reader.bool())
    data.struct_310 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool())
    data.Unk29_0 = reader.u8();
  data.TypeId = reader.u32();
  if (reader.bool())
    data.Unk31_0 = reader.u8();
  if (reader.bool())
    data.Unk32_0 = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTNewNpc.ts
function read25(buf) {
  const reader = new Read(buf);
  const data = {};
  data.NpcStruct = read24(reader);
  data.Unk1 = reader.u8();
  if (reader.bool()) {
    data.Unk0_0 = reader.string(20);
    data.Unk0_1 = reader.string(20);
  }
  if (reader.bool())
    data.Unk3_0 = reader.u64();
  if (reader.bool())
    data.Unk4_0 = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTNewNpcSummon.ts
function read26(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PublishReason = reader.u8();
  reader.skip(18);
  data.OwnerId = reader.u64();
  reader.skip(13);
  data.NpcData = read24(reader);
  return data;
}

// src/packets/generated/structures/PCStruct.ts
function read27(reader) {
  const data = {};
  data.Unk0 = reader.u16();
  data.Unk1 = reader.u8();
  data.GearLevel = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const z = {};
      z.StatType = reader.u8();
      z.Value = read13(reader);
      return z;
    },
    152
  );
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u64();
  data.Name = reader.string(20);
  data.Unk7 = reader.bytes(5);
  data.Heading = read23(reader);
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u8();
  data.CharacterId = reader.u64();
  data.Unk12 = reader.u32();
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u8();
  data.Unk15 = reader.string(20);
  data.struct_363 = reader.array(reader.u16(), () => read15(reader), 5);
  data.Unk5_m = reader.u32();
  data.Unk18 = reader.u32();
  data.Unk19 = reader.u8();
  data.PlayerId = reader.u64();
  data.struct_293 = reader.array(reader.u16(), () => read20(reader), 32);
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
  data.Unk23 = reader.bytes(25);
  data.Unk24 = reader.u8();
  data.Unk25 = reader.u32();
  data.Unk26 = reader.u8();
  data.ClassId = reader.u16();
  data.Unk28 = reader.u8();
  data.Unk29 = reader.u32();
  data.Unk30 = reader.u32();
  data.Unk31 = reader.u8();
  data.struct_292 = reader.array(reader.u16(), () => read20(reader), 9);
  data.Level = reader.u16();
  data.Unk34 = reader.u16();
  data.Unk35 = reader.u8();
  data.struct_117 = reader.bytes(reader.u16(), 200, 4);
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  data.Unk38 = reader.u32();
  data.Unk39 = reader.u32();
  data.Unk40 = reader.u32();
  data.struct_84 = reader.bytes(reader.u32(), 512);
  if (reader.bool())
    data.Unk42_0 = reader.bytes(12);
  data.Unk43 = reader.u8();
  data.Unk44 = reader.u16();
  return data;
}

// src/packets/generated/structures/TrackMoveInfo.ts
function read28(reader) {
  const data = {};
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u32();
  if (reader.bool())
    data.Unk2_0 = reader.bytes(12);
  data.Unk3 = reader.bytes(12);
  return data;
}

// src/packets/generated/definitions/PKTNewPC.ts
function read29(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.Unk3_0_m = reader.u32();
  data.PCStruct = read27(reader);
  data.Unk0_m = reader.u8();
  if (reader.bool())
    data.TrackMoveInfo = read28(reader);
  data.Unk2_m = reader.u8();
  if (reader.bool())
    data.Unk4_0_m = reader.bytes(12);
  if (reader.bool())
    data.Unk5_0_m = reader.bytes(20);
  return data;
}

// src/packets/common/TripodIndex.ts
function read30(reader) {
  return {
    first: reader.u8(),
    second: reader.u8(),
    third: reader.u8()
  };
}

// src/packets/common/TripodLevel.ts
function read31(reader) {
  return {
    first: reader.u16(),
    second: reader.u16(),
    third: reader.u16()
  };
}

// src/packets/generated/structures/ProjectileInfo.ts
function read32(reader) {
  const data = {};
  data.Unk0 = reader.u32();
  data.tripodIndex = read30(reader);
  data.ChainSkillEffect = reader.u32();
  if (reader.bool())
    data.struct_310 = reader.bytes(reader.u16(), 11, 9);
  data.Unk4 = reader.u8();
  if (reader.bool())
    data.Unk5_0 = reader.u64();
  data.Unk6 = reader.u16();
  data.Unk7 = reader.u64();
  data.Unk8 = reader.u8();
  data.SkillEffect = reader.u32();
  data.Unk10 = reader.u64();
  data.Unk11 = reader.u32();
  data.SkillId = reader.u32();
  data.TargetObjectId = reader.u64();
  data.Unk14 = reader.u16();
  data.OwnerId = reader.u64();
  data.SkillLevel = reader.u8();
  if (reader.bool())
    data.Unk17_0 = reader.u32();
  data.Unk18 = reader.u32();
  data.ProjectileId = reader.u64();
  data.tripodLevel = read31(reader);
  return data;
}

// src/packets/generated/definitions/PKTNewProjectile.ts
function read33(buf) {
  const reader = new Read(buf);
  const data = {};
  data.projectileInfo = read32(reader);
  return data;
}

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
function read34(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Enable = reader.bool();
  data.ParalyzationPoint = reader.u32();
  data.DecreasePoint = reader.u32();
  reader.skip(1);
  data.ParalyzationMaxPoint = reader.u32();
  data.NoHitCheckTime = reader.u32();
  data.HitCheckTime = reader.u32();
  data.ObjectId = reader.u64();
  reader.skip(1);
  return data;
}

// src/packets/generated/structures/PartyMemberData.ts
function read35(reader) {
  const data = {};
  data.MaxHp = read13(reader);
  data.Unk1 = reader.u8();
  data.CharacterId = reader.u64();
  data.Position = read22(reader);
  data.TransitIndex = reader.u32();
  data.CurHp = read13(reader);
  data.Unk6 = reader.u8();
  data.CharacterLevel = reader.u16();
  data.GearLevel = reader.u32();
  data.ZoneId = reader.u32();
  data.Unk10 = reader.u8();
  data.Unk11 = reader.u8();
  data.PartyMemberNumber = reader.u8();
  data.Name = reader.string(20);
  data.Unk14 = reader.u16();
  data.ZoneInstId = reader.u64();
  data.WorldId = reader.u8();
  data.ClassId = reader.u16();
  data.Unk18 = reader.u8();
  data.Auths = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTPartyInfo.ts
function read36(buf) {
  const reader = new Read(buf);
  const data = {};
  data.RaidInstanceId = reader.u32();
  data.LootGrade = reader.u32();
  data.PartyType = reader.u8();
  data.PartyInstanceId = reader.u32();
  data.PartyLootType = reader.u8();
  data.MemberDatas = reader.array(reader.u16(), () => read35(reader), 40);
  return data;
}

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
function read37(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PartyLeaveType = reader.u8();
  data.PartyInstanceId = reader.u32();
  data.Name = reader.string(20);
  return data;
}

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
function read38(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.Unk0_m = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
function read39(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
function read40(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u64();
  data.CharacterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  data.Unk3 = reader.u8();
  data.PlayerIdOnRefresh = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
function read41(buf) {
  const reader = new Read(buf);
  const data = {};
  data.CharacterId = reader.u64();
  data.Unk1 = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.Unk3 = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
function read42(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.PartyInstanceId = reader.u32();
  reader.skip(13);
  data.RaidInstanceId = reader.u32();
  reader.skip(12);
  data.CharacterId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
function read43(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
function read44(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
function read45(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.bytes(5);
  return data;
}

// src/packets/generated/definitions/PKTRaidResult.ts
function read46(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u64();
  data.Unk1 = reader.u64();
  data.struct_44 = reader.array(
    reader.u16(),
    () => {
      const O = {};
      O.Unk0_0_0 = read13(reader);
      O.Unk0_0_1 = reader.u32();
      O.struct_494 = reader.bytes(reader.u16(), 3);
      O.Unk0_0_3 = read13(reader);
      return O;
    },
    3
  );
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u8();
  data.Unk7 = reader.u64();
  return data;
}

// src/packets/generated/structures/UnpublishObject.ts
function read47(reader) {
  const data = {};
  data.UnpublishReason = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTRemoveObject.ts
function read48(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read47(reader), 200);
  return data;
}

// src/packets/common/SkillMoveOptionData.ts
function read49(reader) {
  const data = {};
  const flag = reader.u8();
  if (flag & 1)
    data.MoveTime = reader.u32();
  if (flag & 2)
    data.StandUpTime = reader.u32();
  if (flag & 4)
    data.DownTime = reader.u32();
  if (flag & 8)
    data.FreezeTime = reader.u32();
  if (flag & 16)
    data.MoveHeight = reader.u32();
  if (flag & 32)
    data.FarmostDist = reader.u32();
  if (flag & 64)
    data.flag40 = reader.bytes(reader.u16(), 6);
  return data;
}

// src/packets/generated/structures/SkillDamageEvent.ts
function read50(reader) {
  const data = {};
  data.Modifier = reader.u8();
  data.TargetId = reader.u64();
  data.DamageType = reader.u8();
  if (reader.bool())
    data.DamageAttr = reader.u8();
  data.CurHp = read13(reader);
  data.Unk3_m = reader.i16();
  data.MaxHp = read13(reader);
  data.Damage = read13(reader);
  return data;
}

// src/packets/generated/structures/SkillDamageAbnormalMoveEvent.ts
function read51(reader) {
  const data = {};
  data.Unk1_m = reader.u8();
  data.Unk2_m = reader.u64();
  data.Unk4_m = reader.u16();
  data.SkillMoveOptionData = read49(reader);
  data.Destination = read22(reader);
  data.Position = read22(reader);
  data.Unk8_m = reader.u16();
  data.skillDamageEvent = read50(reader);
  data.Unk3_m = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
function read52(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SkillId = reader.u32();
  data.Unk2_m = reader.u32();
  data.Unk1_m = reader.u8();
  data.SkillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => read51(reader), 50);
  data.SkillEffectId = reader.u32();
  data.SourceId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
function read53(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SkillLevel = reader.u8();
  data.SourceId = reader.u64();
  data.SkillId = reader.u32();
  data.SkillDamageEvents = reader.array(reader.u16(), () => read50(reader), 50);
  data.SkillEffectId = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTSkillStageNotify.ts
function read54(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(28);
  data.SourceId = reader.u64();
  data.SkillId = reader.u32();
  reader.skip(13);
  data.Stage = reader.u8();
  return data;
}

// src/packets/common/SkillOptionData.ts
function read55(reader) {
  const data = {};
  const flag = reader.u8();
  if (flag & 1)
    data.LayerIndex = reader.u8();
  if (flag & 2)
    data.StartStageIndex = reader.u8();
  if (flag & 4)
    data.TransitIndex = reader.u32();
  if (flag & 8)
    data.StageStartTime = reader.u32();
  if (flag & 16)
    data.FarmostDistance = reader.u32();
  if (flag & 32)
    data.TripodIndex = read30(reader);
  if (flag & 64)
    data.TripodLevel = read31(reader);
  return data;
}

// src/packets/generated/definitions/PKTSkillStartNotify.ts
function read56(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SourceId = reader.u64();
  data.CurDirectionYaw = read23(reader);
  data.NewDirectionYaw = read23(reader);
  data.AimTargetPosition = read22(reader);
  if (reader.bool())
    data.PitchRotation = read23(reader);
  if (reader.bool())
    data.AiStateId = reader.u32();
  data.CurPosition = read22(reader);
  if (reader.bool())
    data.Unk1_m = reader.i32();
  data.SkillLevel = reader.u8();
  data.NewPosition = read22(reader);
  data.SkillId = reader.u32();
  data.SkillOptionData = read55(reader);
  return data;
}

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
function read57(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.array(
    reader.u16(),
    () => {
      const S = {};
      S.StatType = reader.u8();
      S.Value = read13(reader);
      return S;
    },
    152
  );
  data.Unk1 = reader.array(
    reader.u16(),
    () => {
      const T = {};
      T.StatType = reader.u8();
      T.Value = read13(reader);
      return T;
    },
    152
  );
  if (reader.bool())
    data.Unk2_0 = reader.u32();
  data.Unk3 = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
function read58(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectData = read14(reader);
  data.ObjectId = reader.u64();
  data.New = reader.bool();
  data.Unk3 = reader.u64();
  if (reader.bool())
    data.Unk4_0 = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
function read59(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.ObjectId = reader.u64();
  data.Reason = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTStatusEffectDurationNotify.ts
function read60(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.EffectInstanceId = reader.u32();
  data.TargetId = reader.u64();
  data.ExpirationTick = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
function read61(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  reader.skip(1);
  data.EffectInstanceId = reader.u32();
  data.CharacterId = reader.u64();
  data.Value = reader.u32();
  reader.skip(5);
  return data;
}

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
function read62(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.Step = reader.u32();
  reader.skip(1);
  data.Unk2_m = reader.bool();
  data.TriggerId = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
function read63(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PacketResultCode = reader.u32();
  data.TriggerId = reader.u32();
  data.Unk0_m = reader.u32();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
function read64(buf) {
  const reader = new Read(buf);
  const data = {};
  data.TriggerId = reader.u32();
  data.TriggerSignalType = reader.u32();
  data.SourceId = reader.u64();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
function read65(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = read13(reader);
  data.Unk1 = reader.u64();
  data.Unk0_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  data.Unk4 = reader.u64();
  data.Unk5 = read13(reader);
  return data;
}

// src/packets/generated/definitions/PKTIdentityGaugeChangeNotify.ts
function read66(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.IdentityGauge1 = reader.i32();
  data.IdentityGauge2 = reader.i32();
  data.IdentityGauge3 = reader.i32();
  reader.skip(1);
  data.PlayerId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTZoneObjectUnpublishNotify.ts
function read67(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  reader.skip(2);
  return data;
}

// src/packets/generated/structures/ZoneStatusEffectData.ts
function read68(reader) {
  const data = {};
  data.StackCount = reader.u8();
  data.Target = reader.u8();
  reader.skip(4);
  reader.skip(4);
  data.Id = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTZoneStatusEffectAddNotify.ts
function read69(buf) {
  const reader = new Read(buf);
  const data = {};
  data.zoneStatusEffectDataList = reader.array(reader.u16(), () => read68(reader), 4);
  return data;
}

// src/packets/generated/definitions/PKTZoneStatusEffectRemoveNotify.ts
function read70(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.StatusEffectId = reader.u32();
  reader.skip(1);
  return data;
}
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
