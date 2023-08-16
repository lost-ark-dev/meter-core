// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_636 = {
  unk0: number;
  unk1: number;
  unk2: number;
  struct_22: { struct_226: string; unk1_0_1: number; unk1_0_2: number }[];
  struct_228: Buffer;
  struct_227: Buffer;
};
export function read(reader: Read) {
  const data = {} as Struct_636;
  data.unk0 = reader.u8();
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.struct_22 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { struct_226: string; unk1_0_1: number; unk1_0_2: number };
      q.struct_226 = reader.string(2);
      q.unk1_0_1 = reader.u16();
      q.unk1_0_2 = reader.u8();
      return q;
    },
    20
  );
  data.struct_228 = reader.bytes(reader.u16(), 5, 7);
  data.struct_227 = reader.bytes(reader.u16(), 3, 7);
  return data;
}
