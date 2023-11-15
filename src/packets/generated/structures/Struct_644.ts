// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_644 = {
  struct_485: Buffer;
  unk1: number;
  struct_20: { unk1_0_0: number; struct_229: string; unk1_0_2: number }[];
  struct_499: Buffer;
  unk4: number;
  unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_644;
  data.struct_485 = reader.bytes(reader.u16(), 3, 7);
  data.unk1 = reader.u8();
  data.struct_20 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { unk1_0_0: number; struct_229: string; unk1_0_2: number };
      q.unk1_0_0 = reader.u16();
      q.struct_229 = reader.string(2);
      q.unk1_0_2 = reader.u8();
      return q;
    },
    20
  );
  data.struct_499 = reader.bytes(reader.u16(), 5, 7);
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  return data;
}
