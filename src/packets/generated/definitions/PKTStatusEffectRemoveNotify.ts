// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectRemoveNotify = {
  objectId: bigint;
  reason: number;
  statusEffectIds: number[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectRemoveNotify;
  data.objectId = reader.u64();
  data.reason = reader.u8();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  return data;
}
export const name = "PKTStatusEffectRemoveNotify";
export const opcode = 18762;
