"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name30 in all)
    __defProp(target, name30, { get: all[name30], enumerable: true });
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

// src/pkt-stream.ts
var pkt_stream_exports = {};
__export(pkt_stream_exports, {
  PKT: () => PKT,
  PKTStream: () => PKTStream
});
module.exports = __toCommonJS(pkt_stream_exports);
var import_tiny_typed_emitter = require("tiny-typed-emitter");

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

// src/packets/generated/definitions/PKTAuthTokenResult.ts
function read(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PacketResultCode = reader.u32();
  data.Unk1_m = reader.bytes(reader.u32(), 688);
  return data;
}
var name = "PKTAuthTokenResult";
var opcode = 44294;

// src/packets/generated/definitions/PKTCounterAttackNotify.ts
function read2(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(2);
  data.TargetId = reader.u64();
  data.Type = reader.u32();
  data.SourceId = reader.u64();
  return data;
}
var name2 = "PKTCounterAttackNotify";
var opcode2 = 23544;

// src/packets/generated/definitions/PKTDeathNotify.ts
function read3(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u32();
  data.SourceId = reader.u64();
  if (reader.bool())
    data.Unk2_0 = reader.u8();
  data.Unk3 = reader.u8();
  if (reader.bool())
    data.Unk4_0 = reader.u8();
  data.TargetId = reader.u64();
  data.Unk6 = reader.u64();
  data.Unk7 = reader.u16();
  if (reader.bool())
    data.Unk8_0 = reader.u8();
  return data;
}
var name3 = "PKTDeathNotify";
var opcode3 = 21940;

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
function read4(reader) {
  const s = reader.u16();
  if ((s & 4095) < 2079) {
    reader.o -= 2;
    return bigintToDate(reader.i64());
  } else {
    return bigintToDate(BigInt(s) & 0xfffn | 0x11000n);
  }
}

// src/packets/generated/definitions/PKTInitEnv.ts
function read5(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u8();
  data.PlayerId = reader.u64();
  data.lostArkDateTime = read4(reader);
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u64();
  data.struct_544 = reader.string(128);
  data.struct_26 = reader.array(
    reader.u16(),
    () => {
      const E = {};
      E.struct_544 = reader.string(128);
      E.versionString = reader.string(64);
      E.struct_531 = reader.string(32);
      return E;
    },
    64
  );
  return data;
}
var name4 = "PKTInitEnv";
var opcode4 = 12201;

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
function read6(reader) {
  const flag = reader.u8();
  const bytes = reader.bytes(flag >> 1 & 7);
  const result = bytesToInt64(bytes) << 4n | BigInt(flag >> 4);
  return (flag & 1) === 0 ? result : -result;
}

// src/packets/generated/structures/StatusEffectData.ts
function read7(reader) {
  const data = {};
  data.SourceId = reader.u64();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u8();
  data.lostArkDateTime = read4(reader);
  data.SkillLevel = reader.u8();
  data.StatusEffectId = reader.u32();
  data.struct_422 = reader.bytes(reader.u16(), 8, 7);
  data.InstanceId = reader.u64();
  if (reader.bool())
    data.Value = reader.bytes(16);
  if (reader.bool())
    data.Unk9_0 = reader.u64();
  data.EffectInstanceId = reader.u32();
  return data;
}

