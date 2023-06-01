// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as EquipItemData from "../structures/EquipItemData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PCStruct = {
  unk0_m: Buffer;
  unk1_m: number;
  unk2_m: number;
  level: number;
  unk4_m: number;
  unk7_m: number;
  secondHonorTitleId: number;
  unk5_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  classId: number;
  heading: Angle.Angle;
  identityData: Buffer;
  avatarHide: number;
  unk13: number;
  rvRLevel: number;
  unk15_m: number;
  avgItemLevel: number;
  unk17_m: number;
  addonFeatureIdList: Buffer;
  lookData: Buffer;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  firstHonorTitleId: number;
  unk23_m: number;
  unk24: number;
  unk25_m: number;
  statPair: { statType: number; value: bigint }[];
  unk27_m: number;
  unk28_m: number;
  unk29_m: number;
  name: string;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk32_m: number;
  grabbedData?: Buffer;
  playerId: bigint;
  guildName: string;
  unk37: number;
  guildId: number;
  maxItemLevel: number;
  petId: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  position: Vector3F.Vector3F;
  characterId: bigint;
  unk44: number;
  unk45_m: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.unk0_m = reader.bytes(5);
  data.unk1_m = reader.u8();
  data.unk2_m = reader.u8();
  data.level = reader.u16();
  data.unk4_m = reader.u32();
  data.unk7_m = reader.u32();
  data.secondHonorTitleId = reader.u16();
  data.unk5_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.classId = reader.u16();
  data.heading = Angle.read(reader);
  data.identityData = reader.bytes(25);
  data.avatarHide = reader.u8();
  data.unk13 = reader.u32();
  data.rvRLevel = reader.u16();
  data.unk15_m = reader.u8();
  data.avgItemLevel = reader.f32();
  data.unk17_m = reader.u8();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.lookData = reader.bytes(reader.u32(), 512);
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.firstHonorTitleId = reader.u16();
  data.unk23_m = reader.u8();
  data.unk24 = reader.u32();
  data.unk25_m = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const J = {} as { statType: number; value: bigint };
      J.statType = reader.u8();
      J.value = ReadNBytesInt64.read(reader);
      return J;
    },
    152
  );
  data.unk27_m = reader.u8();
  data.unk28_m = reader.u8();
  data.unk29_m = reader.u8();
  data.name = reader.string(20);
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
  data.unk32_m = reader.u8();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.playerId = reader.u64();
  data.guildName = reader.string(20);
  data.unk37 = reader.u8();
  data.guildId = reader.u32();
  data.maxItemLevel = reader.f32();
  data.petId = reader.u32();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.position = Vector3F.read(reader);
  data.characterId = reader.u64();
  data.unk44 = reader.u32();
  data.unk45_m = reader.u32();
  return data;
}
