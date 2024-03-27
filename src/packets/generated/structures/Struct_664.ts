// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_790 from "../structures/Struct_790";
export type Struct_664 = {
  struct_440: Buffer;
  unk1: number;
  unk2: number;
  struct_274: Buffer;
  unk5_0?: Buffer;
  unk6: number;
  struct_790?: Struct_790.Struct_790;
  unk9: number;
  unk10: number;
  itemTint: Buffer;
  unk13_0?: Buffer;
  unk14: number;
  unk1_0?: number;
  struct_197?: Buffer;
  unk1_2?: number;
  struct_237: Buffer;
  struct_234?: Buffer;
  struct_276: Buffer;
  unk20: number;
};
export function read(reader: Read) {
  const data = {} as Struct_664;
  data.struct_440 = reader.bytes(reader.u16(), 3, 10);
  data.unk1 = reader.u8();
  data.unk2 = reader.u32();
  data.struct_274 = reader.bytes(reader.u16(), 3, 21);
  if (reader.bool()) data.unk5_0 = reader.bytes(10);
  data.unk6 = reader.u32();
  if (reader.bool()) data.struct_790 = Struct_790.read(reader);
  data.unk9 = reader.u32();
  data.unk10 = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  if (reader.bool()) data.unk13_0 = reader.bytes(9);
  data.unk14 = reader.u32();
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.struct_197 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_2 = reader.u32();
  }
  data.struct_237 = reader.bytes(reader.u16(), 3, 7);
  if (reader.bool()) data.struct_234 = reader.bytes(reader.u16(), 2, 32);
  data.struct_276 = reader.bytes(reader.u16(), 10, 29);
  data.unk20 = reader.u32();
  return data;
}
