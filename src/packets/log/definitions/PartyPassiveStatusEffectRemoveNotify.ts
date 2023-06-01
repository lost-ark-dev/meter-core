import type { Read, Write } from "../../stream";
import type { PKTPartyPassiveStatusEffectRemoveNotify } from "../../generated/types";
export type PartyPassiveStatusEffectRemoveNotify = {
  objectId: bigint;
  passiveStatusEffectList: number[];
};
export function read(reader: Read, version: number) {
  const data = {} as PartyPassiveStatusEffectRemoveNotify;
  data.objectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  return data;
}
export function write(
  writer: Write,
  data: PartyPassiveStatusEffectRemoveNotify | PKTPartyPassiveStatusEffectRemoveNotify
) {
  writer.u64(data.objectId);
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj: number) => {
    writer.u32(obj);
  });
}

export const name = "PartyPassiveStatusEffectRemoveNotify";
