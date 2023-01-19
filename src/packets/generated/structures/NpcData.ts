// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_671 from "../structures/Struct_671";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as Struct_674 from "../structures/Struct_674";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  Unk0_0?: number;
  Unk1_0?: number;
  Unk2: number;
  struct_253?: Buffer;
  struct_372: Struct_674.Struct_674[];
  SpawnIndex: number;
  Unk6_0?: number;
  Unk7: number;
  statPair: { StatType: number; Value: bigint }[];
  Unk9_0?: number;
  struct_318?: Buffer;
  Unk11_0?: number;
  struct_671?: Struct_671.Struct_671;
  Unk13_0?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk15_0?: number;
  Unk16: number;
  Position: Vector3F.Vector3F;
  Unk18_0?: bigint;
  Unk19_0?: number;
  Unk20_0?: number;
  Unk21: number;
  Unk22_0?: number;
  Unk23: number;
  Unk24_0?: number;
  TransitIndex?: number;
  Unk26: number;
  Unk27_0?: number;
  DirectionYaw: Angle.Angle;
  Unk29_0?: number;
  Unk30: number;
  ObjectId: bigint;
  TypeId: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.Unk0_0 = reader.u8();
  if (reader.bool()) data.Unk1_0 = reader.u16();
  data.Unk2 = reader.u8();
  if (reader.bool()) data.struct_253 = reader.bytes(reader.u16(), 12, 12);
  data.struct_372 = reader.array(reader.u16(), () => Struct_674.read(reader), 5);
  data.SpawnIndex = reader.i32();
  if (reader.bool()) data.Unk6_0 = reader.u32();
  data.Unk7 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const w = {} as any;
      w.StatType = reader.u8();
      w.Value = ReadNBytesInt64.read(reader);
      return w;
    },
    152
  );
  if (reader.bool()) data.Unk9_0 = reader.u16();
  if (reader.bool()) data.struct_318 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.Unk11_0 = reader.u8();
  if (reader.bool()) data.struct_671 = Struct_671.read(reader);
  if (reader.bool()) data.Unk13_0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.Unk15_0 = reader.u32();
  data.Unk16 = reader.u8();
  data.Position = Vector3F.read(reader);
  if (reader.bool()) data.Unk18_0 = reader.u64();
  if (reader.bool()) data.Unk19_0 = reader.u8();
  if (reader.bool()) data.Unk20_0 = reader.u8();
  data.Unk21 = reader.u8();
  if (reader.bool()) data.Unk22_0 = reader.u8();
  data.Unk23 = reader.u8();
  if (reader.bool()) data.Unk24_0 = reader.u32();
  if (reader.bool()) data.TransitIndex = reader.u32();
  data.Unk26 = reader.u8();
  if (reader.bool()) data.Unk27_0 = reader.u32();
  data.DirectionYaw = Angle.read(reader);
  if (reader.bool()) data.Unk29_0 = reader.u8();
  data.Unk30 = reader.u16();
  data.ObjectId = reader.u64();
  data.TypeId = reader.u32();
  return data;
}
