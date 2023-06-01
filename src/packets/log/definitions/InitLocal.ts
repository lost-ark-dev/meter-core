import type { Read, Write } from "../../stream";
import type { PKTInitLocal } from "../../generated/types";
import * as StatusEffectData from "../structures/StatusEffectData";
import * as AbilityData from "../structures/AbilityData";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type InitLocal = {
  statPair: { statType: number; value: bigint }[];
  statusEffectDatas: StatusEffectData.StatusEffectDataLog[];
  addonSkillFeatureList: { addonSkillFeatureIdList: number[]; skillId: number }[];
  abilityDataList: AbilityData.AbilityDataLog[];
};
export function read(reader: Read, version: number) {
  const data = {} as InitLocal;
  data.statPair = reader.array(
    reader.u16(),
    () => {
      const l = {} as { statType: number; value: bigint };
      l.statType = reader.u8();
      l.value = ReadNBytesInt64.read(reader, version);
      return l;
    },
    152
  );
  data.statusEffectDatas = reader.array(reader.u16(), () => StatusEffectData.read(reader, version), 80);
  data.addonSkillFeatureList = reader.array(
    reader.u16(),
    () => {
      const n = {} as { addonSkillFeatureIdList: number[]; skillId: number };
      n.addonSkillFeatureIdList = reader.array(reader.u16(), () => reader.u32(), 5);
      n.skillId = reader.u32();
      return n;
    },
    200
  );
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader, version), 100);
  return data;
}
export function write(writer: Write, data: InitLocal | PKTInitLocal) {
  writer.array(data.statPair, { maxLen: 152, lenType: "u16" }, (obj: { statType: number; value: bigint }) => {
    writer.u8(obj.statType);
    ReadNBytesInt64.write(writer, obj.value);
  });
  writer.array(data.statusEffectDatas, { maxLen: 80, lenType: "u16" }, (obj: StatusEffectData.StatusEffectDataLog) => {
    StatusEffectData.write(writer, obj);
  });
  writer.array(
    data.addonSkillFeatureList,
    { maxLen: 200, lenType: "u16" },
    (obj: { addonSkillFeatureIdList: number[]; skillId: number }) => {
      writer.array(obj.addonSkillFeatureIdList, { maxLen: 5, lenType: "u16" }, (obj2: number) => {
        writer.u32(obj2);
      });
      writer.u32(obj.skillId);
    }
  );
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj: AbilityData.AbilityDataLog) => {
    AbilityData.write(writer, obj);
  });
}

export const name = "InitLocal";
