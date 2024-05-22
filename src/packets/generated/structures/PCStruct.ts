// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as EquipItemData from "../structures/EquipItemData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PCStruct = {
  unk0: bigint;
  unk45_m: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  maxItemLevel: number;
  playerId: bigint;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk5_m: number;
  unk32_m: number;
  unk17_m: number;
  heading: Angle.Angle;
  unk25_m: number;
  petId: number;
  firstHonorTitleId: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  worldId: number;
  unk15: bigint;
  rvRLevel: number;
  guildName: string;
  unk1_m: number;
  unk23_m: number;
  classId: number;
  unk21: number;
  avgItemLevel: number;
  unk4_m: number;
  guildId: bigint;
  position: Vector3F.Vector3F;
  level: number;
  identityData: Buffer;
  unk29_m: number;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  name: string;
  unk0_m: Buffer;
  unk32: number;
  statPair: { value: bigint; statType: number }[];
  lookData: Buffer;
  grabbedData?: Buffer;
  unk2_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  characterId: bigint;
  avatarHide: number;
  unk41: number;
  unk42: number;
  addonFeatureIdList: Buffer;
  unk44: number;
  unk7_m: number;
  unk46: number;
  secondHonorTitleId: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.unk0 = reader.u64();
  data.unk45_m = reader.u32();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.maxItemLevel = reader.f32();
  data.playerId = reader.u64();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk5_m = reader.u32();
  data.unk32_m = reader.u8();
  data.unk17_m = reader.u8();
  data.heading = Angle.read(reader);
  data.unk25_m = reader.u8();
  data.petId = reader.u32();
  data.firstHonorTitleId = reader.u16();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.worldId = reader.u8();
  data.unk15 = reader.u64();
  data.rvRLevel = reader.u16();
  data.guildName = reader.string(20);
  data.unk1_m = reader.u8();
  data.unk23_m = reader.u8();
  data.classId = reader.u16();
  data.unk21 = reader.u32();
  data.avgItemLevel = reader.f32();
  data.unk4_m = reader.u32();
  data.guildId = reader.u64();
  data.position = Vector3F.read(reader);
  data.level = reader.u16();
  data.identityData = reader.bytes(25);
  data.unk29_m = reader.u8();
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
  data.name = reader.string(20);
  data.unk0_m = reader.bytes(5);
  data.unk32 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const P = {} as { value: bigint; statType: number };
      P.value = ReadNBytesInt64.read(reader);
      P.statType = reader.u8();
      return P;
    },
    153
  );
  data.lookData = reader.bytes(reader.u32(), 512);
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.unk2_m = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.characterId = reader.u64();
  data.avatarHide = reader.u8();
  data.unk41 = reader.u32();
  data.unk42 = reader.u8();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk44 = reader.u8();
  data.unk7_m = reader.u32();
  data.unk46 = reader.u32();
  data.secondHonorTitleId = reader.u16();
  return data;
}
