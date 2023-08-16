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
  reader.skip(2);
  data.raidInstanceId = reader.u32();
  reader.skip(9);
  data.partyInstanceId = reader.u32();
  reader.skip(17);
  data.characterId = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectResultNotify";
export const opcode = 9830;
