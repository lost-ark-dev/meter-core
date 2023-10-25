// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_635 from "../structures/Struct_635";
export type Struct_641 = {
  struct_386: Buffer;
  unk1: bigint;
  unk2: number;
  unk3: number;
  unk4: number;
  struct_255: Buffer;
  unk6: number;
  struct_232: Struct_635.Struct_635[];
  unk8: number;
  unk9: number;
  struct_296: Buffer;
  struct_143: Buffer;
  unk12: number;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_641;
  data.struct_386 = reader.bytes(reader.u16(), 2, 10);
  data.unk1 = reader.u64();
  data.unk2 = reader.u16();
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  data.struct_255 = reader.bytes(reader.u16(), 2, 9);
  data.unk6 = reader.u32();
  data.struct_232 = reader.array(reader.u16(), () => Struct_635.read(reader), 3);
  data.unk8 = reader.u32();
  data.unk9 = reader.u32();
  data.struct_296 = reader.bytes(reader.u16(), 10, 18);
  data.struct_143 = reader.bytes(reader.u16(), 10, 9);
  data.unk12 = reader.u32();
  data.unk13 = reader.u8();
  return data;
}
