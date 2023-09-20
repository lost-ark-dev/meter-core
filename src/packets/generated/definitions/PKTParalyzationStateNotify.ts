// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  paralyzationPoint: number;
  objectId: bigint;
  decreasePoint: number;
  hitCheckTime: number;
  noHitCheckTime: number;
  paralyzationMaxPoint: number;
  enable: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.paralyzationPoint = reader.u32();
  data.objectId = reader.u64();
  data.decreasePoint = reader.u32();
  data.hitCheckTime = reader.u32();
  data.noHitCheckTime = reader.u32();
  reader.skip(3);
  data.paralyzationMaxPoint = reader.u32();
  data.enable = reader.bool();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 23544;
