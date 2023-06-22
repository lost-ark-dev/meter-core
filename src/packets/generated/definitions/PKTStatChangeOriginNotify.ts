// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  unk1_0?: number;
  objectId: bigint;
  unk3: { statType: number; value: bigint }[];
  unk4: { statType: number; value: bigint }[];
  unk5: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  if (reader.bool()) data.unk1_0 = reader.u32();
  data.objectId = reader.u64();
  data.unk3 = reader.array(
    reader.u16(),
    () => {
      const $ = {} as { statType: number; value: bigint };
      $.statType = reader.u8();
      $.value = ReadNBytesInt64.read(reader);
      return $;
    },
    152
  );
  data.unk4 = reader.array(
    reader.u16(),
    () => {
      const a = {} as { statType: number; value: bigint };
      a.statType = reader.u8();
      a.value = ReadNBytesInt64.read(reader);
      return a;
    },
    152
  );
  data.unk5 = reader.u8();
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 16441;
