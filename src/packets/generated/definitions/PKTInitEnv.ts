// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  Unk0: number;
  Unk1: number;
  struct_23: { struct_541: string; struct_528: string; versionString: string }[];
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_541: string;
  PlayerId: bigint;
  Unk6: bigint;
  Unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u8();
  data.struct_23 = reader.array(
    reader.u16(),
    () => {
      const g = {} as any;
      g.struct_541 = reader.string(128);
      g.struct_528 = reader.string(32);
      g.versionString = reader.string(64);
      return g;
    },
    64
  );
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_541 = reader.string(128);
  data.PlayerId = reader.u64();
  data.Unk6 = reader.u64();
  data.Unk7 = reader.u32();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 8280;
