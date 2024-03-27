// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  unk0: number;
  unk1: number;
  unk2: bigint;
  struct_51: { unk1_0_0: bigint; unk1_0_1: number; unk1_0_2: bigint; struct_531: Buffer }[];
  raidResult: number;
  unk5: bigint;
  unk6: bigint;
  unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u64();
  data.struct_51 = reader.array(
    reader.u16(),
    () => {
      const Y = {} as { unk1_0_0: bigint; unk1_0_1: number; unk1_0_2: bigint; struct_531: Buffer };
      Y.unk1_0_0 = ReadNBytesInt64.read(reader);
      Y.unk1_0_1 = reader.u32();
      Y.unk1_0_2 = ReadNBytesInt64.read(reader);
      Y.struct_531 = reader.bytes(reader.u16(), 3);
      return Y;
    },
    3
  );
  data.raidResult = reader.u8();
  data.unk5 = reader.u64();
  data.unk6 = reader.u64();
  data.unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 50274;
