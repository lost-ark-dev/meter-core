// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_722 from "../structures/Struct_722";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type NpcData = {
  statPair: { value: bigint; statType: number }[];
  struct_269?: Buffer;
  unk4_0?: number;
  spawnIndex: number;
  unk7_0?: bigint;
  unk9_0?: number;
  unk11_0?: number;
  objectId: bigint;
  struct_332?: Buffer;
  unk15: number;
  directionYaw: Angle.Angle;
  unk17: number;
  unk19_0?: number;
  unk21_0?: number;
  typeId: number;
  position: Vector3F.Vector3F;
  unk25_0?: number;
  unk27_0?: number;
  unk28: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk31_0?: number;
  unk32: number;
  unk33: number;
  unk34: number;
  unk36_0?: number;
  transitIndex?: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  struct_722?: Struct_722.Struct_722;
  level: number;
  unk44_0?: number;
  unk46_0?: number;
  balanceLevel?: number;
  unk50_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
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
  if (reader.bool()) data.struct_269 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk4_0 = reader.u8();
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk7_0 = reader.u64();
  if (reader.bool()) data.unk9_0 = reader.u8();
  if (reader.bool()) data.unk11_0 = reader.u32();
  data.objectId = reader.u64();
  if (reader.bool()) data.struct_332 = reader.bytes(reader.u16(), 11, 9);
  data.unk15 = reader.u8();
  data.directionYaw = Angle.read(reader);
  data.unk17 = reader.u8();
  if (reader.bool()) data.unk19_0 = reader.u32();
  if (reader.bool()) data.unk21_0 = reader.u16();
  data.typeId = reader.u32();
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.unk25_0 = reader.u8();
  if (reader.bool()) data.unk27_0 = reader.u32();
  data.unk28 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk31_0 = reader.u8();
  data.unk32 = reader.u8();
  data.unk33 = reader.u8();
  data.unk34 = reader.u8();
  if (reader.bool()) data.unk36_0 = reader.u8();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.struct_722 = Struct_722.read(reader);
  data.level = reader.u16();
  if (reader.bool()) data.unk44_0 = reader.u8();
  if (reader.bool()) data.unk46_0 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk50_0 = reader.u32();
  return data;
}
