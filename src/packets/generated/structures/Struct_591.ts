// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_591 = {
  unk0: number;
  unk1: number;
  struct_1: { struct_511: Buffer; unk1_0_1: number }[];
  unk3: number;
  bossKillDataList: BossKillData.BossKillData[];
};
export function read(reader: Read) {
  const data = {} as Struct_591;
  data.unk0 = reader.u8();
  data.unk1 = reader.u32();
  data.struct_1 = reader.array(
    reader.u16(),
    () => {
      const o = {} as { struct_511: Buffer; unk1_0_1: number };
      o.struct_511 = reader.bytes(reader.u16(), 10);
      o.unk1_0_1 = reader.u32();
      return o;
    },
    3
  );
  data.unk3 = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  return data;
}
