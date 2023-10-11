// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  unk0: number;
  unk1: { statType: number; value: bigint }[];
  unk3_0?: number;
  objectId: bigint;
  unk5: { statType: number; value: bigint }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.unk0 = reader.u8();
  data.unk1 = reader.array(
    reader.u16(),
    () => {
      const $ = {} as { statType: number; value: bigint };
      $.statType = reader.u8();
      $.value = ReadNBytesInt64.read(reader);
      return $;
    },
    152
  );
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
export const opcode = 30359;