// src/packets/generated/structures/Struct_678.ts
function read8(reader) {
  const data = {};
  data.Unk0 = reader.u64();
  data.Unk1 = read6(reader);
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u16();
  data.Unk4 = read6(reader);
  data.Unk5 = reader.u8();
  data.Unk6 = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTInitPC.ts
function read9(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.bytes(25);
  data.Unk1 = reader.u16();
  data.Unk2 = reader.u32();
  data.ClassId = reader.u16();
  data.Unk4 = reader.u64();
  data.Unk5 = reader.u32();
  data.Unk6 = reader.u8();
  data.Unk7 = reader.u16();
  data.Unk8 = reader.u16();
  reader.skip(66);
  data.Level = reader.u16();
  reader.skip(44);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const F = {};
      F.readNBytesInt64 = read6(reader);
      F.Unk0_0_1 = reader.u8();
      return F;
    },
    152
  );
  data.Unk11 = reader.u32();
  data.Unk12 = reader.u8();
  data.Unk13 = reader.u16();
  data.Unk14 = reader.u32();
  data.Unk15 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => read7(reader), 80);
  data.Unk17 = reader.u8();
  data.struct_325 = reader.bytes(reader.u16(), 104, 30);
  data.Unk19 = reader.u64();
  data.Unk20 = reader.u32();
  data.Unk21 = reader.u8();
  data.Unk22 = reader.u8();
  data.Unk23 = reader.u32();
  data.Unk24 = reader.u8();
  data.Unk25 = reader.u32();
  data.Unk26 = reader.u8();
  data.Unk27 = reader.u8();
  data.PlayerId = reader.u64();
  data.Unk29 = reader.u16();
  data.Name = reader.string(20);
  data.Unk31 = reader.u8();
  data.Unk32 = reader.u32();
  data.Unk33 = reader.u8();
  data.struct_373 = reader.array(reader.u16(), () => read8(reader), 5);
  data.Unk35 = reader.u8();
  if (reader.bool())
    data.Unk36_0 = reader.u32();
  data.Unk37 = reader.u32();
  data.Unk38 = reader.u8();
  data.Unk39 = reader.u64();
  data.CharacterId = reader.u64();
  data.struct_320 = reader.string(7);
  data.Unk42 = reader.u8();
  data.Unk43 = reader.u8();
  data.Unk44 = reader.u32();
  data.struct_219 = reader.bytes(reader.u16(), 3, 17);
  data.Unk46 = reader.u64();
  data.Unk47 = reader.u8();
  data.Unk48 = reader.u8();
  data.Unk49 = reader.u32();
  data.GearLevel = reader.u32();
  data.Unk51 = reader.u8();
  data.struct_92 = reader.bytes(reader.u16(), 57);
  data.Unk53 = reader.bytes(35);
  data.Unk54 = reader.u8();
  data.Unk55 = reader.u8();
  data.Unk56 = reader.u32();
  return data;
}
var name5 = "PKTInitPC";
var opcode5 = 44217;

// src/packets/generated/structures/Struct_637.ts
function read10(reader) {
  const data = {};
  data.Unk0 = reader.u16();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u16();
  data.lostArkDateTime = read4(reader);
  if (reader.bool())
    data.Unk4_0 = reader.u8();
  data.struct_429 = reader.bytes(reader.u16(), 3, 14);
  return data;
}

// src/packets/generated/structures/Struct_675.ts
function read11(reader) {
  const data = {};
  data.Unk0 = reader.u16();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u64();
  data.struct_85 = reader.bytes(reader.u32(), 512);
  data.lostArkString = reader.string(20);
  data.struct_301 = reader.array(reader.u16(), () => read10(reader), 30);
  data.Unk6 = reader.u8();
  data.Unk7 = reader.u8();
  return data;
}

// src/packets/common/Vector3F.ts
function i21(n) {
  if (n >> 20 === 1)
    return -((~n >>> 0) + 1 & 2097151);
  return n;
}
function read12(reader) {
  let b = reader.u64();
  return {
    x: i21(Number(b & 0x1fffffn)),
    y: i21(Number(b >> 21n & 0x1fffffn)),
    z: i21(Number(b >> 42n & 0x1fffffn))
  };
}

// src/packets/common/Angle.ts
function read13(reader) {
  return reader.u16() * (2 * Math.PI) / 65536;
}

