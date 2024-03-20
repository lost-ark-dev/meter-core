// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_659 from "../structures/Struct_659";
export type Struct_666 = {
  struct_236: Struct_659.Struct_659[];
  unk1: number;
  unk2: number;
  unk3: number;
  unk4: number;
  unk5: number;
  unk6: number;
  struct_261: Buffer;
  struct_393: Buffer;
  struct_238: Buffer;
  unk10: number;
  struct_150: Buffer;
  unk12: bigint;
  unk13: number;
};
export function read(reader: Read) {
  const data = {} as Struct_666;
  data.struct_236 = reader.array(reader.u16(), () => Struct_659.read(reader), 3);
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  data.unk3 = reader.u16();
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.unk6 = reader.u32();
  data.struct_261 = reader.bytes(reader.u16(), 2, 9);
  data.struct_393 = reader.bytes(reader.u16(), 2, 10);
  data.struct_238 = reader.bytes(reader.u16(), 10, 18);
  data.unk10 = reader.u8();
  data.struct_150 = reader.bytes(reader.u16(), 10, 9);
  data.unk12 = reader.u64();
  data.unk13 = reader.u32();
  return data;
}
