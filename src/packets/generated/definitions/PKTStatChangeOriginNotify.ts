// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  ObjectId: bigint;
  Unk1_0?: number;
  Unk2: { StatType: number; Value: bigint }[];
  Unk3: number;
  Unk4: { StatType: number; Value: bigint }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.ObjectId = reader.u64();
  if (reader.bool()) data.Unk1_0 = reader.u32();
  data.Unk2 = reader.array(
    reader.u16(),
    () => {
      const S = {} as any;
      S.StatType = reader.u8();
      S.Value = ReadNBytesInt64.read(reader);
      return S;
    },
    152
  );
  data.Unk3 = reader.u8();
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
export const opcode = 37312;