// src/packets/generated/structures/NpcData.ts
function read14(reader) {
  const data = {};
  if (reader.bool())
    data.struct_675 = read11(reader);
  if (reader.bool())
    data.TransitIndex = reader.u32();
  data.Unk2 = reader.u8();
  if (reader.bool())
    data.struct_321 = reader.bytes(reader.u16(), 11, 9);
  data.ObjectId = reader.u64();
  data.SpawnIndex = reader.i32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read7(reader), 80);
  data.Unk7 = reader.u8();
  data.Position = read12(reader);
  if (reader.bool())
    data.Unk9_0 = reader.u32();
  data.Unk10 = reader.u8();
  if (reader.bool())
    data.Unk11_0 = reader.u32();
  if (reader.bool())
    data.struct_255 = reader.bytes(reader.u16(), 12, 12);
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u16();
  data.TypeId = reader.u32();
  if (reader.bool())
    data.Unk16_0 = reader.u16();
  if (reader.bool())
    data.Unk17_0 = reader.u32();
  data.DirectionYaw = read13(reader);
  if (reader.bool())
    data.Unk19_0 = reader.u8();
  if (reader.bool())
    data.Unk20_0 = reader.u8();
  if (reader.bool())
    data.Unk21_0 = reader.u8();
  data.Unk22 = reader.u8();
  if (reader.bool())
    data.Unk23_0 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const N = {};
      N.readNBytesInt64 = read6(reader);
      N.Unk0_0_1 = reader.u8();
      return N;
    },
    152
  );
  if (reader.bool())
    data.Unk25_0 = reader.u64();
  if (reader.bool())
    data.Unk26_0 = reader.u16();
  if (reader.bool())
    data.Unk27_0 = reader.u8();
  data.Unk28 = reader.u8();
  if (reader.bool())
    data.Unk29_0 = reader.u32();
  if (reader.bool())
    data.Unk30_0 = reader.u8();
  data.struct_373 = reader.array(reader.u16(), () => read8(reader), 5);
  if (reader.bool())
    data.Unk32_0 = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTNewNpc.ts
function read15(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.Unk0_0 = reader.u8();
  if (reader.bool())
    data.Unk1_0 = reader.u64();
  data.NpcStruct = read14(reader);
  data.Unk3 = reader.u8();
  return data;
}
var name6 = "PKTNewNpc";
var opcode6 = 31638;

// src/packets/generated/definitions/PKTNewNpcSummon.ts
function read16(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PublishReason = reader.u8();
  reader.skip(9);
  data.OwnerId = reader.u64();
  reader.skip(22);
  data.NpcData = read14(reader);
  return data;
}
var name7 = "PKTNewNpcSummon";
var opcode7 = 57156;

// src/packets/generated/structures/TrackMoveInfo.ts
function read17(reader) {
  const data = {};
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.bytes(12);
  if (reader.bool())
    data.Unk3_0 = reader.bytes(12);
  return data;
}

// src/packets/generated/structures/PCStruct.ts
function read18(reader) {
  const data = {};
  data.Unk0 = reader.string(20);
  data.Unk1 = reader.u16();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u32();
  data.Unk5_m = reader.u32();
  if (reader.bool())
    data.Unk5_0 = reader.bytes(12);
  data.Unk6 = reader.u8();
  data.struct_373 = reader.array(reader.u16(), () => read8(reader), 5);
  data.struct_301 = reader.array(reader.u16(), () => read10(reader), 30);
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u16();
  data.GearLevel = reader.u32();
  data.struct_3 = reader.array(
    reader.u16(),
    () => {
      const S = {};
      S.struct_102 = reader.bytes(reader.u16(), 5, 4);
      S.Unk0_0_1 = reader.u32();
      return S;
    },
    200
  );
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u8();
  data.Unk15 = reader.u8();
  data.Unk16 = reader.u32();
  data.Unk17 = reader.u8();
  data.Level = reader.u16();
  data.struct_85 = reader.bytes(reader.u32(), 512);
  data.Unk20 = reader.u8();
  data.Unk21 = reader.u8();
  data.Unk22 = reader.u32();
  data.Heading = read13(reader);
  data.Unk24 = reader.u64();
  data.Unk25 = reader.u8();
  data.CharacterId = reader.u64();
  data.struct_300 = reader.array(reader.u16(), () => read10(reader), 9);
  data.Unk28 = reader.u32();
  data.Unk29 = reader.u8();
  data.struct_118 = reader.bytes(reader.u16(), 200, 4);
  data.ClassId = reader.u16();
  data.Unk32 = reader.u32();
  data.Unk33 = reader.bytes(5);
  data.Name = reader.string(20);
  data.Unk35 = reader.u32();
  data.Unk36 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const U = {};
      U.readNBytesInt64 = read6(reader);
      U.Unk0_0_1 = reader.u8();
      return U;
    },
    152
  );
  data.Unk38 = reader.bytes(25);
  data.Unk39 = reader.u8();
  data.Unk40 = reader.u16();
  data.Unk41 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read7(reader), 80);
  data.PlayerId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTNewPC.ts
