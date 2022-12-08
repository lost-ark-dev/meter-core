// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  StatPairList: { readNBytesInt64: bigint; Unk0_0_1: number }[];
  Unk1: { readNBytesInt64: bigint; Unk0_0_1: number }[];
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
      const b = {} as any;
      b.readNBytesInt64 = ReadNBytesInt64.read(reader);
      b.Unk0_0_1 = reader.u8();
      return b;
    },
    152
  );
  data.Unk1 = reader.array(
    reader.u16(),
    () => {
      const c = {} as any;
      c.readNBytesInt64 = ReadNBytesInt64.read(reader);
      c.Unk0_0_1 = reader.u8();
      return c;
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
