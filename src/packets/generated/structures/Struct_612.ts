// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_612 = {
  unk0: number;
  bossKillDataList: BossKillData.BossKillData[];
  struct_1: { unk1_0_0: number; struct_524: Buffer }[];
  unk3: number;
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_612;
  data.unk0 = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.struct_1 = reader.array(
    reader.u16(),
    () => {
      const p = {} as { unk1_0_0: number; struct_524: Buffer };
      p.unk1_0_0 = reader.u32();
      p.struct_524 = reader.bytes(reader.u16(), 10);
      return p;
    },
    3
  );
  data.unk3 = reader.u8();
  data.unk4 = reader.u32();
  return data;
}
