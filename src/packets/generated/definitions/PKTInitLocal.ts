// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as Struct_756 from "../structures/Struct_756";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as AbilityData from "../structures/AbilityData";
export type PKTInitLocal = {
  unk0: number;
  struct_226: Buffer;
  unk2: bigint;
  struct_422: Struct_756.Struct_756[];
  statPair: { statType: number; value: bigint }[];
  unk5: number;
  unk6: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk8: bigint;
  struct_137: Buffer;
  addonFeatureIdList: Buffer;
  unk11: number;
  unk13_0?: number;
  abilityDataList: AbilityData.AbilityData[];
  struct_342: Buffer;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.unk0 = reader.u8();
  data.struct_226 = reader.bytes(reader.u16(), 3, 17);
  data.unk2 = reader.u64();
  data.struct_422 = reader.array(reader.u16(), () => Struct_756.read(reader), 300);
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
  data.unk5 = reader.u32();
  data.unk6 = reader.u8();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk8 = reader.u64();
  data.struct_137 = reader.bytes(reader.u16(), 353, 48);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk11 = reader.u8();
  if (reader.bool()) data.unk13_0 = reader.u32();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.struct_342 = reader.bytes(reader.u16(), 104, 30);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const w = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      w.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      w.skillId = reader.u32();
      return w;
    },
    200
  );
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 12070;
