// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as AbilityData from "../structures/AbilityData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_731 from "../structures/Struct_731";
export type PKTInitLocal = {
  unk0: number;
  addonFeatureIdList: Buffer;
  struct_341: Buffer;
  struct_130: Buffer;
  unk4: bigint;
  struct_227: Buffer;
  unk6: number;
  unk7: bigint;
  statPair: { statType: number; value: bigint }[];
  unk9: number;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk12_0?: number;
  unk13: number;
  abilityDataList: AbilityData.AbilityData[];
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_422: Struct_731.Struct_731[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.unk0 = reader.u32();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.struct_341 = reader.bytes(reader.u16(), 104, 30);
  data.struct_130 = reader.bytes(reader.u16(), 348, 48);
  data.unk4 = reader.u64();
  data.struct_227 = reader.bytes(reader.u16(), 3, 17);
  data.unk6 = reader.u8();
  data.unk7 = reader.u64();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const s = {} as { statType: number; value: bigint };
      s.statType = reader.u8();
      s.value = ReadNBytesInt64.read(reader);
      return s;
    },
    152
  );
  data.unk9 = reader.u8();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const t = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      t.skillId = reader.u32();
      t.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return t;
    },
    200
  );
  if (reader.bool()) data.unk12_0 = reader.u32();
  data.unk13 = reader.u8();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.struct_422 = reader.array(reader.u16(), () => Struct_731.read(reader), 300);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 11094;
