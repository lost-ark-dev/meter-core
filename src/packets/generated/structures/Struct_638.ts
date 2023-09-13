// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_638 = {
  unk0: number;
  struct_226: Buffer;
  unk2: number;
  struct_23: { unk1_0_0: number; unk1_0_1: number; struct_224: string }[];
  unk4: number;
  struct_225: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_638;
  data.unk0 = reader.u8();
  data.struct_226 = reader.bytes(reader.u16(), 5, 7);
  data.unk2 = reader.u8();
  data.struct_23 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { unk1_0_0: number; unk1_0_1: number; struct_224: string };
      q.unk1_0_0 = reader.u16();
      q.unk1_0_1 = reader.u8();
      q.struct_224 = reader.string(2);
      return q;
    },
    20
  );
  data.unk4 = reader.u8();
  data.struct_225 = reader.bytes(reader.u16(), 3, 7);
  return data;
}
