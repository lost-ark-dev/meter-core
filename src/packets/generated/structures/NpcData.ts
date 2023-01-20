// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_671 from "../structures/Struct_671";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as Struct_674 from "../structures/Struct_674";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type NpcData = {
  struct_366: Struct_674.Struct_674[];
  Unk1: number;
  SpawnIndex: number;
  Unk3_0?: number;
  Unk4_0?: number;
  Unk5_0?: bigint;
  Position: Vector3F.Vector3F;
  struct_671?: Struct_671.Struct_671;
  TransitIndex?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk10_0?: number;
  Unk11: number;
  Unk12_0?: number;
  Unk13_0?: number;
  Unk14_0?: number;
  struct_314?: Buffer;
  Unk16_0?: number;
  DirectionYaw: Angle.Angle;
  Unk18_0?: number;
  Unk19_0?: number;
  ObjectId: bigint;
  Unk21: number;
  Unk22: number;
  Unk23_0?: number;
  Unk24: number;
  Unk25_0?: number;
  TypeId: number;
  Unk27_0?: number;
  Unk28: number;
  statPair: { StatType: number; Value: bigint }[];
  struct_250?: Buffer;
  Unk31: number;
  Unk32_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  data.struct_366 = reader.array(reader.u16(), () => Struct_674.read(reader), 5);
  data.Unk1 = reader.u8();
  data.SpawnIndex = reader.i32();
  if (reader.bool()) data.Unk3_0 = reader.u8();
  if (reader.bool()) data.Unk4_0 = reader.u16();
  if (reader.bool()) data.Unk5_0 = reader.u64();
  data.Position = Vector3F.read(reader);
  if (reader.bool()) data.struct_671 = Struct_671.read(reader);
  if (reader.bool()) data.TransitIndex = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.Unk10_0 = reader.u32();
  data.Unk11 = reader.u8();
  if (reader.bool()) data.Unk12_0 = reader.u8();
  if (reader.bool()) data.Unk13_0 = reader.u8();
  if (reader.bool()) data.Unk14_0 = reader.u8();
  if (reader.bool()) data.struct_314 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.Unk16_0 = reader.u8();
  data.DirectionYaw = Angle.read(reader);
  if (reader.bool()) data.Unk18_0 = reader.u8();
  if (reader.bool()) data.Unk19_0 = reader.u32();
  data.ObjectId = reader.u64();
  data.Unk21 = reader.u16();
  data.Unk22 = reader.u8();
  if (reader.bool()) data.Unk23_0 = reader.u8();
  data.Unk24 = reader.u8();
  if (reader.bool()) data.Unk25_0 = reader.u16();
  data.TypeId = reader.u32();
  if (reader.bool()) data.Unk27_0 = reader.u32();
  data.Unk28 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const x = {} as any;
      x.StatType = reader.u8();
      x.Value = ReadNBytesInt64.read(reader);
      return x;
    },
    152
  );
  if (reader.bool()) data.struct_250 = reader.bytes(reader.u16(), 12, 12);
  data.Unk31 = reader.u8();
  if (reader.bool()) data.Unk32_0 = reader.u32();
  return data;
}
