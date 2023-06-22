// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_636 = {
  struct_230: Buffer;
  struct_481: Buffer;
  unk2: number;
  struct_25: { unk1_0_0: number; unk1_0_1: number; struct_228: string }[];
  unk4: number;
  unk5: number;
};
export function read(reader: Read) {
  const data = {} as Struct_636;
  data.struct_230 = reader.bytes(reader.u16(), 5, 7);
  data.struct_481 = reader.bytes(reader.u16(), 3, 7);
  data.unk2 = reader.u8();
  data.struct_25 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { unk1_0_0: number; unk1_0_1: number; struct_228: string };
      q.unk1_0_0 = reader.u8();
      q.unk1_0_1 = reader.u16();
      q.struct_228 = reader.string(2);
      return q;
    },
    20
  );
  data.unk4 = reader.u8();
  data.unk5 = reader.u8();
  return data;
}
