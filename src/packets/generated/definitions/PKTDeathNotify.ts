// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  SourceId: bigint;
  Unk1_0?: number;
  Unk2_0?: number;
  Unk3: number;
  Unk4: number;
  Unk5: number;
  Unk6_0?: number;
  TargetId: bigint;
  Unk8: number;
  Unk9: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.SourceId = reader.u64();
  if (reader.bool()) data.Unk1_0 = reader.u8();
  if (reader.bool()) data.Unk2_0 = reader.u8();
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u8();
  if (reader.bool()) data.Unk6_0 = reader.u8();
  data.TargetId = reader.u64();
  data.Unk8 = reader.u16();
  data.Unk9 = reader.u64();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 27220;
