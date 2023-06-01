import type { Read, Write } from "../../stream";
import type { PKTRaidResult } from "../../generated/types";
export type RaidResult = {};
export function read(reader: Read, version: number) {
  const data = {} as RaidResult;
  return data;
}
export function write(writer: Write, data: RaidResult | PKTRaidResult) {}

export const name = "RaidResult";
