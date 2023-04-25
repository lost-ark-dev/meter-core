import type { Read, Write } from "../../stream";
import type { PKTPartyPassiveStatusEffectAddNotify } from "../../generated/types";
export type PartyPassiveStatusEffectAddNotify = {
  ObjectId: bigint;
  passiveStatusEffectList: number[];
  Unk0_m: number;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyPassiveStatusEffectAddNotify;
  data.ObjectId = reader.u64();
  data.passiveStatusEffectList = reader.array(reader.u16(), () => reader.u32(), 10);
  data.Unk0_m = reader.u8();
  return data;
}
export function write(writer: Write, data: PartyPassiveStatusEffectAddNotify | PKTPartyPassiveStatusEffectAddNotify) {
  writer.u64(data.ObjectId);
  writer.array(data.passiveStatusEffectList, { maxLen: 10, lenType: "u16" }, (obj: number) => {
    writer.u32(obj);
  });
  writer.u8(data.Unk0_m);
}

export const logId = 19;
export const name = "PartyPassiveStatusEffectAddNotify";
