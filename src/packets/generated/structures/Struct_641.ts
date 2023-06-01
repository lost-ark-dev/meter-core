// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_641 = {
  unk1_0?: number;
  struct_186?: Buffer;
  unk1_2?: number;
  struct_267: Buffer;
  struct_440: Buffer;
  struct_228?: Buffer;
  unk5: number;
  unk6: number;
  itemTint: Buffer;
  unk8: number;
  struct_230: Buffer;
  unk10: number;
  unk11: number;
  unk12: number;
  struct_269: Buffer;
  unk14: number;
  unk16_0?: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_641;
  if (reader.bool() /*unk0*/) {
    data.unk1_0 = reader.u32();
    data.struct_186 = reader.bytes(reader.u16(), 5, 30);
    data.unk1_2 = reader.u32();
  }
  data.struct_267 = reader.bytes(reader.u16(), 3, 21);
  data.struct_440 = reader.bytes(reader.u16(), 3, 10);
  if (reader.bool()) data.struct_228 = reader.bytes(reader.u16(), 2, 32);
  data.unk5 = reader.u8();
  data.unk6 = reader.u32();
  data.itemTint = reader.bytes(reader.u16(), 3, 14);
  data.unk8 = reader.u32();
  data.struct_230 = reader.bytes(reader.u16(), 3, 7);
  data.unk10 = reader.u32();
  data.unk11 = reader.u32();
  data.unk12 = reader.u32();
  data.struct_269 = reader.bytes(reader.u16(), 10, 29);
  data.unk14 = reader.u32();
  if (reader.bool()) data.unk16_0 = reader.bytes(9);
  return data;
}
