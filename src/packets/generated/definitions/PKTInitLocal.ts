// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as AbilityData from "../structures/AbilityData";
import * as Struct_693 from "../structures/Struct_693";
export type PKTInitLocal = {
  statPair: { StatType: number; Value: bigint }[];
  struct_116: Buffer;
  Unk2: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  abilityDataList: AbilityData.AbilityData[];
  Unk5: number;
  struct_321: Buffer;
  Unk7: bigint;
  struct_122: Buffer;
  Unk9: number;
  Unk10: bigint;
  struct_215: Buffer;
  Unk12: number;
  addonSkillFeatureList: { SkillId: number; addonSkillFeatureIdList: number[] }[];
  Unk14_0?: number;
  struct_403: Struct_693.Struct_693[];
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
  data.struct_116 = reader.bytes(reader.u16(), 200, 4);
  data.Unk2 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.Unk5 = reader.u32();
  data.struct_321 = reader.bytes(reader.u16(), 104, 30);
  data.Unk7 = reader.u64();
  data.struct_122 = reader.bytes(reader.u16(), 348, 48);
  data.Unk9 = reader.u8();
  data.Unk10 = reader.u64();
  data.struct_215 = reader.bytes(reader.u16(), 3, 17);
  data.Unk12 = reader.u8();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const n = {} as any;
      n.SkillId = reader.u32();
      n.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return n;
    },
    200
  );
  if (reader.bool()) data.Unk14_0 = reader.u32();
  data.struct_403 = reader.array(reader.u16(), () => Struct_693.read(reader), 300);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 48300;
