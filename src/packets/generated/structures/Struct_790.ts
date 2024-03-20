// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_750 from "../structures/Struct_750";
export type Struct_790 = {
  unk0: number;
  unk1: Buffer;
  struct_750?: Struct_750.Struct_750;
  unk4: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_790;
  data.unk0 = reader.u8();
  data.unk1 = reader.bytes(reader.u16(), 7);
  if (reader.bool()) data.struct_750 = Struct_750.read(reader);
  data.unk4 = reader.bytes(reader.u16(), 7);
  return data;
}
