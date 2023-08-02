// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  unk6_m: bigint;
  initBraveHeartCount: number;
  unk5_m: bigint;
  endTick: bigint;
  raidResult: number;
  unk0_m: boolean;
  raidId: number;
  bossKillDataList: BossKillData.BossKillData[];
  unk4_m: bigint;
  totalTime: bigint;
  startTick: bigint;
  unk1_m: boolean;
  unk11_m: boolean;
  braveHeartCount: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.unk6_m = reader.u64();
  data.initBraveHeartCount = reader.u8();
  data.unk5_m = reader.u64();
  data.endTick = reader.u64();
  data.raidResult = reader.u8();
  data.unk0_m = reader.bool();
  data.raidId = reader.u32();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk4_m = reader.u64();
  data.totalTime = reader.u64();
  data.startTick = reader.u64();
  data.unk1_m = reader.bool();
  data.unk11_m = reader.bool();
  data.braveHeartCount = reader.u8();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 8315;
