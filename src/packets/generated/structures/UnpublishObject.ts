// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type UnpublishObject = {
  ObjectId: bigint;
  UnpublishReason: number;
};
export function read(reader: Read) {
  const data = {} as UnpublishObject;
  data.ObjectId = reader.u64();
  data.UnpublishReason = reader.u8();
  return data;
}
