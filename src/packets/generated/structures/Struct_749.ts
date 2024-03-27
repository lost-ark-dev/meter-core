// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_749 = {
  unk0: number;
  unk1: number;
  struct_98: Buffer;
  unk3: number;
  unk4: number;
  unk5: number;
  unk6: Buffer;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_749;
  data.unk0 = reader.u8();
  data.unk1 = reader.u16();
  data.struct_98 = reader.bytes(reader.u32(), 51);
  data.unk3 = reader.u16();
  data.unk4 = reader.u8();
  data.unk5 = reader.u16();
  data.unk6 = reader.bytes(3);
  data.unk7 = reader.u8();
  return data;
}
