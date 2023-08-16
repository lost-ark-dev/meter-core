// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  decreasePoint: number;
  enable: boolean;
  paralyzationPoint: number;
  paralyzationMaxPoint: number;
  hitCheckTime: number;
  objectId: bigint;
  noHitCheckTime: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.decreasePoint = reader.u32();
  data.enable = reader.bool();
  reader.skip(1);
  data.paralyzationPoint = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  data.hitCheckTime = reader.u32();
  data.objectId = reader.u64();
  reader.skip(1);
  data.noHitCheckTime = reader.u32();
  reader.skip(1);
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 31657;
