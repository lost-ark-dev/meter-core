// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTZoneObjectUnpublishNotify = {
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTZoneObjectUnpublishNotify;
  data.objectId = reader.u64();
  reader.skip(2);
  return data;
}
export const name = "PKTZoneObjectUnpublishNotify";
export const opcode = 37146;
