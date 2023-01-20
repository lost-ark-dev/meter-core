// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPassiveStatusEffectAddNotify = {
  passiveStatusEffectList: number[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPassiveStatusEffectAddNotify;
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
export const name = "PKTPassiveStatusEffectAddNotify";
export const opcode = 6905;
