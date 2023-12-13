// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as Struct_743 from "../structures/Struct_743";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as AbilityData from "../structures/AbilityData";
export type PKTInitLocal = {
  unk0: bigint;
  unk1: number;
  unk2: number;
  unk4_0?: number;
  struct_416: Struct_743.Struct_743[];
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  struct_137: Buffer;
  statPair: { value: bigint; statType: number }[];
  unk9: number;
  struct_225: Buffer;
  unk11: number;
  unk12: bigint;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  addonFeatureIdList: Buffer;
  abilityDataList: AbilityData.AbilityData[];
  struct_336: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.unk0 = reader.u64();
  data.unk1 = reader.u32();
  data.unk2 = reader.u8();
  if (reader.bool()) data.unk4_0 = reader.u32();
  data.struct_416 = reader.array(reader.u16(), () => Struct_743.read(reader), 300);
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
  data.struct_137 = reader.bytes(reader.u16(), 351, 48);
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
  data.unk9 = reader.u8();
  data.struct_225 = reader.bytes(reader.u16(), 3, 17);
  data.unk11 = reader.u8();
  data.unk12 = reader.u64();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.struct_336 = reader.bytes(reader.u16(), 104, 30);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 58281;
