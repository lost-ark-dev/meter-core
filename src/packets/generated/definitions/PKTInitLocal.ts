// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as AbilityData from "../structures/AbilityData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_732 from "../structures/Struct_732";
export type PKTInitLocal = {
  unk0: number;
  struct_340: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  abilityDataList: AbilityData.AbilityData[];
  addonFeatureIdList: Buffer;
  unk5: bigint;
  unk6: number;
  unk8_0?: number;
  unk9: number;
  struct_220: Buffer;
  unk11: bigint;
  struct_129: Buffer;
  statPair: { statType: number; value: bigint }[];
  struct_423: Struct_732.Struct_732[];
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  unk16: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.unk0 = reader.u8();
  data.struct_340 = reader.bytes(reader.u16(), 104, 30);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk5 = reader.u64();
  data.unk6 = reader.u32();
  if (reader.bool()) data.unk8_0 = reader.u32();
  data.unk9 = reader.u8();
  data.struct_220 = reader.bytes(reader.u16(), 3, 17);
  data.unk11 = reader.u64();
  data.struct_129 = reader.bytes(reader.u16(), 348, 48);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const u = {} as { statType: number; value: bigint };
      u.statType = reader.u8();
      u.value = ReadNBytesInt64.read(reader);
      return u;
    },
    152
  );
  data.struct_423 = reader.array(reader.u16(), () => Struct_732.read(reader), 300);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const w = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      w.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      w.skillId = reader.u32();
      return w;
    },
    200
  );
  data.unk16 = reader.u8();
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 1478;
