// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Struct_635 from "../structures/Struct_635";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_673 from "../structures/Struct_673";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PCStruct = {
  struct_296: Struct_635.Struct_635[];
  statPair: { StatType: number; Value: bigint }[];
  Unk2: number;
  Name: string;
  Unk4: number;
  Unk5: number;
  Unk6: number;
  GearLevel: number;
  struct_295: Struct_635.Struct_635[];
  Unk9: Buffer;
  Unk5_m: number;
  CharacterId: bigint;
  Unk12: number;
  Unk13: number;
  struct_120: Buffer;
  Unk15: number;
  Unk16: number;
  Unk17: string;
  Unk18: number;
  Unk19_0?: Buffer;
  ClassId: number;
  Level: number;
  Unk22: number;
  struct_367: Struct_673.Struct_673[];
  Unk24: number;
  Unk25: number;
  Unk26: number;
  Unk27: number;
  Unk28: number;
  Unk29: Buffer;
  Unk30: bigint;
  Heading: Angle.Angle;
  Unk32: number;
  Unk33: number;
  Unk34: number;
  Unk35: number;
  Unk36: number;
  addonSkillFeatureList: { SkillId: number; addonSkillFeatureIdList: number[] }[];
  Unk38: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  PlayerId: bigint;
  Unk41: number;
  Unk42: number;
  struct_87: Buffer;
  Unk44: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.struct_296 = reader.array(reader.u16(), () => Struct_635.read(reader), 32);
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
  data.Unk2 = reader.u8();
  data.Name = reader.string(20);
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u32();
  data.Unk6 = reader.u8();
  data.GearLevel = reader.u32();
  data.struct_295 = reader.array(reader.u16(), () => Struct_635.read(reader), 9);
  data.Unk9 = reader.bytes(25);
  data.Unk5_m = reader.u32();
  data.CharacterId = reader.u64();
  data.Unk12 = reader.u8();
  data.Unk13 = reader.u8();
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.Unk15 = reader.u8();
  data.Unk16 = reader.u16();
  data.Unk17 = reader.string(20);
  data.Unk18 = reader.u32();
  if (reader.bool()) data.Unk19_0 = reader.bytes(12);
  data.ClassId = reader.u16();
  data.Level = reader.u16();
  data.Unk22 = reader.u32();
  data.struct_367 = reader.array(reader.u16(), () => Struct_673.read(reader), 5);
  data.Unk24 = reader.u32();
  data.Unk25 = reader.u8();
  data.Unk26 = reader.u8();
  data.Unk27 = reader.u8();
  data.Unk28 = reader.u8();
  data.Unk29 = reader.bytes(5);
  data.Unk30 = reader.u64();
  data.Heading = Angle.read(reader);
  data.Unk32 = reader.u32();
  data.Unk33 = reader.u8();
  data.Unk34 = reader.u8();
  data.Unk35 = reader.u16();
  data.Unk36 = reader.u16();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const D = {} as any;
      D.SkillId = reader.u32();
      D.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return D;
    },
    200
  );
  data.Unk38 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.PlayerId = reader.u64();
  data.Unk41 = reader.u32();
  data.Unk42 = reader.u32();
  data.struct_87 = reader.bytes(reader.u32(), 512);
  data.Unk44 = reader.u32();
  return data;
}
