var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name91 in all)
    __defProp(target, name91, { get: all[name91], enumerable: true });
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

// src/logger/logger.ts
var logger_exports = {};
__export(logger_exports, {
  LiveLogger: () => LiveLogger,
  Logger: () => Logger,
  ReplayLogger: () => ReplayLogger
});
module.exports = __toCommonJS(logger_exports);
var import_tiny_typed_emitter2 = require("tiny-typed-emitter");

// src/packets/stream.ts
var Read = class {
  /** Buffer */
  b;
  /** Offset */
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
var Write = class {
  /** Buffer */
  b;
  /** Offset */
  o;
  constructor(max = 65535) {
    this.b = Buffer.allocUnsafe(max);
    this.o = 0;
  }
  get value() {
    return this.b.subarray(0, this.o);
  }
  skip(length = 0) {
    this.o += length;
  }
  bool(value = false) {
    this.u8(value ? 1 : 0);
    return value;
  }
  u8(value = 0) {
    this.b.writeUInt8(value, this.o++);
  }
  i8(value = 0) {
    this.b.writeInt8(value, this.o++);
  }
  u16(value = 0) {
    this.o = this.b.writeUInt16LE(value, this.o);
  }
  i16(value = 0) {
    this.o = this.b.writeInt16LE(value, this.o);
  }
  u32(value = 0) {
    this.o = this.b.writeUInt32LE(value, this.o);
  }
  i32(value = 0) {
    this.o = this.b.writeInt32LE(value, this.o);
  }
  f32(value = 0) {
    this.o = this.b.writeFloatLE(value, this.o);
  }
  u64(value = 0n) {
    this.o = this.b.writeBigUInt64LE(BigInt(value), this.o);
  }
  i64(value = 0n) {
    this.o = this.b.writeBigInt64LE(BigInt(value), this.o);
  }
  string(value = "", maxLength = 0) {
    this.u16(value.length);
    if (value.length <= maxLength)
      this.o += this.b.write(value, this.o, "utf16le");
  }
  /**
   * @param opts.length Used when Buffer should be fixed length -> no header
   * @param opts.maxLen Used when Buffer has a max number of chunk -> chunk count is written as header
   * @param opts.lenType Required if maxLen, Used to specify header size possible values: ["u8", "u16", "u32"]
   * @param opts.multiplier Default: 1, Used to specify chunk size, Buffer size should be a multiple of multiplier, defaults to 1
   * @param opts If empty, fallback to opts.length = Buffer.length
   */
  bytes(value = Buffer.alloc(0), opts = {}) {
    if (opts.maxLen) {
      const chunkSize = opts.multiplier ?? 1;
      if (value.length % chunkSize)
        throw new Error(
          `Error writing bytes, chunkSize should be a multiple of intut value size, got ${value.length}%${chunkSize}`
        );
      const count = value.length / chunkSize;
      if (count > opts.maxLen)
        throw new Error(`Error writing bytes, input value size exceeded maxLen, got ${count} > ${opts.maxLen}`);
      if (!opts.lenType)
        throw new Error(`Error writing bytes, invalid lenType when writing chunks, got ${opts.lenType}`);
      this[opts.lenType](count);
    } else if (opts.length && value.length !== opts.length) {
      throw new Error(
        `Error writing bytes, input value size doesn't match opts.length, ${value.length} !== ${opts.lenType}`
      );
    }
    this.o += value.copy(this.b, this.o);
  }
  /**
   *
   * @param opts.maxLen Max size of array, size is set to 0 if overflow
   * @param opts.lenTypeUsed to specify header size possible values: ["u8", "u16", "u32"]
   */
  array(value = [], opts, callbackfn) {
    if (value === void 0 || value.length > opts.maxLen) {
      this[opts.lenType](0);
      return;
    }
    this[opts.lenType](value.length);
    value.forEach(callbackfn);
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
var name = "PKTAbilityChangeNotify";
var opcode = 37279;

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
var name2 = "PKTActiveAbilityNotify";
var opcode2 = 43908;

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
var name3 = "PKTAddonSkillFeatureChangeNotify";
var opcode3 = 36297;

// src/packets/generated/definitions/PKTAuthTokenResult.ts
function read6(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PacketResultCode = reader.u32();
  data.Unk1_m = reader.bytes(reader.u32(), 688);
  return data;
}
var name4 = "PKTAuthTokenResult";
var opcode4 = 36363;

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
var name5 = "PKTBlockSkillStateNotify";
var opcode5 = 33660;

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
var name6 = "PKTCounterAttackNotify";
var opcode6 = 44612;

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
var name7 = "PKTDeathNotify";
var opcode7 = 27220;

// src/packets/generated/definitions/PKTInitAbility.ts
function read10(buf) {
  const reader = new Read(buf);
  const data = {};
  data.struct_121 = reader.bytes(reader.u16(), 348, 48);
  data.abilityDataList = reader.array(reader.u16(), () => read(reader), 100);
  return data;
}
var name8 = "PKTInitAbility";
var opcode8 = 48153;

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
  return day > 0 && /* 
  month > 0 &&*/
  month <= 12 && (day <= daysInMonths[month] || day == 29 && month == 2 && IsLeapYear(year));
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
function dateToBigint(date) {
  let result = 0n;
  result |= BigInt(date.getUTCMilliseconds()) << 38n;
  result |= BigInt(date.getUTCSeconds()) << 32n;
  result |= BigInt(date.getUTCMinutes()) << 26n;
  result |= BigInt(date.getUTCHours()) << 21n;
  result |= BigInt(date.getUTCDate()) << 16n;
  result |= BigInt(date.getUTCMonth() + 1) << 12n;
  result |= BigInt(date.getUTCFullYear() < 2e3 ? date.getUTCFullYear() - 1900 : date.getUTCFullYear());
  return result;
}
function read11(reader, version2 = 0) {
  const s = reader.u16();
  if ((s & 4095) < 2079) {
    reader.o -= 2;
    return bigintToDate(reader.i64());
  } else {
    return bigintToDate(BigInt(s) & 0xfffn | 0x11000n);
  }
}
function write(writer, date = bigintToDate(0x1181fn)) {
  if (date.getUTCFullYear() >= 2079) {
    writer.u16(Number(dateToBigint(date) & 0xffffn));
  } else
    writer.i64(dateToBigint(date));
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
var name9 = "PKTInitEnv";
var opcode9 = 22330;

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
function read13(reader, version2 = 0) {
  const flag = reader.u8();
  const bytes = reader.bytes(flag >> 1 & 7);
  const result = bytesToInt64(bytes) << 4n | BigInt(flag >> 4);
  return (flag & 1) === 0 ? result : -result;
}
function write2(writer, value = 0n) {
  const tempBuf = Buffer.alloc(8);
  const negative = value < 0n;
  tempBuf.writeBigInt64LE((negative ? -value : value) >> 4n);
  let size = 0;
  for (const [i, byte] of tempBuf.entries()) {
    if (byte != 0)
      size = i + 1;
  }
  if (size > 7)
    throw new Error("Value is too large");
  writer.u8(Number((negative ? -value : value) & 0xfn) << 4 | (size & 7) << 1 | (negative ? 1 : 0));
  writer.bytes(tempBuf.subarray(0, size), { length: size });
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
var name10 = "PKTInitPC";
var opcode10 = 52266;

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
var name11 = "PKTInitLocal";
var opcode11 = 18980;

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
var name12 = "PKTMigrationExecute";
var opcode12 = 19365;

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
function read22(reader, version2 = 0) {
  let b = reader.u64();
  return {
    x: i21(Number(b & 0x1fffffn)),
    y: i21(Number(b >> 21n & 0x1fffffn)),
    z: i21(Number(b >> 42n & 0x1fffffn))
  };
}
function write3(writer, data = { x: 0, y: 0, z: 0 }) {
  writer.u64(
    BigInt(Math.round(data.x ?? 0) >>> 0 & 2097151) | BigInt(Math.round(data.y ?? 0) >>> 0 & 2097151) << 21n | BigInt(Math.round(data.z ?? 0) >>> 0 & 2097151) << 42n
  );
}

// src/packets/common/Angle.ts
function read23(reader, version2 = 0) {
  return reader.u16() * (2 * Math.PI) / 65536;
}
function write4(writer, data = 0) {
  writer.u16(Math.round(data * 65536 / (2 * Math.PI)) % 65536);
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
var name13 = "PKTNewNpc";
var opcode13 = 1040;

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
var name14 = "PKTNewNpcSummon";
var opcode14 = 3448;

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
var name15 = "PKTNewPC";
var opcode15 = 15971;

// src/packets/common/TripodIndex.ts
function read30(reader, version2 = 0) {
  return {
    first: reader.u8(),
    second: reader.u8(),
    third: reader.u8()
  };
}
function write5(writer, data) {
  writer.u8(data.first);
  writer.u8(data.second);
  writer.u8(data.third);
}

// src/packets/common/TripodLevel.ts
function read31(reader, version2 = 0) {
  return {
    first: reader.u16(),
    second: reader.u16(),
    third: reader.u16()
  };
}
function write6(writer, data) {
  writer.u16(data.first);
  writer.u16(data.second);
  writer.u16(data.third);
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
var name16 = "PKTNewProjectile";
var opcode16 = 6340;

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
var name17 = "PKTParalyzationStateNotify";
var opcode17 = 47778;

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
var name18 = "PKTPartyInfo";
var opcode18 = 54811;

// src/packets/generated/definitions/PKTPartyLeaveResult.ts
function read37(buf) {
  const reader = new Read(buf);
  const data = {};
  data.PartyLeaveType = reader.u8();
  data.PartyInstanceId = reader.u32();
  data.Name = reader.string(20);
  return data;
}
var name19 = "PKTPartyLeaveResult";
var opcode19 = 43243;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectAddNotify.ts
function read38(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.Unk0_m = reader.u8();
  return data;
}
var name20 = "PKTPartyPassiveStatusEffectAddNotify";
var opcode20 = 19025;

// src/packets/generated/definitions/PKTPartyPassiveStatusEffectRemoveNotify.ts
function read39(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name21 = "PKTPartyPassiveStatusEffectRemoveNotify";
var opcode21 = 40394;

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
var name22 = "PKTPartyStatusEffectAddNotify";
var opcode22 = 12206;

// src/packets/generated/definitions/PKTPartyStatusEffectRemoveNotify.ts
function read41(buf) {
  const reader = new Read(buf);
  const data = {};
  data.CharacterId = reader.u64();
  data.Unk1 = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.Reason = reader.u8();
  return data;
}
var name23 = "PKTPartyStatusEffectRemoveNotify";
var opcode23 = 38092;

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
var name24 = "PKTPartyStatusEffectResultNotify";
var opcode24 = 35973;

// src/packets/generated/definitions/PKTPassiveStatusEffectAddNotify.ts
function read43(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name25 = "PKTPassiveStatusEffectAddNotify";
var opcode25 = 12394;

// src/packets/generated/definitions/PKTPassiveStatusEffectRemoveNotify.ts
function read44(buf) {
  const reader = new Read(buf);
  const data = {};
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
var name26 = "PKTPassiveStatusEffectRemoveNotify";
var opcode26 = 2763;

// src/packets/generated/definitions/PKTRaidBossKillNotify.ts
function read45(buf) {
  const reader = new Read(buf);
  const data = {};
  data.Unk0 = reader.bytes(5);
  return data;
}
var name27 = "PKTRaidBossKillNotify";
var opcode27 = 1876;

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
var name28 = "PKTRaidResult";
var opcode28 = 10861;

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
var name29 = "PKTRemoveObject";
var opcode29 = 25018;

// src/packets/common/SkillMoveOptionData.ts
function read49(reader, version2 = 0) {
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
function write7(writer, data) {
  const flag = (data.MoveTime === void 0 ? 0 : 1 << 0) | (data.StandUpTime === void 0 ? 0 : 1 << 1) | (data.DownTime === void 0 ? 0 : 1 << 2) | (data.FreezeTime === void 0 ? 0 : 1 << 3) | (data.MoveHeight === void 0 ? 0 : 1 << 4) | (data.FarmostDist === void 0 ? 0 : 1 << 5) | (data.flag40 === void 0 ? 0 : 1 << 6);
  writer.u8(flag);
  if (flag & 1)
    writer.u32(data.MoveTime);
  if (flag & 2)
    writer.u32(data.StandUpTime);
  if (flag & 4)
    writer.u32(data.DownTime);
  if (flag & 8)
    writer.u32(data.FreezeTime);
  if (flag & 16)
    writer.u32(data.MoveHeight);
  if (flag & 32)
    writer.u32(data.FarmostDist);
  if (flag & 64)
    writer.bytes(data.flag40, { maxLen: 6, lenType: "u16" });
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
var name30 = "PKTSkillDamageAbnormalMoveNotify";
var opcode30 = 44143;

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
var name31 = "PKTSkillDamageNotify";
var opcode31 = 50947;

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
var name32 = "PKTSkillStageNotify";
var opcode32 = 44221;

// src/packets/common/SkillOptionData.ts
function read55(reader, version2 = 0) {
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
function write8(writer, data) {
  const flag = (data.LayerIndex === void 0 ? 0 : 1 << 0) | (data.StartStageIndex === void 0 ? 0 : 1 << 1) | (data.TransitIndex === void 0 ? 0 : 1 << 2) | (data.StageStartTime === void 0 ? 0 : 1 << 3) | (data.FarmostDistance === void 0 ? 0 : 1 << 4) | (data.TripodIndex === void 0 ? 0 : 1 << 5) | (data.TripodLevel === void 0 ? 0 : 1 << 6);
  writer.u8(flag);
  if (flag & 1)
    writer.u8(data.LayerIndex);
  if (flag & 2)
    writer.u8(data.StartStageIndex);
  if (flag & 4)
    writer.u32(data.TransitIndex);
  if (flag & 8)
    writer.u32(data.StageStartTime);
  if (flag & 16)
    writer.u32(data.FarmostDistance);
  if (flag & 32)
    write5(writer, data.TripodIndex);
  if (flag & 64)
    write6(writer, data.TripodLevel);
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
var name33 = "PKTSkillStartNotify";
var opcode33 = 16905;

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
var name34 = "PKTStatChangeOriginNotify";
var opcode34 = 6051;

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
var name35 = "PKTStatusEffectAddNotify";
var opcode35 = 56830;

// src/packets/generated/definitions/PKTStatusEffectRemoveNotify.ts
function read59(buf) {
  const reader = new Read(buf);
  const data = {};
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.ObjectId = reader.u64();
  data.Reason = reader.u8();
  return data;
}
var name36 = "PKTStatusEffectRemoveNotify";
var opcode36 = 23914;

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
var name37 = "PKTStatusEffectDurationNotify";
var opcode37 = 46140;

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
var name38 = "PKTStatusEffectSyncDataNotify";
var opcode38 = 2750;

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
var name39 = "PKTTriggerBossBattleStatus";
var opcode39 = 9915;

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
var name40 = "PKTTriggerFinishNotify";
var opcode40 = 53812;

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
var name41 = "PKTTriggerStartNotify";
var opcode41 = 49092;

// src/packets/generated/definitions/PKTTroopMemberUpdateMinNotify.ts
function read65(buf) {
  const reader = new Read(buf);
  const data = {};
  data.MaxHp = read13(reader);
  data.CharacterId = reader.u64();
  data.Unk0_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read14(reader), 80);
  data.Position = reader.u64();
  data.CurHp = read13(reader);
  return data;
}
var name42 = "PKTTroopMemberUpdateMinNotify";
var opcode42 = 7345;

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
var name43 = "PKTIdentityGaugeChangeNotify";
var opcode43 = 11255;

// src/packets/generated/definitions/PKTZoneObjectUnpublishNotify.ts
function read67(buf) {
  const reader = new Read(buf);
  const data = {};
  data.ObjectId = reader.u64();
  reader.skip(2);
  return data;
}
var name44 = "PKTZoneObjectUnpublishNotify";
var opcode44 = 53893;

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
var name45 = "PKTZoneStatusEffectAddNotify";
var opcode45 = 49467;

// src/packets/generated/definitions/PKTZoneStatusEffectRemoveNotify.ts
function read70(buf) {
  const reader = new Read(buf);
  const data = {};
  reader.skip(1);
  data.StatusEffectId = reader.u32();
  reader.skip(1);
  return data;
}
var name46 = "PKTZoneStatusEffectRemoveNotify";
var opcode46 = 5255;

// src/packets/generated/mapping.ts
var mapping = /* @__PURE__ */ new Map([
  [opcode, [name, read2]],
  [opcode2, [name2, read4]],
  [
    opcode3,
    [name3, read5]
  ],
  [opcode4, [name4, read6]],
  [opcode5, [name5, read7]],
  [opcode6, [name6, read8]],
  [opcode7, [name7, read9]],
  [opcode8, [name8, read10]],
  [opcode9, [name9, read12]],
  [opcode10, [name10, read16]],
  [opcode11, [name11, read18]],
  [opcode12, [name12, read19]],
  [opcode13, [name13, read25]],
  [opcode14, [name14, read26]],
  [opcode15, [name15, read29]],
  [opcode16, [name16, read33]],
  [opcode17, [name17, read34]],
  [opcode18, [name18, read36]],
  [opcode19, [name19, read37]],
  [
    opcode20,
    [name20, read38]
  ],
  [
    opcode21,
    [name21, read39]
  ],
  [opcode22, [name22, read40]],
  [
    opcode23,
    [name23, read41]
  ],
  [
    opcode24,
    [name24, read42]
  ],
  [
    opcode25,
    [name25, read43]
  ],
  [
    opcode26,
    [name26, read44]
  ],
  [opcode27, [name27, read45]],
  [opcode28, [name28, read46]],
  [opcode29, [name29, read48]],
  [
    opcode30,
    [name30, read52]
  ],
  [opcode31, [name31, read53]],
  [opcode32, [name32, read54]],
  [opcode33, [name33, read56]],
  [opcode34, [name34, read57]],
  [opcode35, [name35, read58]],
  [opcode36, [name36, read59]],
  [opcode37, [name37, read60]],
  [opcode38, [name38, read61]],
  [opcode39, [name39, read62]],
  [opcode40, [name40, read63]],
  [opcode41, [name41, read64]],
  [opcode42, [name42, read65]],
  [opcode43, [name43, read66]],
  [opcode44, [name44, read67]],
  [opcode45, [name45, read69]],
  [
    opcode46,
    [name46, read70]
  ]
]);

// src/packets/log/structures/AbilityData.ts
function read71(reader, version2) {
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
function read72(reader, version2) {
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read71(reader, version2), 100);
  return data;
}
function write10(writer, data) {
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write9(writer, obj);
  });
}
var logId = 0;
var name47 = "AbilityChangeNotify";

// src/packets/log/structures/ActiveAbility.ts
function read73(reader, version2) {
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
function read74(reader, version2) {
  const data = {};
  data.activeAbilityList = reader.array(reader.u16(), () => read73(reader, version2), 60);
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
var name48 = "ActiveAbilityNotify";

// src/packets/log/definitions/AddonSkillFeatureChangeNotify.ts
function read75(reader, version2) {
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
var name49 = "AddonSkillFeatureChangeNotify";

// src/packets/log/definitions/BlockSkillStateNotify.ts
function read76(reader, version2) {
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
var name50 = "BlockSkillStateNotify";

// src/packets/log/definitions/CounterAttackNotify.ts
function read77(reader, version2) {
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
var name51 = "CounterAttackNotify";

// src/packets/log/definitions/DeathNotify.ts
function read78(reader, version2) {
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
var name52 = "DeathNotify";

// src/packets/log/definitions/InitAbility.ts
function read79(reader, version2) {
  const data = {};
  data.abilityDataList = reader.array(reader.u16(), () => read71(reader, version2), 100);
  return data;
}
function write17(writer, data) {
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj) => {
    write9(writer, obj);
  });
}
var logId7 = 7;
var name53 = "InitAbility";

// src/packets/log/definitions/InitEnv.ts
function read80(reader, version2) {
  const data = {};
  data.PlayerId = reader.u64();
  return data;
}
function write18(writer, data) {
  writer.u64(data.PlayerId);
}
var logId8 = 8;
var name54 = "InitEnv";

// src/packets/log/structures/StatusEffectData.ts
function read81(reader, version2) {
  const data = {};
  data.SkillLevel = reader.u8();
  data.OccurTime = read11(reader, version2);
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
function read82(reader, version2) {
  const data = {};
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const h = {};
      h.StatType = reader.u8();
      h.Value = read13(reader, version2);
      return h;
    },
    152
  );
  data.Name = reader.string(20);
  data.Level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => read81(reader, version2), 80);
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
var name55 = "InitPC";

// src/packets/log/definitions/InitLocal.ts
function read83(reader, version2) {
  const data = {};
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const l = {};
      l.StatType = reader.u8();
      l.Value = read13(reader, version2);
      return l;
    },
    152
  );
  data.statusEffectDatas = reader.array(reader.u16(), () => read81(reader, version2), 80);
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
  data.abilityDataList = reader.array(reader.u16(), () => read71(reader, version2), 100);
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
var name56 = "InitLocal";

// src/packets/log/definitions/MigrationExecute.ts
function read84(reader, version2) {
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
var name57 = "MigrationExecute";

// src/packets/log/structures/NpcData.ts
function read85(reader, version2) {
  const data = {};
  data.SpawnIndex = reader.u32();
  data.ObjectId = reader.u64();
  if (reader.bool())
    data.TransitIndex = reader.u32();
  data.Position = read22(reader, version2);
  data.statusEffectDatas = reader.array(reader.u16(), () => read81(reader, version2), 80);
  data.DirectionYaw = read23(reader, version2);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const x = {};
      x.StatType = reader.u8();
      x.Value = read13(reader, version2);
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
function read86(reader, version2) {
  const data = {};
  data.NpcStruct = read85(reader, version2);
  return data;
}
function write24(writer, data) {
  write23(writer, data.NpcStruct);
}
var logId12 = 12;
var name58 = "NewNpc";

// src/packets/log/definitions/NewNpcSummon.ts
function read87(reader, version2) {
  const data = {};
  data.PublishReason = reader.u8();
  data.OwnerId = reader.u64();
  data.NpcData = read85(reader, version2);
  return data;
}
function write25(writer, data) {
  writer.u8(data.PublishReason);
  writer.u64(data.OwnerId);
  write23(writer, data.NpcData);
}
var logId13 = 13;
var name59 = "NewNpcSummon";

// src/packets/log/structures/PCStruct.ts
function read88(reader, version2) {
  const data = {};
  data.GearLevel = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const z = {};
      z.StatType = reader.u8();
      z.Value = read13(reader, version2);
      return z;
    },
    152
  );
  data.Name = reader.string(20);
  data.Heading = read23(reader, version2);
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
  data.statusEffectDatas = reader.array(reader.u16(), () => read81(reader, version2), 80);
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
function read89(reader, version2) {
  const data = {};
  data.PCStruct = read88(reader, version2);
  return data;
}
function write27(writer, data) {
  write26(writer, data.PCStruct);
}
var logId14 = 14;
var name60 = "NewPC";

// src/packets/log/structures/ProjectileInfo.ts
function read90(reader, version2) {
  const data = {};
  data.tripodIndex = read30(reader, version2);
  data.ChainSkillEffect = reader.u32();
  data.SkillEffect = reader.u32();
  data.SkillId = reader.u32();
  data.TargetObjectId = reader.u64();
  data.OwnerId = reader.u64();
  data.SkillLevel = reader.u8();
  data.ProjectileId = reader.u64();
  data.tripodLevel = read31(reader, version2);
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
function read91(reader, version2) {
  const data = {};
  data.projectileInfo = read90(reader, version2);
  return data;
}
function write29(writer, data) {
  write28(writer, data.projectileInfo);
}
var logId15 = 15;
var name61 = "NewProjectile";

// src/packets/log/definitions/ParalyzationStateNotify.ts
function read92(reader, version2) {
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
var name62 = "ParalyzationStateNotify";

// src/packets/log/structures/PartyMemberData.ts
function read93(reader, version2) {
  const data = {};
  data.MaxHp = read13(reader, version2);
  data.CharacterId = reader.u64();
  data.Position = read22(reader, version2);
  data.TransitIndex = reader.u32();
  data.CurHp = read13(reader, version2);
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
function read94(reader, version2) {
  const data = {};
  data.RaidInstanceId = reader.u32();
  data.LootGrade = reader.u32();
  data.PartyType = reader.u8();
  data.PartyInstanceId = reader.u32();
  data.PartyLootType = reader.u8();
  data.MemberDatas = reader.array(reader.u16(), () => read93(reader, version2), 40);
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
var name63 = "PartyInfo";

// src/packets/log/definitions/PartyLeaveResult.ts
function read95(reader, version2) {
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
var name64 = "PartyLeaveResult";

// src/packets/log/definitions/PartyPassiveStatusEffectAddNotify.ts
function read96(reader, version2) {
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
var name65 = "PartyPassiveStatusEffectAddNotify";

// src/packets/log/definitions/PartyPassiveStatusEffectRemoveNotify.ts
function read97(reader, version2) {
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
var name66 = "PartyPassiveStatusEffectRemoveNotify";

// src/packets/log/definitions/PartyStatusEffectAddNotify.ts
function read98(reader, version2) {
  const data = {};
  data.CharacterId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => read81(reader, version2), 80);
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
var name67 = "PartyStatusEffectAddNotify";

// src/packets/log/definitions/PartyStatusEffectRemoveNotify.ts
function read99(reader, version2) {
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
var name68 = "PartyStatusEffectRemoveNotify";

// src/packets/log/definitions/PartyStatusEffectResultNotify.ts
function read100(reader, version2) {
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
var name69 = "PartyStatusEffectResultNotify";

// src/packets/log/definitions/PassiveStatusEffectAddNotify.ts
function read101(reader, version2) {
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
var name70 = "PassiveStatusEffectAddNotify";

// src/packets/log/definitions/PassiveStatusEffectRemoveNotify.ts
function read102(reader, version2) {
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
var name71 = "PassiveStatusEffectRemoveNotify";

// src/packets/log/definitions/RaidBossKillNotify.ts
function read103(reader, version2) {
  const data = {};
  return data;
}
function write41(writer, data) {
}
var logId26 = 26;
var name72 = "RaidBossKillNotify";

// src/packets/log/definitions/RaidResult.ts
function read104(reader, version2) {
  const data = {};
  return data;
}
function write42(writer, data) {
}
var logId27 = 27;
var name73 = "RaidResult";

// src/packets/log/structures/UnpublishObject.ts
function read105(reader, version2) {
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
function read106(reader, version2) {
  const data = {};
  data.unpublishedObjects = reader.array(reader.u16(), () => read105(reader, version2), 200);
  return data;
}
function write44(writer, data) {
  writer.array(data.unpublishedObjects, { maxLen: 200, lenType: "u16" }, (obj) => {
    write43(writer, obj);
  });
}
var logId28 = 28;
var name74 = "RemoveObject";

// src/packets/log/structures/SkillDamageEvent.ts
function read107(reader, version2) {
  const data = {};
  data.Modifier = reader.u8();
  data.TargetId = reader.u64();
  data.DamageType = reader.u8();
  if (reader.bool())
    data.DamageAttr = reader.u8();
  data.CurHp = read13(reader, version2);
  data.Unk3_m = reader.u16();
  data.MaxHp = read13(reader, version2);
  data.Damage = read13(reader, version2);
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
function read108(reader, version2) {
  const data = {};
  data.SkillMoveOptionData = read49(reader, version2);
  data.Destination = read22(reader, version2);
  data.Position = read22(reader, version2);
  data.skillDamageEvent = read107(reader, version2);
  return data;
}
function write46(writer, data) {
  write7(writer, data.SkillMoveOptionData);
  write3(writer, data.Destination);
  write3(writer, data.Position);
  write45(writer, data.skillDamageEvent);
}

// src/packets/log/definitions/SkillDamageAbnormalMoveNotify.ts
function read109(reader, version2) {
  const data = {};
  data.SkillId = reader.u32();
  data.SkillDamageAbnormalMoveEvents = reader.array(
    reader.u16(),
    () => read108(reader, version2),
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
var name75 = "SkillDamageAbnormalMoveNotify";

// src/packets/log/definitions/SkillDamageNotify.ts
function read110(reader, version2) {
  const data = {};
  data.SkillLevel = reader.u8();
  data.SourceId = reader.u64();
  data.SkillId = reader.u32();
  data.SkillDamageEvents = reader.array(reader.u16(), () => read107(reader, version2), 50);
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
var name76 = "SkillDamageNotify";

// src/packets/log/definitions/SkillStageNotify.ts
function read111(reader, version2) {
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
var name77 = "SkillStageNotify";

// src/packets/log/definitions/SkillStartNotify.ts
function read112(reader, version2) {
  const data = {};
  data.SourceId = reader.u64();
  data.CurDirectionYaw = read23(reader, version2);
  data.NewDirectionYaw = read23(reader, version2);
  data.AimTargetPosition = read22(reader, version2);
  if (reader.bool())
    data.PitchRotation = read23(reader, version2);
  if (reader.bool())
    data.AiStateId = reader.u32();
  data.CurPosition = read22(reader, version2);
  if (reader.bool())
    data.Unk1_m = reader.u32();
  data.SkillLevel = reader.u8();
  data.NewPosition = read22(reader, version2);
  data.SkillId = reader.u32();
  data.SkillOptionData = read55(reader, version2);
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
var name78 = "SkillStartNotify";

// src/packets/log/definitions/StatusEffectAddNotify.ts
function read113(reader, version2) {
  const data = {};
  data.statusEffectData = read81(reader, version2);
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
var name79 = "StatusEffectAddNotify";

// src/packets/log/definitions/StatusEffectRemoveNotify.ts
function read114(reader, version2) {
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
var name80 = "StatusEffectRemoveNotify";

// src/packets/log/definitions/StatusEffectDurationNotify.ts
function read115(reader, version2) {
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
var name81 = "StatusEffectDurationNotify";

// src/packets/log/definitions/StatusEffectSyncDataNotify.ts
function read116(reader, version2) {
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
var name82 = "StatusEffectSyncDataNotify";

// src/packets/log/definitions/TriggerBossBattleStatus.ts
function read117(reader, version2) {
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
var name83 = "TriggerBossBattleStatus";

// src/packets/log/definitions/TriggerFinishNotify.ts
function read118(reader, version2) {
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
var name84 = "TriggerFinishNotify";

// src/packets/log/definitions/TriggerStartNotify.ts
function read119(reader, version2) {
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
var name85 = "TriggerStartNotify";

// src/packets/log/definitions/TroopMemberUpdateMinNotify.ts
function read120(reader, version2) {
  const data = {};
  data.MaxHp = read13(reader, version2);
  data.CharacterId = reader.u64();
  data.Unk0_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => read81(reader, version2), 80);
  data.Position = reader.u64();
  data.CurHp = read13(reader, version2);
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
var name86 = "TroopMemberUpdateMinNotify";

// src/packets/log/definitions/IdentityGaugeChangeNotify.ts
function read121(reader, version2) {
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
var name87 = "IdentityGaugeChangeNotify";

// src/packets/log/definitions/ZoneObjectUnpublishNotify.ts
function read122(reader, version2) {
  const data = {};
  data.ObjectId = reader.u64();
  return data;
}
function write60(writer, data) {
  writer.u64(data.ObjectId);
}
var logId42 = 43;
var name88 = "ZoneObjectUnpublishNotify";

// src/packets/log/structures/ZoneStatusEffectData.ts
function read123(reader, version2) {
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
function read124(reader, version2) {
  const data = {};
  data.zoneStatusEffectDataList = reader.array(reader.u16(), () => read123(reader, version2), 4);
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
var name89 = "ZoneStatusEffectAddNotify";

// src/packets/log/definitions/ZoneStatusEffectRemoveNotify.ts
function read125(reader, version2) {
  const data = {};
  data.StatusEffectId = reader.u32();
  return data;
}
function write63(writer, data) {
  writer.u32(data.StatusEffectId);
}
var logId44 = 45;
var name90 = "ZoneStatusEffectRemoveNotify";

// src/packets/log/codeMapping.ts
var codeMapping = /* @__PURE__ */ new Map([
  [opcode, [logId]],
  [opcode2, [logId2]],
  [opcode3, [logId3]],
  [opcode5, [logId4]],
  [opcode6, [logId5]],
  [opcode7, [logId6]],
  [opcode8, [logId7]],
  [opcode9, [logId8]],
  [opcode10, [logId9]],
  [opcode11, [logId10]],
  [opcode12, [logId11]],
  [opcode13, [logId12]],
  [opcode14, [logId13]],
  [opcode15, [logId14]],
  [opcode16, [logId15]],
  [opcode17, [logId16]],
  [opcode18, [logId17]],
  [opcode19, [logId18]],
  [opcode20, [logId19]],
  [opcode21, [logId20]],
  [opcode22, [logId21]],
  [opcode23, [logId22]],
  [opcode24, [logId23]],
  [opcode25, [logId24]],
  [opcode26, [logId25]],
  [opcode27, [logId26]],
  [opcode28, [logId27]],
  [opcode29, [logId28]],
  [opcode30, [logId29]],
  [opcode31, [logId30]],
  [opcode32, [logId31]],
  [opcode33, [logId32]],
  [opcode35, [logId33]],
  [opcode36, [logId34]],
  [opcode37, [logId35]],
  [opcode38, [logId36]],
  [opcode39, [logId37]],
  [opcode40, [logId38]],
  [opcode41, [logId39]],
  [opcode42, [logId40]],
  [opcode43, [logId41]],
  [opcode44, [logId42]],
  [opcode45, [logId43]],
  [opcode46, [logId44]]
]);

// src/packets/log/logMapping.ts
var logMapping = /* @__PURE__ */ new Map([
  [logId, [name47, read72, write10]],
  [logId2, [name48, read74, write12]],
  [
    logId3,
    [name49, read75, write13]
  ],
  [
    logId4,
    [name50, read76, write14]
  ],
  [logId5, [name51, read77, write15]],
  [logId6, [name52, read78, write16]],
  [logId7, [name53, read79, write17]],
  [logId8, [name54, read80, write18]],
  [logId9, [name55, read82, write20]],
  [logId10, [name56, read83, write21]],
  [logId11, [name57, read84, write22]],
  [logId12, [name58, read86, write24]],
  [logId13, [name59, read87, write25]],
  [logId14, [name60, read89, write27]],
  [logId15, [name61, read91, write29]],
  [
    logId16,
    [name62, read92, write30]
  ],
  [logId17, [name63, read94, write32]],
  [logId18, [name64, read95, write33]],
  [
    logId19,
    [
      name65,
      read96,
      write34
    ]
  ],
  [
    logId20,
    [
      name66,
      read97,
      write35
    ]
  ],
  [
    logId21,
    [name67, read98, write36]
  ],
  [
    logId22,
    [name68, read99, write37]
  ],
  [
    logId23,
    [name69, read100, write38]
  ],
  [
    logId24,
    [name70, read101, write39]
  ],
  [
    logId25,
    [
      name71,
      read102,
      write40
    ]
  ],
  [logId26, [name72, read103, write41]],
  [logId27, [name73, read104, write42]],
  [logId28, [name74, read106, write44]],
  [
    logId29,
    [name75, read109, write47]
  ],
  [logId30, [name76, read110, write48]],
  [logId31, [name77, read111, write49]],
  [logId32, [name78, read112, write50]],
  [
    logId33,
    [name79, read113, write51]
  ],
  [
    logId34,
    [name80, read114, write52]
  ],
  [
    logId35,
    [name81, read115, write53]
  ],
  [
    logId36,
    [name82, read116, write54]
  ],
  [
    logId37,
    [name83, read117, write55]
  ],
  [logId38, [name84, read118, write56]],
  [logId39, [name85, read119, write57]],
  [
    logId40,
    [name86, read120, write58]
  ],
  [
    logId41,
    [name87, read121, write59]
  ],
  [
    logId42,
    [name88, read122, write60]
  ],
  [
    logId43,
    [name89, read124, write62]
  ],
  [
    logId44,
    [name90, read125, write63]
  ]
]);

// src/pkt-stream.ts
var import_tiny_typed_emitter = require("tiny-typed-emitter");
var PKT = class {
  #data;
  #opcode;
  #compression;
  #xor;
  #decompressor;
  #read;
  constructor(data, opcode47, compression, xor, decompressor, read126) {
    this.#data = data;
    this.#opcode = opcode47;
    this.#compression = compression;
    this.#xor = xor;
    this.#decompressor = decompressor;
    this.#read = read126;
  }
  // in case we listen for it more than once
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

// src/logger/logEvent.ts
var LogEvent = class {
  time;
  #logId;
  #data;
  #read;
  #write;
  constructor(...args) {
    if (args.length === 5) {
      const [data, logId45, time, read126, write64] = args;
      this.#data = data;
      this.time = time;
      this.#logId = logId45;
      this.#read = read126;
      this.#write = write64;
    } else if (args.length === 3) {
      const [pkt, logId45, write64] = args;
      this.#data = Buffer.alloc(0);
      this.time = /* @__PURE__ */ new Date();
      this.#logId = logId45;
      this.#read = () => pkt;
      this.#write = write64;
    } else {
      throw new Error(`[meter-core/logger/parser] - LogEvent<T>: Invalid constructor arguments`);
    }
  }
  // in case we listen for it more than once
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
        buf.writeUintLE(+/* @__PURE__ */ new Date(), HEADER_DATE_OFFSET, HEADER_DATE_SIZE);
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
var import_fs = require("fs");

// src/pkt-buffer.ts
var PacketBuffer = class {
  buffer;
  position;
  out;
  constructor() {
    this.buffer = null;
    this.position = 0;
    this.out = [];
  }
  write(data) {
    while (data.length > 0) {
      if (this.buffer) {
        if (this.buffer.length < 2) {
          const old = this.buffer[0];
          const size2 = (data[0] << 8) + old;
          this.buffer = Buffer.alloc(size2);
          this.buffer[0] = old;
          this.position = 1;
        }
        const remaining = Math.min(data.length, this.buffer.length - this.position);
        data.copy(this.buffer, this.position, 0, remaining);
        this.position += remaining;
        if (this.position === this.buffer.length) {
          this.out.push(this.buffer);
          this.buffer = null;
          this.position = 0;
        }
        data = data.subarray(remaining);
        continue;
      }
      if (data.length < 2) {
        this.buffer = Buffer.from(data);
        this.position = data.length;
        break;
      }
      const size = data.readUInt16LE(0);
      if (size === 0) {
        this.buffer = null;
        return;
      }
      if (size > data.length) {
        this.buffer = Buffer.alloc(size);
        data.copy(this.buffer);
        this.position = data.length;
        break;
      }
      this.out.push(data.subarray(0, size));
      data = data.subarray(size);
    }
  }
  read() {
    return this.out.shift();
  }
};

// src/logger/logger.ts
var import_fs2 = require("fs");

// src/packets/log/version.ts
var version = 0;

// src/logger/logger.ts
var Logger = class extends import_tiny_typed_emitter2.TypedEmitter {
  //Only common behaviour is the emitted logStreamEvent
};
var LiveLogger = class extends Logger {
  #decompressor;
  #logWriter;
  constructor(stream, decompressor, filepath) {
    super();
    this.#decompressor = decompressor;
    if (filepath) {
      this.#logWriter = (0, import_fs.createWriteStream)(filepath, { highWaterMark: 0 });
    }
    const versionBuffer = Buffer.allocUnsafe(HEADER_VERSION_SIZE);
    versionBuffer.writeUIntLE(version, 0, HEADER_VERSION_SIZE);
    this.#logWriter?.write(versionBuffer);
    stream.on("*", this.handlePkt.bind(this));
  }
  handlePkt(data, opcode47, compression, xor) {
    try {
      const pktMap = mapping.get(opcode47);
      const codeMap = codeMapping.get(opcode47);
      if (pktMap && codeMap) {
        const [logId45] = codeMap;
        const [pktName, readPkt] = pktMap;
        const logMap = logMapping.get(logId45);
        if (logMap) {
          const [logName, readLog, writeLog] = logMap;
          const pkt = new PKT(Buffer.from(data), opcode47, compression, Boolean(xor), this.#decompressor, readPkt);
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
    const logReader = (0, import_fs2.createReadStream)(filepath);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LiveLogger,
  Logger,
  ReplayLogger
});
