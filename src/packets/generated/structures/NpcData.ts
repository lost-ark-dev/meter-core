// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_673 from "../structures/Struct_673";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as Struct_676 from "../structures/Struct_676";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type NpcData = {
  Unk0: number;
  Unk1_0?: number;
  Unk2: number;
  SpawnIndex: number;
  struct_247?: Buffer;
  ObjectId: bigint;
  Unk6: number;
  Unk7_0?: number;
  TransitIndex?: number;
  Unk9_0?: number;
  Unk10: number;
  Unk11: number;
  Position: Vector3F.Vector3F;
  struct_363: Struct_676.Struct_676[];
  Unk14_0?: number;
  Unk15_0?: number;
  Unk16_0?: bigint;
  Unk17: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk19_0?: number;
  Unk20_0?: number;
  Unk21: number;
  Unk22_0?: number;
  Unk23_0?: number;
  DirectionYaw: Angle.Angle;
  struct_673?: Struct_673.Struct_673;
  Unk26_0?: number;
  statPair: { StatType: number; Value: bigint }[];
  struct_310?: Buffer;
  Unk29_0?: number;
  TypeId: number;
  Unk31_0?: number;
  Unk32_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  data.Unk0 = reader.u16();
  if (reader.bool()) data.Unk1_0 = reader.u8();
  data.Unk2 = reader.u8();
  data.SpawnIndex = reader.i32();
  if (reader.bool()) data.struct_247 = reader.bytes(reader.u16(), 12, 12);
  data.ObjectId = reader.u64();
  data.Unk6 = reader.u8();
  if (reader.bool()) data.Unk7_0 = reader.u8();
  if (reader.bool()) data.TransitIndex = reader.u32();
  if (reader.bool()) data.Unk9_0 = reader.u8();
  data.Unk10 = reader.u8();
  data.Unk11 = reader.u8();
  data.Position = Vector3F.read(reader);
  data.struct_363 = reader.array(reader.u16(), () => Struct_676.read(reader), 5);
  if (reader.bool()) data.Unk14_0 = reader.u16();
  if (reader.bool()) data.Unk15_0 = reader.u16();
  if (reader.bool()) data.Unk16_0 = reader.u64();
  data.Unk17 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.Unk19_0 = reader.u32();
  if (reader.bool()) data.Unk20_0 = reader.u32();
  data.Unk21 = reader.u8();
  if (reader.bool()) data.Unk22_0 = reader.u32();
  if (reader.bool()) data.Unk23_0 = reader.u32();
  data.DirectionYaw = Angle.read(reader);
  if (reader.bool()) data.struct_673 = Struct_673.read(reader);
  if (reader.bool()) data.Unk26_0 = reader.u8();
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
  if (reader.bool()) data.struct_310 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.Unk29_0 = reader.u8();
  data.TypeId = reader.u32();
  if (reader.bool()) data.Unk31_0 = reader.u8();
  if (reader.bool()) data.Unk32_0 = reader.u8();
  return data;
}
