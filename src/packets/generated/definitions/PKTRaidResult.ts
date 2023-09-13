// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  unk0: number;
  unk1: bigint;
  struct_50: { unk1_0_0: bigint; unk1_0_1: number; unk1_0_2: bigint; struct_517: Buffer }[];
  unk3: number;
  unk4: bigint;
  unk5: bigint;
  unk6: number;
  unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.unk0 = reader.u8();
  data.unk1 = reader.u64();
  data.struct_50 = reader.array(
    reader.u16(),
    () => {
      const X = {} as { unk1_0_0: bigint; unk1_0_1: number; unk1_0_2: bigint; struct_517: Buffer };
      X.unk1_0_0 = ReadNBytesInt64.read(reader);
      X.unk1_0_1 = reader.u32();
      X.unk1_0_2 = ReadNBytesInt64.read(reader);
      X.struct_517 = reader.bytes(reader.u16(), 3);
      return X;
    },
    3
  );
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u64();
  data.unk6 = reader.u8();
  data.unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 55609;
