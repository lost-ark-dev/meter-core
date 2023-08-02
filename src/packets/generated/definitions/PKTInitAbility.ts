// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as AbilityData from "../structures/AbilityData";
export type PKTInitAbility = {
  struct_130: Buffer;
  abilityDataList: AbilityData.AbilityData[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitAbility;
  data.struct_130 = reader.bytes(reader.u16(), 348, 48);
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  return data;
}
export const name = "PKTInitAbility";
export const opcode = 44063;
