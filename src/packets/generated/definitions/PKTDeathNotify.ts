// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk0: bigint;
  unk2_0?: number;
  targetId: bigint;
  unk4: number;
  unk5: number;
  unk6: number;
  sourceId: bigint;
  unk9_0?: number;
  unk10: number;
  unk12_0?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.unk0 = reader.u64();
  if (reader.bool()) data.unk2_0 = reader.u8();
  data.targetId = reader.u64();
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.unk6 = reader.u8();
  data.sourceId = reader.u64();
  if (reader.bool()) data.unk9_0 = reader.u8();
  data.unk10 = reader.u16();
  if (reader.bool()) data.unk12_0 = reader.u8();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 20789;
