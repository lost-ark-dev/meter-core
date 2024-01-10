// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectRemoveNotify = {
  unk0: bigint;
  statusEffectIds: number[];
  reason: number;
  characterId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectRemoveNotify;
  data.unk0 = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.reason = reader.u8();
  data.characterId = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectRemoveNotify";
export const opcode = 21631;
