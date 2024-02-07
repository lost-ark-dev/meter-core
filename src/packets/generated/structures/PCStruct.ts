// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as EquipItemData from "../structures/EquipItemData";
export type PCStruct = {
  unk45_m: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  statPair: { value: bigint; statType: number }[];
  maxItemLevel: number;
  characterId: bigint;
  grabbedData?: Buffer;
  heading: Angle.Angle;
  unk1_m: number;
  name: string;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  position: Vector3F.Vector3F;
  avgItemLevel: number;
  petId: number;
  unk25_m: number;
  unk4_m: number;
  unk2_m: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk17_m: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  secondHonorTitleId: number;
  unk21: bigint;
  unk7_m: number;
  unk32_m: number;
  lookData: Buffer;
  unk0_m: Buffer;
  worldId: number;
  guildId: bigint;
  firstHonorTitleId: number;
  avatarHide: number;
  unk30: number;
  addonFeatureIdList: Buffer;
  unk29_m: number;
  unk23_m: number;
  rvRLevel: number;
  unk35: number;
  guildName: string;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk38: number;
  unk5_m: number;
  unk40: number;
  unk41: number;
  unk42: number;
  classId: number;
  level: number;
  identityData: Buffer;
  playerId: bigint;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.unk45_m = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
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
  data.maxItemLevel = reader.f32();
  data.characterId = reader.u64();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.heading = Angle.read(reader);
  data.unk1_m = reader.u8();
  data.name = reader.string(20);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.position = Vector3F.read(reader);
  data.avgItemLevel = reader.f32();
  data.petId = reader.u32();
  data.unk25_m = reader.u8();
  data.unk4_m = reader.u32();
  data.unk2_m = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk17_m = reader.u8();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.secondHonorTitleId = reader.u16();
  data.unk21 = reader.u64();
  data.unk7_m = reader.u32();
  data.unk32_m = reader.u8();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk0_m = reader.bytes(5);
  data.worldId = reader.u8();
  data.guildId = reader.u64();
  data.firstHonorTitleId = reader.u16();
  data.avatarHide = reader.u8();
  data.unk30 = reader.u32();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk29_m = reader.u8();
  data.unk23_m = reader.u8();
  data.rvRLevel = reader.u16();
  data.unk35 = reader.u32();
  data.guildName = reader.string(20);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const M = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      M.skillId = reader.u32();
      M.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return M;
    },
    200
  );
  data.unk38 = reader.u32();
  data.unk5_m = reader.u32();
  data.unk40 = reader.u8();
  data.unk41 = reader.u8();
  data.unk42 = reader.u8();
  data.classId = reader.u16();
  data.level = reader.u16();
  data.identityData = reader.bytes(25);
  data.playerId = reader.u64();
  return data;
}
