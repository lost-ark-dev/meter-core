// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as EquipItemData from "../structures/EquipItemData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PCStruct = {
  identityData: Buffer;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  avatarHide: number;
  unk1_m: number;
  unk15_m: number;
  unk5: number;
  petId: number;
  name: string;
  lookData: Buffer;
  unk45_m: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk11: number;
  secondHonorTitleId: number;
  unk13: number;
  guildName: string;
  unk23_m: number;
  level: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  classId: number;
  grabbedData?: Buffer;
  unk0_m: Buffer;
  unk17_m: number;
  playerId: bigint;
  characterId: bigint;
  unk28_m: number;
  unk29_m: number;
  rvRLevel: number;
  addonFeatureIdList: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  avgItemLevel: number;
  unk5_m: number;
  unk32_m: number;
  heading: Angle.Angle;
  firstHonorTitleId: number;
  position: Vector3F.Vector3F;
  worldId: number;
  unk2_m: number;
  statPair: { statType: number; value: bigint }[];
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  unk7_m: number;
  unk25_m: number;
  unk42: number;
  unk4_m: number;
  guildId: number;
  maxItemLevel: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.identityData = reader.bytes(25);
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.avatarHide = reader.u8();
  data.unk1_m = reader.u8();
  data.unk15_m = reader.u8();
  data.unk5 = reader.u32();
  data.petId = reader.u32();
  data.name = reader.string(20);
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk45_m = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk11 = reader.u8();
  data.secondHonorTitleId = reader.u16();
  data.unk13 = reader.u32();
  data.guildName = reader.string(20);
  data.unk23_m = reader.u8();
  data.level = reader.u16();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.classId = reader.u16();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.unk0_m = reader.bytes(5);
  data.unk17_m = reader.u8();
  data.playerId = reader.u64();
  data.characterId = reader.u64();
  data.unk28_m = reader.u8();
  data.unk29_m = reader.u8();
  data.rvRLevel = reader.u16();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.avgItemLevel = reader.f32();
  data.unk5_m = reader.u32();
  data.unk32_m = reader.u8();
  data.heading = Angle.read(reader);
  data.firstHonorTitleId = reader.u16();
  data.position = Vector3F.read(reader);
  data.worldId = reader.u8();
  data.unk2_m = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const L = {} as { statType: number; value: bigint };
      L.statType = reader.u8();
      L.value = ReadNBytesInt64.read(reader);
      return L;
    },
    152
  );
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const M = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      M.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      M.skillId = reader.u32();
      return M;
    },
    200
  );
  data.unk7_m = reader.u32();
  data.unk25_m = reader.u8();
  data.unk42 = reader.u32();
  data.unk4_m = reader.u32();
  data.guildId = reader.u32();
  data.maxItemLevel = reader.f32();
  return data;
}
