// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneObjectUnpublishNotify = {
  ObjectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneObjectUnpublishNotify;
  data.ObjectId = reader.u64();
  reader.skip(2);
  return data;
}
export const name = "PKTZoneObjectUnpublishNotify";
export const opcode = 53893;
