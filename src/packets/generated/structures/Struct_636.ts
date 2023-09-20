// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_636 = {
  unk0: number;
  struct_23: { struct_228: string; unk1_0_1: number; unk1_0_2: number }[];
  unk2: number;
  struct_484: Buffer;
  struct_229: Buffer;
  unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_636;
  data.unk0 = reader.u8();
  data.struct_23 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { struct_228: string; unk1_0_1: number; unk1_0_2: number };
      q.struct_228 = reader.string(2);
      q.unk1_0_1 = reader.u16();
      q.unk1_0_2 = reader.u8();
      return q;
    },
    20
  );
  data.unk2 = reader.u8();
  data.struct_484 = reader.bytes(reader.u16(), 3, 7);
  data.struct_229 = reader.bytes(reader.u16(), 5, 7);
  data.unk5 = reader.u8();
  return data;
}
