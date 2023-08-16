// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_637 from "../structures/Struct_637";
export type Struct_643 = {
  unk0: number;
  struct_386: Buffer;
  struct_142: Buffer;
  unk3: number;
  struct_230: Struct_637.Struct_637[];
  unk5: number;
  unk6: number;
  unk7: bigint;
  unk8: number;
  unk9: number;
  unk10: number;
  unk11: number;
  struct_257: Buffer;
  struct_232: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_643;
  data.unk0 = reader.u32();
  data.struct_386 = reader.bytes(reader.u16(), 2, 10);
  data.struct_142 = reader.bytes(reader.u16(), 10, 9);
  data.unk3 = reader.u32();
  data.struct_230 = reader.array(reader.u16(), () => Struct_637.read(reader), 3);
  data.unk5 = reader.u32();
  data.unk6 = reader.u16();
  data.unk7 = reader.u64();
  data.unk8 = reader.u8();
  data.unk9 = reader.u32();
  data.unk10 = reader.u32();
  data.unk11 = reader.u32();
  data.struct_257 = reader.bytes(reader.u16(), 2, 9);
  data.struct_232 = reader.bytes(reader.u16(), 10, 18);
  return data;
}
