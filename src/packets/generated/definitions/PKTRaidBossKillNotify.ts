// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTRaidBossKillNotify = {
  typeId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBossKillNotify;
  data.typeId = reader.u32();
  reader.skip(1);
  return data;
}
export const name = "PKTRaidBossKillNotify";
export const opcode = 54487;
