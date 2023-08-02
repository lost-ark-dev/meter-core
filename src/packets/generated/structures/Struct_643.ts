// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_637 from "../structures/Struct_637";
export type Struct_643 = {
  struct_238: Buffer;
  struct_141: Buffer;
  unk2: number;
  unk3: number;
  struct_236: Struct_637.Struct_637[];
  unk5: number;
  unk6: number;
  unk7: number;
  unk8: number;
  struct_259: Buffer;
  unk10: number;
  struct_391: Buffer;
  unk12: number;
  unk13: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_643;
  data.struct_238 = reader.bytes(reader.u16(), 10, 18);
  data.struct_141 = reader.bytes(reader.u16(), 10, 9);
  data.unk2 = reader.u32();
  data.unk3 = reader.u8();
  data.struct_236 = reader.array(reader.u16(), () => Struct_637.read(reader), 3);
  data.unk5 = reader.u32();
  data.unk6 = reader.u32();
  data.unk7 = reader.u32();
  data.unk8 = reader.u32();
  data.struct_259 = reader.bytes(reader.u16(), 2, 9);
  data.unk10 = reader.u16();
  data.struct_391 = reader.bytes(reader.u16(), 2, 10);
  data.unk12 = reader.u32();
  data.unk13 = reader.u64();
  return data;
}
