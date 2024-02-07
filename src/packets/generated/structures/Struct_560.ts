// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_661 from "../structures/Struct_661";
import * as Struct_660 from "../structures/Struct_660";
import * as Struct_605 from "../structures/Struct_605";
import * as Struct_653 from "../structures/Struct_653";
export type Struct_560 = {
  struct_661?: Struct_661.Struct_661;
  struct_132?: Buffer;
  struct_2?: { unk1_0_0: number; struct_523: Buffer; unk1_0_2: number; unk1_0_3: number }[];
  unk2_2?: number;
  unk3_0?: Buffer;
  unk4_0?: Buffer;
  unk4_1?: Buffer;
  unk4_2?: number;
  struct_660?: Struct_660.Struct_660;
  struct_605?: Struct_605.Struct_605;
  unk7_0?: Buffer;
  struct_653?: Struct_653.Struct_653;
  unk9_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_560;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_661 = Struct_661.read(reader);
  if (unk0 === 2) {
    data.struct_132 = reader.bytes(reader.u16(), 3, 6);
    data.struct_2 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { unk1_0_0: number; struct_523: Buffer; unk1_0_2: number; unk1_0_3: number };
        m.unk1_0_0 = reader.u32();
        m.struct_523 = reader.bytes(reader.u16(), 10);
        m.unk1_0_2 = reader.u8();
        m.unk1_0_3 = reader.u8();
        return m;
      },
      3
    );
    data.unk2_2 = reader.u8();
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.u32();
  }
  if (unk0 === 5) data.struct_660 = Struct_660.read(reader);
  if (unk0 === 6) data.struct_605 = Struct_605.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_653 = Struct_653.read(reader);
  if (unk0 === 9) data.unk9_0 = reader.u8();
  return data;
}
