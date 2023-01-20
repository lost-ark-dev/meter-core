// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_636 from "../structures/Struct_636";
export type Struct_671 = {
  Unk0: bigint;
  Unk1: number;
  lostArkString: string;
  struct_83: Buffer;
  Unk4: number;
  Unk5: number;
  struct_297: Struct_636.Struct_636[];
  Unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_671;
  data.Unk0 = reader.u64();
  data.Unk1 = reader.u16();
  data.lostArkString = reader.string(20);
  data.struct_83 = reader.bytes(reader.u32(), 512);
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u8();
  data.struct_297 = reader.array(reader.u16(), () => Struct_636.read(reader), 30);
  data.Unk7 = reader.u8();
  return data;
}
