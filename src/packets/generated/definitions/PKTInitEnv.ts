// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  struct_573: string;
  struct_28: { struct_559: string; versionString: string; struct_573: string }[];
  unk2: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  unk4: bigint;
  playerId: bigint;
  unk6: number;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.struct_573 = reader.string(128);
  data.struct_28 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_559: string; versionString: string; struct_573: string };
      i.struct_559 = reader.string(32);
      i.versionString = reader.string(64);
      i.struct_573 = reader.string(128);
      return i;
    },
    64
  );
  data.unk2 = reader.u8();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.unk4 = reader.u64();
  data.playerId = reader.u64();
  data.unk6 = reader.u32();
  data.unk7 = reader.u32();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 37725;
