// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  decreasePoint: number;
  hitCheckTime: number;
  noHitCheckTime: number;
  objectId: bigint;
  paralyzationMaxPoint: number;
  enable: boolean;
  paralyzationPoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.decreasePoint = reader.u32();
  data.hitCheckTime = reader.u32();
  data.noHitCheckTime = reader.u32();
  reader.skip(1);
  data.objectId = reader.u64();
  data.paralyzationMaxPoint = reader.u32();
  reader.skip(1);
  data.enable = reader.bool();
  data.paralyzationPoint = reader.u32();
  reader.skip(1);
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 33543;
