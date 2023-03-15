// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_637 from "../structures/Struct_637";
export type Struct_673 = {
  struct_296: Struct_637.Struct_637[];
  lostArkString: string;
  struct_82: Buffer;
  Unk3: number;
  Unk4: number;
  Unk5: number;
  Unk6: number;
  Unk7: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_673;
  data.struct_296 = reader.array(reader.u16(), () => Struct_637.read(reader), 32);
  data.lostArkString = reader.string(20);
  data.struct_82 = reader.bytes(reader.u32(), 512);
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u16();
  data.Unk6 = reader.u8();
  data.Unk7 = reader.u64();
  return data;
}
