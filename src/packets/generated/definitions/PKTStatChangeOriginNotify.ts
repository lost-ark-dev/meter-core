// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  unk0: number;
  objectId: bigint;
  unk2: { value: bigint; statType: number }[];
  unk4_0?: number;
  unk5: { value: bigint; statType: number }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.unk0 = reader.u8();
  data.objectId = reader.u64();
  data.unk2 = reader.array(
    reader.u16(),
    () => {
      const $ = {} as { value: bigint; statType: number };
      $.value = ReadNBytesInt64.read(reader);
      $.statType = reader.u8();
      return $;
    },
    152
  );
  if (reader.bool()) data.unk4_0 = reader.u32();
  data.unk5 = reader.array(
    reader.u16(),
    () => {
      const a = {} as { value: bigint; statType: number };
      a.value = ReadNBytesInt64.read(reader);
      a.statType = reader.u8();
      return a;
    },
    152
  );
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 13036;
