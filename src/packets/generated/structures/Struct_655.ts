// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_147 from "../structures/Struct_147";
export type Struct_655 = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: number;
  struct_147: Struct_147.Struct_147;
  struct_148: Buffer;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_655;
  data.unk0 = reader.u8();
  data.unk1 = reader.u32();
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.struct_147 = Struct_147.read(reader);
  data.struct_148 = reader.bytes(reader.u16(), 3, 9);
  data.unk7 = reader.u32();
  return data;
}
