// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_590 = {
  unk0: number;
  struct_0: { struct_511: Buffer; unk1_0_1: number }[];
  unk2: number;
  bossKillDataList: BossKillData.BossKillData[];
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_590;
  data.unk0 = reader.u32();
  data.struct_0 = reader.array(
    reader.u16(),
    () => {
      const o = {} as { struct_511: Buffer; unk1_0_1: number };
      o.struct_511 = reader.bytes(reader.u16(), 10);
      o.unk1_0_1 = reader.u32();
      return o;
    },
    3
  );
  data.unk2 = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk4 = reader.u8();
  return data;
}
