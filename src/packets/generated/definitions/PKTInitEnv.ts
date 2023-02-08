// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  struct_24: { versionString: string; struct_540: string; struct_528: string }[];
  struct_540: string;
  Unk2: number;
  Unk3: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  Unk5: number;
  PlayerId: bigint;
  Unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.struct_24 = reader.array(
    reader.u16(),
    () => {
      const g = {} as any;
      g.versionString = reader.string(64);
      g.struct_540 = reader.string(128);
      g.struct_528 = reader.string(32);
      return g;
    },
    64
  );
  data.struct_540 = reader.string(128);
  data.Unk2 = reader.u32();
  data.Unk3 = reader.u32();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.Unk5 = reader.u8();
  data.PlayerId = reader.u64();
  data.Unk7 = reader.u64();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 57806;
