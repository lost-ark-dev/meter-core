// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_690 from "../structures/Struct_690";
import * as AbilityData from "../structures/AbilityData";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTInitLocal = {
  statPair: { StatType: number; Value: bigint }[];
  struct_397: Struct_690.Struct_690[];
  Unk2: number;
  abilityDataList: AbilityData.AbilityData[];
  struct_125: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk6_0?: number;
  Unk7: number;
  struct_318: Buffer;
  Unk9: number;
  struct_215: Buffer;
  Unk11: bigint;
  Unk12: bigint;
  addonSkillFeatureList: { SkillId: number; addonSkillFeatureIdList: number[] }[];
  struct_120: Buffer;
  Unk15: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
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
  data.struct_397 = reader.array(reader.u16(), () => Struct_690.read(reader), 300);
  data.Unk2 = reader.u8();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.struct_125 = reader.bytes(reader.u16(), 348, 48);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.Unk6_0 = reader.u32();
  data.Unk7 = reader.u32();
  data.struct_318 = reader.bytes(reader.u16(), 104, 30);
  data.Unk9 = reader.u8();
  data.struct_215 = reader.bytes(reader.u16(), 3, 17);
  data.Unk11 = reader.u64();
  data.Unk12 = reader.u64();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const o = {} as any;
      o.SkillId = reader.u32();
      o.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return o;
    },
    200
  );
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.Unk15 = reader.u8();
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 7987;
