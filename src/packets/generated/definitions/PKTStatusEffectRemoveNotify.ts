// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectRemoveNotify = {
  statusEffectIds: number[];
  Reason: number;
  ObjectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectRemoveNotify;
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.Reason = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}
export const name = "PKTStatusEffectRemoveNotify";
export const opcode = 55030;
