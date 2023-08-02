// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  paralyzationPoint: number;
  decreasePoint: number;
  noHitCheckTime: number;
  objectId: bigint;
  hitCheckTime: number;
  paralyzationMaxPoint: number;
  enable: boolean;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  reader.skip(1);
  data.paralyzationPoint = reader.u32();
  data.decreasePoint = reader.u32();
  reader.skip(1);
  data.noHitCheckTime = reader.u32();
  data.objectId = reader.u64();
  data.hitCheckTime = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  reader.skip(1);
  data.enable = reader.bool();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 36057;
