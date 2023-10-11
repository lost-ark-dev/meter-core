// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_636 from "../structures/Struct_636";
export type Struct_642 = {
  unk0: number;
  unk1: number;
  unk2: bigint;
  unk3: number;
  unk4: number;
  unk5: number;
  unk6: number;
  struct_251: Buffer;
  unk8: number;
  struct_230: Buffer;
  struct_383: Buffer;
  struct_228: Struct_636.Struct_636[];
  struct_142: Buffer;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_642;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.unk2 = reader.u64();
  data.unk3 = reader.u32();
  data.unk4 = reader.u32();
  data.unk5 = reader.u16();
  data.unk6 = reader.u32();
  data.struct_251 = reader.bytes(reader.u16(), 2, 9);
  data.unk8 = reader.u32();
  data.struct_230 = reader.bytes(reader.u16(), 10, 18);
  data.struct_383 = reader.bytes(reader.u16(), 2, 10);
  data.struct_228 = reader.array(reader.u16(), () => Struct_636.read(reader), 3);
  data.struct_142 = reader.bytes(reader.u16(), 10, 9);
  data.unk13 = reader.u8();
  return data;
}
