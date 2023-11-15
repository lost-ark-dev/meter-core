// Auto Generated, do not edit.
import { Read } from "../../stream";
import * as BossKillData from "../structures/BossKillData";
export type PKTRaidBegin = {
  totalTime: bigint;
  unk11_m: boolean;
  unk0_m: boolean;
  initBraveHeartCount: number;
  unk4_m: bigint;
  braveHeartCount: number;
  raidResult: number;
  unk1_m: boolean;
  raidId: number;
  bossKillDataList: BossKillData.BossKillData[];
  unk5_m: bigint;
  endTick: bigint;
  startTick: bigint;
  unk6_m: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTRaidBegin;
  data.totalTime = reader.u64();
  data.unk11_m = reader.bool();
  data.unk0_m = reader.bool();
  data.initBraveHeartCount = reader.u8();
  data.unk4_m = reader.u64();
  data.braveHeartCount = reader.u8();
  data.raidResult = reader.u8();
  data.unk1_m = reader.bool();
  data.raidId = reader.u32();
  data.bossKillDataList = reader.array(reader.u16(), () => BossKillData.read(reader), 3);
  data.unk5_m = reader.u64();
  data.endTick = reader.u64();
  data.startTick = reader.u64();
  data.unk6_m = reader.u64();
  return data;
}
export const name = "PKTRaidBegin";
export const opcode = 49649;
