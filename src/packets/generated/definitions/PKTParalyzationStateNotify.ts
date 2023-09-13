// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  hitCheckTime: number;
  paralyzationPoint: number;
  decreasePoint: number;
  enable: boolean;
  paralyzationMaxPoint: number;
  noHitCheckTime: number;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  reader.skip(1);
  data.hitCheckTime = reader.u32();
  data.paralyzationPoint = reader.u32();
  reader.skip(1);
  data.decreasePoint = reader.u32();
  data.enable = reader.bool();
  data.paralyzationMaxPoint = reader.u32();
  data.noHitCheckTime = reader.u32();
  reader.skip(1);
  data.objectId = reader.u64();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 43874;
