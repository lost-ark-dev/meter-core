// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  unk0: { statType: number; value: bigint }[];
  objectId: bigint;
  unk2: { statType: number; value: bigint }[];
  unk4_0?: number;
  unk5: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.unk0 = reader.array(
    reader.u16(),
    () => {
      const $ = {} as { statType: number; value: bigint };
      $.statType = reader.u8();
      $.value = ReadNBytesInt64.read(reader);
      return $;
    },
    152
  );
  data.objectId = reader.u64();
  data.unk2 = reader.array(
    reader.u16(),
    () => {
      const a = {} as { statType: number; value: bigint };
      a.statType = reader.u8();
      a.value = ReadNBytesInt64.read(reader);
      return a;
    },
    152
  );
  if (reader.bool()) data.unk4_0 = reader.u32();
  data.unk5 = reader.u8();
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 41365;
