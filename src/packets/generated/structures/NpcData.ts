// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_709 from "../structures/Struct_709";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  unk1_0?: number;
  unk3_0?: bigint;
  unk5_0?: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk8_0?: number;
  unk10_0?: number;
  struct_337?: Buffer;
  unk14_0?: number;
  unk15: number;
  unk17_0?: number;
  unk18: number;
  position: Vector3F.Vector3F;
  struct_268?: Buffer;
  unk23_0?: number;
  unk24: number;
  balanceLevel?: number;
  unk27: number;
  unk29_0?: number;
  level: number;
  typeId: number;
  directionYaw: Angle.Angle;
  statPair: { statType: number; value: bigint }[];
  spawnIndex: number;
  unk35: number;
  objectId: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk39_0?: number;
  unk41_0?: number;
  struct_709?: Struct_709.Struct_709;
  transitIndex?: number;
  unk46: number;
  unk48_0?: number;
  unk50_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.unk1_0 = reader.u8();
  if (reader.bool()) data.unk3_0 = reader.u64();
  if (reader.bool()) data.unk5_0 = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.unk8_0 = reader.u32();
  if (reader.bool()) data.unk10_0 = reader.u8();
  if (reader.bool()) data.struct_337 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.unk14_0 = reader.u8();
  data.unk15 = reader.u8();
  if (reader.bool()) data.unk17_0 = reader.u8();
  data.unk18 = reader.u8();
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.struct_268 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk23_0 = reader.u32();
  data.unk24 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  data.unk27 = reader.u8();
  if (reader.bool()) data.unk29_0 = reader.u32();
  data.level = reader.u16();
  data.typeId = reader.u32();
  data.directionYaw = Angle.read(reader);
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
  data.spawnIndex = reader.u32();
  data.unk35 = reader.u8();
  data.objectId = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk39_0 = reader.u16();
  if (reader.bool()) data.unk41_0 = reader.u8();
  if (reader.bool()) data.struct_709 = Struct_709.read(reader);
  if (reader.bool()) data.transitIndex = reader.u32();
  data.unk46 = reader.u8();
  if (reader.bool()) data.unk48_0 = reader.u8();
  if (reader.bool()) data.unk50_0 = reader.u8();
  return data;
}
