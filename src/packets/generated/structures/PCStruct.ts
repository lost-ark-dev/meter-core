// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as EquipItemData from "../structures/EquipItemData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PCStruct = {
  identityData: Buffer;
  unk1_m: number;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  unk3: number;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk45_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  rvRLevel: number;
  unk2_m: number;
  petId: number;
  classId: number;
  addonFeatureIdList: Buffer;
  firstHonorTitleId: number;
  unk29_m: number;
  avatarHide: number;
  unk0_m: Buffer;
  unk16: number;
  unk17: number;
  unk15_m: number;
  maxItemLevel: number;
  unk28_m: number;
  playerId: bigint;
  guildName: string;
  worldId: number;
  level: number;
  lookData: Buffer;
  guildId: bigint;
  grabbedData?: Buffer;
  position: Vector3F.Vector3F;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk23_m: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  heading: Angle.Angle;
  unk32_m: number;
  statPair: { statType: number; value: bigint }[];
  avgItemLevel: number;
  name: string;
  unk38: number;
  unk5_m: number;
  unk7_m: number;
  characterId: bigint;
  secondHonorTitleId: number;
  unk17_m: number;
  unk4_m: number;
  unk25_m: number;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.identityData = reader.bytes(25);
  data.unk1_m = reader.u8();
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
  data.unk3 = reader.u32();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk45_m = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.rvRLevel = reader.u16();
  data.unk2_m = reader.u8();
  data.petId = reader.u32();
  data.classId = reader.u16();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.firstHonorTitleId = reader.u16();
  data.unk29_m = reader.u8();
  data.avatarHide = reader.u8();
  data.unk0_m = reader.bytes(5);
  data.unk16 = reader.u32();
  data.unk17 = reader.u8();
  data.unk15_m = reader.u8();
  data.maxItemLevel = reader.f32();
  data.unk28_m = reader.u8();
  data.playerId = reader.u64();
  data.guildName = reader.string(20);
  data.worldId = reader.u8();
  data.level = reader.u16();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.guildId = reader.u64();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.position = Vector3F.read(reader);
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 32);
  data.unk23_m = reader.u8();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.heading = Angle.read(reader);
  data.unk32_m = reader.u8();
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
  data.avgItemLevel = reader.f32();
  data.name = reader.string(20);
  data.unk38 = reader.u32();
  data.unk5_m = reader.u32();
  data.unk7_m = reader.u32();
  data.characterId = reader.u64();
  data.secondHonorTitleId = reader.u16();
  data.unk17_m = reader.u8();
  data.unk4_m = reader.u32();
  data.unk25_m = reader.u8();
  return data;
}
