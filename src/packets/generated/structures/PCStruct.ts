// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as EquipItemData from "../structures/EquipItemData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PCStruct = {
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk1: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk29_m: number;
  firstHonorTitleId: number;
  guildName: string;
  unk7_m: number;
  guildId: bigint;
  unk17_m: number;
  classId: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  heading: Angle.Angle;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk1_m: number;
  petId: number;
  playerId: bigint;
  unk16: number;
  unk17: number;
  unk0_m: Buffer;
  name: string;
  statPair: { statType: number; value: bigint }[];
  lookData: Buffer;
  rvRLevel: number;
  avgItemLevel: number;
  addonFeatureIdList: Buffer;
  unk23_m: number;
  unk2_m: number;
  maxItemLevel: number;
  secondHonorTitleId: number;
  unk29: bigint;
  unk4_m: number;
  grabbedData?: Buffer;
  unk33: number;
  position: Vector3F.Vector3F;
  unk35: number;
  unk5_m: number;
  unk25_m: number;
  level: number;
  characterId: bigint;
  unk32_m: number;
  unk45_m: number;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk43: number;
  avatarHide: number;
  worldId: number;
  identityData: Buffer;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk1 = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk29_m = reader.u8();
  data.firstHonorTitleId = reader.u16();
  data.guildName = reader.string(20);
  data.unk7_m = reader.u32();
  data.guildId = reader.u64();
  data.unk17_m = reader.u8();
  data.classId = reader.u16();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.heading = Angle.read(reader);
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk1_m = reader.u8();
  data.petId = reader.u32();
  data.playerId = reader.u64();
  data.unk16 = reader.u32();
  data.unk17 = reader.u32();
  data.unk0_m = reader.bytes(5);
  data.name = reader.string(20);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const L = {} as { statType: number; value: bigint };
      L.statType = reader.u8();
      L.value = ReadNBytesInt64.read(reader);
      return L;
    },
    153
  );
  data.lookData = reader.bytes(reader.u32(), 512);
  data.rvRLevel = reader.u16();
  data.avgItemLevel = reader.f32();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk23_m = reader.u8();
  data.unk2_m = reader.u8();
  data.maxItemLevel = reader.f32();
  data.secondHonorTitleId = reader.u16();
  data.unk29 = reader.u64();
  data.unk4_m = reader.u32();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.unk33 = reader.u8();
  data.position = Vector3F.read(reader);
  data.unk35 = reader.u32();
  data.unk5_m = reader.u32();
  data.unk25_m = reader.u8();
  data.level = reader.u16();
  data.characterId = reader.u64();
  data.unk32_m = reader.u8();
  data.unk45_m = reader.u32();
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
  data.unk43 = reader.u8();
  data.avatarHide = reader.u8();
  data.worldId = reader.u8();
  data.identityData = reader.bytes(25);
  return data;
}
