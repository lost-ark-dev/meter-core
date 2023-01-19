// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type Struct_636 = {
  Unk0_0?: number;
  Unk1: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_429: Buffer;
  Unk4: number;
  Unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_636;
  if (reader.bool()) data.Unk0_0 = reader.u8();
  data.Unk1 = reader.u16();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_429 = reader.bytes(reader.u16(), 3, 14);
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u16();
  return data;
}
