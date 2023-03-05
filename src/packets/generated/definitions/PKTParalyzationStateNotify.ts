// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  ObjectId: bigint;
  DecreasePoint: number;
  ParalyzationPoint: number;
  HitCheckTime: number;
  NoHitCheckTime: number;
  Enable: boolean;
  ParalyzationMaxPoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.ObjectId = reader.u64();
  reader.skip(2);
  data.DecreasePoint = reader.u32();
  data.ParalyzationPoint = reader.u32();
  data.HitCheckTime = reader.u32();
  data.NoHitCheckTime = reader.u32();
  data.Enable = reader.bool();
  reader.skip(1);
  data.ParalyzationMaxPoint = reader.u32();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 1165;
