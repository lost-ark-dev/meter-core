// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_712 from "../structures/Struct_712";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  directionYaw: Angle.Angle;
  statPair: { statType: number; value: bigint }[];
  unk3_0?: number;
  typeId: number;
  unk6_0?: number;
  transitIndex?: number;
  spawnIndex: number;
  unk10: number;
  struct_333?: Buffer;
  unk13: number;
  unk14: number;
  unk15: number;
  position: Vector3F.Vector3F;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk20_0?: number;
  unk22_0?: number;
  balanceLevel?: number;
  unk26_0?: number;
  struct_269?: Buffer;
  level: number;
  unk31_0?: number;
  unk32: number;
  unk34_0?: bigint;
  struct_712?: Struct_712.Struct_712;
  unk38_0?: number;
  unk40_0?: number;
  unk42_0?: number;
  unk44_0?: number;
  objectId: bigint;
  unk47_0?: number;
  unk48: number;
  unk50_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
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
  if (reader.bool()) data.unk3_0 = reader.u32();
  data.typeId = reader.u32();
  if (reader.bool()) data.unk6_0 = reader.u16();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.spawnIndex = reader.u32();
  data.unk10 = reader.u8();
  if (reader.bool()) data.struct_333 = reader.bytes(reader.u16(), 11, 9);
  data.unk13 = reader.u8();
  data.unk14 = reader.u8();
  data.unk15 = reader.u8();
  data.position = Vector3F.read(reader);
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk20_0 = reader.u8();
  if (reader.bool()) data.unk22_0 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk26_0 = reader.u32();
  if (reader.bool()) data.struct_269 = reader.bytes(reader.u16(), 12, 12);
  data.level = reader.u16();
  if (reader.bool()) data.unk31_0 = reader.u8();
  data.unk32 = reader.u8();
  if (reader.bool()) data.unk34_0 = reader.u64();
  if (reader.bool()) data.struct_712 = Struct_712.read(reader);
  if (reader.bool()) data.unk38_0 = reader.u32();
  if (reader.bool()) data.unk40_0 = reader.u8();
  if (reader.bool()) data.unk42_0 = reader.u8();
  if (reader.bool()) data.unk44_0 = reader.u8();
  data.objectId = reader.u64();
  if (reader.bool()) data.unk47_0 = reader.u32();
  data.unk48 = reader.u8();
  if (reader.bool()) data.unk50_0 = reader.u8();
  return data;
}
