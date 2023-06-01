import type { Read, Write } from "../../stream";
import type { PKTZoneObjectUnpublishNotify } from "../../generated/types";
export type ZoneObjectUnpublishNotify = {
  objectId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as ZoneObjectUnpublishNotify;
  data.objectId = reader.u64();
  return data;
}
export function write(writer: Write, data: ZoneObjectUnpublishNotify | PKTZoneObjectUnpublishNotify) {
  writer.u64(data.objectId);
}

export const name = "ZoneObjectUnpublishNotify";
