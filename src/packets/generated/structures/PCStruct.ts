// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Struct_636 from "../structures/Struct_636";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_674 from "../structures/Struct_674";
export type PCStruct = {
  Unk0: number;
  Unk1: number;
  Unk5_m: number;
  Unk3_0?: Buffer;
  Unk4: number;
  struct_300: Struct_636.Struct_636[];
  Unk6: Buffer;
  statPair: { StatType: number; Value: bigint }[];
  Name: string;
  CharacterId: bigint;
  Unk10: number;
  Unk11: Buffer;
  struct_120: Buffer;
  Heading: Angle.Angle;
  Unk14: number;
  Unk15: number;
  Unk16: number;
  struct_299: Struct_636.Struct_636[];
  ClassId: number;
  Unk19: number;
  Unk20: string;
  Unk21: number;
  Unk22: number;
  PlayerId: bigint;
  Unk24: number;
  Unk25: number;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
  Unk27: number;
  Unk28: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk30: number;
  Unk31: number;
  Unk32: number;
  GearLevel: number;
  Unk34: bigint;
  Unk35: number;
  Unk36: number;
  Unk37: number;
  struct_86: Buffer;
  struct_372: Struct_674.Struct_674[];
  Level: number;
  Unk41: number;
  Unk42: number;
  Unk43: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u8();
  data.Unk5_m = reader.u32();
  if (reader.bool()) data.Unk3_0 = reader.bytes(12);
  data.Unk4 = reader.u16();
  data.struct_300 = reader.array(reader.u16(), () => Struct_636.read(reader), 30);
  data.Unk6 = reader.bytes(25);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const A = {} as any;
      A.StatType = reader.u8();
      A.Value = ReadNBytesInt64.read(reader);
      return A;
    },
    152
  );
  data.Name = reader.string(20);
  data.CharacterId = reader.u64();
  data.Unk10 = reader.u16();
  data.Unk11 = reader.bytes(5);
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.Heading = Angle.read(reader);
  data.Unk14 = reader.u8();
  data.Unk15 = reader.u32();
  data.Unk16 = reader.u8();
  data.struct_299 = reader.array(reader.u16(), () => Struct_636.read(reader), 9);
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
      const C = {} as any;
      C.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      C.SkillId = reader.u32();
      return C;
    },
    200
  );
  data.Unk27 = reader.u32();
  data.Unk28 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.Unk30 = reader.u8();
  data.Unk31 = reader.u32();
  data.Unk32 = reader.u8();
  data.GearLevel = reader.u32();
  data.Unk34 = reader.u64();
  data.Unk35 = reader.u8();
  data.Unk36 = reader.u16();
  data.Unk37 = reader.u8();
  data.struct_86 = reader.bytes(reader.u32(), 512);
  data.struct_372 = reader.array(reader.u16(), () => Struct_674.read(reader), 5);
  data.Level = reader.u16();
  data.Unk41 = reader.u32();
  data.Unk42 = reader.u8();
  data.Unk43 = reader.u32();
  return data;
}
