// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk0: number;
  unk2_0?: number;
  sourceId: bigint;
  unk4: number;
  targetId: bigint;
  unk7_0?: number;
  unk8: bigint;
  unk9: number;
  unk11_0?: number;
  unk12: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.unk0 = reader.u32();
  if (reader.bool()) data.unk2_0 = reader.u8();
  data.sourceId = reader.u64();
  data.unk4 = reader.u8();
  data.targetId = reader.u64();
  if (reader.bool()) data.unk7_0 = reader.u8();
  data.unk8 = reader.u64();
  data.unk9 = reader.u32();
  if (reader.bool()) data.unk11_0 = reader.u8();
  data.unk12 = reader.u16();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 6481;
