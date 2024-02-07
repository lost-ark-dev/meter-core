// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_605 = {
  struct_1: { unk1_0_0: number; struct_523: Buffer }[];
  unk1: number;
  unk2: number;
  bossKillDataList: BossKillData.BossKillData[];
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_605;
  data.struct_1 = reader.array(
    reader.u16(),
    () => {
      const o = {} as { unk1_0_0: number; struct_523: Buffer };
      o.unk1_0_0 = reader.u32();
      o.struct_523 = reader.bytes(reader.u16(), 10);
      return o;
    },
    3
  );
  data.unk1 = reader.u32();
  data.unk2 = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk4 = reader.u8();
  return data;
}
