import type { Read, Write } from "../../stream";
export type CCS_PingPong = {};
export function read(reader: Read) {
  const data = {} as CCS_PingPong;
  return data;
}
export function write(writer: Write, data: CCS_PingPong) {}

export const name = "CCS_PingPong";
