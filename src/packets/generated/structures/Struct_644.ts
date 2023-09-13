// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_638 from "../structures/Struct_638";
export type Struct_644 = {
  unk0: number;
  unk1: number;
  struct_251: Buffer;
  unk3: number;
  struct_227: Struct_638.Struct_638[];
  unk5: number;
  struct_383: Buffer;
  unk7: number;
  unk8: bigint;
  unk9: number;
  struct_229: Buffer;
  unk11: number;
  struct_140: Buffer;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_644;
  data.unk0 = reader.u16();
  data.unk1 = reader.u32();
  data.struct_251 = reader.bytes(reader.u16(), 2, 9);
  data.unk3 = reader.u32();
  data.struct_227 = reader.array(reader.u16(), () => Struct_638.read(reader), 3);
  data.unk5 = reader.u32();
  data.struct_383 = reader.bytes(reader.u16(), 2, 10);
  data.unk7 = reader.u32();
  data.unk8 = reader.u64();
  data.unk9 = reader.u32();
  data.struct_229 = reader.bytes(reader.u16(), 10, 18);
  data.unk11 = reader.u32();
  data.struct_140 = reader.bytes(reader.u16(), 10, 9);
  data.unk13 = reader.u8();
  return data;
}
