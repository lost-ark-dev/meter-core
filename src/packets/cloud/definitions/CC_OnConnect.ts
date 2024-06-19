import type { Read, Write } from "../../stream";
export type CC_OnConnect = {
  ip: string;
};
export function read(reader: Read) {
  const data = {} as CC_OnConnect;
  data.ip = reader.string(21);
  return data;
}
export function write(writer: Write, data: CC_OnConnect) {
  writer.string(data.ip, 21);
}

export const name = "CC_OnConnect";
