// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as AbilityData from "../structures/AbilityData";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as Struct_729 from "../structures/Struct_729";
export type PKTInitLocal = {
  unk0: number;
  unk1: number;
  struct_222: Buffer;
  unk3: bigint;
  statPair: { statType: number; value: bigint }[];
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk6: number;
  struct_129: Buffer;
  abilityDataList: AbilityData.AbilityData[];
  addonFeatureIdList: Buffer;
  struct_341: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  struct_422: Struct_729.Struct_729[];
  unk13: number;
  unk15_0?: number;
  unk16: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.unk0 = reader.u32();
  data.unk1 = reader.u8();
  data.struct_222 = reader.bytes(reader.u16(), 3, 17);
  data.unk3 = reader.u64();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const r = {} as { statType: number; value: bigint };
      r.statType = reader.u8();
      r.value = ReadNBytesInt64.read(reader);
      return r;
    },
    152
  );
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const s = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      s.skillId = reader.u32();
      s.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return s;
    },
    200
  );
  data.unk6 = reader.u8();
  data.struct_129 = reader.bytes(reader.u16(), 348, 48);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.struct_341 = reader.bytes(reader.u16(), 104, 30);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.struct_422 = reader.array(reader.u16(), () => Struct_729.read(reader), 300);
  data.unk13 = reader.u8();
  if (reader.bool()) data.unk15_0 = reader.u32();
  data.unk16 = reader.u64();
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 47316;
