// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as EquipItemData from "../structures/EquipItemData";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PCStruct = {
  name: string;
  unk4_m: number;
  identityData: Buffer;
  classId: number;
  unk4: number;
  avatarHide: number;
  unk6: number;
  guildName: string;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk29_m: number;
  unk0_m: Buffer;
  maxItemLevel: number;
  unk7_m: number;
  avgItemLevel: number;
  firstHonorTitleId: number;
  unk17_m: number;
  unk1_m: number;
  unk17: number;
  statPair: { statType: number; value: bigint }[];
  guildId: bigint;
  unk32_m: number;
  unk5_m: number;
  addonFeatureIdList: Buffer;
  unk23: bigint;
  petId: number;
  playerId: bigint;
  equipItemDataList: EquipItemData.EquipItemData[];
  heading: Angle.Angle;
  unk23_m: number;
  position: Vector3F.Vector3F;
  unk25_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk2_m: number;
  unk34: number;
  lookData: Buffer;
  unk36: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  worldId: number;
  rvRLevel: number;
  characterId: bigint;
  unk41: number;
  unk45_m: number;
  level: number;
  secondHonorTitleId: number;
  grabbedData?: Buffer;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.name = reader.string(20);
  data.unk4_m = reader.u32();
  data.identityData = reader.bytes(25);
  data.classId = reader.u16();
  data.unk4 = reader.u32();
  data.avatarHide = reader.u8();
  data.unk6 = reader.u32();
  data.guildName = reader.string(20);
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk29_m = reader.u8();
  data.unk0_m = reader.bytes(5);
  data.maxItemLevel = reader.f32();
  data.unk7_m = reader.u32();
  data.avgItemLevel = reader.f32();
  data.firstHonorTitleId = reader.u16();
  data.unk17_m = reader.u8();
  data.unk1_m = reader.u8();
  data.unk17 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const I = {} as { statType: number; value: bigint };
      I.statType = reader.u8();
      I.value = ReadNBytesInt64.read(reader);
      return I;
    },
    153
  );
  data.guildId = reader.u64();
  data.unk32_m = reader.u8();
  data.unk5_m = reader.u32();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk23 = reader.u64();
  data.petId = reader.u32();
  data.playerId = reader.u64();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.heading = Angle.read(reader);
  data.unk23_m = reader.u8();
  data.position = Vector3F.read(reader);
  data.unk25_m = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
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
  data.unk2_m = reader.u8();
  data.unk34 = reader.u32();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk36 = reader.u8();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.worldId = reader.u8();
  data.rvRLevel = reader.u16();
  data.characterId = reader.u64();
  data.unk41 = reader.u8();
  data.unk45_m = reader.u32();
  data.level = reader.u16();
  data.secondHonorTitleId = reader.u16();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  return data;
}
