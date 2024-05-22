// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_768 from "../structures/Struct_768";
export type Struct_809 = {
  struct_768?: Struct_768.Struct_768;
  unk2: Buffer;
  unk3: number;
  unk4: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_809;
  if (reader.bool()) data.struct_768 = Struct_768.read(reader);
  data.unk2 = reader.bytes(reader.u16(), 7);
  data.unk3 = reader.u8();
  data.unk4 = reader.bytes(reader.u16(), 7);
  return data;
}
