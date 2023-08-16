// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  targetId: bigint;
  unk1: number;
  unk3_0?: number;
  unk4: bigint;
  unk5: number;
  sourceId: bigint;
  unk7: number;
  unk9_0?: number;
  unk11_0?: number;
  unk12: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.targetId = reader.u64();
  data.unk1 = reader.u32();
  if (reader.bool()) data.unk3_0 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u8();
  data.sourceId = reader.u64();
  data.unk7 = reader.u32();
  if (reader.bool()) data.unk9_0 = reader.u8();
  if (reader.bool()) data.unk11_0 = reader.u8();
  data.unk12 = reader.u16();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 9339;
