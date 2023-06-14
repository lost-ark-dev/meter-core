// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  struct_574: string;
  playerId: bigint;
  unk2: bigint;
  unk3: number;
  unk4: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_30: { struct_560: string; struct_574: string; versionString: string }[];
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.struct_574 = reader.string(128);
  data.playerId = reader.u64();
  data.unk2 = reader.u64();
  data.unk3 = reader.u32();
  data.unk4 = reader.u8();
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
  data.unk7 = reader.u32();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 45410;
