import type { Read, Write } from "../stream";

export type ReadNBytesInt64 = bigint;

export function bytesToInt64(value: Buffer): ReadNBytesInt64 {
  if (value.length === 0) return 0n;
  if (value.length > 8) throw new Error("Value is too large");
  const buf = Buffer.alloc(8);
  value.copy(buf);
  return buf.readBigInt64LE();
}

//[4bit: data][3bit: size][1bit: sign] [n(0->7) bytes: data]
export function read(reader: Read, version: number = 0): ReadNBytesInt64 {
  const flag = reader.u8();
  const bytes = reader.bytes((flag >> 1) & 7);
  const result = (bytesToInt64(bytes) << 4n) | BigInt(flag >> 4);
  return (flag & 1) === 0 ? result : -result;
}
export function write(writer: Write, value: ReadNBytesInt64 = 0n) {
  const tempBuf = Buffer.alloc(8);
  const negative = value < 0n;
  tempBuf.writeBigInt64LE((negative ? -value : value) >> 4n);
  let size = 0;
  for (const [i, byte] of tempBuf.entries()) {
    if (byte != 0) size = i + 1;
  }
  if (size > 7) throw new Error("Value is too large");
  writer.u8((Number((negative ? -value : value) & 0xfn) << 4) | ((size & 7) << 1) | (negative ? 1 : 0));
  writer.bytes(tempBuf.subarray(0, size), { length: size }); //TODO see when Writeable.bytes is implemented => this musn't write it's size
}
