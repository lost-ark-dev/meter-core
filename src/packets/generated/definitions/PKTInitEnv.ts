// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  Unk0: number;
  Unk1: number;
  struct_542: string;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_27: { struct_542: string; struct_529: string; versionString: string }[];
  Unk5: bigint;
  Unk6: number;
  PlayerId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.Unk0 = reader.u8();
  data.Unk1 = reader.u32();
  data.struct_542 = reader.string(128);
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_27 = reader.array(
    reader.u16(),
    () => {
      const g = {} as any;
      g.struct_542 = reader.string(128);
      g.struct_529 = reader.string(32);
      g.versionString = reader.string(64);
      return g;
    },
    64
  );
  data.Unk5 = reader.u64();
  data.Unk6 = reader.u32();
  data.PlayerId = reader.u64();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 5818;
