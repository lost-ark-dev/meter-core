// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_586 = {
  bossKillDataList: BossKillData.BossKillData[];
  unk1: number;
  unk2: number;
  struct_0: { unk1_0_0: number; struct_511: Buffer }[];
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_586;
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk1 = reader.u8();
  data.unk2 = reader.u32();
  data.struct_0 = reader.array(
    reader.u16(),
    () => {
      const p = {} as { unk1_0_0: number; struct_511: Buffer };
      p.unk1_0_0 = reader.u32();
      p.struct_511 = reader.bytes(reader.u16(), 10);
      return p;
    },
    3
  );
  data.unk4 = reader.u8();
  return data;
}
