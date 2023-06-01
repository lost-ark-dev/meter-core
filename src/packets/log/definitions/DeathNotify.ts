import type { Read, Write } from "../../stream";
import type { PKTDeathNotify } from "../../generated/types";
export type DeathNotify = {
  sourceId: bigint;
  targetId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as DeathNotify;
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  return data;
}
export function write(writer: Write, data: DeathNotify | PKTDeathNotify) {
  writer.u64(data.sourceId);
  writer.u64(data.targetId);
}

export const name = "DeathNotify";
