// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_751 from "../structures/Struct_751";
import * as AbilityData from "../structures/AbilityData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTInitLocal = {
  struct_344: Buffer;
  addonFeatureIdList: Buffer;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk3: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_420: Struct_751.Struct_751[];
  unk7_0?: number;
  struct_135: Buffer;
  unk9: number;
  unk10: bigint;
  unk11: number;
  abilityDataList: AbilityData.AbilityData[];
  unk13: number;
  unk14: bigint;
  struct_226: Buffer;
  statPair: { value: bigint; statType: number }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.struct_344 = reader.bytes(reader.u16(), 104, 30);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const s = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      s.skillId = reader.u32();
      s.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return s;
    },
    200
  );
  data.unk3 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.struct_420 = reader.array(reader.u16(), () => Struct_751.read(reader), 300);
  if (reader.bool()) data.unk7_0 = reader.u32();
  data.struct_135 = reader.bytes(reader.u16(), 353, 48);
  data.unk9 = reader.u32();
  data.unk10 = reader.u64();
  data.unk11 = reader.u8();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.unk13 = reader.u8();
  data.unk14 = reader.u64();
  data.struct_226 = reader.bytes(reader.u16(), 3, 17);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const y = {} as { value: bigint; statType: number };
      y.value = ReadNBytesInt64.read(reader);
      y.statType = reader.u8();
      return y;
    },
    153
  );
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 24890;
