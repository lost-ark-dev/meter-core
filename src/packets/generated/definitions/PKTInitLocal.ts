// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as AbilityData from "../structures/AbilityData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_734 from "../structures/Struct_734";
export type PKTInitLocal = {
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk2_0?: number;
  struct_132: Buffer;
  abilityDataList: AbilityData.AbilityData[];
  addonFeatureIdList: Buffer;
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk7: number;
  unk8: bigint;
  statPair: { statType: number; value: bigint }[];
  struct_330: Buffer;
  unk11: number;
  unk12: number;
  struct_217: Buffer;
  unk14: bigint;
  unk15: number;
  struct_414: Struct_734.Struct_734[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  if (reader.bool()) data.unk2_0 = reader.u32();
  data.struct_132 = reader.bytes(reader.u16(), 351, 48);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const u = {} as { skillId: number; addonSkillFeatureIdList: number[] };
      u.skillId = reader.u32();
      u.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      return u;
    },
    200
  );
  data.unk7 = reader.u32();
  data.unk8 = reader.u64();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const x = {} as { statType: number; value: bigint };
      x.statType = reader.u8();
      x.value = ReadNBytesInt64.read(reader);
      return x;
    },
    152
  );
  data.struct_330 = reader.bytes(reader.u16(), 104, 30);
  data.unk11 = reader.u8();
  data.unk12 = reader.u8();
  data.struct_217 = reader.bytes(reader.u16(), 3, 17);
  data.unk14 = reader.u64();
  data.unk15 = reader.u8();
  data.struct_414 = reader.array(reader.u16(), () => Struct_734.read(reader), 300);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 53768;
