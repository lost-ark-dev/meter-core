// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_626 = {
  unk0: number;
  unk1: number;
  struct_151: Buffer;
  unk3: number;
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_626;
  data.unk0 = reader.u8();
  data.unk1 = reader.u32();
  data.struct_151 = reader.bytes(reader.u16(), 2, 5);
  data.unk3 = reader.u32();
  data.unk4 = reader.u8();
  return data;
}
