import type { Read, Write } from "../../stream";
import type { PKTPassiveStatusEffectRemoveNotify } from "../../generated/types";
export type PassiveStatusEffectRemoveNotify = {
  passiveStatusEffectList: number[];
};
export function read(reader: Read, version: number) {
  const data = {} as PassiveStatusEffectRemoveNotify;
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
export function write(writer: Write, data: PassiveStatusEffectRemoveNotify | PKTPassiveStatusEffectRemoveNotify) {
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj: number) => {
    writer.u32(obj);
  });
}

export const name = "PassiveStatusEffectRemoveNotify";
