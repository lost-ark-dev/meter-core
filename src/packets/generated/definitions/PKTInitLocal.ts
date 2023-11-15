// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as AbilityData from "../structures/AbilityData";
import * as Struct_741 from "../structures/Struct_741";
export type PKTInitLocal = {
  struct_336: Buffer;
  addonFeatureIdList: Buffer;
  unk2: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  statPair: { statType: number; value: bigint }[];
  abilityDataList: AbilityData.AbilityData[];
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk8_0?: number;
  unk9: number;
  unk10: bigint;
  struct_222: Buffer;
  unk12: number;
  struct_131: Buffer;
  unk14: bigint;
  unk15: number;
  struct_417: Struct_741.Struct_741[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.struct_336 = reader.bytes(reader.u16(), 104, 30);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk2 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const t = {} as { statType: number; value: bigint };
      t.statType = reader.u8();
      t.value = ReadNBytesInt64.read(reader);
      return t;
    },
    153
  );
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const v = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      v.skillId = reader.u32();
      v.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return v;
    },
    200
  );
  if (reader.bool()) data.unk8_0 = reader.u32();
  data.unk9 = reader.u8();
  data.unk10 = reader.u64();
  data.struct_222 = reader.bytes(reader.u16(), 3, 17);
  data.unk12 = reader.u8();
  data.struct_131 = reader.bytes(reader.u16(), 351, 48);
  data.unk14 = reader.u64();
  data.unk15 = reader.u32();
  data.struct_417 = reader.array(reader.u16(), () => Struct_741.read(reader), 300);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 13685;
