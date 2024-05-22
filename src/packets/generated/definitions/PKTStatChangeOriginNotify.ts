// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  unk0: number;
  unk2_0?: number;
  objectId: bigint;
  unk4: { value: bigint; statType: number }[];
  unk5: { value: bigint; statType: number }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.unk0 = reader.u8();
  if (reader.bool()) data.unk2_0 = reader.u32();
  data.objectId = reader.u64();
  data.unk4 = reader.array(
    reader.u16(),
    () => {
      const c = {} as { value: bigint; statType: number };
      c.value = ReadNBytesInt64.read(reader);
      c.statType = reader.u8();
      return c;
    },
    153
  );
  data.unk5 = reader.array(
    reader.u16(),
    () => {
      const d = {} as { value: bigint; statType: number };
      d.value = ReadNBytesInt64.read(reader);
      d.statType = reader.u8();
      return d;
    },
    153
  );
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 6642;
