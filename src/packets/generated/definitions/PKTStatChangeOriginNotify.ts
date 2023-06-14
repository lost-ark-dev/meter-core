// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTStatChangeOriginNotify = {
  objectId: bigint;
  unk2_0?: number;
  unk3: number;
  statPairChangedList: { statType: number; value: bigint }[];
  unk5: { statType: number; value: bigint }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatChangeOriginNotify;
  data.objectId = reader.u64();
  if (reader.bool()) data.unk2_0 = reader.u32();
  data.unk3 = reader.u8();
  data.statPairChangedList = reader.array(
    reader.u16(),
    () => {
      const Z = {} as { statType: number; value: bigint };
      Z.statType = reader.u8();
      Z.value = ReadNBytesInt64.read(reader);
      return Z;
    },
    152
  );
  data.unk5 = reader.array(
    reader.u16(),
    () => {
      const _ = {} as { statType: number; value: bigint };
      _.statType = reader.u8();
      _.value = ReadNBytesInt64.read(reader);
      return _;
    },
    152
  );
  return data;
}
export const name = "PKTStatChangeOriginNotify";
export const opcode = 1877;
