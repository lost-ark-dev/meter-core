// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  unk6_m: bigint;
  unk5_m: bigint;
  raidResult: number;
  initBraveHeartCount: number;
  totalTime: bigint;
  endTick: bigint;
  bossKillDataList: BossKillData.BossKillData[];
  unk11_m: boolean;
  unk4_m: bigint;
  braveHeartCount: number;
  unk1_m: boolean;
  raidId: number;
  unk0_m: boolean;
  startTick: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.unk6_m = reader.u64();
  data.unk5_m = reader.u64();
  data.raidResult = reader.u8();
  data.initBraveHeartCount = reader.u8();
  data.totalTime = reader.u64();
  data.endTick = reader.u64();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk11_m = reader.bool();
  data.unk4_m = reader.u64();
  data.braveHeartCount = reader.u8();
  data.unk1_m = reader.bool();
  data.raidId = reader.u32();
  data.unk0_m = reader.bool();
  data.startTick = reader.u64();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 5602;
