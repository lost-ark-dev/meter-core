// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_147 from "../structures/Struct_147";
export type Struct_658 = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: number;
  struct_147: Struct_147.Struct_147;
  unk6: number;
  struct_148: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_658;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u8();
  data.struct_147 = Struct_147.read(reader);
  data.unk6 = reader.u8();
  data.struct_148 = reader.bytes(reader.u16(), 3, 9);
  return data;
}
