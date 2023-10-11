// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_642 from "../structures/Struct_642";
import * as Struct_641 from "../structures/Struct_641";
import * as Struct_589 from "../structures/Struct_589";
import * as Struct_635 from "../structures/Struct_635";
export type Struct_545 = {
  struct_642?: Struct_642.Struct_642;
  struct_129?: Buffer;
  unk2_1?: number;
  struct_1?: { struct_511: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number }[];
  unk3_0?: Buffer;
  unk4_0?: Buffer;
  unk4_1?: number;
  unk4_2?: Buffer;
  struct_641?: Struct_641.Struct_641;
  struct_589?: Struct_589.Struct_589;
  unk7_0?: Buffer;
  struct_635?: Struct_635.Struct_635;
  unk9_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_545;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_642 = Struct_642.read(reader);
  if (unk0 === 2) {
    data.struct_129 = reader.bytes(reader.u16(), 3, 6);
    data.unk2_1 = reader.u8();
    data.struct_1 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { struct_511: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number };
        m.struct_511 = reader.bytes(reader.u16(), 10);
        m.unk1_0_1 = reader.u32();
        m.unk1_0_2 = reader.u8();
        m.unk1_0_3 = reader.u8();
        return m;
      },
      3
    );
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_1 = reader.u32();
    data.unk4_2 = reader.bytes(reader.u16(), 10, 13);
  }
  if (unk0 === 5) data.struct_641 = Struct_641.read(reader);
  if (unk0 === 6) data.struct_589 = Struct_589.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_635 = Struct_635.read(reader);
  if (unk0 === 9) data.unk9_0 = reader.u8();
  return data;
}
