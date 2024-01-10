// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as AbilityData from "../structures/AbilityData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_751 from "../structures/Struct_751";
export type PKTInitLocal = {
  unk1_0?: number;
  statPair: { statType: number; value: bigint }[];
  abilityDataList: AbilityData.AbilityData[];
  unk4: number;
  unk5: number;
  unk6: bigint;
  struct_225: Buffer;
  addonFeatureIdList: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk10: number;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  struct_339: Buffer;
  unk13: bigint;
  struct_139: Buffer;
  unk15: number;
  struct_419: Struct_751.Struct_751[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  if (reader.bool()) data.unk1_0 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const s = {} as { statType: number; value: bigint };
      s.statType = reader.u8();
      s.value = ReadNBytesInt64.read(reader);
      return s;
    },
    153
  );
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  data.unk6 = reader.u64();
  data.struct_225 = reader.bytes(reader.u16(), 3, 17);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk10 = reader.u32();
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
  data.struct_339 = reader.bytes(reader.u16(), 104, 30);
  data.unk13 = reader.u64();
  data.struct_139 = reader.bytes(reader.u16(), 353, 48);
  data.unk15 = reader.u8();
  data.struct_419 = reader.array(reader.u16(), () => Struct_751.read(reader), 300);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 27956;
