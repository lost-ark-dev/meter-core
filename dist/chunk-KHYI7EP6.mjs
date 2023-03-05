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
  data.Level = reader.u8();
  data.Id = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTAbilityChangeNotify.ts
function read2(buf) {
  const reader = new Read(buf);
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  return data;
}
var name = "PKTAbilityChangeNotify";
var opcode = 17235;

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
var name2 = "PKTActiveAbilityNotify";
var opcode2 = 27962;

// src/packets/generated/definitions/PKTAddonSkillFeatureChangeNotify.ts
function read5(buf) {
  const reader = new Read(buf);
  const data = {};
  data.struct_113 = reader.bytes(reader.u16(), 200, 4);
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
var name3 = "PKTAddonSkillFeatureChangeNotify";
var opcode3 = 31789;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
function read6(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PacketResultCode = reader.u32();
  data.Unk1_m = reader.bytes(reader.u32(), 688);
  return data;
}
var name4 = "PKTAuthTokenResult";
var opcode4 = 59533;

// src/packets/generated/definitions/PKTBlockSkillStateNotify.ts
function read7(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Type = reader.u8();
  data.ParalyzationPoint = reader.u32();
  reader.skip(1);
  data.ObjectId = reader.u64();
  data.ParalyzationMaxPoint = reader.u32();
  return data;
}
var name5 = "PKTBlockSkillStateNotify";
var opcode5 = 44742;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
function read8(buf) {
  const reader = new Read(buf);
  const data = {};
  data.TargetId = reader.u64();
  data.SourceId = reader.u64();
  reader.skip(1);
  data.Type = reader.u32();
  return data;
}
var name6 = "PKTCounterAttackNotify";
var opcode6 = 20908;

// src/packets/generated/definitions/PKTDeathNotify.ts
function read9(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u64();
  if (reader.bool())
    data.Unk1_0 = reader.u8();
  data.TargetId = reader.u64();
  if (reader.bool())
    data.Unk3_0 = reader.u8();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u16();
  data.Unk6 = reader.u32();
  data.SourceId = reader.u64();
  if (reader.bool())
    data.Unk8_0 = reader.u8();
  data.Unk9 = reader.u32();
  return data;
}
var name7 = "PKTDeathNotify";
var opcode7 = 14668;

// src/packets/generated/definitions/PKTInitAbility.ts
function read10(buf) {
  const reader = new Read(buf);
  const data = {};
  data.struct_116 = reader.bytes(reader.u16(), 346, 48);
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  return data;
}
var name8 = "PKTInitAbility";
var opcode8 = 29723;

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
  data.struct_24 = reader.array(
    reader.u16(),
    () => {
      const g = {};
      g.versionString = reader.string(64);
      g.struct_540 = reader.string(128);
      g.struct_528 = reader.string(32);
      return g;
    },
    64
  );
  data.struct_540 = reader.string(128);
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u32();
  data.lostArkDateTime = read11(reader);
  data.Unk5 = reader.u8();
  data.PlayerId = reader.u64();
  data.Unk7 = reader.u64();
  return data;
}
var name9 = "PKTInitEnv";
var opcode9 = 57806;

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

// src/packets/generated/structures/Struct_672.ts
function read14(reader) {
  const data = {};
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u16();
  data.Unk2 = read13(reader);
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u8();
  data.Unk6 = read13(reader);
  return data;
}

// src/packets/generated/structures/StatusEffectData.ts
function read15(reader) {
  const data = {};
  data.StatusEffectId = reader.u32();
  data.EffectInstanceId = reader.u32();
  data.SourceId = reader.u64();
  data.InstanceId = reader.u64();
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u8();
  if (reader.bool())
    data.Unk6_0 = reader.u64();
  if (reader.bool())
    data.Value = reader.bytes(16);
  data.struct_419 = reader.bytes(reader.u16(), 8, 7);
  data.SkillLevel = reader.u8();
  data.lostArkDateTime = read11(reader);
  return data;
}

