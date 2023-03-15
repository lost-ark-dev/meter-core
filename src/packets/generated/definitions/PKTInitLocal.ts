// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_691 from "../structures/Struct_691";
import * as AbilityData from "../structures/AbilityData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTInitLocal = {
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; SkillId: number }[];
  Unk1_0?: number;
  struct_323: Buffer;
  Unk3: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  Unk5: bigint;
  struct_125: Buffer;
  Unk7: number;
  Unk8: number;
  Unk9: bigint;
  struct_218: Buffer;
  struct_120: Buffer;
  Unk12: number;
  struct_403: Struct_691.Struct_691[];
  abilityDataList: AbilityData.AbilityData[];
  statPair: { StatType: number; Value: bigint }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const k = {} as any;
      k.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      k.SkillId = reader.u32();
      return k;
    },
    200
  );
  if (reader.bool()) data.Unk1_0 = reader.u32();
  data.struct_323 = reader.bytes(reader.u16(), 104, 30);
  data.Unk3 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.Unk5 = reader.u64();
  data.struct_125 = reader.bytes(reader.u16(), 346, 48);
  data.Unk7 = reader.u8();
  data.Unk8 = reader.u8();
  data.Unk9 = reader.u64();
  data.struct_218 = reader.bytes(reader.u16(), 3, 17);
  data.struct_120 = reader.bytes(reader.u16(), 200, 4);
  data.Unk12 = reader.u32();
  data.struct_403 = reader.array(reader.u16(), () => Struct_691.read(reader), 300);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const q = {} as any;
      q.StatType = reader.u8();
      q.Value = ReadNBytesInt64.read(reader);
      return q;
    },
    152
  );
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 3753;
