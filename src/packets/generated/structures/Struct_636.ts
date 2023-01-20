// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type Struct_636 = {
  struct_425: Buffer;
  Unk1: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  Unk3: number;
  Unk4: number;
  Unk5_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_636;
  data.struct_425 = reader.bytes(reader.u16(), 3, 14);
  data.Unk1 = reader.u16();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.Unk3 = reader.u16();
  data.Unk4 = reader.u32();
  if (reader.bool()) data.Unk5_0 = reader.u8();
  return data;
}
