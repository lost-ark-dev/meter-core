// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as AbilityData from "../structures/AbilityData";
import * as Struct_755 from "../structures/Struct_755";
export type PKTInitLocal = {
  addonFeatureIdList: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  unk3: number;
  unk4: bigint;
  unk5: number;
  unk7_0?: number;
  struct_140: Buffer;
  statPair: { value: bigint; statType: number }[];
  struct_226: Buffer;
  unk11: number;
  unk12: bigint;
  struct_342: Buffer;
  abilityDataList: AbilityData.AbilityData[];
  unk15: number;
  struct_421: Struct_755.Struct_755[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const t = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      t.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      t.skillId = reader.u32();
      return t;
    },
    200
  );
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u32();
  if (reader.bool()) data.unk7_0 = reader.u32();
  data.struct_140 = reader.bytes(reader.u16(), 353, 48);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const w = {} as { value: bigint; statType: number };
      w.value = ReadNBytesInt64.read(reader);
      w.statType = reader.u8();
      return w;
    },
    153
  );
  data.struct_226 = reader.bytes(reader.u16(), 3, 17);
  data.unk11 = reader.u8();
  data.unk12 = reader.u64();
  data.struct_342 = reader.bytes(reader.u16(), 104, 30);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.unk15 = reader.u8();
  data.struct_421 = reader.array(reader.u16(), () => Struct_755.read(reader), 300);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 18172;
