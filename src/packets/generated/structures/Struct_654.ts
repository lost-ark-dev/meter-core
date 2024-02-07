// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_144 from "../structures/Struct_144";
export type Struct_654 = {
  unk0: number;
  unk1: number;
  unk2: number;
  struct_144: Struct_144.Struct_144;
  unk4: number;
  unk5: number;
  unk6: number;
  struct_145: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_654;
  data.unk0 = reader.u32();
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.struct_144 = Struct_144.read(reader);
  data.unk4 = reader.u8();
  data.unk5 = reader.u32();
  data.unk6 = reader.u8();
  data.struct_145 = reader.bytes(reader.u16(), 3, 9);
  return data;
}
