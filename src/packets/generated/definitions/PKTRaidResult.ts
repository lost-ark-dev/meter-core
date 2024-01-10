// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  unk0: number;
  struct_53: { unk1_0_0: number; struct_528: Buffer; unk1_0_2: bigint; unk1_0_3: bigint }[];
  unk2: number;
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
  data.struct_53 = reader.array(
    reader.u16(),
    () => {
      const Y = {} as { unk1_0_0: number; struct_528: Buffer; unk1_0_2: bigint; unk1_0_3: bigint };
      Y.unk1_0_0 = reader.u32();
      Y.struct_528 = reader.bytes(reader.u16(), 3);
      Y.unk1_0_2 = ReadNBytesInt64.read(reader);
      Y.unk1_0_3 = ReadNBytesInt64.read(reader);
      return Y;
    },
    3
  );
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.unk5 = reader.u64();
  data.unk6 = reader.u64();
  data.unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 43793;
