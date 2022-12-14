// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  NoHitCheckTime: number;
  ParalyzationMaxPoint: number;
  DecreasePoint: number;
  Enable: boolean;
  ParalyzationPoint: number;
  HitCheckTime: number;
  ObjectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.NoHitCheckTime = reader.u32();
  reader.skip(1);
  data.ParalyzationMaxPoint = reader.u32();
  data.DecreasePoint = reader.u32();
  data.Enable = reader.bool();
  data.ParalyzationPoint = reader.u32();
  data.HitCheckTime = reader.u32();
  data.ObjectId = reader.u64();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 1696;
