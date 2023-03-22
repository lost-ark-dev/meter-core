// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_635 from "../structures/Struct_635";
export type Struct_670 = {
  struct_87: Buffer;
  Unk1: number;
  Unk2: number;
  Unk3: number;
  struct_296: Struct_635.Struct_635[];
  Unk5: number;
  lostArkString: string;
  Unk7: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_670;
  data.struct_87 = reader.bytes(reader.u32(), 512);
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u16();
  data.Unk3 = reader.u8();
  data.struct_296 = reader.array(reader.u16(), () => Struct_635.read(reader), 32);
  data.Unk5 = reader.u8();
  data.lostArkString = reader.string(20);
  data.Unk7 = reader.u64();
  return data;
}
