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
  PKTInitAbility: () => read10,
  PKTInitEnv: () => read12,
  PKTInitLocal: () => read18,
  PKTInitPC: () => read16,
  PKTNewNpc: () => read24,
  PKTNewNpcSummon: () => read25,
  PKTNewPC: () => read28,
  PKTNewProjectile: () => read32,
  PKTParalyzationStateNotify: () => read33,
  PKTPartyInfo: () => read35,
  PKTPartyLeaveResult: () => read36,
  PKTPartyPassiveStatusEffectAddNotify: () => read37,
  PKTPartyPassiveStatusEffectRemoveNotify: () => read38,
  PKTPartyStatusEffectAddNotify: () => read39,
  PKTPartyStatusEffectRemoveNotify: () => read40,
  PKTPartyStatusEffectResultNotify: () => read41,
  PKTPassiveStatusEffectAddNotify: () => read42,
  PKTPassiveStatusEffectRemoveNotify: () => read43,
  PKTRaidBossKillNotify: () => read44,
  PKTRaidResult: () => read45,
  PKTRemoveObject: () => read47,
  PKTSkillDamageAbnormalMoveNotify: () => read51,
  PKTSkillDamageNotify: () => read52,
  PKTSkillStageNotify: () => read53,
  PKTSkillStartNotify: () => read55,
  PKTStatChangeOriginNotify: () => read56,
  PKTStatusEffectAddNotify: () => read57,
  PKTStatusEffectRemoveNotify: () => read58,
  PKTStatusEffectSyncDataNotify: () => read59,
  PKTTriggerBossBattleStatus: () => read60,
  PKTTriggerFinishNotify: () => read61,
  PKTTriggerStartNotify: () => read62,
  PKTTroopMemberUpdateMinNotify: () => read63
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
  data.Level = reader.u32();
  data.FeatureType = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTActiveAbilityNotify.ts
