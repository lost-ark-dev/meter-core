// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_712 from "../structures/Struct_712";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type NpcData = {
  struct_335?: Buffer;
  unk2: number;
  unk4_0?: number;
  unk6_0?: number;
  spawnIndex: number;
  typeId: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk11_0?: number;
  struct_268?: Buffer;
  unk14: number;
  directionYaw: Angle.Angle;
  unk17_0?: number;
  statPair: { statType: number; value: bigint }[];
  unk20_0?: number;
  unk22_0?: number;
  transitIndex?: number;
  unk25: number;
  level: number;
  position: Vector3F.Vector3F;
  struct_712?: Struct_712.Struct_712;
  unk31_0?: number;
  unk33_0?: number;
  unk35_0?: number;
  unk36: number;
  unk37: number;
  unk39_0?: number;
  objectId: bigint;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk43_0?: number;
  unk45_0?: bigint;
  balanceLevel?: number;
  unk49_0?: number;
  unk50: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.struct_335 = reader.bytes(reader.u16(), 11, 9);
  data.unk2 = reader.u8();
  if (reader.bool()) data.unk4_0 = reader.u8();
  if (reader.bool()) data.unk6_0 = reader.u8();
  data.spawnIndex = reader.u32();
  data.typeId = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk11_0 = reader.u16();
  if (reader.bool()) data.struct_268 = reader.bytes(reader.u16(), 12, 12);
  data.unk14 = reader.u8();
  data.directionYaw = Angle.read(reader);
  if (reader.bool()) data.unk17_0 = reader.u8();
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
  if (reader.bool()) data.unk20_0 = reader.u8();
  if (reader.bool()) data.unk22_0 = reader.u8();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.unk25 = reader.u8();
  data.level = reader.u16();
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.struct_712 = Struct_712.read(reader);
  if (reader.bool()) data.unk31_0 = reader.u8();
  if (reader.bool()) data.unk33_0 = reader.u32();
  if (reader.bool()) data.unk35_0 = reader.u32();
  data.unk36 = reader.u8();
  data.unk37 = reader.u8();
  if (reader.bool()) data.unk39_0 = reader.u8();
  data.objectId = reader.u64();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.unk43_0 = reader.u32();
  if (reader.bool()) data.unk45_0 = reader.u64();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk49_0 = reader.u32();
  data.unk50 = reader.u8();
  return data;
}
