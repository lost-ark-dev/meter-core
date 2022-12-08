import type { Read } from "../stream";

export type ReadNBytesInt64 = bigint;

export function bytesToInt64(value: Buffer): ReadNBytesInt64 {
  if (value.length === 0) return 0n;
  if (value.length > 8) throw new Error("Value is too large");
  const buf = Buffer.alloc(8);
  value.copy(buf);
  return buf.readBigInt64LE();
}

//[4bit: data][3bit: size][1bit: sign] [n(0->7) bytes: data]
export function read(reader: Read): ReadNBytesInt64 {
  const flag = reader.u8();
  const bytes = reader.bytes((flag >> 1) & 7);
  const result = (bytesToInt64(bytes) << 4n) | BigInt(flag >> 4);
  return (flag & 1) === 0 ? result : -result;
}
