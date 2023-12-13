// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  enable: boolean;
  paralyzationMaxPoint: number;
  paralyzationPoint: number;
  decreasePoint: number;
  noHitCheckTime: number;
  objectId: bigint;
  hitCheckTime: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.enable = reader.bool();
  data.paralyzationMaxPoint = reader.u32();
  data.paralyzationPoint = reader.u32();
  reader.skip(1);
  data.decreasePoint = reader.u32();
  data.noHitCheckTime = reader.u32();
  data.objectId = reader.u64();
  reader.skip(1);
  data.hitCheckTime = reader.u32();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 51798;
