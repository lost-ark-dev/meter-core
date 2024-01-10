// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  hitCheckTime: number;
  enable: boolean;
  objectId: bigint;
  noHitCheckTime: number;
  paralyzationMaxPoint: number;
  paralyzationPoint: number;
  decreasePoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.hitCheckTime = reader.u32();
  data.enable = reader.bool();
  data.objectId = reader.u64();
  data.noHitCheckTime = reader.u32();
  reader.skip(1);
  data.paralyzationMaxPoint = reader.u32();
  data.paralyzationPoint = reader.u32();
  data.decreasePoint = reader.u32();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 11791;
