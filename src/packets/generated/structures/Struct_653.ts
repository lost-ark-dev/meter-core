// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_653 = {
  struct_22: { unk1_0_0: number; struct_233: string; unk1_0_2: number }[];
  struct_234: Buffer;
  unk2: number;
  struct_236: Buffer;
  unk4: number;
  unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_653;
  data.struct_22 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { unk1_0_0: number; struct_233: string; unk1_0_2: number };
      q.unk1_0_0 = reader.u8();
      q.struct_233 = reader.string(2);
      q.unk1_0_2 = reader.u16();
      return q;
    },
    20
  );
  data.struct_234 = reader.bytes(reader.u16(), 3, 7);
  data.unk2 = reader.u8();
  data.struct_236 = reader.bytes(reader.u16(), 5, 7);
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  return data;
}
