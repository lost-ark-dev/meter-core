// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PeriodUpdateStatData = {
  unk0: bigint;
  unk1: number;
  unk2: number;
  unk3: bigint;
  unk4: bigint;
  unk5: number;
  unk6: number;
};
export function read(reader: Read) {
  const data = {} as PeriodUpdateStatData;
  data.unk0 = ReadNBytesInt64.read(reader);
  data.unk1 = reader.u16();
  data.unk2 = reader.u8();
  data.unk3 = reader.u64();
  data.unk4 = ReadNBytesInt64.read(reader);
  data.unk5 = reader.u8();
  data.unk6 = reader.u8();
  return data;
}
