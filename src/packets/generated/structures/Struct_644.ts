// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_644 = {
  itemTint: Buffer;
  unk1: number;
  struct_232: Buffer;
  unk3: number;
  struct_225: Buffer;
  unk6_0?: Buffer;
  struct_430: Buffer;
  unk8: number;
  unk9: number;
  unk10: number;
  struct_185?: Buffer;
  unk1_1?: number;
  unk1_2?: number;
  unk12: number;
  struct_263: Buffer;
  struct_222?: Buffer;
  unk16: number;
};
export function read(reader: Read) {
  const data = {} as Struct_644;
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.unk1 = reader.u32();
  data.struct_232 = reader.bytes(reader.u16(), 10, 29);
  data.unk3 = reader.u32();
  data.struct_225 = reader.bytes(reader.u16(), 3, 7);
  if (reader.bool()) data.unk6_0 = reader.bytes(9);
  data.struct_430 = reader.bytes(reader.u16(), 3, 10);
  data.unk8 = reader.u32();
  data.unk9 = reader.u32();
  data.unk10 = reader.u8();
  if (reader.bool() /*unk0*/) {
    data.struct_185 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_1 = reader.u32();
    data.unk1_2 = reader.u32();
  }
  data.unk12 = reader.u32();
  data.struct_263 = reader.bytes(reader.u16(), 3, 21);
  if (reader.bool()) data.struct_222 = reader.bytes(reader.u16(), 2, 32);
  data.unk16 = reader.u32();
  return data;
}
