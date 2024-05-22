// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  type: number;
  paralyzationPoint: number;
  paralyzationMaxPoint: number;
  objectId: bigint;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  data.type = reader.u8();
  data.paralyzationPoint = reader.u32();
  data.paralyzationMaxPoint = reader.u32();
  data.objectId = reader.u64();
  reader.skip(2);
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 19778;
