// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_642 = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk3: number;
  struct_240: Buffer;
  unk5: number;
  struct_270: Buffer;
  itemTint: Buffer;
  struct_483: Buffer;
  struct_440: Buffer;
  unk11_0?: Buffer;
  unk12: number;
  unk13: number;
  struct_188?: Buffer;
  unk1_1?: number;
  unk1_2?: number;
  struct_232?: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_642;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.struct_240 = reader.bytes(reader.u16(), 10, 29);
  data.unk5 = reader.u8();
  data.struct_270 = reader.bytes(reader.u16(), 3, 21);
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.struct_483 = reader.bytes(reader.u16(), 3, 7);
  data.struct_440 = reader.bytes(reader.u16(), 3, 10);
  if (reader.bool()) data.unk11_0 = reader.bytes(9);
  data.unk12 = reader.u32();
  data.unk13 = reader.u32();
  if (reader.bool() /*unk0*/) {
    data.struct_188 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_1 = reader.u32();
    data.unk1_2 = reader.u32();
  }
  if (reader.bool()) data.struct_232 = reader.bytes(reader.u16(), 2, 32);
  return data;
}
