// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type Struct_635 = {
  Unk0: number;
  Unk1: number;
  Unk2_0?: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  Unk4: number;
  struct_423: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_635;
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u16();
  if (reader.bool()) data.Unk2_0 = reader.u8();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.Unk4 = reader.u16();
  data.struct_423 = reader.bytes(reader.u16(), 3, 14);
  return data;
}
