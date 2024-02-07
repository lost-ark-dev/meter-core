// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_786 from "../structures/Struct_786";
export type Struct_660 = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk4_0?: Buffer;
  struct_272: Buffer;
  struct_232?: Buffer;
  unk8: number;
  unk1_0?: number;
  struct_193?: Buffer;
  unk1_2?: number;
  unk10: number;
  struct_234: Buffer;
  struct_436: Buffer;
  itemTint: Buffer;
  unk14: number;
  struct_274: Buffer;
  unk16: number;
  struct_786?: Struct_786.Struct_786;
};
export function read(reader: Read) {
  const data = {} as Struct_660;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  if (reader.bool()) data.unk4_0 = reader.bytes(9);
  data.struct_272 = reader.bytes(reader.u16(), 3, 21);
  if (reader.bool()) data.struct_232 = reader.bytes(reader.u16(), 2, 32);
  data.unk8 = reader.u8();
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.struct_193 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_2 = reader.u32();
  }
  data.unk10 = reader.u32();
  data.struct_234 = reader.bytes(reader.u16(), 3, 7);
  data.struct_436 = reader.bytes(reader.u16(), 3, 10);
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.unk14 = reader.u32();
  data.struct_274 = reader.bytes(reader.u16(), 10, 29);
  data.unk16 = reader.u32();
  if (reader.bool()) data.struct_786 = Struct_786.read(reader);
  return data;
}
