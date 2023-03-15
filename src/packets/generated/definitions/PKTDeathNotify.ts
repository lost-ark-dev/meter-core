// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  Unk0_0?: number;
  Unk1: number;
  Unk2: number;
  Unk3: bigint;
  Unk4: number;
  Unk5_0?: number;
  Unk6: number;
  SourceId: bigint;
  TargetId: bigint;
  Unk9_0?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  if (reader.bool()) data.Unk0_0 = reader.u8();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u16();
  if (reader.bool()) data.Unk5_0 = reader.u8();
  data.Unk6 = reader.u8();
  data.SourceId = reader.u64();
  data.TargetId = reader.u64();
  if (reader.bool()) data.Unk9_0 = reader.u8();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 29634;