// src/packets/generated/definitions/PKTInitPC.ts
function read16(buf) {
  const reader = new Read(buf);
  const data = {};
  data.struct_365 = reader.array(reader.u16(), () => read14(reader), 5);
  data.Unk1 = reader.bytes(25);
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u32();
  data.struct_89 = reader.bytes(reader.u16(), 57);
  data.Unk6 = reader.u16();
  data.Unk7 = reader.u16();
  data.Unk8 = reader.u32();
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const i = {};
      i.Value = read13(reader);
      i.StatType = reader.u8();
      return i;
    },
    152
  );
  data.Unk12 = reader.u8();
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u32();
  data.Unk15 = reader.u32();
  data.CharacterId = reader.u64();
  data.Unk17 = reader.u64();
  data.Unk18 = reader.bytes(35);
  data.Unk19 = reader.u32();
  data.Unk20 = reader.u8();
  data.Unk21 = reader.u8();
  data.Unk22 = reader.u16();
  data.Unk23 = reader.u8();
  data.ClassId = reader.u16();
  data.Unk25 = reader.u8();
  data.Unk26 = reader.u8();
  data.Unk27 = reader.u8();
  data.Unk28 = reader.u32();
  data.struct_339 = reader.string(7);
  data.Unk30 = reader.u32();
  data.Unk31 = reader.u64();
  data.Unk32 = reader.u32();
  data.Unk33 = reader.u8();
  data.GearLevel = reader.u32();
  data.Unk35 = reader.u8();
  data.Unk36 = reader.bytes(116);
  data.PlayerId = reader.u64();
  data.Unk38 = reader.u32();
  data.Unk39 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read15(reader), 80);
  data.Unk41 = reader.u64();
  data.Unk42 = reader.u8();
  data.Unk43 = reader.u32();
  data.Unk44 = reader.u32();
  data.Unk45 = reader.u8();
  data.Unk46 = reader.u8();
  data.Level = reader.u16();
  data.Unk48 = reader.u8();
  if (reader.bool())
    data.Unk49_0 = reader.u32();
  data.Unk50 = reader.u8();
  data.Unk51 = reader.u16();
  data.Name = reader.string(20);
  data.struct_315 = reader.bytes(reader.u16(), 104, 30);
  data.Unk54 = reader.u64();
  data.struct_209 = reader.bytes(reader.u16(), 3, 17);
  data.Unk56 = reader.u8();
  return data;
}
var name10 = "PKTInitPC";
var opcode10 = 20790;

// src/packets/generated/structures/Struct_689.ts
function read17(reader) {
  const data = {};
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u32();
  if (reader.bool())
    data.Unk2_0 = reader.u32();
  if (reader.bool())
    data.Unk3_0 = reader.bytes(9);
  data.Unk4 = reader.u32();
  return data;
}

// src/packets/generated/definitions/PKTInitLocal.ts
function read18(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u8();
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u64();
  data.struct_209 = reader.bytes(reader.u16(), 3, 17);
  data.Unk5 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read15(reader), 80);
  data.struct_116 = reader.bytes(reader.u16(), 346, 48);
  if (reader.bool())
    data.Unk8_0 = reader.u32();
  data.struct_113 = reader.bytes(reader.u16(), 200, 4);
  data.struct_315 = reader.bytes(reader.u16(), 104, 30);
  data.Unk11 = reader.u64();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const m = {};
      m.Value = read13(reader);
      m.StatType = reader.u8();
      return m;
    },
    152
  );
  data.struct_398 = reader.array(reader.u16(), () => read17(reader), 300);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const o = {};
      o.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      o.SkillId = reader.u32();
      return o;
    },
    200
  );
  data.Unk15 = reader.u8();
  return data;
}
var name11 = "PKTInitLocal";
var opcode11 = 9782;

