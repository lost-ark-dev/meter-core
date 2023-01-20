// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  TargetId: bigint;
  Unk1: number;
  Unk2: number;
  Unk3: bigint;
  Unk4: number;
  SourceId: bigint;
  Unk6_0?: number;
  Unk7: number;
  Unk8_0?: number;
  Unk9_0?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.TargetId = reader.u64();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u8();
  data.SourceId = reader.u64();
  if (reader.bool()) data.Unk6_0 = reader.u8();
  data.Unk7 = reader.u16();
  if (reader.bool()) data.Unk8_0 = reader.u8();
  if (reader.bool()) data.Unk9_0 = reader.u8();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 21574;
