// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_733 from "../structures/Struct_733";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as AbilityData from "../structures/AbilityData";
export type PKTInitLocal = {
  unk0: bigint;
  unk1: number;
  struct_217: Buffer;
  struct_334: Buffer;
  unk4: number;
  statPair: { value: bigint; statType: number }[];
  struct_415: Struct_733.Struct_733[];
  unk7: number;
  unk8: bigint;
  addonFeatureIdList: Buffer;
  unk10: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_132: Buffer;
  unk14_0?: number;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  abilityDataList: AbilityData.AbilityData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.unk0 = reader.u64();
  data.unk1 = reader.u8();
  data.struct_217 = reader.bytes(reader.u16(), 3, 17);
  data.struct_334 = reader.bytes(reader.u16(), 104, 30);
  data.unk4 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const s = {} as { value: bigint; statType: number };
      s.value = ReadNBytesInt64.read(reader);
      s.statType = reader.u8();
      return s;
    },
    152
  );
  data.struct_415 = reader.array(reader.u16(), () => Struct_733.read(reader), 300);
  data.unk7 = reader.u32();
  data.unk8 = reader.u64();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk10 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.struct_132 = reader.bytes(reader.u16(), 351, 48);
  if (reader.bool()) data.unk14_0 = reader.u32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const v = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      v.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      v.skillId = reader.u32();
      return v;
    },
    200
  );
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 25712;
