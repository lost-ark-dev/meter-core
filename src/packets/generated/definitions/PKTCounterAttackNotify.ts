// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTCounterAttackNotify = {
  sourceId: bigint;
  targetId: bigint;
  type: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTCounterAttackNotify;
  data.sourceId = reader.u64();
  reader.skip(1);
  data.targetId = reader.u64();
  data.type = reader.u32();
  return data;
}
export const name = "PKTCounterAttackNotify";
export const opcode = 40526;
