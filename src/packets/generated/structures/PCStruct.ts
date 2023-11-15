// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as EquipItemData from "../structures/EquipItemData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type PCStruct = {
  firstHonorTitleId: number;
  unk1: number;
  unk45_m: number;
  identityData: Buffer;
  unk4: number;
  petId: number;
  lookData: Buffer;
  unk7: number;
  unk5_m: number;
  unk28_m: number;
  addonFeatureIdList: Buffer;
  avatarHide: number;
  unk12: number;
  unk4_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk15_m: number;
  avgItemLevel: number;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  position: Vector3F.Vector3F;
  guildName: string;
  unk23_m: number;
  worldId: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  statPair: { statType: number; value: bigint }[];
  secondHonorTitleId: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  classId: number;
  name: string;
  heading: Angle.Angle;
  unk7_m: number;
  unk17_m: number;
  guildId: bigint;
  grabbedData?: Buffer;
  unk32_m: number;
  maxItemLevel: number;
  unk1_m: number;
  unk2_m: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  rvRLevel: number;
  unk25_m: number;
  unk0_m: Buffer;
  level: number;
  characterId: bigint;
  unk29_m: number;
  playerId: bigint;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.firstHonorTitleId = reader.u16();
  data.unk1 = reader.u8();
  data.unk45_m = reader.u32();
  data.identityData = reader.bytes(25);
  data.unk4 = reader.u32();
  data.petId = reader.u32();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk7 = reader.u32();
  data.unk5_m = reader.u32();
  data.unk28_m = reader.u8();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.avatarHide = reader.u8();
  data.unk12 = reader.u32();
  data.unk4_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk15_m = reader.u8();
  data.avgItemLevel = reader.f32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const I = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      I.skillId = reader.u32();
      I.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return I;
    },
    200
  );
  data.position = Vector3F.read(reader);
  data.guildName = reader.string(20);
  data.unk23_m = reader.u8();
  data.worldId = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const M = {} as { statType: number; value: bigint };
      M.statType = reader.u8();
      M.value = ReadNBytesInt64.read(reader);
      return M;
    },
    153
  );
  data.secondHonorTitleId = reader.u16();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.classId = reader.u16();
  data.name = reader.string(20);
  data.heading = Angle.read(reader);
  data.unk7_m = reader.u32();
  data.unk17_m = reader.u8();
  data.guildId = reader.u64();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.unk32_m = reader.u8();
  data.maxItemLevel = reader.f32();
  data.unk1_m = reader.u8();
  data.unk2_m = reader.u8();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.rvRLevel = reader.u16();
  data.unk25_m = reader.u8();
  data.unk0_m = reader.bytes(5);
  data.level = reader.u16();
  data.characterId = reader.u64();
  data.unk29_m = reader.u8();
  data.playerId = reader.u64();
  return data;
}
