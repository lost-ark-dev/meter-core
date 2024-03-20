// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_148 from "../structures/Struct_148";
export type Struct_659 = {
  struct_149: Buffer;
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: number;
  struct_148: Struct_148.Struct_148;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_659;
  data.struct_149 = reader.bytes(reader.u16(), 3, 9);
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u32();
  data.unk4 = reader.u8();
  data.struct_148 = Struct_148.read(reader);
  data.unk6 = reader.u32();
  data.unk7 = reader.u8();
  return data;
}
