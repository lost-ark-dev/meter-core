// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_773 from "../structures/Struct_773";
export type Struct_651 = {
  struct_227?: Buffer;
  struct_432: Buffer;
  struct_267: Buffer;
  struct_773?: Struct_773.Struct_773;
  unk6: number;
  struct_265: Buffer;
  unk8: number;
  unk1_0?: number;
  unk1_1?: number;
  struct_188?: Buffer;
  itemTint: Buffer;
  unk11: number;
  unk12: number;
  struct_485: Buffer;
  unk15_0?: Buffer;
  unk16: number;
  unk17: number;
  unk18: number;
};
export function read(reader: Read) {
  const data = {} as Struct_651;
  if (reader.bool()) data.struct_227 = reader.bytes(reader.u16(), 2, 32);
  data.struct_432 = reader.bytes(reader.u16(), 3, 10);
  data.struct_267 = reader.bytes(reader.u16(), 10, 29);
  if (reader.bool()) data.struct_773 = Struct_773.read(reader);
  data.unk6 = reader.u32();
  data.struct_265 = reader.bytes(reader.u16(), 3, 21);
  data.unk8 = reader.u32();
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.unk1_1 = reader.u32();
    data.struct_188 = reader.bytes(reader.u16(), 5, 30);
  }
  data.itemTint = reader.bytes(reader.u16(), 5, 14);
  data.unk11 = reader.u32();
  data.unk12 = reader.u32();
  data.struct_485 = reader.bytes(reader.u16(), 3, 7);
  if (reader.bool()) data.unk15_0 = reader.bytes(9);
  data.unk16 = reader.u8();
  data.unk17 = reader.u32();
  data.unk18 = reader.u32();
  return data;
}
