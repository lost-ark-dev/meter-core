// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  statPairChangedList: { statType: number; value: bigint }[];
  unk1: { statType: number; value: bigint }[];
  unk2: number;
  objectId: bigint;
  unk5_0?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.statPairChangedList = reader.array(
    reader.u16(),
    () => {
      const a = {} as { statType: number; value: bigint };
      a.statType = reader.u8();
      a.value = ReadNBytesInt64.read(reader);
      return a;
    },
    153
  );
  data.unk1 = reader.array(
    reader.u16(),
    () => {
      const b = {} as { statType: number; value: bigint };
      b.statType = reader.u8();
      b.value = ReadNBytesInt64.read(reader);
      return b;
    },
    153
  );
  data.unk2 = reader.u8();
  data.objectId = reader.u64();
  if (reader.bool()) data.unk5_0 = reader.u32();
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 30731;
