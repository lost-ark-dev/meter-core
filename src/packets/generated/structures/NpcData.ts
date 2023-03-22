// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_670 from "../structures/Struct_670";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_673 from "../structures/Struct_673";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  Unk0: number;
  Unk1_0?: number;
  struct_251?: Buffer;
  statPair: { StatType: number; Value: bigint }[];
  Unk4: number;
  struct_670?: Struct_670.Struct_670;
  Unk6_0?: number;
  Unk7: number;
  Unk8_0?: number;
  Unk9: number;
  Unk10: number;
  Unk11_0?: bigint;
  Unk12_0?: number;
  TransitIndex?: number;
  DirectionYaw: Angle.Angle;
  struct_314?: Buffer;
  Unk16_0?: number;
  TypeId: number;
  struct_367: Struct_673.Struct_673[];
  ObjectId: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk21: number;
  Unk22_0?: number;
  Unk23_0?: number;
  Unk24: number;
  SpawnIndex: number;
  Position: Vector3F.Vector3F;
  Unk27_0?: number;
  Unk28_0?: number;
  Unk29_0?: number;
  Unk30_0?: number;
  Unk31_0?: number;
  Unk32_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  data.Unk0 = reader.u8();
  if (reader.bool()) data.Unk1_0 = reader.u32();
  if (reader.bool()) data.struct_251 = reader.bytes(reader.u16(), 12, 12);
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
  data.Unk4 = reader.u8();
  if (reader.bool()) data.struct_670 = Struct_670.read(reader);
  if (reader.bool()) data.Unk6_0 = reader.u16();
  data.Unk7 = reader.u8();
  if (reader.bool()) data.Unk8_0 = reader.u8();
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u16();
  if (reader.bool()) data.Unk11_0 = reader.u64();
  if (reader.bool()) data.Unk12_0 = reader.u8();
  if (reader.bool()) data.TransitIndex = reader.u32();
  data.DirectionYaw = Angle.read(reader);
  if (reader.bool()) data.struct_314 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.Unk16_0 = reader.u8();
  data.TypeId = reader.u32();
  data.struct_367 = reader.array(reader.u16(), () => Struct_673.read(reader), 5);
  data.ObjectId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.Unk21 = reader.u8();
  if (reader.bool()) data.Unk22_0 = reader.u16();
  if (reader.bool()) data.Unk23_0 = reader.u8();
  data.Unk24 = reader.u8();
  data.SpawnIndex = reader.i32();
  data.Position = Vector3F.read(reader);
  if (reader.bool()) data.Unk27_0 = reader.u8();
  if (reader.bool()) data.Unk28_0 = reader.u8();
  if (reader.bool()) data.Unk29_0 = reader.u32();
  if (reader.bool()) data.Unk30_0 = reader.u8();
  if (reader.bool()) data.Unk31_0 = reader.u32();
  if (reader.bool()) data.Unk32_0 = reader.u32();
  return data;
}
