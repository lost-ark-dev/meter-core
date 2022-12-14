// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectRemoveNotify = {
  Unk0: bigint;
  Unk1: number;
  CharacterId: bigint;
  statusEffectIds: number[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectRemoveNotify;
  data.Unk0 = reader.u64();
  data.Unk1 = reader.u8();
  data.CharacterId = reader.u64();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}
export const name = "PKTPartyStatusEffectRemoveNotify";
export const opcode = 13843;
