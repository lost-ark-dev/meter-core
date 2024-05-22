// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  endTick: bigint;
  unk6_m: bigint;
  bossKillDataList: BossKillData.BossKillData[];
  braveHeartCount: number;
  unk11_m: boolean;
  totalTime: bigint;
  raidId: number;
  unk5_m: bigint;
  unk4_m: bigint;
  unk0_m: boolean;
  unk1_m: boolean;
  initBraveHeartCount: number;
  startTick: bigint;
  raidResult: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.endTick = reader.u64();
  data.unk6_m = reader.u64();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.braveHeartCount = reader.u8();
  data.unk11_m = reader.bool();
  data.totalTime = reader.u64();
  data.raidId = reader.u32();
  data.unk5_m = reader.u64();
  data.unk4_m = reader.u64();
  data.unk0_m = reader.bool();
  data.unk1_m = reader.bool();
  data.initBraveHeartCount = reader.u8();
  data.startTick = reader.u64();
  data.raidResult = reader.u8();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 52798;
