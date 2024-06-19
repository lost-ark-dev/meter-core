import type { Read, Write } from "../../stream";
export type InitEnv = {
  playerId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as InitEnv;
  data.playerId = reader.u64();
  return data;
}
export function write(writer: Write, data: InitEnv) {
  writer.u64(data.playerId);
}

export const name = "InitEnv";
