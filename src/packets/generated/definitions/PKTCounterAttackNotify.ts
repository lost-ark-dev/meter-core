// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTCounterAttackNotify = {
  SourceId: bigint;
  TargetId: bigint;
  Type: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTCounterAttackNotify;
  reader.skip(1);
  data.SourceId = reader.u64();
  data.TargetId = reader.u64();
  reader.skip(1);
  data.Type = reader.u32();
  reader.skip(1);
  return data;
}
export const name = "PKTCounterAttackNotify";
export const opcode = 20022;
