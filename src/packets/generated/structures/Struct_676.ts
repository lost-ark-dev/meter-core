// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type Struct_676 = {
  Unk0: bigint;
  Unk1: number;
  Unk2: number;
  Unk3: bigint;
  Unk4: number;
  Unk5: number;
  Unk6: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_676;
  data.Unk0 = ReadNBytesInt64.read(reader);
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u16();
  data.Unk6 = ReadNBytesInt64.read(reader);
  return data;
}
