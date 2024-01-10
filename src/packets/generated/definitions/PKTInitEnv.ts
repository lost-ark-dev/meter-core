// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  unk1: bigint;
  unk2: number;
  unk3: number;
  struct_591: string;
  playerId: bigint;
  unk6: number;
  struct_32: { struct_574: string; versionString: string; struct_591: string }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.unk1 = reader.u64();
  data.unk2 = reader.u8();
  data.unk3 = reader.u32();
  data.struct_591 = reader.string(128);
  data.playerId = reader.u64();
  data.unk6 = reader.u32();
  data.struct_32 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_574: string; versionString: string; struct_591: string };
      i.struct_574 = reader.string(32);
      i.versionString = reader.string(64);
      i.struct_591 = reader.string(128);
      return i;
    },
    64
  );
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 25291;
