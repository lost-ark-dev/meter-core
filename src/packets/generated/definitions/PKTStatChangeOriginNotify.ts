// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  statPairList: { value: bigint; statType: number }[];
  unk2_0?: number;
  unk3: { value: bigint; statType: number }[];
  unk4: number;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.statPairList = reader.array(
    reader.u16(),
    () => {
      const $ = {} as { value: bigint; statType: number };
      $.value = ReadNBytesInt64.read(reader);
      $.statType = reader.u8();
      return $;
    },
    152
  );
  if (reader.bool()) data.unk2_0 = reader.u32();
  data.unk3 = reader.array(
    reader.u16(),
    () => {
      const a = {} as { value: bigint; statType: number };
      a.value = ReadNBytesInt64.read(reader);
      a.statType = reader.u8();
      return a;
    },
    152
  );
  data.unk4 = reader.u8();
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 20207;
