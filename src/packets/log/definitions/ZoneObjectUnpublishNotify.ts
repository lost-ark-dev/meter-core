import type { Read, Write } from "../../stream";
import type { PKTZoneObjectUnpublishNotify } from "../../generated/types";
export type ZoneObjectUnpublishNotify = {
  ObjectId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as ZoneObjectUnpublishNotify;
  data.ObjectId = reader.u64();
  return data;
}
export function write(writer: Write, data: ZoneObjectUnpublishNotify | PKTZoneObjectUnpublishNotify) {
  writer.u64(data.ObjectId);
}

export const logId = 43;
export const name = "ZoneObjectUnpublishNotify";
