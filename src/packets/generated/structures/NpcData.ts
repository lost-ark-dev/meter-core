// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_710 from "../structures/Struct_710";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type NpcData = {
  unk1_0?: number;
  unk2: number;
  unk4_0?: number;
  unk6_0?: bigint;
  transitIndex?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  objectId: bigint;
  unk11: number;
  unk13_0?: number;
  unk15_0?: number;
  unk17_0?: number;
  struct_267?: Buffer;
  balanceLevel?: number;
  unk22: number;
  unk24_0?: number;
  unk26_0?: number;
  level: number;
  struct_710?: Struct_710.Struct_710;
  struct_333?: Buffer;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  position: Vector3F.Vector3F;
  statPair: { statType: number; value: bigint }[];
  directionYaw: Angle.Angle;
  typeId: number;
  unk38_0?: number;
  unk39: number;
  unk41_0?: number;
  unk43_0?: number;
  unk44: number;
  unk46_0?: number;
  spawnIndex: number;
  unk48: number;
  unk50_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.unk1_0 = reader.u32();
  data.unk2 = reader.u8();
  if (reader.bool()) data.unk4_0 = reader.u16();
  if (reader.bool()) data.unk6_0 = reader.u64();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.objectId = reader.u64();
  data.unk11 = reader.u8();
  if (reader.bool()) data.unk13_0 = reader.u32();
  if (reader.bool()) data.unk15_0 = reader.u8();
  if (reader.bool()) data.unk17_0 = reader.u8();
  if (reader.bool()) data.struct_267 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.balanceLevel = reader.u16();
  data.unk22 = reader.u8();
  if (reader.bool()) data.unk24_0 = reader.u8();
  if (reader.bool()) data.unk26_0 = reader.u8();
  data.level = reader.u16();
  if (reader.bool()) data.struct_710 = Struct_710.read(reader);
  if (reader.bool()) data.struct_333 = reader.bytes(reader.u16(), 11, 9);
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.position = Vector3F.read(reader);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const F = {} as { statType: number; value: bigint };
      F.statType = reader.u8();
      F.value = ReadNBytesInt64.read(reader);
      return F;
    },
    152
  );
  data.directionYaw = Angle.read(reader);
  data.typeId = reader.u32();
  if (reader.bool()) data.unk38_0 = reader.u32();
  data.unk39 = reader.u8();
  if (reader.bool()) data.unk41_0 = reader.u8();
  if (reader.bool()) data.unk43_0 = reader.u8();
  data.unk44 = reader.u8();
  if (reader.bool()) data.unk46_0 = reader.u8();
  data.spawnIndex = reader.u32();
  data.unk48 = reader.u8();
  if (reader.bool()) data.unk50_0 = reader.u32();
  return data;
}
