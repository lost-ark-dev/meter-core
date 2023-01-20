// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  ObjectId: bigint;
  Type: number;
  ParalyzationMaxPoint: number;
  ParalyzationPoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  data.ObjectId = reader.u64();
  data.Type = reader.u8();
  data.ParalyzationMaxPoint = reader.u32();
  reader.skip(1);
  data.ParalyzationPoint = reader.u32();
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 23429;
