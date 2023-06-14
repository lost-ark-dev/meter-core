// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk1_0?: number;
  unk2: bigint;
  unk3: number;
  unk5_0?: number;
  targetId: bigint;
  unk7: number;
  unk9_0?: number;
  unk10: number;
  sourceId: bigint;
  unk12: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  if (reader.bool()) data.unk1_0 = reader.u8();
  data.unk2 = reader.u64();
  data.unk3 = reader.u16();
  if (reader.bool()) data.unk5_0 = reader.u8();
  data.targetId = reader.u64();
  data.unk7 = reader.u32();
  if (reader.bool()) data.unk9_0 = reader.u8();
  data.unk10 = reader.u8();
  data.sourceId = reader.u64();
  data.unk12 = reader.u32();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 32951;
