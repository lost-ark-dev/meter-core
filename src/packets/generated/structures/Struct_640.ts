// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_640 = {
  struct_482: Buffer;
  struct_268: Buffer;
  unk2: number;
  unk3: number;
  unk4: number;
  itemTint: Buffer;
  unk6: number;
  struct_189?: Buffer;
  unk1_1?: number;
  unk1_2?: number;
  unk8: number;
  unk9: number;
  struct_228?: Buffer;
  unk12: number;
  struct_266: Buffer;
  struct_431: Buffer;
  unk16_0?: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_640;
  data.struct_482 = reader.bytes(reader.u16(), 3, 7);
  data.struct_268 = reader.bytes(reader.u16(), 10, 29);
  data.unk2 = reader.u32();
  data.unk3 = reader.u8();
  data.unk4 = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.unk6 = reader.u32();
  if (reader.bool() /*unk0*/) {
    data.struct_189 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_1 = reader.u32();
    data.unk1_2 = reader.u32();
  }
  data.unk8 = reader.u32();
  data.unk9 = reader.u32();
  if (reader.bool()) data.struct_228 = reader.bytes(reader.u16(), 2, 32);
  data.unk12 = reader.u32();
  data.struct_266 = reader.bytes(reader.u16(), 3, 21);
  data.struct_431 = reader.bytes(reader.u16(), 3, 10);
  if (reader.bool()) data.unk16_0 = reader.bytes(9);
  return data;
}
