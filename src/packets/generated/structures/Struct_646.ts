// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_646 = {
  struct_232: Buffer;
  struct_488: Buffer;
  unk2: number;
  unk3: number;
  unk4: number;
  struct_23: { unk1_0_0: number; unk1_0_1: number; struct_230: string }[];
};
export function read(reader: Read) {
  const data = {} as Struct_646;
  data.struct_232 = reader.bytes(reader.u16(), 5, 7);
  data.struct_488 = reader.bytes(reader.u16(), 3, 7);
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  data.struct_23 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { unk1_0_0: number; unk1_0_1: number; struct_230: string };
      q.unk1_0_0 = reader.u8();
      q.unk1_0_1 = reader.u16();
      q.struct_230 = reader.string(2);
      return q;
    },
    20
  );
  return data;
}
