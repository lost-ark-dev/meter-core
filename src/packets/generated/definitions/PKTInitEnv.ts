// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  struct_583: string;
  unk1: number;
  unk2: number;
  struct_30: { struct_567: string; struct_583: string; versionString: string }[];
  playerId: bigint;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  unk6: bigint;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.struct_583 = reader.string(128);
  data.unk1 = reader.u32();
  data.unk2 = reader.u8();
  data.struct_30 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_567: string; struct_583: string; versionString: string };
      i.struct_567 = reader.string(32);
      i.struct_583 = reader.string(128);
      i.versionString = reader.string(64);
      return i;
    },
    64
  );
  data.playerId = reader.u64();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.unk6 = reader.u64();
  data.unk7 = reader.u32();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 854;