function read4(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.activeAbilityList = reader.array(reader.u16(), () => read3(reader), 60);
  return data;
}

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
function read5(buf) {
  const reader = new Read(buf);
  const data = {};
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
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
  data.ObjectId = reader.u64();
  data.ParalyzationPoint = reader.u32();
  reader.skip(1);
  data.Type = reader.u8();
  data.ParalyzationMaxPoint = reader.u32();
  reader.skip(2);
  return data;
}

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
function read8(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.SourceId = reader.u64();
  data.TargetId = reader.u64();
  data.Type = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTDeathNotify.ts
function read9(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.Unk0_0 = reader.u8();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u16();
  if (reader.bool())
    data.Unk5_0 = reader.u8();
  data.Unk6 = reader.u8();
  data.SourceId = reader.u64();
  data.TargetId = reader.u64();
  if (reader.bool())
    data.Unk9_0 = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTInitAbility.ts
function read10(buf) {
  const reader = new Read(buf);
  const data = {};
  data.struct_125 = reader.bytes(reader.u16(), 346, 48);
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
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u64();
  data.Unk2 = reader.u32();
  data.struct_542 = reader.string(128);
  data.PlayerId = reader.u64();
  data.lostArkDateTime = read11(reader);
  data.Unk6 = reader.u8();
  data.struct_27 = reader.array(
    reader.u16(),
    () => {
      const g = {};
      g.struct_530 = reader.string(32);
      g.versionString = reader.string(64);
      g.struct_542 = reader.string(128);
      return g;
    },
    64
  );
  return data;
}

// src/packets/generated/structures/StatusEffectData.ts
function read13(reader) {
  const data = {};
  if (reader.bool())
    data.Unk0_0 = reader.u64();
  data.SkillLevel = reader.u8();
  if (reader.bool())
    data.Value = reader.bytes(16);
  data.lostArkDateTime = read11(reader);
  data.StatusEffectId = reader.u32();
  data.struct_423 = reader.bytes(reader.u16(), 8, 7);
  data.EffectInstanceId = reader.u32();
  data.SourceId = reader.u64();
  data.Unk8 = reader.u32();
  data.Unk9 = reader.u8();
  data.InstanceId = reader.u64();
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
function read14(reader) {
  const flag = reader.u8();
  const bytes = reader.bytes(flag >> 1 & 7);
  const result = bytesToInt64(bytes) << 4n | BigInt(flag >> 4);
  return (flag & 1) === 0 ? result : -result;
}

// src/packets/generated/structures/Struct_674.ts
function read15(reader) {
  const data = {};
  data.Unk0 = reader.u8();
  data.Unk1 = read14(reader);
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u16();
  data.Unk5 = read14(reader);
  data.Unk6 = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTInitPC.ts
function read16(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader), 80);
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u32();
  data.GearLevel = reader.u32();
  data.Unk5 = reader.u32();
  data.Unk6 = reader.u8();
  data.Name = reader.string(20);
  data.Unk8 = reader.u8();
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u32();
  data.Unk11 = reader.u16();
  data.Unk12 = reader.bytes(35);
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u32();
  data.Unk15 = reader.u64();
  data.struct_372 = reader.array(reader.u16(), () => read15(reader), 5);
  data.Unk17 = reader.u32();
  data.Unk18 = reader.u8();
  data.Unk19 = reader.u32();
  data.Unk20 = reader.u32();
  data.Unk21 = reader.u8();
  data.Unk22 = reader.u32();
  if (reader.bool())
    data.Unk23_0 = reader.u32();
  data.struct_93 = reader.bytes(reader.u16(), 57);
  data.Unk25 = reader.u8();
  data.Unk26 = reader.u8();
  data.Unk27 = reader.u8();
  data.Unk28 = reader.u64();
  data.struct_218 = reader.bytes(reader.u16(), 3, 17);
  data.CharacterId = reader.u64();
  data.Unk31 = reader.u8();
  data.Unk32 = reader.u8();
  data.Level = reader.u16();
  data.Unk34 = reader.u8();
  data.Unk35 = reader.u8();
  data.Unk36 = reader.u8();
  data.Unk37 = reader.u8();
  data.PlayerId = reader.u64();
  data.Unk39 = reader.u32();
  data.Unk40 = reader.u16();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const j = {};
      j.StatType = reader.u8();
      j.Value = read14(reader);
      return j;
    },
    152
  );
  data.Unk42 = reader.u8();
  data.struct_323 = reader.bytes(reader.u16(), 104, 30);
  data.Unk44 = reader.u64();
  data.Unk45 = reader.u32();
  data.Unk46 = reader.u32();
  data.Unk47 = reader.bytes(25);
  data.Unk48 = reader.u8();
  data.Unk49 = reader.bytes(112);
  data.Unk50 = reader.u64();
  data.struct_349 = reader.string(7);
  data.ClassId = reader.u16();
  data.Unk53 = reader.u16();
  data.Unk54 = reader.u8();
  data.Unk55 = reader.u16();
  data.Unk56 = reader.u32();
  return data;
}

// src/packets/generated/structures/Struct_691.ts
function read17(reader) {
  const data = {};
  if (reader.bool())
    data.Unk0_0 = reader.bytes(9);
  data.Unk1 = reader.u32();
  if (reader.bool())
    data.Unk2_0 = reader.u32();
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTInitLocal.ts
function read18(buf) {
  const reader = new Read(buf);
  const data = {};
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const k = {};
      k.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      k.SkillId = reader.u32();
      return k;
    },
    200
  );
  if (reader.bool())
    data.Unk1_0 = reader.u32();
  data.struct_323 = reader.bytes(reader.u16(), 104, 30);
  data.Unk3 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader), 80);
  data.Unk5 = reader.u64();
  data.struct_125 = reader.bytes(reader.u16(), 346, 48);
  data.Unk7 = reader.u8();
  data.Unk8 = reader.u8();
  data.Unk9 = reader.u64();
  data.struct_218 = reader.bytes(reader.u16(), 3, 17);
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.Unk12 = reader.u32();
  data.struct_403 = reader.array(reader.u16(), () => read17(reader), 300);
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const q = {};
      q.StatType = reader.u8();
      q.Value = read14(reader);
      return q;
    },
    152
  );
  return data;
}

