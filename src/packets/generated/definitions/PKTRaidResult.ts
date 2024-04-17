// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  unk0: bigint;
  unk1: bigint;
  unk2: number;
  unk3: bigint;
  unk4: number;
  struct_52: { unk1_0_0: bigint; unk1_0_1: bigint; struct_530: Buffer; unk1_0_3: number }[];
  raidResult: number;
  unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.unk0 = reader.u64();
  data.unk1 = reader.u64();
  data.unk2 = reader.u8();
  data.unk3 = reader.u64();
  data.unk4 = reader.u8();
  data.struct_52 = reader.array(
    reader.u16(),
    () => {
      const Y = {} as { unk1_0_0: bigint; unk1_0_1: bigint; struct_530: Buffer; unk1_0_3: number };
      Y.unk1_0_0 = ReadNBytesInt64.read(reader);
      Y.unk1_0_1 = ReadNBytesInt64.read(reader);
      Y.struct_530 = reader.bytes(reader.u16(), 3);
      Y.unk1_0_3 = reader.u32();
      return Y;
    },
    3
  );
  data.raidResult = reader.u8();
  data.unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 29676;
