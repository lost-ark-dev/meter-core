// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_587 = {
  unk0: number;
  unk1: number;
  struct_1: { struct_515: Buffer; unk1_0_1: number }[];
  bossKillDataList: BossKillData.BossKillData[];
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_587;
  data.unk0 = reader.u8();
  data.unk1 = reader.u32();
  data.struct_1 = reader.array(
    reader.u16(),
    () => {
      const o = {} as { struct_515: Buffer; unk1_0_1: number };
      o.struct_515 = reader.bytes(reader.u16(), 10);
      o.unk1_0_1 = reader.u32();
      return o;
    },
    3
  );
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk4 = reader.u8();
  return data;
}
