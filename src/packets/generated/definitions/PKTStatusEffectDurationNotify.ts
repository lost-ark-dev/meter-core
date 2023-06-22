// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectDurationNotify = {
  expirationTick: bigint;
  targetId: bigint;
  effectInstanceId: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectDurationNotify;
  reader.skip(2);
  data.expirationTick = reader.u64();
  data.targetId = reader.u64();
  data.effectInstanceId = reader.u32();
  return data;
}
export const name = "PKTStatusEffectDurationNotify";
export const opcode = 22443;
