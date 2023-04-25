import type { Read, Write } from "../../stream";
import type { PKTPartyStatusEffectResultNotify } from "../../generated/types";
export type PartyStatusEffectResultNotify = {
  PartyInstanceId: number;
  RaidInstanceId: number;
  CharacterId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as PartyStatusEffectResultNotify;
  data.PartyInstanceId = reader.u32();
  data.RaidInstanceId = reader.u32();
  data.CharacterId = reader.u64();
  return data;
}
export function write(writer: Write, data: PartyStatusEffectResultNotify | PKTPartyStatusEffectResultNotify) {
  writer.u32(data.PartyInstanceId);
  writer.u32(data.RaidInstanceId);
  writer.u64(data.CharacterId);
}

export const logId = 23;
export const name = "PartyStatusEffectResultNotify";
