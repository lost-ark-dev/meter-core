// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_751 from "../structures/Struct_751";
export type Struct_792 = {
  struct_751?: Struct_751.Struct_751;
  unk2: Buffer;
  unk3: Buffer;
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_792;
  if (reader.bool()) data.struct_751 = Struct_751.read(reader);
  data.unk2 = reader.bytes(reader.u16(), 7);
  data.unk3 = reader.bytes(reader.u16(), 7);
  data.unk4 = reader.u8();
  return data;
}
