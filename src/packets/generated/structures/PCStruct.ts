// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as EquipItemData from "../structures/EquipItemData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PCStruct = {
  identityData: Buffer;
  characterId: bigint;
  unk28_m: number;
  unk45_m: number;
  unk1_m: number;
  playerId: bigint;
  unk29_m: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  level: number;
  heading: Angle.Angle;
  name: string;
  position: Vector3F.Vector3F;
  petId: number;
  unk13: number;
  avatarHide: number;
  unk15: number;
  unk16: number;
  unk17_m: number;
  guildName: string;
  addonFeatureIdList: Buffer;
  maxItemLevel: number;
  secondHonorTitleId: number;
  worldId: number;
  unk32_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  avgItemLevel: number;
  unk23_m: number;
  unk2_m: number;
  unk0_m: Buffer;
  unk25_m: number;
  unk5_m: number;
  classId: number;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  unk33: number;
  lookData: Buffer;
  firstHonorTitleId: number;
  unk7_m: number;
  unk15_m: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  rvRLevel: number;
  statPair: { value: bigint; statType: number }[];
  guildId: bigint;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk4_m: number;
  grabbedData?: Buffer;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.identityData = reader.bytes(25);
  data.characterId = reader.u64();
  data.unk28_m = reader.u8();
  data.unk45_m = reader.u32();
  data.unk1_m = reader.u8();
  data.playerId = reader.u64();
  data.unk29_m = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.level = reader.u16();
  data.heading = Angle.read(reader);
  data.name = reader.string(20);
  data.position = Vector3F.read(reader);
  data.petId = reader.u32();
  data.unk13 = reader.u32();
  data.avatarHide = reader.u8();
  data.unk15 = reader.u8();
  data.unk16 = reader.u32();
  data.unk17_m = reader.u8();
  data.guildName = reader.string(20);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.maxItemLevel = reader.f32();
  data.secondHonorTitleId = reader.u16();
  data.worldId = reader.u8();
  data.unk32_m = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.avgItemLevel = reader.f32();
  data.unk23_m = reader.u8();
  data.unk2_m = reader.u8();
  data.unk0_m = reader.bytes(5);
  data.unk25_m = reader.u8();
  data.unk5_m = reader.u32();
  data.classId = reader.u16();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const J = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      J.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      J.skillId = reader.u32();
      return J;
    },
    200
  );
  data.unk33 = reader.u32();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.firstHonorTitleId = reader.u16();
  data.unk7_m = reader.u32();
  data.unk15_m = reader.u8();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.rvRLevel = reader.u16();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const N = {} as { value: bigint; statType: number };
      N.value = ReadNBytesInt64.read(reader);
      N.statType = reader.u8();
      return N;
    },
    152
  );
  data.guildId = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk4_m = reader.u32();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  return data;
}
