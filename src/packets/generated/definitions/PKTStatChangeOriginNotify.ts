// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  Unk0: { StatType: number; Value: bigint }[];
  Unk1: { StatType: number; Value: bigint }[];
  Unk2_0?: number;
  Unk3: number;
  ObjectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.Unk0 = reader.array(
    reader.u16(),
    () => {
      const S = {} as any;
      S.StatType = reader.u8();
      S.Value = ReadNBytesInt64.read(reader);
      return S;
    },
    152
  );
  data.Unk1 = reader.array(
    reader.u16(),
    () => {
      const T = {} as any;
      T.StatType = reader.u8();
      T.Value = ReadNBytesInt64.read(reader);
      return T;
    },
    152
  );
  if (reader.bool()) data.Unk2_0 = reader.u32();
  data.Unk3 = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 6051;
