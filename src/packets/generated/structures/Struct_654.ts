// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_654 = {
  struct_232: Buffer;
  unk1: number;
  unk2: number;
  struct_233: Buffer;
  unk4: number;
  struct_24: { struct_231: string; unk1_0_1: number; unk1_0_2: number }[];
};
export function read(reader: Read) {
  const data = {} as Struct_654;
  data.struct_232 = reader.bytes(reader.u16(), 3, 7);
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.struct_233 = reader.bytes(reader.u16(), 5, 7);
  data.unk4 = reader.u8();
  data.struct_24 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { struct_231: string; unk1_0_1: number; unk1_0_2: number };
      q.struct_231 = reader.string(2);
      q.unk1_0_1 = reader.u16();
      q.unk1_0_2 = reader.u8();
      return q;
    },
    20
  );
  return data;
}
