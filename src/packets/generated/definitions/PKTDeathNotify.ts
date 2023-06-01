// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk0: number;
  unk2_0?: number;
  unk3: number;
  unk5_0?: number;
  unk6: number;
  unk8_0?: number;
  sourceId: bigint;
  unk10: number;
  targetId: bigint;
  unk12: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.unk0 = reader.u8();
  if (reader.bool()) data.unk2_0 = reader.u8();
  data.unk3 = reader.u32();
  if (reader.bool()) data.unk5_0 = reader.u8();
  data.unk6 = reader.u16();
  if (reader.bool()) data.unk8_0 = reader.u8();
  data.sourceId = reader.u64();
  data.unk10 = reader.u32();
  data.targetId = reader.u64();
  data.unk12 = reader.u64();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 55094;
