import type { Read, Write } from "../../stream";
import type { PKTCounterAttackNotify } from "../../generated/types";
export type CounterAttackNotify = {
  sourceId: bigint;
  targetId: bigint;
  type: number;
};
export function read(reader: Read, version: number) {
  const data = {} as CounterAttackNotify;
  data.sourceId = reader.u64();
  data.targetId = reader.u64();
  data.type = reader.u32();
  return data;
}
export function write(writer: Write, data: CounterAttackNotify | PKTCounterAttackNotify) {
  writer.u64(data.sourceId);
  writer.u64(data.targetId);
  writer.u32(data.type);
}

export const name = "CounterAttackNotify";
