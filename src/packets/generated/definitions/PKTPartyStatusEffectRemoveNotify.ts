// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectRemoveNotify = {
  reason: number;
  characterId: bigint;
  statusEffectIds: number[];
  unk3: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectRemoveNotify;
  data.reason = reader.u8();
  data.characterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.unk3 = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectRemoveNotify";
export const opcode = 33972;
