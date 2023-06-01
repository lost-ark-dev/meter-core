// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_636 from "../structures/Struct_636";
export type Struct_642 = {
  unk0: number;
  unk1: number;
  struct_391: Buffer;
  unk3: number;
  struct_256: Buffer;
  unk5: number;
  unk6: bigint;
  struct_233: Struct_636.Struct_636[];
  unk8: number;
  struct_235: Buffer;
  unk10: number;
  unk11: number;
  unk12: number;
  struct_489: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_642;
  data.unk0 = reader.u32();
  data.unk1 = reader.u32();
  data.struct_391 = reader.bytes(reader.u16(), 2, 10);
  data.unk3 = reader.u8();
  data.struct_256 = reader.bytes(reader.u16(), 2, 9);
  data.unk5 = reader.u32();
  data.unk6 = reader.u64();
  data.struct_233 = reader.array(reader.u16(), () => Struct_636.read(reader), 3);
  data.unk8 = reader.u32();
  data.struct_235 = reader.bytes(reader.u16(), 10, 18);
  data.unk10 = reader.u32();
  data.unk11 = reader.u16();
  data.unk12 = reader.u32();
  data.struct_489 = reader.bytes(reader.u16(), 10, 9);
  return data;
}
