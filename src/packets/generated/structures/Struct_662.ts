// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_655 from "../structures/Struct_655";
export type Struct_662 = {
  struct_149: Buffer;
  unk1: number;
  unk2: number;
  struct_236: Buffer;
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
  struct_388: Buffer;
  unk9: number;
  unk10: bigint;
  struct_234: Struct_655.Struct_655[];
  unk12: number;
  struct_258: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_662;
  data.struct_149 = reader.bytes(reader.u16(), 10, 9);
  data.unk1 = reader.u8();
  data.unk2 = reader.u32();
  data.struct_236 = reader.bytes(reader.u16(), 10, 18);
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.unk6 = reader.u32();
  data.unk7 = reader.u32();
  data.struct_388 = reader.bytes(reader.u16(), 2, 10);
  data.unk9 = reader.u32();
  data.unk10 = reader.u64();
  data.struct_234 = reader.array(reader.u16(), () => Struct_655.read(reader), 3);
  data.unk12 = reader.u16();
  data.struct_258 = reader.bytes(reader.u16(), 2, 9);
  return data;
}
