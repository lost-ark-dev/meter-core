// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_634 from "../structures/Struct_634";
export type Struct_669 = {
  Unk0: number;
  struct_293: Struct_634.Struct_634[];
  Unk2: bigint;
  struct_82: Buffer;
  Unk4: number;
  lostArkString: string;
  Unk6: number;
  Unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_669;
  data.Unk0 = reader.u16();
  data.struct_293 = reader.array(reader.u16(), () => Struct_634.read(reader), 30);
  data.Unk2 = reader.u64();
  data.struct_82 = reader.bytes(reader.u32(), 512);
  data.Unk4 = reader.u8();
  data.lostArkString = reader.string(20);
  data.Unk6 = reader.u8();
  data.Unk7 = reader.u8();
  return data;
}
