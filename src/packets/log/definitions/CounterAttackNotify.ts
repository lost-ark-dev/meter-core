import type { Read, Write } from "../../stream";
import type { PKTCounterAttackNotify } from "../../generated/types";
export type CounterAttackNotify = {
  SourceId: bigint;
  TargetId: bigint;
  Type: number;
};
export function read(reader: Read, version: number) {
  const data = {} as CounterAttackNotify;
  data.SourceId = reader.u64();
  data.TargetId = reader.u64();
  data.Type = reader.u32();
  return data;
}
export function write(writer: Write, data: CounterAttackNotify | PKTCounterAttackNotify) {
  writer.u64(data.SourceId);
  writer.u64(data.TargetId);
  writer.u32(data.Type);
}

export const logId = 5;
export const name = "CounterAttackNotify";
