// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_673 from "../structures/Struct_673";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_676 from "../structures/Struct_676";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  Unk0_0?: number;
  Unk1: number;
  Unk2: number;
  Unk3: number;
  struct_251?: Buffer;
  SpawnIndex: number;
  struct_316?: Buffer;
  Unk7_0?: number;
  TransitIndex?: number;
  TypeId: number;
  Unk10_0?: number;
  Unk11_0?: number;
  statPair: { StatType: number; Value: bigint }[];
  Unk13_0?: number;
  DirectionYaw: Angle.Angle;
  Unk15_0?: number;
  Unk16_0?: bigint;
  Unk17: number;
  Unk18: number;
  Unk19_0?: number;
  struct_673?: Struct_673.Struct_673;
  Unk21_0?: number;
  ObjectId: bigint;
  Unk23_0?: number;
  Unk24: number;
  struct_370: Struct_676.Struct_676[];
  Unk26_0?: number;
  Unk27: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Position: Vector3F.Vector3F;
  Unk30_0?: number;
  Unk31_0?: number;
  Unk32_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.Unk0_0 = reader.u32();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u8();
  if (reader.bool()) data.struct_251 = reader.bytes(reader.u16(), 12, 12);
  data.SpawnIndex = reader.i32();
  if (reader.bool()) data.struct_316 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.Unk7_0 = reader.u8();
  if (reader.bool()) data.TransitIndex = reader.u32();
  data.TypeId = reader.u32();
  if (reader.bool()) data.Unk10_0 = reader.u8();
  if (reader.bool()) data.Unk11_0 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const v = {} as any;
      v.StatType = reader.u8();
      v.Value = ReadNBytesInt64.read(reader);
      return v;
    },
    152
  );
  if (reader.bool()) data.Unk13_0 = reader.u32();
  data.DirectionYaw = Angle.read(reader);
  if (reader.bool()) data.Unk15_0 = reader.u8();
  if (reader.bool()) data.Unk16_0 = reader.u64();
  data.Unk17 = reader.u8();
  data.Unk18 = reader.u8();
  if (reader.bool()) data.Unk19_0 = reader.u32();
  if (reader.bool()) data.struct_673 = Struct_673.read(reader);
  if (reader.bool()) data.Unk21_0 = reader.u32();
  data.ObjectId = reader.u64();
  if (reader.bool()) data.Unk23_0 = reader.u8();
  data.Unk24 = reader.u16();
  data.struct_370 = reader.array(reader.u16(), () => Struct_676.read(reader), 5);
  if (reader.bool()) data.Unk26_0 = reader.u16();
  data.Unk27 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.Position = Vector3F.read(reader);
  if (reader.bool()) data.Unk30_0 = reader.u16();
  if (reader.bool()) data.Unk31_0 = reader.u8();
  if (reader.bool()) data.Unk32_0 = reader.u8();
  return data;
}
