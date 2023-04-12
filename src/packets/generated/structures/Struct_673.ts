// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_638 from "../structures/Struct_638";
export type Struct_673 = {
  Unk0: number;
  Unk1: number;
  Unk2: number;
  lostArkString: string;
  Unk4: bigint;
  struct_84: Buffer;
  Unk6: number;
  struct_293: Struct_638.Struct_638[];
};
export function read(reader: Read) {
  const data = {} as Struct_673;
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u16();
  data.lostArkString = reader.string(20);
  data.Unk4 = reader.u64();
  data.struct_84 = reader.bytes(reader.u32(), 512);
  data.Unk6 = reader.u8();
  data.struct_293 = reader.array(reader.u16(), () => Struct_638.read(reader), 32);
  return data;
}
