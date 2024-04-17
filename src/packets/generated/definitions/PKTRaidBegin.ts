// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  initBraveHeartCount: number;
  unk0_m: boolean;
  unk4_m: bigint;
  unk5_m: bigint;
  raidResult: number;
  unk1_m: boolean;
  startTick: bigint;
  unk6_m: bigint;
  unk11_m: boolean;
  totalTime: bigint;
  bossKillDataList: BossKillData.BossKillData[];
  braveHeartCount: number;
  raidId: number;
  endTick: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.initBraveHeartCount = reader.u8();
  data.unk0_m = reader.bool();
  data.unk4_m = reader.u64();
  data.unk5_m = reader.u64();
  data.raidResult = reader.u8();
  data.unk1_m = reader.bool();
  data.startTick = reader.u64();
  data.unk6_m = reader.u64();
  data.unk11_m = reader.bool();
  data.totalTime = reader.u64();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.braveHeartCount = reader.u8();
  data.raidId = reader.u32();
  data.endTick = reader.u64();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 26077;
