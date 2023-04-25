import type { Read, Write } from "../../stream";
import type { PKTInitEnv } from "../../generated/types";
export type InitEnv = {
  PlayerId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as InitEnv;
  data.PlayerId = reader.u64();
  return data;
}
export function write(writer: Write, data: InitEnv | PKTInitEnv) {
  writer.u64(data.PlayerId);
}

export const logId = 8;
export const name = "InitEnv";
