// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_636 from "../structures/Struct_636";
export type Struct_671 = {
  Unk0: number;
  struct_300: Struct_636.Struct_636[];
  Unk2: number;
  Unk3: number;
  Unk4: number;
  lostArkString: string;
  struct_86: Buffer;
  Unk7: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_671;
  data.Unk0 = reader.u8();
  data.struct_300 = reader.array(reader.u16(), () => Struct_636.read(reader), 30);
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u16();
  data.lostArkString = reader.string(20);
  data.struct_86 = reader.bytes(reader.u32(), 512);
  data.Unk7 = reader.u64();
  return data;
}
