// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTStatusEffectDurationNotify = {
  expirationTick: bigint;
  effectInstanceId: number;
  targetId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTStatusEffectDurationNotify;
  data.expirationTick = reader.u64();
  reader.skip(3);
  data.effectInstanceId = reader.u32();
  data.targetId = reader.u64();
  return data;
}
export const name = "PKTStatusEffectDurationNotify";
export const opcode = 4569;
