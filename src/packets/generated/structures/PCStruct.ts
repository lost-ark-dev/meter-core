// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Angle from "../../common/Angle";
import * as Vector3F from "../../common/Vector3F";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as EquipItemData from "../structures/EquipItemData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
export type PCStruct = {
  petId: number;
  lookData: Buffer;
  unk15_m: number;
  statPair: { value: bigint; statType: number }[];
  characterId: bigint;
  unk5_m: number;
  unk23_m: number;
  avatarHide: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  unk4_m: number;
  unk2_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  level: number;
  worldId: number;
  unk14: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  guildName: string;
  secondHonorTitleId: number;
  addonFeatureIdList: Buffer;
  guildId: bigint;
  rvRLevel: number;
  playerId: bigint;
  identityData: Buffer;
  heading: Angle.Angle;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  unk25: number;
  classId: number;
  unk25_m: number;
  grabbedData?: Buffer;
  unk17_m: number;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk7_m: number;
  maxItemLevel: number;
  unk1_m: number;
  position: Vector3F.Vector3F;
  unk28_m: number;
  name: string;
  unk29_m: number;
  unk39: number;
  avgItemLevel: number;
  firstHonorTitleId: number;
  unk42: number;
  unk0_m: Buffer;
  unk45_m: number;
  unk32_m: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.petId = reader.u32();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.unk15_m = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const H = {} as { value: bigint; statType: number };
      H.value = ReadNBytesInt64.read(reader);
      H.statType = reader.u8();
      return H;
    },
    152
  );
  data.characterId = reader.u64();
  data.unk5_m = reader.u32();
  data.unk23_m = reader.u8();
  data.avatarHide = reader.u8();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.unk4_m = reader.u32();
  data.unk2_m = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.level = reader.u16();
  data.worldId = reader.u8();
  data.unk14 = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.guildName = reader.string(20);
  data.secondHonorTitleId = reader.u16();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.guildId = reader.u64();
  data.rvRLevel = reader.u16();
  data.playerId = reader.u64();
  data.identityData = reader.bytes(25);
  data.heading = Angle.read(reader);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const L = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      L.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      L.skillId = reader.u32();
      return L;
    },
    200
  );
  data.unk25 = reader.u32();
  data.classId = reader.u16();
  data.unk25_m = reader.u8();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.unk17_m = reader.u8();
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk7_m = reader.u32();
  data.maxItemLevel = reader.f32();
  data.unk1_m = reader.u8();
  data.position = Vector3F.read(reader);
  data.unk28_m = reader.u8();
  data.name = reader.string(20);
  data.unk29_m = reader.u8();
  data.unk39 = reader.u32();
  data.avgItemLevel = reader.f32();
  data.firstHonorTitleId = reader.u16();
  data.unk42 = reader.u8();
  data.unk0_m = reader.bytes(5);
  data.unk45_m = reader.u32();
  data.unk32_m = reader.u8();
  return data;
}
