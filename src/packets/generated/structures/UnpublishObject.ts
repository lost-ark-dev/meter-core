// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type UnpublishObject = {
  unpublishReason: number;
  objectId: bigint;
};
export function read(reader: Read) {
  const data = {} as UnpublishObject;
  data.unpublishReason = reader.u8();
  data.objectId = reader.u64();
  return data;
}
