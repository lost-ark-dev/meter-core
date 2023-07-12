// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  noHitCheckTime: number;
  objectId: bigint;
  decreasePoint: number;
  paralyzationPoint: number;
  paralyzationMaxPoint: number;
  hitCheckTime: number;
  enable: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  reader.skip(1);
  data.noHitCheckTime = reader.u32();
  data.objectId = reader.u64();
  reader.skip(2);
  data.decreasePoint = reader.u32();
  data.paralyzationPoint = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  data.hitCheckTime = reader.u32();
  data.enable = reader.bool();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 56853;
