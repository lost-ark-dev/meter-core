// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_660 from "../structures/Struct_660";
export type Struct_667 = {
  struct_393: Buffer;
  unk1: number;
  struct_147: Buffer;
  struct_237: Buffer;
  unk4: number;
  struct_235: Struct_660.Struct_660[];
  unk6: number;
  unk7: number;
  unk8: number;
  unk9: number;
  struct_258: Buffer;
  unk11: number;
  unk12: number;
  unk13: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_667;
  data.struct_393 = reader.bytes(reader.u16(), 2, 10);
  data.unk1 = reader.u32();
  data.struct_147 = reader.bytes(reader.u16(), 10, 9);
  data.struct_237 = reader.bytes(reader.u16(), 10, 18);
  data.unk4 = reader.u32();
  data.struct_235 = reader.array(reader.u16(), () => Struct_660.read(reader), 3);
  data.unk6 = reader.u32();
  data.unk7 = reader.u32();
  data.unk8 = reader.u8();
  data.unk9 = reader.u32();
  data.struct_258 = reader.bytes(reader.u16(), 2, 9);
  data.unk11 = reader.u32();
  data.unk12 = reader.u16();
  data.unk13 = reader.u64();
  return data;
}
