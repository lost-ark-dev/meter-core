// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  Type: number;
  ParalyzationPoint: number;
  ObjectId: bigint;
  ParalyzationMaxPoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  data.Type = reader.u8();
  data.ParalyzationPoint = reader.u32();
  reader.skip(1);
  data.ObjectId = reader.u64();
  data.ParalyzationMaxPoint = reader.u32();
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 44742;