function read19(buf) {
  const reader = new Read(buf);
  const data = {};
  if (reader.bool())
    data.TrackMoveInfo = read17(reader);
  if (reader.bool())
    data.Unk5_0_m = reader.bytes(20);
  data.Unk2_m = reader.u8();
  if (reader.bool())
    data.Unk3_0_m = reader.u32();
  data.Unk0_m = reader.u8();
  if (reader.bool())
    data.Unk4_0_m = reader.bytes(12);
  data.PCStruct = read18(reader);
  return data;
}
var name8 = "PKTNewPC";
var opcode8 = 13099;

// src/packets/generated/structures/ProjectileInfo.ts
function read20(reader) {
  const data = {};
  data.Unk0 = reader.u16();
  data.ProjectileId = reader.u64();
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u8();
  if (reader.bool())
    data.Unk4_0 = reader.u32();
  if (reader.bool())
    data.struct_321 = reader.bytes(reader.u16(), 11, 9);
  data.Unk6 = reader.u32();
  data.Unk7 = reader.u32();
  data.SkillEffect = reader.u32();
  data.Tripods = reader.bytes(3);
  data.Unk10 = reader.u64();
  data.Unk11 = reader.u32();
  data.SkillLevel = reader.u8();
  data.Unk13 = reader.bytes(6);
  data.Unk14 = reader.u64();
  data.Unk15 = reader.u8();
  data.Unk16 = reader.u16();
  if (reader.bool())
    data.Unk17_0 = reader.u64();
  data.Unk18 = reader.u64();
  data.SkillId = reader.u32();
  data.OwnerId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTNewProjectile.ts
function read21(buf) {
  const reader = new Read(buf);
  const data = {};
  data.projectileInfo = read20(reader);
  return data;
}
var name9 = "PKTNewProjectile";
var opcode9 = 1296;

// src/packets/generated/definitions/PKTParalyzationStateNotify.ts
function read22(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.bytes(30);
  return data;
}
var name10 = "PKTParalyzationStateNotify";
var opcode10 = 1696;

// src/packets/generated/structures/PartyMemberData.ts
function read23(reader) {
  const data = {};
  data.CharacterLevel = reader.u16();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u64();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u16();
  data.Unk6 = read6(reader);
  data.Name = reader.string(20);
  data.PartyMemberNumber = reader.u8();
  data.Unk9 = reader.u64();
  data.Unk10 = read6(reader);
  data.CharacterId = reader.u64();
  data.Unk12 = reader.u8();
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u8();
  data.Unk15 = reader.u8();
  data.Unk16 = reader.u32();
  data.Unk17 = reader.u32();
  data.Unk18 = reader.u8();
  data.Unk19 = reader.u16();
  return data;
}

// src/packets/generated/definitions/PKTPartyInfo.ts
function read24(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PartyInstanceId = reader.u32();
  data.MemberDatas = reader.array(reader.u16(), () => read23(reader), 40);
  data.PartyType = reader.u8();
  data.RaidInstanceId = reader.u32();
  data.LootGrade = reader.u32();
  data.PartyLootType = reader.u8();
  return data;
}
var name11 = "PKTPartyInfo";
var opcode11 = 20135;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
function read25(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PartyInstanceId = reader.u32();
  data.Name = reader.string(20);
  data.PartyLeaveType = reader.u8();
  return data;
}
var name12 = "PKTPartyLeaveResult";
var opcode12 = 12275;

// src/packets/generated/definitions/PKTPartyStatusEffectAddNotify.ts
function read26(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectDatas = reader.array(reader.u16(), () => read7(reader), 80);
  data.PlayerIdOnRefresh = reader.u64();
  data.CharacterId = reader.u64();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u8();
  return data;
}
var name13 = "PKTPartyStatusEffectAddNotify";
var opcode13 = 8895;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
function read27(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u64();
  data.Unk1 = reader.u8();
  data.CharacterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}
var name14 = "PKTPartyStatusEffectRemoveNotify";
var opcode14 = 13843;

// src/packets/generated/definitions/PKTPartyStatusEffectResultNotify.ts
function read28(buf) {
  const reader = new Read(buf);
  const data = {};
  data.CharacterId = reader.u64();
  reader.skip(1);
  data.RaidInstanceId = reader.u32();
  reader.skip(25);
  data.PartyInstanceId = reader.u32();
  reader.skip(1);
  return data;
}
var name15 = "PKTPartyStatusEffectResultNotify";
var opcode15 = 601;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
function read29(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.bytes(5);
  return data;
}
var name16 = "PKTRaidBossKillNotify";
var opcode16 = 20140;

// src/packets/generated/definitions/PKTRaidResult.ts
function read30(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u64();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u8();
  data.struct_44 = reader.array(
    reader.u16(),
    () => {
      const Z = {};
      Z.struct_493 = reader.bytes(reader.u16(), 3);
      Z.Unk0_0_1 = read6(reader);
      Z.Unk0_0_2 = reader.u32();
      Z.Unk0_0_3 = read6(reader);
      return Z;
    },
    3
  );
  data.Unk6 = reader.u64();
  data.Unk7 = reader.u64();
  return data;
}
var name17 = "PKTRaidResult";
var opcode17 = 17609;

// src/packets/generated/structures/UnpublishObject.ts
function read31(reader) {
  const data = {};
  data.UnpublishReason = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}

// src/packets/generated/definitions/PKTRemoveObject.ts
function read32(buf) {
  const reader = new Read(buf);
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read31(reader), 200);
  return data;
}
var name18 = "PKTRemoveObject";
var opcode18 = 39958;

