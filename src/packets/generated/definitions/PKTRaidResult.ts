// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  unk0: bigint;
  unk1: bigint;
  unk2: bigint;
  unk3: number;
  unk4: number;
  unk5: number;
  unk6: bigint;
  struct_49: { unk1_0_0: number; unk1_0_1: bigint; unk1_0_2: bigint; struct_515: Buffer }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.unk0 = reader.u64();
  data.unk1 = reader.u64();
  data.unk2 = reader.u64();
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  data.unk6 = reader.u64();
  data.struct_49 = reader.array(
    reader.u16(),
    () => {
      const X = {} as { unk1_0_0: number; unk1_0_1: bigint; unk1_0_2: bigint; struct_515: Buffer };
      X.unk1_0_0 = reader.u32();
      X.unk1_0_1 = ReadNBytesInt64.read(reader);
      X.unk1_0_2 = ReadNBytesInt64.read(reader);
      X.struct_515 = reader.bytes(reader.u16(), 3);
      return X;
    },
    3
  );
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 55609;
