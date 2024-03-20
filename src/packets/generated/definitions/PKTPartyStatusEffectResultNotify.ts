// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectResultNotify = {
  raidInstanceId: number;
  characterId: bigint;
  partyInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectResultNotify;
  reader.skip(8);
  data.raidInstanceId = reader.u32();
  reader.skip(1);
  data.characterId = reader.u64();
  data.partyInstanceId = reader.u32();
  reader.skip(17);
  return data;
}
export const name = "PKTPartyStatusEffectResultNotify";
export const opcode = 13786;
