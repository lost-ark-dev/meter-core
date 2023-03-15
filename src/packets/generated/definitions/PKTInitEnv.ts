// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  Unk0: number;
  Unk1: bigint;
  Unk2: number;
  struct_542: string;
  PlayerId: bigint;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  Unk6: number;
  struct_27: { struct_530: string; versionString: string; struct_542: string }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.Unk0 = reader.u32();
  data.Unk1 = reader.u64();
  data.Unk2 = reader.u32();
  data.struct_542 = reader.string(128);
  data.PlayerId = reader.u64();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.Unk6 = reader.u8();
  data.struct_27 = reader.array(
    reader.u16(),
    () => {
      const g = {} as any;
      g.struct_530 = reader.string(32);
      g.versionString = reader.string(64);
      g.struct_542 = reader.string(128);
      return g;
    },
    64
  );
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 16275;
