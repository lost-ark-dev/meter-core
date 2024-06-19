import type { Read, Write } from "../../stream";
export type PassiveStatusEffectRemoveNotify = {
  passiveStatusEffectList: number[];
};
export function read(reader: Read, version: number) {
  const data = {} as PassiveStatusEffectRemoveNotify;
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32());
  return data;
}
export function write(writer: Write, data: PassiveStatusEffectRemoveNotify) {
  writer.array(data.passiveStatusEffectList, { lenType: "u16" }, (obj: number) => {
    writer.u32(obj);
  });
}

export const name = "PassiveStatusEffectRemoveNotify";
