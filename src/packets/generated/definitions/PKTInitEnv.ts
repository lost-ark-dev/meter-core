// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  unk1: bigint;
  unk2: number;
  playerId: bigint;
  unk4: number;
  struct_33: { versionString: string; struct_580: string; struct_597: string }[];
  struct_597: string;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.unk1 = reader.u64();
  data.unk2 = reader.u32();
  data.playerId = reader.u64();
  data.unk4 = reader.u32();
  data.struct_33 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { versionString: string; struct_580: string; struct_597: string };
      i.versionString = reader.string(64);
      i.struct_580 = reader.string(32);
      i.struct_597 = reader.string(128);
      return i;
    },
    64
  );
  data.struct_597 = reader.string(128);
  data.unk7 = reader.u8();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 56231;
