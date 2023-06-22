// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectResultNotify = {
  partyInstanceId: number;
  raidInstanceId: number;
  characterId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectResultNotify;
  reader.skip(2);
  data.partyInstanceId = reader.u32();
  reader.skip(2);
  data.raidInstanceId = reader.u32();
  data.characterId = reader.u64();
  reader.skip(24);
  return data;
}
export const name = "PKTPartyStatusEffectResultNotify";
export const opcode = 30850;
