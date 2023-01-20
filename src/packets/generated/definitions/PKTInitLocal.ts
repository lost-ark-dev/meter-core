// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as Struct_691 from "../structures/Struct_691";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as AbilityData from "../structures/AbilityData";
export type PKTInitLocal = {
  struct_400: Struct_691.Struct_691[];
  Unk1: bigint;
  struct_115: Buffer;
  Unk3: number;
  Unk4: number;
  struct_319: Buffer;
  Unk6: bigint;
  struct_210: Buffer;
  Unk8: number;
  struct_120: Buffer;
  Unk10: number;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk13_0?: number;
  statPair: { StatType: number; Value: bigint }[];
  abilityDataList: AbilityData.AbilityData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.struct_400 = reader.array(reader.u16(), () => Struct_691.read(reader), 300);
  data.Unk1 = reader.u64();
  data.struct_115 = reader.bytes(reader.u16(), 200, 4);
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u8();
  data.struct_319 = reader.bytes(reader.u16(), 104, 30);
  data.Unk6 = reader.u64();
  data.struct_210 = reader.bytes(reader.u16(), 3, 17);
  data.Unk8 = reader.u8();
  data.struct_120 = reader.bytes(reader.u16(), 346, 48);
  data.Unk10 = reader.u8();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const l = {} as any;
      l.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      l.SkillId = reader.u32();
      return l;
    },
    200
  );
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.Unk13_0 = reader.u32();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const p = {} as any;
      p.StatType = reader.u8();
      p.Value = ReadNBytesInt64.read(reader);
      return p;
    },
    152
  );
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 25609;
