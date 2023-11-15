// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_652 from "../structures/Struct_652";
import * as Struct_651 from "../structures/Struct_651";
import * as Struct_596 from "../structures/Struct_596";
import * as Struct_644 from "../structures/Struct_644";
import * as Struct_773 from "../structures/Struct_773";
export type Struct_552 = {
  struct_652?: Struct_652.Struct_652;
  struct_1?: { struct_513: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number }[];
  struct_128?: Buffer;
  unk2_2?: number;
  unk3_0?: Buffer;
  unk4_0?: Buffer;
  unk4_1?: number;
  unk4_2?: Buffer;
  struct_651?: Struct_651.Struct_651;
  struct_596?: Struct_596.Struct_596;
  unk7_0?: Buffer;
  struct_644?: Struct_644.Struct_644;
  struct_773?: Struct_773.Struct_773;
};
export function read(reader: Read) {
  const data = {} as Struct_552;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_652 = Struct_652.read(reader);
  if (unk0 === 2) {
    data.struct_1 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { struct_513: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number };
        m.struct_513 = reader.bytes(reader.u16(), 10);
        m.unk1_0_1 = reader.u8();
        m.unk1_0_2 = reader.u32();
        m.unk1_0_3 = reader.u8();
        return m;
      },
      3
    );
    data.struct_128 = reader.bytes(reader.u16(), 3, 6);
    data.unk2_2 = reader.u8();
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_1 = reader.u32();
    data.unk4_2 = reader.bytes(reader.u16(), 10, 13);
  }
  if (unk0 === 5) data.struct_651 = Struct_651.read(reader);
  if (unk0 === 6) data.struct_596 = Struct_596.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_644 = Struct_644.read(reader);
  if (unk0 === 9) data.struct_773 = Struct_773.read(reader);
  return data;
}
