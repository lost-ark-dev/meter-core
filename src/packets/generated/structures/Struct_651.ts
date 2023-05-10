// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type Struct_651 = {
  Unk0_0?: number;
  Unk1: number;
  Unk2: number;
  struct_436: Buffer;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  Unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_651;
  if (reader.bool()) data.Unk0_0 = reader.u8();
  data.Unk1 = reader.u16();
  data.Unk2 = reader.u16();
  data.struct_436 = reader.bytes(reader.u16(), 3, 14);
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.Unk5 = reader.u32();
  return data;
}
