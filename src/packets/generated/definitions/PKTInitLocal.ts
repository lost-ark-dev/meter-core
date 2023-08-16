// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as AbilityData from "../structures/AbilityData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_732 from "../structures/Struct_732";
export type PKTInitLocal = {
  unk1_0?: number;
  abilityDataList: AbilityData.AbilityData[];
  struct_132: Buffer;
  statPair: { statType: number; value: bigint }[];
  struct_337: Buffer;
  unk6: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  addonFeatureIdList: Buffer;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  unk10: number;
  unk11: number;
  struct_220: Buffer;
  unk13: bigint;
  unk14: bigint;
  unk15: number;
  struct_415: Struct_732.Struct_732[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  if (reader.bool()) data.unk1_0 = reader.u32();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.struct_132 = reader.bytes(reader.u16(), 351, 48);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const t = {} as { statType: number; value: bigint };
      t.statType = reader.u8();
      t.value = ReadNBytesInt64.read(reader);
      return t;
    },
    152
  );
  data.struct_337 = reader.bytes(reader.u16(), 104, 30);
  data.unk6 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
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
  data.unk10 = reader.u8();
  data.unk11 = reader.u8();
  data.struct_220 = reader.bytes(reader.u16(), 3, 17);
  data.unk13 = reader.u64();
  data.unk14 = reader.u64();
  data.unk15 = reader.u32();
  data.struct_415 = reader.array(reader.u16(), () => Struct_732.read(reader), 300);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 25712;
