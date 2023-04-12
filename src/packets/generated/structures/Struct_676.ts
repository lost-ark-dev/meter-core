// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type Struct_676 = {
  Unk0: bigint;
  Unk1: bigint;
  Unk2: number;
  Unk3: number;
  Unk4: number;
  Unk5: bigint;
  Unk6: number;
};
export function read(reader: Read) {
  const data = {} as Struct_676;
  data.Unk0 = ReadNBytesInt64.read(reader);
  data.Unk1 = ReadNBytesInt64.read(reader);
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u16();
  return data;
}
