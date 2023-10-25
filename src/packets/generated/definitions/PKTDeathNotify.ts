// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk0: number;
  unk1: number;
  unk2: bigint;
  unk3: number;
  unk5_0?: number;
  unk6: number;
  targetId: bigint;
  unk9_0?: number;
  sourceId: bigint;
  unk12_0?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.unk2 = reader.u64();
  data.unk3 = reader.u16();
  if (reader.bool()) data.unk5_0 = reader.u8();
  data.unk6 = reader.u8();
  data.targetId = reader.u64();
  if (reader.bool()) data.unk9_0 = reader.u8();
  data.sourceId = reader.u64();
  if (reader.bool()) data.unk12_0 = reader.u8();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 31699;
