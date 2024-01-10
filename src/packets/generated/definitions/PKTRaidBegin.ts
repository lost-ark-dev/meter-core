// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  unk5_m: bigint;
  unk4_m: bigint;
  unk6_m: bigint;
  totalTime: bigint;
  bossKillDataList: BossKillData.BossKillData[];
  startTick: bigint;
  raidResult: number;
  endTick: bigint;
  unk0_m: boolean;
  braveHeartCount: number;
  unk1_m: boolean;
  initBraveHeartCount: number;
  unk11_m: boolean;
  raidId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.unk5_m = reader.u64();
  data.unk4_m = reader.u64();
  data.unk6_m = reader.u64();
  data.totalTime = reader.u64();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.startTick = reader.u64();
  data.raidResult = reader.u8();
  data.endTick = reader.u64();
  data.unk0_m = reader.bool();
  data.braveHeartCount = reader.u8();
  data.unk1_m = reader.bool();
  data.initBraveHeartCount = reader.u8();
  data.unk11_m = reader.bool();
  data.raidId = reader.u32();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 31743;
