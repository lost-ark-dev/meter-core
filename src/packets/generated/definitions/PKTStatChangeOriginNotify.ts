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
      const a = {} as { statType: number; value: bigint };
      a.statType = reader.u8();
      a.value = ReadNBytesInt64.read(reader);
      return a;
    },
    153
  );
  data.unk4 = reader.array(
    reader.u16(),
    () => {
      const b = {} as { statType: number; value: bigint };
      b.statType = reader.u8();
      b.value = ReadNBytesInt64.read(reader);
      return b;
    },
    153
  );
  data.unk5 = reader.u8();
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 55718;