// src/packets/generated/structures/Struct_636.ts
function read19(reader) {
  const data = {};
  if (reader.bool())
    data.Unk0_0 = reader.u8();
  data.Unk1 = reader.u16();
  data.lostArkDateTime = read11(reader);
  data.struct_429 = reader.bytes(reader.u16(), 3, 14);
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u16();
  return data;
}

// src/packets/generated/structures/Struct_671.ts
function read20(reader) {
  const data = {};
  data.Unk0 = reader.u8();
  data.struct_300 = reader.array(reader.u16(), () => read19(reader), 30);
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u16();
  data.lostArkString = reader.string(20);
  data.struct_86 = reader.bytes(reader.u32(), 512);
  data.Unk7 = reader.u64();
  return data;
}

// src/packets/common/Vector3F.ts
function i21(n) {
  if (n >> 20 === 1)
    return -((~n >>> 0) + 1 & 2097151);
  return n;
}
function read21(reader) {
  let b = reader.u64();
  return {
    x: i21(Number(b & 0x1fffffn)),
    y: i21(Number(b >> 21n & 0x1fffffn)),
    z: i21(Number(b >> 42n & 0x1fffffn))
  };
}

// src/packets/common/Angle.ts
function read22(reader) {
  return reader.u16() * (2 * Math.PI) / 65536;
}

// src/packets/generated/structures/NpcData.ts
function read23(reader) {
  const data = {};
  if (reader.bool())
    data.Unk0_0 = reader.u8();
  if (reader.bool())
    data.Unk1_0 = reader.u16();
  data.Unk2 = reader.u8();
  if (reader.bool())
    data.struct_253 = reader.bytes(reader.u16(), 12, 12);
  data.struct_372 = reader.array(reader.u16(), () => read15(reader), 5);
  data.SpawnIndex = reader.i32();
  if (reader.bool())
    data.Unk6_0 = reader.u32();
  data.Unk7 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const w = {};
      w.StatType = reader.u8();
      w.Value = read14(reader);
      return w;
    },
    152
  );
  if (reader.bool())
    data.Unk9_0 = reader.u16();
  if (reader.bool())
    data.struct_318 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool())
    data.Unk11_0 = reader.u8();
  if (reader.bool())
    data.struct_671 = read20(reader);
  if (reader.bool())
    data.Unk13_0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader), 80);
  if (reader.bool())
    data.Unk15_0 = reader.u32();
  data.Unk16 = reader.u8();
  data.Position = read21(reader);
  if (reader.bool())
    data.Unk18_0 = reader.u64();
  if (reader.bool())
    data.Unk19_0 = reader.u8();
  if (reader.bool())
    data.Unk20_0 = reader.u8();
  data.Unk21 = reader.u8();
  if (reader.bool())
    data.Unk22_0 = reader.u8();
  data.Unk23 = reader.u8();
  if (reader.bool())
    data.Unk24_0 = reader.u32();
  if (reader.bool())
    data.TransitIndex = reader.u32();
  data.Unk26 = reader.u8();
  if (reader.bool())
    data.Unk27_0 = reader.u32();
  data.DirectionYaw = read22(reader);
  if (reader.bool())
    data.Unk29_0 = reader.u8();
  data.Unk30 = reader.u16();
  data.ObjectId = reader.u64();
  data.TypeId = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTNewNpc.ts
function read24(buf) {
  const reader = new Read(buf);
  const data = {};
  data.NpcStruct = read23(reader);
  data.Unk1 = reader.u8();
  if (reader.bool())
    data.Unk2_0 = reader.u64();
  if (reader.bool())
    data.Unk3_0 = reader.u8();
  if (reader.bool()) {
    data.Unk0_0 = reader.string(20);
    data.Unk0_1 = reader.string(20);
  }
  return data;
}

