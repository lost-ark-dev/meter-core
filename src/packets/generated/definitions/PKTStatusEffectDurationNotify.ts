// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectDurationNotify = {
  targetId: bigint;
  expirationTick: bigint;
  effectInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectDurationNotify;
  reader.skip(3);
  data.targetId = reader.u64();
  data.expirationTick = reader.u64();
  data.effectInstanceId = reader.u32();
  return data;
}
export const name = "PKTStatusEffectDurationNotify";
export const opcode = 53072;
