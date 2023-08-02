// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as EquipItemData from "../structures/EquipItemData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PCStruct = {
  heading: Angle.Angle;
  unk15_m: number;
  unk2: number;
  unk3: number;
  secondHonorTitleId: number;
  lookData: Buffer;
  name: string;
  unk45_m: number;
  unk23_m: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk2_m: number;
  unk29_m: number;
  avatarHide: number;
  avgItemLevel: number;
  grabbedData?: Buffer;
  unk7_m: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  unk5_m: number;
  unk0_m: Buffer;
  unk1_m: number;
  unk21: number;
  rvRLevel: number;
  level: number;
  playerId: bigint;
  petId: number;
  classId: number;
  characterId: bigint;
  guildId: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  identityData: Buffer;
  unk17_m: number;
  unk32: number;
  position: Vector3F.Vector3F;
  unk32_m: number;
  unk25_m: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  addonFeatureIdList: Buffer;
  firstHonorTitleId: number;
  guildName: string;
  unk28_m: number;
  worldId: number;
  unk4_m: number;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  statPair: { statType: number; value: bigint }[];
  maxItemLevel: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.heading = Angle.read(reader);
  data.unk15_m = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u32();
  data.secondHonorTitleId = reader.u16();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.name = reader.string(20);
  data.unk45_m = reader.u32();
  data.unk23_m = reader.u8();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk2_m = reader.u8();
  data.unk29_m = reader.u8();
  data.avatarHide = reader.u8();
  data.avgItemLevel = reader.f32();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.unk7_m = reader.u32();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.unk5_m = reader.u32();
  data.unk0_m = reader.bytes(5);
  data.unk1_m = reader.u8();
  data.unk21 = reader.u32();
  data.rvRLevel = reader.u16();
  data.level = reader.u16();
  data.playerId = reader.u64();
  data.petId = reader.u32();
  data.classId = reader.u16();
  data.characterId = reader.u64();
  data.guildId = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.identityData = reader.bytes(25);
  data.unk17_m = reader.u8();
  data.unk32 = reader.u32();
  data.position = Vector3F.read(reader);
  data.unk32_m = reader.u8();
  data.unk25_m = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.firstHonorTitleId = reader.u16();
  data.guildName = reader.string(20);
  data.unk28_m = reader.u8();
  data.worldId = reader.u8();
  data.unk4_m = reader.u32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const L = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      L.skillId = reader.u32();
      L.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return L;
    },
    200
  );
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const O = {} as { statType: number; value: bigint };
      O.statType = reader.u8();
      O.value = ReadNBytesInt64.read(reader);
      return O;
    },
    152
  );
  data.maxItemLevel = reader.f32();
  return data;
}
