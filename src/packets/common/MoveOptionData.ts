import type { Read } from "../stream";

export type MoveOptionData = {
  Mod?: number;
  Speed?: number;
  NextPos?: bigint;
  flag8?: number;
  flag10?: Buffer;
  flag20?: Buffer;
  flag40?: Buffer;
};

export function read(reader: Read) {
  const data: MoveOptionData = {};
  const flag = reader.u8();
  if (flag & 1) data.Mod = reader.u8();
  if (flag & 2) data.Speed = reader.u32();
  if (flag & 4) data.NextPos = reader.u64();
  if (flag & 8) data.flag8 = reader.u32();
  if (flag & 0x10) data.flag10 = reader.bytes(reader.u16(), 4);
  if (flag & 0x20) data.flag20 = reader.bytes(reader.u16(), 5);
  if (flag & 0x40) data.flag40 = reader.bytes(reader.u16(), 6);
  return data;
}
