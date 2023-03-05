// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type Struct_634 = {
  Unk0: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_424: Buffer;
  Unk3: number;
  Unk4: number;
  Unk5_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_634;
  data.Unk0 = reader.u16();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_424 = reader.bytes(reader.u16(), 3, 14);
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u16();
  if (reader.bool()) data.Unk5_0 = reader.u8();
  return data;
}
