// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_145 from "../structures/Struct_145";
export type Struct_660 = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: number;
  unk5: number;
  struct_145: Struct_145.Struct_145;
  struct_146: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_660;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.struct_145 = Struct_145.read(reader);
  data.struct_146 = reader.bytes(reader.u16(), 3, 9);
  return data;
}
