// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectDurationNotify = {
  EffectInstanceId: number;
  TargetId: bigint;
  ExpirationTick: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectDurationNotify;
  reader.skip(1);
  data.EffectInstanceId = reader.u32();
  data.TargetId = reader.u64();
  data.ExpirationTick = reader.u64();
  return data;
}
export const name = "PKTStatusEffectDurationNotify";
export const opcode = 46140;
