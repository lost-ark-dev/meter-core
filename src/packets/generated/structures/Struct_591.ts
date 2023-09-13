// Auto Generated, do not edit.
import type { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type Struct_591 = {
  unk0: number;
  bossKillDataList: BossKillData.BossKillData[];
  unk2: number;
  unk3: number;
  struct_1: { struct_512: Buffer; unk1_0_1: number }[];
};
export function read(reader: Read) {
  const data = {} as Struct_591;
  data.unk0 = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk2 = reader.u32();
  data.unk3 = reader.u8();
  data.struct_1 = reader.array(
    reader.u16(),
    () => {
      const p = {} as { struct_512: Buffer; unk1_0_1: number };
      p.struct_512 = reader.bytes(reader.u16(), 10);
      p.unk1_0_1 = reader.u32();
      return p;
    },
    3
  );
  return data;
}
