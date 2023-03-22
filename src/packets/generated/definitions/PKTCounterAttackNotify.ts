// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTCounterAttackNotify = {
  TargetId: bigint;
  SourceId: bigint;
  Type: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTCounterAttackNotify;
  reader.skip(1);
  data.TargetId = reader.u64();
  data.SourceId = reader.u64();
  data.Type = reader.u32();
  return data;
}
export const name = "PKTCounterAttackNotify";
export const opcode = 25211;