// src/packets/generated/definitions/PKTNewNpcSummon.ts
function read25(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(5);
  data.OwnerId = reader.u64();
  reader.skip(26);
  data.PublishReason = reader.u8();
  data.NpcData = read23(reader);
  return data;
}

// src/packets/generated/structures/PCStruct.ts
function read26(reader) {
  const data = {};
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u8();
  data.Unk5_m = reader.u32();
  if (reader.bool())
    data.Unk3_0 = reader.bytes(12);
  data.Unk4 = reader.u16();
  data.struct_300 = reader.array(reader.u16(), () => read19(reader), 30);
  data.Unk6 = reader.bytes(25);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const A = {};
      A.StatType = reader.u8();
      A.Value = read14(reader);
      return A;
    },
    152
  );
  data.Name = reader.string(20);
  data.CharacterId = reader.u64();
  data.Unk10 = reader.u16();
  data.Unk11 = reader.bytes(5);
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.Heading = read22(reader);
  data.Unk14 = reader.u8();
  data.Unk15 = reader.u32();
  data.Unk16 = reader.u8();
  data.struct_299 = reader.array(reader.u16(), () => read19(reader), 9);
  data.ClassId = reader.u16();
  data.Unk19 = reader.u32();
  data.Unk20 = reader.string(20);
  data.Unk21 = reader.u32();
  data.Unk22 = reader.u8();
  data.PlayerId = reader.u64();
  data.Unk24 = reader.u32();
  data.Unk25 = reader.u8();
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
  data.Unk27 = reader.u32();
  data.Unk28 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader), 80);
  data.Unk30 = reader.u8();
  data.Unk31 = reader.u32();
  data.Unk32 = reader.u8();
  data.GearLevel = reader.u32();
  data.Unk34 = reader.u64();
  data.Unk35 = reader.u8();
  data.Unk36 = reader.u16();
  data.Unk37 = reader.u8();
  data.struct_86 = reader.bytes(reader.u32(), 512);
  data.struct_372 = reader.array(reader.u16(), () => read15(reader), 5);
  data.Level = reader.u16();
  data.Unk41 = reader.u32();
  data.Unk42 = reader.u8();
  data.Unk43 = reader.u32();
  return data;
}

// src/packets/generated/structures/TrackMoveInfo.ts
function read27(reader) {
  const data = {};
  data.Unk0 = reader.u32();
  data.Unk1 = reader.bytes(12);
  data.Unk2 = reader.u32();
  if (reader.bool())
    data.Unk3_0 = reader.bytes(12);
  return data;
}

// src/packets/generated/definitions/PKTNewPC.ts
function read28(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.Unk5_0_m = reader.bytes(20);
  if (reader.bool())
    data.Unk4_0_m = reader.bytes(12);
  data.Unk2_m = reader.u8();
  data.Unk0_m = reader.u8();
  data.PCStruct = read26(reader);
  if (reader.bool())
    data.TrackMoveInfo = read27(reader);
  if (reader.bool())
    data.Unk3_0_m = reader.u32();
  return data;
}

// src/packets/common/TripodIndex.ts
function read29(reader) {
  return {
    first: reader.u8(),
    second: reader.u8(),
    third: reader.u8()
  };
}

// src/packets/common/TripodLevel.ts
function read30(reader) {
  return {
    first: reader.u16(),
    second: reader.u16(),
    third: reader.u16()
  };
}

