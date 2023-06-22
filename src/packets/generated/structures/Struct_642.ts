// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_642 = {
  struct_266: Buffer;
  unk1_0?: number;
  struct_184?: Buffer;
  unk1_2?: number;
  unk2: number;
  struct_235: Buffer;
  unk4: number;
  unk6_0?: Buffer;
  struct_481: Buffer;
  unk8: number;
  struct_227?: Buffer;
  unk11: number;
  struct_437: Buffer;
  unk13: number;
  unk14: number;
  unk15: number;
  itemTint: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_642;
  data.struct_266 = reader.bytes(reader.u16(), 3, 21);
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.struct_184 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_2 = reader.u32();
  }
  data.unk2 = reader.u32();
  data.struct_235 = reader.bytes(reader.u16(), 10, 29);
  data.unk4 = reader.u8();
  if (reader.bool()) data.unk6_0 = reader.bytes(9);
  data.struct_481 = reader.bytes(reader.u16(), 3, 7);
  data.unk8 = reader.u32();
  if (reader.bool()) data.struct_227 = reader.bytes(reader.u16(), 2, 32);
  data.unk11 = reader.u32();
  data.struct_437 = reader.bytes(reader.u16(), 3, 10);
  data.unk13 = reader.u32();
  data.unk14 = reader.u32();
  data.unk15 = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  return data;
}
