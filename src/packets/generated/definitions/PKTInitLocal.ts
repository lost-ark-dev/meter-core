// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as AbilityData from "../structures/AbilityData";
import * as Struct_730 from "../structures/Struct_730";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
export type PKTInitLocal = {
  addonFeatureIdList: Buffer;
  abilityDataList: AbilityData.AbilityData[];
  struct_222: Buffer;
  unk3: number;
  unk4: bigint;
  struct_420: Struct_730.Struct_730[];
  struct_337: Buffer;
  statPair: { statType: number; value: bigint }[];
  unk8: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_131: Buffer;
  unk12_0?: number;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk14: bigint;
  unk15: number;
  unk16: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.struct_222 = reader.bytes(reader.u16(), 3, 17);
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.struct_420 = reader.array(reader.u16(), () => Struct_730.read(reader), 300);
  data.struct_337 = reader.bytes(reader.u16(), 104, 30);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const u = {} as { statType: number; value: bigint };
      u.statType = reader.u8();
      u.value = ReadNBytesInt64.read(reader);
      return u;
    },
    152
  );
  data.unk8 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.struct_131 = reader.bytes(reader.u16(), 348, 48);
  if (reader.bool()) data.unk12_0 = reader.u32();
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const w = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      w.skillId = reader.u32();
      w.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return w;
    },
    200
  );
  data.unk14 = reader.u64();
  data.unk15 = reader.u8();
  data.unk16 = reader.u32();
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 31820;
