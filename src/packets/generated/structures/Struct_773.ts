// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_736 from "../structures/Struct_736";
export type Struct_773 = {
  unk0: number;
  struct_736?: Struct_736.Struct_736;
  struct_519: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_773;
  data.unk0 = reader.u8();
  if (reader.bool()) data.struct_736 = Struct_736.read(reader);
  data.struct_519 = reader.bytes(reader.u16(), 7);
  return data;
}
