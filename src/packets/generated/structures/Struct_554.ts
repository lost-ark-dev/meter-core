// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_654 from "../structures/Struct_654";
import * as Struct_653 from "../structures/Struct_653";
import * as Struct_598 from "../structures/Struct_598";
import * as Struct_646 from "../structures/Struct_646";
import * as Struct_776 from "../structures/Struct_776";
export type Struct_554 = {
  struct_654?: Struct_654.Struct_654;
  struct_2?: { unk1_0_0: number; unk1_0_1: number; unk1_0_2: number; struct_514: Buffer }[];
  unk2_1?: number;
  struct_133?: Buffer;
  unk3_0?: Buffer;
  unk4_0?: number;
  unk4_1?: Buffer;
  unk4_2?: Buffer;
  struct_653?: Struct_653.Struct_653;
  struct_598?: Struct_598.Struct_598;
  unk7_0?: Buffer;
  struct_646?: Struct_646.Struct_646;
  struct_776?: Struct_776.Struct_776;
};
export function read(reader: Read) {
  const data = {} as Struct_554;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_654 = Struct_654.read(reader);
  if (unk0 === 2) {
    data.struct_2 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { unk1_0_0: number; unk1_0_1: number; unk1_0_2: number; struct_514: Buffer };
        m.unk1_0_0 = reader.u32();
        m.unk1_0_1 = reader.u8();
        m.unk1_0_2 = reader.u8();
        m.struct_514 = reader.bytes(reader.u16(), 10);
        return m;
      },
      3
    );
    data.unk2_1 = reader.u8();
    data.struct_133 = reader.bytes(reader.u16(), 3, 6);
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.u32();
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.bytes(reader.u16(), 10, 13);
  }
  if (unk0 === 5) data.struct_653 = Struct_653.read(reader);
  if (unk0 === 6) data.struct_598 = Struct_598.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_646 = Struct_646.read(reader);
  if (unk0 === 9) data.struct_776 = Struct_776.read(reader);
  return data;
}
