// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_639 from "../structures/Struct_639";
export type Struct_645 = {
  unk0: number;
  unk1: number;
  struct_252: Buffer;
  unk3: number;
  unk4: number;
  struct_228: Struct_639.Struct_639[];
  unk6: bigint;
  unk7: number;
  unk8: number;
  struct_140: Buffer;
  unk10: number;
  struct_382: Buffer;
  struct_230: Buffer;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_645;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.struct_252 = reader.bytes(reader.u16(), 2, 9);
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  data.struct_228 = reader.array(reader.u16(), () => Struct_639.read(reader), 3);
  data.unk6 = reader.u64();
  data.unk7 = reader.u32();
  data.unk8 = reader.u8();
  data.struct_140 = reader.bytes(reader.u16(), 10, 9);
  data.unk10 = reader.u16();
  data.struct_382 = reader.bytes(reader.u16(), 2, 10);
  data.struct_230 = reader.bytes(reader.u16(), 10, 18);
  data.unk13 = reader.u32();
  return data;
}
