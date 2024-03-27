// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_754 from "../structures/Struct_754";
import * as AbilityData from "../structures/AbilityData";
export type PKTInitLocal = {
  unk0: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk2: number;
  struct_230: Buffer;
  unk4: bigint;
  statPair: { statType: number; value: bigint }[];
  struct_424: Struct_754.Struct_754[];
  unk7: number;
  struct_345: Buffer;
  unk9: number;
  struct_137: Buffer;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  addonFeatureIdList: Buffer;
  unk13: bigint;
  unk15_0?: number;
  abilityDataList: AbilityData.AbilityData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.unk0 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk2 = reader.u8();
  data.struct_230 = reader.bytes(reader.u16(), 3, 17);
  data.unk4 = reader.u64();
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
  data.struct_424 = reader.array(reader.u16(), () => Struct_754.read(reader), 300);
  data.unk7 = reader.u32();
  data.struct_345 = reader.bytes(reader.u16(), 104, 30);
  data.unk9 = reader.u8();
  data.struct_137 = reader.bytes(reader.u16(), 353, 48);
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
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk13 = reader.u64();
  if (reader.bool()) data.unk15_0 = reader.u32();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 48680;
