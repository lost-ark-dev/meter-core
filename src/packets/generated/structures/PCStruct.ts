// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as EquipItemData from "../structures/EquipItemData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type PCStruct = {
  classId: number;
  unk7_m: number;
  unk29_m: number;
  guildId: bigint;
  lookData: Buffer;
  unk4_m: number;
  addonFeatureIdList: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk8: number;
  maxItemLevel: number;
  name: string;
  identityData: Buffer;
  unk1_m: number;
  unk25_m: number;
  unk17_m: number;
  unk5_m: number;
  worldId: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  unk18: number;
  unk15_m: number;
  petId: number;
  unk2_m: number;
  unk32_m: number;
  unk23: number;
  rvRLevel: number;
  secondHonorTitleId: number;
  playerId: bigint;
  characterId: bigint;
  grabbedData?: Buffer;
  avatarHide: number;
  unk0_m: Buffer;
  heading: Angle.Angle;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  level: number;
  firstHonorTitleId: number;
  unk28_m: number;
  statPair: { statType: number; value: bigint }[];
  unk38: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  guildName: string;
  avgItemLevel: number;
  unk45_m: number;
  unk23_m: number;
  position: Vector3F.Vector3F;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.classId = reader.u16();
  data.unk7_m = reader.u32();
  data.unk29_m = reader.u8();
  data.guildId = reader.u64();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk4_m = reader.u32();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk8 = reader.u32();
  data.maxItemLevel = reader.f32();
  data.name = reader.string(20);
  data.identityData = reader.bytes(25);
  data.unk1_m = reader.u8();
  data.unk25_m = reader.u8();
  data.unk17_m = reader.u8();
  data.unk5_m = reader.u32();
  data.worldId = reader.u8();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.unk18 = reader.u32();
  data.unk15_m = reader.u8();
  data.petId = reader.u32();
  data.unk2_m = reader.u8();
  data.unk32_m = reader.u8();
  data.unk23 = reader.u8();
  data.rvRLevel = reader.u16();
  data.secondHonorTitleId = reader.u16();
  data.playerId = reader.u64();
  data.characterId = reader.u64();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.avatarHide = reader.u8();
  data.unk0_m = reader.bytes(5);
  data.heading = Angle.read(reader);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const J = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      J.skillId = reader.u32();
      J.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return J;
    },
    200
  );
  data.level = reader.u16();
  data.firstHonorTitleId = reader.u16();
  data.unk28_m = reader.u8();
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
  data.unk38 = reader.u32();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.guildName = reader.string(20);
  data.avgItemLevel = reader.f32();
  data.unk45_m = reader.u32();
  data.unk23_m = reader.u8();
  data.position = Vector3F.read(reader);
  return data;
}
