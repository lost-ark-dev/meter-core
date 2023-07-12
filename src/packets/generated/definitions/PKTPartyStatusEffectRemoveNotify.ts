// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectRemoveNotify = {
  characterId: bigint;
  reason: number;
  unk2: bigint;
  statusEffectIds: number[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectRemoveNotify;
  data.characterId = reader.u64();
  data.reason = reader.u8();
  data.unk2 = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}
export const name = "PKTPartyStatusEffectRemoveNotify";
export const opcode = 47356;
