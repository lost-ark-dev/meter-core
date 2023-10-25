// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  unk0: number;
  unk1: number;
  struct_50: { struct_515: Buffer; unk1_0_1: number; unk1_0_2: bigint; unk1_0_3: bigint }[];
  unk3: number;
  unk4: bigint;
  unk5: bigint;
  unk6: bigint;
  unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.struct_50 = reader.array(
    reader.u16(),
    () => {
      const X = {} as { struct_515: Buffer; unk1_0_1: number; unk1_0_2: bigint; unk1_0_3: bigint };
      X.struct_515 = reader.bytes(reader.u16(), 3);
      X.unk1_0_1 = reader.u32();
      X.unk1_0_2 = ReadNBytesInt64.read(reader);
      X.unk1_0_3 = ReadNBytesInt64.read(reader);
      return X;
    },
    3
  );
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u64();
  data.unk6 = reader.u64();
  data.unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 2556;
