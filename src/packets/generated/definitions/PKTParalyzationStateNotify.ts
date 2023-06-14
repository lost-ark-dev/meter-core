// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  paralyzationPoint: number;
  hitCheckTime: number;
  paralyzationMaxPoint: number;
  noHitCheckTime: number;
  decreasePoint: number;
  objectId: bigint;
  enable: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.paralyzationPoint = reader.u32();
  data.hitCheckTime = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  reader.skip(1);
  data.noHitCheckTime = reader.u32();
  data.decreasePoint = reader.u32();
  reader.skip(2);
  data.objectId = reader.u64();
  data.enable = reader.bool();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 43721;
