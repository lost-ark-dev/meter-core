// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk1_0?: number;
  unk3_0?: number;
  unk4: number;
  unk5: number;
  sourceId: bigint;
  targetId: bigint;
  unk8: number;
  unk9: bigint;
  unk10: number;
  unk12_0?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  if (reader.bool()) data.unk1_0 = reader.u8();
  if (reader.bool()) data.unk3_0 = reader.u8();
  data.unk4 = reader.u32();
  data.unk5 = reader.u16();
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  data.unk8 = reader.u8();
  data.unk9 = reader.u64();
  data.unk10 = reader.u32();
  if (reader.bool()) data.unk12_0 = reader.u8();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 34658;
