// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTPartyStatusEffectRemoveNotify = {
  statusEffectIds: number[];
  CharacterId: bigint;
  Unk2: bigint;
  Reason: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTPartyStatusEffectRemoveNotify;
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.CharacterId = reader.u64();
  data.Unk2 = reader.u64();
  data.Reason = reader.u8();
  return data;
}
export const name = "PKTPartyStatusEffectRemoveNotify";
export const opcode = 9020;
