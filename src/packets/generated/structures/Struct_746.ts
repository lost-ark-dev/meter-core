// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_746 = {
  unk0: number;
  unk1: number;
  struct_97: Buffer;
  unk3: number;
  unk4: number;
  unk5: Buffer;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_746;
  data.unk0 = reader.u16();
  data.unk1 = reader.u8();
  data.struct_97 = reader.bytes(reader.u32(), 51);
  data.unk3 = reader.u16();
  data.unk4 = reader.u8();
  data.unk5 = reader.bytes(3);
  data.unk6 = reader.u8();
  data.unk7 = reader.u16();
  return data;
}
