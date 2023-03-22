// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type Struct_673 = {
  Unk0: number;
  Unk1: number;
  Unk2: number;
  Unk3: bigint;
  Unk4: bigint;
  Unk5: number;
  Unk6: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_673;
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u16();
  data.Unk2 = reader.u8();
  data.Unk3 = ReadNBytesInt64.read(reader);
  data.Unk4 = reader.u64();
  data.Unk5 = reader.u8();
  data.Unk6 = ReadNBytesInt64.read(reader);
  return data;
}
