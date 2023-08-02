// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  struct_574: string;
  struct_30: { struct_574: string; struct_560: string; versionString: string }[];
  unk2: bigint;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  unk4: number;
  unk5: number;
  unk6: number;
  playerId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.struct_574 = reader.string(128);
  data.struct_30 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_574: string; struct_560: string; versionString: string };
      i.struct_574 = reader.string(128);
      i.struct_560 = reader.string(32);
      i.versionString = reader.string(64);
      return i;
    },
    64
  );
  data.unk2 = reader.u64();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.unk4 = reader.u32();
  data.unk5 = reader.u8();
  data.unk6 = reader.u32();
  data.playerId = reader.u64();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 40210;
