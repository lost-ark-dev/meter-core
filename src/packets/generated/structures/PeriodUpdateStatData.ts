// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PeriodUpdateStatData = {
  unk0: number;
  unk1: number;
  unk2: bigint;
  unk3: number;
  unk4: bigint;
  unk5: number;
  unk6: bigint;
};
export function read(reader: Read) {
  const data = {} as PeriodUpdateStatData;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = ReadNBytesInt64.read(reader);
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u16();
  data.unk6 = ReadNBytesInt64.read(reader);
  return data;
}
