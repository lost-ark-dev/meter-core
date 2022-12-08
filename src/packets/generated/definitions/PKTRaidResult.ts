// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  Unk0: number;
  Unk1: bigint;
  Unk2: number;
  Unk3: bigint;
  Unk4: number;
  struct_44: { struct_493: Buffer; Unk0_0_1: bigint; Unk0_0_2: number; Unk0_0_3: bigint }[];
  Unk6: bigint;
  Unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u64();
  data.Unk2 = reader.u8();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u8();
  data.struct_44 = reader.array(
    reader.u16(),
    () => {
      const Z = {} as any;
      Z.struct_493 = reader.bytes(reader.u16(), 3);
      Z.Unk0_0_1 = ReadNBytesInt64.read(reader);
      Z.Unk0_0_2 = reader.u32();
      Z.Unk0_0_3 = ReadNBytesInt64.read(reader);
      return Z;
    },
    3
  );
  data.Unk6 = reader.u64();
  data.Unk7 = reader.u64();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 17609;
