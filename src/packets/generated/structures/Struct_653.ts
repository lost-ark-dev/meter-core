// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_776 from "../structures/Struct_776";
export type Struct_653 = {
  struct_229?: Buffer;
  unk2: number;
  struct_268: Buffer;
  unk4: number;
  itemTint: Buffer;
  unk7_0?: Buffer;
  unk8: number;
  struct_192?: Buffer;
  unk1_1?: number;
  unk1_2?: number;
  unk10: number;
  struct_431: Buffer;
  struct_488: Buffer;
  struct_270: Buffer;
  unk14: number;
  unk15: number;
  struct_776?: Struct_776.Struct_776;
  unk18: number;
};
export function read(reader: Read) {
  const data = {} as Struct_653;
  if (reader.bool()) data.struct_229 = reader.bytes(reader.u16(), 2, 32);
  data.unk2 = reader.u32();
  data.struct_268 = reader.bytes(reader.u16(), 3, 21);
  data.unk4 = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  if (reader.bool()) data.unk7_0 = reader.bytes(9);
  data.unk8 = reader.u32();
  if (reader.bool() /*unk0*/) {
    data.struct_192 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_1 = reader.u32();
    data.unk1_2 = reader.u32();
  }
  data.unk10 = reader.u32();
  data.struct_431 = reader.bytes(reader.u16(), 3, 10);
  data.struct_488 = reader.bytes(reader.u16(), 3, 7);
  data.struct_270 = reader.bytes(reader.u16(), 10, 29);
  data.unk14 = reader.u32();
  data.unk15 = reader.u8();
  if (reader.bool()) data.struct_776 = Struct_776.read(reader);
  data.unk18 = reader.u32();
  return data;
}
