// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_654 from "../structures/Struct_654";
export type Struct_661 = {
  unk0: number;
  struct_240: Buffer;
  unk2: bigint;
  struct_393: Buffer;
  unk4: number;
  unk5: number;
  unk6: number;
  unk7: number;
  unk8: number;
  struct_146: Buffer;
  unk10: number;
  unk11: number;
  struct_238: Struct_654.Struct_654[];
  struct_261: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_661;
  data.unk0 = reader.u32();
  data.struct_240 = reader.bytes(reader.u16(), 10, 18);
  data.unk2 = reader.u64();
  data.struct_393 = reader.bytes(reader.u16(), 2, 10);
  data.unk4 = reader.u32();
  data.unk5 = reader.u32();
  data.unk6 = reader.u32();
  data.unk7 = reader.u16();
  data.unk8 = reader.u8();
  data.struct_146 = reader.bytes(reader.u16(), 10, 9);
  data.unk10 = reader.u32();
  data.unk11 = reader.u32();
  data.struct_238 = reader.array(reader.u16(), () => Struct_654.read(reader), 3);
  data.struct_261 = reader.bytes(reader.u16(), 2, 9);
  return data;
}
