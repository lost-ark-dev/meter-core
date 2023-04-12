// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_676 from "../structures/Struct_676";
import * as Struct_638 from "../structures/Struct_638";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PCStruct = {
  Unk0: number;
  Unk1: number;
  GearLevel: number;
  statPair: { StatType: number; Value: bigint }[];
  Unk4: number;
  Unk5: bigint;
  Name: string;
  Unk7: Buffer;
  Heading: Angle.Angle;
  Unk9: number;
  Unk10: number;
  CharacterId: bigint;
  Unk12: number;
  Unk13: number;
  Unk14: number;
  Unk15: string;
  struct_363: Struct_676.Struct_676[];
  Unk5_m: number;
  Unk18: number;
  Unk19: number;
  PlayerId: bigint;
  struct_293: Struct_638.Struct_638[];
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
  Unk23: Buffer;
  Unk24: number;
  Unk25: number;
  Unk26: number;
  ClassId: number;
  Unk28: number;
  Unk29: number;
  Unk30: number;
  Unk31: number;
  struct_292: Struct_638.Struct_638[];
  Level: number;
  Unk34: number;
  Unk35: number;
  struct_117: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk38: number;
  Unk39: number;
  Unk40: number;
  struct_84: Buffer;
  Unk42_0?: Buffer;
  Unk43: number;
  Unk44: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.Unk0 = reader.u16();
  data.Unk1 = reader.u8();
  data.GearLevel = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const z = {} as any;
      z.StatType = reader.u8();
      z.Value = ReadNBytesInt64.read(reader);
      return z;
    },
    152
  );
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u64();
  data.Name = reader.string(20);
  data.Unk7 = reader.bytes(5);
  data.Heading = Angle.read(reader);
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u8();
  data.CharacterId = reader.u64();
  data.Unk12 = reader.u32();
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u8();
  data.Unk15 = reader.string(20);
  data.struct_363 = reader.array(reader.u16(), () => Struct_676.read(reader), 5);
  data.Unk5_m = reader.u32();
  data.Unk18 = reader.u32();
  data.Unk19 = reader.u8();
  data.PlayerId = reader.u64();
  data.struct_293 = reader.array(reader.u16(), () => Struct_638.read(reader), 32);
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
  data.Unk23 = reader.bytes(25);
  data.Unk24 = reader.u8();
  data.Unk25 = reader.u32();
  data.Unk26 = reader.u8();
  data.ClassId = reader.u16();
  data.Unk28 = reader.u8();
  data.Unk29 = reader.u32();
  data.Unk30 = reader.u32();
  data.Unk31 = reader.u8();
  data.struct_292 = reader.array(reader.u16(), () => Struct_638.read(reader), 9);
  data.Level = reader.u16();
  data.Unk34 = reader.u16();
  data.Unk35 = reader.u8();
  data.struct_117 = reader.bytes(reader.u16(), 200, 4);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.Unk38 = reader.u32();
  data.Unk39 = reader.u32();
  data.Unk40 = reader.u32();
  data.struct_84 = reader.bytes(reader.u32(), 512);
  if (reader.bool()) data.Unk42_0 = reader.bytes(12);
  data.Unk43 = reader.u8();
  data.Unk44 = reader.u16();
  return data;
}
