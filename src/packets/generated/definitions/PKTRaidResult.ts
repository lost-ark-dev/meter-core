// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  Unk0: bigint;
  Unk1: bigint;
  Unk2: number;
  Unk3: bigint;
  Unk4: number;
  Unk5: bigint;
  Unk6: number;
  struct_41: { Unk0_0_0: number; struct_490: Buffer; Unk0_0_2: bigint; Unk0_0_3: bigint }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.Unk0 = reader.u64();
  data.Unk1 = reader.u64();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u8();
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u8();
  data.struct_41 = reader.array(
    reader.u16(),
    () => {
      const O = {} as any;
      O.Unk0_0_0 = reader.u32();
      O.struct_490 = reader.bytes(reader.u16(), 3);
      O.Unk0_0_2 = ReadNBytesInt64.read(reader);
      O.Unk0_0_3 = ReadNBytesInt64.read(reader);
      return O;
    },
    3
  );
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 54224;
