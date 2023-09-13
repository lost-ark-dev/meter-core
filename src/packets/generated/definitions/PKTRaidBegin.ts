// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  endTick: bigint;
  startTick: bigint;
  unk0_m: boolean;
  braveHeartCount: number;
  raidResult: number;
  totalTime: bigint;
  unk6_m: bigint;
  unk5_m: bigint;
  unk11_m: boolean;
  bossKillDataList: BossKillData.BossKillData[];
  unk1_m: boolean;
  unk4_m: bigint;
  initBraveHeartCount: number;
  raidId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.endTick = reader.u64();
  data.startTick = reader.u64();
  data.unk0_m = reader.bool();
  data.braveHeartCount = reader.u8();
  data.raidResult = reader.u8();
  data.totalTime = reader.u64();
  data.unk6_m = reader.u64();
  data.unk5_m = reader.u64();
  data.unk11_m = reader.bool();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk1_m = reader.bool();
  data.unk4_m = reader.u64();
  data.initBraveHeartCount = reader.u8();
  data.raidId = reader.u32();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 47955;
