// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_658 from "../structures/Struct_658";
export type Struct_665 = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: number;
  struct_241: Buffer;
  struct_263: Buffer;
  unk7: number;
  struct_149: Buffer;
  struct_397: Buffer;
  unk10: bigint;
  unk11: number;
  struct_239: Struct_658.Struct_658[];
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_665;
  data.unk0 = reader.u16();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  data.struct_241 = reader.bytes(reader.u16(), 10, 18);
  data.struct_263 = reader.bytes(reader.u16(), 2, 9);
  data.unk7 = reader.u8();
  data.struct_149 = reader.bytes(reader.u16(), 10, 9);
  data.struct_397 = reader.bytes(reader.u16(), 2, 10);
  data.unk10 = reader.u64();
  data.unk11 = reader.u32();
  data.struct_239 = reader.array(reader.u16(), () => Struct_658.read(reader), 3);
  data.unk13 = reader.u32();
  return data;
}
