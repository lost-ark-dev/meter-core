// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  Unk0: number;
  Unk1: bigint;
  Unk2: bigint;
  Unk3: number;
  Unk4: bigint;
  Unk5: bigint;
  Unk6: number;
  struct_43: { struct_494: Buffer; Unk0_0_1: bigint; Unk0_0_2: bigint; Unk0_0_3: number }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u64();
  data.Unk2 = reader.u64();
  data.Unk3 = reader.u8();
  data.Unk4 = reader.u64();
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u8();
  data.struct_43 = reader.array(
    reader.u16(),
    () => {
      const O = {} as any;
      O.struct_494 = reader.bytes(reader.u16(), 3);
      O.Unk0_0_1 = ReadNBytesInt64.read(reader);
      O.Unk0_0_2 = ReadNBytesInt64.read(reader);
      O.Unk0_0_3 = reader.u32();
      return O;
    },
    3
  );
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 13462;
