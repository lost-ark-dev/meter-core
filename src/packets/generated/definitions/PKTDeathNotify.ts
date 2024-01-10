// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  sourceId: bigint;
  unk1: number;
  unk2: number;
  unk4_0?: number;
  unk5: number;
  targetId: bigint;
  unk8_0?: number;
  unk9: number;
  unk10: bigint;
  unk12_0?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.sourceId = reader.u64();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  if (reader.bool()) data.unk4_0 = reader.u8();
  data.unk5 = reader.u8();
  data.targetId = reader.u64();
  if (reader.bool()) data.unk8_0 = reader.u8();
  data.unk9 = reader.u16();
  data.unk10 = reader.u64();
  if (reader.bool()) data.unk12_0 = reader.u8();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 36756;
