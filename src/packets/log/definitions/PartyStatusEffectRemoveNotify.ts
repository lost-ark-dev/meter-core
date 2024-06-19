import type { Read, Write } from "../../stream";
export type PartyStatusEffectRemoveNotify = {
  characterId: bigint;
  statusEffectIds: number[];
  reason: number;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyStatusEffectRemoveNotify;
  data.characterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32());
  data.reason = reader.u8();
  return data;
}
export function write(writer: Write, data: PartyStatusEffectRemoveNotify) {
  writer.u64(data.characterId);
  writer.array(data.statusEffectIds, { lenType: "u16" }, (obj: number) => {
    writer.u32(obj);
  });
  writer.u8(data.reason);
}

export const name = "PartyStatusEffectRemoveNotify";
