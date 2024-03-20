// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  paralyzationMaxPoint: number;
  enable: boolean;
  hitCheckTime: number;
  paralyzationPoint: number;
  objectId: bigint;
  decreasePoint: number;
  noHitCheckTime: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.paralyzationMaxPoint = reader.u32();
  data.enable = reader.bool();
  data.hitCheckTime = reader.u32();
  data.paralyzationPoint = reader.u32();
  data.objectId = reader.u64();
  reader.skip(1);
  data.decreasePoint = reader.u32();
  reader.skip(1);
  data.noHitCheckTime = reader.u32();
  reader.skip(1);
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 55896;
