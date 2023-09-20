// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  unk1_0?: number;
  targetId: bigint;
  unk3: number;
  unk4: bigint;
  unk6_0?: number;
  unk7: number;
  unk8: number;
  unk9: number;
  unk11_0?: number;
  sourceId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  if (reader.bool()) data.unk1_0 = reader.u8();
  data.targetId = reader.u64();
  data.unk3 = reader.u32();
  data.unk4 = reader.u64();
  if (reader.bool()) data.unk6_0 = reader.u8();
  data.unk7 = reader.u8();
  data.unk8 = reader.u32();
  data.unk9 = reader.u16();
  if (reader.bool()) data.unk11_0 = reader.u8();
  data.sourceId = reader.u64();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 5509;
