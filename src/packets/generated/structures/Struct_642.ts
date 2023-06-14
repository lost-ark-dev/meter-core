// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_642 = {
  unk0: number;
  struct_436: Buffer;
  unk2: number;
  struct_237: Buffer;
  unk1_0?: number;
  unk1_1?: number;
  struct_185?: Buffer;
  unk5: number;
  struct_269: Buffer;
  unk7: number;
  struct_231: Buffer;
  struct_228?: Buffer;
  itemTint: Buffer;
  unk13_0?: Buffer;
  unk14: number;
  unk15: number;
  unk16: number;
};
export function read(reader: Read) {
  const data = {} as Struct_642;
  data.unk0 = reader.u32();
  data.struct_436 = reader.bytes(reader.u16(), 3, 10);
  data.unk2 = reader.u32();
  data.struct_237 = reader.bytes(reader.u16(), 10, 29);
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.unk1_1 = reader.u32();
    data.struct_185 = reader.bytes(reader.u16(), 5, 30);
  }
  data.unk5 = reader.u32();
  data.struct_269 = reader.bytes(reader.u16(), 3, 21);
  data.unk7 = reader.u32();
  data.struct_231 = reader.bytes(reader.u16(), 3, 7);
  if (reader.bool()) data.struct_228 = reader.bytes(reader.u16(), 2, 32);
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  if (reader.bool()) data.unk13_0 = reader.bytes(9);
  data.unk14 = reader.u32();
  data.unk15 = reader.u32();
  data.unk16 = reader.u8();
  return data;
}
