import type { Read } from "../stream";

export type ReadFlagBytes = {
  flag1?: number;
  flag2?: number;
  flag4?: number;
  flag8?: number;
  flag10?: number;
  flag20?: Buffer;
  flag40?: Buffer;
};

export function read(reader: Read) {
  const data: ReadFlagBytes = {};
  const flag = reader.u8();
  if (flag & 1) data.flag1 = reader.u8();
  if (flag & 2) data.flag2 = reader.u8();
  if (flag & 4) data.flag4 = reader.u32();
  if (flag & 8) data.flag8 = reader.u32();
  if (flag & 0x10) data.flag10 = reader.u32();
  if (flag & 0x20) data.flag20 = reader.bytes(3);
  if (flag & 0x40) data.flag40 = reader.bytes(6);
  return data;
}
