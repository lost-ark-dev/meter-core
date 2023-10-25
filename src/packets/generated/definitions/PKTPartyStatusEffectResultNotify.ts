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
  reader.skip(8);
  data.partyInstanceId = reader.u32();
  reader.skip(20);
  data.raidInstanceId = reader.u32();
  data.characterId = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectResultNotify";
export const opcode = 10284;
