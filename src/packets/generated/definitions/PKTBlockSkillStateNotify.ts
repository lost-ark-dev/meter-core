// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  ObjectId: bigint;
  ParalyzationPoint: number;
  Type: number;
  ParalyzationMaxPoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  data.ObjectId = reader.u64();
  data.ParalyzationPoint = reader.u32();
  reader.skip(1);
  data.Type = reader.u8();
  data.ParalyzationMaxPoint = reader.u32();
  reader.skip(2);
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 15059;
