// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk0: bigint;
  targetId: bigint;
  unk2: number;
  unk3: number;
  sourceId: bigint;
  unk6_0?: number;
  unk8_0?: number;
  unk10_0?: number;
  unk11: number;
  unk12: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.unk0 = reader.u64();
  data.targetId = reader.u64();
  data.unk2 = reader.u32();
  data.unk3 = reader.u8();
  data.sourceId = reader.u64();
  if (reader.bool()) data.unk6_0 = reader.u8();
  if (reader.bool()) data.unk8_0 = reader.u8();
  if (reader.bool()) data.unk10_0 = reader.u8();
  data.unk11 = reader.u16();
  data.unk12 = reader.u32();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 11116;
