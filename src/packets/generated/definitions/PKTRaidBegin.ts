// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  unk11_m: boolean;
  initBraveHeartCount: number;
  braveHeartCount: number;
  raidId: number;
  unk0_m: boolean;
  bossKillDataList: BossKillData.BossKillData[];
  endTick: bigint;
  unk1_m: boolean;
  startTick: bigint;
  totalTime: bigint;
  unk4_m: bigint;
  raidResult: number;
  unk5_m: bigint;
  unk6_m: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.unk11_m = reader.bool();
  data.initBraveHeartCount = reader.u8();
  data.braveHeartCount = reader.u8();
  data.raidId = reader.u32();
  data.unk0_m = reader.bool();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.endTick = reader.u64();
  data.unk1_m = reader.bool();
  data.startTick = reader.u64();
  data.totalTime = reader.u64();
  data.unk4_m = reader.u64();
  data.raidResult = reader.u8();
  data.unk5_m = reader.u64();
  data.unk6_m = reader.u64();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 38509;
