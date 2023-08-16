// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_140 from "../structures/Struct_140";
export type Struct_637 = {
  unk0: number;
  struct_140: Struct_140.Struct_140;
  unk2: number;
  unk3: number;
  unk4: number;
  unk5: number;
  unk6: number;
  struct_141: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_637;
  data.unk0 = reader.u8();
  data.struct_140 = Struct_140.read(reader);
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  data.unk6 = reader.u8();
  data.struct_141 = reader.bytes(reader.u16(), 3, 9);
  return data;
}
