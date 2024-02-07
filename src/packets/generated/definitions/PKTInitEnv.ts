// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  unk1: number;
  unk2: number;
  playerId: bigint;
  unk4: number;
  unk5: bigint;
  struct_29: { versionString: string; struct_573: string; struct_590: string }[];
  struct_590: string;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.unk1 = reader.u32();
  data.unk2 = reader.u8();
  data.playerId = reader.u64();
  data.unk4 = reader.u32();
  data.unk5 = reader.u64();
  data.struct_29 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { versionString: string; struct_573: string; struct_590: string };
      i.versionString = reader.string(64);
      i.struct_573 = reader.string(32);
      i.struct_590 = reader.string(128);
      return i;
    },
    64
  );
  data.struct_590 = reader.string(128);
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 43544;
