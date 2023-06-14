// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_643 from "../structures/Struct_643";
import * as Struct_642 from "../structures/Struct_642";
import * as Struct_586 from "../structures/Struct_586";
import * as Struct_636 from "../structures/Struct_636";
export type Struct_533 = {
  struct_643?: Struct_643.Struct_643;
  struct_1?: { unk1_0_0: number; unk1_0_1: number; unk1_0_2: number; struct_515: Buffer }[];
  unk2_1?: number;
  struct_125?: Buffer;
  unk3_0?: Buffer;
  unk4_0?: number;
  unk4_1?: Buffer;
  unk4_2?: Buffer;
  struct_642?: Struct_642.Struct_642;
  struct_586?: Struct_586.Struct_586;
  unk7_0?: Buffer;
  struct_636?: Struct_636.Struct_636;
};
export function read(reader: Read) {
  const data = {} as Struct_533;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_643 = Struct_643.read(reader);
  if (unk0 === 2) {
    data.struct_1 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { unk1_0_0: number; unk1_0_1: number; unk1_0_2: number; struct_515: Buffer };
        m.unk1_0_0 = reader.u32();
        m.unk1_0_1 = reader.u8();
        m.unk1_0_2 = reader.u8();
        m.struct_515 = reader.bytes(reader.u16(), 10);
        return m;
      },
      3
    );
    data.unk2_1 = reader.u8();
    data.struct_125 = reader.bytes(reader.u16(), 3, 6);
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.u32();
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.bytes(reader.u16(), 10, 13);
  }
  if (unk0 === 5) data.struct_642 = Struct_642.read(reader);
  if (unk0 === 6) data.struct_586 = Struct_586.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_636 = Struct_636.read(reader);
  return data;
}
