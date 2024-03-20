// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_666 from "../structures/Struct_666";
import * as Struct_665 from "../structures/Struct_665";
import * as Struct_612 from "../structures/Struct_612";
import * as Struct_658 from "../structures/Struct_658";
export type Struct_567 = {
  struct_666?: Struct_666.Struct_666;
  struct_137?: Buffer;
  unk2_1?: number;
  struct_2?: { unk1_0_0: number; unk1_0_1: number; struct_530: Buffer; unk1_0_3: number }[];
  unk3_0?: Buffer;
  unk4_0?: Buffer;
  unk4_1?: Buffer;
  unk4_2?: number;
  struct_665?: Struct_665.Struct_665;
  struct_612?: Struct_612.Struct_612;
  unk7_0?: Buffer;
  struct_658?: Struct_658.Struct_658;
  unk9_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_567;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_666 = Struct_666.read(reader);
  if (unk0 === 2) {
    data.struct_137 = reader.bytes(reader.u16(), 3, 6);
    data.unk2_1 = reader.u8();
    data.struct_2 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { unk1_0_0: number; unk1_0_1: number; struct_530: Buffer; unk1_0_3: number };
        m.unk1_0_0 = reader.u8();
        m.unk1_0_1 = reader.u32();
        m.struct_530 = reader.bytes(reader.u16(), 10);
        m.unk1_0_3 = reader.u8();
        return m;
      },
      3
    );
  }
  if (unk0 === 3) data.unk3_0 = reader.bytes(26);
  if (unk0 === 4) {
    data.unk4_0 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.u32();
  }
  if (unk0 === 5) data.struct_665 = Struct_665.read(reader);
  if (unk0 === 6) data.struct_612 = Struct_612.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_658 = Struct_658.read(reader);
  if (unk0 === 9) data.unk9_0 = reader.u8();
  return data;
}
