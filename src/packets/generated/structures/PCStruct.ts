// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Struct_636 from "../structures/Struct_636";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_674 from "../structures/Struct_674";
export type PCStruct = {
  Unk0: number;
  Unk1: number;
  Unk2: number;
  Unk3: bigint;
  struct_83: Buffer;
  Unk5: number;
  Unk6: number;
  Level: number;
  Unk8: number;
  Unk9: number;
  struct_297: Struct_636.Struct_636[];
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  PlayerId: bigint;
  Unk13: string;
  Unk14: Buffer;
  Unk15: number;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
  ClassId: number;
  Unk18: number;
  Unk19: number;
  Unk20_0?: Buffer;
  Unk21: number;
  Unk22: number;
  Unk23: number;
  Unk24: number;
  struct_296: Struct_636.Struct_636[];
  Heading: Angle.Angle;
  statPair: { StatType: number; Value: bigint }[];
  Unk28: number;
  Unk29: number;
  struct_366: Struct_674.Struct_674[];
  GearLevel: number;
  Unk32: number;
  Unk33: number;
  Unk34: number;
  Unk35: number;
  Unk36: number;
  Name: string;
  Unk5_m: number;
  Unk39: number;
  CharacterId: bigint;
  Unk41: number;
  Unk42: Buffer;
  struct_115: Buffer;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u64();
  data.struct_83 = reader.bytes(reader.u32(), 512);
  data.Unk5 = reader.u32();
  data.Unk6 = reader.u8();
  data.Level = reader.u16();
  data.Unk8 = reader.u32();
  data.Unk9 = reader.u8();
  data.struct_297 = reader.array(reader.u16(), () => Struct_636.read(reader), 30);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.PlayerId = reader.u64();
  data.Unk13 = reader.string(20);
  data.Unk14 = reader.bytes(25);
  data.Unk15 = reader.u32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const B = {} as any;
      B.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      B.SkillId = reader.u32();
      return B;
    },
    200
  );
  data.ClassId = reader.u16();
  data.Unk18 = reader.u32();
  data.Unk19 = reader.u16();
  if (reader.bool()) data.Unk20_0 = reader.bytes(12);
  data.Unk21 = reader.u8();
  data.Unk22 = reader.u8();
  data.Unk23 = reader.u8();
  data.Unk24 = reader.u32();
  data.struct_296 = reader.array(reader.u16(), () => Struct_636.read(reader), 9);
  data.Heading = Angle.read(reader);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const F = {} as any;
      F.StatType = reader.u8();
      F.Value = ReadNBytesInt64.read(reader);
      return F;
    },
    152
  );
  data.Unk28 = reader.u16();
  data.Unk29 = reader.u8();
  data.struct_366 = reader.array(reader.u16(), () => Struct_674.read(reader), 5);
  data.GearLevel = reader.u32();
  data.Unk32 = reader.u32();
  data.Unk33 = reader.u8();
  data.Unk34 = reader.u16();
  data.Unk35 = reader.u8();
  data.Unk36 = reader.u8();
  data.Name = reader.string(20);
  data.Unk5_m = reader.u32();
  data.Unk39 = reader.u8();
  data.CharacterId = reader.u64();
  data.Unk41 = reader.u32();
  data.Unk42 = reader.bytes(5);
  data.struct_115 = reader.bytes(reader.u16(), 200, 4);
  return data;
}
