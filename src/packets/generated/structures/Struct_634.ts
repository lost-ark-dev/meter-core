// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_634 = {
  unk0: number;
  struct_482: Buffer;
  unk2: number;
  struct_22: { unk1_0_0: number; unk1_0_1: number; struct_230: string }[];
  struct_231: Buffer;
  unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_634;
  data.unk0 = reader.u8();
  data.struct_482 = reader.bytes(reader.u16(), 3, 7);
  data.unk2 = reader.u8();
  data.struct_22 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { unk1_0_0: number; unk1_0_1: number; struct_230: string };
      q.unk1_0_0 = reader.u16();
      q.unk1_0_1 = reader.u8();
      q.struct_230 = reader.string(2);
      return q;
    },
    20
  );
  data.struct_231 = reader.bytes(reader.u16(), 5, 7);
  data.unk5 = reader.u8();
  return data;
}
