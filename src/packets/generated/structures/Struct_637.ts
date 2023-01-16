// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type Struct_637 = {
  Unk0: number;
  Unk1: number;
  Unk2: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  Unk4_0?: number;
  struct_426: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_637;
  data.Unk0 = reader.u16();
  data.Unk1 = reader.u32();
  data.Unk2 = reader.u16();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  if (reader.bool()) data.Unk4_0 = reader.u8();
  data.struct_426 = reader.bytes(reader.u16(), 3, 14);
  return data;
}