// src/packets/common/ReadFlagBytes2.ts
function read33(reader) {
  const data = {};
  const flag = reader.u8();
  if (flag & 1)
    data.flag1 = reader.u32();
  if (flag & 2)
    data.flag2 = reader.u32();
  if (flag & 4)
    data.flag4 = reader.u32();
  if (flag & 8)
    data.flag8 = reader.u32();
  if (flag & 16)
    data.flag10 = reader.u32();
  if (flag & 32)
    data.flag20 = reader.u32();
  if (flag & 64)
    data.flag40 = reader.bytes(reader.u16(), 6);
  return data;
}

// src/packets/generated/structures/SkillDamageEvent.ts
function read34(reader) {
  const data = {};
  data.CurHp = read6(reader);
  data.TargetId = reader.u64();
  data.MaxHp = read6(reader);
  if (reader.bool())
    data.DamageAttr = reader.u8();
  data.DamageType = reader.u8();
  data.Unk3_m = reader.i16();
  data.Modifier = reader.u8();
  data.Damage = read6(reader);
  return data;
}

// src/packets/generated/structures/SkillDamageAbnormalMoveEvent.ts
function read35(reader) {
  const data = {};
  data.Unk0_m = read33(reader);
  data.Unk8_m = reader.u16();
  data.Unk2_m = reader.u64();
  data.Destination = read12(reader);
  data.Unk4_m = reader.u16();
  data.skillDamageEvent = read34(reader);
  data.Position = read12(reader);
  data.Unk3_m = reader.u16();
  data.Unk1_m = reader.u8();
  return data;
}

// src/packets/generated/definitions/PKTSkillDamageAbnormalMoveNotify.ts
function read36(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk2_m = reader.u32();
  data.SourceId = reader.u64();
  data.Unk1_m = reader.u8();
  data.SkillDamageAbnormalMoveEvents = reader.array(reader.u16(), () => read35(reader), 50);
  data.SkillEffectId = reader.u32();
  data.SkillId = reader.u32();
  return data;
}
var name19 = "PKTSkillDamageAbnormalMoveNotify";
var opcode19 = 29416;