// src/packets/generated/structures/Struct_634.ts
function read19(reader) {
  const data = {};
  data.Unk0 = reader.u16();
  data.lostArkDateTime = read11(reader);
  data.struct_424 = reader.bytes(reader.u16(), 3, 14);
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u16();
  if (reader.bool())
    data.Unk5_0 = reader.u8();
  return data;
}

// src/packets/generated/structures/Struct_669.ts
function read20(reader) {
  const data = {};
  data.Unk0 = reader.u16();
  data.struct_293 = reader.array(reader.u16(), () => read19(reader), 30);
  data.Unk2 = reader.u64();
  data.struct_82 = reader.bytes(reader.u32(), 512);
  data.Unk4 = reader.u8();
  data.lostArkString = reader.string(20);
  data.Unk6 = reader.u8();
  data.Unk7 = reader.u8();
  return data;
}

// src/packets/common/Angle.ts
function read21(reader) {
  return reader.u16() * (2 * Math.PI) / 65536;
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

// src/packets/generated/structures/NpcData.ts
function read23(reader) {
  const data = {};
  if (reader.bool())
    data.TransitIndex = reader.u32();
  if (reader.bool())
    data.Unk1_0 = reader.u8();
  if (reader.bool())
    data.Unk2_0 = reader.u8();
  if (reader.bool())
    data.struct_311 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool())
    data.Unk4_0 = reader.u8();
  data.Unk5 = reader.u8();
  if (reader.bool())
    data.Unk6_0 = reader.u32();
  data.Unk7 = reader.u8();
  if (reader.bool())
    data.Unk8_0 = reader.u16();
  if (reader.bool())
    data.Unk9_0 = reader.u8();
  if (reader.bool())
    data.struct_245 = reader.bytes(reader.u16(), 12, 12);
  data.Unk11 = reader.u16();
  data.Unk12 = reader.u8();
  if (reader.bool())
    data.Unk13_0 = reader.u32();
  if (reader.bool())
    data.Unk14_0 = reader.u16();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const v = {};
      v.Value = read13(reader);
      v.StatType = reader.u8();
      return v;
    },
    152
  );
  if (reader.bool())
    data.struct_669 = read20(reader);
  data.DirectionYaw = read21(reader);
  data.Position = read22(reader);
  if (reader.bool())
    data.Unk19_0 = reader.u64();
  if (reader.bool())
    data.Unk20_0 = reader.u8();
  data.Unk21 = reader.u8();
  if (reader.bool())
    data.Unk22_0 = reader.u32();
  data.TypeId = reader.u32();
  if (reader.bool())
    data.Unk24_0 = reader.u32();
  if (reader.bool())
    data.Unk25_0 = reader.u8();
  data.struct_365 = reader.array(reader.u16(), () => read14(reader), 5);
  data.SpawnIndex = reader.i32();
  data.Unk28 = reader.u8();
  data.Unk29 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read15(reader), 80);
  if (reader.bool())
    data.Unk31_0 = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTNewNpc.ts
function read24(buf) {
  const reader = new Read(buf);
  const data = {};
  data.NpcStruct = read23(reader);
  data.Unk1 = reader.u8();
  if (reader.bool()) {
    data.Unk0_0 = reader.string(20);
    data.Unk0_1 = reader.string(20);
  }
  if (reader.bool())
    data.Unk3_0 = reader.u8();
  if (reader.bool())
    data.Unk4_0 = reader.u64();
  return data;
}
var name12 = "PKTNewNpc";
var opcode12 = 19263;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
function read25(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PublishReason = reader.u8();
  data.NpcData = read23(reader);
  reader.skip(22);
  data.OwnerId = reader.u64();
  reader.skip(9);
  return data;
}
var name13 = "PKTNewNpcSummon";
var opcode13 = 45531;

