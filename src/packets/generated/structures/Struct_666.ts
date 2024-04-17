// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_792 from "../structures/Struct_792";
export type Struct_666 = {
  unk0: number;
  unk1: number;
  unk3_0?: Buffer;
  unk4: number;
  struct_271: Buffer;
  unk6: number;
  unk7: number;
  unk1_0?: number;
  struct_190?: Buffer;
  unk1_2?: number;
  struct_231?: Buffer;
  struct_438: Buffer;
  struct_269: Buffer;
  itemTint: Buffer;
  unk14: number;
  unk16_0?: Buffer;
  struct_792?: Struct_792.Struct_792;
  struct_495: Buffer;
  unk20: number;
};
export function read(reader: Read) {
  const data = {} as Struct_666;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  if (reader.bool()) data.unk3_0 = reader.bytes(9);
  data.unk4 = reader.u32();
  data.struct_271 = reader.bytes(reader.u16(), 10, 29);
  data.unk6 = reader.u8();
  data.unk7 = reader.u32();
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.struct_190 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_2 = reader.u32();
  }
  if (reader.bool()) data.struct_231 = reader.bytes(reader.u16(), 2, 32);
  data.struct_438 = reader.bytes(reader.u16(), 3, 10);
  data.struct_269 = reader.bytes(reader.u16(), 3, 21);
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.unk14 = reader.u32();
  if (reader.bool()) data.unk16_0 = reader.bytes(10);
  if (reader.bool()) data.struct_792 = Struct_792.read(reader);
  data.struct_495 = reader.bytes(reader.u16(), 3, 7);
  data.unk20 = reader.u32();
  return data;
}
