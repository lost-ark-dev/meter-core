// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk1_0?: number;
  sourceId: bigint;
  unk3: number;
  unk4: number;
  targetId: bigint;
  unk7_0?: number;
  unk8: number;
  unk10_0?: number;
  unk11: number;
  unk12: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  if (reader.bool()) data.unk1_0 = reader.u8();
  data.sourceId = reader.u64();
  data.unk3 = reader.u8();
  data.unk4 = reader.u16();
  data.targetId = reader.u64();
  if (reader.bool()) data.unk7_0 = reader.u8();
  data.unk8 = reader.u32();
  if (reader.bool()) data.unk10_0 = reader.u8();
  data.unk11 = reader.u32();
  data.unk12 = reader.u64();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 34131;
