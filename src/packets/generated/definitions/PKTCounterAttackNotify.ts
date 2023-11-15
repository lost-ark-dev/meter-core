// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTCounterAttackNotify = {
  targetId: bigint;
  sourceId: bigint;
  type: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTCounterAttackNotify;
  data.targetId = reader.u64();
  data.sourceId = reader.u64();
  reader.skip(2);
  data.type = reader.u32();
  return data;
}
export const name = "PKTCounterAttackNotify";
export const opcode = 59268;
