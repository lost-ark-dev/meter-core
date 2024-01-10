// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_606 = {
  bossKillDataList: BossKillData.BossKillData[];
  unk1: number;
  unk2: number;
  unk3: number;
  struct_2: { struct_522: Buffer; unk1_0_1: number }[];
};
export function read(reader: Read) {
  const data = {} as Struct_606;
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk1 = reader.u8();
  data.unk2 = reader.u8();
  data.unk3 = reader.u32();
  data.struct_2 = reader.array(
    reader.u16(),
    () => {
      const p = {} as { struct_522: Buffer; unk1_0_1: number };
      p.struct_522 = reader.bytes(reader.u16(), 10);
      p.unk1_0_1 = reader.u32();
      return p;
    },
    3
  );
  return data;
}
