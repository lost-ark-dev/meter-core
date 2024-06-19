import type { Read, Write } from "../../stream";
export type CC_Data = {
  opcode: number;
  timestamp: number;
  data: Buffer;
};
export function read(reader: Read) {
  const data = {} as CC_Data;
  data.opcode = reader.u16();
  data.timestamp = reader.bytes(6).readUIntLE(0, 6);
  data.data = reader.bytes(reader.u16(), 65522); //65536 - headersize (2+2) - opcodesize (2) - timestampsize (6) - buffersizesize (2)
  return data;
}
export function write(writer: Write, data: CC_Data) {
  const b = Buffer.alloc(6);
  b.writeUintLE(data.timestamp, 0, 6);

  writer.u16(data.opcode);
  writer.bytes(b, { length: 6 }); //timestamp
  writer.bytes(data.data, { maxLen: 65522, lenType: "u16" });
}

export const name = "CC_Data";
