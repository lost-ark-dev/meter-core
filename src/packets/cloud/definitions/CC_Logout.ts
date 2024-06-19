import type { Read, Write } from "../../stream";
export type CC_Logout = {};
export function read(reader: Read) {
  const data = {} as CC_Logout;
  return data;
}
export function write(writer: Write, data: CC_Logout) {}

export const name = "CC_Logout";
