// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  struct_597: string;
  unk2: number;
  struct_31: { versionString: string; struct_597: string; struct_580: string }[];
  unk4: number;
  playerId: bigint;
  unk6: bigint;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.struct_597 = reader.string(128);
  data.unk2 = reader.u8();
  data.struct_31 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { versionString: string; struct_597: string; struct_580: string };
      i.versionString = reader.string(64);
      i.struct_597 = reader.string(128);
      i.struct_580 = reader.string(32);
      return i;
    },
    64
  );
  data.unk4 = reader.u32();
  data.playerId = reader.u64();
  data.unk6 = reader.u64();
  data.unk7 = reader.u32();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 15335;
