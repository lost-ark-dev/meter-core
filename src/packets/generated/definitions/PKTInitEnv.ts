// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  Unk1: number;
  PlayerId: bigint;
  Unk3: bigint;
  Unk4: number;
  struct_541: string;
  Unk6: number;
  struct_25: { struct_529: string; versionString: string; struct_541: string }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.Unk1 = reader.u8();
  data.PlayerId = reader.u64();
  data.Unk3 = reader.u64();
  data.Unk4 = reader.u32();
  data.struct_541 = reader.string(128);
  data.Unk6 = reader.u32();
  data.struct_25 = reader.array(
    reader.u16(),
    () => {
      const g = {} as any;
      g.struct_529 = reader.string(32);
      g.versionString = reader.string(64);
      g.struct_541 = reader.string(128);
      return g;
    },
    64
  );
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 43353;
