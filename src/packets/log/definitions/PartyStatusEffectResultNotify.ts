import type { Read, Write } from "../../stream";
import type { PKTPartyStatusEffectResultNotify } from "../../generated/types";
export type PartyStatusEffectResultNotify = {
  partyInstanceId: number;
  raidInstanceId: number;
  characterId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyStatusEffectResultNotify;
  data.partyInstanceId = reader.u32();
  data.raidInstanceId = reader.u32();
  data.characterId = reader.u64();
  return data;
}
export function write(writer: Write, data: PartyStatusEffectResultNotify | PKTPartyStatusEffectResultNotify) {
  writer.u32(data.partyInstanceId);
  writer.u32(data.raidInstanceId);
  writer.u64(data.characterId);
}

export const name = "PartyStatusEffectResultNotify";
