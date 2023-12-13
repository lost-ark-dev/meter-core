// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as EquipItemData from "../structures/EquipItemData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type PCStruct = {
  unk29_m: number;
  addonFeatureIdList: Buffer;
  unk5_m: number;
  guildId: bigint;
  unk4_m: number;
  name: string;
  avatarHide: number;
  maxItemLevel: number;
  unk1_m: number;
  petId: number;
  lookData: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk12: number;
  worldId: number;
  statPair: { value: bigint; statType: number }[];
  unk15: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  unk15_m: number;
  avgItemLevel: number;
  unk19: number;
  unk23_m: number;
  unk21: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  playerId: bigint;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk0_m: Buffer;
  unk7_m: number;
  identityData: Buffer;
  unk25_m: number;
  firstHonorTitleId: number;
  secondHonorTitleId: number;
  unk17_m: number;
  heading: Angle.Angle;
  guildName: string;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  position: Vector3F.Vector3F;
  unk32_m: number;
  level: number;
  unk45_m: number;
  grabbedData?: Buffer;
  classId: number;
  rvRLevel: number;
  unk2_m: number;
  unk28_m: number;
  characterId: bigint;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.unk29_m = reader.u8();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk5_m = reader.u32();
  data.guildId = reader.u64();
  data.unk4_m = reader.u32();
  data.name = reader.string(20);
  data.avatarHide = reader.u8();
  data.maxItemLevel = reader.f32();
  data.unk1_m = reader.u8();
  data.petId = reader.u32();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk12 = reader.u32();
  data.worldId = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const I = {} as { value: bigint; statType: number };
      I.value = ReadNBytesInt64.read(reader);
      I.statType = reader.u8();
      return I;
    },
    153
  );
  data.unk15 = reader.u32();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.unk15_m = reader.u8();
  data.avgItemLevel = reader.f32();
  data.unk19 = reader.u8();
  data.unk23_m = reader.u8();
  data.unk21 = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.playerId = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk0_m = reader.bytes(5);
  data.unk7_m = reader.u32();
  data.identityData = reader.bytes(25);
  data.unk25_m = reader.u8();
  data.firstHonorTitleId = reader.u16();
  data.secondHonorTitleId = reader.u16();
  data.unk17_m = reader.u8();
  data.heading = Angle.read(reader);
  data.guildName = reader.string(20);
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
  data.position = Vector3F.read(reader);
  data.unk32_m = reader.u8();
  data.level = reader.u16();
  data.unk45_m = reader.u32();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.classId = reader.u16();
  data.rvRLevel = reader.u16();
  data.unk2_m = reader.u8();
  data.unk28_m = reader.u8();
  data.characterId = reader.u64();
  return data;
}
