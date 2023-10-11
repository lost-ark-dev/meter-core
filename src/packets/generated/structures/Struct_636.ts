// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_140 from "../structures/Struct_140";
export type Struct_636 = {
  unk0: number;
  struct_141: Buffer;
  unk2: number;
  unk3: number;
  struct_140: Struct_140.Struct_140;
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_636;
  data.unk0 = reader.u8();
  data.struct_141 = reader.bytes(reader.u16(), 3, 9);
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.struct_140 = Struct_140.read(reader);
  data.unk5 = reader.u8();
  data.unk6 = reader.u32();
  data.unk7 = reader.u32();
  return data;
}
