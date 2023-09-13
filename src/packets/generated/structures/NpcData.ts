// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_713 from "../structures/Struct_713";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  directionYaw: Angle.Angle;
  struct_263?: Buffer;
  unk4_0?: number;
  level: number;
  unk6: number;
  unk8_0?: number;
  unk10_0?: number;
  struct_329?: Buffer;
  statPair: { value: bigint; statType: number }[];
  unk14: number;
  balanceLevel?: number;
  spawnIndex: number;
  unk19_0?: number;
  unk21_0?: number;
  unk23_0?: number;
  unk24: number;
  unk26_0?: bigint;
  unk27: number;
  unk29_0?: number;
  unk30: number;
  unk32_0?: number;
  struct_713?: Struct_713.Struct_713;
  unk36_0?: number;
  unk38_0?: number;
  unk40_0?: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk43_0?: number;
  position: Vector3F.Vector3F;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk46: number;
  objectId: bigint;
  transitIndex?: number;
  typeId: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  data.directionYaw = Angle.read(reader);
  if (reader.bool()) data.struct_263 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk4_0 = reader.u8();
  data.level = reader.u16();
  data.unk6 = reader.u8();
  if (reader.bool()) data.unk8_0 = reader.u8();
  if (reader.bool()) data.unk10_0 = reader.u32();
  if (reader.bool()) data.struct_329 = reader.bytes(reader.u16(), 11, 9);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const D = {} as { value: bigint; statType: number };
      D.value = ReadNBytesInt64.read(reader);
      D.statType = reader.u8();
      return D;
    },
    152
  );
  data.unk14 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk19_0 = reader.u8();
  if (reader.bool()) data.unk21_0 = reader.u8();
  if (reader.bool()) data.unk23_0 = reader.u8();
  data.unk24 = reader.u8();
  if (reader.bool()) data.unk26_0 = reader.u64();
  data.unk27 = reader.u8();
  if (reader.bool()) data.unk29_0 = reader.u16();
  data.unk30 = reader.u8();
  if (reader.bool()) data.unk32_0 = reader.u8();
  if (reader.bool()) data.struct_713 = Struct_713.read(reader);
  if (reader.bool()) data.unk36_0 = reader.u32();
  if (reader.bool()) data.unk38_0 = reader.u32();
  if (reader.bool()) data.unk40_0 = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.unk43_0 = reader.u8();
  data.position = Vector3F.read(reader);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk46 = reader.u8();
  data.objectId = reader.u64();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.typeId = reader.u32();
  return data;
}
