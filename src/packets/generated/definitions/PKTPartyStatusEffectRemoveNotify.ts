// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectRemoveNotify = {
  statusEffectIds: number[];
  Unk1: bigint;
  Unk2: number;
  CharacterId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectRemoveNotify;
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.Unk1 = reader.u64();
  data.Unk2 = reader.u8();
  data.CharacterId = reader.u64();
  return data;
}
export const name = "PKTPartyStatusEffectRemoveNotify";
export const opcode = 35134;
