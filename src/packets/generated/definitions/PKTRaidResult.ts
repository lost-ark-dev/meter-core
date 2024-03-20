// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  struct_54: { unk1_0_0: bigint; unk1_0_1: number; unk1_0_2: bigint; struct_535: Buffer }[];
  unk1: bigint;
  raidResult: number;
  unk3: number;
  unk4: number;
  unk5: bigint;
  unk6: bigint;
  unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.struct_54 = reader.array(
    reader.u16(),
    () => {
      const Y = {} as { unk1_0_0: bigint; unk1_0_1: number; unk1_0_2: bigint; struct_535: Buffer };
      Y.unk1_0_0 = ReadNBytesInt64.read(reader);
      Y.unk1_0_1 = reader.u32();
      Y.unk1_0_2 = ReadNBytesInt64.read(reader);
      Y.struct_535 = reader.bytes(reader.u16(), 3);
      return Y;
    },
    3
  );
  data.unk1 = reader.u64();
  data.raidResult = reader.u8();
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.unk5 = reader.u64();
  data.unk6 = reader.u64();
  data.unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 10064;
