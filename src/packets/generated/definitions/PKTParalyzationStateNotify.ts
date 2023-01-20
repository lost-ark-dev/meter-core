// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTParalyzationStateNotify = {
  Enable: boolean;
  ParalyzationMaxPoint: number;
  DecreasePoint: number;
  HitCheckTime: number;
  ParalyzationPoint: number;
  ObjectId: bigint;
  NoHitCheckTime: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTParalyzationStateNotify;
  reader.skip(1);
  data.Enable = reader.bool();
  data.ParalyzationMaxPoint = reader.u32();
  reader.skip(1);
  data.DecreasePoint = reader.u32();
  data.HitCheckTime = reader.u32();
  data.ParalyzationPoint = reader.u32();
  data.ObjectId = reader.u64();
  reader.skip(1);
  data.NoHitCheckTime = reader.u32();
  return data;
}
export const name = "PKTParalyzationStateNotify";
export const opcode = 10632;
