// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectRemoveNotify = {
  unk0: bigint;
  characterId: bigint;
  reason: number;
  statusEffectIds: number[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectRemoveNotify;
  data.unk0 = reader.u64();
  data.characterId = reader.u64();
  data.reason = reader.u8();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}
export const name = "PKTPartyStatusEffectRemoveNotify";
export const opcode = 51033;
