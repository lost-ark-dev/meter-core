// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTCounterAttackNotify = {
  sourceId: bigint;
  type: number;
  targetId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTCounterAttackNotify;
  reader.skip(1);
  data.sourceId = reader.u64();
  data.type = reader.u32();
  data.targetId = reader.u64();
  reader.skip(1);
  return data;
}
export const name = "PKTCounterAttackNotify";
export const opcode = 3893;
