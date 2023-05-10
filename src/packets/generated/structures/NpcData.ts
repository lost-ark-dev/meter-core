// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_687 from "../structures/Struct_687";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as Struct_690 from "../structures/Struct_690";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  Unk0_0?: number;
  Unk1_0?: bigint;
  Unk2_0?: number;
  struct_375: Struct_690.Struct_690[];
  Unk4_0?: number;
  Unk5_0?: number;
  struct_324?: Buffer;
  Unk7_0?: number;
  Unk8: number;
  Unk9_0?: number;
  Unk10: number;
  Position: Vector3F.Vector3F;
  struct_255?: Buffer;
  Unk13_0?: number;
  Unk14: number;
  Unk15_0?: number;
  Unk16: number;
  Unk17_0?: number;
  Unk18: number;
  TypeId: number;
  DirectionYaw: Angle.Angle;
  statPair: { StatType: number; Value: bigint }[];
  SpawnIndex: number;
  Unk23: number;
  ObjectId: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk26_0?: number;
  Unk27_0?: number;
  struct_687?: Struct_687.Struct_687;
  TransitIndex?: number;
  Unk30: number;
  Unk31_0?: number;
  Unk32_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.Unk0_0 = reader.u8();
  if (reader.bool()) data.Unk1_0 = reader.u64();
  if (reader.bool()) data.Unk2_0 = reader.u32();
  data.struct_375 = reader.array(reader.u16(), () => Struct_690.read(reader), 5);
  if (reader.bool()) data.Unk4_0 = reader.u32();
  if (reader.bool()) data.Unk5_0 = reader.u8();
  if (reader.bool()) data.struct_324 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.Unk7_0 = reader.u8();
  data.Unk8 = reader.u8();
  if (reader.bool()) data.Unk9_0 = reader.u8();
  data.Unk10 = reader.u8();
  data.Position = Vector3F.read(reader);
  if (reader.bool()) data.struct_255 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.Unk13_0 = reader.u32();
  data.Unk14 = reader.u8();
  if (reader.bool()) data.Unk15_0 = reader.u16();
  data.Unk16 = reader.u8();
  if (reader.bool()) data.Unk17_0 = reader.u32();
  data.Unk18 = reader.u16();
  data.TypeId = reader.u32();
  data.DirectionYaw = Angle.read(reader);
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
  data.SpawnIndex = reader.u32();
  data.Unk23 = reader.u8();
  data.ObjectId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.Unk26_0 = reader.u16();
  if (reader.bool()) data.Unk27_0 = reader.u8();
  if (reader.bool()) data.struct_687 = Struct_687.read(reader);
  if (reader.bool()) data.TransitIndex = reader.u32();
  data.Unk30 = reader.u8();
  if (reader.bool()) data.Unk31_0 = reader.u8();
  if (reader.bool()) data.Unk32_0 = reader.u8();
  return data;
}
