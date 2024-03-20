// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_734 from "../structures/Struct_734";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type NpcData = {
  unk1_0?: bigint;
  struct_734?: Struct_734.Struct_734;
  unk5_0?: number;
  balanceLevel?: number;
  transitIndex?: number;
  unk11_0?: number;
  level: number;
  unk13: number;
  unk15_0?: number;
  unk17_0?: number;
  unk19_0?: number;
  unk21_0?: number;
  statPair: { value: bigint; statType: number }[];
  unk24_0?: number;
  unk26_0?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk29_0?: number;
  position: Vector3F.Vector3F;
  spawnIndex: number;
  unk33_0?: number;
  objectId: bigint;
  struct_273?: Buffer;
  unk38_0?: number;
  unk39: number;
  unk40: number;
  struct_337?: Buffer;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk45_0?: number;
  unk46: number;
  unk47: number;
  typeId: number;
  directionYaw: Angle.Angle;
  unk50: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.unk1_0 = reader.u64();
  if (reader.bool()) data.struct_734 = Struct_734.read(reader);
  if (reader.bool()) data.unk5_0 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.transitIndex = reader.u32();
  if (reader.bool()) data.unk11_0 = reader.u16();
  data.level = reader.u16();
  data.unk13 = reader.u8();
  if (reader.bool()) data.unk15_0 = reader.u32();
  if (reader.bool()) data.unk17_0 = reader.u8();
  if (reader.bool()) data.unk19_0 = reader.u8();
  if (reader.bool()) data.unk21_0 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const D = {} as { value: bigint; statType: number };
      D.value = ReadNBytesInt64.read(reader);
      D.statType = reader.u8();
      return D;
    },
    153
  );
  if (reader.bool()) data.unk24_0 = reader.u8();
  if (reader.bool()) data.unk26_0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk29_0 = reader.u32();
  data.position = Vector3F.read(reader);
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk33_0 = reader.u32();
  data.objectId = reader.u64();
  if (reader.bool()) data.struct_273 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk38_0 = reader.u8();
  data.unk39 = reader.u8();
  data.unk40 = reader.u8();
  if (reader.bool()) data.struct_337 = reader.bytes(reader.u16(), 11, 9);
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.unk45_0 = reader.u8();
  data.unk46 = reader.u8();
  data.unk47 = reader.u8();
  data.typeId = reader.u32();
  data.directionYaw = Angle.read(reader);
  data.unk50 = reader.u8();
  return data;
}
