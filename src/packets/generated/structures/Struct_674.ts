// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_147 from "../structures/Struct_147";
export type Struct_674 = {
  unk0: number;
  struct_148: Buffer;
  struct_147: Struct_147.Struct_147;
  unk3: number;
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_674;
  data.unk0 = reader.u8();
  data.struct_148 = reader.bytes(reader.u16(), 3, 9);
  data.struct_147 = Struct_147.read(reader);
  data.unk3 = reader.u8();
  data.unk4 = reader.u32();
  data.unk5 = reader.u8();
  data.unk6 = reader.u8();
  data.unk7 = reader.u32();
  return data;
}
