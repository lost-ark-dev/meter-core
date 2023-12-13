// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  unk0: number;
  statPairChangedList: { value: bigint; statType: number }[];
  objectId: bigint;
  unk3: { value: bigint; statType: number }[];
  unk5_0?: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.unk0 = reader.u8();
  data.statPairChangedList = reader.array(
    reader.u16(),
    () => {
      const a = {} as { value: bigint; statType: number };
      a.value = ReadNBytesInt64.read(reader);
      a.statType = reader.u8();
      return a;
    },
    153
  );
  data.objectId = reader.u64();
  data.unk3 = reader.array(
    reader.u16(),
    () => {
      const b = {} as { value: bigint; statType: number };
      b.value = ReadNBytesInt64.read(reader);
      b.statType = reader.u8();
      return b;
    },
    153
  );
  if (reader.bool()) data.unk5_0 = reader.u32();
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 54143;
