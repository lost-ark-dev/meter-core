// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_669 from "../structures/Struct_669";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_672 from "../structures/Struct_672";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  TransitIndex?: number;
  Unk1_0?: number;
  Unk2_0?: number;
  struct_311?: Buffer;
  Unk4_0?: number;
  Unk5: number;
  Unk6_0?: number;
  Unk7: number;
  Unk8_0?: number;
  Unk9_0?: number;
  struct_245?: Buffer;
  Unk11: number;
  Unk12: number;
  Unk13_0?: number;
  Unk14_0?: number;
  statPair: { Value: bigint; StatType: number }[];
  struct_669?: Struct_669.Struct_669;
  DirectionYaw: Angle.Angle;
  Position: Vector3F.Vector3F;
  Unk19_0?: bigint;
  Unk20_0?: number;
  Unk21: number;
  Unk22_0?: number;
  TypeId: number;
  Unk24_0?: number;
  Unk25_0?: number;
  struct_365: Struct_672.Struct_672[];
  SpawnIndex: number;
  Unk28: number;
  Unk29: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk31_0?: number;
  ObjectId: bigint;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.TransitIndex = reader.u32();
  if (reader.bool()) data.Unk1_0 = reader.u8();
  if (reader.bool()) data.Unk2_0 = reader.u8();
  if (reader.bool()) data.struct_311 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.Unk4_0 = reader.u8();
  data.Unk5 = reader.u8();
  if (reader.bool()) data.Unk6_0 = reader.u32();
  data.Unk7 = reader.u8();
  if (reader.bool()) data.Unk8_0 = reader.u16();
  if (reader.bool()) data.Unk9_0 = reader.u8();
  if (reader.bool()) data.struct_245 = reader.bytes(reader.u16(), 12, 12);
  data.Unk11 = reader.u16();
  data.Unk12 = reader.u8();
  if (reader.bool()) data.Unk13_0 = reader.u32();
  if (reader.bool()) data.Unk14_0 = reader.u16();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const v = {} as any;
      v.Value = ReadNBytesInt64.read(reader);
      v.StatType = reader.u8();
      return v;
    },
    152
  );
  if (reader.bool()) data.struct_669 = Struct_669.read(reader);
  data.DirectionYaw = Angle.read(reader);
  data.Position = Vector3F.read(reader);
  if (reader.bool()) data.Unk19_0 = reader.u64();
  if (reader.bool()) data.Unk20_0 = reader.u8();
  data.Unk21 = reader.u8();
  if (reader.bool()) data.Unk22_0 = reader.u32();
  data.TypeId = reader.u32();
  if (reader.bool()) data.Unk24_0 = reader.u32();
  if (reader.bool()) data.Unk25_0 = reader.u8();
  data.struct_365 = reader.array(reader.u16(), () => Struct_672.read(reader), 5);
  data.SpawnIndex = reader.i32();
  data.Unk28 = reader.u8();
  data.Unk29 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.Unk31_0 = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}
