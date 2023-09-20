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
  directionYaw: Angle.Angle;
  struct_267?: Buffer;
  unk6_0?: bigint;
  statPair: { value: bigint; statType: number }[];
  spawnIndex: number;
  transitIndex?: number;
  unk11: number;
  position: Vector3F.Vector3F;
  struct_333?: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk16: number;
  unk17: number;
  typeId: number;
  objectId: bigint;
  unk21_0?: number;
  unk23_0?: number;
  balanceLevel?: number;
  unk27_0?: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  struct_711?: Struct_711.Struct_711;
  unk32_0?: number;
  unk33: number;
  unk35_0?: number;
  unk37_0?: number;
  unk38: number;
  unk40_0?: number;
  unk42_0?: number;
  unk44_0?: number;
  level: number;
  unk46: number;
  unk48_0?: number;
  unk50_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.unk1_0 = reader.u8();
  data.directionYaw = Angle.read(reader);
  if (reader.bool()) data.struct_267 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk6_0 = reader.u64();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const D = {} as { value: bigint; statType: number };
      D.value = ReadNBytesInt64.read(reader);
      D.statType = reader.u8();
      return D;
    },
    152
  );
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.unk11 = reader.u8();
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.struct_333 = reader.bytes(reader.u16(), 11, 9);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk16 = reader.u8();
  data.unk17 = reader.u8();
  data.typeId = reader.u32();
  data.objectId = reader.u64();
  if (reader.bool()) data.unk21_0 = reader.u32();
  if (reader.bool()) data.unk23_0 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk27_0 = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.struct_711 = Struct_711.read(reader);
  if (reader.bool()) data.unk32_0 = reader.u8();
  data.unk33 = reader.u8();
  if (reader.bool()) data.unk35_0 = reader.u32();
  if (reader.bool()) data.unk37_0 = reader.u8();
  data.unk38 = reader.u8();
  if (reader.bool()) data.unk40_0 = reader.u16();
  if (reader.bool()) data.unk42_0 = reader.u8();
  if (reader.bool()) data.unk44_0 = reader.u32();
  data.level = reader.u16();
  data.unk46 = reader.u8();
  if (reader.bool()) data.unk48_0 = reader.u32();
  if (reader.bool()) data.unk50_0 = reader.u8();
  return data;
}
