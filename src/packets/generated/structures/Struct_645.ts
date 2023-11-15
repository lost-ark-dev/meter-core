// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_139 from "../structures/Struct_139";
export type Struct_645 = {
  unk0: number;
  struct_139: Struct_139.Struct_139;
  unk2: number;
  unk3: number;
  unk4: number;
  unk5: number;
  struct_140: Buffer;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_645;
  data.unk0 = reader.u8();
  data.struct_139 = Struct_139.read(reader);
  data.unk2 = reader.u8();
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  data.unk5 = reader.u8();
  data.struct_140 = reader.bytes(reader.u16(), 3, 9);
  data.unk7 = reader.u8();
  return data;
}
