// Auto Generated, do not edit.
import { Read } from "../../stream";
export type PKTBlockSkillStateNotify = {
  paralyzationMaxPoint: number;
  type: number;
  objectId: bigint;
  paralyzationPoint: number;
};
export function read(buf: Buffer) {
  const reader = new Read(buf);
  const data = {} as PKTBlockSkillStateNotify;
  data.paralyzationMaxPoint = reader.u32();
  data.type = reader.u8();
  data.objectId = reader.u64();
  data.paralyzationPoint = reader.u32();
  reader.skip(1);
  return data;
}
export const name = "PKTBlockSkillStateNotify";
export const opcode = 56034;
