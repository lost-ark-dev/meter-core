// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_143 from "../structures/Struct_143";
export type Struct_637 = {
  struct_144: Buffer;
  unk1: number;
  unk2: number;
  struct_143: Struct_143.Struct_143;
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_637;
  data.struct_144 = reader.bytes(reader.u16(), 3, 9);
  data.unk1 = reader.u32();
  data.unk2 = reader.u8();
  data.struct_143 = Struct_143.read(reader);
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  data.unk6 = reader.u32();
  data.unk7 = reader.u8();
  return data;
}
