// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_711 from "../structures/Struct_711";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type NpcData = {
  level: number;
  unk2_0?: number;
  position: Vector3F.Vector3F;
  transitIndex?: number;
  unk7_0?: number;
  balanceLevel?: number;
  unk11_0?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  directionYaw: Angle.Angle;
  unk14: number;
  unk15: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk18_0?: number;
  unk19: number;
  unk21_0?: bigint;
  objectId: bigint;
  unk24_0?: number;
  unk26_0?: number;
  unk27: number;
  struct_711?: Struct_711.Struct_711;
  unk31_0?: number;
  typeId: number;
  struct_271?: Buffer;
  unk36_0?: number;
  struct_336?: Buffer;
  unk40_0?: number;
  unk42_0?: number;
  unk43: number;
  spawnIndex: number;
  statPair: { statType: number; value: bigint }[];
  unk47_0?: number;
  unk49_0?: number;
  unk50: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  data.level = reader.u16();
  if (reader.bool()) data.unk2_0 = reader.u8();
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.transitIndex = reader.u32();
  if (reader.bool()) data.unk7_0 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk11_0 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.directionYaw = Angle.read(reader);
  data.unk14 = reader.u8();
  data.unk15 = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.unk18_0 = reader.u32();
  data.unk19 = reader.u8();
  if (reader.bool()) data.unk21_0 = reader.u64();
  data.objectId = reader.u64();
  if (reader.bool()) data.unk24_0 = reader.u16();
  if (reader.bool()) data.unk26_0 = reader.u8();
  data.unk27 = reader.u8();
  if (reader.bool()) data.struct_711 = Struct_711.read(reader);
  if (reader.bool()) data.unk31_0 = reader.u8();
  data.typeId = reader.u32();
  if (reader.bool()) data.struct_271 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk36_0 = reader.u8();
  if (reader.bool()) data.struct_336 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.unk40_0 = reader.u32();
  if (reader.bool()) data.unk42_0 = reader.u32();
  data.unk43 = reader.u8();
  data.spawnIndex = reader.u32();
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
  if (reader.bool()) data.unk47_0 = reader.u8();
  if (reader.bool()) data.unk49_0 = reader.u8();
  data.unk50 = reader.u8();
  return data;
}
