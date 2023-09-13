// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_714 from "../structures/Struct_714";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type NpcData = {
  struct_327?: Buffer;
  unk3_0?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk5: number;
  unk7_0?: number;
  statPair: { statType: number; value: bigint }[];
  unk10_0?: number;
  level: number;
  unk13_0?: bigint;
  unk15_0?: number;
  unk17_0?: number;
  position: Vector3F.Vector3F;
  typeId: number;
  unk20: number;
  unk22_0?: number;
  unk24_0?: number;
  objectId: bigint;
  spawnIndex: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk29_0?: number;
  directionYaw: Angle.Angle;
  unk32_0?: number;
  unk33: number;
  unk35_0?: number;
  unk36: number;
  struct_264?: Buffer;
  struct_714?: Struct_714.Struct_714;
  unk41: number;
  transitIndex?: number;
  unk44: number;
  unk46_0?: number;
  balanceLevel?: number;
  unk50_0?: number;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.struct_327 = reader.bytes(reader.u16(), 11, 9);
  if (reader.bool()) data.unk3_0 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk5 = reader.u8();
  if (reader.bool()) data.unk7_0 = reader.u32();
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
  if (reader.bool()) data.unk10_0 = reader.u8();
  data.level = reader.u16();
  if (reader.bool()) data.unk13_0 = reader.u64();
  if (reader.bool()) data.unk15_0 = reader.u8();
  if (reader.bool()) data.unk17_0 = reader.u8();
  data.position = Vector3F.read(reader);
  data.typeId = reader.u32();
  data.unk20 = reader.u8();
  if (reader.bool()) data.unk22_0 = reader.u8();
  if (reader.bool()) data.unk24_0 = reader.u32();
  data.objectId = reader.u64();
  data.spawnIndex = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.unk29_0 = reader.u32();
  data.directionYaw = Angle.read(reader);
  if (reader.bool()) data.unk32_0 = reader.u16();
  data.unk33 = reader.u8();
  if (reader.bool()) data.unk35_0 = reader.u8();
  data.unk36 = reader.u8();
  if (reader.bool()) data.struct_264 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.struct_714 = Struct_714.read(reader);
  data.unk41 = reader.u8();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.unk44 = reader.u8();
  if (reader.bool()) data.unk46_0 = reader.u8();
  if (reader.bool()) data.balanceLevel = reader.u16();
  if (reader.bool()) data.unk50_0 = reader.u8();
  return data;
}
