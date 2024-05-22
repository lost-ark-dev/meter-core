// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  unk0: number;
  unk1: bigint;
  unk2: bigint;
  unk3: bigint;
  raidResult: number;
  unk5: bigint;
  unk6: number;
  struct_54: { struct_540: Buffer; unk1_0_1: bigint; unk1_0_2: number; unk1_0_3: bigint }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.unk0 = reader.u8();
  data.unk1 = reader.u64();
  data.unk2 = reader.u64();
  data.unk3 = reader.u64();
  data.raidResult = reader.u8();
  data.unk5 = reader.u64();
  data.unk6 = reader.u8();
  data.struct_54 = reader.array(
    reader.u16(),
    () => {
      const _ = {} as { struct_540: Buffer; unk1_0_1: bigint; unk1_0_2: number; unk1_0_3: bigint };
      _.struct_540 = reader.bytes(reader.u16(), 3);
      _.unk1_0_1 = ReadNBytesInt64.read(reader);
      _.unk1_0_2 = reader.u32();
      _.unk1_0_3 = ReadNBytesInt64.read(reader);
      return _;
    },
    3
  );
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 29181;
