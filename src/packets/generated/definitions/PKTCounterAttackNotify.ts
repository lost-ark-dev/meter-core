// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTCounterAttackNotify = {
  type: number;
  sourceId: bigint;
  targetId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTCounterAttackNotify;
  data.type = reader.u32();
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  reader.skip(1);
  return data;
}
export const name = "PKTCounterAttackNotify";
export const opcode = 24539;