// src/packets/generated/definitions/PKTSkillDamageNotify.ts
function read37(buf) {
  const reader = new Read(buf);
  const data = {};
  data.SkillDamageEvents = reader.array(reader.u16(), () => read34(reader), 50);
  data.SkillId = reader.u32();
  data.SourceId = reader.u64();
  data.SkillLevel = reader.u8();
  data.SkillEffectId = reader.u32();
  return data;
}
var name20 = "PKTSkillDamageNotify";
var opcode20 = 1847;

// src/packets/generated/definitions/PKTSkillStageNotify.ts
function read38(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(29);
  data.SourceId = reader.u64();
  reader.skip(4);
  data.Stage = reader.u8();
  reader.skip(8);
  data.SkillId = reader.u32();
  return data;
}
var name21 = "PKTSkillStageNotify";
var opcode21 = 6028;

// src/packets/common/ReadFlagBytes.ts
function read39(reader) {
  const data = {};
  const flag = reader.u8();
  if (flag & 1)
    data.flag1 = reader.u8();
  if (flag & 2)
    data.flag2 = reader.u8();
  if (flag & 4)
    data.flag4 = reader.u32();
  if (flag & 8)
    data.flag8 = reader.u32();
  if (flag & 16)
    data.flag10 = reader.u32();
  if (flag & 32)
    data.flag20 = reader.bytes(3);
  if (flag & 64)
    data.flag40 = reader.bytes(6);
  return data;
}

// src/packets/generated/definitions/PKTSkillStartNotify.ts
function read40(buf) {
  const reader = new Read(buf);
  const data = {};
  data.AimTargetPosition = read12(reader);
  data.CurPosition = read12(reader);
  data.CurDirectionYaw = read13(reader);
  if (reader.bool())
    data.PitchRotation = read13(reader);
  data.SkillId = reader.u32();
  data.NewPosition = read12(reader);
  data.SourceId = reader.u64();
  if (reader.bool())
    data.Unk1_m = reader.i32();
  data.SkillOptionData = read39(reader);
  if (reader.bool())
    data.AiStateId = reader.u32();
  data.SkillLevel = reader.u8();
  data.NewDirectionYaw = read13(reader);
  return data;
}
var name22 = "PKTSkillStartNotify";
var opcode22 = 45202;

// src/packets/generated/definitions/PKTStatChangeOriginNotify.ts
function read41(buf) {
  const reader = new Read(buf);
  const data = {};
  data.StatPairList = reader.array(
    reader.u16(),
    () => {
      const b = {};
      b.readNBytesInt64 = read6(reader);
      b.Unk0_0_1 = reader.u8();
      return b;
    },
    152
  );
  data.Unk1 = reader.array(
    reader.u16(),
    () => {
      const c = {};
      c.readNBytesInt64 = read6(reader);
      c.Unk0_0_1 = reader.u8();
      return c;
    },
    152
  );
  data.Unk2 = reader.u8();
  if (reader.bool())
    data.Unk3_0 = reader.u32();
  data.ObjectId = reader.u64();
  return data;
}
var name23 = "PKTStatChangeOriginNotify";
var opcode23 = 36460;

// src/packets/generated/definitions/PKTStatusEffectAddNotify.ts
function read42(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  if (reader.bool())
    data.Unk1_0 = reader.u64();
  data.statusEffectData = read7(reader);
  data.Unk3 = reader.u64();
  data.New = reader.bool();
  return data;
}
var name24 = "PKTStatusEffectAddNotify";
var opcode24 = 4713;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
function read43(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.Reason = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}
var name25 = "PKTStatusEffectRemoveNotify";
var opcode25 = 55030;

// src/packets/generated/definitions/PKTStatusEffectSyncDataNotify.ts
function read44(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  reader.skip(1);
  data.EffectInstanceId = reader.u32();
  reader.skip(4);
  data.Value = reader.u32();
  data.CharacterId = reader.u64();
  reader.skip(1);
  return data;
}
var name26 = "PKTStatusEffectSyncDataNotify";
var opcode26 = 35589;

