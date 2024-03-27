// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_657 = {
  unk0: number;
  struct_23: { unk1_0_0: number; unk1_0_1: number; struct_236: string }[];
  struct_237: Buffer;
  struct_511: Buffer;
  unk4: number;
  unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_657;
  data.unk0 = reader.u8();
  data.struct_23 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { unk1_0_0: number; unk1_0_1: number; struct_236: string };
      q.unk1_0_0 = reader.u16();
      q.unk1_0_1 = reader.u8();
      q.struct_236 = reader.string(2);
      return q;
    },
    20
  );
  data.struct_237 = reader.bytes(reader.u16(), 3, 7);
  data.struct_511 = reader.bytes(reader.u16(), 5, 7);
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  return data;
}
