// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_644 from "../structures/Struct_644";
import * as Struct_643 from "../structures/Struct_643";
import * as Struct_591 from "../structures/Struct_591";
import * as Struct_637 from "../structures/Struct_637";
export type Struct_547 = {
  struct_644?: Struct_644.Struct_644;
  unk2_0?: number;
  struct_129?: Buffer;
  struct_2?: { unk1_0_0: number; unk1_0_1: number; unk1_0_2: number; struct_511: Buffer }[];
  unk3_0?: Buffer;
  unk4_0?: number;
  unk4_1?: Buffer;
  unk4_2?: Buffer;
  struct_643?: Struct_643.Struct_643;
  struct_591?: Struct_591.Struct_591;
  unk7_0?: Buffer;
  struct_637?: Struct_637.Struct_637;
  unk9_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_547;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_644 = Struct_644.read(reader);
  if (unk0 === 2) {
    data.unk2_0 = reader.u8();
    data.struct_129 = reader.bytes(reader.u16(), 3, 6);
    data.struct_2 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { unk1_0_0: number; unk1_0_1: number; unk1_0_2: number; struct_511: Buffer };
        m.unk1_0_0 = reader.u8();
        m.unk1_0_1 = reader.u8();
        m.unk1_0_2 = reader.u32();
        m.struct_511 = reader.bytes(reader.u16(), 10);
        return m;
      },
      3
    );
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.u32();
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.bytes(reader.u16(), 10, 13);
  }
  if (unk0 === 5) data.struct_643 = Struct_643.read(reader);
  if (unk0 === 6) data.struct_591 = Struct_591.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_637 = Struct_637.read(reader);
  if (unk0 === 9) data.unk9_0 = reader.u8();
  return data;
}
