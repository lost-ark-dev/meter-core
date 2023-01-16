// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  StatPairList: { Value: bigint; StatType: number }[];
  Unk1: { Value: bigint; StatType: number }[];
  Unk2: number;
  Unk3_0?: number;
  ObjectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.StatPairList = reader.array(
    reader.u16(),
    () => {
      const D = {} as any;
      D.Value = ReadNBytesInt64.read(reader);
      D.StatType = reader.u8();
      return D;
    },
    152
  );
  data.Unk1 = reader.array(
    reader.u16(),
    () => {
      const E = {} as any;
      E.Value = ReadNBytesInt64.read(reader);
      E.StatType = reader.u8();
      return E;
    },
    152
  );
  data.Unk2 = reader.u8();
  if (reader.bool()) data.Unk3_0 = reader.u32();
  data.ObjectId = reader.u64();
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 36460;
