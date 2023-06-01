// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectRemoveNotify = {
  statusEffectIds: number[];
  characterId: bigint;
  unk2: bigint;
  reason: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectRemoveNotify;
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.characterId = reader.u64();
  data.unk2 = reader.u64();
  data.reason = reader.u8();
  return data;
}
export const name = "PKTPartyStatusEffectRemoveNotify";
export const opcode = 9020;
