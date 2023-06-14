// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectDurationNotify = {
  targetId: bigint;
  effectInstanceId: number;
  expirationTick: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectDurationNotify;
  data.targetId = reader.u64();
  data.effectInstanceId = reader.u32();
  reader.skip(1);
  data.expirationTick = reader.u64();
  reader.skip(2);
  return data;
}
export const name = "PKTStatusEffectDurationNotify";
export const opcode = 23329;
