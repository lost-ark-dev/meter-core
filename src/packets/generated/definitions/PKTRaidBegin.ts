// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  unk11_m: boolean;
  unk0_m: boolean;
  raidResult: number;
  bossKillDataList: BossKillData.BossKillData[];
  startTick: bigint;
  totalTime: bigint;
  unk1_m: boolean;
  unk4_m: bigint;
  unk5_m: bigint;
  endTick: bigint;
  unk6_m: bigint;
  raidId: number;
  braveHeartCount: number;
  initBraveHeartCount: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.unk11_m = reader.bool();
  data.unk0_m = reader.bool();
  data.raidResult = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.startTick = reader.u64();
  data.totalTime = reader.u64();
  data.unk1_m = reader.bool();
  data.unk4_m = reader.u64();
  data.unk5_m = reader.u64();
  data.endTick = reader.u64();
  data.unk6_m = reader.u64();
  data.raidId = reader.u32();
  data.braveHeartCount = reader.u8();
  data.initBraveHeartCount = reader.u8();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 13224;
