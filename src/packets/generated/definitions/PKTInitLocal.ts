// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_731 from "../structures/Struct_731";
import * as AbilityData from "../structures/AbilityData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTInitLocal = {
  unk0: number;
  unk1: bigint;
  struct_219: Buffer;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  unk4: number;
  struct_335: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_132: Buffer;
  unk9_0?: number;
  struct_415: Struct_731.Struct_731[];
  unk11: bigint;
  unk12: number;
  addonFeatureIdList: Buffer;
  abilityDataList: AbilityData.AbilityData[];
  unk15: number;
  statPair: { statType: number; value: bigint }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.unk0 = reader.u8();
  data.unk1 = reader.u64();
  data.struct_219 = reader.bytes(reader.u16(), 3, 17);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const s = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      s.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      s.skillId = reader.u32();
      return s;
    },
    200
  );
  data.unk4 = reader.u8();
  data.struct_335 = reader.bytes(reader.u16(), 104, 30);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.struct_132 = reader.bytes(reader.u16(), 351, 48);
  if (reader.bool()) data.unk9_0 = reader.u32();
  data.struct_415 = reader.array(reader.u16(), () => Struct_731.read(reader), 300);
  data.unk11 = reader.u64();
  data.unk12 = reader.u32();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.unk15 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const y = {} as { statType: number; value: bigint };
      y.statType = reader.u8();
      y.value = ReadNBytesInt64.read(reader);
      return y;
    },
    152
  );
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 38748;
