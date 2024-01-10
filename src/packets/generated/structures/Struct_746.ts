// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_746 = {
  unk0: number;
  unk1: Buffer;
  struct_101: Buffer;
  unk3: number;
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_746;
  data.unk0 = reader.u8();
  data.unk1 = reader.bytes(3);
  data.struct_101 = reader.bytes(reader.u32(), 51);
  data.unk3 = reader.u8();
  data.unk4 = reader.u16();
  data.unk5 = reader.u16();
  data.unk6 = reader.u8();
  data.unk7 = reader.u16();
  return data;
}
