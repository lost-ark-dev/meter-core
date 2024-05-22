// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as Struct_681 from "../structures/Struct_681";
import * as Struct_680 from "../structures/Struct_680";
import * as Struct_624 from "../structures/Struct_624";
import * as Struct_673 from "../structures/Struct_673";
export type Struct_577 = {
  struct_681?: Struct_681.Struct_681;
  struct_136?: Buffer;
  struct_2?: { struct_542: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number }[];
  unk2_2?: number;
  unk3_0?: Buffer;
  unk4_0?: number;
  unk4_1?: Buffer;
  unk4_2?: Buffer;
  struct_680?: Struct_680.Struct_680;
  struct_624?: Struct_624.Struct_624;
  unk7_0?: Buffer;
  struct_673?: Struct_673.Struct_673;
  unk9_0?: number;
};
export function read(reader: Read) {
  const data = {} as Struct_577;
  const unk0 = reader.u8();
  if (unk0 === 1) data.struct_681 = Struct_681.read(reader);
  if (unk0 === 2) {
    data.struct_136 = reader.bytes(reader.u16(), 3, 6);
    data.struct_2 = reader.array(
      reader.u16(),
      () => {
        const m = {} as { struct_542: Buffer; unk1_0_1: number; unk1_0_2: number; unk1_0_3: number };
        m.struct_542 = reader.bytes(reader.u16(), 10);
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
    data.unk4_0 = reader.u32();
    data.unk4_1 = reader.bytes(reader.u16(), 10, 13);
    data.unk4_2 = reader.bytes(reader.u16(), 10, 13);
  }
  if (unk0 === 5) data.struct_680 = Struct_680.read(reader);
  if (unk0 === 6) data.struct_624 = Struct_624.read(reader);
  if (unk0 === 7) data.unk7_0 = reader.bytes(9);
  if (unk0 === 8) data.struct_673 = Struct_673.read(reader);
  if (unk0 === 9) data.unk9_0 = reader.u8();
  return data;
}
