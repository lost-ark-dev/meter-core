import type { Read, Write } from "../../stream";
export type StatusEffectDurationNotify = {
  effectInstanceId: number;
  targetId: bigint;
  expirationTick: bigint;
};
export function read(reader: Read, version: number) {
  const data = {} as StatusEffectDurationNotify;
  data.effectInstanceId = reader.u32();
  data.targetId = reader.u64();
  data.expirationTick = reader.u64();
  return data;
}
export function write(writer: Write, data: StatusEffectDurationNotify) {
  writer.u32(data.effectInstanceId);
  writer.u64(data.targetId);
  writer.u64(data.expirationTick);
}

export const name = "StatusEffectDurationNotify";
