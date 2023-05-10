// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  ObjectId: bigint;
  NoHitCheckTime: number;
  ParalyzationMaxPoint: number;
  ParalyzationPoint: number;
  HitCheckTime: number;
  Enable: boolean;
  DecreasePoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  data.ObjectId = reader.u64();
  data.NoHitCheckTime = reader.u32();
  data.ParalyzationMaxPoint = reader.u32();
  data.ParalyzationPoint = reader.u32();
  data.HitCheckTime = reader.u32();
  data.Enable = reader.bool();
  reader.skip(1);
  data.DecreasePoint = reader.u32();
  reader.skip(1);
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 13954;
