// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectRemoveNotify = {
  Reason: number;
  statusEffectIds: number[];
  ObjectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectRemoveNotify;
  data.Reason = reader.u8();
  data.statusEffectIds = reader.array(reader.u16(), () => reader.u32(), 80);
  data.ObjectId = reader.u64();
  return data;
}
export const name = "PKTStatusEffectRemoveNotify";
export const opcode = 17974;
