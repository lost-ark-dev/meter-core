// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_642 = {
  struct_269: Buffer;
  unk1: number;
  itemTint: Buffer;
  unk3: number;
  struct_226?: Buffer;
  unk6: number;
  struct_183?: Buffer;
  unk1_1?: number;
  unk1_2?: number;
  unk8: number;
  unk10_0?: Buffer;
  unk11: number;
  struct_440: Buffer;
  struct_267: Buffer;
  unk14: number;
  unk15: number;
  struct_229: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_642;
  data.struct_269 = reader.bytes(reader.u16(), 10, 29);
  data.unk1 = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.unk3 = reader.u32();
  if (reader.bool()) data.struct_226 = reader.bytes(reader.u16(), 2, 32);
  data.unk6 = reader.u32();
  if (reader.bool() /*unk0*/) {
    data.struct_183 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_1 = reader.u32();
    data.unk1_2 = reader.u32();
  }
  data.unk8 = reader.u32();
  if (reader.bool()) data.unk10_0 = reader.bytes(9);
  data.unk11 = reader.u8();
  data.struct_440 = reader.bytes(reader.u16(), 3, 10);
  data.struct_267 = reader.bytes(reader.u16(), 3, 21);
  data.unk14 = reader.u32();
  data.unk15 = reader.u32();
  data.struct_229 = reader.bytes(reader.u16(), 3, 7);
  return data;
}
