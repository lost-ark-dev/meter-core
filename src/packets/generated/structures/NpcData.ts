// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_720 from "../structures/Struct_720";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  unk1_0?: number;
  transitIndex?: number;
  directionYaw: Angle.Angle;
  level: number;
  unk7_0?: number;
  unk9_0?: number;
  unk11_0?: bigint;
  unk13_0?: number;
  balanceLevel?: number;
  objectId: bigint;
  unk17: number;
  unk18: number;
  unk20_0?: number;
  struct_331?: Buffer;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  spawnIndex: number;
  unk26_0?: number;
  unk27: number;
  unk29_0?: number;
  struct_720?: Struct_720.Struct_720;
  unk32: number;
  position: Vector3F.Vector3F;
  unk35_0?: number;
  unk36: number;
  unk38_0?: number;
  unk39: number;
  unk41_0?: number;
  unk43_0?: number;
  typeId: number;
  statPair: { statType: number; value: bigint }[];
  unk47_0?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_266?: Buffer;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.unk1_0 = reader.u8();
  if (reader.bool()) data.transitIndex = reader.u32();
  data.directionYaw = Angle.read(reader);
  data.level = reader.u16();
  if (reader.bool()) data.unk7_0 = reader.u8();
  if (reader.bool()) data.unk9_0 = reader.u32();
  if (reader.bool()) data.unk11_0 = reader.u64();
  if (reader.bool()) data.unk13_0 = reader.u32();
  if (reader.bool()) data.balanceLevel = reader.u16();
  data.objectId = reader.u64();
  data.unk17 = reader.u8();
  data.unk18 = reader.u8();
  if (reader.bool()) data.unk20_0 = reader.u8();
  if (reader.bool()) data.struct_331 = reader.bytes(reader.u16(), 11, 9);
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.spawnIndex = reader.u32();
  if (reader.bool()) data.unk26_0 = reader.u32();
  data.unk27 = reader.u8();
  if (reader.bool()) data.unk29_0 = reader.u8();
  if (reader.bool()) data.struct_720 = Struct_720.read(reader);
  data.unk32 = reader.u8();
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.unk35_0 = reader.u8();
  data.unk36 = reader.u8();
  if (reader.bool()) data.unk38_0 = reader.u8();
  data.unk39 = reader.u8();
  if (reader.bool()) data.unk41_0 = reader.u8();
  if (reader.bool()) data.unk43_0 = reader.u32();
  data.typeId = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const E = {} as { statType: number; value: bigint };
      E.statType = reader.u8();
      E.value = ReadNBytesInt64.read(reader);
      return E;
    },
    153
  );
  if (reader.bool()) data.unk47_0 = reader.u16();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.struct_266 = reader.bytes(reader.u16(), 12, 12);
  return data;
}
