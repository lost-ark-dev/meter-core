// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTDeathNotify = {
  Unk0: bigint;
  Unk1_0?: number;
  TargetId: bigint;
  Unk3_0?: number;
  Unk4: number;
  Unk5: number;
  Unk6: number;
  SourceId: bigint;
  Unk8_0?: number;
  Unk9: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTDeathNotify;
  data.Unk0 = reader.u64();
  if (reader.bool()) data.Unk1_0 = reader.u8();
  data.TargetId = reader.u64();
  if (reader.bool()) data.Unk3_0 = reader.u8();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u16();
  data.Unk6 = reader.u32();
  data.SourceId = reader.u64();
  if (reader.bool()) data.Unk8_0 = reader.u8();
  data.Unk9 = reader.u32();
  return data;
}
export const name = "PKTDeathNotify";
export const opcode = 14668;
