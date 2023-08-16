// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  unk1: number;
  struct_28: { struct_559: string; versionString: string; struct_575: string }[];
  unk3: number;
  unk4: bigint;
  struct_575: string;
  playerId: bigint;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.unk1 = reader.u32();
  data.struct_28 = reader.array(
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
  data.unk3 = reader.u8();
  data.unk4 = reader.u64();
  data.struct_575 = reader.string(128);
  data.playerId = reader.u64();
  data.unk7 = reader.u32();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 37399;
