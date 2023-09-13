// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk0: number;
  unk1: number;
  targetId: bigint;
  unk4_0?: number;
  unk5: number;
  unk6: number;
  unk8_0?: number;
  unk10_0?: number;
  unk11: bigint;
  sourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.targetId = reader.u64();
  if (reader.bool()) data.unk4_0 = reader.u8();
  data.unk5 = reader.u8();
  data.unk6 = reader.u16();
  if (reader.bool()) data.unk8_0 = reader.u8();
  if (reader.bool()) data.unk10_0 = reader.u8();
  data.unk11 = reader.u64();
  data.sourceId = reader.u64();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 49464;
