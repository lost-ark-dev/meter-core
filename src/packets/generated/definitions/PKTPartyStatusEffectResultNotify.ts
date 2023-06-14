// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectResultNotify = {
  raidInstanceId: number;
  partyInstanceId: number;
  characterId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectResultNotify;
  data.raidInstanceId = reader.u32();
  reader.skip(9);
  data.partyInstanceId = reader.u32();
  reader.skip(14);
  data.characterId = reader.u64();
  reader.skip(4);
  return data;
}
export const name = "PKTPartyStatusEffectResultNotify";
export const opcode = 11558;
