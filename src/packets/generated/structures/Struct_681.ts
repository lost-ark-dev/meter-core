// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_674 from "../structures/Struct_674";
export type Struct_681 = {
  struct_149: Buffer;
  struct_262: Buffer;
  struct_403: Buffer;
  unk3: number;
  struct_238: Struct_674.Struct_674[];
  unk5: bigint;
  unk6: number;
  struct_302: Buffer;
  unk8: number;
  unk9: number;
  unk10: number;
  unk11: number;
  unk12: number;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_681;
  data.struct_149 = reader.bytes(reader.u16(), 10, 9);
  data.struct_262 = reader.bytes(reader.u16(), 2, 9);
  data.struct_403 = reader.bytes(reader.u16(), 2, 10);
  data.unk3 = reader.u32();
  data.struct_238 = reader.array(reader.u16(), () => Struct_674.read(reader), 3);
  data.unk5 = reader.u64();
  data.unk6 = reader.u8();
  data.struct_302 = reader.bytes(reader.u16(), 10, 18);
  data.unk8 = reader.u32();
  data.unk9 = reader.u32();
  data.unk10 = reader.u32();
  data.unk11 = reader.u32();
  data.unk12 = reader.u32();
  data.unk13 = reader.u16();
  return data;
}
