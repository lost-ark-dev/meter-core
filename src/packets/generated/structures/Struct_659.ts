// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_659 = {
  unk0: number;
  struct_495: Buffer;
  unk2: number;
  unk3: number;
  struct_234: Buffer;
  struct_24: { unk1_0_0: number; unk1_0_1: number; struct_233: string }[];
};
export function read(reader: Read) {
  const data = {} as Struct_659;
  data.unk0 = reader.u8();
  data.struct_495 = reader.bytes(reader.u16(), 3, 7);
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.struct_234 = reader.bytes(reader.u16(), 5, 7);
  data.struct_24 = reader.array(
    reader.u16(),
    () => {
      const q = {} as { unk1_0_0: number; unk1_0_1: number; struct_233: string };
      q.unk1_0_0 = reader.u8();
      q.unk1_0_1 = reader.u16();
      q.struct_233 = reader.string(2);
      return q;
    },
    20
  );
  return data;
}
