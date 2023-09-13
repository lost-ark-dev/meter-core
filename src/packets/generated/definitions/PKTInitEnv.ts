// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  unk0: number;
  unk1: bigint;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_576: string;
  struct_30: { versionString: string; struct_560: string; struct_576: string }[];
  unk5: number;
  playerId: bigint;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.unk0 = reader.u32();
  data.unk1 = reader.u64();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_576 = reader.string(128);
  data.struct_30 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { versionString: string; struct_560: string; struct_576: string };
      i.versionString = reader.string(64);
      i.struct_560 = reader.string(32);
      i.struct_576 = reader.string(128);
      return i;
    },
    64
  );
  data.unk5 = reader.u32();
  data.playerId = reader.u64();
  data.unk7 = reader.u8();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 52202;
