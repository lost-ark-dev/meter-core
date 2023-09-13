// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as EquipItemData from "../structures/EquipItemData";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PCStruct = {
  unk4_m: number;
  unk17_m: number;
  unk29_m: number;
  unk23_m: number;
  heading: Angle.Angle;
  guildId: bigint;
  position: Vector3F.Vector3F;
  unk7_m: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  addonFeatureIdList: Buffer;
  rvRLevel: number;
  secondHonorTitleId: number;
  unk15_m: number;
  grabbedData?: Buffer;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  statPair: { value: bigint; statType: number }[];
  unk17: number;
  avatarHide: number;
  name: string;
  unk45_m: number;
  unk1_m: number;
  unk22: number;
  unk2_m: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  unk26: number;
  level: number;
  unk0_m: Buffer;
  petId: number;
  unk5_m: number;
  unk32_m: number;
  worldId: number;
  unk25_m: number;
  guildName: string;
  avgItemLevel: number;
  lookData: Buffer;
  firstHonorTitleId: number;
  characterId: bigint;
  playerId: bigint;
  identityData: Buffer;
  unk28_m: number;
  unk42: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  maxItemLevel: number;
  classId: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.unk4_m = reader.u32();
  data.unk17_m = reader.u8();
  data.unk29_m = reader.u8();
  data.unk23_m = reader.u8();
  data.heading = Angle.read(reader);
  data.guildId = reader.u64();
  data.position = Vector3F.read(reader);
  data.unk7_m = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.rvRLevel = reader.u16();
  data.secondHonorTitleId = reader.u16();
  data.unk15_m = reader.u8();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const I = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      I.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      I.skillId = reader.u32();
      return I;
    },
    200
  );
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const L = {} as { value: bigint; statType: number };
      L.value = ReadNBytesInt64.read(reader);
      L.statType = reader.u8();
      return L;
    },
    152
  );
  data.unk17 = reader.u32();
  data.avatarHide = reader.u8();
  data.name = reader.string(20);
  data.unk45_m = reader.u32();
  data.unk1_m = reader.u8();
  data.unk22 = reader.u32();
  data.unk2_m = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.unk26 = reader.u8();
  data.level = reader.u16();
  data.unk0_m = reader.bytes(5);
  data.petId = reader.u32();
  data.unk5_m = reader.u32();
  data.unk32_m = reader.u8();
  data.worldId = reader.u8();
  data.unk25_m = reader.u8();
  data.guildName = reader.string(20);
  data.avgItemLevel = reader.f32();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.firstHonorTitleId = reader.u16();
  data.characterId = reader.u64();
  data.playerId = reader.u64();
  data.identityData = reader.bytes(25);
  data.unk28_m = reader.u8();
  data.unk42 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.maxItemLevel = reader.f32();
  data.classId = reader.u16();
  return data;
}
