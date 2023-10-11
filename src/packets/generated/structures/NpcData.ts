// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_711 from "../structures/Struct_711";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type NpcData = {
  unk1_0?: number;
  unk3_0?: number;
  unk5_0?: number;
  spawnIndex: number;
  unk8_0?: number;
  directionYaw: Angle.Angle;
  unk11_0?: number;
  unk13_0?: number;
  level: number;
  statPair: { statType: number; value: bigint }[];
  unk17_0?: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  balanceLevel?: number;
  unk22_0?: number;
  transitIndex?: number;
  unk25: number;
  unk27_0?: number;
  unk29_0?: number;
  position: Vector3F.Vector3F;
  unk31: number;
  struct_263?: Buffer;
  unk34: number;
  struct_332?: Buffer;
  unk38_0?: number;
  unk40_0?: number;
  unk41: number;
  unk43_0?: number;
  unk44: number;
  objectId: bigint;
  struct_711?: Struct_711.Struct_711;
  unk48: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  typeId: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.unk1_0 = reader.u8();
  if (reader.bool()) data.unk3_0 = reader.u16();
  if (reader.bool()) data.unk5_0 = reader.u32();
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk8_0 = reader.u8();
  data.directionYaw = Angle.read(reader);
  if (reader.bool()) data.unk11_0 = reader.u8();
  if (reader.bool()) data.unk13_0 = reader.u32();
  data.level = reader.u16();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const D = {} as { statType: number; value: bigint };
      D.statType = reader.u8();
      D.value = ReadNBytesInt64.read(reader);
      return D;
    },
    152
  );
  if (reader.bool()) data.unk17_0 = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk22_0 = reader.u8();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.unk25 = reader.u8();
  if (reader.bool()) data.unk27_0 = reader.u8();
  if (reader.bool()) data.unk29_0 = reader.u8();
  data.position = Vector3F.read(reader);
  data.unk31 = reader.u8();
  if (reader.bool()) data.struct_263 = reader.bytes(reader.u16(), 12, 12);
  data.unk34 = reader.u8();
  if (reader.bool()) data.struct_332 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.unk38_0 = reader.u32();
  if (reader.bool()) data.unk40_0 = reader.u32();
  data.unk41 = reader.u8();
  if (reader.bool()) data.unk43_0 = reader.u8();
  data.unk44 = reader.u8();
  data.objectId = reader.u64();
  if (reader.bool()) data.struct_711 = Struct_711.read(reader);
  data.unk48 = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.typeId = reader.u32();
  return data;
}
