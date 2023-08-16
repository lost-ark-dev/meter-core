// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_642 = {
  unk0: number;
  unk1: number;
  struct_431: Buffer;
  struct_268: Buffer;
  struct_227: Buffer;
  unk1_0?: number;
  unk1_1?: number;
  struct_188?: Buffer;
  struct_234: Buffer;
  unk7: number;
  unk8: number;
  unk9: number;
  unk11_0?: Buffer;
  unk12: number;
  struct_224?: Buffer;
  unk15: number;
  itemTint: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_642;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.struct_431 = reader.bytes(reader.u16(), 3, 10);
  data.struct_268 = reader.bytes(reader.u16(), 3, 21);
  data.struct_227 = reader.bytes(reader.u16(), 3, 7);
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.unk1_1 = reader.u32();
    data.struct_188 = reader.bytes(reader.u16(), 5, 30);
  }
  data.struct_234 = reader.bytes(reader.u16(), 10, 29);
  data.unk7 = reader.u8();
  data.unk8 = reader.u32();
  data.unk9 = reader.u32();
  if (reader.bool()) data.unk11_0 = reader.bytes(9);
  data.unk12 = reader.u32();
  if (reader.bool()) data.struct_224 = reader.bytes(reader.u16(), 2, 32);
  data.unk15 = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  return data;
}
