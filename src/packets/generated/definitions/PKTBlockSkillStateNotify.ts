// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  ParalyzationPoint: number;
  ParalyzationMaxPoint: number;
  Type: number;
  ObjectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  reader.skip(2);
  data.ParalyzationPoint = reader.u32();
  data.ParalyzationMaxPoint = reader.u32();
  data.Type = reader.u8();
  data.ObjectId = reader.u64();
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 14430;
