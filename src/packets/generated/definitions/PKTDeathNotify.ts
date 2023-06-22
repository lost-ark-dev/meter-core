// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  targetId: bigint;
  unk1: number;
  unk2: bigint;
  unk4_0?: number;
  unk5: number;
  unk7_0?: number;
  unk9_0?: number;
  sourceId: bigint;
  unk11: number;
  unk12: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.targetId = reader.u64();
  data.unk1 = reader.u16();
  data.unk2 = reader.u64();
  if (reader.bool()) data.unk4_0 = reader.u8();
  data.unk5 = reader.u8();
  if (reader.bool()) data.unk7_0 = reader.u8();
  if (reader.bool()) data.unk9_0 = reader.u8();
  data.sourceId = reader.u64();
  data.unk11 = reader.u32();
  data.unk12 = reader.u32();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 10785;
