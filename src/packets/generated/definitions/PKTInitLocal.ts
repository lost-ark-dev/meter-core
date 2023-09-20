// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as AbilityData from "../structures/AbilityData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
import * as Struct_731 from "../structures/Struct_731";
export type PKTInitLocal = {
  struct_135: Buffer;
  unk1: number;
  addonFeatureIdList: Buffer;
  unk3: bigint;
  unk5_0?: number;
  statusEffectDatas: StatusEffectData.StatusEffectData[];
  abilityDataList: AbilityData.AbilityData[];
  statPair: { value: bigint; statType: number }[];
  struct_416: Struct_731.Struct_731[];
  unk10: number;
  struct_337: Buffer;
  unk12: number;
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  struct_222: Buffer;
  unk15: bigint;
  unk16: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitLocal;
  data.struct_135 = reader.bytes(reader.u16(), 351, 48);
  data.unk1 = reader.u8();
  data.addonFeatureIdList = reader.bytes(reader.u16(), 200, 4);
  data.unk3 = reader.u64();
  if (reader.bool()) data.unk5_0 = reader.u32();
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader), 80);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const u = {} as { value: bigint; statType: number };
      u.value = ReadNBytesInt64.read(reader);
      u.statType = reader.u8();
      return u;
    },
    152
  );
  data.struct_416 = reader.array(reader.u16(), () => Struct_731.read(reader), 300);
  data.unk10 = reader.u8();
  data.struct_337 = reader.bytes(reader.u16(), 104, 30);
  data.unk12 = reader.u32();
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
  data.struct_222 = reader.bytes(reader.u16(), 3, 17);
  data.unk15 = reader.u64();
  data.unk16 = reader.u8();
  return data;
}
export const name = "PKTInitLocal";
export const opcode = 30875;
