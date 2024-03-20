// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_658 = {
  struct_235: Buffer;
  unk1: number;
  unk2: number;
  unk3: number;
  struct_234: Buffer;
  struct_26: { unk1_0_0: number; struct_233: string; unk1_0_2: number }[];
};
export function read(reader: Read) {
  const data = {} as Struct_658;
  data.struct_235 = reader.bytes(reader.u16(), 5, 7);
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.struct_234 = reader.bytes(reader.u16(), 3, 7);
  data.struct_26 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { unk1_0_0: number; struct_233: string; unk1_0_2: number };
      q.unk1_0_0 = reader.u16();
      q.struct_233 = reader.string(2);
      q.unk1_0_2 = reader.u8();
      return q;
    },
    20
  );
  return data;
}
