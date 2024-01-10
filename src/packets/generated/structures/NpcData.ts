// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_730 from "../structures/Struct_730";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  level: number;
  struct_270?: Buffer;
  unk4_0?: number;
  unk5: number;
  directionYaw: Angle.Angle;
  unk8_0?: number;
  statPair: { statType: number; value: bigint }[];
  unk11_0?: number;
  position: Vector3F.Vector3F;
  unk14_0?: number;
  balanceLevel?: number;
  unk18_0?: bigint;
  unk19: number;
  transitIndex?: number;
  unk22: number;
  unk23: number;
  unk25_0?: number;
  typeId: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk30_0?: number;
  unk32_0?: number;
  objectId: bigint;
  unk35_0?: number;
  unk37_0?: number;
  unk38: number;
  spawnIndex: number;
  struct_730?: Struct_730.Struct_730;
  unk43_0?: number;
  unk45_0?: number;
  struct_335?: Buffer;
  unk49_0?: number;
  unk50: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  data.level = reader.u16();
  if (reader.bool()) data.struct_270 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk4_0 = reader.u8();
  data.unk5 = reader.u8();
  data.directionYaw = Angle.read(reader);
  if (reader.bool()) data.unk8_0 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const D = {} as { statType: number; value: bigint };
      D.statType = reader.u8();
      D.value = ReadNBytesInt64.read(reader);
      return D;
    },
    153
  );
  if (reader.bool()) data.unk11_0 = reader.u32();
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.unk14_0 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk18_0 = reader.u64();
  data.unk19 = reader.u8();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.unk22 = reader.u8();
  data.unk23 = reader.u8();
  if (reader.bool()) data.unk25_0 = reader.u8();
  data.typeId = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk30_0 = reader.u8();
  if (reader.bool()) data.unk32_0 = reader.u8();
  data.objectId = reader.u64();
  if (reader.bool()) data.unk35_0 = reader.u32();
  if (reader.bool()) data.unk37_0 = reader.u8();
  data.unk38 = reader.u8();
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.struct_730 = Struct_730.read(reader);
  if (reader.bool()) data.unk43_0 = reader.u32();
  if (reader.bool()) data.unk45_0 = reader.u16();
  if (reader.bool()) data.struct_335 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.unk49_0 = reader.u8();
  data.unk50 = reader.u8();
  return data;
}
