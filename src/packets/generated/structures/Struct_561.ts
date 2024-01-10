// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_662 from "../structures/Struct_662";
import * as Struct_661 from "../structures/Struct_661";
import * as Struct_606 from "../structures/Struct_606";
import * as Struct_654 from "../structures/Struct_654";
export type Struct_561 = {
  struct_662?: Struct_662.Struct_662;
  struct_136?: Buffer;
  struct_3?: { struct_522: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number }[];
  unk2_2?: number;
  unk3_0?: Buffer;
  unk4_0?: Buffer;
  unk4_1?: Buffer;
  unk4_2?: number;
  struct_661?: Struct_661.Struct_661;
  struct_606?: Struct_606.Struct_606;
  unk7_0?: Buffer;
  struct_654?: Struct_654.Struct_654;
  unk9_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_561;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_662 = Struct_662.read(reader);
  if (unk0 === 2) {
    data.struct_136 = reader.bytes(reader.u16(), 3, 6);
    data.struct_3 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { struct_522: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number };
        m.struct_522 = reader.bytes(reader.u16(), 10);
        m.unk1_0_1 = reader.u32();
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
  if (unk0 === 5) data.struct_661 = Struct_661.read(reader);
  if (unk0 === 6) data.struct_606 = Struct_606.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_654 = Struct_654.read(reader);
  if (unk0 === 9) data.unk9_0 = reader.u8();
  return data;
}
