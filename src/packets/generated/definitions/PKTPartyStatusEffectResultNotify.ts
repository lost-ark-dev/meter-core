// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectResultNotify = {
  PartyInstanceId: number;
  RaidInstanceId: number;
  CharacterId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectResultNotify;
  reader.skip(1);
  data.PartyInstanceId = reader.u32();
  reader.skip(13);
  data.RaidInstanceId = reader.u32();
  reader.skip(12);
  data.CharacterId = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectResultNotify";
export const opcode = 35973;
