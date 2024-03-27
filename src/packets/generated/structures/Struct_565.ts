// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_665 from "../structures/Struct_665";
import * as Struct_664 from "../structures/Struct_664";
import * as Struct_610 from "../structures/Struct_610";
import * as Struct_657 from "../structures/Struct_657";
export type Struct_565 = {
  struct_665?: Struct_665.Struct_665;
  unk2_0?: number;
  struct_1?: { unk1_0_0: number; unk1_0_1: number; struct_525: Buffer; unk1_0_3: number }[];
  struct_133?: Buffer;
  unk3_0?: Buffer;
  unk4_0?: Buffer;
  unk4_1?: Buffer;
  unk4_2?: number;
  struct_664?: Struct_664.Struct_664;
  struct_610?: Struct_610.Struct_610;
  unk7_0?: Buffer;
  struct_657?: Struct_657.Struct_657;
  unk9_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_565;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_665 = Struct_665.read(reader);
  if (unk0 === 2) {
    data.unk2_0 = reader.u8();
    data.struct_1 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { unk1_0_0: number; unk1_0_1: number; struct_525: Buffer; unk1_0_3: number };
        m.unk1_0_0 = reader.u32();
        m.unk1_0_1 = reader.u8();
        m.struct_525 = reader.bytes(reader.u16(), 10);
        m.unk1_0_3 = reader.u8();
        return m;
      },
      3
    );
    data.struct_133 = reader.bytes(reader.u16(), 3, 6);
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.u32();
  }
  if (unk0 === 5) data.struct_664 = Struct_664.read(reader);
  if (unk0 === 6) data.struct_610 = Struct_610.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_657 = Struct_657.read(reader);
  if (unk0 === 9) data.unk9_0 = reader.u8();
  return data;
}
