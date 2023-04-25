import type { Read, Write } from "../../stream";
import type { PKTDeathNotify } from "../../generated/types";
export type DeathNotify = {
  SourceId: bigint;
  TargetId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as DeathNotify;
  data.SourceId = reader.u64();
  data.TargetId = reader.u64();
  return data;
}
export function write(writer: Write, data: DeathNotify | PKTDeathNotify) {
  writer.u64(data.SourceId);
  writer.u64(data.TargetId);
}

export const logId = 6;
export const name = "DeathNotify";
