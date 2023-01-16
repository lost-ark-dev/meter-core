// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Struct_678 from "../structures/Struct_678";
import * as Struct_637 from "../structures/Struct_637";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PCStruct = {
  Unk0: string;
  Unk1: number;
  Unk2: number;
  Unk3: number;
  Unk5_m: number;
  Unk5_0?: Buffer;
  Unk6: number;
  struct_368: Struct_678.Struct_678[];
  struct_298: Struct_637.Struct_637[];
  Unk9: number;
  Unk10: number;
  GearLevel: number;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
  Unk13: number;
  Unk14: number;
  Unk15: number;
  Unk16: number;
  Unk17: number;
  Level: number;
  struct_85: Buffer;
  Unk20: number;
  Unk21: number;
  Unk22: number;
  Heading: Angle.Angle;
  Unk24: bigint;
  Unk25: number;
  CharacterId: bigint;
  struct_297: Struct_637.Struct_637[];
  Unk28: number;
  Unk29: number;
  struct_120: Buffer;
  ClassId: number;
  Unk32: number;
  Unk33: Buffer;
  Name: string;
  Unk35: number;
  Unk36: number;
  statPair: { Value: bigint; StatType: number }[];
  Unk38: Buffer;
  Unk39: number;
  Unk40: number;
  Unk41: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  PlayerId: bigint;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.Unk0 = reader.string(20);
  data.Unk1 = reader.u16();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u32();
  data.Unk5_m = reader.u32();
  if (reader.bool()) data.Unk5_0 = reader.bytes(12);
  data.Unk6 = reader.u8();
  data.struct_368 = reader.array(reader.u16(), () => Struct_678.read(reader), 5);
  data.struct_298 = reader.array(reader.u16(), () => Struct_637.read(reader), 30);
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u16();
  data.GearLevel = reader.u32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const m = {} as any;
      m.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      m.SkillId = reader.u32();
      return m;
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
  data.Heading = Angle.read(reader);
  data.Unk24 = reader.u64();
  data.Unk25 = reader.u8();
  data.CharacterId = reader.u64();
  data.struct_297 = reader.array(reader.u16(), () => Struct_637.read(reader), 9);
  data.Unk28 = reader.u32();
  data.Unk29 = reader.u8();
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.ClassId = reader.u16();
  data.Unk32 = reader.u32();
  data.Unk33 = reader.bytes(5);
  data.Name = reader.string(20);
  data.Unk35 = reader.u32();
  data.Unk36 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const q = {} as any;
      q.Value = ReadNBytesInt64.read(reader);
      q.StatType = reader.u8();
      return q;
    },
    152
  );
  data.Unk38 = reader.bytes(25);
  data.Unk39 = reader.u8();
  data.Unk40 = reader.u16();
  data.Unk41 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.PlayerId = reader.u64();
  return data;
}
