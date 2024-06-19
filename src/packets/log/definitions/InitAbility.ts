import type { Read, Write } from "../../stream";
import * as AbilityData from "../structures/AbilityData";
export type InitAbility = {
  abilityDataList: AbilityData.AbilityDataLog[];
};
export function read(reader: Read, version: number) {
  const data = {} as InitAbility;
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader, version));
  return data;
}
export function write(writer: Write, data: InitAbility) {
  writer.array(data.abilityDataList, { lenType: "u16" }, (obj: AbilityData.AbilityDataLog) => {
    AbilityData.write(writer, obj);
  });
}

export const name = "InitAbility";
