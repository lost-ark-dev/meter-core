// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PeriodUpdateStatData = {
  unk0: number;
  unk1: bigint;
  unk2: number;
  unk3: bigint;
  unk4: number;
  unk5: bigint;
  unk6: number;
};
export function read(reader: Read) {
  const data = {} as PeriodUpdateStatData;
  data.unk0 = reader.u8();
  data.unk1 = ReadNBytesInt64.read(reader);
  data.unk2 = reader.u8();
  data.unk3 = reader.u64();
  data.unk4 = reader.u8();
  data.unk5 = ReadNBytesInt64.read(reader);
  data.unk6 = reader.u16();
  return data;
}
