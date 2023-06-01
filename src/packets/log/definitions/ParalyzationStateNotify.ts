import type { Read, Write } from "../../stream";
import type { PKTParalyzationStateNotify } from "../../generated/types";
export type ParalyzationStateNotify = {
  enable: boolean;
  paralyzationPoint: number;
  decreasePoint: number;
  paralyzationMaxPoint: number;
  noHitCheckTime: number;
  hitCheckTime: number;
  objectId: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as ParalyzationStateNotify;
  data.enable = reader.bool();
  data.paralyzationPoint = reader.u32();
  data.decreasePoint = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  data.noHitCheckTime = reader.u32();
  data.hitCheckTime = reader.u32();
  data.objectId = reader.u64();
  return data;
}
export function write(writer: Write, data: ParalyzationStateNotify | PKTParalyzationStateNotify) {
  writer.bool(data.enable);
  writer.u32(data.paralyzationPoint);
  writer.u32(data.decreasePoint);
  writer.u32(data.paralyzationMaxPoint);
  writer.u32(data.noHitCheckTime);
  writer.u32(data.hitCheckTime);
  writer.u64(data.objectId);
}

export const name = "ParalyzationStateNotify";
