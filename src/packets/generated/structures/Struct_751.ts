// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_751 = {
  struct_99: Buffer;
  unk1: number;
  unk2: Buffer;
  unk3: number;
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_751;
  data.struct_99 = reader.bytes(reader.u32(), 51);
  data.unk1 = reader.u8();
  data.unk2 = reader.bytes(3);
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.unk5 = reader.u16();
  data.unk6 = reader.u16();
  data.unk7 = reader.u16();
  return data;
}
