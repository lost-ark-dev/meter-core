// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_586 = {
  struct_126: Buffer;
  unk1: number;
  struct_0: { struct_516: Buffer; unk1_0_1: number }[];
  unk3: number;
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_586;
  data.struct_126 = reader.bytes(reader.u16(), 3, 5);
  data.unk1 = reader.u32();
  data.struct_0 = reader.array(
    reader.u16(),
    () => {
      const g = {} as { struct_516: Buffer; unk1_0_1: number };
      g.struct_516 = reader.bytes(reader.u16(), 10);
      g.unk1_0_1 = reader.u32();
      return g;
    },
    3
  );
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  return data;
}
