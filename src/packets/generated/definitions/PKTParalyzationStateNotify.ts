// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  noHitCheckTime: number;
  objectId: bigint;
  decreasePoint: number;
  enable: boolean;
  paralyzationMaxPoint: number;
  hitCheckTime: number;
  paralyzationPoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.noHitCheckTime = reader.u32();
  reader.skip(2);
  data.objectId = reader.u64();
  data.decreasePoint = reader.u32();
  data.enable = reader.bool();
  data.paralyzationMaxPoint = reader.u32();
  data.hitCheckTime = reader.u32();
  data.paralyzationPoint = reader.u32();
  reader.skip(1);
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 52046;
