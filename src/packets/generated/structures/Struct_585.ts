// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_585 = {
  struct_0: { struct_514: Buffer; unk1_0_1: number }[];
  unk1: number;
  bossKillDataList: BossKillData.BossKillData[];
  unk3: number;
  unk4: number;
};
export function read(reader: Read) {
  const data = {} as Struct_585;
  data.struct_0 = reader.array(
    reader.u16(),
    () => {
      const o = {} as { struct_514: Buffer; unk1_0_1: number };
      o.struct_514 = reader.bytes(reader.u16(), 10);
      o.unk1_0_1 = reader.u32();
      return o;
    },
    3
  );
  data.unk1 = reader.u32();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk3 = reader.u8();
  data.unk4 = reader.u8();
  return data;
}
