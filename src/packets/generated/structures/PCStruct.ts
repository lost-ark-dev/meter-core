// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Vector3F from "../../common/Vector3F";
import * as Angle from "../../common/Angle";
import * as EquipItemData from "../structures/EquipItemData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as PeriodUpdateStatData from "../structures/PeriodUpdateStatData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PCStruct = {
  avgItemLevel: number;
  equipLifeToolDataList: EquipItemData.EquipItemData[];
  unk2: number;
  unk23_m: number;
  unk0_m: Buffer;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  rvRLevel: number;
  lookData: Buffer;
  guildName: string;
  unk1_m: number;
  firstHonorTitleId: number;
  worldId: number;
  unk29_m: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk14: number;
  unk4_m: number;
  level: number;
  unk17_m: number;
  addonFeatureIdList: Buffer;
  unk45_m: number;
  position: Vector3F.Vector3F;
  name: string;
  equipItemDataList: EquipItemData.EquipItemData[];
  unk23: number;
  guildId: bigint;
  periodUpdateStatDataList: PeriodUpdateStatData.PeriodUpdateStatData[];
  unk5_m: number;
  unk27: number;
  unk28: number;
  unk29: number;
  classId: number;
  avatarHide: number;
  unk32: bigint;
  statPair: { value: bigint; statType: number }[];
  maxItemLevel: number;
  unk7_m: number;
  unk2_m: number;
  identityData: Buffer;
  playerId: bigint;
  petId: number;
  secondHonorTitleId: number;
  grabbedData?: Buffer;
  heading: Angle.Angle;
  unk32_m: number;
  unk25_m: number;
  characterId: bigint;
};
export function read(reader: Read) {
  const data = {} as PCStruct;
  data.avgItemLevel = reader.f32();
  data.equipLifeToolDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 9);
  data.unk2 = reader.u32();
  data.unk23_m = reader.u8();
  data.unk0_m = reader.bytes(5);
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
  data.rvRLevel = reader.u16();
  data.lookData = reader.bytes(reader.u32(), 512);
  data.guildName = reader.string(20);
  data.unk1_m = reader.u8();
  data.firstHonorTitleId = reader.u16();
  data.worldId = reader.u8();
  data.unk29_m = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk14 = reader.u32();
  data.unk4_m = reader.u32();
  data.level = reader.u16();
  data.unk17_m = reader.u8();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk45_m = reader.u32();
  data.position = Vector3F.read(reader);
  data.name = reader.string(20);
  data.equipItemDataList = reader.array(reader.u16(), () => EquipItemData.read(reader), 33);
  data.unk23 = reader.u8();
  data.guildId = reader.u64();
  data.periodUpdateStatDataList = reader.array(reader.u16(), () => PeriodUpdateStatData.read(reader), 5);
  data.unk5_m = reader.u32();
  data.unk27 = reader.u8();
  data.unk28 = reader.u32();
  data.unk29 = reader.u8();
  data.classId = reader.u16();
  data.avatarHide = reader.u8();
  data.unk32 = reader.u64();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const O = {} as { value: bigint; statType: number };
      O.value = ReadNBytesInt64.read(reader);
      O.statType = reader.u8();
      return O;
    },
    153
  );
  data.maxItemLevel = reader.f32();
  data.unk7_m = reader.u32();
  data.unk2_m = reader.u8();
  data.identityData = reader.bytes(25);
  data.playerId = reader.u64();
  data.petId = reader.u32();
  data.secondHonorTitleId = reader.u16();
  if (reader.bool()) data.grabbedData = reader.bytes(12);
  data.heading = Angle.read(reader);
  data.unk32_m = reader.u8();
  data.unk25_m = reader.u8();
  data.characterId = reader.u64();
  return data;
}
