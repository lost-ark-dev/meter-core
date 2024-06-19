import type { Read, Write } from "../../stream";
export type PassiveStatusEffectAddNotify = {
  passiveStatusEffectList: number[];
};
export function read(reader: Read, version: number) {
  const data = {} as PassiveStatusEffectAddNotify;
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32());
  return data;
}
export function write(writer: Write, data: PassiveStatusEffectAddNotify) {
  writer.array(data.passiveStatusEffectList, { lenType: "u16" }, (obj: number) => {
    writer.u32(obj);
  });
}

export const name = "PassiveStatusEffectAddNotify";
