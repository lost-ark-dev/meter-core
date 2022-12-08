// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  Unk0: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.Unk0 = reader.bytes(30);
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 1696;
