// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as AbilityData from "../structures/AbilityData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_689 from "../structures/Struct_689";
export type PKTInitLocal = {
  Unk0: number;
  abilityDataList: AbilityData.AbilityData[];
  Unk2: number;
  Unk3: bigint;
  struct_209: Buffer;
  Unk5: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_116: Buffer;
  Unk8_0?: number;
  struct_113: Buffer;
  struct_315: Buffer;
  Unk11: bigint;
  statPair: { Value: bigint; StatType: number }[];
  struct_398: Struct_689.Struct_689[];
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
  Unk15: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.Unk0 = reader.u8();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u64();
  data.struct_209 = reader.bytes(reader.u16(), 3, 17);
  data.Unk5 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.struct_116 = reader.bytes(reader.u16(), 346, 48);
  if (reader.bool()) data.Unk8_0 = reader.u32();
  data.struct_113 = reader.bytes(reader.u16(), 200, 4);
  data.struct_315 = reader.bytes(reader.u16(), 104, 30);
  data.Unk11 = reader.u64();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const m = {} as any;
      m.Value = ReadNBytesInt64.read(reader);
      m.StatType = reader.u8();
      return m;
    },
    152
  );
  data.struct_398 = reader.array(reader.u16(), () => Struct_689.read(reader), 300);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const o = {} as any;
      o.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      o.SkillId = reader.u32();
      return o;
    },
    200
  );
  data.Unk15 = reader.u8();
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 9782;
