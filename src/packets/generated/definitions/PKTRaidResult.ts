// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  unk0: bigint;
  unk1: number;
  struct_51: { unk1_0_0: bigint; unk1_0_1: number; struct_520: Buffer; unk1_0_3: bigint }[];
  unk3: bigint;
  unk4: bigint;
  unk5: bigint;
  unk6: number;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.unk0 = reader.u64();
  data.unk1 = reader.u8();
  data.struct_51 = reader.array(
    reader.u16(),
    () => {
      const Y = {} as { unk1_0_0: bigint; unk1_0_1: number; struct_520: Buffer; unk1_0_3: bigint };
      Y.unk1_0_0 = ReadNBytesInt64.read(reader);
      Y.unk1_0_1 = reader.u32();
      Y.struct_520 = reader.bytes(reader.u16(), 3);
      Y.unk1_0_3 = ReadNBytesInt64.read(reader);
      return Y;
    },
    3
  );
  data.unk3 = reader.u64();
  data.unk4 = reader.u64();
  data.unk5 = reader.u64();
  data.unk6 = reader.u8();
  data.unk7 = reader.u8();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 54245;
