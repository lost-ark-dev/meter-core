// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type UnpublishObject = {
  UnpublishReason: number;
  ObjectId: bigint;
};
export function read(reader: Read) {
  const data = {} as UnpublishObject;
  data.UnpublishReason = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}
