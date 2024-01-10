// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_786 from "../structures/Struct_786";
export type Struct_661 = {
  unk0: number;
  unk1: number;
  unk2: number;
  struct_192?: Buffer;
  unk1_1?: number;
  unk1_2?: number;
  struct_238: Buffer;
  struct_434: Buffer;
  unk7_0?: Buffer;
  struct_229?: Buffer;
  itemTint: Buffer;
  unk11: number;
  struct_269: Buffer;
  struct_786?: Struct_786.Struct_786;
  unk15: number;
  struct_232: Buffer;
  unk17: number;
  unk18: number;
};
export function read(reader: Read) {
  const data = {} as Struct_661;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  if (reader.bool() /*unk0*/) {
    data.struct_192 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_1 = reader.u32();
    data.unk1_2 = reader.u32();
  }
  data.struct_238 = reader.bytes(reader.u16(), 10, 29);
  data.struct_434 = reader.bytes(reader.u16(), 3, 10);
  if (reader.bool()) data.unk7_0 = reader.bytes(9);
  if (reader.bool()) data.struct_229 = reader.bytes(reader.u16(), 2, 32);
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.unk11 = reader.u32();
  data.struct_269 = reader.bytes(reader.u16(), 3, 21);
  if (reader.bool()) data.struct_786 = Struct_786.read(reader);
  data.unk15 = reader.u32();
  data.struct_232 = reader.bytes(reader.u16(), 3, 7);
  data.unk17 = reader.u32();
  data.unk18 = reader.u8();
  return data;
}
