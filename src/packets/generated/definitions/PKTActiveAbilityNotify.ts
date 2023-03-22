// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ActiveAbility from "../structures/ActiveAbility";
export type PKTActiveAbilityNotify = {
  ObjectId: bigint;
  activeAbilityList: ActiveAbility.ActiveAbility[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTActiveAbilityNotify;
  data.ObjectId = reader.u64();
  data.activeAbilityList = reader.array(reader.u16(), () => ActiveAbility.read(reader), 60);
  return data;
}
export const name = "PKTActiveAbilityNotify";
export const opcode = 8789;
