// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_138 from "../structures/Struct_138";
export type Struct_639 = {
  unk0: number;
  unk1: number;
  unk2: number;
  struct_139: Buffer;
  struct_138: Struct_138.Struct_138;
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_639;
  data.unk0 = reader.u8();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  data.struct_139 = reader.bytes(reader.u16(), 3, 9);
  data.struct_138 = Struct_138.read(reader);
  data.unk5 = reader.u8();
  data.unk6 = reader.u8();
  data.unk7 = reader.u8();
  return data;
}
