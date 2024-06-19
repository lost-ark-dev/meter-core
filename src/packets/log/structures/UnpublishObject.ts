import type { Read, Write } from "../../stream";
export type UnpublishObjectLog = {
  unpublishReason: number;
  objectId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as UnpublishObjectLog;
  data.unpublishReason = reader.u8();
  data.objectId = reader.u64();
  return data;
}
export function write(writer: Write, data: UnpublishObjectLog) {
  writer.u8(data.unpublishReason);
  writer.u64(data.objectId);
}
