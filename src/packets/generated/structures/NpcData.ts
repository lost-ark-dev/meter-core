// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_752 from "../structures/Struct_752";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as StatusEffectData from "../structures/StatusEffectData";
export type NpcData = {
  unk1_0?: number;
  unk3_0?: number;
  unk4: number;
  spawnIndex: number;
  typeId: number;
  unk8_0?: number;
  unk10_0?: number;
  struct_50?: { unk1_0_0: number; unk1_0_1: bigint; unk1_0_2: bigint; unk1_0_3: bigint }[];
  statPair: { value: bigint; statType: number }[];
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk15_0?: number;
  struct_752?: Struct_752.Struct_752;
  unk19_0?: number;
  unk20: number;
  unk21: number;
  unk22: number;
  directionYaw: Angle.Angle;
  struct_275?: Buffer;
  unk27_0?: number;
  unk29_0?: number;
  unk31_0?: number;
  unk33_0?: number;
  unk35_0?: number;
  unk36: number;
  unk37: number;
  level: number;
  transitIndex?: number;
  unk42_0?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk45_0?: bigint;
  balanceLevel?: number;
  position: Vector3F.Vector3F;
  struct_343?: Buffer;
  objectId: bigint;
};
export function read(reader: Read) {
  const data = {} as NpcData;
  if (reader.bool()) data.unk1_0 = reader.u32();
  if (reader.bool()) data.unk3_0 = reader.u8();
  data.unk4 = reader.u8();
  data.spawnIndex = reader.u32();
  data.typeId = reader.u32();
  if (reader.bool()) data.unk8_0 = reader.u8();
  if (reader.bool()) data.unk10_0 = reader.u8();
  if (reader.bool() /*unk0*/) {
    data.struct_50 = reader.array(
      reader.u16(),
      () => {
        const E = {} as { unk1_0_0: number; unk1_0_1: bigint; unk1_0_2: bigint; unk1_0_3: bigint };
        E.unk1_0_0 = reader.u8();
        E.unk1_0_1 = ReadNBytesInt64.read(reader);
        E.unk1_0_2 = ReadNBytesInt64.read(reader);
        E.unk1_0_3 = ReadNBytesInt64.read(reader);
        return E;
      },
      16
    );
  }
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
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  if (reader.bool()) data.unk15_0 = reader.u8();
  if (reader.bool()) data.struct_752 = Struct_752.read(reader);
  if (reader.bool()) data.unk19_0 = reader.u32();
  data.unk20 = reader.u8();
  data.unk21 = reader.u8();
  data.unk22 = reader.u8();
  data.directionYaw = Angle.read(reader);
  if (reader.bool()) data.struct_275 = reader.bytes(reader.u16(), 12, 12);
  if (reader.bool()) data.unk27_0 = reader.u32();
  if (reader.bool()) data.unk29_0 = reader.u16();
  if (reader.bool()) data.unk31_0 = reader.u8();
  if (reader.bool()) data.unk33_0 = reader.u8();
  if (reader.bool()) data.unk35_0 = reader.u32();
  data.unk36 = reader.u8();
  data.unk37 = reader.u8();
  data.level = reader.u16();
  if (reader.bool()) data.transitIndex = reader.u32();
  if (reader.bool()) data.unk42_0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk45_0 = reader.u64();
  if (reader.bool()) data.balanceLevel = reader.u16();
  data.position = Vector3F.read(reader);
  if (reader.bool()) data.struct_343 = reader.bytes(reader.u16(), 11, 9);
  data.objectId = reader.u64();
  return data;
}
