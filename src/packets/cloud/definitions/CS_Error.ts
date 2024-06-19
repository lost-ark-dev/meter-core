import type { Read, Write } from "../../stream";
export type CS_Error = {
  code: number;
  msg: string;
};
export function read(reader: Read) {
  const data = {} as CS_Error;
  data.code = reader.u32();
  data.msg = reader.string(7168);
  return data;
}
export function write(writer: Write, data: CS_Error) {
  writer.u32(data.code);
  writer.string(data.msg, 7168);
}

export const name = "CS_Error";
