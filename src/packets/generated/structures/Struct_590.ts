// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_590 = {
  unk0: number;
  unk1: number;
  struct_0: { unk1_0_0: number; struct_509: Buffer }[];
  bossKillDataList: BossKillData.BossKillData[];
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_590;
  data.unk0 = reader.u8();
  data.unk1 = reader.u32();
  data.struct_0 = reader.array(
    reader.u16(),
    () => {
      const o = {} as { unk1_0_0: number; struct_509: Buffer };
      o.unk1_0_0 = reader.u32();
      o.struct_509 = reader.bytes(reader.u16(), 10);
      return o;
    },
    3
  );
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk4 = reader.u8();
  return data;
}
