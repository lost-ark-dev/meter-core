// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type Struct_674 = {
  Unk0: number;
  Unk1: number;
  Unk2: number;
  Unk3: bigint;
  Unk4: bigint;
  Unk5: bigint;
  Unk6: number;
};
export function read(reader: Read) {
  const data = {} as Struct_674;
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.Unk4 = ReadNBytesInt64.read(reader);
  data.Unk5 = ReadNBytesInt64.read(reader);
  data.Unk6 = reader.u16();
  return data;
}
