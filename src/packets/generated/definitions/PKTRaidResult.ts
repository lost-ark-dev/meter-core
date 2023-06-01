// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  unk0: bigint;
  unk1: bigint;
  unk2: number;
  unk3: number;
  unk4: bigint;
  unk5: number;
  struct_50: { struct_522: Buffer; unk1_0_1: bigint; unk1_0_2: bigint; unk1_0_3: number }[];
  unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.unk0 = reader.u64();
  data.unk1 = reader.u64();
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u8();
  data.struct_50 = reader.array(
    reader.u16(),
    () => {
      const V = {} as { struct_522: Buffer; unk1_0_1: bigint; unk1_0_2: bigint; unk1_0_3: number };
      V.struct_522 = reader.bytes(reader.u16(), 3);
      V.unk1_0_1 = ReadNBytesInt64.read(reader);
      V.unk1_0_2 = ReadNBytesInt64.read(reader);
      V.unk1_0_3 = reader.u32();
      return V;
    },
    3
  );
  data.unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 34118;
