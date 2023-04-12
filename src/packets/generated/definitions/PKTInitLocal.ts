// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as Struct_693 from "../structures/Struct_693";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as AbilityData from "../structures/AbilityData";
export type PKTInitLocal = {
  struct_314: Buffer;
  Unk1: number;
  Unk2_0?: number;
  struct_117: Buffer;
  struct_396: Struct_693.Struct_693[];
  Unk5: number;
  Unk6: bigint;
  struct_211: Buffer;
  statPair: { StatType: number; Value: bigint }[];
  Unk9: number;
  Unk10: bigint;
  Unk11: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
  struct_121: Buffer;
  abilityDataList: AbilityData.AbilityData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.struct_314 = reader.bytes(reader.u16(), 104, 30);
  data.Unk1 = reader.u32();
  if (reader.bool()) data.Unk2_0 = reader.u32();
  data.struct_117 = reader.bytes(reader.u16(), 200, 4);
  data.struct_396 = reader.array(reader.u16(), () => Struct_693.read(reader), 300);
  data.Unk5 = reader.u8();
  data.Unk6 = reader.u64();
  data.struct_211 = reader.bytes(reader.u16(), 3, 17);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const l = {} as any;
      l.StatType = reader.u8();
      l.Value = ReadNBytesInt64.read(reader);
      return l;
    },
    152
  );
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u64();
  data.Unk11 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const n = {} as any;
      n.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      n.SkillId = reader.u32();
      return n;
    },
    200
  );
  data.struct_121 = reader.bytes(reader.u16(), 348, 48);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 18980;
