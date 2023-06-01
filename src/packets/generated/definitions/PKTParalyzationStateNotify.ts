// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  objectId: bigint;
  noHitCheckTime: number;
  paralyzationMaxPoint: number;
  paralyzationPoint: number;
  hitCheckTime: number;
  enable: boolean;
  decreasePoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.objectId = reader.u64();
  data.noHitCheckTime = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  data.paralyzationPoint = reader.u32();
  data.hitCheckTime = reader.u32();
  data.enable = reader.bool();
  reader.skip(1);
  data.decreasePoint = reader.u32();
  reader.skip(1);
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 13954;
