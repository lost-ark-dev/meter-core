// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_642 = {
  struct_235: Buffer;
  unk1: number;
  struct_266: Buffer;
  unk1_0?: number;
  struct_190?: Buffer;
  unk1_2?: number;
  struct_484: Buffer;
  struct_431: Buffer;
  unk6: number;
  unk8_0?: Buffer;
  unk9: number;
  unk10: number;
  unk11: number;
  struct_226?: Buffer;
  unk14: number;
  itemTint: Buffer;
  unk16: number;
};
export function read(reader: Read) {
  const data = {} as Struct_642;
  data.struct_235 = reader.bytes(reader.u16(), 10, 29);
  data.unk1 = reader.u32();
  data.struct_266 = reader.bytes(reader.u16(), 3, 21);
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.struct_190 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_2 = reader.u32();
  }
  data.struct_484 = reader.bytes(reader.u16(), 3, 7);
  data.struct_431 = reader.bytes(reader.u16(), 3, 10);
  data.unk6 = reader.u32();
  if (reader.bool()) data.unk8_0 = reader.bytes(9);
  data.unk9 = reader.u8();
  data.unk10 = reader.u32();
  data.unk11 = reader.u32();
  if (reader.bool()) data.struct_226 = reader.bytes(reader.u16(), 2, 32);
  data.unk14 = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.unk16 = reader.u32();
  return data;
}
