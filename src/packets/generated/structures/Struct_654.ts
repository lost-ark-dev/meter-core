// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_647 from "../structures/Struct_647";
export type Struct_654 = {
  struct_257: Buffer;
  unk1: number;
  unk2: number;
  unk3: number;
  struct_295: Buffer;
  struct_387: Buffer;
  unk6: number;
  unk7: number;
  unk8: number;
  struct_147: Buffer;
  unk10: number;
  unk11: bigint;
  struct_233: Struct_647.Struct_647[];
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_654;
  data.struct_257 = reader.bytes(reader.u16(), 2, 9);
  data.unk1 = reader.u8();
  data.unk2 = reader.u32();
  data.unk3 = reader.u16();
  data.struct_295 = reader.bytes(reader.u16(), 10, 18);
  data.struct_387 = reader.bytes(reader.u16(), 2, 10);
  data.unk6 = reader.u32();
  data.unk7 = reader.u32();
  data.unk8 = reader.u32();
  data.struct_147 = reader.bytes(reader.u16(), 10, 9);
  data.unk10 = reader.u32();
  data.unk11 = reader.u64();
  data.struct_233 = reader.array(reader.u16(), () => Struct_647.read(reader), 3);
  data.unk13 = reader.u32();
  return data;
}
