// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_634 from "../structures/Struct_634";
import * as Struct_672 from "../structures/Struct_672";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PCStruct = {
  struct_113: Buffer;
  Unk1: number;
  Unk2: number;
  Unk3: number;
  ClassId: number;
  Unk5: number;
  Unk6: number;
  Unk7: number;
  Unk8: number;
  Unk9: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk11: number;
  GearLevel: number;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
  Unk14: number;
  Unk15: number;
  Unk16: number;
  Unk17: number;
  Unk18: number;
  struct_82: Buffer;
  Level: number;
  PlayerId: bigint;
  struct_293: Struct_634.Struct_634[];
  Unk23: number;
  Unk24: number;
  Unk25: Buffer;
  Unk26: number;
  Unk27: Buffer;
  Unk28: number;
  Heading: Angle.Angle;
  Unk5_m: number;
  Name: string;
  Unk32: string;
  Unk33_0?: Buffer;
  struct_365: Struct_672.Struct_672[];
  Unk35: number;
  Unk36: number;
  CharacterId: bigint;
  Unk38: number;
  struct_292: Struct_634.Struct_634[];
  Unk40: number;
  Unk41: number;
  statPair: { Value: bigint; StatType: number }[];
  Unk43: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
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
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.Unk11 = reader.u8();
  data.GearLevel = reader.u32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const A = {} as any;
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
  data.struct_293 = reader.array(reader.u16(), () => Struct_634.read(reader), 30);
  data.Unk23 = reader.u32();
  data.Unk24 = reader.u8();
  data.Unk25 = reader.bytes(25);
  data.Unk26 = reader.u8();
  data.Unk27 = reader.bytes(5);
  data.Unk28 = reader.u32();
  data.Heading = Angle.read(reader);
  data.Unk5_m = reader.u32();
  data.Name = reader.string(20);
  data.Unk32 = reader.string(20);
  if (reader.bool()) data.Unk33_0 = reader.bytes(12);
  data.struct_365 = reader.array(reader.u16(), () => Struct_672.read(reader), 5);
  data.Unk35 = reader.u32();
  data.Unk36 = reader.u32();
  data.CharacterId = reader.u64();
  data.Unk38 = reader.u32();
  data.struct_292 = reader.array(reader.u16(), () => Struct_634.read(reader), 9);
  data.Unk40 = reader.u8();
  data.Unk41 = reader.u16();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const G = {} as any;
      G.Value = ReadNBytesInt64.read(reader);
      G.StatType = reader.u8();
      return G;
    },
    152
  );
  data.Unk43 = reader.u8();
  return data;
}
