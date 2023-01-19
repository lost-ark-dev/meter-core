// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPassiveStatusEffectRemoveNotify = {
  passiveStatusEffectList: number[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPassiveStatusEffectRemoveNotify;
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
export const name = "PKTPassiveStatusEffectRemoveNotify";
export const opcode = 16624;
