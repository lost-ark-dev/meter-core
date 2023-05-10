// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as AbilityData from "../structures/AbilityData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_707 from "../structures/Struct_707";
export type PKTInitLocal = {
  Unk0: number;
  Unk1: number;
  struct_215: Buffer;
  Unk3: bigint;
  statPair: { StatType: number; Value: bigint }[];
  addonSkillFeatureList: { SkillId: number; addonSkillFeatureIdList: number[] }[];
  Unk6: number;
  struct_125: Buffer;
  abilityDataList: AbilityData.AbilityData[];
  struct_120: Buffer;
  struct_328: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_408: Struct_707.Struct_707[];
  Unk13: number;
  Unk14_0?: number;
  Unk15: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u8();
  data.struct_215 = reader.bytes(reader.u16(), 3, 17);
  data.Unk3 = reader.u64();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const k = {} as any;
      k.StatType = reader.u8();
      k.Value = ReadNBytesInt64.read(reader);
      return k;
    },
    152
  );
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const l = {} as any;
      l.SkillId = reader.u32();
      l.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return l;
    },
    200
  );
  data.Unk6 = reader.u8();
  data.struct_125 = reader.bytes(reader.u16(), 348, 48);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.struct_328 = reader.bytes(reader.u16(), 104, 30);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.struct_408 = reader.array(reader.u16(), () => Struct_707.read(reader), 300);
  data.Unk13 = reader.u8();
  if (reader.bool()) data.Unk14_0 = reader.u32();
  data.Unk15 = reader.u64();
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 47316;
