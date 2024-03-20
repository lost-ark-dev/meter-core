// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_790 from "../structures/Struct_790";
export type Struct_665 = {
  unk0: number;
  struct_272: Buffer;
  unk2: number;
  unk3: number;
  struct_437: Buffer;
  unk5: number;
  struct_234: Buffer;
  struct_790?: Struct_790.Struct_790;
  struct_240: Buffer;
  struct_231?: Buffer;
  unk12: number;
  itemTint: Buffer;
  unk1_0?: number;
  unk1_1?: number;
  struct_194?: Buffer;
  unk15: number;
  unk17_0?: Buffer;
  unk18: number;
  unk20_0?: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_665;
  data.unk0 = reader.u32();
  data.struct_272 = reader.bytes(reader.u16(), 3, 21);
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.struct_437 = reader.bytes(reader.u16(), 3, 10);
  data.unk5 = reader.u8();
  data.struct_234 = reader.bytes(reader.u16(), 3, 7);
  if (reader.bool()) data.struct_790 = Struct_790.read(reader);
  data.struct_240 = reader.bytes(reader.u16(), 10, 29);
  if (reader.bool()) data.struct_231 = reader.bytes(reader.u16(), 2, 32);
  data.unk12 = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.unk1_1 = reader.u32();
    data.struct_194 = reader.bytes(reader.u16(), 5, 30);
  }
  data.unk15 = reader.u32();
  if (reader.bool()) data.unk17_0 = reader.bytes(9);
  data.unk18 = reader.u32();
  if (reader.bool()) data.unk20_0 = reader.bytes(10);
  return data;
}
