// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  statPairList: { statType: number; value: bigint }[];
  unk1: number;
  unk3_0?: number;
  objectId: bigint;
  unk5: { statType: number; value: bigint }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.statPairList = reader.array(
    reader.u16(),
    () => {
      const $ = {} as { statType: number; value: bigint };
      $.statType = reader.u8();
      $.value = ReadNBytesInt64.read(reader);
      return $;
    },
    152
  );
  data.unk1 = reader.u8();
  if (reader.bool()) data.unk3_0 = reader.u32();
  data.objectId = reader.u64();
  data.unk5 = reader.array(
    reader.u16(),
    () => {
      const a = {} as { statType: number; value: bigint };
      a.statType = reader.u8();
      a.value = ReadNBytesInt64.read(reader);
      return a;
    },
    152
  );
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 50071;