// src/packets/generated/structures/ProjectileInfo.ts
function read31(reader) {
  const data = {};
  data.SkillEffect = reader.u32();
  data.ProjectileId = reader.u64();
  if (reader.bool())
    data.Unk2_0 = reader.u64();
  data.tripodIndex = read29(reader);
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u32();
  data.Unk6 = reader.u8();
  data.SkillLevel = reader.u8();
  data.Unk8 = reader.u64();
  data.Unk9 = reader.u8();
  data.OwnerId = reader.u64();
  data.Unk11 = reader.u64();
  data.Unk12 = reader.u64();
  data.tripodLevel = read30(reader);
  data.Unk14 = reader.u16();
  if (reader.bool())
    data.Unk15_0 = reader.u32();
  if (reader.bool())
    data.struct_318 = reader.bytes(reader.u16(), 11, 9);
  data.Unk17 = reader.u32();
  data.SkillId = reader.u32();
  data.Unk19 = reader.u16();
  data.Unk20 = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTNewProjectile.ts
function read32(buf) {
  const reader = new Read(buf);
  const data = {};
  data.projectileInfo = read31(reader);
  return data;
}

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
function read33(buf) {
  const reader = new Read(buf);
  const data = {};
  data.HitCheckTime = reader.u32();
  reader.skip(1);
  data.ParalyzationMaxPoint = reader.u32();
  data.Enable = reader.bool();
  data.DecreasePoint = reader.u32();
  reader.skip(1);
  data.ObjectId = reader.u64();
  data.ParalyzationPoint = reader.u32();
  data.NoHitCheckTime = reader.u32();
  return data;
}

// src/packets/generated/structures/PartyMemberData.ts
function read34(reader) {
  const data = {};
  data.Unk0 = reader.u32();
  data.Unk1 = read14(reader);
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u8();
  data.CharacterLevel = reader.u16();
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u8();
  data.Unk7 = reader.u32();
  data.Unk8 = reader.u8();
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u16();
  data.Unk11 = reader.u32();
  data.Unk12 = reader.u8();
  data.Name = reader.string(20);
  data.Unk14 = reader.u16();
  data.CharacterId = reader.u64();
  data.Unk16 = reader.u64();
  data.Unk17 = read14(reader);
  data.Unk18 = reader.u8();
  data.PartyMemberNumber = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTPartyInfo.ts
function read35(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PartyLootType = reader.u8();
  data.RaidInstanceId = reader.u32();
  data.LootGrade = reader.u32();
  data.MemberDatas = reader.array(reader.u16(), () => read34(reader), 40);
  data.PartyInstanceId = reader.u32();
  data.PartyType = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
function read36(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Name = reader.string(20);
  data.PartyInstanceId = reader.u32();
  data.PartyLeaveType = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
function read37(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.Unk0_m = reader.u8();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
function read38(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.ObjectId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
function read39(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PlayerIdOnRefresh = reader.u64();
  data.CharacterId = reader.u64();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader), 80);
  return data;
}

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
function read40(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u8();
  data.CharacterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.Unk3 = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
function read41(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(12);
  data.RaidInstanceId = reader.u32();
  reader.skip(13);
  data.PartyInstanceId = reader.u32();
  reader.skip(2);
  data.CharacterId = reader.u64();
  reader.skip(1);
  return data;
}

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
function read42(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
function read43(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
function read44(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.bytes(7);
  return data;
}

// src/packets/generated/definitions/PKTRaidResult.ts
function read45(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u64();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.struct_45 = reader.array(
    reader.u16(),
    () => {
      const O = {};
      O.Unk0_0_0 = read14(reader);
      O.Unk0_0_1 = read14(reader);
      O.struct_495 = reader.bytes(reader.u16(), 3);
      O.Unk0_0_3 = reader.u32();
      return O;
    },
    3
  );
  data.Unk5 = reader.u8();
  data.Unk6 = reader.u64();
  data.Unk7 = reader.u64();
  return data;
}

// src/packets/generated/structures/UnpublishObject.ts
function read46(reader) {
  const data = {};
  data.ObjectId = reader.u64();
  data.UnpublishReason = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTRemoveObject.ts
function read47(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read46(reader), 200);
  return data;
}

// src/packets/common/SkillMoveOptionData.ts
function read48(reader) {
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
function read49(reader) {
  const data = {};
  data.Unk3_m = reader.i16();
  data.CurHp = read14(reader);
  data.Damage = read14(reader);
  if (reader.bool())
    data.DamageAttr = reader.u8();
  data.DamageType = reader.u8();
  data.Modifier = reader.u8();
  data.TargetId = reader.u64();
  data.MaxHp = read14(reader);
  return data;
}

// src/packets/generated/structures/SkillDamageAbnormalMoveEvent.ts
function read50(reader) {
  const data = {};
  data.Unk1_m = reader.u8();
  data.Unk2_m = reader.u64();
  data.SkillMoveOptionData = read48(reader);
  data.Unk4_m = reader.u16();
  data.Unk8_m = reader.u16();
  data.Destination = read21(reader);
  data.Unk3_m = reader.u16();
  data.Position = read21(reader);
  data.skillDamageEvent = read49(reader);
  return data;
}

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
function read51(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk1_m = reader.u8();
  data.SourceId = reader.u64();
  data.Unk2_m = reader.u32();
  data.SkillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => read50(reader), 50);
  data.SkillId = reader.u32();
  data.SkillEffectId = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
function read52(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SkillId = reader.u32();
  data.SkillLevel = reader.u8();
  data.SkillEffectId = reader.u32();
  data.SkillDamageEvents = reader.array(reader.u16(), () => read49(reader), 50);
  data.SourceId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTSkillStageNotify.ts
function read53(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SkillId = reader.u32();
  data.SourceId = reader.u64();
  reader.skip(33);
  data.Stage = reader.u8();
  reader.skip(6);
  return data;
}

// src/packets/common/SkillOptionData.ts
function read54(reader) {
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
    data.TripodIndex = read29(reader);
  if (flag & 64)
    data.TripodLevel = read30(reader);
  return data;
}

// src/packets/generated/definitions/PKTSkillStartNotify.ts
function read55(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SourceId = reader.u64();
  data.CurPosition = read21(reader);
  if (reader.bool())
    data.Unk1_m = reader.i32();
  data.NewPosition = read21(reader);
  data.CurDirectionYaw = read22(reader);
  data.AimTargetPosition = read21(reader);
  if (reader.bool())
    data.AiStateId = reader.u32();
  data.SkillLevel = reader.u8();
  data.SkillId = reader.u32();
  data.NewDirectionYaw = read22(reader);
  data.SkillOptionData = read54(reader);
  if (reader.bool())
    data.PitchRotation = read22(reader);
  return data;
}

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
function read56(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  if (reader.bool())
    data.Unk1_0 = reader.u32();
  data.Unk2 = reader.array(
    reader.u16(),
    () => {
      const S = {};
      S.StatType = reader.u8();
      S.Value = read14(reader);
      return S;
    },
    152
  );
  data.Unk3 = reader.u8();
  data.Unk4 = reader.array(
    reader.u16(),
    () => {
      const T = {};
      T.StatType = reader.u8();
      T.Value = read14(reader);
      return T;
    },
    152
  );
  return data;
}

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
function read57(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  if (reader.bool())
    data.Unk1_0 = reader.u64();
  data.Unk2 = reader.u64();
  data.statusEffectData = read13(reader);
  data.New = reader.bool();
  return data;
}

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
function read58(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.Reason = reader.u8();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
function read59(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Value = reader.u32();
  data.EffectInstanceId = reader.u32();
  reader.skip(5);
  data.ObjectId = reader.u64();
  data.CharacterId = reader.u64();
  reader.skip(2);
  return data;
}

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
function read60(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.Step = reader.u32();
  data.Unk2_m = reader.bool();
  data.TriggerId = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
function read61(buf) {
  const reader = new Read(buf);
  const data = {};
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.PacketResultCode = reader.u32();
  data.TriggerId = reader.u32();
  data.Unk0_m = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
function read62(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SourceId = reader.u64();
  data.TriggerSignalType = reader.u32();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.TriggerId = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
function read63(buf) {
  const reader = new Read(buf);
  const data = {};
  data.MaxHp = read14(reader);
  data.statusEffectDatas = reader.array(reader.u16(), () => read13(reader), 80);
  data.CharacterId = reader.u64();
  data.Unk0_m = reader.u32();
  data.Position = reader.u64();
  data.CurHp = read14(reader);
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
