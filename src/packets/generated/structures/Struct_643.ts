// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_637 from "../structures/Struct_637";
export type Struct_643 = {
  struct_391: Buffer;
  struct_234: Buffer;
  unk2: number;
  unk3: number;
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
  struct_232: Struct_637.Struct_637[];
  unk9: number;
  unk10: bigint;
  struct_256: Buffer;
  struct_488: Buffer;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_643;
  data.struct_391 = reader.bytes(reader.u16(), 2, 10);
  data.struct_234 = reader.bytes(reader.u16(), 10, 18);
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.unk6 = reader.u32();
  data.unk7 = reader.u16();
  data.struct_232 = reader.array(reader.u16(), () => Struct_637.read(reader), 3);
  data.unk9 = reader.u32();
  data.unk10 = reader.u64();
  data.struct_256 = reader.bytes(reader.u16(), 2, 9);
  data.struct_488 = reader.bytes(reader.u16(), 10, 9);
  data.unk13 = reader.u8();
  return data;
}
