// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  Unk0_0?: number;
  Unk1: { Value: bigint; StatType: number }[];
  Unk2: number;
  ObjectId: bigint;
  Unk4: { Value: bigint; StatType: number }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  if (reader.bool()) data.Unk0_0 = reader.u32();
  data.Unk1 = reader.array(
    reader.u16(),
    () => {
      const S = {} as any;
      S.Value = ReadNBytesInt64.read(reader);
      S.StatType = reader.u8();
      return S;
    },
    152
  );
  data.Unk2 = reader.u8();
  data.ObjectId = reader.u64();
  data.Unk4 = reader.array(
    reader.u16(),
    () => {
      const T = {} as any;
      T.Value = ReadNBytesInt64.read(reader);
      T.StatType = reader.u8();
      return T;
    },
    152
  );
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 52643;
