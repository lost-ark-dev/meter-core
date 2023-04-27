import type { Read, Write } from "../../stream";
import type { PKTParalyzationStateNotify } from "../../generated/types";
export type ParalyzationStateNotify = {
  Enable: boolean;
  ParalyzationPoint: number;
  DecreasePoint: number;
  ParalyzationMaxPoint: number;
  NoHitCheckTime: number;
  HitCheckTime: number;
  ObjectId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as ParalyzationStateNotify;
  data.Enable = reader.bool();
  data.ParalyzationPoint = reader.u32();
  data.DecreasePoint = reader.u32();
  data.ParalyzationMaxPoint = reader.u32();
  data.NoHitCheckTime = reader.u32();
  data.HitCheckTime = reader.u32();
  data.ObjectId = reader.u64();
  return data;
}
export function write(writer: Write, data: ParalyzationStateNotify | PKTParalyzationStateNotify) {
  writer.bool(data.Enable);
  writer.u32(data.ParalyzationPoint);
  writer.u32(data.DecreasePoint);
  writer.u32(data.ParalyzationMaxPoint);
  writer.u32(data.NoHitCheckTime);
  writer.u32(data.HitCheckTime);
  writer.u64(data.ObjectId);
}

export const logId = 16;
export const name = "ParalyzationStateNotify";
