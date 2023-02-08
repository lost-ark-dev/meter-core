// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type Struct_672 = {
  Unk0: number;
  Unk1: number;
  Unk2: bigint;
  Unk3: bigint;
  Unk4: number;
  Unk5: number;
  Unk6: bigint;
};
export function read(reader: Read) {
  const data = {} as Struct_672;
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u16();
  data.Unk2 = ReadNBytesInt64.read(reader);
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u8();
  data.Unk6 = ReadNBytesInt64.read(reader);
  return data;
}
