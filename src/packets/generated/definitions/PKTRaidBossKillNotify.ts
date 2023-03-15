// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTRaidBossKillNotify = {
  Unk0: Buffer;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBossKillNotify;
  data.Unk0 = reader.bytes(7);
  return data;
}
export const name = "PKTRaidBossKillNotify";
export const opcode = 35914;
