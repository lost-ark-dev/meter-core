// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  struct_29: { struct_558: string; struct_574: string; versionString: string }[];
  unk1: number;
  struct_574: string;
  unk3: bigint;
  unk4: number;
  unk5: number;
  playerId: bigint;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.struct_29 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_558: string; struct_574: string; versionString: string };
      i.struct_558 = reader.string(32);
      i.struct_574 = reader.string(128);
      i.versionString = reader.string(64);
      return i;
    },
    64
  );
  data.unk1 = reader.u32();
  data.struct_574 = reader.string(128);
  data.unk3 = reader.u64();
  data.unk4 = reader.u8();
  data.unk5 = reader.u32();
  data.playerId = reader.u64();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 51728;
