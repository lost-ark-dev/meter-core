// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as AbilityData from "../structures/AbilityData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_695 from "../structures/Struct_695";
export type PKTInitLocal = {
  statPair: { Value: bigint; StatType: number }[];
  abilityDataList: AbilityData.AbilityData[];
  struct_124: Buffer;
  Unk3: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_399: Struct_695.Struct_695[];
  struct_120: Buffer;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
  struct_320: Buffer;
  Unk9: number;
  struct_217: Buffer;
  Unk11: bigint;
  Unk12: number;
  Unk13_0?: number;
  Unk14: bigint;
  Unk15: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const X = {} as any;
      X.Value = ReadNBytesInt64.read(reader);
      X.StatType = reader.u8();
      return X;
    },
    152
  );
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.struct_124 = reader.bytes(reader.u16(), 346, 48);
  data.Unk3 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.struct_399 = reader.array(reader.u16(), () => Struct_695.read(reader), 300);
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const $ = {} as any;
      $.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      $.SkillId = reader.u32();
      return $;
    },
    200
  );
  data.struct_320 = reader.bytes(reader.u16(), 104, 30);
  data.Unk9 = reader.u32();
  data.struct_217 = reader.bytes(reader.u16(), 3, 17);
  data.Unk11 = reader.u64();
  data.Unk12 = reader.u8();
  if (reader.bool()) data.Unk13_0 = reader.u32();
  data.Unk14 = reader.u64();
  data.Unk15 = reader.u8();
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 55118;
