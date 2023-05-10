// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectDurationNotify = {
  TargetId: bigint;
  ExpirationTick: bigint;
  EffectInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectDurationNotify;
  reader.skip(1);
  data.TargetId = reader.u64();
  reader.skip(1);
  data.ExpirationTick = reader.u64();
  reader.skip(1);
  data.EffectInstanceId = reader.u32();
  return data;
}
export const name = "PKTStatusEffectDurationNotify";
export const opcode = 43493;
