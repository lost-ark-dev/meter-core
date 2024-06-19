import type { Read, Write } from "../../stream";
export type CS_Auth = {
  opcodes: number[];
  xorkey: Buffer;
  migration: number;
};
export function read(reader: Read) {
  const data = {} as CS_Auth;
  data.opcodes = reader.array(reader.u16(), () => reader.u16(), 3000);
  data.xorkey = reader.bytes(256);
  data.migration = reader.u16();
  return data;
}
export function write(writer: Write, data: CS_Auth) {
  writer.array(data.opcodes, { maxLen: 3000, lenType: "u16" }, (obj2: number) => {
    writer.u16(obj2);
  });
  writer.bytes(data.xorkey, { length: 256 });
  writer.u16(data.migration);
}

export const name = "CS_Auth";
