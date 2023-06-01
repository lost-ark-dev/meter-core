// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_139 from "../structures/Struct_139";
export type Struct_636 = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk3: number;
  struct_140: Buffer;
  struct_139: Struct_139.Struct_139;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_636;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u32();
  data.struct_140 = reader.bytes(reader.u16(), 3, 9);
  data.struct_139 = Struct_139.read(reader);
  data.unk6 = reader.u32();
  data.unk7 = reader.u8();
  return data;
}
