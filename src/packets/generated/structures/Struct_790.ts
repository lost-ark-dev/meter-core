// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_749 from "../structures/Struct_749";
export type Struct_790 = {
  unk0: number;
  unk1: Buffer;
  unk2: Buffer;
  struct_749?: Struct_749.Struct_749;
};
export function read(reader: Read) {
  const data = {} as Struct_790;
  data.unk0 = reader.u8();
  data.unk1 = reader.bytes(reader.u16(), 7);
  data.unk2 = reader.bytes(reader.u16(), 7);
  if (reader.bool()) data.struct_749 = Struct_749.read(reader);
  return data;
}
