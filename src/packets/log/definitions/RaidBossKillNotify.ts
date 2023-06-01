import type { Read, Write } from "../../stream";
import type { PKTRaidBossKillNotify } from "../../generated/types";
export type RaidBossKillNotify = {};
export function read(reader: Read, version: number) {
  const data = {} as RaidBossKillNotify;
  return data;
}
export function write(writer: Write, data: RaidBossKillNotify | PKTRaidBossKillNotify) {}

export const name = "RaidBossKillNotify";
