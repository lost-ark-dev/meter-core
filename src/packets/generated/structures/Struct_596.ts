// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_596 = {
  struct_0: { unk1_0_0: number; struct_513: Buffer }[];
  unk1: number;
  unk2: number;
  unk3: number;
  bossKillDataList: BossKillData.BossKillData[];
};
export function read(reader: Read) {
  const data = {} as Struct_596;
  data.struct_0 = reader.array(
    reader.u16(),
    () => {
      const o = {} as { unk1_0_0: number; struct_513: Buffer };
      o.unk1_0_0 = reader.u32();
      o.struct_513 = reader.bytes(reader.u16(), 10);
      return o;
    },
    3
  );
  data.unk1 = reader.u32();
  data.unk2 = reader.u8();
  data.unk3 = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  return data;
}
