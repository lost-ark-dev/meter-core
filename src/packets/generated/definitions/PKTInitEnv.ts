// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  playerId: bigint;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_575: string;
  unk3: number;
  struct_33: { struct_575: string; versionString: string; struct_561: string }[];
  unk5: number;
  unk6: bigint;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.playerId = reader.u64();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_575 = reader.string(128);
  data.unk3 = reader.u32();
  data.struct_33 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_575: string; versionString: string; struct_561: string };
      i.struct_575 = reader.string(128);
      i.versionString = reader.string(64);
      i.struct_561 = reader.string(32);
      return i;
    },
    64
  );
  data.unk5 = reader.u8();
  data.unk6 = reader.u64();
  data.unk7 = reader.u32();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 30631;
