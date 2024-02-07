import type { Read, Write } from "../../stream";
import type { PKTRaidResult } from "../../generated/types";
export type RaidResult = {
  raidResult: number;
};
export function read(reader: Read, version: number) {
  const data = {} as RaidResult;
  if (version >= 3) {
    data.raidResult = reader.u8();
  } else {
    data.raidResult = 0;
  }
  return data;
}
export function write(writer: Write, data: RaidResult | PKTRaidResult) {
  writer.u8(data.raidResult);
}

export const name = "RaidResult";
