// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  playerId: bigint;
  unk1: bigint;
  struct_27: { struct_565: string; struct_581: string; versionString: string }[];
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_581: string;
  unk5: number;
  unk6: number;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.playerId = reader.u64();
  data.unk1 = reader.u64();
  data.struct_27 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_565: string; struct_581: string; versionString: string };
      i.struct_565 = reader.string(32);
      i.struct_581 = reader.string(128);
      i.versionString = reader.string(64);
      return i;
    },
    64
  );
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_581 = reader.string(128);
  data.unk5 = reader.u32();
  data.unk6 = reader.u8();
  data.unk7 = reader.u32();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 49116;
