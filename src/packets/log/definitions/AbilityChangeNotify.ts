import type { Read, Write } from "../../stream";
import type { PKTAbilityChangeNotify } from "../../generated/types";
import * as AbilityData from "../structures/AbilityData";
export type AbilityChangeNotify = {
  abilityDataList: AbilityData.AbilityDataLog[];
};
export function read(reader: Read, version: number) {
  const data = {} as AbilityChangeNotify;
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader, version), 100);
  return data;
}
export function write(writer: Write, data: AbilityChangeNotify | PKTAbilityChangeNotify) {
  writer.array(data.abilityDataList, { maxLen: 100, lenType: "u16" }, (obj: AbilityData.AbilityDataLog) => {
    AbilityData.write(writer, obj);
  });
}

export const name = "AbilityChangeNotify";
