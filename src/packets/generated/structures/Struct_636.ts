// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_636 = {
  struct_23: { unk1_0_0: number; unk1_0_1: number; struct_230: string }[];
  struct_231: Buffer;
  unk2: number;
  unk3: number;
  struct_232: Buffer;
  unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_636;
  data.struct_23 = reader.array(
    reader.u16(),
    () => {
      const p = {} as { unk1_0_0: number; unk1_0_1: number; struct_230: string };
      p.unk1_0_0 = reader.u16();
      p.unk1_0_1 = reader.u8();
      p.struct_230 = reader.string(2);
      return p;
    },
    20
  );
  data.struct_231 = reader.bytes(reader.u16(), 3, 7);
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.struct_232 = reader.bytes(reader.u16(), 5, 7);
  data.unk5 = reader.u8();
  return data;
}
