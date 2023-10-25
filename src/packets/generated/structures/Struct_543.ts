// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_641 from "../structures/Struct_641";
import * as Struct_640 from "../structures/Struct_640";
import * as Struct_587 from "../structures/Struct_587";
import * as Struct_634 from "../structures/Struct_634";
export type Struct_543 = {
  struct_641?: Struct_641.Struct_641;
  struct_1?: { unk1_0_0: number; unk1_0_1: number; struct_509: Buffer; unk1_0_3: number }[];
  unk2_1?: number;
  struct_131?: Buffer;
  unk3_0?: Buffer;
  unk4_0?: number;
  unk4_1?: Buffer;
  unk4_2?: Buffer;
  struct_640?: Struct_640.Struct_640;
  struct_587?: Struct_587.Struct_587;
  unk7_0?: Buffer;
  struct_634?: Struct_634.Struct_634;
  unk9_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_543;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_641 = Struct_641.read(reader);
  if (unk0 === 2) {
    data.struct_1 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { unk1_0_0: number; unk1_0_1: number; struct_509: Buffer; unk1_0_3: number };
        m.unk1_0_0 = reader.u8();
        m.unk1_0_1 = reader.u32();
        m.struct_509 = reader.bytes(reader.u16(), 10);
        m.unk1_0_3 = reader.u8();
        return m;
      },
      3
    );
    data.unk2_1 = reader.u8();
    data.struct_131 = reader.bytes(reader.u16(), 3, 6);
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.u32();
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.bytes(reader.u16(), 10, 13);
  }
  if (unk0 === 5) data.struct_640 = Struct_640.read(reader);
  if (unk0 === 6) data.struct_587 = Struct_587.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_634 = Struct_634.read(reader);
  if (unk0 === 9) data.unk9_0 = reader.u8();
  return data;
}
