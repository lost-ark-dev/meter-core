// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectResultNotify = {
  RaidInstanceId: number;
  PartyInstanceId: number;
  CharacterId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectResultNotify;
  reader.skip(8);
  data.RaidInstanceId = reader.u32();
  data.PartyInstanceId = reader.u32();
  reader.skip(2);
  data.CharacterId = reader.u64();
  reader.skip(17);
  return data;
}
export const name = "PKTPartyStatusEffectResultNotify";
export const opcode = 50964;
