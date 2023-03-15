// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  HitCheckTime: number;
  ParalyzationMaxPoint: number;
  Enable: boolean;
  DecreasePoint: number;
  ObjectId: bigint;
  ParalyzationPoint: number;
  NoHitCheckTime: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.HitCheckTime = reader.u32();
  reader.skip(1);
  data.ParalyzationMaxPoint = reader.u32();
  data.Enable = reader.bool();
  data.DecreasePoint = reader.u32();
  reader.skip(1);
  data.ObjectId = reader.u64();
  data.ParalyzationPoint = reader.u32();
  data.NoHitCheckTime = reader.u32();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 34438;
