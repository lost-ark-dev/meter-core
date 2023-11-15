// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_736 = {
  unk0: number;
  unk1: number;
  unk2: Buffer;
  struct_96: Buffer;
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_736;
  data.unk0 = reader.u16();
  data.unk1 = reader.u8();
  data.unk2 = reader.bytes(3);
  data.struct_96 = reader.bytes(reader.u32(), 51);
  data.unk4 = reader.u8();
  data.unk5 = reader.u16();
  data.unk6 = reader.u8();
  data.unk7 = reader.u16();
  return data;
}
