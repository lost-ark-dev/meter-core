// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_710 from "../structures/Struct_710";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  position: Vector3F.Vector3F;
  unk3_0?: number;
  statPair: { value: bigint; statType: number }[];
  directionYaw: Angle.Angle;
  transitIndex?: number;
  level: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk11_0?: number;
  unk13_0?: number;
  balanceLevel?: number;
  struct_332?: Buffer;
  unk19_0?: number;
  unk20: number;
  unk21: number;
  unk23_0?: number;
  objectId: bigint;
  unk26_0?: number;
  unk27: number;
  unk29_0?: number;
  unk31_0?: number;
  struct_710?: Struct_710.Struct_710;
  unk34: number;
  struct_267?: Buffer;
  unk38_0?: number;
  unk40_0?: number;
  unk41: number;
  spawnIndex: number;
  unk44_0?: bigint;
  unk46_0?: number;
  unk47: number;
  typeId: number;
  unk50_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.unk3_0 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const E = {} as { value: bigint; statType: number };
      E.value = ReadNBytesInt64.read(reader);
      E.statType = reader.u8();
      return E;
    },
    152
  );
  data.directionYaw = Angle.read(reader);
  if (reader.bool()) data.transitIndex = reader.u32();
  data.level = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk11_0 = reader.u32();
  if (reader.bool()) data.unk13_0 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.struct_332 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.unk19_0 = reader.u16();
  data.unk20 = reader.u8();
  data.unk21 = reader.u8();
  if (reader.bool()) data.unk23_0 = reader.u32();
  data.objectId = reader.u64();
  if (reader.bool()) data.unk26_0 = reader.u32();
  data.unk27 = reader.u8();
  if (reader.bool()) data.unk29_0 = reader.u8();
  if (reader.bool()) data.unk31_0 = reader.u8();
  if (reader.bool()) data.struct_710 = Struct_710.read(reader);
  data.unk34 = reader.u8();
  if (reader.bool()) data.struct_267 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk38_0 = reader.u8();
  if (reader.bool()) data.unk40_0 = reader.u8();
  data.unk41 = reader.u8();
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk44_0 = reader.u64();
  if (reader.bool()) data.unk46_0 = reader.u8();
  data.unk47 = reader.u8();
  data.typeId = reader.u32();
  if (reader.bool()) data.unk50_0 = reader.u8();
  return data;
}
