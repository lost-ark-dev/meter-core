// Auto Generated, do not edit.
import type { Read } from "../../stream";
export type Struct_586 = {
  struct_0: { unk1_0_0: number; struct_515: Buffer }[];
  unk1: number;
  struct_126: Buffer;
  unk3: number;
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_586;
  data.struct_0 = reader.array(
    reader.u16(),
    () => {
      const o = {} as { unk1_0_0: number; struct_515: Buffer };
      o.unk1_0_0 = reader.u32();
      o.struct_515 = reader.bytes(reader.u16(), 10);
      return o;
    },
    3
  );
  data.unk1 = reader.u8();
  data.struct_126 = reader.bytes(reader.u16(), 3, 5);
  data.unk3 = reader.u8();
  data.unk4 = reader.u32();
  return data;
}
