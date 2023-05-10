// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_651 from "../structures/Struct_651";
export type Struct_687 = {
  lostArkString: string;
  Unk1: number;
  Unk2: number;
  Unk3: number;
  Unk4: bigint;
  struct_302: Struct_651.Struct_651[];
  struct_88: Buffer;
  Unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_687;
  data.lostArkString = reader.string(20);
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u16();
  data.Unk4 = reader.u64();
  data.struct_302 = reader.array(reader.u16(), () => Struct_651.read(reader), 32);
  data.struct_88 = reader.bytes(reader.u32(), 512);
  data.Unk7 = reader.u8();
  return data;
}
