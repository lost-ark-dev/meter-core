import type { Read, Write } from "../../stream";
import type { PKTPartyStatusEffectRemoveNotify } from "../../generated/types";
export type PartyStatusEffectRemoveNotify = {
  CharacterId: bigint;
  statusEffectIds: number[];
  Reason: number;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyStatusEffectRemoveNotify;
  data.CharacterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.Reason = reader.u8();
  return data;
}
export function write(writer: Write, data: PartyStatusEffectRemoveNotify | PKTPartyStatusEffectRemoveNotify) {
  writer.u64(data.CharacterId);
  writer.array(data.statusEffectIds, { maxLen: 80, lenType: "u16" }, (obj: number) => {
    writer.u32(obj);
  });
  writer.u8(data.Reason);
}

export const logId = 22;
export const name = "PartyStatusEffectRemoveNotify";
