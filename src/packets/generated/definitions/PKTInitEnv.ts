// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  unk0: number;
  unk1: number;
  unk2: number;
  struct_576: string;
  unk4: bigint;
  playerId: bigint;
  struct_29: { struct_560: string; versionString: string; struct_576: string }[];
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.unk0 = reader.u8();
  data.unk1 = reader.u32();
  data.unk2 = reader.u32();
  data.struct_576 = reader.string(128);
  data.unk4 = reader.u64();
  data.playerId = reader.u64();
  data.struct_29 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_560: string; versionString: string; struct_576: string };
      i.struct_560 = reader.string(32);
      i.versionString = reader.string(64);
      i.struct_576 = reader.string(128);
      return i;
    },
    64
  );
  data.lostArkDateTime = LostArkDateTime.read(reader);
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 37399;
