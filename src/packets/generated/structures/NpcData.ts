// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_730 from "../structures/Struct_730";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type NpcData = {
  objectId: bigint;
  unk1: number;
  unk3_0?: number;
  unk5_0?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk8_0?: number;
  balanceLevel?: number;
  unk12_0?: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk14: number;
  unk15: number;
  struct_730?: Struct_730.Struct_730;
  unk19_0?: bigint;
  struct_341?: Buffer;
  typeId: number;
  unk24_0?: number;
  unk26_0?: number;
  unk27: number;
  unk29_0?: number;
  transitIndex?: number;
  unk33_0?: number;
  unk34: number;
  unk36_0?: number;
  statPair: { value: bigint; statType: number }[];
  level: number;
  directionYaw: Angle.Angle;
  position: Vector3F.Vector3F;
  struct_273?: Buffer;
  unk44_0?: number;
  spawnIndex: number;
  unk47_0?: number;
  unk49_0?: number;
  unk50: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  data.objectId = reader.u64();
  data.unk1 = reader.u8();
  if (reader.bool()) data.unk3_0 = reader.u8();
  if (reader.bool()) data.unk5_0 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk8_0 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk12_0 = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk14 = reader.u8();
  data.unk15 = reader.u8();
  if (reader.bool()) data.struct_730 = Struct_730.read(reader);
  if (reader.bool()) data.unk19_0 = reader.u64();
  if (reader.bool()) data.struct_341 = reader.bytes(reader.u16(), 11, 9);
  data.typeId = reader.u32();
  if (reader.bool()) data.unk24_0 = reader.u8();
  if (reader.bool()) data.unk26_0 = reader.u16();
  data.unk27 = reader.u8();
  if (reader.bool()) data.unk29_0 = reader.u8();
  if (reader.bool()) data.transitIndex = reader.u32();
  if (reader.bool()) data.unk33_0 = reader.u8();
  data.unk34 = reader.u8();
  if (reader.bool()) data.unk36_0 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const F = {} as { value: bigint; statType: number };
      F.value = ReadNBytesInt64.read(reader);
      F.statType = reader.u8();
      return F;
    },
    153
  );
  data.level = reader.u16();
  data.directionYaw = Angle.read(reader);
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.struct_273 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk44_0 = reader.u8();
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk47_0 = reader.u32();
  if (reader.bool()) data.unk49_0 = reader.u32();
  data.unk50 = reader.u8();
  return data;
}
