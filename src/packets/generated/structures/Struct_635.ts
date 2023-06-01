// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_635 = {
  unk0: number;
  struct_232: Buffer;
  unk2: number;
  struct_23: { unk1_0_0: number; struct_229: string; unk1_0_2: number }[];
  unk4: number;
  struct_230: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_635;
  data.unk0 = reader.u8();
  data.struct_232 = reader.bytes(reader.u16(), 5, 7);
  data.unk2 = reader.u8();
  data.struct_23 = reader.array(
    reader.u16(),
    () => {
      const h = {} as { unk1_0_0: number; struct_229: string; unk1_0_2: number };
      h.unk1_0_0 = reader.u8();
      h.struct_229 = reader.string(2);
      h.unk1_0_2 = reader.u16();
      return h;
    },
    20
  );
  data.unk4 = reader.u8();
  data.struct_230 = reader.bytes(reader.u16(), 3, 7);
  return data;
}
