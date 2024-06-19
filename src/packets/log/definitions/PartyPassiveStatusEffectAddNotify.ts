import type { Read, Write } from "../../stream";
export type PartyPassiveStatusEffectAddNotify = {
  objectId: bigint;
  passiveStatusEffectList: number[];
  unk0_m: number;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyPassiveStatusEffectAddNotify;
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32());
  data.unk0_m = reader.u8();
  return data;
}
export function write(writer: Write, data: PartyPassiveStatusEffectAddNotify) {
  writer.u64(data.objectId);
  writer.array(data.passiveStatusEffectList, { lenType: "u16" }, (obj: number) => {
    writer.u32(obj);
  });
  writer.u8(data.unk0_m);
}

export const name = "PartyPassiveStatusEffectAddNotify";
