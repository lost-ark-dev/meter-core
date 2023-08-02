// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_636 = {
  struct_22: { unk1_0_0: number; struct_234: string; unk1_0_2: number }[];
  struct_235: Buffer;
  struct_483: Buffer;
  unk3: number;
  unk4: number;
  unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_636;
  data.struct_22 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { unk1_0_0: number; struct_234: string; unk1_0_2: number };
      q.unk1_0_0 = reader.u16();
      q.struct_234 = reader.string(2);
      q.unk1_0_2 = reader.u8();
      return q;
    },
    20
  );
  data.struct_235 = reader.bytes(reader.u16(), 5, 7);
  data.struct_483 = reader.bytes(reader.u16(), 3, 7);
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  return data;
}
