// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectResultNotify = {
  CharacterId: bigint;
  PartyInstanceId: number;
  RaidInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectResultNotify;
  data.CharacterId = reader.u64();
  reader.skip(17);
  data.PartyInstanceId = reader.u32();
  reader.skip(11);
  data.RaidInstanceId = reader.u32();
  return data;
}
export const name = "PKTPartyStatusEffectResultNotify";
export const opcode = 35964;
