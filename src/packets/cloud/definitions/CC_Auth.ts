import type { Read, Write } from "../../stream";
export type CC_Auth = {
  version: number;
  token: string;
};
export function read(reader: Read) {
  const data = {} as CC_Auth;
  data.version = reader.u32();
  data.token = reader.string(7168);
  return data;
}
export function write(writer: Write, data: CC_Auth) {
  writer.u32(data.version);
  writer.string(data.token, 7168);
}

export const name = "CC_Auth";
