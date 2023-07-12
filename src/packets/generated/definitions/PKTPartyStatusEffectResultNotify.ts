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
  data.partyInstanceId = reader.u32();
  data.characterId = reader.u64();
  reader.skip(28);
  return data;
}
export const name = "PKTPartyStatusEffectResultNotify";
export const opcode = 50926;
