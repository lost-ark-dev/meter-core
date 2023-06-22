// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_643 from "../structures/Struct_643";
import * as Struct_642 from "../structures/Struct_642";
import * as Struct_587 from "../structures/Struct_587";
import * as Struct_636 from "../structures/Struct_636";
export type Struct_534 = {
  struct_643?: Struct_643.Struct_643;
  unk2_0?: number;
  struct_2?: { struct_515: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number }[];
  struct_127?: Buffer;
  unk3_0?: Buffer;
  unk4_0?: Buffer;
  unk4_1?: number;
  unk4_2?: Buffer;
  struct_642?: Struct_642.Struct_642;
  struct_587?: Struct_587.Struct_587;
  unk7_0?: Buffer;
  struct_636?: Struct_636.Struct_636;
};
export function read(reader: Read) {
  const data = {} as Struct_534;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_643 = Struct_643.read(reader);
  if (unk0 === 2) {
    data.unk2_0 = reader.u8();
    data.struct_2 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { struct_515: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number };
        m.struct_515 = reader.bytes(reader.u16(), 10);
        m.unk1_0_1 = reader.u32();
        m.unk1_0_2 = reader.u8();
        m.unk1_0_3 = reader.u8();
        return m;
      },
      3
    );
    data.struct_127 = reader.bytes(reader.u16(), 3, 6);
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_1 = reader.u32();
    data.unk4_2 = reader.bytes(reader.u16(), 10, 13);
  }
  if (unk0 === 5) data.struct_642 = Struct_642.read(reader);
  if (unk0 === 6) data.struct_587 = Struct_587.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_636 = Struct_636.read(reader);
  return data;
}
