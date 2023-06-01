// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  unk0: bigint;
  unk1: number;
  unk2: number;
  playerId: bigint;
  unk4: number;
  struct_574: string;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_30: { struct_560: string; struct_574: string; versionString: string }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.unk0 = reader.u64();
  data.unk1 = reader.u8();
  data.unk2 = reader.u32();
  data.playerId = reader.u64();
  data.unk4 = reader.u32();
  data.struct_574 = reader.string(128);
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_30 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_560: string; struct_574: string; versionString: string };
      i.struct_560 = reader.string(32);
      i.struct_574 = reader.string(128);
      i.versionString = reader.string(64);
      return i;
    },
    64
  );
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 29922;
