// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  endTick: bigint;
  unk6_m: bigint;
  raidResult: number;
  bossKillDataList: BossKillData.BossKillData[];
  unk4_m: bigint;
  unk0_m: boolean;
  unk5_m: bigint;
  startTick: bigint;
  totalTime: bigint;
  braveHeartCount: number;
  raidId: number;
  initBraveHeartCount: number;
  unk1_m: boolean;
  unk11_m: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.endTick = reader.u64();
  data.unk6_m = reader.u64();
  data.raidResult = reader.u8();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk4_m = reader.u64();
  data.unk0_m = reader.bool();
  data.unk5_m = reader.u64();
  data.startTick = reader.u64();
  data.totalTime = reader.u64();
  data.braveHeartCount = reader.u8();
  data.raidId = reader.u32();
  data.initBraveHeartCount = reader.u8();
  data.unk1_m = reader.bool();
  data.unk11_m = reader.bool();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 22851;
