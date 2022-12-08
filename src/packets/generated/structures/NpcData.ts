// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_675 from "../structures/Struct_675";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_678 from "../structures/Struct_678";
export type NpcData = {
  struct_675?: Struct_675.Struct_675;
  TransitIndex?: number;
  Unk2: number;
  struct_321?: Buffer;
  ObjectId: bigint;
  SpawnIndex: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk7: number;
  Position: Vector3F.Vector3F;
  Unk9_0?: number;
  Unk10: number;
  Unk11_0?: number;
  struct_255?: Buffer;
  Unk13: number;
  Unk14: number;
  TypeId: number;
  Unk16_0?: number;
  Unk17_0?: number;
  DirectionYaw: Angle.Angle;
  Unk19_0?: number;
  Unk20_0?: number;
  Unk21_0?: number;
  Unk22: number;
  Unk23_0?: number;
  statPair: { readNBytesInt64: bigint; Unk0_0_1: number }[];
  Unk25_0?: bigint;
  Unk26_0?: number;
  Unk27_0?: number;
  Unk28: number;
  Unk29_0?: number;
  Unk30_0?: number;
  struct_373: Struct_678.Struct_678[];
  Unk32_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.struct_675 = Struct_675.read(reader);
  if (reader.bool()) data.TransitIndex = reader.u32();
  data.Unk2 = reader.u8();
  if (reader.bool()) data.struct_321 = reader.bytes(reader.u16(), 11, 9);
  data.ObjectId = reader.u64();
  data.SpawnIndex = reader.i32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.Unk7 = reader.u8();
  data.Position = Vector3F.read(reader);
  if (reader.bool()) data.Unk9_0 = reader.u32();
  data.Unk10 = reader.u8();
  if (reader.bool()) data.Unk11_0 = reader.u32();
  if (reader.bool()) data.struct_255 = reader.bytes(reader.u16(), 12, 12);
  data.Unk13 = reader.u8();
  data.Unk14 = reader.u16();
  data.TypeId = reader.u32();
  if (reader.bool()) data.Unk16_0 = reader.u16();
  if (reader.bool()) data.Unk17_0 = reader.u32();
  data.DirectionYaw = Angle.read(reader);
  if (reader.bool()) data.Unk19_0 = reader.u8();
  if (reader.bool()) data.Unk20_0 = reader.u8();
  if (reader.bool()) data.Unk21_0 = reader.u8();
  data.Unk22 = reader.u8();
  if (reader.bool()) data.Unk23_0 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const N = {} as any;
      N.readNBytesInt64 = ReadNBytesInt64.read(reader);
      N.Unk0_0_1 = reader.u8();
      return N;
    },
    152
  );
  if (reader.bool()) data.Unk25_0 = reader.u64();
  if (reader.bool()) data.Unk26_0 = reader.u16();
  if (reader.bool()) data.Unk27_0 = reader.u8();
  data.Unk28 = reader.u8();
  if (reader.bool()) data.Unk29_0 = reader.u32();
  if (reader.bool()) data.Unk30_0 = reader.u8();
  data.struct_373 = reader.array(reader.u16(), () => Struct_678.read(reader), 5);
  if (reader.bool()) data.Unk32_0 = reader.u8();
  return data;
}
