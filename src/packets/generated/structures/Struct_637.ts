// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type Struct_637 = {
  Unk0: number;
  Unk1: number;
  Unk2: number;
  struct_430: Buffer;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  Unk5_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_637;
  data.Unk0 = reader.u16();
  data.Unk1 = reader.u16();
  data.Unk2 = reader.u32();
  data.struct_430 = reader.bytes(reader.u16(), 3, 14);
  data.lostArkDateTime = LostArkDateTime.read(reader);
  if (reader.bool()) data.Unk5_0 = reader.u8();
  return data;
}
