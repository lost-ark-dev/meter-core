// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_746 from "../structures/Struct_746";
export type Struct_786 = {
  unk0: Buffer;
  struct_746?: Struct_746.Struct_746;
  unk3: number;
  unk4: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_786;
  data.unk0 = reader.bytes(reader.u16(), 7);
  if (reader.bool()) data.struct_746 = Struct_746.read(reader);
  data.unk3 = reader.u8();
  data.unk4 = reader.bytes(reader.u16(), 7);
  return data;
}
