// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_733 from "../structures/Struct_733";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type NpcData = {
  unk1_0?: number;
  unk2: number;
  objectId: bigint;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  struct_275?: Buffer;
  unk8_0?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  directionYaw: Angle.Angle;
  unk12_0?: number;
  struct_342?: Buffer;
  unk15: number;
  unk17_0?: number;
  unk19_0?: number;
  unk20: number;
  unk22_0?: bigint;
  balanceLevel?: number;
  unk26_0?: number;
  unk28_0?: number;
  unk30_0?: number;
  struct_733?: Struct_733.Struct_733;
  typeId: number;
  unk35_0?: number;
  transitIndex?: number;
  statPair: { statType: number; value: bigint }[];
  position: Vector3F.Vector3F;
  unk40: number;
  unk41: number;
  level: number;
  unk44_0?: number;
  unk45: number;
  spawnIndex: number;
  unk48_0?: number;
  unk50_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.unk1_0 = reader.u16();
  data.unk2 = reader.u8();
  data.objectId = reader.u64();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.struct_275 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk8_0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.directionYaw = Angle.read(reader);
  if (reader.bool()) data.unk12_0 = reader.u8();
  if (reader.bool()) data.struct_342 = reader.bytes(reader.u16(), 11, 9);
  data.unk15 = reader.u8();
  if (reader.bool()) data.unk17_0 = reader.u32();
  if (reader.bool()) data.unk19_0 = reader.u8();
  data.unk20 = reader.u8();
  if (reader.bool()) data.unk22_0 = reader.u64();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk26_0 = reader.u32();
  if (reader.bool()) data.unk28_0 = reader.u8();
  if (reader.bool()) data.unk30_0 = reader.u8();
  if (reader.bool()) data.struct_733 = Struct_733.read(reader);
  data.typeId = reader.u32();
  if (reader.bool()) data.unk35_0 = reader.u8();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const F = {} as { statType: number; value: bigint };
      F.statType = reader.u8();
      F.value = ReadNBytesInt64.read(reader);
      return F;
    },
    153
  );
  data.position = Vector3F.read(reader);
  data.unk40 = reader.u8();
  data.unk41 = reader.u8();
  data.level = reader.u16();
  if (reader.bool()) data.unk44_0 = reader.u32();
  data.unk45 = reader.u8();
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk48_0 = reader.u8();
  if (reader.bool()) data.unk50_0 = reader.u32();
  return data;
}
