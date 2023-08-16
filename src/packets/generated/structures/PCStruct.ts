// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as EquipItemData from "../structures/EquipItemData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PCStruct = {
  statPair: { statType: number; value: bigint }[];
  unk0_m: Buffer;
  level: number;
  avgItemLevel: number;
  position: Vector3F.Vector3F;
  unk5: number;
  grabbedData?: Buffer;
  addonFeatureIdList: Buffer;
  maxItemLevel: number;
  secondHonorTitleId: number;
  classId: number;
  unk5_m: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  petId: number;
  lookData: Buffer;
  unk17_m: number;
  identityData: Buffer;
  playerId: bigint;
  unk28_m: number;
  unk7_m: number;
  unk23_m: number;
  firstHonorTitleId: number;
  avatarHide: number;
  guildName: string;
  unk45_m: number;
  name: string;
  unk27: number;
  rvRLevel: number;
  guildId: bigint;
  worldId: number;
  unk25_m: number;
  characterId: bigint;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk34: number;
  unk4_m: number;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  heading: Angle.Angle;
  unk15_m: number;
  unk29_m: number;
  unk1_m: number;
  unk2_m: number;
  unk32_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk45: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const H = {} as { statType: number; value: bigint };
      H.statType = reader.u8();
      H.value = ReadNBytesInt64.read(reader);
      return H;
    },
    152
  );
  data.unk0_m = reader.bytes(5);
  data.level = reader.u16();
  data.avgItemLevel = reader.f32();
  data.position = Vector3F.read(reader);
  data.unk5 = reader.u32();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.maxItemLevel = reader.f32();
  data.secondHonorTitleId = reader.u16();
  data.classId = reader.u16();
  data.unk5_m = reader.u32();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.petId = reader.u32();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk17_m = reader.u8();
  data.identityData = reader.bytes(25);
  data.playerId = reader.u64();
  data.unk28_m = reader.u8();
  data.unk7_m = reader.u32();
  data.unk23_m = reader.u8();
  data.firstHonorTitleId = reader.u16();
  data.avatarHide = reader.u8();
  data.guildName = reader.string(20);
  data.unk45_m = reader.u32();
  data.name = reader.string(20);
  data.unk27 = reader.u8();
  data.rvRLevel = reader.u16();
  data.guildId = reader.u64();
  data.worldId = reader.u8();
  data.unk25_m = reader.u8();
  data.characterId = reader.u64();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk34 = reader.u32();
  data.unk4_m = reader.u32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const K = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      K.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      K.skillId = reader.u32();
      return K;
    },
    200
  );
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.heading = Angle.read(reader);
  data.unk15_m = reader.u8();
  data.unk29_m = reader.u8();
  data.unk1_m = reader.u8();
  data.unk2_m = reader.u8();
  data.unk32_m = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk45 = reader.u32();
  return data;
}
