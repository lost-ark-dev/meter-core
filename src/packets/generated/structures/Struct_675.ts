// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_637 from "../structures/Struct_637";
export type Struct_675 = {
  Unk0: number;
  Unk1: number;
  Unk2: bigint;
  struct_85: Buffer;
  lostArkString: string;
  struct_301: Struct_637.Struct_637[];
  Unk6: number;
  Unk7: number;
};
export function read(reader: Read) {
  const data = {} as Struct_675;
  data.Unk0 = reader.u16();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u64();
  data.struct_85 = reader.bytes(reader.u32(), 512);
  data.lostArkString = reader.string(20);
  data.struct_301 = reader.array(reader.u16(), () => Struct_637.read(reader), 30);
  data.Unk6 = reader.u8();
  data.Unk7 = reader.u8();
  return data;
}
