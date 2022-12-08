// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  Unk0: number;
  SourceId: bigint;
  Unk2_0?: number;
  Unk3: number;
  Unk4_0?: number;
  TargetId: bigint;
  Unk6: bigint;
  Unk7: number;
  Unk8_0?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.Unk0 = reader.u32();
  data.SourceId = reader.u64();
  if (reader.bool()) data.Unk2_0 = reader.u8();
  data.Unk3 = reader.u8();
  if (reader.bool()) data.Unk4_0 = reader.u8();
  data.TargetId = reader.u64();
  data.Unk6 = reader.u64();
  data.Unk7 = reader.u16();
  if (reader.bool()) data.Unk8_0 = reader.u8();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 21940;
