// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  unk0: bigint;
  unk1: number;
  unk2: bigint;
  unk3: number;
  unk4: number;
  struct_50: { unk1_0_0: bigint; struct_521: Buffer; unk1_0_2: bigint; unk1_0_3: number }[];
  unk6: bigint;
  unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.unk0 = reader.u64();
  data.unk1 = reader.u8();
  data.unk2 = reader.u64();
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.struct_50 = reader.array(
    reader.u16(),
    () => {
      const V = {} as { unk1_0_0: bigint; struct_521: Buffer; unk1_0_2: bigint; unk1_0_3: number };
      V.unk1_0_0 = ReadNBytesInt64.read(reader);
      V.struct_521 = reader.bytes(reader.u16(), 3);
      V.unk1_0_2 = ReadNBytesInt64.read(reader);
      V.unk1_0_3 = reader.u32();
      return V;
    },
    3
  );
  data.unk6 = reader.u64();
  data.unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 14870;
