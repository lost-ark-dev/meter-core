// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  struct_575: string;
  unk1: number;
  unk2: number;
  playerId: bigint;
  struct_31: { struct_559: string; versionString: string; struct_575: string }[];
  unk5: bigint;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.struct_575 = reader.string(128);
  data.unk1 = reader.u32();
  data.unk2 = reader.u8();
  data.playerId = reader.u64();
  data.struct_31 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_559: string; versionString: string; struct_575: string };
      i.struct_559 = reader.string(32);
      i.versionString = reader.string(64);
      i.struct_575 = reader.string(128);
      return i;
    },
    64
  );
  data.unk5 = reader.u64();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.unk7 = reader.u32();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 20482;
