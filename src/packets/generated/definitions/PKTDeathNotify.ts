// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  Unk0_0?: number;
  Unk1: number;
  Unk2: number;
  Unk3: bigint;
  SourceId: bigint;
  Unk5: number;
  Unk6_0?: number;
  Unk7: number;
  Unk8_0?: number;
  TargetId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  if (reader.bool()) data.Unk0_0 = reader.u8();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.SourceId = reader.u64();
  data.Unk5 = reader.u32();
  if (reader.bool()) data.Unk6_0 = reader.u8();
  data.Unk7 = reader.u16();
  if (reader.bool()) data.Unk8_0 = reader.u8();
  data.TargetId = reader.u64();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 30293;
