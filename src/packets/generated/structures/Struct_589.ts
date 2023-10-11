// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_589 = {
  unk0: number;
  unk1: number;
  unk2: number;
  struct_0: { unk1_0_0: number; struct_511: Buffer }[];
  bossKillDataList: BossKillData.BossKillData[];
};
export function read(reader: Read) {
  const data = {} as Struct_589;
  data.unk0 = reader.u8();
  data.unk1 = reader.u32();
  data.unk2 = reader.u8();
  data.struct_0 = reader.array(
    reader.u16(),
    () => {
      const o = {} as { unk1_0_0: number; struct_511: Buffer };
      o.unk1_0_0 = reader.u32();
      o.struct_511 = reader.bytes(reader.u16(), 10);
      return o;
    },
    3
  );
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  return data;
}
