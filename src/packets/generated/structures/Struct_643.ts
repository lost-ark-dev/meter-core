// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_637 from "../structures/Struct_637";
export type Struct_643 = {
  unk0: bigint;
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: number;
  struct_294: Buffer;
  struct_255: Buffer;
  struct_388: Buffer;
  unk8: number;
  struct_232: Struct_637.Struct_637[];
  unk10: number;
  unk11: number;
  struct_486: Buffer;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_643;
  data.unk0 = reader.u64();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u8();
  data.struct_294 = reader.bytes(reader.u16(), 10, 18);
  data.struct_255 = reader.bytes(reader.u16(), 2, 9);
  data.struct_388 = reader.bytes(reader.u16(), 2, 10);
  data.unk8 = reader.u16();
  data.struct_232 = reader.array(reader.u16(), () => Struct_637.read(reader), 3);
  data.unk10 = reader.u32();
  data.unk11 = reader.u32();
  data.struct_486 = reader.bytes(reader.u16(), 10, 9);
  data.unk13 = reader.u32();
  return data;
}
