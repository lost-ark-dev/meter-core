import type { Read } from "../stream";

export type ReadFlagBytes3 = {
  flag1?: number;
  flag2?: number;
  flag4?: bigint;
  flag8?: number;
  flag10?: Buffer;
  flag20?: Buffer;
  flag40?: Buffer;
};

export function read(reader: Read) {
  const data: ReadFlagBytes3 = {};
  const flag = reader.u8();
  if (flag & 1) data.flag1 = reader.u8();
  if (flag & 2) data.flag2 = reader.u32();
  if (flag & 4) data.flag4 = reader.u64();
  if (flag & 8) data.flag8 = reader.u32();
  if (flag & 0x10) data.flag10 = reader.bytes(reader.u16(), 4);
  if (flag & 0x20) data.flag20 = reader.bytes(reader.u16(), 5);
  if (flag & 0x40) data.flag40 = reader.bytes(reader.u16(), 6);
  return data;
}
