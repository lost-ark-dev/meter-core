// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_738 from "../structures/Struct_738";
export type Struct_776 = {
  unk0: number;
  struct_738?: Struct_738.Struct_738;
  struct_521: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_776;
  data.unk0 = reader.u8();
  if (reader.bool()) data.struct_738 = Struct_738.read(reader);
  data.struct_521 = reader.bytes(reader.u16(), 7);
  return data;
}
