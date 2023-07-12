// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_136 from "../structures/Struct_136";
export type Struct_637 = {
  unk0: number;
  unk1: number;
  unk2: number;
  struct_137: Buffer;
  struct_136: Struct_136.Struct_136;
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_637;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.struct_137 = reader.bytes(reader.u16(), 3, 9);
  data.struct_136 = Struct_136.read(reader);
  data.unk5 = reader.u32();
  data.unk6 = reader.u32();
  data.unk7 = reader.u8();
  return data;
}
