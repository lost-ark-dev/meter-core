// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as EquipItemData from "../structures/EquipItemData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type PCStruct = {
  rvRLevel: number;
  unk32_m: number;
  unk17_m: number;
  unk1_m: number;
  classId: number;
  unk23_m: number;
  unk2_m: number;
  guildId: number;
  characterId: bigint;
  secondHonorTitleId: number;
  unk28_m: number;
  unk5_m: number;
  avatarHide: number;
  firstHonorTitleId: number;
  identityData: Buffer;
  unk15: number;
  unk16: number;
  position: Vector3F.Vector3F;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  lookData: Buffer;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  addonFeatureIdList: Buffer;
  unk29_m: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  petId: number;
  grabbedData?: Buffer;
  unk0_m: Buffer;
  heading: Angle.Angle;
  equipItemDataList: EquipItemData.EquipItemData[];
  guildName: string;
  playerId: bigint;
  statPair: { statType: number; value: bigint }[];
  level: number;
  avgItemLevel: number;
  worldId: number;
  maxItemLevel: number;
  unk45_m: number;
  unk15_m: number;
  unk39: number;
  name: string;
  unk7_m: number;
  unk42: number;
  unk4_m: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk25_m: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.rvRLevel = reader.u16();
  data.unk32_m = reader.u8();
  data.unk17_m = reader.u8();
  data.unk1_m = reader.u8();
  data.classId = reader.u16();
  data.unk23_m = reader.u8();
  data.unk2_m = reader.u8();
  data.guildId = reader.u32();
  data.characterId = reader.u64();
  data.secondHonorTitleId = reader.u16();
  data.unk28_m = reader.u8();
  data.unk5_m = reader.u32();
  data.avatarHide = reader.u8();
  data.firstHonorTitleId = reader.u16();
  data.identityData = reader.bytes(25);
  data.unk15 = reader.u32();
  data.unk16 = reader.u8();
  data.position = Vector3F.read(reader);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.lookData = reader.bytes(reader.u32(), 512);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const H = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      H.skillId = reader.u32();
      H.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return H;
    },
    200
  );
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk29_m = reader.u8();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.petId = reader.u32();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.unk0_m = reader.bytes(5);
  data.heading = Angle.read(reader);
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.guildName = reader.string(20);
  data.playerId = reader.u64();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const M = {} as { statType: number; value: bigint };
      M.statType = reader.u8();
      M.value = ReadNBytesInt64.read(reader);
      return M;
    },
    152
  );
  data.level = reader.u16();
  data.avgItemLevel = reader.f32();
  data.worldId = reader.u8();
  data.maxItemLevel = reader.f32();
  data.unk45_m = reader.u32();
  data.unk15_m = reader.u8();
  data.unk39 = reader.u32();
  data.name = reader.string(20);
  data.unk7_m = reader.u32();
  data.unk42 = reader.u32();
  data.unk4_m = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk25_m = reader.u8();
  return data;
}
