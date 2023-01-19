// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  Unk0: bigint;
  Unk1: number;
  Unk2: number;
  Unk3: bigint;
  struct_45: { Unk0_0_0: bigint; Unk0_0_1: bigint; struct_495: Buffer; Unk0_0_3: number }[];
  Unk5: number;
  Unk6: bigint;
  Unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.Unk0 = reader.u64();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.struct_45 = reader.array(
    reader.u16(),
    () => {
      const O = {} as any;
      O.Unk0_0_0 = ReadNBytesInt64.read(reader);
      O.Unk0_0_1 = ReadNBytesInt64.read(reader);
      O.struct_495 = reader.bytes(reader.u16(), 3);
      O.Unk0_0_3 = reader.u32();
      return O;
    },
    3
  );
  data.Unk5 = reader.u8();
  data.Unk6 = reader.u64();
  data.Unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 24561;
