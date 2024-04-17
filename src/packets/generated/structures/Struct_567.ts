// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_667 from "../structures/Struct_667";
import * as Struct_666 from "../structures/Struct_666";
import * as Struct_612 from "../structures/Struct_612";
import * as Struct_659 from "../structures/Struct_659";
export type Struct_567 = {
  struct_667?: Struct_667.Struct_667;
  unk2_0?: number;
  struct_2?: { struct_524: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number }[];
  struct_134?: Buffer;
  unk3_0?: Buffer;
  unk4_0?: Buffer;
  unk4_1?: Buffer;
  unk4_2?: number;
  struct_666?: Struct_666.Struct_666;
  struct_612?: Struct_612.Struct_612;
  unk7_0?: Buffer;
  struct_659?: Struct_659.Struct_659;
  unk9_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_567;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_667 = Struct_667.read(reader);
  if (unk0 === 2) {
    data.unk2_0 = reader.u8();
    data.struct_2 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { struct_524: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number };
        m.struct_524 = reader.bytes(reader.u16(), 10);
        m.unk1_0_1 = reader.u32();
        m.unk1_0_2 = reader.u8();
        m.unk1_0_3 = reader.u8();
        return m;
      },
      3
    );
    data.struct_134 = reader.bytes(reader.u16(), 3, 6);
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.u32();
  }
  if (unk0 === 5) data.struct_666 = Struct_666.read(reader);
  if (unk0 === 6) data.struct_612 = Struct_612.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_659 = Struct_659.read(reader);
  if (unk0 === 9) data.unk9_0 = reader.u8();
  return data;
}
