// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as AbilityData from "../structures/AbilityData";
import * as Struct_730 from "../structures/Struct_730";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTInitLocal = {
  unk0: bigint;
  addonFeatureIdList: Buffer;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  unk3: number;
  struct_336: Buffer;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  struct_222: Buffer;
  unk7: bigint;
  unk8: number;
  unk9: number;
  unk11_0?: number;
  abilityDataList: AbilityData.AbilityData[];
  struct_416: Struct_730.Struct_730[];
  unk14: number;
  statPair: { value: bigint; statType: number }[];
  struct_134: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.unk0 = reader.u64();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.unk3 = reader.u8();
  data.struct_336 = reader.bytes(reader.u16(), 104, 30);
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
  data.struct_222 = reader.bytes(reader.u16(), 3, 17);
  data.unk7 = reader.u64();
  data.unk8 = reader.u8();
  data.unk9 = reader.u32();
  if (reader.bool()) data.unk11_0 = reader.u32();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.struct_416 = reader.array(reader.u16(), () => Struct_730.read(reader), 300);
  data.unk14 = reader.u8();
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const y = {} as { value: bigint; statType: number };
      y.value = ReadNBytesInt64.read(reader);
      y.statType = reader.u8();
      return y;
    },
    152
  );
  data.struct_134 = reader.bytes(reader.u16(), 351, 48);
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 39992;
