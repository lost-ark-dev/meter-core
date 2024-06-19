import type { Read, Write } from "../../stream";
export type ZoneObjectUnpublishNotify = {
  objectId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as ZoneObjectUnpublishNotify;
  data.objectId = reader.u64();
  return data;
}
export function write(writer: Write, data: ZoneObjectUnpublishNotify) {
  writer.u64(data.objectId);
}

export const name = "ZoneObjectUnpublishNotify";
