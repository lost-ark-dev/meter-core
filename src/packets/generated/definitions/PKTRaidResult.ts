// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  Unk0: bigint;
  Unk1: bigint;
  struct_44: { Unk0_0_0: bigint; Unk0_0_1: number; struct_494: Buffer; Unk0_0_3: bigint }[];
  Unk3: number;
  Unk4: number;
  Unk5: bigint;
  Unk6: number;
  Unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.Unk0 = reader.u64();
  data.Unk1 = reader.u64();
  data.struct_44 = reader.array(
    reader.u16(),
    () => {
      const O = {} as any;
      O.Unk0_0_0 = ReadNBytesInt64.read(reader);
      O.Unk0_0_1 = reader.u32();
      O.struct_494 = reader.bytes(reader.u16(), 3);
      O.Unk0_0_3 = ReadNBytesInt64.read(reader);
      return O;
    },
    3
  );
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u8();
  data.Unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 10861;
