// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_711 from "../structures/Struct_711";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type NpcData = {
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  transitIndex?: number;
  struct_337?: Buffer;
  unk6_0?: number;
  balanceLevel?: number;
  unk9: number;
  objectId: bigint;
  unk11: number;
  unk12: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk15_0?: number;
  unk16: number;
  unk18_0?: number;
  typeId: number;
  unk21_0?: number;
  struct_711?: Struct_711.Struct_711;
  statPair: { statType: number; value: bigint }[];
  spawnIndex: number;
  unk27_0?: number;
  struct_270?: Buffer;
  position: Vector3F.Vector3F;
  unk31: number;
  unk33_0?: number;
  unk35_0?: bigint;
  unk37_0?: number;
  unk39_0?: number;
  directionYaw: Angle.Angle;
  unk42_0?: number;
  unk43: number;
  unk45_0?: number;
  level: number;
  unk48_0?: number;
  unk50_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.transitIndex = reader.u32();
  if (reader.bool()) data.struct_337 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.unk6_0 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  data.unk9 = reader.u8();
  data.objectId = reader.u64();
  data.unk11 = reader.u8();
  data.unk12 = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.unk15_0 = reader.u8();
  data.unk16 = reader.u8();
  if (reader.bool()) data.unk18_0 = reader.u8();
  data.typeId = reader.u32();
  if (reader.bool()) data.unk21_0 = reader.u8();
  if (reader.bool()) data.struct_711 = Struct_711.read(reader);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const E = {} as { statType: number; value: bigint };
      E.statType = reader.u8();
      E.value = ReadNBytesInt64.read(reader);
      return E;
    },
    152
  );
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk27_0 = reader.u8();
  if (reader.bool()) data.struct_270 = reader.bytes(reader.u16(), 12, 12);
  data.position = Vector3F.read(reader);
  data.unk31 = reader.u8();
  if (reader.bool()) data.unk33_0 = reader.u32();
  if (reader.bool()) data.unk35_0 = reader.u64();
  if (reader.bool()) data.unk37_0 = reader.u32();
  if (reader.bool()) data.unk39_0 = reader.u8();
  data.directionYaw = Angle.read(reader);
  if (reader.bool()) data.unk42_0 = reader.u16();
  data.unk43 = reader.u8();
  if (reader.bool()) data.unk45_0 = reader.u8();
  data.level = reader.u16();
  if (reader.bool()) data.unk48_0 = reader.u32();
  if (reader.bool()) data.unk50_0 = reader.u32();
  return data;
}
