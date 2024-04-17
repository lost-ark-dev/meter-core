// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_735 from "../structures/Struct_735";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type NpcData = {
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk2_0?: number;
  balanceLevel?: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk7_0?: number;
  unk8: number;
  unk10_0?: number;
  unk12_0?: number;
  struct_337?: Buffer;
  unk16_0?: number;
  transitIndex?: number;
  typeId: number;
  unk21_0?: number;
  unk22: number;
  unk24_0?: number;
  unk25: number;
  unk26: number;
  directionYaw: Angle.Angle;
  objectId: bigint;
  unk30_0?: number;
  unk32_0?: number;
  unk34_0?: number;
  unk35: number;
  unk37_0?: bigint;
  position: Vector3F.Vector3F;
  spawnIndex: number;
  unk41_0?: number;
  struct_735?: Struct_735.Struct_735;
  unk44: number;
  unk46_0?: number;
  struct_270?: Buffer;
  statPair: { statType: number; value: bigint }[];
  level: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk2_0 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.unk7_0 = reader.u32();
  data.unk8 = reader.u8();
  if (reader.bool()) data.unk10_0 = reader.u8();
  if (reader.bool()) data.unk12_0 = reader.u32();
  if (reader.bool()) data.struct_337 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.unk16_0 = reader.u8();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.typeId = reader.u32();
  if (reader.bool()) data.unk21_0 = reader.u32();
  data.unk22 = reader.u8();
  if (reader.bool()) data.unk24_0 = reader.u32();
  data.unk25 = reader.u8();
  data.unk26 = reader.u8();
  data.directionYaw = Angle.read(reader);
  data.objectId = reader.u64();
  if (reader.bool()) data.unk30_0 = reader.u8();
  if (reader.bool()) data.unk32_0 = reader.u8();
  if (reader.bool()) data.unk34_0 = reader.u8();
  data.unk35 = reader.u8();
  if (reader.bool()) data.unk37_0 = reader.u64();
  data.position = Vector3F.read(reader);
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk41_0 = reader.u8();
  if (reader.bool()) data.struct_735 = Struct_735.read(reader);
  data.unk44 = reader.u8();
  if (reader.bool()) data.unk46_0 = reader.u16();
  if (reader.bool()) data.struct_270 = reader.bytes(reader.u16(), 12, 12);
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
  data.level = reader.u16();
  return data;
}
