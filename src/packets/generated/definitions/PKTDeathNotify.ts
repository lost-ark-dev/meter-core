// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  Unk0: bigint;
  TargetId: bigint;
  Unk2_0?: number;
  Unk3_0?: number;
  SourceId: bigint;
  Unk5: number;
  Unk6_0?: number;
  Unk7: number;
  Unk8: number;
  Unk9: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.Unk0 = reader.u64();
  data.TargetId = reader.u64();
  if (reader.bool()) data.Unk2_0 = reader.u8();
  if (reader.bool()) data.Unk3_0 = reader.u8();
  data.SourceId = reader.u64();
  data.Unk5 = reader.u32();
  if (reader.bool()) data.Unk6_0 = reader.u8();
  data.Unk7 = reader.u8();
  data.Unk8 = reader.u16();
  data.Unk9 = reader.u32();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 1006;
