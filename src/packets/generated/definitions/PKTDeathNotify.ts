// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  Unk0: number;
  Unk1_0?: number;
  Unk2: number;
  Unk3_0?: number;
  Unk4: number;
  Unk5_0?: number;
  SourceId: bigint;
  Unk7: number;
  TargetId: bigint;
  Unk9: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.Unk0 = reader.u8();
  if (reader.bool()) data.Unk1_0 = reader.u8();
  data.Unk2 = reader.u32();
  if (reader.bool()) data.Unk3_0 = reader.u8();
  data.Unk4 = reader.u16();
  if (reader.bool()) data.Unk5_0 = reader.u8();
  data.SourceId = reader.u64();
  data.Unk7 = reader.u32();
  data.TargetId = reader.u64();
  data.Unk9 = reader.u64();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 55094;
