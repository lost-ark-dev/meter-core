// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  ParalyzationMaxPoint: number;
  Type: number;
  ObjectId: bigint;
  ParalyzationPoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  reader.skip(1);
  data.ParalyzationMaxPoint = reader.u32();
  data.Type = reader.u8();
  data.ObjectId = reader.u64();
  reader.skip(1);
  data.ParalyzationPoint = reader.u32();
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 33660;
