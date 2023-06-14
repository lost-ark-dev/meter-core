// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as AbilityData from "../structures/AbilityData";
import * as Struct_731 from "../structures/Struct_731";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTInitLocal = {
  unk0: number;
  abilityDataList: AbilityData.AbilityData[];
  unk2: bigint;
  struct_223: Buffer;
  unk4: number;
  unk5: number;
  unk7_0?: number;
  struct_342: Buffer;
  struct_130: Buffer;
  addonFeatureIdList: Buffer;
  unk11: bigint;
  struct_419: Struct_731.Struct_731[];
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  addonSkillFeatureList: { skillId: number; addonSkillFeatureIdList: number[] }[];
  unk15: number;
  statPair: { statType: number; value: bigint }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.unk0 = reader.u8();
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.unk2 = reader.u64();
  data.struct_223 = reader.bytes(reader.u16(), 3, 17);
  data.unk4 = reader.u8();
  data.unk5 = reader.u32();
  if (reader.bool()) data.unk7_0 = reader.u32();
  data.struct_342 = reader.bytes(reader.u16(), 104, 30);
  data.struct_130 = reader.bytes(reader.u16(), 348, 48);
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk11 = reader.u64();
  data.struct_419 = reader.array(reader.u16(), () => Struct_731.read(reader), 300);
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
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
  data.unk15 = reader.u8();
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
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 9337;
