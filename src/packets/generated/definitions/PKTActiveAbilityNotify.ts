// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ActiveAbility from "../structures/ActiveAbility";
export type PKTActiveAbilityNotify = {
  activeAbilityList: ActiveAbility.ActiveAbility[];
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTActiveAbilityNotify;
  data.activeAbilityList = reader.array(reader.u16(), () => ActiveAbility.read(reader), 60);
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTActiveAbilityNotify";
export const opcode = 23742;
