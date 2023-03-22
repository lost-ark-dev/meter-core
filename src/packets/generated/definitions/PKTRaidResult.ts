// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  Unk0: number;
  Unk1: bigint;
  Unk2: bigint;
  Unk3: bigint;
  Unk4: bigint;
  Unk5: number;
  struct_46: { struct_489: Buffer; Unk0_0_1: number; Unk0_0_2: bigint; Unk0_0_3: bigint }[];
  Unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u64();
  data.Unk2 = reader.u64();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u64();
  data.Unk5 = reader.u8();
  data.struct_46 = reader.array(
    reader.u16(),
    () => {
      const O = {} as any;
      O.struct_489 = reader.bytes(reader.u16(), 3);
      O.Unk0_0_1 = reader.u32();
      O.Unk0_0_2 = ReadNBytesInt64.read(reader);
      O.Unk0_0_3 = ReadNBytesInt64.read(reader);
      return O;
    },
    3
  );
  data.Unk7 = reader.u8();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 34049;
