// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as AbilityData from "../structures/AbilityData";
export type PKTInitAbility = {
  abilityDataList: AbilityData.AbilityData[];
  struct_135: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitAbility;
  data.abilityDataList = reader.array(reader.u16(), () => AbilityData.read(reader), 100);
  data.struct_135 = reader.bytes(reader.u16(), 351, 48);
  return data;
}
export const name = "PKTInitAbility";
export const opcode = 41861;
