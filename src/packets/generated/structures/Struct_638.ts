// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type Struct_638 = {
  Unk0: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  Unk2: number;
  Unk3: number;
  struct_426: Buffer;
  Unk5_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_638;
  data.Unk0 = reader.u16();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.Unk2 = reader.u16();
  data.Unk3 = reader.u32();
  data.struct_426 = reader.bytes(reader.u16(), 3, 14);
  if (reader.bool()) data.Unk5_0 = reader.u8();
  return data;
}
