// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  unk0: number;
  struct_572: string;
  playerId: bigint;
  unk3: number;
  struct_29: { struct_556: string; versionString: string; struct_572: string }[];
  unk5: bigint;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  unk7: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.unk0 = reader.u8();
  data.struct_572 = reader.string(128);
  data.playerId = reader.u64();
  data.unk3 = reader.u32();
  data.struct_29 = reader.array(
    reader.u16(),
    () => {
      const i = {} as { struct_556: string; versionString: string; struct_572: string };
      i.struct_556 = reader.string(32);
      i.versionString = reader.string(64);
      i.struct_572 = reader.string(128);
      return i;
    },
    64
  );
  data.unk5 = reader.u64();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.unk7 = reader.u32();
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 28091;
