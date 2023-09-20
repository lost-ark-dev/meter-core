// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PeriodUpdateStatData = {
  unk0: number;
  unk1: bigint;
  unk2: number;
  unk3: bigint;
  unk4: number;
  unk5: number;
  unk6: bigint;
};
export function read(reader: Read) {
  const data = {} as PeriodUpdateStatData;
  data.unk0 = reader.u8();
  data.unk1 = reader.u64();
  data.unk2 = reader.u16();
  data.unk3 = ReadNBytesInt64.read(reader);
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  data.unk6 = ReadNBytesInt64.read(reader);
  return data;
}
