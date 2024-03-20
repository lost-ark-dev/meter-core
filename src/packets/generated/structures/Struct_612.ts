// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_612 = {
  unk0: number;
  struct_1: { struct_530: Buffer; unk1_0_1: number }[];
  unk2: number;
  bossKillDataList: BossKillData.BossKillData[];
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_612;
  data.unk0 = reader.u8();
  data.struct_1 = reader.array(
    reader.u16(),
    () => {
      const o = {} as { struct_530: Buffer; unk1_0_1: number };
      o.struct_530 = reader.bytes(reader.u16(), 10);
      o.unk1_0_1 = reader.u32();
      return o;
    },
    3
  );
  data.unk2 = reader.u32();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk4 = reader.u8();
  return data;
}
