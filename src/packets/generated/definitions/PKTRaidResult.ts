// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as ReadNBytesInt64 from "../../common/ReadNBytesInt64";
export type PKTRaidResult = {
  unk0: bigint;
  unk1: bigint;
  struct_47: { struct_520: Buffer; unk1_0_1: bigint; unk1_0_2: number; unk1_0_3: bigint }[];
  unk3: bigint;
  unk4: number;
  unk5: bigint;
  unk6: number;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidResult;
  data.unk0 = reader.u64();
  data.unk1 = reader.u64();
  data.struct_47 = reader.array(
    reader.u16(),
    () => {
      const X = {} as { struct_520: Buffer; unk1_0_1: bigint; unk1_0_2: number; unk1_0_3: bigint };
      X.struct_520 = reader.bytes(reader.u16(), 3);
      X.unk1_0_1 = ReadNBytesInt64.read(reader);
      X.unk1_0_2 = reader.u32();
      X.unk1_0_3 = ReadNBytesInt64.read(reader);
      return X;
    },
    3
  );
  data.unk3 = reader.u64();
  data.unk4 = reader.u8();
  data.unk5 = reader.u64();
  data.unk6 = reader.u8();
  data.unk7 = reader.u8();
  return data;
}
export const name = "PKTRaidResult";
export const opcode = 34888;
