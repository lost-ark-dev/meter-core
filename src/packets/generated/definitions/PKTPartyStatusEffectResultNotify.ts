// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectResultNotify = {
  characterId: bigint;
  raidInstanceId: number;
  partyInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectResultNotify;
  reader.skip(21);
  data.characterId = reader.u64();
  reader.skip(1);
  data.raidInstanceId = reader.u32();
  reader.skip(5);
  data.partyInstanceId = reader.u32();
  return data;
}
export const name = "PKTPartyStatusEffectResultNotify";
export const opcode = 11582;
