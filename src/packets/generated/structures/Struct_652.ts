// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_645 from "../structures/Struct_645";
export type Struct_652 = {
  unk0: number;
  struct_141: Buffer;
  unk2: number;
  struct_291: Buffer;
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
  unk8: bigint;
  struct_254: Buffer;
  unk10: number;
  struct_386: Buffer;
  unk12: number;
  struct_230: Struct_645.Struct_645[];
};
export function read(reader: Read) {
  const data = {} as Struct_652;
  data.unk0 = reader.u32();
  data.struct_141 = reader.bytes(reader.u16(), 10, 9);
  data.unk2 = reader.u32();
  data.struct_291 = reader.bytes(reader.u16(), 10, 18);
  data.unk4 = reader.u32();
  data.unk5 = reader.u8();
  data.unk6 = reader.u32();
  data.unk7 = reader.u32();
  data.unk8 = reader.u64();
  data.struct_254 = reader.bytes(reader.u16(), 2, 9);
  data.unk10 = reader.u32();
  data.struct_386 = reader.bytes(reader.u16(), 2, 10);
  data.unk12 = reader.u16();
  data.struct_230 = reader.array(reader.u16(), () => Struct_645.read(reader), 3);
  return data;
}
