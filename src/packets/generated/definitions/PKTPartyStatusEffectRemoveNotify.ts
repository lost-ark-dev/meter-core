// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectRemoveNotify = {
  statusEffectIds: number[];
  Unk1: bigint;
  CharacterId: bigint;
  Unk3: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectRemoveNotify;
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.Unk1 = reader.u64();
  data.CharacterId = reader.u64();
  data.Unk3 = reader.u8();
  return data;
}
export const name = "PKTPartyStatusEffectRemoveNotify";
export const opcode = 22567;
