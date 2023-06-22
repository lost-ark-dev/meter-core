// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as EquipItemData from "../structures/EquipItemData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type PCStruct = {
  equipItemDataList: EquipItemData.EquipItemData[];
  avatarHide: number;
  avgItemLevel: number;
  level: number;
  statPair: { statType: number; value: bigint }[];
  unk5_m: number;
  petId: number;
  grabbedData?: Buffer;
  classId: number;
  unk10: number;
  unk11: number;
  position: Vector3F.Vector3F;
  unk13: number;
  unk45_m: number;
  worldId: number;
  unk4_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk23_m: number;
  heading: Angle.Angle;
  addonFeatureIdList: Buffer;
  maxItemLevel: number;
  name: string;
  unk17_m: number;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk0_m: Buffer;
  unk26: number;
  rvRLevel: number;
  unk2_m: number;
  unk29_m: number;
  unk28_m: number;
  unk32_m: number;
  secondHonorTitleId: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  characterId: bigint;
  unk25_m: number;
  unk1_m: number;
  guildId: number;
  guildName: string;
  playerId: bigint;
  lookData: Buffer;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  unk15_m: number;
  identityData: Buffer;
  unk7_m: number;
  firstHonorTitleId: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.avatarHide = reader.u8();
  data.avgItemLevel = reader.f32();
  data.level = reader.u16();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const I = {} as { statType: number; value: bigint };
      I.statType = reader.u8();
      I.value = ReadNBytesInt64.read(reader);
      return I;
    },
    152
  );
  data.unk5_m = reader.u32();
  data.petId = reader.u32();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.classId = reader.u16();
  data.unk10 = reader.u32();
  data.unk11 = reader.u32();
  data.position = Vector3F.read(reader);
  data.unk13 = reader.u32();
  data.unk45_m = reader.u32();
  data.worldId = reader.u8();
  data.unk4_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk23_m = reader.u8();
  data.heading = Angle.read(reader);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.maxItemLevel = reader.f32();
  data.name = reader.string(20);
  data.unk17_m = reader.u8();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const K = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      K.skillId = reader.u32();
      K.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return K;
    },
    200
  );
  data.unk0_m = reader.bytes(5);
  data.unk26 = reader.u8();
  data.rvRLevel = reader.u16();
  data.unk2_m = reader.u8();
  data.unk29_m = reader.u8();
  data.unk28_m = reader.u8();
  data.unk32_m = reader.u8();
  data.secondHonorTitleId = reader.u16();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.characterId = reader.u64();
  data.unk25_m = reader.u8();
  data.unk1_m = reader.u8();
  data.guildId = reader.u32();
  data.guildName = reader.string(20);
  data.playerId = reader.u64();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.unk15_m = reader.u8();
  data.identityData = reader.bytes(25);
  data.unk7_m = reader.u32();
  data.firstHonorTitleId = reader.u16();
  return data;
}
