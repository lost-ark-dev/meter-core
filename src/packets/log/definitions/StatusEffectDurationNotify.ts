import type { Read, Write } from "../../stream";
import type { PKTStatusEffectDurationNotify } from "../../generated/types";
export type StatusEffectDurationNotify = {
  EffectInstanceId: number;
  TargetId: bigint;
  ExpirationTick: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as StatusEffectDurationNotify;
  data.EffectInstanceId = reader.u32();
  data.TargetId = reader.u64();
  data.ExpirationTick = reader.u64();
  return data;
}
export function write(writer: Write, data: StatusEffectDurationNotify | PKTStatusEffectDurationNotify) {
  writer.u32(data.EffectInstanceId);
  writer.u64(data.TargetId);
  writer.u64(data.ExpirationTick);
}

export const logId = 36;
export const name = "StatusEffectDurationNotify";
