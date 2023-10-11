// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_641 = {
  unk0: number;
  struct_262: Buffer;
  struct_224?: Buffer;
  unk5_0?: Buffer;
  struct_431: Buffer;
  unk7: number;
  itemTint: Buffer;
  unk9: number;
  unk10: number;
  unk11: number;
  unk12: number;
  unk1_0?: number;
  struct_188?: Buffer;
  unk1_2?: number;
  unk14: number;
  struct_483: Buffer;
  struct_264: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_641;
  data.unk0 = reader.u32();
  data.struct_262 = reader.bytes(reader.u16(), 3, 21);
  if (reader.bool()) data.struct_224 = reader.bytes(reader.u16(), 2, 32);
  if (reader.bool()) data.unk5_0 = reader.bytes(9);
  data.struct_431 = reader.bytes(reader.u16(), 3, 10);
  data.unk7 = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.unk9 = reader.u8();
  data.unk10 = reader.u32();
  data.unk11 = reader.u32();
  data.unk12 = reader.u32();
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.struct_188 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_2 = reader.u32();
  }
  data.unk14 = reader.u32();
  data.struct_483 = reader.bytes(reader.u16(), 3, 7);
  data.struct_264 = reader.bytes(reader.u16(), 10, 29);
  return data;
}
