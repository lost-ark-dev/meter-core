// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type Struct_674 = {
  Unk0: number;
  Unk1: bigint;
  Unk2: number;
  Unk3: number;
  Unk4: number;
  Unk5: bigint;
  Unk6: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_674;
  data.Unk0 = reader.u8();
  data.Unk1 = ReadNBytesInt64.read(reader);
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u16();
  data.Unk5 = ReadNBytesInt64.read(reader);
  data.Unk6 = reader.u64();
  return data;
}
