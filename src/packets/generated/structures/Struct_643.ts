// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_637 from "../structures/Struct_637";
export type Struct_643 = {
  struct_233: Buffer;
  struct_384: Buffer;
  unk2: number;
  unk3: number;
  unk4: number;
  unk5: number;
  struct_231: Struct_637.Struct_637[];
  unk7: bigint;
  struct_255: Buffer;
  unk9: number;
  unk10: number;
  struct_145: Buffer;
  unk12: number;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_643;
  data.struct_233 = reader.bytes(reader.u16(), 10, 18);
  data.struct_384 = reader.bytes(reader.u16(), 2, 10);
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u16();
  data.unk5 = reader.u32();
  data.struct_231 = reader.array(reader.u16(), () => Struct_637.read(reader), 3);
  data.unk7 = reader.u64();
  data.struct_255 = reader.bytes(reader.u16(), 2, 9);
  data.unk9 = reader.u32();
  data.unk10 = reader.u8();
  data.struct_145 = reader.bytes(reader.u16(), 10, 9);
  data.unk12 = reader.u32();
  data.unk13 = reader.u32();
  return data;
}
