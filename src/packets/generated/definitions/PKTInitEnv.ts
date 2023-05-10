// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  Unk0: bigint;
  Unk1: number;
  Unk2: number;
  PlayerId: bigint;
  Unk4: number;
  struct_557: string;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_27: { struct_543: string; struct_557: string; versionString: string }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.Unk0 = reader.u64();
  data.Unk1 = reader.u8();
  data.Unk2 = reader.u32();
  data.PlayerId = reader.u64();
  data.Unk4 = reader.u32();
  data.struct_557 = reader.string(128);
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_27 = reader.array(
    reader.u16(),
    () => {
      const g = {} as any;
      g.struct_543 = reader.string(32);
      g.struct_557 = reader.string(128);
      g.versionString = reader.string(64);
      return g;
    },
    64
  );
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 29922;
