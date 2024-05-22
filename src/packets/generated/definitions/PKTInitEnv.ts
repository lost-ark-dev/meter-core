// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  struct_31: { struct_609: string; struct_592: string; versionString: string }[];
  unk1: number;
  playerId: bigint;
  unk3: number;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  unk5: number;
  struct_609: string;
  unk7: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.struct_31 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_609: string; struct_592: string; versionString: string };
      i.struct_609 = reader.string(128);
      i.struct_592 = reader.string(32);
      i.versionString = reader.string(64);
      return i;
    },
    64
  );
  data.unk1 = reader.u8();
  data.playerId = reader.u64();
  data.unk3 = reader.u32();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.unk5 = reader.u32();
  data.struct_609 = reader.string(128);
  data.unk7 = reader.u64();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 12940;
