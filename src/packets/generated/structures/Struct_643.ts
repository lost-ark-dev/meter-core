// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_637 from "../structures/Struct_637";
export type Struct_643 = {
  unk0: number;
  unk1: number;
  unk2: number;
  unk3: number;
  struct_235: Buffer;
  struct_487: Buffer;
  unk6: number;
  struct_389: Buffer;
  struct_233: Struct_637.Struct_637[];
  unk9: number;
  struct_258: Buffer;
  unk11: bigint;
  unk12: number;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_643;
  data.unk0 = reader.u32();
  data.unk1 = reader.u16();
  data.unk2 = reader.u32();
  data.unk3 = reader.u32();
  data.struct_235 = reader.bytes(reader.u16(), 10, 18);
  data.struct_487 = reader.bytes(reader.u16(), 10, 9);
  data.unk6 = reader.u32();
  data.struct_389 = reader.bytes(reader.u16(), 2, 10);
  data.struct_233 = reader.array(reader.u16(), () => Struct_637.read(reader), 3);
  data.unk9 = reader.u32();
  data.struct_258 = reader.bytes(reader.u16(), 2, 9);
  data.unk11 = reader.u64();
  data.unk12 = reader.u8();
  data.unk13 = reader.u32();
  return data;
}
