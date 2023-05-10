// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  ObjectId: bigint;
  Unk1: number;
  Unk2_0?: number;
  StatPairChangedList: { StatType: number; Value: bigint }[];
  Unk4: { StatType: number; Value: bigint }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.ObjectId = reader.u64();
  data.Unk1 = reader.u8();
  if (reader.bool()) data.Unk2_0 = reader.u32();
  data.StatPairChangedList = reader.array(
    reader.u16(),
    () => {
      const S = {} as any;
      S.StatType = reader.u8();
      S.Value = ReadNBytesInt64.read(reader);
      return S;
    },
    152
  );
  data.Unk4 = reader.array(
    reader.u16(),
    () => {
      const T = {} as any;
      T.StatType = reader.u8();
      T.Value = ReadNBytesInt64.read(reader);
      return T;
    },
    152
  );
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 8370;
