// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type Struct_690 = {
  Unk0: number;
  Unk1: bigint;
  Unk2: bigint;
  Unk3: number;
  Unk4: number;
  Unk5: bigint;
  Unk6: number;
};
export function read(reader: Read) {
  const data = {} as Struct_690;
  data.Unk0 = reader.u8();
  data.Unk1 = ReadNBytesInt64.read(reader);
  data.Unk2 = ReadNBytesInt64.read(reader);
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u16();
  return data;
}
