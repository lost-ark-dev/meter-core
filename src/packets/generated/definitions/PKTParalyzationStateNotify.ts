// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  objectId: bigint;
  hitCheckTime: number;
  noHitCheckTime: number;
  decreasePoint: number;
  paralyzationMaxPoint: number;
  enable: boolean;
  paralyzationPoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.objectId = reader.u64();
  data.hitCheckTime = reader.u32();
  reader.skip(1);
  data.noHitCheckTime = reader.u32();
  data.decreasePoint = reader.u32();
  reader.skip(1);
  data.paralyzationMaxPoint = reader.u32();
  data.enable = reader.bool();
  data.paralyzationPoint = reader.u32();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 31657;
