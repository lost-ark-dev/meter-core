// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_643 = {
  struct_225: Buffer;
  unk1: number;
  itemTint: Buffer;
  struct_262: Buffer;
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
  struct_264: Buffer;
  unk9: number;
  unk10: number;
  unk12_0?: Buffer;
  unk1_0?: number;
  unk1_1?: number;
  struct_184?: Buffer;
  struct_222?: Buffer;
  struct_432: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_643;
  data.struct_225 = reader.bytes(reader.u16(), 3, 7);
  data.unk1 = reader.u8();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.struct_262 = reader.bytes(reader.u16(), 3, 21);
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.unk6 = reader.u32();
  data.unk7 = reader.u32();
  data.struct_264 = reader.bytes(reader.u16(), 10, 29);
  data.unk9 = reader.u32();
  data.unk10 = reader.u32();
  if (reader.bool()) data.unk12_0 = reader.bytes(9);
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.unk1_1 = reader.u32();
    data.struct_184 = reader.bytes(reader.u16(), 5, 30);
  }
  if (reader.bool()) data.struct_222 = reader.bytes(reader.u16(), 2, 32);
  data.struct_432 = reader.bytes(reader.u16(), 3, 10);
  return data;
}
