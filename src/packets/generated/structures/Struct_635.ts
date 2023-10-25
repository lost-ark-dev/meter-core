// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_141 from "../structures/Struct_141";
export type Struct_635 = {
  unk0: number;
  unk1: number;
  unk2: number;
  struct_141: Struct_141.Struct_141;
  struct_142: Buffer;
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_635;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.unk2 = reader.u8();
  data.struct_141 = Struct_141.read(reader);
  data.struct_142 = reader.bytes(reader.u16(), 3, 9);
  data.unk5 = reader.u8();
  data.unk6 = reader.u8();
  data.unk7 = reader.u8();
  return data;
}
