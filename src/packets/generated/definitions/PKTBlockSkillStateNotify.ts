// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  objectId: bigint;
  paralyzationMaxPoint: number;
  paralyzationPoint: number;
  type: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  data.objectId = reader.u64();
  data.paralyzationMaxPoint = reader.u32();
  reader.skip(1);
  data.paralyzationPoint = reader.u32();
  data.type = reader.u8();
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 43294;
