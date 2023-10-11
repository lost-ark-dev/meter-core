// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  struct_49: { unk1_0_0: bigint; struct_517: Buffer; unk1_0_2: number; unk1_0_3: bigint }[];
  unk1: bigint;
  unk2: bigint;
  unk3: number;
  unk4: bigint;
  unk5: number;
  unk6: number;
  unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.struct_49 = reader.array(
    reader.u16(),
    () => {
      const X = {} as { unk1_0_0: bigint; struct_517: Buffer; unk1_0_2: number; unk1_0_3: bigint };
      X.unk1_0_0 = ReadNBytesInt64.read(reader);
      X.struct_517 = reader.bytes(reader.u16(), 3);
      X.unk1_0_2 = reader.u32();
      X.unk1_0_3 = ReadNBytesInt64.read(reader);
      return X;
    },
    3
  );
  data.unk1 = reader.u64();
  data.unk2 = reader.u64();
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u8();
  data.unk6 = reader.u8();
  data.unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 26873;