// src/packets/generated/structures/PCStruct.ts
function read26(reader) {
  const data = {};
  data.struct_113 = reader.bytes(reader.u16(), 200, 4);
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u16();
  data.Unk3 = reader.u8();
  data.ClassId = reader.u16();
  data.Unk5 = reader.u8();
  data.Unk6 = reader.u32();
  data.Unk7 = reader.u8();
  data.Unk8 = reader.u8();
  data.Unk9 = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read15(reader), 80);
  data.Unk11 = reader.u8();
  data.GearLevel = reader.u32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const A = {};
      A.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      A.SkillId = reader.u32();
      return A;
    },
    200
  );
  data.Unk14 = reader.u8();
  data.Unk15 = reader.u8();
  data.Unk16 = reader.u16();
  data.Unk17 = reader.u32();
  data.Unk18 = reader.u32();
  data.struct_82 = reader.bytes(reader.u32(), 512);
  data.Level = reader.u16();
  data.PlayerId = reader.u64();
  data.struct_293 = reader.array(reader.u16(), () => read19(reader), 30);
  data.Unk23 = reader.u32();
  data.Unk24 = reader.u8();
  data.Unk25 = reader.bytes(25);
  data.Unk26 = reader.u8();
  data.Unk27 = reader.bytes(5);
  data.Unk28 = reader.u32();
  data.Heading = read21(reader);
  data.Unk5_m = reader.u32();
  data.Name = reader.string(20);
  data.Unk32 = reader.string(20);
  if (reader.bool())
    data.Unk33_0 = reader.bytes(12);
  data.struct_365 = reader.array(reader.u16(), () => read14(reader), 5);
  data.Unk35 = reader.u32();
  data.Unk36 = reader.u32();
  data.CharacterId = reader.u64();
  data.Unk38 = reader.u32();
  data.struct_292 = reader.array(reader.u16(), () => read19(reader), 9);
  data.Unk40 = reader.u8();
  data.Unk41 = reader.u16();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const G = {};
      G.Value = read13(reader);
      G.StatType = reader.u8();
      return G;
    },
    152
  );
  data.Unk43 = reader.u8();
  return data;
}

// src/packets/generated/structures/TrackMoveInfo.ts
function read27(reader) {
  const data = {};
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.bytes(12);
  if (reader.bool())
    data.Unk3_0 = reader.bytes(12);
  return data;
}

// src/packets/generated/definitions/PKTNewPC.ts
function read28(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0_m = reader.u8();
  if (reader.bool())
    data.Unk4_0_m = reader.bytes(12);
  if (reader.bool())
    data.Unk5_0_m = reader.bytes(20);
  data.PCStruct = read26(reader);
  data.Unk2_m = reader.u8();
  if (reader.bool())
    data.Unk3_0_m = reader.u32();
  if (reader.bool())
    data.TrackMoveInfo = read27(reader);
  return data;
}
var name14 = "PKTNewPC";
var opcode14 = 8067;

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
  data.Unk0 = reader.u8();
  if (reader.bool())
    data.Unk1_0 = reader.u32();
  data.Unk2 = reader.u64();
  data.tripodIndex = read29(reader);
  data.Unk4 = reader.u16();
  data.SkillId = reader.u32();
  data.OwnerId = reader.u64();
  data.Unk7 = reader.u32();
  data.Unk8 = reader.u32();
  data.Unk9 = reader.u64();
  if (reader.bool())
    data.struct_311 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool())
    data.Unk11_0 = reader.u64();
  data.SkillLevel = reader.u8();
  data.Unk13 = reader.u32();
  data.Unk14 = reader.u16();
  data.Unk15 = reader.u32();
  data.SkillEffect = reader.u32();
  data.Unk17 = reader.u64();
  data.tripodLevel = read30(reader);
  data.ProjectileId = reader.u64();
  data.Unk20 = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTNewProjectile.ts
