// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_642 from "../structures/Struct_642";
import * as Struct_641 from "../structures/Struct_641";
import * as Struct_586 from "../structures/Struct_586";
import * as Struct_635 from "../structures/Struct_635";
export type Struct_533 = {
  struct_642?: Struct_642.Struct_642;
  struct_125?: Buffer;
  unk2_1?: number;
  struct_1?: { struct_516: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number }[];
  unk3_0?: Buffer;
  unk4_0?: number;
  unk4_1?: Buffer;
  unk4_2?: Buffer;
  struct_641?: Struct_641.Struct_641;
  struct_586?: Struct_586.Struct_586;
  unk7_0?: Buffer;
  struct_635?: Struct_635.Struct_635;
};
export function read(reader: Read) {
  const data = {} as Struct_533;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_642 = Struct_642.read(reader);
  if (unk0 === 2) {
    data.struct_125 = reader.bytes(reader.u16(), 3, 6);
    data.unk2_1 = reader.u8();
    data.struct_1 = reader.array(
      reader.u16(),
      () => {
        const e = {} as { struct_516: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number };
        e.struct_516 = reader.bytes(reader.u16(), 10);
        e.unk1_0_1 = reader.u32();
        e.unk1_0_2 = reader.u8();
        e.unk1_0_3 = reader.u8();
        return e;
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
  if (unk0 === 5) data.struct_641 = Struct_641.read(reader);
  if (unk0 === 6) data.struct_586 = Struct_586.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_635 = Struct_635.read(reader);
  return data;
}
