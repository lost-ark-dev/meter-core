// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk1_0?: number;
  unk2: number;
  unk3: number;
  unk4: bigint;
  unk5: number;
  unk7_0?: number;
  unk9_0?: number;
  unk10: number;
  targetId: bigint;
  sourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  if (reader.bool()) data.unk1_0 = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u32();
  data.unk4 = reader.u64();
  data.unk5 = reader.u16();
  if (reader.bool()) data.unk7_0 = reader.u8();
  if (reader.bool()) data.unk9_0 = reader.u8();
  data.unk10 = reader.u32();
  data.targetId = reader.u64();
  data.sourceId = reader.u64();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 27030;