function read32(buf) {
  const reader = new Read(buf);
  const data = {};
  data.projectileInfo = read31(reader);
  return data;
}
var name15 = "PKTNewProjectile";
var opcode15 = 38002;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
function read33(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  reader.skip(2);
  data.DecreasePoint = reader.u32();
  data.ParalyzationPoint = reader.u32();
  data.HitCheckTime = reader.u32();
  data.NoHitCheckTime = reader.u32();
  data.Enable = reader.bool();
  reader.skip(1);
  data.ParalyzationMaxPoint = reader.u32();
  return data;
}
var name16 = "PKTParalyzationStateNotify";
var opcode16 = 1165;

// src/packets/generated/structures/PartyMemberData.ts
function read34(reader) {
  const data = {};
  data.Unk0 = reader.u16();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u8();
  data.Unk3 = read13(reader);
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u16();
  data.Unk6 = reader.u32();
  data.Unk7 = reader.u8();
  data.PartyMemberNumber = reader.u8();
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u8();
  data.Unk11 = reader.u32();
  data.CharacterId = reader.u64();
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u32();
  data.Unk15 = reader.u64();
  data.Name = reader.string(20);
  data.CharacterLevel = reader.u16();
  data.Unk18 = read13(reader);
  data.Unk19 = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTPartyInfo.ts
function read35(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PartyType = reader.u8();
  data.PartyInstanceId = reader.u32();
  data.RaidInstanceId = reader.u32();
  data.LootGrade = reader.u32();
  data.MemberDatas = reader.array(reader.u16(), () => read34(reader), 40);
  data.PartyLootType = reader.u8();
  return data;
}
var name17 = "PKTPartyInfo";
var opcode17 = 31845;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
function read36(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PartyInstanceId = reader.u32();
  data.PartyLeaveType = reader.u8();
  data.Name = reader.string(20);
  return data;
}
var name18 = "PKTPartyLeaveResult";
var opcode18 = 25148;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
function read37(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.Unk0_m = reader.u8();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name19 = "PKTPartyPassiveStatusEffectAddNotify";
var opcode19 = 23968;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
function read38(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.ObjectId = reader.u64();
  return data;
}
var name20 = "PKTPartyPassiveStatusEffectRemoveNotify";
var opcode20 = 10132;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
function read39(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectDatas = reader.array(reader.u16(), () => read15(reader), 80);
  data.CharacterId = reader.u64();
  data.Unk2 = reader.u64();
  data.Unk3 = reader.u8();
  data.PlayerIdOnRefresh = reader.u64();
  return data;
}
var name21 = "PKTPartyStatusEffectAddNotify";
var opcode21 = 44010;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
function read40(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.Unk1 = reader.u64();
  data.CharacterId = reader.u64();
  data.Unk3 = reader.u8();
  return data;
}
var name22 = "PKTPartyStatusEffectRemoveNotify";
var opcode22 = 22567;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
function read41(buf) {
  const reader = new Read(buf);
  const data = {};
  data.CharacterId = reader.u64();
  reader.skip(17);
  data.PartyInstanceId = reader.u32();
  reader.skip(11);
  data.RaidInstanceId = reader.u32();
  return data;
}
var name23 = "PKTPartyStatusEffectResultNotify";
var opcode23 = 35964;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
function read42(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name24 = "PKTPassiveStatusEffectAddNotify";
var opcode24 = 57428;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
function read43(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name25 = "PKTPassiveStatusEffectRemoveNotify";
var opcode25 = 50974;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
function read44(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.bytes(7);
  return data;
}
var name26 = "PKTRaidBossKillNotify";
var opcode26 = 23147;

// src/packets/generated/definitions/PKTRaidResult.ts
function read45(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u8();
  data.struct_42 = reader.array(
    reader.u16(),
    () => {
      const O = {};
      O.Unk0_0_0 = read13(reader);
      O.Unk0_0_1 = reader.u32();
      O.struct_492 = reader.bytes(reader.u16(), 3);
      O.Unk0_0_3 = read13(reader);
      return O;
    },
    3
  );
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u64();
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u64();
  data.Unk7 = reader.u64();
  return data;
}
var name27 = "PKTRaidResult";
var opcode27 = 6589;

// src/packets/generated/structures/UnpublishObject.ts
function read46(reader) {
  const data = {};
  data.UnpublishReason = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTRemoveObject.ts
function read47(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read46(reader), 200);
  return data;
}
var name28 = "PKTRemoveObject";
var opcode28 = 49888;

// src/packets/generated/structures/SkillDamageEvent.ts
function read48(reader) {
  const data = {};
  data.TargetId = reader.u64();
  if (reader.bool())
    data.DamageAttr = reader.u8();
  data.CurHp = read13(reader);
  data.MaxHp = read13(reader);
  data.Modifier = reader.u8();
  data.Unk3_m = reader.i16();
  data.DamageType = reader.u8();
  data.Damage = read13(reader);
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

// src/packets/generated/structures/SkillDamageAbnormalMoveEvent.ts
function read50(reader) {
  const data = {};
  data.Unk2_m = reader.u64();
  data.Unk4_m = reader.u16();
  data.skillDamageEvent = read48(reader);
  data.Destination = read22(reader);
  data.Unk1_m = reader.u8();
  data.Position = read22(reader);
  data.Unk3_m = reader.u16();
  data.SkillMoveOptionData = read49(reader);
  data.Unk8_m = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
function read51(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SourceId = reader.u64();
  data.SkillEffectId = reader.u32();
  data.SkillId = reader.u32();
  data.SkillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => read50(reader), 50);
  data.Unk1_m = reader.u8();
  data.Unk2_m = reader.u32();
  return data;
}
var name29 = "PKTSkillDamageAbnormalMoveNotify";
var opcode29 = 46539;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
function read52(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SkillEffectId = reader.u32();
  data.SkillId = reader.u32();
  data.SourceId = reader.u64();
  data.SkillLevel = reader.u8();
  data.SkillDamageEvents = reader.array(reader.u16(), () => read48(reader), 50);
  return data;
}
var name30 = "PKTSkillDamageNotify";
var opcode30 = 23135;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
function read53(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(29);
  data.SourceId = reader.u64();
  reader.skip(10);
  data.SkillId = reader.u32();
  data.Stage = reader.u8();
  return data;
}
var name31 = "PKTSkillStageNotify";
var opcode31 = 51700;

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
  data.CurDirectionYaw = read21(reader);
  data.SourceId = reader.u64();
  data.SkillLevel = reader.u8();
  data.CurPosition = read22(reader);
  if (reader.bool())
    data.PitchRotation = read21(reader);
  data.NewPosition = read22(reader);
  data.AimTargetPosition = read22(reader);
  data.SkillOptionData = read54(reader);
  data.NewDirectionYaw = read21(reader);
  data.SkillId = reader.u32();
  if (reader.bool())
    data.Unk1_m = reader.i32();
  if (reader.bool())
    data.AiStateId = reader.u32();
  return data;
}
var name32 = "PKTSkillStartNotify";
var opcode32 = 38704;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
function read56(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.Unk0_0 = reader.u32();
  data.Unk1 = reader.array(
    reader.u16(),
    () => {
      const S = {};
      S.Value = read13(reader);
      S.StatType = reader.u8();
      return S;
    },
    152
  );
  data.Unk2 = reader.u8();
  data.ObjectId = reader.u64();
  data.Unk4 = reader.array(
    reader.u16(),
    () => {
      const T = {};
      T.Value = read13(reader);
      T.StatType = reader.u8();
      return T;
    },
    152
  );
  return data;
}
var name33 = "PKTStatChangeOriginNotify";
var opcode33 = 52643;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
function read57(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u64();
  if (reader.bool())
    data.Unk1_0 = reader.u64();
  data.New = reader.bool();
  data.statusEffectData = read15(reader);
  data.ObjectId = reader.u64();
  return data;
}
var name34 = "PKTStatusEffectAddNotify";
var opcode34 = 23393;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
function read58(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Reason = reader.u8();
  data.ObjectId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}
var name35 = "PKTStatusEffectRemoveNotify";
var opcode35 = 47620;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
function read59(buf) {
  const reader = new Read(buf);
  const data = {};
  data.CharacterId = reader.u64();
  reader.skip(1);
  data.Value = reader.u32();
  data.EffectInstanceId = reader.u32();
  reader.skip(4);
  data.ObjectId = reader.u64();
  return data;
}
var name36 = "PKTStatusEffectSyncDataNotify";
var opcode36 = 43648;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
function read60(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.Unk2_m = reader.bool();
  data.TriggerId = reader.u32();
  reader.skip(1);
  data.Step = reader.u32();
  return data;
}
var name37 = "PKTTriggerBossBattleStatus";
var opcode37 = 50014;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
function read61(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PacketResultCode = reader.u32();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.TriggerId = reader.u32();
  data.Unk0_m = reader.u32();
  return data;
}
var name38 = "PKTTriggerFinishNotify";
var opcode38 = 44444;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
function read62(buf) {
  const reader = new Read(buf);
  const data = {};
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.TriggerSignalType = reader.u32();
  data.SourceId = reader.u64();
  data.TriggerId = reader.u32();
  return data;
}
var name39 = "PKTTriggerStartNotify";
var opcode39 = 53998;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
function read63(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0_m = reader.u32();
  data.CurHp = read13(reader);
  data.CharacterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read15(reader), 80);
  data.MaxHp = read13(reader);
  data.Position = reader.u64();
  return data;
}
var name40 = "PKTTroopMemberUpdateMinNotify";
var opcode40 = 27115;

export {
  read2 as read,
  name,
  opcode,
  read4 as read2,
  name2,
  opcode2,
  read5 as read3,
  name3,
  opcode3,
  read6 as read4,
  name4,
  opcode4,
  read7 as read5,
  name5,
  opcode5,
  read8 as read6,
  name6,
  opcode6,
  read9 as read7,
  name7,
  opcode7,
  read10 as read8,
  name8,
  opcode8,
  read12 as read9,
  name9,
  opcode9,
  read16 as read10,
  name10,
  opcode10,
  read18 as read11,
  name11,
  opcode11,
  read24 as read12,
  name12,
  opcode12,
  read25 as read13,
  name13,
  opcode13,
  read28 as read14,
  name14,
  opcode14,
  read32 as read15,
  name15,
  opcode15,
  read33 as read16,
  name16,
  opcode16,
  read35 as read17,
  name17,
  opcode17,
  read36 as read18,
  name18,
  opcode18,
  read37 as read19,
  name19,
  opcode19,
  read38 as read20,
  name20,
  opcode20,
  read39 as read21,
  name21,
  opcode21,
  read40 as read22,
  name22,
  opcode22,
  read41 as read23,
  name23,
  opcode23,
  read42 as read24,
  name24,
  opcode24,
  read43 as read25,
  name25,
  opcode25,
  read44 as read26,
  name26,
  opcode26,
  read45 as read27,
  name27,
  opcode27,
  read47 as read28,
  name28,
  opcode28,
  read51 as read29,
  name29,
  opcode29,
  read52 as read30,
  name30,
  opcode30,
  read53 as read31,
  name31,
  opcode31,
  read55 as read32,
  name32,
  opcode32,
  read56 as read33,
  name33,
  opcode33,
  read57 as read34,
  name34,
  opcode34,
  read58 as read35,
  name35,
  opcode35,
  read59 as read36,
  name36,
  opcode36,
  read60 as read37,
  name37,
  opcode37,
  read61 as read38,
  name38,
  opcode38,
  read62 as read39,
  name39,
  opcode39,
  read63 as read40,
  name40,
  opcode40
};