// src/packets/generated/definitions/PKTTriggerBossBattleStatus.ts
function read45(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk2_m = reader.bool();
  data.Step = reader.u32();
  data.TriggerId = reader.u32();
  reader.skip(1);
  return data;
}
var name27 = "PKTTriggerBossBattleStatus";
var opcode27 = 35800;

// src/packets/generated/definitions/PKTTriggerFinishNotify.ts
function read46(buf) {
  const reader = new Read(buf);
  const data = {};
  data.TriggerId = reader.u32();
  data.PacketResultCode = reader.u32();
  data.Unk0_m = reader.u32();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  return data;
}
var name28 = "PKTTriggerFinishNotify";
var opcode28 = 53300;

// src/packets/generated/definitions/PKTTriggerStartNotify.ts
function read47(buf) {
  const reader = new Read(buf);
  const data = {};
  data.TriggerId = reader.u32();
  data.InvolvedPCs = reader.array(reader.u16(), () => reader.u64(), 40);
  data.SourceId = reader.u64();
  data.TriggerSignalType = reader.u32();
  return data;
}
var name29 = "PKTTriggerStartNotify";
var opcode29 = 50016;

// src/packets/generated/mapping.ts
var mapping = /* @__PURE__ */ new Map([
  [opcode, [name, read]],
  [opcode2, [name2, read2]],
  [opcode3, [name3, read3]],
  [opcode4, [name4, read5]],
  [opcode5, [name5, read9]],
  [opcode6, [name6, read15]],
  [opcode7, [name7, read16]],
  [opcode8, [name8, read19]],
  [opcode9, [name9, read21]],
  [opcode10, [name10, read22]],
  [opcode11, [name11, read24]],
  [opcode12, [name12, read25]],
  [opcode13, [name13, read26]],
  [
    opcode14,
    [name14, read27]
  ],
  [
    opcode15,
    [name15, read28]
  ],
  [opcode16, [name16, read29]],
  [opcode17, [name17, read30]],
  [opcode18, [name18, read32]],
  [
    opcode19,
    [name19, read36]
  ],
  [opcode20, [name20, read37]],
  [opcode21, [name21, read38]],
  [opcode22, [name22, read40]],
  [opcode23, [name23, read41]],
  [opcode24, [name24, read42]],
  [opcode25, [name25, read43]],
  [opcode26, [name26, read44]],
  [opcode27, [name27, read45]],
  [opcode28, [name28, read46]],
  [opcode29, [name29, read47]]
]);

// src/pkt-stream.ts
var PKTStream = class extends import_tiny_typed_emitter.TypedEmitter {
  #decompressor;
  constructor(decompressor) {
    super();
    this.#decompressor = decompressor;
  }
  read(buf) {
    try {
      if (buf.length < 6)
        return false;
      const xor = buf.readUInt8(5);
      if (xor > 2)
        return false;
      const compression = buf.readUInt8(4);
      if (compression > 3)
        return false;
      const data = buf.subarray(6);
      const opcode30 = buf.readUInt16LE(2);
      const pkt = mapping.get(opcode30);
      if (pkt) {
        const [name30, read48] = pkt;
        this.emit(
          name30,
          new PKT(data, opcode30, compression, Boolean(xor), this.#decompressor, read48)
        );
      }
      this.emit("*", data, opcode30, compression, Boolean(xor));
    } catch (e) {
      return false;
    }
  }
};
var PKT = class {
  #data;
  #opcode;
  #compression;
  #xor;
  #decompressor;
  #read;
  constructor(data, opcode30, compression, xor, decompressor, read48) {
    this.#data = data;
    this.#opcode = opcode30;
    this.#compression = compression;
    this.#xor = xor;
    this.#decompressor = decompressor;
    this.#read = read48;
  }
  #cached;
  get parsed() {
    if (!this.#cached) {
      try {
        this.#cached = this.#read(this.#decompressor.decrypt(this.#data, this.#opcode, this.#compression, this.#xor));
      } catch (e) {
        console.error(`[meter-core/pkt-stream] - ${e}`);
        return void 0;
      }
    }
    return this.#cached;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PKT,
  PKTStream
});
