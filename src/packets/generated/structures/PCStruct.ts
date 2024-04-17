// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as EquipItemData from "../structures/EquipItemData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type PCStruct = {
  grabbedData?: Buffer;
  guildName: string;
  characterId: bigint;
  avatarHide: number;
  position: Vector3F.Vector3F;
  unk7_m: number;
  level: number;
  unk4_m: number;
  heading: Angle.Angle;
  worldId: number;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  guildId: bigint;
  avgItemLevel: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  unk15: bigint;
  name: string;
  addonFeatureIdList: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  statPair: { statType: number; value: bigint }[];
  unk23_m: number;
  secondHonorTitleId: number;
  unk0_m: Buffer;
  unk23: number;
  unk1_m: number;
  unk45_m: number;
  playerId: bigint;
  lookData: Buffer;
  unk5_m: number;
  firstHonorTitleId: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk31: number;
  unk2_m: number;
  unk33: number;
  unk17_m: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk36: number;
  rvRLevel: number;
  maxItemLevel: number;
  unk25_m: number;
  petId: number;
  unk32_m: number;
  identityData: Buffer;
  unk29_m: number;
  unk44: number;
  classId: number;
  unk46: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.guildName = reader.string(20);
  data.characterId = reader.u64();
  data.avatarHide = reader.u8();
  data.position = Vector3F.read(reader);
  data.unk7_m = reader.u32();
  data.level = reader.u16();
  data.unk4_m = reader.u32();
  data.heading = Angle.read(reader);
  data.worldId = reader.u8();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const H = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      H.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      H.skillId = reader.u32();
      return H;
    },
    200
  );
  data.guildId = reader.u64();
  data.avgItemLevel = reader.f32();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.unk15 = reader.u64();
  data.name = reader.string(20);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
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
  data.unk23_m = reader.u8();
  data.secondHonorTitleId = reader.u16();
  data.unk0_m = reader.bytes(5);
  data.unk23 = reader.u32();
  data.unk1_m = reader.u8();
  data.unk45_m = reader.u32();
  data.playerId = reader.u64();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk5_m = reader.u32();
  data.firstHonorTitleId = reader.u16();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk31 = reader.u8();
  data.unk2_m = reader.u8();
  data.unk33 = reader.u32();
  data.unk17_m = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk36 = reader.u32();
  data.rvRLevel = reader.u16();
  data.maxItemLevel = reader.f32();
  data.unk25_m = reader.u8();
  data.petId = reader.u32();
  data.unk32_m = reader.u8();
  data.identityData = reader.bytes(25);
  data.unk29_m = reader.u8();
  data.unk44 = reader.u8();
  data.classId = reader.u16();
  data.unk46 = reader.u8();
  return data;
}
