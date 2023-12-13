// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk0: number;
  unk2_0?: number;
  unk4_0?: number;
  unk5: bigint;
  unk6: number;
  unk8_0?: number;
  sourceId: bigint;
  targetId: bigint;
  unk11: number;
  unk12: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.unk0 = reader.u8();
  if (reader.bool()) data.unk2_0 = reader.u8();
  if (reader.bool()) data.unk4_0 = reader.u8();
  data.unk5 = reader.u64();
  data.unk6 = reader.u16();
  if (reader.bool()) data.unk8_0 = reader.u8();
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  data.unk11 = reader.u32();
  data.unk12 = reader.u32();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 20353;
