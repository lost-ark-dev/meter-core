// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Struct_637 from "../structures/Struct_637";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_676 from "../structures/Struct_676";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PCStruct = {
  Unk0: number;
  addonSkillFeatureList: { SkillId: number; addonSkillFeatureIdList: number[] }[];
  Unk2: number;
  Unk3: number;
  Unk4: number;
  Unk5: number;
  Unk6: number;
  struct_296: Struct_637.Struct_637[];
  Unk8: number;
  ClassId: number;
  Unk10: number;
  Name: string;
  Unk12: number;
  Unk13: number;
  PlayerId: bigint;
  CharacterId: bigint;
  Level: number;
  Unk17: Buffer;
  Unk18: number;
  Unk19: Buffer;
  Unk20: bigint;
  Unk21: number;
  Heading: Angle.Angle;
  Unk23: number;
  Unk24: number;
  Unk25: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_82: Buffer;
  struct_370: Struct_676.Struct_676[];
  Unk29_0?: Buffer;
  Unk30: number;
  Unk5_m: number;
  struct_295: Struct_637.Struct_637[];
  Unk33: number;
  Unk34: string;
  Unk35: number;
  GearLevel: number;
  Unk37: number;
  Unk38: number;
  Unk39: number;
  statPair: { StatType: number; Value: bigint }[];
  Unk41: number;
  struct_116: Buffer;
  Unk43: number;
  Unk44: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.Unk0 = reader.u8();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const z = {} as any;
      z.SkillId = reader.u32();
      z.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return z;
    },
    200
  );
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u32();
  data.Unk6 = reader.u32();
  data.struct_296 = reader.array(reader.u16(), () => Struct_637.read(reader), 32);
  data.Unk8 = reader.u16();
  data.ClassId = reader.u16();
  data.Unk10 = reader.u16();
  data.Name = reader.string(20);
  data.Unk12 = reader.u8();
  data.Unk13 = reader.u32();
  data.PlayerId = reader.u64();
  data.CharacterId = reader.u64();
  data.Level = reader.u16();
  data.Unk17 = reader.bytes(25);
  data.Unk18 = reader.u8();
  data.Unk19 = reader.bytes(5);
  data.Unk20 = reader.u64();
  data.Unk21 = reader.u32();
  data.Heading = Angle.read(reader);
  data.Unk23 = reader.u32();
  data.Unk24 = reader.u16();
  data.Unk25 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.struct_82 = reader.bytes(reader.u32(), 512);
  data.struct_370 = reader.array(reader.u16(), () => Struct_676.read(reader), 5);
  if (reader.bool()) data.Unk29_0 = reader.bytes(12);
  data.Unk30 = reader.u8();
  data.Unk5_m = reader.u32();
  data.struct_295 = reader.array(reader.u16(), () => Struct_637.read(reader), 9);
  data.Unk33 = reader.u32();
  data.Unk34 = reader.string(20);
  data.Unk35 = reader.u8();
  data.GearLevel = reader.u32();
  data.Unk37 = reader.u32();
  data.Unk38 = reader.u8();
  data.Unk39 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const G = {} as any;
      G.StatType = reader.u8();
      G.Value = ReadNBytesInt64.read(reader);
      return G;
    },
    152
  );
  data.Unk41 = reader.u8();
  data.struct_116 = reader.bytes(reader.u16(), 200, 4);
  data.Unk43 = reader.u8();
  data.Unk44 = reader.u8();
  return data;
}
