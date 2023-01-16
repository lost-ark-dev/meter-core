// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as LostArkDateTime from "../../common/LostArkDateTime";
export type PKTInitEnv = {
  Unk0: number;
  PlayerId: bigint;
  lostArkDateTime: LostArkDateTime.LostArkDateTime;
  Unk3: number;
  Unk4: number;
  Unk5: bigint;
  struct_544: string;
  struct_26: { struct_544: string; versionString: string; struct_531: string }[];
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTInitEnv;
  data.Unk0 = reader.u8();
  data.PlayerId = reader.u64();
  data.lostArkDateTime = LostArkDateTime.read(reader);
  data.Unk3 = reader.u32();
  data.Unk4 = reader.u32();
  data.Unk5 = reader.u64();
  data.struct_544 = reader.string(128);
  data.struct_26 = reader.array(
    reader.u16(),
    () => {
      const T = {} as any;
      T.struct_544 = reader.string(128);
      T.versionString = reader.string(64);
      T.struct_531 = reader.string(32);
      return T;
    },
    64
  );
  return data;
}
export const name = "PKTInitEnv";
export const opcode = 12201;
