// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTRaidBossKillNotify = {
  unk0: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBossKillNotify;
  data.unk0 = reader.bytes(6);
  return data;
}
export const name = "PKTRaidBossKillNotify";
export const opcode = 20341;
