import type { Read, Write } from "../../stream";
import type { PKTRaidBegin } from "../../generated/types";
import * as BossKillData from "../structures/BossKillData";
export type RaidBegin = {
  raidResult: number;
  raidId: number;
  totalTime: bigint;
  bossKillDataList: BossKillData.BossKillDataLog[];
  endTick: bigint;
  startTick: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as RaidBegin;
  data.raidResult = reader.u8();
  data.raidId = reader.u32();
  data.totalTime = reader.u64();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader, version), 3);
  data.endTick = reader.u64();
  data.startTick = reader.u64();
  return data;
}
export function write(writer: Write, data: RaidBegin | PKTRaidBegin) {
  writer.u8(data.raidResult);
  writer.u32(data.raidId);
  writer.u64(data.totalTime);
  writer.array(data.bossKillDataList, { maxLen: 3, lenType: "u16" }, (obj: BossKillData.BossKillDataLog) => {
    BossKillData.write(writer, obj);
  });
  writer.u64(data.endTick);
  writer.u64(data.startTick);
}

export const name = "RaidBegin";
