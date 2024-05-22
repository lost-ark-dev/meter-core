// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_673 = {
  unk0: number;
  unk1: number;
  struct_237: Buffer;
  struct_236: Buffer;
  unk4: number;
  struct_23: { struct_235: string; unk1_0_1: number; unk1_0_2: number }[];
};
export function read(reader: Read) {
  const data = {} as Struct_673;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.struct_237 = reader.bytes(reader.u16(), 5, 7);
  data.struct_236 = reader.bytes(reader.u16(), 3, 7);
  data.unk4 = reader.u8();
  data.struct_23 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { struct_235: string; unk1_0_1: number; unk1_0_2: number };
      q.struct_235 = reader.string(2);
      q.unk1_0_1 = reader.u16();
      q.unk1_0_2 = reader.u8();
      return q;
    },
    20
  );
  return data;
}
