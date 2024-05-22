// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_773 from "../structures/Struct_773";
import * as AbilityData from "../structures/AbilityData";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTInitLocal = {
  statPair: { value: bigint; statType: number }[];
  unk1: number;
  unk2: number;
  addonFeatureIdList: Buffer;
  struct_227: Buffer;
  unk5: bigint;
  unk6: number;
  struct_432: Struct_773.Struct_773[];
  unk9_0?: number;
  abilityDataList: AbilityData.AbilityData[];
  unk11: bigint;
  struct_348: Buffer;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk14: number;
  struct_139: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const s = {} as { value: bigint; statType: number };
      s.value = ReadNBytesInt64.read(reader);
      s.statType = reader.u8();
      return s;
    },
    153
  );
  data.unk1 = reader.u32();
  data.unk2 = reader.u8();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.struct_227 = reader.bytes(reader.u16(), 3, 17);
  data.unk5 = reader.u64();
  data.unk6 = reader.u8();
  data.struct_432 = reader.array(reader.u16(), () => Struct_773.read(reader), 300);
  if (reader.bool()) data.unk9_0 = reader.u32();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.unk11 = reader.u64();
  data.struct_348 = reader.bytes(reader.u16(), 104, 30);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const v = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      v.skillId = reader.u32();
      v.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return v;
    },
    200
  );
  data.unk14 = reader.u8();
  data.struct_139 = reader.bytes(reader.u16(), 353, 48);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 58915;
