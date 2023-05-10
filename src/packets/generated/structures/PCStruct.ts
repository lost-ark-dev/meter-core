// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_651 from "../structures/Struct_651";
import * as Struct_690 from "../structures/Struct_690";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PCStruct = {
  Unk0: Buffer;
  Unk1: number;
  Unk2: number;
  Level: number;
  Unk4: number;
  Unk5: number;
  Unk6: number;
  Unk5_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  ClassId: number;
  Heading: Angle.Angle;
  Unk11: Buffer;
  Unk12: number;
  Unk13: number;
  Unk14: number;
  Unk15: number;
  Unk16: number;
  Unk17: number;
  struct_120: Buffer;
  struct_88: Buffer;
  struct_301: Struct_651.Struct_651[];
  struct_375: Struct_690.Struct_690[];
  Unk22: number;
  Unk23: number;
  Unk24: number;
  Unk25: number;
  statPair: { StatType: number; Value: bigint }[];
  Unk27: number;
  Unk28: number;
  Unk29: number;
  Name: string;
  addonSkillFeatureList: { SkillId: number; addonSkillFeatureIdList: number[] }[];
  Unk32: number;
  Unk33_0?: Buffer;
  PlayerId: bigint;
  Unk35: string;
  Unk36: number;
  Unk37: number;
  GearLevel: number;
  Unk39: number;
  struct_302: Struct_651.Struct_651[];
  Unk41: bigint;
  CharacterId: bigint;
  Unk43: number;
  Unk44: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.Unk0 = reader.bytes(5);
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u8();
  data.Level = reader.u16();
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u32();
  data.Unk6 = reader.u16();
  data.Unk5_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.ClassId = reader.u16();
  data.Heading = Angle.read(reader);
  data.Unk11 = reader.bytes(25);
  data.Unk12 = reader.u8();
  data.Unk13 = reader.u32();
  data.Unk14 = reader.u16();
  data.Unk15 = reader.u8();
  data.Unk16 = reader.u32();
  data.Unk17 = reader.u8();
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.struct_88 = reader.bytes(reader.u32(), 512);
  data.struct_301 = reader.array(reader.u16(), () => Struct_651.read(reader), 9);
  data.struct_375 = reader.array(reader.u16(), () => Struct_690.read(reader), 5);
  data.Unk22 = reader.u16();
  data.Unk23 = reader.u8();
  data.Unk24 = reader.u32();
  data.Unk25 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const C = {} as any;
      C.StatType = reader.u8();
      C.Value = ReadNBytesInt64.read(reader);
      return C;
    },
    152
  );
  data.Unk27 = reader.u8();
  data.Unk28 = reader.u8();
  data.Unk29 = reader.u8();
  data.Name = reader.string(20);
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
  data.Unk32 = reader.u8();
  if (reader.bool()) data.Unk33_0 = reader.bytes(12);
  data.PlayerId = reader.u64();
  data.Unk35 = reader.string(20);
  data.Unk36 = reader.u8();
  data.Unk37 = reader.u32();
  data.GearLevel = reader.u32();
  data.Unk39 = reader.u32();
  data.struct_302 = reader.array(reader.u16(), () => Struct_651.read(reader), 32);
  data.Unk41 = reader.u64();
  data.CharacterId = reader.u64();
  data.Unk43 = reader.u32();
  data.Unk44 = reader.u32();
  return data;
}
