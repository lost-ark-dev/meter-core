// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_738 = {
  unk0: number;
  unk1: Buffer;
  unk2: number;
  struct_98: Buffer;
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_738;
  data.unk0 = reader.u8();
  data.unk1 = reader.bytes(3);
  data.unk2 = reader.u8();
  data.struct_98 = reader.bytes(reader.u32(), 51);
  data.unk4 = reader.u16();
  data.unk5 = reader.u8();
  data.unk6 = reader.u16();
  data.unk7 = reader.u16();
  return data;
}
